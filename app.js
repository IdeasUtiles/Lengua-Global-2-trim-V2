const LS_KEY = "pau_lengua_stats_v1";
const SESH_KEY = "pau_lengua_last_session_v1";

// --- Debug-friendly error surface (shows errors on the page) ---
function showFatal(msg){
  try{
    const app = document.querySelector("#app");
    if(!app) return;
    app.innerHTML = "";
    const box = document.createElement("div");
    box.className = "card";
    box.innerHTML = `<h2 style="margin:0 0 8px 0">⚠️ Error</h2>
      <div class="note" style="white-space:pre-wrap">${msg}</div>
      <div class="note" style="margin-top:10px">Pista rápida: revisa que <b>app.js</b> y <b>questions.js</b> estén en la <b>raíz</b> del repo y carguen con estado 200 en Network.</div>`;
    app.appendChild(box);
  }catch(e){}
}
window.addEventListener("error",(e)=>showFatal(e.message || String(e.error || e)));
window.addEventListener("unhandledrejection",(e)=>showFatal(e.reason ? String(e.reason) : "Promise rejection"));
// --------------------------------------------------------------

function loadStats(){
  try{
    return JSON.parse(localStorage.getItem(LS_KEY)) || {byId:{}, sessions:[]};
  }catch(e){ return {byId:{}, sessions:[]}; }
}
function saveStats(stats){ localStorage.setItem(LS_KEY, JSON.stringify(stats)); }
function nowISO(){ return new Date().toISOString(); }

function pickQuestions(bank, stats, n){
  // Weighted sampling: prefer questions with low accuracy / few attempts.
  const items = bank.map(q=>{
    const r = stats.byId[q.id] || {a:0,c:0};
    const attempts = r.a || 0;
    const correct = r.c || 0;
    const acc = attempts ? (correct/attempts) : 0;
    const weight = (attempts===0 ? 3.0 : 1.2) + (1-acc)*2.5 + Math.min(2, 1/Math.sqrt(Math.max(1,attempts)));
    return {q, w: weight};
  });
  // roulette wheel without replacement
  const chosen = [];
  const pool = items.slice();
  for(let k=0; k<n && pool.length>0; k++){
    const total = pool.reduce((s,x)=>s+x.w,0);
    let r = Math.random()*total;
    let idx = 0;
    for(; idx<pool.length; idx++){
      r -= pool[idx].w;
      if(r<=0) break;
    }
    const pick = pool.splice(Math.min(idx,pool.length-1),1)[0];
    chosen.push(pick.q);
  }
  return chosen;
}

function groupByTema(bank){
  const map = new Map();
  for(const q of bank){
    if(!map.has(q.tema)) map.set(q.tema, []);
    map.get(q.tema).push(q);
  }
  return map;
}

function el(tag, attrs={}, children=[]){
  const e = document.createElement(tag);
  for(const [k,v] of Object.entries(attrs)){
    if(k==="class") e.className = v;
    else if(k==="html") e.innerHTML = v;
    else e.setAttribute(k,v);
  }
  for(const c of children){
    if(typeof c==="string") e.appendChild(document.createTextNode(c));
    else if(c) e.appendChild(c);
  }
  return e;
}

let STATE = {
  bank: window.QUESTION_BANK || [],
  settings: {count: 16, mode:"mix"},
  session: null,
};

function renderHome(){
  const stats = loadStats();
  const byTema = groupByTema(STATE.bank);

  const totalAttempts = Object.values(stats.byId).reduce((s,x)=>s+(x.a||0),0);
  const totalCorrect  = Object.values(stats.byId).reduce((s,x)=>s+(x.c||0),0);
  const acc = totalAttempts ? Math.round(100*totalCorrect/totalAttempts) : 0;

  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(el("div",{class:"card"},[
    el("div",{class:"row"},[
      el("div",{},[
        el("div",{class:"pill"},["PAU Lengua · 2º Bach · Juego rápido (sin internet)"]),
        el("h2",{style:"margin:10px 0 6px 0;"},["Modo 1 hora: repaso + preguntas abiertas"]),
        el("div",{class:"note"},["Las preguntas salen de los apuntes que has subido: Realismo/Naturalismo, Modernismo/98, Novecentismo, Vanguardias, Generación del 27."]),
      ]),
    ]),
    el("hr"),
    el("div",{class:"grid2"},[
      el("div",{},[
        el("div",{class:"row"},[
          el("span",{class:"pill"},[`Acierto global: ${acc}%`]),
          el("span",{class:"pill"},[`Intentos: ${totalAttempts}`]),
          el("span",{class:"pill"},[`Banco: ${STATE.bank.length} preguntas`]),
        ]),
        el("div",{style:"margin-top:10px"},[
          el("label",{class:"small",for:"count"},["¿Cuántas preguntas por sesión? (recomendado 16–22)"]),
          el("div",{class:"row",style:"margin-top:8px"},[
            el("input",{id:"count",type:"range",min:"10",max:"28",value:String(STATE.settings.count)}),
            el("span",{class:"pill",id:"countVal"},[String(STATE.settings.count)])
          ]),
          el("div",{class:"row",style:"margin-top:10px"},[
            el("button",{class:"btn primary",id:"startMix"},["▶ Empezar sesión (mix)"]),
            el("button",{class:"btn",id:"startOpen"},["🗣️ Solo abiertas (entrenar explicación)"]),
            el("button",{class:"btn",id:"startMC"},["⚡ Solo test (memoria rápida)"]),
          ]),
          el("div",{class:"note",style:"margin-top:8px"},[
            "Consejo: en abiertas, escribe una mini-respuesta y luego marca ",
            el("kbd",{},["Me salió"]),
            " o ",
            el("kbd",{},["No todavía"]),
            " tras comparar con el modelo."
          ])
        ])
      ]),
      el("div",{},[
        el("div",{class:"row"},[
          el("button",{class:"btn",id:"statsBtn"},["📊 Ver estadísticas"]),
          el("button",{class:"btn",id:"resetBtn"},["🧹 Reiniciar stats"]),
        ]),
        el("div",{style:"margin-top:10px"},[
          el("div",{class:"small"},["Temario (cronológico):"]),
          ...Array.from(byTema.keys()).map((t,i)=>el("div",{class:"pill",style:"margin-top:8px"},[`${i+1}. ${t} (${byTema.get(t).length})`]))
        ])
      ])
    ])
  ]));

  document.querySelector("#count").addEventListener("input",(e)=>{
    STATE.settings.count = Number(e.target.value);
    document.querySelector("#countVal").textContent = String(STATE.settings.count);
  });

  document.querySelector("#startMix").onclick = ()=>startSession("mix");
  document.querySelector("#startOpen").onclick = ()=>startSession("open");
  document.querySelector("#startMC").onclick = ()=>startSession("mc");
  document.querySelector("#statsBtn").onclick = renderStats;
  document.querySelector("#resetBtn").onclick = ()=>{
    if(confirm("¿Seguro? Se borran estadísticas y sesiones.")){
      localStorage.removeItem(LS_KEY);
      localStorage.removeItem(SESH_KEY);
      renderHome();
    }
  };
}

function startSession(mode){
  const stats = loadStats();
  const bank = STATE.bank.filter(q=>{
    if(mode==="open") return q.tipo==="open";
    if(mode==="mc") return q.tipo==="mc";
    return true;
  });
  const n = Math.min(STATE.settings.count, bank.length);
  const selected = pickQuestions(bank, stats, n);
  STATE.session = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    startedAt: nowISO(),
    mode, idx:0,
    items: selected.map(q=>({id:q.id, ok:null, answer:null})),
  };
  localStorage.setItem(SESH_KEY, JSON.stringify(STATE.session));
  renderQuestion();
}

function currentQuestion(){
  const qid = STATE.session.items[STATE.session.idx].id;
  return STATE.bank.find(q=>q.id===qid);
}

function renderQuestion(){
  const app = document.querySelector("#app");
  const q = currentQuestion();
  const sess = STATE.session;
  const item = sess.items[sess.idx];
  const pos = sess.idx+1;
  const total = sess.items.length;

  app.innerHTML = "";
  const top = el("div",{class:"card"},[
    el("div",{class:"row"},[
      el("span",{class:"pill"},[`Sesión: ${pos}/${total}`]),
      el("span",{class:"pill"},[`Tema: ${q.tema}`]),
      el("span",{class:"pill"},[`Tipo: ${q.tipo==="mc" ? "Test" : "Abierta"}`]),
    ]),
    el("div",{style:"margin-top:10px"},[
      el("p",{class:"q"},[q.pregunta])
    ])
  ]);

  const body = el("div",{class:"card"},[]);

  if(q.tipo==="mc"){
    // Shuffle options PER QUESTION and keep them stable while navigating.
    // We store an order of original indices in the session item: item.optOrder = [2,0,1,3], etc.
    if(!item.optOrder || item.optOrder.length !== q.opciones.length){
      const idxs = Array.from({length:q.opciones.length}, (_,i)=>i);
      for(let i=idxs.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
      }
      item.optOrder = idxs;
      localStorage.setItem(SESH_KEY, JSON.stringify(sess));
    }

    const form = el("div",{},[]);
    item.optOrder.forEach((origIdx, displayIdx)=>{
      const opt = q.opciones[origIdx];
      const row = el("div",{class:"opt"},[
        el("input",{type:"radio",name:"opt",value:String(displayIdx)}),
        el("div",{},[opt])
      ]);
      row.addEventListener("click",()=>{
        row.querySelector("input").checked = true;
      });
      form.appendChild(row);
    });

    const btn = el("button",{class:"btn primary"},["Comprobar"]);
    const fb = el("div",{style:"margin-top:10px"},[]);

    btn.onclick = ()=>{
      const checked = form.querySelector("input[name=opt]:checked");
      if(!checked){ alert("Elige una opción."); return; }

      const displayIdx = Number(checked.value);
      const chosenOrigIdx = item.optOrder[displayIdx];
      const ok = chosenOrigIdx === q.correcta;

      item.ok = ok;
      item.answer = displayIdx;

      fb.innerHTML="";
      fb.appendChild(el("div",{class:"pill",style:`border-color:${ok?"rgba(74,222,128,.4)":"rgba(251,113,133,.4)"};color:${ok?"#bff7d0":"#ffd0d7"}`},[
        ok ? "✅ Correcto" : `❌ No. La correcta era: ${q.opciones[q.correcta]}`
      ]));
      fb.appendChild(el("div",{class:"note",style:"margin-top:8px"},[q.exp || ""]));

      updateStats(q.id, ok);
      localStorage.setItem(SESH_KEY, JSON.stringify(sess));
      renderNav(app);
    };

    body.appendChild(form);
    body.appendChild(el("div",{class:"row",style:"margin-top:10px"},[btn]));
    body.appendChild(fb);
  }else{
    const ta = el("textarea",{placeholder:"Escribe tu respuesta (2-8 líneas). Luego compárala con el modelo."},[]);
    const model = el("div",{style:"margin-top:10px"},[
      el("div",{class:"small"},["Respuesta modelo (para comparar):"]),
      el("div",{class:"card",style:"background:rgba(0,0,0,.10);margin-top:8px"},[
        el("div",{class:"note"},[q.respuesta_modelo || ""])
      ])
    ]);
    const fb = el("div",{style:"margin-top:10px"},[
      el("div",{class:"note"},[q.exp || ""])
    ]);

    const got = el("button",{class:"btn good"},["✅ Me salió"]);
    const nogo = el("button",{class:"btn bad"},["❌ No todavía"]);
    got.onclick = ()=>{
      item.ok = true;
      item.answer = ta.value || "";
      updateStats(q.id, true);
      localStorage.setItem(SESH_KEY, JSON.stringify(sess));
      renderNav(app);
    };
    nogo.onclick = ()=>{
      item.ok = false;
      item.answer = ta.value || "";
      updateStats(q.id, false);
      localStorage.setItem(SESH_KEY, JSON.stringify(sess));
      renderNav(app);
    };

    body.appendChild(ta);
    body.appendChild(model);
    body.appendChild(el("div",{class:"row",style:"margin-top:10px"},[got,nogo]));
    body.appendChild(fb);
  }

  app.appendChild(top);
  app.appendChild(body);
}

function renderNav(app){
  // add nav card at bottom if not exists
  if(document.querySelector("#navCard")) return;
  const sess = STATE.session;
  const pos = sess.idx+1;
  const total = sess.items.length;

  const prev = el("button",{class:"btn",disabled: sess.idx===0 ? "true":null},["← Anterior"]);
  const next = el("button",{class:"btn primary"},[pos===total ? "Finalizar sesión" : "Siguiente →"]);
  const exit = el("button",{class:"btn"},["🏠 Inicio"]);

  prev.onclick = ()=>{
    if(sess.idx>0){ sess.idx--; localStorage.setItem(SESH_KEY, JSON.stringify(sess)); renderQuestion(); }
  };
  next.onclick = ()=>{
    if(pos===total){ finishSession(); }
    else { sess.idx++; localStorage.setItem(SESH_KEY, JSON.stringify(sess)); renderQuestion(); }
  };
  exit.onclick = ()=>{
    if(confirm("¿Salir al inicio? La sesión queda guardada, pero se pierde la pregunta actual si no has marcado resultado.")){
      renderHome();
    }
  };

  const nav = el("div",{class:"card",id:"navCard"},[
    el("div",{class:"row"},[
      prev, next, exit,
      el("span",{class:"pill"},[`Modo: ${sess.mode}`]),
    ])
  ]);
  app.appendChild(nav);
}

function updateStats(qid, ok){
  const stats = loadStats();
  const r = stats.byId[qid] || {a:0,c:0,last:null};
  r.a += 1;
  if(ok) r.c += 1;
  r.last = nowISO();
  stats.byId[qid] = r;
  saveStats(stats);
}

function finishSession(){
  const stats = loadStats();
  const sess = STATE.session;
  const done = sess.items.filter(x=>x.ok!==null);
  const ok = done.filter(x=>x.ok).length;
  const total = sess.items.length;

  stats.sessions.push({id:sess.id, startedAt:sess.startedAt, finishedAt: nowISO(), mode:sess.mode, ok, total});
  saveStats(stats);
  localStorage.removeItem(SESH_KEY);
  STATE.session = null;

  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(el("div",{class:"card"},[
    el("h2",{},["✅ Sesión terminada"]),
    el("div",{class:"row"},[
      el("span",{class:"pill"},[`Resultado: ${ok}/${total}`]),
      el("span",{class:"pill"},[`Acierto: ${total?Math.round(100*ok/total):0}%`]),
    ]),
    el("div",{class:"note",style:"margin-top:10px"},[
      "Tip: repite sesión en modo mix. El juego prioriza preguntas donde fallas o que has visto pocas veces."
    ]),
    el("div",{class:"row",style:"margin-top:12px"},[
      el("button",{class:"btn primary",onclick:"location.reload()"},["🏠 Volver al inicio"]),
      el("button",{class:"btn",id:"statsBtn2"},["📊 Ver estadísticas"]),
    ])
  ]));
  document.querySelector("#statsBtn2").onclick = renderStats;
}

function renderStats(){
  const stats = loadStats();
  const byTema = groupByTema(STATE.bank);
  const rows = [];

  for(const [tema, qs] of byTema.entries()){
    let a=0,c=0;
    for(const q of qs){
      const r = stats.byId[q.id] || {a:0,c:0};
      a += r.a||0; c += r.c||0;
    }
    rows.push({tema, a, c, acc: a?Math.round(100*c/a):0});
  }
  rows.sort((x,y)=>{
    // show weaker first
    const ax = x.a?x.c/x.a:0;
    const ay = y.a?y.c/y.a:0;
    return ax-ay;
  });

  const app = document.querySelector("#app");
  app.innerHTML = "";
  const totalA = Object.values(stats.byId).reduce((s,x)=>s+(x.a||0),0);
  const totalC = Object.values(stats.byId).reduce((s,x)=>s+(x.c||0),0);

  const tbl = el("table",{},[
    el("thead",{},[
      el("tr",{},[
        el("th",{},["Tema"]),
        el("th",{},["Intentos"]),
        el("th",{},["Aciertos"]),
        el("th",{},["%"]),
      ])
    ]),
    el("tbody",{}, rows.map(r=>el("tr",{},[
      el("td",{},[r.tema]),
      el("td",{},[String(r.a)]),
      el("td",{},[String(r.c)]),
      el("td",{},[String(r.acc)]),
    ])))
  ]);

  const weak = [...STATE.bank]
    .map(q=>{
      const r = stats.byId[q.id] || {a:0,c:0};
      const a=r.a||0, c=r.c||0;
      const acc = a?c/a:0;
      return {id:q.id, tema:q.tema, tipo:q.tipo, acc, a};
    })
    .sort((x,y)=>{
      const dx = (x.a===0? -1 : x.acc);
      const dy = (y.a===0? -1 : y.acc);
      return dx-dy;
    })
    .slice(0,8);

  app.appendChild(el("div",{class:"card"},[
    el("h2",{style:"margin:0 0 6px 0"},["📊 Estadísticas"]),
    el("div",{class:"row"},[
      el("span",{class:"pill"},[`Global: ${totalA?Math.round(100*totalC/totalA):0}%`]),
      el("span",{class:"pill"},[`Intentos: ${totalA}`]),
      el("span",{class:"pill"},[`Sesiones: ${stats.sessions.length}`]),
    ]),
    el("hr"),
    tbl,
    el("hr"),
    el("div",{class:"small"},["Preguntas más flojas / sin practicar (prioriza estas):"]),
    ...weak.map(w=>{
      const label = w.a===0 ? "Sin practicar" : `${Math.round(100*w.acc)}%`;
      return el("div",{class:"pill",style:"margin-top:8px"},[`${w.id} · ${w.tema} · ${w.tipo==="mc"?"test":"abierta"} · ${label}`]);
    }),
    el("div",{class:"row",style:"margin-top:12px"},[
      el("button",{class:"btn primary"},["🏠 Volver"]),
      el("button",{class:"btn",id:"exportBtn"},["⬇️ Exportar stats (JSON)"]),
    ])
  ]));

  app.querySelector(".btn.primary").onclick = renderHome;
  document.querySelector("#exportBtn").onclick = ()=>{
    const blob = new Blob([JSON.stringify(stats,null,2)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "pau_lengua_stats.json";
    a.click();
  };
}

function resumeIfSaved(){
  try{
    const raw = localStorage.getItem(SESH_KEY);
    if(!raw) return false;
    const sess = JSON.parse(raw);
    if(!sess || !sess.items) return false;
    STATE.session = sess;
    return true;
  }catch(e){ return false; }
}

window.addEventListener("load",()=>{
  try{ const app=document.querySelector('#app'); if(app) app.innerHTML = '<div class="card"><div class="note">Cargando…</div></div>'; }catch(e){}

  if(resumeIfSaved()){
    if(confirm("Tienes una sesión guardada. ¿Continuar?")){
      renderQuestion();
      return;
    }else{
      localStorage.removeItem(SESH_KEY);
    }
  }
  renderHome();
});

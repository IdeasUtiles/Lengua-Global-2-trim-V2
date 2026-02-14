# PAU Lengua · Juego rápido (sin programar)

## Qué es
Una mini app web estática (HTML/CSS/JS) para repasar:
- Realismo/Naturalismo
- Modernismo y Generación del 98
- Novecentismo/Generación del 14 y Juan Ramón Jiménez
- Vanguardias
- Generación del 27 y teatro lorquiano

Incluye:
- modo MIX / solo test / solo abiertas
- retroalimentación automática (explicaciones y respuesta modelo)
- aleatorio con prioridad a lo que falla
- estadísticas por tema + exportación JSON
- progreso guardado en el navegador (localStorage)

## Cómo usar (local)
Abre `index.html` con doble clic (Chrome/Edge/Firefox).

## Deploy sin Netlify (gratis)
### Opción A: GitHub Pages (recomendado)
1. Crea un repo en GitHub (p.ej. `pau-lengua-juego`)
2. Sube **todos los archivos** de esta carpeta
3. Settings → Pages → Deploy from branch → `main` / root
4. Te dará una URL pública

### Opción B: Cloudflare Pages
1. Conecta el repo
2. Build command: (vacío)
3. Output: `/` (root)
4. Deploy

## Editar o ampliar preguntas
Edita `questions.js` (es un JSON). Puedes duplicar preguntas y añadir más.

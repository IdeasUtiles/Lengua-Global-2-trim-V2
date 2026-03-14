window.LENGUA_BANK = [
  {
    "id": "COM-A1",
    "bloque": "COM",
    "tema": "Comentario de texto",
    "tipo": "open",
    "pregunta": "Tema y tipología: identifica el tema central y el tipo de texto del editorial sobre el edadismo.",
    "respuesta_modelo": "El texto trata sobre la discriminación por edad o edadismo y denuncia su normalización social y laboral. Es un texto periodístico de opinión, concretamente un editorial, de carácter argumentativo-expositivo.",
    "must_include": [
      "edadismo",
      "discriminación",
      "editorial",
      "periodístico",
      "opinión",
      "argumentativo"
    ],
    "exp": "En el simulacro, el bloque 1 pide comentar el texto indicando tema, rasgos lingüísticos y tipo textual.",
    "min_chars": 110
  },
  {
    "id": "COM-A2",
    "bloque": "COM",
    "tema": "Resumen",
    "tipo": "open",
    "pregunta": "Redacta un resumen de entre 40 y 50 palabras del texto sobre la felicidad.",
    "respuesta_modelo": "La autora sostiene que la felicidad no es una meta puntual, sino una búsqueda construida con esfuerzo, paciencia y perseverancia. Más que un estado permanente, consiste en una actitud vital orientada a lograr la mejor vida posible dentro de nuestras circunstancias.",
    "must_include": [
      "felicidad",
      "búsqueda",
      "esfuerzo",
      "paciencia",
      "perseverancia",
      "actitud"
    ],
    "exp": "El simulacro pide un resumen muy breve: lo importante es condensar sin copiar.",
    "min_chars": 90
  },
  {
    "id": "COM-A3",
    "bloque": "COM",
    "tema": "Argumentación",
    "tipo": "open",
    "pregunta": "Escribe un texto argumentativo breve manifestando acuerdo o desacuerdo con la idea de que la felicidad es una búsqueda.",
    "respuesta_modelo": "Estoy de acuerdo con que la felicidad es una búsqueda, porque no suele presentarse como un logro definitivo. Más bien depende de hábitos, decisiones y de la forma de interpretar lo que nos ocurre. Pensar así evita frustraciones y obliga a construir una vida con paciencia, voluntad y sentido crítico.",
    "must_include": [
      "acuerdo",
      "desacuerdo",
      "felicidad",
      "búsqueda",
      "postura",
      "argumento",
      "conclusión"
    ],
    "exp": "En la PAU de muestra se pide una argumentación breve con postura explícita.",
    "min_chars": 110
  },
  {
    "id": "COM-M1",
    "bloque": "COM",
    "tema": "Comentario de texto",
    "tipo": "mc",
    "pregunta": "En el bloque de Comunicación del simulacro, el resumen debe tener…",
    "opciones": [
      "20-30 palabras",
      "40-50 palabras",
      "80-100 palabras",
      "150-200 palabras"
    ],
    "correcta": 1,
    "exp": "El examen fija expresamente un resumen de entre 40 y 50 palabras."
  },
  {
    "id": "COM-M2",
    "bloque": "COM",
    "tema": "Comentario de texto",
    "tipo": "mc",
    "pregunta": "En el texto argumentativo del bloque 1, la extensión pedida es…",
    "opciones": [
      "40-50 palabras",
      "70-90 palabras",
      "100-150 palabras",
      "200-250 palabras"
    ],
    "correcta": 2,
    "exp": "El simulacro pide un texto argumentativo de entre 100 y 150 palabras."
  },
  {
    "id": "COM-MA1",
    "bloque": "COM",
    "tema": "Estructura del comentario",
    "tipo": "match",
    "pairs": [
      [
        "Tema",
        "idea central formulada con precisión"
      ],
      [
        "Resumen",
        "síntesis objetiva y breve"
      ],
      [
        "Texto argumentativo",
        "postura personal razonada"
      ]
    ],
    "exp": "El bloque 1 combina comentario, resumen y argumentación; cada tarea exige una estrategia distinta."
  },
  {
    "id": "LENG-A1",
    "bloque": "LENG",
    "tema": "Sintaxis",
    "tipo": "open",
    "pregunta": "Explica por qué es correcta 'El jugador que me ganó' y agramatical '*El jugador quien me ganó'.",
    "respuesta_modelo": "'Que' puede funcionar como pronombre relativo sin preposición para introducir una subordinada adjetiva especificativa. En cambio, 'quien' no resulta adecuado en esa construcción concreta, por eso la segunda secuencia se considera agramatical.",
    "must_include": [
      "que",
      "relativo",
      "quien",
      "agramatical",
      "subordinada",
      "adjetiva",
      "antecedente"
    ],
    "exp": "El examen modelo incluye exactamente este contraste en el bloque 2.",
    "min_chars": 180
  },
  {
    "id": "LENG-A2",
    "bloque": "LENG",
    "tema": "Morfología",
    "tipo": "open",
    "pregunta": "Define sinonimia y aporta dos sinónimos de 'innovación'.",
    "respuesta_modelo": "La sinonimia es la relación semántica entre palabras o expresiones de significado semejante. Dos posibles sinónimos de innovación son novedad y renovación.",
    "must_include": [
      "sinonimia",
      "significado",
      "semejante",
      "innovación",
      "novedad",
      "renovación"
    ],
    "exp": "En el simulacro se pide definir el concepto y aportar dos ejemplos.",
    "min_chars": 180
  },
  {
    "id": "LENG-M1",
    "bloque": "LENG",
    "tema": "Morfología",
    "tipo": "mc",
    "pregunta": "En el simulacro, 'cabizbajas' se trabaja como una cuestión de…",
    "opciones": [
      "Métrica",
      "Morfología y formación de palabras",
      "Pragmática",
      "Ortografía histórica"
    ],
    "correcta": 1,
    "exp": "El examen pide categoría gramatical, estructura morfológica y proceso de formación."
  },
  {
    "id": "LENG-C1",
    "bloque": "LENG",
    "tema": "Gramática",
    "tipo": "cloze",
    "texto": "Una secuencia con verbo copulativo, subordinada adjetiva, atributo y cuantificador podría ser: 'Ella es ________ la chica ________ llegó'.",
    "blanks": [
      {
        "a": "muy feliz"
      },
      {
        "a": "que"
      }
    ],
    "bank": [
      "muy feliz",
      "que",
      "rápidamente",
      "aunque"
    ],
    "exp": "Sirve para recordar cómo integrar atributo y subordinada adjetiva en una misma secuencia."
  },
  {
    "id": "LENG-MA1",
    "bloque": "LENG",
    "tema": "Clases de palabras",
    "tipo": "match",
    "pairs": [
      [
        "verbo copulativo",
        "ser / estar / parecer"
      ],
      [
        "atributo",
        "complemento exigido por verbo copulativo"
      ],
      [
        "subordinada adjetiva",
        "oración que modifica a un nombre"
      ],
      [
        "cuantificador",
        "palabra que expresa cantidad o intensidad"
      ]
    ],
    "exp": "En reflexión lingüística conviene identificar función y no solo memorizar etiquetas."
  },
  {
    "id": "T1-M1",
    "bloque": "T1",
    "tema": "Realismo",
    "tipo": "mc",
    "pregunta": "La novela realista busca sobre todo…",
    "opciones": [
      "evasión exótica",
      "representación fiel de la realidad",
      "escritura automática",
      "destrucción de la sintaxis"
    ],
    "correcta": 1,
    "exp": "El Realismo pretende observar y reflejar la realidad de forma minuciosa y verosímil."
  },
  {
    "id": "T1-C1",
    "bloque": "T1",
    "tema": "Realismo",
    "tipo": "cloze",
    "texto": "El Naturalismo se asocia al ________ y a la influencia del ________ social.",
    "blanks": [
      {
        "a": "determinismo"
      },
      {
        "a": "medio"
      }
    ],
    "bank": [
      "determinismo",
      "medio",
      "humor",
      "azar"
    ],
    "exp": "En el Naturalismo pesan la herencia, el medio y el momento histórico."
  },
  {
    "id": "T1-MA1",
    "bloque": "T1",
    "tema": "Realismo",
    "tipo": "match",
    "pairs": [
      [
        "Galdós",
        "Fortunata y Jacinta"
      ],
      [
        "Clarín",
        "La Regenta"
      ],
      [
        "Emilia Pardo Bazán",
        "Naturalismo moderado"
      ]
    ],
    "exp": "Estos nombres aparecen en el tema 1 como referencias básicas."
  },
  {
    "id": "T1-A1",
    "bloque": "T1",
    "tema": "Realismo",
    "tipo": "open",
    "pregunta": "Resume los rasgos del Realismo y del Naturalismo en España.",
    "respuesta_modelo": "El Realismo busca la representación objetiva de la realidad mediante narrador omnisciente, detallismo descriptivo, atención a la vida cotidiana y análisis psicológico. El Naturalismo lleva esos rasgos al extremo, subrayando el determinismo, el influjo del medio y la herencia, así como ambientes degradados y crítica social.",
    "must_include": [
      "Realismo",
      "objetividad",
      "narrador",
      "omnisciente",
      "detallismo",
      "Naturalismo",
      "determinismo",
      "medio",
      "herencia"
    ],
    "exp": "El tema 1 contrapone Realismo y Naturalismo y destaca su desarrollo en España.",
    "min_chars": 180
  },
  {
    "id": "T2-M1",
    "bloque": "T2",
    "tema": "Modernismo y 98",
    "tipo": "mc",
    "pregunta": "El Modernismo se inclina principalmente hacia…",
    "opciones": [
      "la crítica sobria de España",
      "la evasión estética y sensorial",
      "la novela social de posguerra",
      "el tremendismo"
    ],
    "correcta": 1,
    "exp": "El Modernismo privilegia el esteticismo, la musicalidad y la renovación formal."
  },
  {
    "id": "T2-C1",
    "bloque": "T2",
    "tema": "Modernismo y 98",
    "tipo": "cloze",
    "texto": "La generación del 98 se centra en España, la ________ y las reflexiones ________.",
    "blanks": [
      {
        "a": "intrahistoria"
      },
      {
        "a": "existenciales"
      }
    ],
    "bank": [
      "intrahistoria",
      "existenciales",
      "métricas",
      "humorísticas"
    ],
    "exp": "El 98 busca el alma de España y cultiva temas existenciales y religiosos."
  },
  {
    "id": "T2-MA1",
    "bloque": "T2",
    "tema": "Modernismo y 98",
    "tipo": "match",
    "pairs": [
      [
        "Rubén Darío",
        "Azul..."
      ],
      [
        "Unamuno",
        "Niebla"
      ],
      [
        "Pío Baroja",
        "El árbol de la ciencia"
      ],
      [
        "Valle-Inclán",
        "Sonatas"
      ]
    ],
    "exp": "El tema 2 distingue autores y obras clave del Modernismo y del 98."
  },
  {
    "id": "T2-A1",
    "bloque": "T2",
    "tema": "Modernismo y 98",
    "tipo": "open",
    "pregunta": "Explica las diferencias básicas entre Modernismo y Generación del 98.",
    "respuesta_modelo": "El Modernismo responde a la crisis de fin de siglo mediante la evasión, el esteticismo, la renovación métrica y un lenguaje sensorial y ornamental. La generación del 98, en cambio, adopta un estilo más sobrio y natural, se preocupa por España, la intrahistoria y los problemas existenciales, y utiliza sobre todo la novela y el ensayo.",
    "must_include": [
      "Modernismo",
      "evasión",
      "estética",
      "renovación",
      "métrica",
      "98",
      "sobriedad",
      "España",
      "intrahistoria",
      "existenciales"
    ],
    "exp": "La oposición entre estética modernista y preocupación regeneracionista es central en el tema 2.",
    "min_chars": 180
  },
  {
    "id": "T3-M1",
    "bloque": "T3",
    "tema": "Novecentismo",
    "tipo": "mc",
    "pregunta": "El arte novecentista se concibe como un arte…",
    "opciones": [
      "para masas",
      "puro y para minorías",
      "espontáneo e irracional",
      "únicamente político"
    ],
    "correcta": 1,
    "exp": "El Novecentismo persigue depuración, intelectualidad y placer estético."
  },
  {
    "id": "T3-C1",
    "bloque": "T3",
    "tema": "Novecentismo",
    "tipo": "cloze",
    "texto": "Las tres etapas de Juan Ramón son ________, intelectual y ________.",
    "blanks": [
      {
        "a": "sensitiva"
      },
      {
        "a": "suficiente"
      }
    ],
    "bank": [
      "sensitiva",
      "suficiente",
      "romántica",
      "social"
    ],
    "exp": "El tema 3 organiza la obra de Juan Ramón en tres etapas principales."
  },
  {
    "id": "T3-MA1",
    "bloque": "T3",
    "tema": "Novecentismo",
    "tipo": "match",
    "pairs": [
      [
        "Ortega y Gasset",
        "La deshumanización del arte"
      ],
      [
        "Juan Ramón Jiménez",
        "Diario de un poeta recién casado"
      ],
      [
        "Ramón Pérez de Ayala",
        "novela novecentista"
      ]
    ],
    "exp": "El tema 3 combina ensayo, novela novecentista y poesía pura."
  },
  {
    "id": "T3-A1",
    "bloque": "T3",
    "tema": "Novecentismo",
    "tipo": "open",
    "pregunta": "Resume el Novecentismo y las etapas de Juan Ramón Jiménez.",
    "respuesta_modelo": "El Novecentismo o Generación del 14 busca un arte puro, intelectual y depurado, alejado del sentimentalismo. Cultiva sobre todo el ensayo y una novela lírica y reflexiva. Juan Ramón Jiménez representa la lírica novecentista con tres etapas: sensitiva o modernista, intelectual o de poesía pura y suficiente o verdadera en el exilio.",
    "must_include": [
      "Novecentismo",
      "arte",
      "puro",
      "intelectual",
      "ensayo",
      "Juan",
      "Ramón",
      "sensitiva",
      "intelectual",
      "suficiente"
    ],
    "exp": "En este tema importa unir los principios estéticos con autores y etapas.",
    "min_chars": 180
  },
  {
    "id": "T4-M1",
    "bloque": "T4",
    "tema": "Vanguardias",
    "tipo": "mc",
    "pregunta": "Las vanguardias se caracterizan por…",
    "opciones": [
      "continuidad total con la tradición",
      "ruptura, provocación y afán de originalidad",
      "culto exclusivo al costumbrismo",
      "rechazo de toda innovación"
    ],
    "correcta": 1,
    "exp": "Los ismos rompen con la tradición y buscan novedad, provocación e irracionalidad."
  },
  {
    "id": "T4-C1",
    "bloque": "T4",
    "tema": "Vanguardias",
    "tipo": "cloze",
    "texto": "El Surrealismo indaga en el ________ y utiliza técnicas como la escritura ________.",
    "blanks": [
      {
        "a": "subconsciente"
      },
      {
        "a": "automática"
      }
    ],
    "bank": [
      "subconsciente",
      "automática",
      "paisaje",
      "clásica"
    ],
    "exp": "El Surrealismo, ligado a Freud, busca liberar la razón y explorar sueños y símbolos."
  },
  {
    "id": "T4-MA1",
    "bloque": "T4",
    "tema": "Vanguardias",
    "tipo": "match",
    "pairs": [
      [
        "Futurismo",
        "Marinetti"
      ],
      [
        "Cubismo",
        "caligrama"
      ],
      [
        "Dadaísmo",
        "Tzara"
      ],
      [
        "Surrealismo",
        "Breton"
      ]
    ],
    "exp": "El tema 4 enumera los principales ismos y sus rasgos distintivos."
  },
  {
    "id": "T4-A1",
    "bloque": "T4",
    "tema": "Vanguardias",
    "tipo": "open",
    "pregunta": "Explica qué son las vanguardias y nombra algunos ismos europeos.",
    "respuesta_modelo": "Las vanguardias son movimientos artísticos del primer tercio del siglo XX que buscan romper con la tradición y crear un arte original, provocador e innovador. Entre los principales ismos están Futurismo, Cubismo, Dadaísmo, Expresionismo y Surrealismo. En España influyeron en el 27 y en figuras como Ramón Gómez de la Serna.",
    "must_include": [
      "vanguardias",
      "ruptura",
      "originalidad",
      "Futurismo",
      "Cubismo",
      "Dadaísmo",
      "Expresionismo",
      "Surrealismo"
    ],
    "exp": "Basta con definir el movimiento general y situar varios ismos con un rasgo de cada uno.",
    "min_chars": 180
  },
  {
    "id": "T5-M1",
    "bloque": "T5",
    "tema": "Generación del 27",
    "tipo": "mc",
    "pregunta": "La Generación del 27 se caracteriza por unir…",
    "opciones": [
      "realismo y naturalismo",
      "tradición y vanguardia",
      "costumbrismo y folletín",
      "triunfalismo y censura"
    ],
    "correcta": 1,
    "exp": "El 27 combina lo popular y lo culto, lo clásico y lo innovador."
  },
  {
    "id": "T5-C1",
    "bloque": "T5",
    "tema": "Generación del 27",
    "tipo": "cloze",
    "texto": "Las tres etapas del 27 son: hasta 1927, 1927-1936 y la etapa del ________ tras la Guerra ________.",
    "blanks": [
      {
        "a": "exilio"
      },
      {
        "a": "Civil"
      }
    ],
    "bank": [
      "exilio",
      "Civil",
      "campo",
      "romanticismo"
    ],
    "exp": "La Guerra Civil rompe el grupo y abre la etapa de exilio, nostalgia y angustia."
  },
  {
    "id": "T5-MA1",
    "bloque": "T5",
    "tema": "Generación del 27",
    "tipo": "match",
    "pairs": [
      [
        "Pedro Salinas",
        "La voz a ti debida"
      ],
      [
        "Lorca",
        "Poeta en Nueva York"
      ],
      [
        "Rafael Alberti",
        "Sobre los ángeles"
      ],
      [
        "Miguel Hernández",
        "Viento del pueblo"
      ]
    ],
    "exp": "El tema 5 repasa autores representativos del 27 y algunas obras clave."
  },
  {
    "id": "T5-A1",
    "bloque": "T5",
    "tema": "Generación del 27",
    "tipo": "open",
    "pregunta": "Resume los rasgos del 27 y el teatro lorquiano.",
    "respuesta_modelo": "La Generación del 27 une tradición y vanguardia, combina verso libre con formas clásicas y atraviesa tres etapas: perfección formal, surrealismo y etapa del exilio tras la Guerra Civil. El teatro lorquiano renueva la escena con lirismo, simbolismo, protagonismo femenino, personajes marginados y conflictos entre individuo, autoridad y destino trágico.",
    "must_include": [
      "27",
      "tradición",
      "vanguardia",
      "tres",
      "etapas",
      "surrealismo",
      "exilio",
      "teatro",
      "lorquiano",
      "simbolismo",
      "mujeres",
      "destino",
      "trágico"
    ],
    "exp": "Conviene responder en dos partes: primero poesía del 27, después teatro de Lorca.",
    "min_chars": 180
  },
  {
    "id": "T6-M1",
    "bloque": "T6",
    "tema": "Novela 1939-1975",
    "tipo": "mc",
    "pregunta": "La obra que inaugura el tremendismo es…",
    "opciones": [
      "Nada",
      "La familia de Pascual Duarte",
      "El Jarama",
      "Tiempo de silencio"
    ],
    "correcta": 1,
    "exp": "En el tema 6 se vincula el tremendismo a Cela y a La familia de Pascual Duarte."
  },
  {
    "id": "T6-C1",
    "bloque": "T6",
    "tema": "Novela 1939-1975",
    "tipo": "cloze",
    "texto": "En los años 50 domina el realismo ________, y en 1962 Tiempo de ________ abre la innovación narrativa.",
    "blanks": [
      {
        "a": "social"
      },
      {
        "a": "silencio"
      }
    ],
    "bank": [
      "social",
      "silencio",
      "mágico",
      "amor"
    ],
    "exp": "La exposición diacrónica del tema pasa del realismo social a la experimentación."
  },
  {
    "id": "T6-MA1",
    "bloque": "T6",
    "tema": "Novela 1939-1975",
    "tipo": "match",
    "pairs": [
      [
        "Carmen Laforet",
        "Nada"
      ],
      [
        "Miguel Delibes",
        "Los santos inocentes"
      ],
      [
        "Rafael Sánchez Ferlosio",
        "El Jarama"
      ],
      [
        "Luis Martín-Santos",
        "Tiempo de silencio"
      ]
    ],
    "exp": "El tema 6 organiza la narrativa por décadas y obras clave."
  },
  {
    "id": "T6-A1",
    "bloque": "T6",
    "tema": "Novela 1939-1975",
    "tipo": "open",
    "pregunta": "Explica la evolución de la novela española entre 1939 y 1975.",
    "respuesta_modelo": "Tras la Guerra Civil aparece la novela del exilio. En los años 40 conviven la novela triunfalista y la existencial, con obras como Nada o La familia de Pascual Duarte. En los años 50 domina el realismo social y, desde 1962, la innovación narrativa y experimental abre una nueva etapa con Tiempo de silencio.",
    "must_include": [
      "exilio",
      "40",
      "existencial",
      "triunfalista",
      "50",
      "realismo",
      "social",
      "1962",
      "innovación",
      "narrativa",
      "Tiempo",
      "de",
      "silencio"
    ],
    "exp": "La clave es seguir la cronología: exilio, 40, 50 y 60-75.",
    "min_chars": 180
  },
  {
    "id": "T8-M1",
    "bloque": "T8",
    "tema": "Novela desde 1975",
    "tipo": "mc",
    "pregunta": "A partir de 1975, la novela española tiende a…",
    "opciones": [
      "radicalizar el experimentalismo y abandonar la trama",
      "recuperar el gusto por narrar y mezclar géneros",
      "eliminar los géneros narrativos",
      "centrarse solo en la poesía"
    ],
    "correcta": 1,
    "exp": "El tema 8 subraya la recuperación de la narratividad y la diversificación de tendencias."
  },
  {
    "id": "T8-C1",
    "bloque": "T8",
    "tema": "Novela desde 1975",
    "tipo": "cloze",
    "texto": "Entre las tendencias principales destacan la novela policíaca, la histórica, la ________ y la testimonial.",
    "blanks": [
      {
        "a": "intimista"
      }
    ],
    "bank": [
      "intimista",
      "épica",
      "mística",
      "satírica"
    ],
    "exp": "El tema 8 destaca varias líneas: policíaca, histórica, intimista y comprometida/testimonial."
  },
  {
    "id": "T8-MA1",
    "bloque": "T8",
    "tema": "Novela desde 1975",
    "tipo": "match",
    "pairs": [
      [
        "Eduardo Mendoza",
        "La verdad sobre el caso Savolta"
      ],
      [
        "Arturo Pérez-Reverte",
        "El capitán Alatriste"
      ],
      [
        "Julio Llamazares",
        "La lluvia amarilla"
      ],
      [
        "Rafael Chirbes",
        "Crematorio"
      ]
    ],
    "exp": "El tema 8 presenta tendencias de la narrativa reciente y ejemplos representativos."
  },
  {
    "id": "T8-A1",
    "bloque": "T8",
    "tema": "Novela desde 1975",
    "tipo": "open",
    "pregunta": "Resume la novela española a partir de 1975.",
    "respuesta_modelo": "Con la democracia y el fin de la censura, la novela española recupera el gusto por narrar y abandona el experimentalismo extremo. Se diversifica en múltiples tendencias: policíaca, histórica, intimista, testimonial y otras variantes de género. Predominan la mezcla de géneros, la simplificación estructural y la búsqueda de estilos personales.",
    "must_include": [
      "1975",
      "democracia",
      "fin",
      "censura",
      "gusto",
      "narrar",
      "policíaca",
      "histórica",
      "intimista",
      "testimonial"
    ],
    "exp": "Conviene destacar el cambio de rumbo y luego enumerar varias tendencias.",
    "min_chars": 180
  }
];
window.LENGUA_META = {
  "title": "Lengua PAU · Entrenamiento + Simulacro",
  "blocks": [
    {
      "id": "COM",
      "title": "Comunicación",
      "order": 1
    },
    {
      "id": "LENG",
      "title": "Reflexión sobre la lengua",
      "order": 2
    },
    {
      "id": "T1",
      "title": "Tema 1 · Realismo y Naturalismo",
      "order": 3
    },
    {
      "id": "T2",
      "title": "Tema 2 · Modernismo y Generación del 98",
      "order": 4
    },
    {
      "id": "T3",
      "title": "Tema 3 · Novecentismo y Juan Ramón Jiménez",
      "order": 5
    },
    {
      "id": "T4",
      "title": "Tema 4 · Vanguardias",
      "order": 6
    },
    {
      "id": "T5",
      "title": "Tema 5 · Generación del 27 y teatro lorquiano",
      "order": 7
    },
    {
      "id": "T6",
      "title": "Tema 6 · Novela 1939-1975",
      "order": 8
    },
    {
      "id": "T8",
      "title": "Tema 8 · Novela desde 1975",
      "order": 9
    }
  ],
  "study_cards": {
    "COM": [
      [
        "Qué se entrena",
        "Tema, tesis, estructura, resumen y argumentación."
      ],
      [
        "Recordatorio PAU",
        "Resumen: 40-50 palabras. Argumentación: 100-150 palabras. Esto aparece como ayuda, no como pregunta."
      ]
    ],
    "LENG": [
      [
        "Qué se entrena",
        "Sintaxis, clases de palabras, morfología, sinonimia y reflexión gramatical."
      ],
      [
        "Idea útil",
        "No basta con nombrar: hay que justificar la respuesta con función o rasgo."
      ]
    ],
    "T1": [
      [
        "Mapa mínimo",
        "Realismo: observación objetiva, narrador omnisciente, detallismo, vida cotidiana. Naturalismo: determinismo, medio, herencia y ambientes degradados."
      ],
      [
        "Mnemotecnia",
        "R-O-D / N-D-M-H"
      ]
    ],
    "T2": [
      [
        "Mapa mínimo",
        "Modernismo: estética, musicalidad, evasión. 98: España, sobriedad, intrahistoria, existencialismo."
      ],
      [
        "Mnemotecnia",
        "M-E-M / 98-E-I"
      ]
    ],
    "T3": [
      [
        "Mapa mínimo",
        "Novecentismo: arte puro, intelectualidad, ensayo. Juan Ramón: sensitiva, intelectual y suficiente."
      ],
      [
        "Mnemotecnia",
        "A-P-I / S-I-S"
      ]
    ],
    "T4": [
      [
        "Mapa mínimo",
        "Vanguardias: ruptura, provocación, ismos europeos y recepción en España."
      ],
      [
        "Mnemotecnia",
        "F-C-D-E-S"
      ]
    ],
    "T5": [
      [
        "Mapa mínimo",
        "27: tradición + vanguardia, etapas y autores. Lorca: símbolo, lírica, tragedia."
      ],
      [
        "Mnemotecnia",
        "T+V / 3 etapas / L-T-S"
      ]
    ],
    "T6": [
      [
        "Mapa mínimo",
        "Novela de posguerra: exilio, años 40, 50 y renovación desde 1962."
      ],
      [
        "Mnemotecnia",
        "E-40-50-62"
      ]
    ],
    "T8": [
      [
        "Mapa mínimo",
        "Desde 1975: recuperación del relato, diversidad de tendencias y mezcla de géneros."
      ],
      [
        "Mnemotecnia",
        "R-D-M"
      ]
    ]
  },
  "simulacro_size": 28,
  "default_simulacro_minutes": 90
};

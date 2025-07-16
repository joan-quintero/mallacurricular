
const ramos = [
    {
        nombre: "📘 Cálculo Diferencial", creditos: 4, requisitos: [], semestre: 1
    },
    {
        nombre: "📐 Geometría y Trigonometría", creditos: 2, requisitos: [], semestre: 1
    },
    {
        nombre: "⚙️ Introducción a la Ingeniería Mecánica", creditos: 2, requisitos: [], semestre: 1
    },
    {
        nombre: "💻 Programación I", creditos: 3, requisitos: [], semestre: 1
    },
    {
        nombre: "📝 Expresión Gráfica", creditos: 2, requisitos: [], semestre: 1
    },
    {
        nombre: "🧪 Química y Laboratorio", creditos: 3, requisitos: [], semestre: 1
    },
    {
        nombre: "📣 Comunicación Oral y Escrita I", creditos: 2, requisitos: [], semestre: 1
    },
    {
        nombre: "📘 Cálculo Integral", creditos: 4, requisitos: ["📘 Cálculo Diferencial"], semestre: 2
    },
    {
        nombre: "📊 Álgebra Lineal", creditos: 3, requisitos: ["📘 Cálculo Diferencial"], semestre: 2
    },
    {
        nombre: "🧲 Física Mecánica", creditos: 4, requisitos: ["📐 Geometría y Trigonometría"], semestre: 2
    },
    {
        nombre: "💻 Programación II", creditos: 3, requisitos: ["💻 Programación I"], semestre: 2
    },
    {
        nombre: "📝 Geometría Descriptiva", creditos: 2, requisitos: ["📝 Expresión Gráfica"], semestre: 2
    },
    {
        nombre: "📣 Comunicación Oral y Escrita II", creditos: 2, requisitos: ["📣 Comunicación Oral y Escrita I"], semestre: 2
    },
    
  {
    nombre: "📘 Cálculo Vectorial",
    creditos: 4,
    requisitos: [
      "📘 Cálculo Integral"
    ],
    semestre: 3
  },
  {
    nombre: "📊 Probabilidad y Estadística",
    creditos: 3,
    requisitos: [
      "📊 Álgebra Lineal"
    ],
    semestre: 3
  },
  {
    nombre: "🧲 Electromagnetismo",
    creditos: 4,
    requisitos: [
      "🧲 Física Mecánica"
    ],
    semestre: 3
  },
  {
    nombre: "📐 Estática",
    creditos: 3,
    requisitos: [
      "🧲 Física Mecánica"
    ],
    semestre: 3
  },
  {
    nombre: "🛠️ Dibujo de Máquinas",
    creditos: 2,
    requisitos: [
      "📝 Geometría Descriptiva"
    ],
    semestre: 3
  },
  {
    nombre: "📣 Seminario Investigativo",
    creditos: 2,
    requisitos: [
      "📣 Comunicación Oral y Escrita II"
    ],
    semestre: 3
  },
  {
    nombre: "🧮 Ecuaciones Diferenciales",
    creditos: 4,
    requisitos: [
      "📘 Cálculo Vectorial"
    ],
    semestre: 4
  },
  {
    nombre: "🧪 Ondas y Partículas",
    creditos: 3,
    requisitos: [
      "🧲 Electromagnetismo"
    ],
    semestre: 4
  },
  {
    nombre: "🏗️ Resistencia de Materiales",
    creditos: 4,
    requisitos: [
      "📐 Estática"
    ],
    semestre: 4
  },
  {
    nombre: "🔄 Dinámica",
    creditos: 3,
    requisitos: [
      "📐 Estática",
      "🛠️ Dibujo de Máquinas"
    ],
    semestre: 4
  },
  {
    nombre: "🧱 Ciencias de los Materiales",
    creditos: 3,
    requisitos: [
      "🧪 Química y Laboratorio"
    ],
    semestre: 4
  },
  {
    nombre: "🔢 Análisis Numérico",
    creditos: 3,
    requisitos: [
      "🧮 Ecuaciones Diferenciales",
      "📊 Probabilidad y Estadística",
      "💻 Programación II"
    ],
    semestre: 5
  },
  {
    nombre: "⚙️ Ingeniería de Materiales",
    creditos: 3,
    requisitos: [
      "🧱 Ciencias de los Materiales"
    ],
    semestre: 5
  },
  {
    nombre: "📜 Constitución Política",
    creditos: 2,
    requisitos: [
      "📣 Seminario Investigativo"
    ],
    semestre: 5
  },
  {
    nombre: "🧪 Proyecto Ingeniería I",
    creditos: 3,
    requisitos: [
      "🏗️ Resistencia de Materiales"
    ],
    semestre: 5
  },
  {
    nombre: "🌊 Mecánica de Fluidos",
    creditos: 3,
    requisitos: [
      "🔄 Dinámica",
      "🧮 Ecuaciones Diferenciales"
    ],
    semestre: 5
  },
  {
    nombre: "⚙️ Mecanismos",
    creditos: 3,
    requisitos: [
      "🔄 Dinámica"
    ],
    semestre: 5
  },
  {
    nombre: "🏭 Procesos de Manufactura",
    creditos: 3,
    requisitos: [
      "⚙️ Ingeniería de Materiales"
    ],
    semestre: 6
  },
  {
    nombre: "📘 Electiva Complementaria I",
    creditos: 2,
    requisitos: [
      "📜 Constitución Política"
    ],
    semestre: 6
  },
  {
    nombre: "🔥 Termodinámica",
    creditos: 3,
    requisitos: [
      "🌊 Mecánica de Fluidos"
    ],
    semestre: 6
  },
  {
    nombre: "💡 Electrotecnia",
    creditos: 2,
    requisitos: [
      "🔢 Análisis Numérico",
      "🧪 Ondas y Partículas"
    ],
    semestre: 6
  },
  {
    nombre: "🚿 Máquinas Hidráulicas",
    creditos: 3,
    requisitos: [
      "🌊 Mecánica de Fluidos"
    ],
    semestre: 6
  },
  {
    nombre: "🔩 Cálculo Elementos Máquinas I",
    creditos: 4,
    requisitos: [
      "🏗️ Resistencia de Materiales",
      "⚙️ Ingeniería de Materiales",
      "⚙️ Mecanismos"
    ],
    semestre: 6
  },
  {
    nombre: "🏗️ Ingeniería de Procesos",
    creditos: 3,
    requisitos: [
      "🏭 Procesos de Manufactura"
    ],
    semestre: 7
  },
  {
    nombre: "📘 Electiva Complementaria II",
    creditos: 2,
    requisitos: [
      "📘 Electiva Complementaria I"
    ],
    semestre: 7
  },
  {
    nombre: "🔥 Transferencia de Calor",
    creditos: 4,
    requisitos: [
      "🔥 Termodinámica"
    ],
    semestre: 7
  },
  {
    nombre: "⚡ Máquinas Eléctricas",
    creditos: 2,
    requisitos: [
      "💡 Electrotecnia"
    ],
    semestre: 7
  },
  {
    nombre: "💰 Ingeniería Económica",
    creditos: 2,
    requisitos: [
      "🧪 Proyecto Ingeniería I"
    ],
    semestre: 7
  },
  {
    nombre: "🔩 Cálculo Elementos Máquinas II",
    creditos: 4,
    requisitos: [
      "🔩 Cálculo Elementos Máquinas I"
    ],
    semestre: 7
  },
  {
    nombre: "📘 Electiva Complementaria III",
    creditos: 2,
    requisitos: [
      "📘 Electiva Complementaria II"
    ],
    semestre: 8
  },
  {
    nombre: "🤖 Control y Automatización",
    creditos: 2,
    requisitos: [
      "⚡ Máquinas Eléctricas"
    ],
    semestre: 8
  },
  {
    nombre: "📊 Gestión de Proyectos",
    creditos: 2,
    requisitos: [
      "💰 Ingeniería Económica"
    ],
    semestre: 8
  },
  {
    nombre: "🔥 Máquinas Térmicas",
    creditos: 4,
    requisitos: [
      "🔥 Termodinámica"
    ],
    semestre: 8
  },
  {
    nombre: "🔧 Ingeniería de Mantenimiento",
    creditos: 3,
    requisitos: [
      "🔩 Cálculo Elementos Máquinas II"
    ],
    semestre: 8
  },
  {
    nombre: "🧪 Proyecto Ingeniería II",
    creditos: 3,
    requisitos: [
      "🏗️ Ingeniería de Procesos",
      "🔥 Transferencia de Calor",
      "🔩 Cálculo Elementos Máquinas II"
    ],
    semestre: 8
  },
  {
    nombre: "🧭 Ética Profesional",
    creditos: 2,
    requisitos: [
      "📘 Electiva Complementaria II"
    ],
    semestre: 9
  },
  {
    nombre: "🔥 Diseño Térmico",
    creditos: 3,
    requisitos: [
      "🔥 Transferencia de Calor",
      "🔥 Máquinas Térmicas"
    ],
    semestre: 9
  },
  {
    nombre: "🎓 Electiva Profesional I",
    creditos: 3,
    requisitos: [
      "110 créditos aprobados"
    ],
    semestre: 9
  },
  {
    nombre: "🧩 Optativa I",
    creditos: 3,
    requisitos: [
      "🔧 Ingeniería de Mantenimiento"
    ],
    semestre: 9
  },
  {
    nombre: "👷 Práctica Estudiantil",
    creditos: 4,
    requisitos: [
      "🧪 Proyecto Ingeniería II"
    ],
    semestre: 9
  },
  {
    nombre: "🎓 Electiva Profesional II",
    creditos: 3,
    requisitos: [
      "110 créditos aprobados"
    ],
    semestre: 10
  },
  {
    nombre: "🎓 Electiva Profesional III",
    creditos: 3,
    requisitos: [
      "110 créditos aprobados"
    ],
    semestre: 10
  },
  {
    nombre: "🧩 Optativa II",
    creditos: 3,
    requisitos: [
      "🔧 Ingeniería de Mantenimiento"
    ],
    semestre: 10
  },
  {
    nombre: "📜 Trabajo de Grado",
    creditos: 5,
    requisitos: [
      "109 créditos aprobados"
    ],
    semestre: 10
  }
    // Se pueden agregar más semestres aquí (3 al 10)...
];

let creditosAprobados = 0;

function actualizarUI() {
    const container = document.getElementById("malla");
    container.innerHTML = "";

    for (let semestre = 1; semestre <= 10; semestre++) {
        const bloque = document.createElement("div");
        bloque.className = "semestre";
        bloque.innerHTML = `<h2>📦 Semestre ${semestre}</h2>`;

        ramos.filter(r => r.semestre === semestre).forEach(ramo => {
            const div = document.createElement("div");
            div.className = "ramo";
            div.textContent = `${ramo.nombre} (${ramo.creditos} créditos)`;
            div.dataset.nombre = ramo.nombre;

            const requisitos = ramo.requisitos;
            const aprobados = ramos.filter(r => r.aprobado).map(r => r.nombre);
            const desbloqueado = requisitos.every(req => aprobados.includes(req));

            if (ramo.aprobado) {
                div.classList.add("aprobado");
            } else if (!desbloqueado) {
                div.classList.add("bloqueado");
            }

            div.onclick = () => {
                if (!div.classList.contains("bloqueado")) {
                    ramo.aprobado = !ramo.aprobado;
                    creditosAprobados = ramos.filter(r => r.aprobado).reduce((sum, r) => sum + r.creditos, 0);
                    document.getElementById("creditos").textContent = `Créditos aprobados: ${creditosAprobados} / 170`;
                    actualizarUI();
                }
            };
            bloque.appendChild(div);
        });
        container.appendChild(bloque);
    }
}
div.dataset.nombre = subject.nombre;
function guardarProgreso() {
  const estado = {};
  document.querySelectorAll('.subject').forEach(subject => {
    estado[subject.dataset.nombre] = subject.classList.contains('aprobado');
  });
  localStorage.setItem('estadoRamos', JSON.stringify(estado));
  alert("✅ Progreso guardado correctamente.");
}
function cargarProgreso() {
  const estado = JSON.parse(localStorage.getItem('estadoRamos') || '{}');
  document.querySelectorAll('.subject').forEach(subject => {
    const aprobado = estado[subject.dataset.nombre];
    if (aprobado) {
      subject.classList.add('aprobado');
    } else {
      subject.classList.remove('aprobado');
    }
  });
  actualizarEstado(); // Para recalcular materias desbloqueadas
}
document.getElementById('guardarBtn').addEventListener('click', guardarProgreso);
document.getElementById('cargarBtn').addEventListener('click', cargarProgreso);

// Cargar estado automáticamente al abrir la página
window.addEventListener('load', cargarProgreso);

actualizarUI();

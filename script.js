
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

actualizarUI();

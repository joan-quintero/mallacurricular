const ramosData = [
  // SEMESTRE I
  {
    semestre: "Semestre I",
    ramos: [
      { nombre: "Cálculo Diferencial", creditos: 4 },
      { nombre: "Geometría y Trigonometría", creditos: 2 },
      { nombre: "Introducción a la Ingeniería Mecánica", creditos: 2 },
      { nombre: "Programación I", creditos: 3 },
      { nombre: "Expresión Gráfica", creditos: 2 },
      { nombre: "Química y Laboratorio", creditos: 3 },
      { nombre: "Comunicación Oral y Escrita I", creditos: 2 },
    ],
  },
  // SEMESTRE II
  {
    semestre: "Semestre II",
    ramos: [
      { nombre: "Cálculo Integral", creditos: 4, requisitos: ["Cálculo Diferencial"] },
      { nombre: "Álgebra Lineal", creditos: 3, requisitos: ["Cálculo Diferencial"] },
      { nombre: "Física Mecánica", creditos: 4, requisitos: ["Geometría y Trigonometría"] },
      { nombre: "Programación II", creditos: 3, requisitos: ["Programación I"] },
      { nombre: "Geometría Descriptiva", creditos: 2, requisitos: ["Expresión Gráfica"] },
      { nombre: "Comunicación Oral y Escrita II", creditos: 2, requisitos: ["Comunicación Oral y Escrita I"] },
    ],
  },
  // SEMESTRE III
  {
    semestre: "Semestre III",
    ramos: [
      { nombre: "Cálculo Vectorial", creditos: 4, requisitos: ["Cálculo Integral"] },
      { nombre: "Probabilidad y Estadística", creditos: 3, requisitos: ["Álgebra Lineal"] },
      { nombre: "Electromagnetismo", creditos: 4, requisitos: ["Física Mecánica"] },
      { nombre: "Estática", creditos: 3, requisitos: ["Física Mecánica"] },
      { nombre: "Dibujo de Máquinas", creditos: 2, requisitos: ["Geometría Descriptiva"] },
      { nombre: "Seminario Investigativo", creditos: 2, requisitos: ["Comunicación Oral y Escrita II"] },
    ],
  },
  // SEMESTRE IV
  {
    semestre: "Semestre IV",
    ramos: [
      { nombre: "Ecuaciones Diferenciales", creditos: 4, requisitos: ["Cálculo Vectorial"] },
      { nombre: "Ondas y Partículas", creditos: 3, requisitos: ["Electromagnetismo"] },
      { nombre: "Resistencia de Materiales", creditos: 4, requisitos: ["Estática"] },
      { nombre: "Dinámica", creditos: 3, requisitos: ["Estática", "Dibujo de Máquinas"] },
      { nombre: "Ciencias de los Materiales", creditos: 3, requisitos: ["Química y Laboratorio"] },
    ],
  },
  // SEMESTRE V
  {
    semestre: "Semestre V",
    ramos: [
      { nombre: "Análisis Numérico", creditos: 3, requisitos: ["Ecuaciones Diferenciales", "Probabilidad y Estadística", "Programación II"] },
      { nombre: "Ingeniería de Materiales", creditos: 3, requisitos: ["Ciencias de los Materiales"] },
      { nombre: "Constitución Política", creditos: 2, requisitos: ["Seminario Investigativo"] },
      { nombre: "Seminario: Proyecto Ingeniería I", creditos: 3, requisitos: ["Resistencia de Materiales"] },
      { nombre: "Mecánica de Fluidos", creditos: 3, requisitos: ["Dinámica", "Ecuaciones Diferenciales"] },
      { nombre: "Mecanismos", creditos: 3, requisitos: ["Dinámica"] },
    ],
  },
  // SEMESTRE VI
  {
    semestre: "Semestre VI",
    ramos: [
      { nombre: "Procesos de Manufactura", creditos: 3, requisitos: ["Ingeniería de Materiales"] },
      { nombre: "Electiva Formación Complementaria I", creditos: 2, requisitos: ["Constitución Política"] },
      { nombre: "Termodinámica", creditos: 3, requisitos: ["Mecánica de Fluidos"] },
      { nombre: "Electrotecnia", creditos: 2, requisitos: ["Análisis Numérico", "Ondas y Partículas"] },
      { nombre: "Máquinas Hidráulicas", creditos: 3, requisitos: ["Mecánica de Fluidos"] },
      { nombre: "Cálculo de Elementos de Máquinas I", creditos: 4, requisitos: ["Resistencia de Materiales", "Ingeniería de Materiales", "Mecanismos"] },
    ],
  },
  // SEMESTRE VII
  {
    semestre: "Semestre VII",
    ramos: [
      { nombre: "Ingeniería de Procesos", creditos: 3, requisitos: ["Procesos de Manufactura"] },
      { nombre: "Electiva Formación Complementaria II", creditos: 2, requisitos: ["Electiva Formación Complementaria I"] },
      { nombre: "Transferencia de Calor", creditos: 4, requisitos: ["Termodinámica"] },
      { nombre: "Máquinas Eléctricas", creditos: 2, requisitos: ["Electrotecnia"] },
      { nombre: "Ingeniería Económica", creditos: 2, requisitos: ["Seminario: Proyecto Ingeniería I"] },
      { nombre: "Cálculo de Elementos de Máquinas II", creditos: 4, requisitos: ["Cálculo de Elementos de Máquinas I"] },
    ],
  },
  // SEMESTRE VIII
  {
    semestre: "Semestre VIII",
    ramos: [
      { nombre: "Electiva Formación Complementaria III", creditos: 2, requisitos: ["Electiva Formación Complementaria II"] },
      { nombre: "Fundamentos de Control y Automatización", creditos: 2, requisitos: ["Máquinas Eléctricas"] },
      { nombre: "Factibilidad y Gestión de Proyectos", creditos: 2, requisitos: ["Ingeniería Económica"] },
      { nombre: "Máquinas Térmicas", creditos: 4, requisitos: ["Termodinámica"] },
      { nombre: "Ingeniería de Mantenimiento", creditos: 3, requisitos: ["Cálculo de Elementos de Máquinas II"] },
      { nombre: "Seminario: Proyecto Ingeniería II", creditos: 3, requisitos: ["Ingeniería de Procesos", "Transferencia de Calor", "Cálculo de Elementos de Máquinas II"] },
    ],
  },
  // SEMESTRE IX
  {
    semestre: "Semestre IX",
    ramos: [
      { nombre: "Ética Profesional", creditos: 2, requisitos: ["Electiva Formación Complementaria II"] },
      { nombre: "Diseño Térmico", creditos: 3, requisitos: ["Transferencia de Calor", "Máquinas Térmicas"] },
      { nombre: "Electiva Profesional I", creditos: 3, requisitosEspeciales: 110 },
      { nombre: "Optativa I", creditos: 3, requisitos: ["Ingeniería de Mantenimiento"] },
      { nombre: "Práctica Estudiantil", creditos: 4, requisitos: ["Seminario: Proyecto Ingeniería II"] },
    ],
  },
  // SEMESTRE X
  {
    semestre: "Semestre X",
    ramos: [
      { nombre: "Electiva Profesional II", creditos: 3, requisitosEspeciales: 110 },
      { nombre: "Electiva Profesional III", creditos: 3, requisitosEspeciales: 110 },
      { nombre: "Optativa II", creditos: 3, requisitos: ["Ingeniería de Mantenimiento"] },
      { nombre: "Trabajo de Grado", creditos: 5, requisitosEspeciales: 109 },
    ],
  },
];

let creditosAprobados = 0;

function renderMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  for (const semestre of ramosData) {
    const divSem = document.createElement("div");
    divSem.className = "semestre";
    divSem.innerHTML = `<h2>${semestre.semestre}</h2>`;

    for (const ramo of semestre.ramos) {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;
      divRamo.setAttribute("data-nombre", ramo.nombre);
      divRamo.setAttribute("data-creditos", ramo.creditos);
      divRamo.setAttribute("data-aprobado", "false");
      divRamo.setAttribute("data-bloqueado", "true");

      const requisitos = ramo.requisitos?.join(", ") || "";
      divRamo.setAttribute("data-requisitos", requisitos || "Sin requisitos");

      divRamo.addEventListener("click", () => toggleRamo(divRamo));
      divSem.appendChild(divRamo);
    }

    malla.appendChild(divSem);
  }

  verificarDisponibles();
}

function toggleRamo(el) {
  if (el.getAttribute("data-bloqueado") === "true") return;

  const aprobado = el.getAttribute("data-aprobado") === "true";
  el.setAttribute("data-aprobado", !aprobado);
  const creditos = parseInt(el.getAttribute("data-creditos"));
  creditosAprobados += aprobado ? -creditos : creditos;

  document.getElementById("approved-credits").textContent = creditosAprobados;
  verificarDisponibles();
}

function verificarDisponibles() {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    const nombre = ramo.getAttribute("data-nombre");
    const requisitos = ramo.getAttribute("data-requisitos").split(", ").filter(Boolean);
    const reqEspecial = ramosData
      .flatMap(s => s.ramos)
      .find(r => r.nombre === nombre)?.requisitosEspeciales;

    const cumplidos = requisitos.every(req => {
      const el = [...ramos].find(r => r.getAttribute("data-nombre") === req);
      return el && el.getAttribute("data-aprobado") === "true";
    });

    const cumpleEspecial = reqEspecial ? creditosAprobados >= reqEspecial : true;

    ramo.setAttribute("data-bloqueado", cumplidos && cumpleEspecial ? "false" : "true");
  });
}

renderMalla();


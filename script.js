const malla = [
  {
    nombre: "Semestre I",
    ramos: [
      { nombre: "Cálculo Diferencial", creditos: 4, requisitos: [] },
      { nombre: "Geometría y Trigonometría", creditos: 2, requisitos: [] },
      { nombre: "Introducción a la Ingeniería Mecánica", creditos: 2, requisitos: [] },
      { nombre: "Programación I", creditos: 3, requisitos: [] },
      { nombre: "Expresión Gráfica", creditos: 2, requisitos: [] },
      { nombre: "Química y Laboratorio", creditos: 3, requisitos: [] },
      { nombre: "Comunicación Oral y Escrita I", creditos: 2, requisitos: [] },
    ],
  },
  {
    nombre: "Semestre II",
    ramos: [
      { nombre: "Cálculo Integral", creditos: 4, requisitos: ["Cálculo Diferencial"] },
      { nombre: "Álgebra Lineal", creditos: 3, requisitos: ["Cálculo Diferencial"] },
      { nombre: "Física Mecánica", creditos: 4, requisitos: ["Geometría y Trigonometría"] },
      { nombre: "Programación II", creditos: 3, requisitos: ["Programación I"] },
      { nombre: "Geometría Descriptiva", creditos: 2, requisitos: ["Expresión Gráfica"] },
      { nombre: "Comunicación Oral y Escrita II", creditos: 2, requisitos: ["Comunicación Oral y Escrita I"] },
    ],
  },
  {
    nombre: "Semestre III",
    ramos: [
      { nombre: "Cálculo Vectorial", creditos: 4, requisitos: ["Cálculo Integral"] },
      { nombre: "Probabilidad y Estadística", creditos: 3, requisitos: ["Álgebra Lineal"] },
      { nombre: "Electromagnetismo", creditos: 4, requisitos: ["Física Mecánica"] },
      { nombre: "Estática", creditos: 3, requisitos: ["Física Mecánica"] },
      { nombre: "Dibujo de Máquinas", creditos: 2, requisitos: ["Geometría Descriptiva"] },
      { nombre: "Seminario Investigativo", creditos: 2, requisitos: ["Comunicación Oral y Escrita II"] },
    ],
  },
  {
    nombre: "Semestre IV",
    ramos: [
      { nombre: "Ecuaciones Diferenciales", creditos: 4, requisitos: ["Cálculo Vectorial"] },
      { nombre: "Ondas y Partículas", creditos: 3, requisitos: ["Electromagnetismo"] },
      { nombre: "Resistencia de Materiales", creditos: 4, requisitos: ["Estática"] },
      { nombre: "Dinámica", creditos: 3, requisitos: ["Estática", "Dibujo de Máquinas"] },
      { nombre: "Ciencias de los Materiales", creditos: 3, requisitos: ["Química y Laboratorio"] },
    ],
  },
  {
    nombre: "Semestre V",
    ramos: [
      { nombre: "Análisis Numérico", creditos: 3, requisitos: ["Ecuaciones Diferenciales", "Probabilidad y Estadística", "Programación II"] },
      { nombre: "Ingeniería de Materiales", creditos: 3, requisitos: ["Ciencias de los Materiales"] },
      { nombre: "Constitución Política", creditos: 2, requisitos: ["Seminario Investigativo"] },
      { nombre: "Seminario: Proyecto de Ingeniería I", creditos: 3, requisitos: ["Resistencia de Materiales"] },
      { nombre: "Mecánica de Fluidos", creditos: 3, requisitos: ["Dinámica", "Ecuaciones Diferenciales"] },
      { nombre: "Mecanismos", creditos: 3, requisitos: ["Dinámica"] },
    ],
  },
  {
    nombre: "Semestre VI",
    ramos: [
      { nombre: "Procesos de Manufactura", creditos: 3, requisitos: ["Ingeniería de Materiales"] },
      { nombre: "Electiva Formación Complementaria I", creditos: 2, requisitos: ["Constitución Política"] },
      { nombre: "Termodinámica", creditos: 3, requisitos: ["Mecánica de Fluidos"] },
      { nombre: "Electrotecnia", creditos: 2, requisitos: ["Análisis Numérico", "Ondas y Partículas"] },
      { nombre: "Máquinas Hidráulicas", creditos: 3, requisitos: ["Mecánica de Fluidos"] },
      { nombre: "Cálculo de Elementos de Máquinas I", creditos: 4, requisitos: ["Resistencia de Materiales", "Ingeniería de Materiales", "Mecanismos"] },
    ],
  },
  {
    nombre: "Semestre VII",
    ramos: [
      { nombre: "Ingeniería de Procesos", creditos: 3, requisitos: ["Procesos de Manufactura"] },
      { nombre: "Electiva Formación Complementaria II", creditos: 2, requisitos: ["Electiva Formación Complementaria I"] },
      { nombre: "Transferencia de Calor", creditos: 4, requisitos: ["Termodinámica"] },
      { nombre: "Máquinas Eléctricas", creditos: 2, requisitos: ["Electrotecnia"] },
      { nombre: "Ingeniería Económica", creditos: 2, requisitos: ["Seminario: Proyecto de Ingeniería I"] },
      { nombre: "Cálculo de Elementos de Máquinas II", creditos: 4, requisitos: ["Cálculo de Elementos de Máquinas I"] },
    ],
  },
  {
    nombre: "Semestre VIII",
    ramos: [
      { nombre: "Electiva Formación Complementaria III", creditos: 2, requisitos: ["Electiva Formación Complementaria II"] },
      { nombre: "Fundamentos de Control y Automatización", creditos: 2, requisitos: ["Máquinas Eléctricas"] },
      { nombre: "Factibilidad y Gestión de Proyectos", creditos: 2, requisitos: ["Ingeniería Económica"] },
      { nombre: "Máquinas Térmicas", creditos: 4, requisitos: ["Termodinámica"] },
      { nombre: "Ingeniería de Mantenimiento", creditos: 3, requisitos: ["Cálculo de Elementos de Máquinas II"] },
      { nombre: "Seminario: Proyecto Ingeniería II", creditos: 3, requisitos: ["Ingeniería de Procesos", "Transferencia de Calor", "Cálculo de Elementos de Máquinas II"] },
    ],
  },
  {
    nombre: "Semestre IX",
    ramos: [
      { nombre: "Ética Profesional", creditos: 2, requisitos: ["Electiva Formación Complementaria II"] },
      { nombre: "Diseño Térmico", creditos: 3, requisitos: ["Transferencia de Calor", "Máquinas Térmicas"] },
      { nombre: "Electiva Profesional I", creditos: 3, requisitos: ["110"] }, // Créditos mínimos
      { nombre: "Optativa I", creditos: 3, requisitos: ["Ingeniería de Mantenimiento"] },
      { nombre: "Práctica Estudiantil", creditos: 4, requisitos: ["Seminario: Proyecto Ingeniería II"] },
    ],
  },
  {
    nombre: "Semestre X",
    ramos: [
      { nombre: "Electiva Profesional II", creditos: 3, requisitos: ["110"] },
      { nombre: "Electiva Profesional III", creditos: 3, requisitos: ["110"] },
      { nombre: "Optativa II", creditos: 3, requisitos: ["Ingeniería de Mantenimiento"] },
      { nombre: "Trabajo de Grado", creditos: 5, requisitos: ["109"] },
    ],
  }
];

// Variables de estado
let materiasAprobadas = new Set();

function actualizarCreditos() {
  let total = 0;
  document.querySelectorAll(".materia.aprobada").forEach(m => {
    total += parseInt(m.dataset.creditos);
  });
  document.getElementById("creditos-aprobados").innerText = `Créditos aprobados: ${total}`;
  return total;
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const creditosActuales = actualizarCreditos();

  malla.forEach(semestre => {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre.nombre;
    divSemestre.appendChild(titulo);

    let totalCreditosSem = 0;

    semestre.ramos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "materia";
      divRamo.textContent = `${ramo.nombre} (${ramo.creditos} créditos)`;
      divRamo.dataset.nombre = ramo.nombre;
      divRamo.dataset.creditos = ramo.creditos;
      divRamo.dataset.requisitos = ramo.requisitos.length
        ? `Requiere: ${ramo.requisitos.join(", ")}`
        : "Sin requisitos";
      totalCreditosSem += ramo.creditos;

      const requisitosCompletos = ramo.requisitos.every(req => {
        if (!isNaN(req)) return creditosActuales >= parseInt(req);
        return materiasAprobadas.has(req);
      });

      if (materiasAprobadas.has(ramo.nombre)) {
        divRamo.classList.add("aprobada");
      } else if (!requisitosCompletos) {
        divRamo.classList.add("bloqueada");
      }

      divRamo.addEventListener("click", () => {
        if (divRamo.classList.contains("bloqueada")) return;

        if (materiasAprobadas.has(ramo.nombre)) {
          materiasAprobadas.delete(ramo.nombre);
        } else {
          materiasAprobadas.add(ramo.nombre);
        }
        renderMalla();
      });

      divSemestre.appendChild(divRamo);
    });

    const creditosSem = document.createElement("div");
    creditosSem.className = "creditos-total";
    creditosSem.textContent = `Total créditos: ${totalCreditosSem}`;
    divSemestre.appendChild(creditosSem);

    contenedor.appendChild(divSemestre);
  });
}

document.addEventListener("DOMContentLoaded", renderMalla);


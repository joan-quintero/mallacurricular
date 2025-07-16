const materias = [
  // Semestre I
  { nombre: 'Cálculo diferencial', creditos: 4, requisitos: [], semestre: 1 },
  { nombre: 'Geometría y trigonometría', creditos: 2, requisitos: [], semestre: 1 },
  { nombre: 'Introducción a la ingeniería mecánica', creditos: 2, requisitos: [], semestre: 1 },
  { nombre: 'Programación I', creditos: 3, requisitos: [], semestre: 1 },
  { nombre: 'Expresión gráfica', creditos: 2, requisitos: [], semestre: 1 },
  { nombre: 'Química y laboratorio', creditos: 3, requisitos: [], semestre: 1 },
  { nombre: 'Comunicación oral y escrita I', creditos: 2, requisitos: [], semestre: 1 },
  // Semestre II
  { nombre: 'Cálculo integral', creditos: 4, requisitos: ['Cálculo diferencial'], semestre: 2 },
  { nombre: 'Álgebra lineal', creditos: 3, requisitos: ['Cálculo diferencial'], semestre: 2 },
  { nombre: 'Física mecánica', creditos: 4, requisitos: ['Geometría y trigonometría'], semestre: 2 },
  { nombre: 'Programación II', creditos: 3, requisitos: ['Programación I'], semestre: 2 },
  { nombre: 'Geometría descriptiva', creditos: 2, requisitos: ['Expresión gráfica'], semestre: 2 },
  { nombre: 'Comunicación oral y escrita II', creditos: 2, requisitos: ['Comunicación oral y escrita I'], semestre: 2 },
  // Agrega los demás ramos hasta semestre X con sus requisitos como en los anteriores
];

let creditosAprobados = 0;

function crearMalla() {
  const malla = document.getElementById('malla');
  const semestres = [...new Set(materias.map(m => m.semestre))];

  semestres.forEach(semestre => {
    const divSem = document.createElement('div');
    divSem.classList.add('semestre');
    const header = document.createElement('h2');
    header.textContent = `Semestre ${semestre}`;
    divSem.appendChild(header);

    const materiasSem = materias.filter(m => m.semestre === semestre);
    let totalCreditos = 0;

    materiasSem.forEach(materia => {
      totalCreditos += materia.creditos;
      const div = document.createElement('div');
      div.className = 'materia';
      div.textContent = `${materia.nombre} - ${materia.creditos} créditos`;
      div.dataset.nombre = materia.nombre;
      div.dataset.requisitos = materia.requisitos.length ? `Requiere: ${materia.requisitos.join(', ')}` : 'Sin requisitos';

      if (materia.requisitos.length > 0) div.classList.add('bloqueada');

      div.addEventListener('click', () => marcarAprobada(materia.nombre));
      divSem.appendChild(div);
    });

    const creditosText = document.createElement('div');
    creditosText.classList.add('creditos-total');
    creditosText.textContent = `Total créditos semestre: ${totalCreditos}`;
    divSem.appendChild(creditosText);

    malla.appendChild(divSem);
  });
}

function marcarAprobada(nombre) {
  const div = document.querySelector(`.materia[data-nombre='${nombre}']`);
  if (div.classList.contains('bloqueada')) return;
  if (div.classList.contains('aprobada')) return;

  div.classList.add('aprobada');
  const materia = materias.find(m => m.nombre === nombre);
  creditosAprobados += materia.creditos;
  document.getElementById('creditos-aprobados').textContent = `Créditos aprobados: ${creditosAprobados}`;

  desbloquearMaterias();
}

function desbloquearMaterias() {
  document.querySelectorAll('.materia.bloqueada').forEach(div => {
    const nombre = div.dataset.nombre;
    const materia = materias.find(m => m.nombre === nombre);
    const requisitosCumplidos = materia.requisitos.every(req => {
      const aprobada = document.querySelector(`.materia[data-nombre='${req}']`);
      return aprobada && aprobada.classList.contains('aprobada');
    });

    if (requisitosCumplidos) {
      div.classList.remove('bloqueada');
    }
  });
}

window.onload = crearMalla;


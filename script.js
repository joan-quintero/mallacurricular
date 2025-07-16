const ramos = [
  // Estructura: nombre, semestre, créditos, requisitos (array de nombres)
  { nombre: 'Calculo diferencial', semestre: 1, creditos: 4, requisitos: [] },
  { nombre: 'Geometría y trigonometria', semestre: 1, creditos: 2, requisitos: [] },
  { nombre: 'Introducción a la ingeniería mecánica', semestre: 1, creditos: 2, requisitos: [] },
  { nombre: 'Programación I', semestre: 1, creditos: 3, requisitos: [] },
  { nombre: 'Expresión gráfica', semestre: 1, creditos: 2, requisitos: [] },
  { nombre: 'Química y laboratorio', semestre: 1, creditos: 3, requisitos: [] },
  { nombre: 'Comunicación oral y escrita I', semestre: 1, creditos: 2, requisitos: [] },

  { nombre: 'Calculo integral', semestre: 2, creditos: 4, requisitos: ['Calculo diferencial'] },
  { nombre: 'Álgebra lineal', semestre: 2, creditos: 3, requisitos: ['Calculo diferencial'] },
  { nombre: 'Física mecánica', semestre: 2, creditos: 4, requisitos: ['Geometría y trigonometria'] },
  { nombre: 'Programación II', semestre: 2, creditos: 3, requisitos: ['Programación I'] },
  { nombre: 'Geometría descriptiva', semestre: 2, creditos: 2, requisitos: ['Expresión gráfica'] },
  { nombre: 'Comunicación oral y escrita II', semestre: 2, creditos: 2, requisitos: ['Comunicación oral y escrita I'] },

  // Agrega los demás ramos siguiendo esta estructura...
];

const aprobados = new Set();
let creditosAprobados = 0;

function crearMalla() {
  const malla = document.getElementById('malla');
  for (let i = 1; i <= 10; i++) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('semestre');
    const titulo = document.createElement('h2');
    titulo.textContent = `Semestre ${i}`;
    contenedor.appendChild(titulo);

    const ramosSem = ramos.filter(r => r.semestre === i);
    ramosSem.forEach(ramo => {
      const div = document.createElement('div');
      div.classList.add('ramo');
      div.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;
      div.dataset.nombre = ramo.nombre;
      div.dataset.requisitos = ramo.requisitos.join(', ');
      div.dataset.tooltip = ramo.requisitos.length > 0 ? 'Requisitos:\n' + ramo.requisitos.join('\n') : 'Sin requisitos';
      div.dataset.aprobado = 'false';
      if (ramo.requisitos.length > 0) div.dataset.bloqueado = 'true';
      else div.dataset.bloqueado = 'false';

      div.addEventListener('click', () => toggleAprobacion(ramo, div));
      contenedor.appendChild(div);
    });

    malla.appendChild(contenedor);
  }
}

function toggleAprobacion(ramo, div) {
  if (div.dataset.bloqueado === 'true') return;
  const aprobado = div.dataset.aprobado === 'true';

  if (!aprobado) {
    div.dataset.aprobado = 'true';
    aprobados.add(ramo.nombre);
    creditosAprobados += ramo.creditos;
  } else {
    div.dataset.aprobado = 'false';
    aprobados.delete(ramo.nombre);
    creditosAprobados -= ramo.creditos;
  }
  document.getElementById('creditos-aprobados').textContent = creditosAprobados;
  actualizarBloqueos();
}

function actualizarBloqueos() {
  document.querySelectorAll('.ramo').forEach(div => {
    const requisitos = div.dataset.requisitos.split(',').map(r => r.trim()).filter(r => r);
    const desbloqueado = requisitos.every(r => aprobados.has(r));
    div.dataset.bloqueado = requisitos.length === 0 || desbloqueado ? 'false' : 'true';
  });
}

crearMalla();

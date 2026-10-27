 const body = document.getElementById('body');
    const btnElphaba = document.getElementById('btn-elphaba');
    const btnGlinda = document.getElementById('btn-glinda');

    function resetState() {
      body.classList.remove('elphaba', 'glinda');
      btnElphaba.classList.remove('active');
      btnGlinda.classList.remove('active');
    }

    btnElphaba.addEventListener('click', () => {
      if (body.classList.contains('elphaba')) {
        resetState();
      } else {
        resetState();
        body.classList.add('elphaba');
        btnElphaba.classList.add('active');
      }
    });

    btnGlinda.addEventListener('click', () => {
      if (body.classList.contains('glinda')) {
        resetState();
      } else {
        resetState();
        body.classList.add('glinda');
        btnGlinda.classList.add('active');
      }
    });

const menuBtn = document.getElementById('menu-hamburguesa');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
      menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });

      document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }

/* ---------- mostrar o no sinopsis y contexto ---------- */

function mostrarSinopsis() {
    document.getElementById("guia-sinopsis").style.display = "block";
    document.getElementById("guia-contexto").style.display = "none";
  document.getElementById("guia-botonsinopsis").style.borderColor = "#d4f727";
    document.getElementById("guia-botoncontexto").style.borderColor = "#FFFFFF";
}

function mostrarContexto() {
    document.getElementById("guia-sinopsis").style.display = "none";
    document.getElementById("guia-contexto").style.display = "block";
    document.getElementById("guia-botoncontexto").style.borderColor = "#d4f727";
    document.getElementById("guia-botonsinopsis").style.borderColor = "#FFFFFF";
}

const galeria = [
    "galeria-galeria1",
    "galeria-galeria2",
    "galeria-galeria3",
    "galeria-galeria4",
    "galeria-galeria5",
    "galeria-galeria6",
    "galeria-galeria7",
    "galeria-galeria8"
];
  /*fuente del mouse: https://webdesign.tutsplus.com/javascript-sparkle-cursor--cms-109158t*/

/* ---------- Modal / Cartelito de Reparto ---------- */
const modal = document.getElementById('modal-personaje');
const modalTitulo = document.getElementById('modal-titulo');
const modalTexto = document.getElementById('modal-texto');
const cerrarModal = document.getElementById('cerrar-modal');

document.querySelectorAll('.personaje-card').forEach(card => {
  card.addEventListener('click', () => {
    const nombre = card.getAttribute('data-nombre');
    const desc = card.getAttribute('data-desc');
    if (modal && modalTitulo && modalTexto) {
      modalTitulo.textContent = nombre;
      modalTexto.textContent = desc;
      modal.style.display = 'flex';
    }
  });
});

if (cerrarModal && modal) {
  cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = (e.clientX - 4) + 'px';
    sparkle.style.top = (e.clientY - 4) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  });

mostrarSinopsis();

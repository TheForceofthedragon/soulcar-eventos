// Inicializar carrusel Swiper
const swiper = new Swiper('.autos-swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Formulario de reserva
document.getElementById('formReserva').addEventListener('submit', function(e) {
    e.preventDefault();
      
      const form = e.target;
      const data = {
      tipo: "reserva",
      nombre: form.nombre.value,
      telefono: form.telefono.value,
      fecha: form.fecha.value,
      auto: form.auto.value,
      detalles: form.detalles.value
     };

    fetch('https://script.google.com/macros/s/AKfycbwq-ZQe8P7zkoh6mTv1ce8STuWsYissPb-KtdoHcvg-5_9Xa48ce4lrXCdBIe0L2hP6/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        alert('¡Reserva enviada!');
        this.reset();
    })
    .catch(error => {
        alert('Error al enviar.');
        console.error(error);
    });
});


// Formulario de alquiler
document.getElementById('formAlquiler').addEventListener('submit', function(e) {
    e.preventDefault();

      const form = e.target;
      const data = {
          tipo: "proveedor",
          nombre: form.nombre.value,
          correo: form.correo.value,
          telefono: form.telefono.value,
          modelo: form.modelo.value,
          detalles: form.detalles.value
      };

    fetch('https://script.google.com/macros/s/AKfycbwq-ZQe8P7zkoh6mTv1ce8STuWsYissPb-KtdoHcvg-5_9Xa48ce4lrXCdBIe0L2hP6/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        alert('¡Propuesta enviada!');
        this.reset();
    })
    .catch(error => {
        alert('Error al enviar.');
        console.error(error);
    });
});


// Animaciones por scroll
const sections = document.querySelectorAll('section');
const showOnScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Modal autos
function mostrarModal(auto) {
    const contenido = {
        'bmw': `
            <h3>BMW 535i Blanco</h3>
            <div class="swiper modal-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="img/bmw-blanco.jpg" alt="BMW Blanco"></div>
                    <div class="swiper-slide"><img src="img/bmw-lateral.jpg" alt="BMW Lateral"></div>
                    <div class="swiper-slide"><img src="img/bmw-frontal.jpg" alt="BMW Frontal"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <p>Elegancia y potencia para momentos especiales. Ideal para bodas, filmaciones y fotos profesionales.</p>
        `,
        'camaro': `
            <h3>Chevrolet Camaro Azul</h3>
            <div class="swiper modal-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="img/camaro-azul.jpg" alt="Camaro Azul"></div>
                    <div class="swiper-slide"><img src="img/camaro-frontal.jpg" alt="Camaro Frontal"></div>
                    <div class="swiper-slide"><img src="img/camaro-costado.jpg" alt="Camaro Costado"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <p>Descapotable vibrante, perfecto para fiestas inolvidables, clips y sesiones fotográficas con actitud.</p>
        `
    };

    const modal = document.getElementById('modalAuto');
    const contenidoModal = document.getElementById('contenidoModal');

    contenidoModal.innerHTML = `
        <span class="modal-close" onclick="cerrarModal()">&times;</span>
        ${contenido[auto]}
    `;
    modal.style.display = 'flex';

    // Esperar un momento para inicializar el swiper del modal
    setTimeout(() => {
        new Swiper('.modal-swiper', {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, 100);
}

function cerrarModal() {
    const modal = document.getElementById('modalAuto');
    const contenidoModal = document.getElementById('contenidoModal');

    modal.style.display = 'none';
    contenidoModal.innerHTML = ''; // limpia todo
}

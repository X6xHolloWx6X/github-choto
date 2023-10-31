document.addEventListener("DOMContentLoaded", function() {
  // Tu código JavaScript aquí
  
  // Función para alternar el menú
  function toggleMenu() {
      var mainMenu = document.querySelector('.main-menu');
      mainMenu.classList.toggle('main-menu--show');
  }

  // Configuración del carrusel
  var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      speed: 600,
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
      },
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: false,
      },
  });

  // Resto de tu código JavaScript aquí
  
});

document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    
    // Función para alternar el menú
    function toggleMenu() {
        var mainMenu = document.querySelector('.main-menu');
        mainMenu.classList.toggle('main-menu--show');
    }
  

  
    // Asignar el evento clic al botón
    var toggleMenuButton = document.getElementById('toggle-menu');
    toggleMenuButton.addEventListener('click', toggleMenu);
  
    // Resto de tu código JavaScript aquí
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var contenedor = document.getElementById('contenedor-imagenes');
    var trabajosLink = document.getElementById('trabajos-link');
    var mostrarTimeout; // Variable para almacenar el timeout de mostrar

    // Ocultar el contenedor de imágenes inicialmente
    contenedor.style.display = 'none';

    // Mostrar el contenedor de imágenes al pasar el ratón sobre "Trabajos"
    trabajosLink.addEventListener('mouseover', function() {
        contenedor.style.display = 'flex'; // Mostrar inmediatamente
    });

    // Mantener el contenedor de imágenes visible mientras el mouse esté sobre él
    contenedor.addEventListener('mouseenter', function() {
        clearTimeout(mostrarTimeout); // Cancelar el timeout si aún no se ha ocultado
    });

    // Ocultar el contenedor de imágenes si el ratón sale de "Trabajos" o del contenedor de imágenes
    function ocultarImagenes() {
        mostrarTimeout = setTimeout(function() {
            contenedor.style.display = 'none';
        }, 100); // Ocultar después de 500 milisegundos
    }

    trabajosLink.addEventListener('mouseleave', ocultarImagenes);
    contenedor.addEventListener('mouseleave', ocultarImagenes);
});

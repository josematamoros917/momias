$(document).ready(function() {
    // Resaltar el texto al tocar
    $('.scroll-container p').on('touchstart', function() {
        $(this).toggleClass('highlight'); // Alternar clase de resaltado
        setTimeout(() => {
            $(this).removeClass('highlight'); // Remover resaltado después de un tiempo
        }, 1000);
    });
    
    // Cambio de fondo del contenedor al tocar un párrafo
    $('.scroll-container p').on('touchend', function() {
        $('.scroll-container').css('background-color', 'rgba(100, 100, 100, 0.7)'); // Cambia el color de fondo
        setTimeout(() => {
            $('.scroll-container').css('background-color', 'rgba(0, 0, 0, 0.5)'); // Regresar al color original
        }, 1000);
    });
});

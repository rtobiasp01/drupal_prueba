(function (Drupal, once) {
    'use strict';

    Drupal.behaviors.iniciarCarruselGaleria = {
        attach: function (context, settings) {

            // Buscamos todos los carruseles en la página asegurándonos de inicializarlos solo una vez
            const carruseles = once('splide-init', '.mi-carrusel-componente.splide', context);

            carruseles.forEach(function (carruselElement) {

                // Inicializamos Splide con la configuración que pediste
                new Splide(carruselElement, {
                    type: 'loop',       // ¡Carrusel infinito!
                    perPage: 3,
                    perMove: 1,           // Muestra 3 imágenes a la vez
                    gap: '20px',
                    pagination: false,       // Espacio entre imágenes
                    breakpoints: {
                        768: {
                            perPage: 1,       // En móviles (menos de 768px), muestra solo 1
                        }
                    }
                }).mount();

            });
        }
    };

})(Drupal, once);
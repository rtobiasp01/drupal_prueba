(function ($, Drupal, once) {
    'use strict';

    // --- PARCHE DE COMPATIBILIDAD JQUERY PARA DRUPAL 11 ---
    if (!$.type) {
        $.type = function (obj) {
            return obj == null ? String(obj) : Object.prototype.toString.call(obj).replace(/[\[\]]|object /g, '').toLowerCase();
        };
    }
    if (!$.camelCase) {
        $.camelCase = function (str) {
            return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        };
    }
    if (!$.isFunction) {
        $.isFunction = function (obj) {
            return typeof obj === "function";
        };
    }

    Drupal.behaviors.initOwlCarousel = {
        attach: function (context, settings) {
            const elements = once('myOwlCarouselInit', '.owl-carousel', context);

            $(elements).each(function () {
                $(this).owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    mouseDrag: true,
                    items: 3,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            });
        }
    };
})(jQuery, Drupal, once);
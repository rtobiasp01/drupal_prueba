<?php

namespace Drupal\custom_hero\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provee un bloque con nuestro componente Hero Banner.
 *
 * @Block(
 * id = "custom_hero_block",
 * admin_label = @Translation("Hero Banner Personalizado"),
 * category = @Translation("Componentes Custom")
 * )
 */
class HeroBlock extends BlockBase
{

    /**
     * {@inheritdoc}
     */
    public function build()
    {
        // Aquí es donde ocurre la magia. Devolvemos un Render Array.
        return [
            '#theme' => 'hero_banner', // Llamamos a nuestro hook
            '#titulo' => $this->t('Bienvenido al siguiente nivel'),
            '#subtitulo' => $this->t('Has creado tu primer componente profesional en Drupal.'),
            '#url_boton' => '/contact',
            '#texto_boton' => $this->t('Empezar ahora'),
        ];
    }
}

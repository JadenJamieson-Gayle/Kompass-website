<?php
// Hook into the 'init' action
add_action('init', 'custom_theme_enqueue_block_editor_assets');

function custom_theme_enqueue_block_editor_assets() {
    // Enqueue block editor script
    wp_enqueue_script(
        'custom-theme-blocks', // Handle for the script.
        get_template_directory_uri() . '/build/index.js', // Path to the block editor script.
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // Dependencies the script needs.
        filemtime(get_template_directory() . '/build/index.js') // Version number.
    );

    // Enqueue block editor styles
    wp_enqueue_style(
        'custom-theme-block-editor-styles', // Handle for the styles.
        get_template_directory_uri() . '/build/style-index.css', // Path to the block editor styles.
        array(), // Dependency styles.
        filemtime(get_template_directory() . '/build/style-index.css') // Version number.
    );
}

add_action('after_setup_theme', 'custom_theme_add_editor_support');
function custom_theme_add_editor_support() {
    add_theme_support('wp-block-styles');
}

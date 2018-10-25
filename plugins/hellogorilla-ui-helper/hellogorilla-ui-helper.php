<?php
/**
 * WP-PostViewer
 *
 *WP-PostViewer
 * @package   
 * @author    Ruucm
 * @license   GPL-3.0
 * @link      https://github.com/ruucm
 * @copyright 2018 Ruucm
 *
 * @wordpress-plugin
 * Plugin Name:       HelloGorilla UI Helper
 * Plugin URI:        https://github.com/ruucm
 * Description:       React Integration with Wordpress for HelloGorilla
 * Version:           0.1.0
 * Author:            ruucm
 * Author URI:        https://github.com/ruucm
 * Text Domain:       hellogorilla-ui-helper
 * License:           GPL-3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path:       /languages
 */


namespace ruucm\WPR;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'WP_REACTIVATE_VERSION', '0.9.0' );


/**
 * Autoloader
 *
 * @param string $class The fully-qualified class name.
 * @return void
 *
 *  * @since 0.9.0
 */
spl_autoload_register(function ($class) {
    
    // project-specific namespace prefix
    $prefix = 'ruucm\\WPR\\';

    // base directory for the namespace prefix
    $base_dir = __DIR__ . '/includes/';

    // does the class use the namespace prefix?
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    // get the relative class name
    $relative_class = substr($class, $len);

    // replace the namespace prefix with the base directory, replace namespace
    // separators with directory separators in the relative class name, append
    // with .php
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';

    // if the file exists, require it
    if (file_exists($file)) {
        require $file;
    }
});

/**
 * Initialize Plugin
 *
 * @since 0.9.0
 */
function init() {
	$wpr = Plugin::get_instance();
	// $wpr_harbor = Harbor::get_instance();
	$wpr_hellogorilla = HelloGorilla::get_instance();
	$wpr_admin = Admin::get_instance();
    $wpr_rest = Endpoint\Example::get_instance();
    // WebPage Components
    $wpr_webComponents = WebComponents::get_instance();
}
add_action( 'plugins_loaded', 'ruucm\\WPR\\init' );

/**
 * Register the widget
 *
 * @since 0.9.0
 */
function widget_init() {
	return register_widget( new Widget );
}
add_action( 'widgets_init', 'ruucm\\WPR\\widget_init' );

/**
 * Register activation and deactivation hooks
 */
register_activation_hook( __FILE__, array( 'ruucm\\WPR\\Plugin', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'ruucm\\WPR\\Plugin', 'deactivate' ) );


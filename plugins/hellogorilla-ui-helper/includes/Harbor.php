<?php
/**
 * WP-Reactivate
 *
 *
 * @package   WP-Reactivate
 * @author    ruucm
 * @license   GPL-3.0
 * @link      http://ruucm.work/
 * @copyright 2017 ruucm (Pty) Ltd
 */

namespace ruucm\WPR;

/**
 * @subpackage Harbor
 */
class Harbor {

	/**
	 * Instance of this class.
	 *
	 * @since    0.8.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Return an instance of this class.
	 *
	 * @since     0.8.0
	 *
	 * @return    object    A single instance of this class.
	 */
	public static function get_instance() {

		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
			self::$instance->do_hooks();
		}

		return self::$instance;
	}

	/**
	 * Initialize the plugin by setting localization and loading public scripts
	 * and styles.
	 *
	 * @since     0.8.0
	 */
	private function __construct() {
		$plugin = Plugin::get_instance();
		$this->plugin_slug = $plugin->get_plugin_slug();
		$this->version = $plugin->get_plugin_version();
	}


	/**
	 * Handle WP actions and filters.
	 *
	 * @since 	0.8.0
	 */
	private function do_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	/**
	 * Register frontend-specific javascript
	 *
	 * @since     0.8.0
	 */
	public function register_frontend_scripts() {
		// Main CSS
		// wp_register_style( $this->plugin_slug . '-main-style', plugins_url( 'styles/main.css', dirname( __FILE__ ) ), $this->version );
		// wp_enqueue_style( $this->plugin_slug . '-main-style' );
		// Enqeue Harbor Scripts
		wp_register_script( $this->plugin_slug . '-harbor-script', plugins_url( 'assets/js/harbor.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		// wp_enqueue_script( $this->plugin_slug . '-harbor-script' );

	}
}

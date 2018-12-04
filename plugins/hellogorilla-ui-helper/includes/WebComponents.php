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
 * @subpackage WebComponents
 */
class WebComponents {

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
		// Enqeue hellogorilla Scripts
		wp_register_script( $this->plugin_slug . '-hellogorilla-appstyle-script', plugins_url( 'assets/js/AppStyles.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-appstyle-script' );
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

		add_shortcode( 'hellogorilla-main-nav', array( $this, 'print_main_nav' ) );
		add_shortcode( 'hellogorilla-footer', array( $this, 'print_footer' ) );
		add_shortcode( 'hellogorilla-empty-space', array( $this, 'print_empty_space' ) );
		add_shortcode( 'hellogorilla-post-carousel', array( $this, 'print_post_carousel' ) );
		add_shortcode( 'hellogorilla-curation', array( $this, 'print_curation' ) );

		add_shortcode( 'hellogorilla-post-grid', array( $this, 'print_post_grid' ) );
		add_shortcode( 'hellogorilla-single-post', array( $this, 'print_single_post' ) );

		add_shortcode( 'hellogorilla-shop', array( $this, 'print_shop' ) );
		// add_shortcode( 'hellogorilla-single-product', array( $this, 'print_single_product' ) );

		add_shortcode( 'hellogorilla-product-summary', array( $this, 'print_product_summary' ) );
		add_shortcode( 'hellogorilla-product-desc', array( $this, 'print_product_desc' ) );
		add_shortcode( 'hellogorilla-cart-count', array( $this, 'print_cart_count' ) );

		add_shortcode( 'hellogorilla-user-list', array( $this, 'print_user_list' ) );
		add_shortcode( 'hellogorilla-user-profile', array( $this, 'print_user_profile' ) );

		add_shortcode( 'hellogorilla-login', array( $this, 'print_login' ) );
		add_shortcode( 'hellogorilla-signup', array( $this, 'print_signup' ) );
		add_shortcode( 'hellogorilla-new-artist', array( $this, 'print_new_artist' ) );
		add_shortcode( 'hellogorilla-mypage', array( $this, 'print_mypage' ) );
		add_shortcode( 'hellogorilla-checkout', array( $this, 'print_checkout' ) );


		add_shortcode( 'hellogorilla-page-banner', array( $this, 'print_page_banner' ) );


	}

	public function print_main_nav( $atts, $content = null ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		


		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'shortcodeChild'       => do_shortcode($content),
			'nonce' => wp_create_nonce( 'wp_rest' ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-main-nav" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_footer( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );

		$object_name = 'wpr_object_' . uniqid();

		$shortcode = '<div class="hellogorilla-footer" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_empty_space( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'height'       => 100,
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-empty-space" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}
	public function print_post_carousel( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'type'       => 'this_week',
			'title'       => '',
			'link'       => '',
			'align'       => '',
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-post-carousel" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}


	public function print_curation( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'root' => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'type'       => 'this_week',
			'title'       => '',
			'link'       => '',
			'align'       => '',
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-curation" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}


	public function print_post_grid( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );

		$object_name = 'wpr_object_' . uniqid();

		$shortcode = '<div class="hellogorilla-post-grid" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}


	public function print_single_post( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'post_id'       => 1,
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-single-post" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_shop( $atts, $content = null ) {
		$object_name = 'wpr_object_' . uniqid();
		$shortcode = '<div class="hellogorilla-shop" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	// public function print_single_product( $atts ) {
	// 	wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
	// 	wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
	// 	$object_name = 'wpr_object_' . uniqid();

	// 	$object = shortcode_atts( array(
	// 		'post_id'       => 1,
	// 	), $atts, 'wp-reactivate' );

	// 	wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

	// 	$shortcode = '<div class="hellogorilla-single-product" data-object-id="' . $object_name . '"></div>';
	// 	return $shortcode;
	// }

	// Single Product

	public function print_product_summary( $atts, $content = null ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );

		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'post_id'       => get_the_ID(),
			'shortcodeChild'       => do_shortcode($content),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-product-summary" data-object-id="' . $object_name . '"></div>';

		return $shortcode;
	}

	public function print_product_desc( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );

		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'post_id'       => get_the_ID(),
			'shortcodeChild'       => do_shortcode( get_post( get_the_ID() )->post_content ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-product-desc" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_cart_count( $atts ) {
		$shortcode = '<div class="hellogorilla-cart-count">' . WC()->cart->get_cart_contents_count() . '</div>';
		return $shortcode;
	}

	public function print_user_list( $atts, $content = null ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );
		$shortcode = '<div class="hellogorilla-user-list" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}
	
	public function print_user_profile( $atts, $content = null ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );
		$shortcode = '<div class="hellogorilla-user-profile" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_login( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );
		$shortcode = '<div class="hellogorilla-login" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_signup( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );
		$shortcode = '<div class="hellogorilla-signup" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_new_artist( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );
		$shortcode = '<div class="hellogorilla-new-artist" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}



	public function print_mypage( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'align'       => '',
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );
		$shortcode = '<div class="hellogorilla-mypage" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}

	public function print_checkout( $atts ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );
		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'align'       => '',
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-checkout" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}


	public function print_page_banner( $atts, $content = null ) {
		wp_register_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', plugins_url( 'assets/js/WebComponents.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_enqueue_script( $this->plugin_slug . '-hellogorilla-webcomponents-script' );

		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'banner_text'       => '안녕하세요',
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-hellogorilla-webcomponents-script', $object_name, $object );

		$shortcode = '<div class="hellogorilla-page-banner" data-object-id="' . $object_name . '"></div>';

		return $shortcode;
	}
	
}

<?php
/**
 * hellogorilla functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package hellogorilla
 */

if ( ! function_exists( 'hellogorilla_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function hellogorilla_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on hellogorilla, use a find and replace
		 * to change 'hellogorilla' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'hellogorilla', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'hellogorilla' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'hellogorilla_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'hellogorilla_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function hellogorilla_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'hellogorilla_content_width', 640 );
}
add_action( 'after_setup_theme', 'hellogorilla_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function hellogorilla_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'hellogorilla' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'hellogorilla' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'hellogorilla_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function hellogorilla_scripts() {
	wp_enqueue_style( 'hellogorilla-style', get_stylesheet_uri() );

	wp_enqueue_script( 'hellogorilla-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'hellogorilla-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'hellogorilla_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}


/**
 * CleanUp Wp
 */
// Disable the emoji's
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	// add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	// add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
 }
 add_action( 'init', 'disable_emojis' );

// remove header links
add_action('init', 'tjnz_head_cleanup');
function tjnz_head_cleanup() {
		remove_action( 'wp_head', 'feed_links_extra', 3 );                      // Category Feeds
		remove_action( 'wp_head', 'feed_links', 2 );                            // Post and Comment Feeds
		remove_action( 'wp_head', 'rsd_link' );                                 // EditURI link
		remove_action( 'wp_head', 'wlwmanifest_link' );                         // Windows Live Writer
		remove_action( 'wp_head', 'index_rel_link' );                           // index link
		remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );              // previous link
		remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );               // start link
		remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );   // Links for Adjacent Posts
		remove_action( 'wp_head', 'wp_generator' );                             // WP version
		// if (!is_admin() && !is_product()) {
		// 		wp_deregister_script('jquery');                                     // De-Register jQuery
		// 		wp_register_script('jquery', '', '', '', true);                     // Register as 'empty', because we manually insert our script in header.php
		// }
}

// remove WP version from RSS
add_filter('the_generator', 'tjnz_rss_version');
function tjnz_rss_version() { return ''; }



/**
 * Add Menu to WP API
 */
function get_nav_menu_items_by_location( $args = [] ) {
 
	$location = 'menu-1'; // menu-1 is slug of Primary Menu

	// Get all locations
	$locations = get_nav_menu_locations();

	// Get object id by location
	$object = wp_get_nav_menu_object( $locations[$location] );

	// Get menu items by menu name
	$menu_items = wp_get_nav_menu_items( $object->name, $args );

	// Return menu post objects
	return $menu_items;
}

add_action( 'rest_api_init', function () {
			register_rest_route( 'custom', '/menu', array(
			'callback' => 'get_nav_menu_items_by_location',
	) );
} );

// unset woocommerce defautlt css
remove_action( 'woocommerce_before_main_content','woocommerce_breadcrumb', 20, 0);

add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );


/**
 * Remove related products output
 */
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );


/**
 * Add Meta fields to WP Users API
 */

add_action( 'rest_api_init', 'create_api_user_posts_field' );
 
function create_api_user_posts_field() {
	register_rest_field( 'user', 'user_email',
		array(
			'get_callback'    => function ( $user ) {
					// logw('$user : ');
					// logw_a($user);

					// logw('get_user_meta( $userid ) : ');
					// logw_a(get_user_meta( $user['id'] ));
					return $user['email'];
			},
			'update_callback' => null,
			'schema'          => null,
		)
	);

	register_rest_field( 'user', 'user_portfolios',
		array(
			'get_callback'    => function ( $user ) {
					$data = get_user_meta( $user['id'] );

					$object1 = new stdClass();
					$object1->portfolio_img = array_key_exists( "portfolio_1", $data) ? wp_get_attachment_url( $data['portfolio_1'][0] ) : '';
					$object1->portfolio_title = array_key_exists( "portfolio_1_title", $data) ? $data['portfolio_1_title'][0] : '';

					$object2 = new stdClass();
					$object2->portfolio_img = array_key_exists( "portfolio_2", $data) ? wp_get_attachment_url( $data['portfolio_2'][0] ) : '';
					$object2->portfolio_title = array_key_exists( "portfolio_2_title", $data) ? $data['portfolio_2_title'][0] : '';

					$object3 = new stdClass();
					$object3->portfolio_img = array_key_exists( "portfolio_3", $data) ? wp_get_attachment_url( $data['portfolio_3'][0] ) : '';
					$object3->portfolio_title = array_key_exists( "portfolio_3_title", $data) ? $data['portfolio_3_title'][0] : '';

					$object4 = new stdClass();
					$object4->portfolio_img = array_key_exists( "portfolio_4", $data) ? wp_get_attachment_url( $data['portfolio_4'][0] ) : '';
					$object4->portfolio_title = array_key_exists( "portfolio_4_title", $data) ? $data['portfolio_4_title'][0] : '';

					$object5 = new stdClass();
					$object5->portfolio_img = array_key_exists( "portfolio_5", $data) ? wp_get_attachment_url( $data['portfolio_4'][0] ) : '';
					$object5->portfolio_title = array_key_exists( "portfolio_5_title", $data) ? $data['portfolio_5_title'][0] : '';

					$a = array();
					$object1->portfolio_title != '' ? array_push($a, $object1) : '';
					$object2->portfolio_title != '' ? array_push($a, $object2) : '';
					$object3->portfolio_title != '' ? array_push($a, $object3) : '';
					$object4->portfolio_title != '' ? array_push($a, $object4) : '';
					$object5->portfolio_title != '' ? array_push($a, $object5) : '';
					return $a ;
			},
			'update_callback' => null,
			'schema'          => null,
		)
	);


	register_rest_field( 'user', 'user_posts',
		array(
			'get_callback'    => function ( $user ) {
					$args = array(
						'author'        =>  $user['id'], 
						'orderby'       =>  'post_date',
						'order'         =>  'ASC',
						'posts_per_page' => -1 // no limit
					);
					$res = get_posts( $args );
					return $res;
			},
			'update_callback' => null,
			'schema'          => null,
		)
	);

	register_rest_field( 'user', 'user_products',
		array(
			'get_callback'    => function ( $user ) {
					$args = array(
							'post_type'             => 'product',
							'post_status'           => 'publish',
							'author'    => $user['id'],
					);
					$products = new WP_Query($args);
					$res = $products->posts;

					for ($i=0; $i < sizeof($res); $i++) { 
						$res[$i]->image = get_the_post_thumbnail_url( $res[$i]->ID, 'full' );   
					}
					return $res;
			},
			'update_callback' => null,
			'schema'          => null,
		)
	);
}


/**
 * Add Meta fields to WC Products API
 */
add_filter( 'woocommerce_rest_prepare_product_object', 'custom_products_api_data', 90, 2 );

function custom_products_api_data( $response, $post ) {

	$response->data['vendor_id'] = get_post_field( 'post_author', $response->data['id']);
	$response->data['vendor_nickname'] = get_the_author_meta( 'nickname', $response->data['vendor_id']);
	$response->data['vendor_img_profile'] = get_the_author_meta( 'img_profile', $response->data['vendor_id']);
	$response->data['vendor_short_desc'] = get_the_author_meta( 'short_desc', $response->data['vendor_id']);

  return $response;
}




/**
 * Enable Gutenberg editor by post type
 */

function enable_gutenberg_by_post_type($is_enabled, $post_type) {
	if ($post_type === 'product') return true; // change book to your post type
	return $is_enabled;	
}
add_filter('gutenberg_can_edit_post_type', 'enable_gutenberg_by_post_type', 10, 2);

/**
 * change editor role name to 아티스트
 */

function wps_change_role_name() {
	global $wp_roles;
	if ( ! isset( $wp_roles ) )
			$wp_roles = new WP_Roles();
	$wp_roles->roles['editor']['name'] = '아티스트';
}
add_action('init', 'wps_change_role_name');


/**
 * register user meta for update shipping infos
 */ 
register_meta( 'user', 'shipping_first_name', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'shipping_address_1', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'shipping_address_2', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'shipping_postcode', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'short_desc', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);

register_meta( 'user', 'long_desc', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'homepage', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'facebook', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'instagram', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);

register_meta( 'user', 'img_cover', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);


register_meta( 'user', 'img_profile', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);

register_meta( 'user', 'artist_video', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);

register_meta( 'user', 'portfolio_01', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'portfolio_02', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);
register_meta( 'user', 'portfolio_03', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);


/**
 * Login, Logout WP API
 */
add_action( 'rest_api_init', 'register_api_hooks' );
// API custom endpoints for WP-REST API
function register_api_hooks() {
    register_rest_route(
        'custom', '/login/',
        array(
            'methods'  => 'POST',
            'callback' => 'login',
        )
		);
}
function login( $param ) {
	$user_input = getProtectedValue($param, 'params')['JSON'];
	$creds = array(
		'user_login'    => $user_input['id'],
		'user_password' => $user_input['password'],
		'remember'      => true
	);

	$user = wp_signon( $creds, false );
	if ( is_wp_error( $user ) ) {
			echo $user->get_error_message();
	}
	return $user;
}
function getProtectedValue($obj,$name) {
  $array = (array)$obj;
  $prefix = chr(0).'*'.chr(0);
  return $array[$prefix.$name];
}

add_action( 'rest_api_init', 'register_logout_api_hooks' );
// API custom endpoints for WP-REST API
function register_logout_api_hooks() {
    register_rest_route(
        'custom', '/logout/',
        array(
            'methods'  => 'POST',
            'callback' => 'logout',
        )
		);
}
function logout( $param ) {
	wp_logout();
}


/**
 * Add Edit author feature for Woocommerce
 */
add_action('init', 'wpse_74054_add_author_woocommerce', 999 );

function wpse_74054_add_author_woocommerce() {
    add_post_type_support( 'product', 'author' );
}
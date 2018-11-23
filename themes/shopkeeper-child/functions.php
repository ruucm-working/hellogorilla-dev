<?php //Start building your awesome child theme functions

add_action( 'wp_enqueue_scripts', 'shopkeeper_enqueue_styles', 100 );
function shopkeeper_enqueue_styles() {
    
    // enqueue parent styles
	wp_enqueue_style('shopkeeper-parent-styles', get_template_directory_uri() .'/style.css');

	// enqueue RTL styles
    if( is_rtl() ) {
    	wp_enqueue_style( 'shopkeeper-child-rtl-styles',  get_template_directory_uri() . '/rtl.css', array( 'shopkeeper-styles' ), wp_get_theme()->get('Version') );
    }
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
 
	// $location = 'menu-1'; // menu-1 is slug of Primary Menu
	$location = 'main-navigation'; // menu-1 is slug of Primary Menu

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
 * change editor role name to 아티스트 / shop_manager to 고객
 */

function wps_change_role_name() {
	global $wp_roles;
	if ( ! isset( $wp_roles ) )
			$wp_roles = new WP_Roles();
	$wp_roles->roles['editor']['name'] = '아티스트';
	$wp_roles->roles['shop_manager']['name'] = '고객';
	$wp_roles->role_names['shop_manager'] = '고객';
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


/**
 * Unset Woocommerce fields
 */
add_filter( 'woocommerce_checkout_fields' , 'custom_remove_woo_checkout_fields' );
 
function custom_remove_woo_checkout_fields( $fields ) {

		// remove billing fields
    unset($fields['billing']['billing_country']);
    unset($fields['billing']['billing_company']);
    unset($fields['billing']['billing_last_name']);

		$fields['billing']['billing_address_1']['label'] = '주소';
		$fields['billing']['billing_address_1']['placeholder'] = '-';
		
    // unset($fields['billing']['billing_first_name']);
    // unset($fields['billing']['billing_address_1']);
		$fields['billing']['billing_address_2']['label'] = '상세 주소';
    unset($fields['billing']['billing_city']);
    // unset($fields['billing']['billing_postcode']);
    // unset($fields['billing']['billing_state']);
    // unset($fields['billing']['billing_phone']);
    // unset($fields['billing']['billing_email']);
	 
		
		// remove shipping fields
		unset($fields['shipping']['shipping_country']);
		unset($fields['shipping']['shipping_company']);
		unset($fields['shipping']['shipping_last_name']);

		$fields['shipping']['shipping_address_1']['label'] = '주소';
		$fields['shipping']['shipping_address_1']['placeholder'] = '-';
		$fields['shipping']['shipping_address_2']['label'] = '상세 주소';

		// unset($fields['shipping']['shipping_first_name']);
		// unset($fields['shipping']['shipping_address_1']);
		// unset($fields['shipping']['shipping_address_2']);
		unset($fields['shipping']['shipping_city']);
		// unset($fields['shipping']['shipping_postcode']);
		// unset($fields['shipping']['shipping_state']);
		// unset($fields['shipping']['shipping_phone']);
		// unset($fields['shipping']['shipping_email']);

    // remove order comment fields
    unset($fields['order']['order_comments']);
    
    return $fields;
}

/**
 * Remove or Add WooCommerce My Account Menu Items
 */
add_filter ( 'woocommerce_account_menu_items', 'misha_remove_my_account_links' );
function misha_remove_my_account_links( $menu_links ){
 
	// unset( $menu_links['edit-address'] ); // Addresses
 
 
	unset( $menu_links['dashboard'] ); // Dashboard
	//unset( $menu_links['payment-methods'] ); // Payment Methods
	//unset( $menu_links['orders'] ); // Orders
	unset( $menu_links['downloads'] ); // Downloads
	// unset( $menu_links['edit-account'] ); // Account details
	//unset( $menu_links['customer-logout'] ); // Logout
 
	return $menu_links;
 
}



/**
 * Add Language Check to WP API
 */




/**
 * Current Language WP API
 */
// add_action( 'init', 'get_current_lang_api_hooks' );
// API custom endpoints for WP-REST API
function get_current_lang_api_hooks() {

	$current_lang = pll_current_language();

	logw('current_lang : ');
	logw_a($current_lang);
	register_rest_route(
			'custom', '/current-lang/',
			array(
					'methods'  => 'GET',
					'callback' => 'get_current_lang',
					'args'            => array(
						'current_lang'	=> $current_lang,
					),
			)
	);
}
function get_current_lang( $param ) {

	logw('param : ');
	logw_a($param);

	$current_lang = getProtectedValue($param, 'attributes')['args']['current_lang'];;

	logw('current_lang2 : ');
	logw_a($current_lang);

	// $user_email = wp_get_current_user();
	// logw('user_email : ');
	// logw_a($user_email);

	return $current_lang;

}


/* Remove the "Dashboard" from the admin menu for non-admin users **********************************
** http://wordpress.stackexchange.com/questions/52752/hide-dashboard-from-non-admin-users ******* */	
/* !관리자 아닌 회원 알림판 제거 & 리다이렉트 *********************************************************** */
function custom_remove_dashboard () {
	global $current_user, $menu, $submenu;
	wp_get_current_user();

	if( ! in_array( 'administrator', $current_user->roles ) ) {
			reset( $menu );
			$page = key( $menu );
			while( ( __( 'Dashboard' ) != $menu[$page][0] ) && next( $menu ) ) {
					$page = key( $menu );
			}
			if( __( 'Dashboard' ) == $menu[$page][0] ) {
					unset( $menu[$page] );
			}
			reset($menu);
			$page = key($menu);
			while ( ! $current_user->has_cap( $menu[$page][1] ) && next( $menu ) ) {
					$page = key( $menu );
			}
			if ( preg_match( '#wp-admin/?(index.php)?$#', $_SERVER['REQUEST_URI'] ) &&
					( 'index.php' != $menu[$page][2] ) ) {
						if (!current_user_can('subscriber')) {
							wp_redirect( home_url( ) );
						} else {
							wp_redirect( home_url( ) );
						}
			}
	}
}
add_action('admin_menu', 'custom_remove_dashboard');


/**
 *	Redirect if current user is logged out and current page is /my-account
 */
add_action( 'wp', 'redirect' );
function redirect() {
  if ( is_page('my-account') && !is_user_logged_in() ) {
      wp_redirect( home_url('/login') );
      die();
  }
}


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
register_meta( 'user', 'shipping_phone', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);

register_meta( 'user', 'billing_phone', 
	array(
		'type'             => 'string',
		'single'        => true,
		'show_in_rest'    => true, 
	)
);

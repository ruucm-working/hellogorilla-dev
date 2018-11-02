
/***************************************************************/
			/* 	Header *****************************************************/
			/***************************************************************/
			
			<?php if ( (isset($shopkeeper_theme_options['sticky_header_background_color'])) && (trim($shopkeeper_theme_options['sticky_header_background_color']) != "" ) ) : ?>
				.site-header
				{
					background: <?php echo esc_html($shopkeeper_theme_options['sticky_header_background_color']) ?>;
				}
			<?php endif; ?>
			
			@media only screen and (min-width: 63.9375em) {
			.site-header {
				<?php if ( (isset($shopkeeper_theme_options['main_header_background']['background-color'])) ) : ?>
				background-color:<?php echo esc_html($shopkeeper_theme_options['main_header_background']['background-color']); ?>;
				<?php endif; ?>
				
				<?php if ( (isset($shopkeeper_theme_options['main_header_background']['background-image'])) && ($shopkeeper_theme_options['main_header_background']['background-image']) != "" ) : ?>
				background-image:url(<?php echo esc_url($shopkeeper_theme_options['main_header_background']['background-image']); ?>);
				<?php endif; ?>
				
				<?php if ( (isset($shopkeeper_theme_options['main_header_background']['background-repeat'])) ) : ?>
				background-repeat:<?php echo esc_html($shopkeeper_theme_options['main_header_background']['background-repeat']); ?>;
				<?php endif; ?>
				
				<?php if ( (isset($shopkeeper_theme_options['main_header_background']['background-position'])) ) : ?>
				background-position:<?php echo esc_html($shopkeeper_theme_options['main_header_background']['background-position']); ?>;
				<?php endif; ?>
				
				<?php if ( (isset($shopkeeper_theme_options['main_header_background']['background-size'])) ) : ?>
				background-size:<?php echo esc_html($shopkeeper_theme_options['main_header_background']['background-size']); ?>;
				<?php endif; ?>
				
				<?php if ( (isset($shopkeeper_theme_options['main_header_background']['background-attachment'])) ) : ?>
				background-attachment:<?php echo esc_html($shopkeeper_theme_options['main_header_background']['background-attachment']); ?>;
				<?php endif; ?>
			}
			}
			
			
			<?php 
			$site_logo_height = 33;
			if ( (isset($shopkeeper_theme_options['site_logo'])) && (trim($shopkeeper_theme_options['site_logo']) != "" ) ) {
				$site_logo_height = $shopkeeper_theme_options['logo_height']; 
			} else {
				$site_logo_height = 33;
			}
			?>
			
			<?php 
			
			$content_margin = 0;
			
			//if ( is_admin_bar_showing() ) { $content_margin = 32; }
			
			$page_id = "";
			if ( is_single() || is_page() ) {
				$page_id = get_the_ID();
			} else if ( is_home() ) {
				$page_id = get_option('page_for_posts');						
			}
						
			
			if ( 
			((isset($shopkeeper_theme_options['sticky_header'])) && (trim($shopkeeper_theme_options['sticky_header']) == "1" )) || 
			((isset($shopkeeper_theme_options['main_header_transparency'])) && (trim($shopkeeper_theme_options['main_header_transparency']) == "1" )) ||
			((get_post_meta($page_id, 'page_header_transparency', true)) && (get_post_meta($page_id, 'page_header_transparency', true) != "inherit"))
			) { 
				
				if ( isset($shopkeeper_theme_options['main_header_layout']) ) {		
					if ( $shopkeeper_theme_options['main_header_layout'] == "1" || $shopkeeper_theme_options['main_header_layout'] == "11" ) {
						$content_margin = $content_margin + $site_top_bar_height + $site_logo_height + $shopkeeper_theme_options['spacing_above_logo'] + $shopkeeper_theme_options['spacing_below_logo'];
					} 		
					elseif ( $shopkeeper_theme_options['main_header_layout'] == "2" || $shopkeeper_theme_options['main_header_layout'] == "22" ) {
						$content_margin = $content_margin + $site_top_bar_height + $site_logo_height + $shopkeeper_theme_options['spacing_above_logo'] + $shopkeeper_theme_options['spacing_below_logo'];
					}
					elseif ( $shopkeeper_theme_options['main_header_layout'] == "3" ) {
						$content_margin = $content_margin + $site_top_bar_height + $site_logo_height + $shopkeeper_theme_options['spacing_above_logo'] + $shopkeeper_theme_options['spacing_below_logo'] + 50;
					} 		
				}		
				else {	
					wp_enqueue_style('shopkeeper-header-default', get_template_directory_uri() . '/css/header-default.css', array(), '1.0', 'all' );	
				}
				
			}
			?>
			
			<?php if ( (isset($shopkeeper_theme_options['header_width'])) && ($shopkeeper_theme_options['header_width'] == "full") ) : ?>
			.site-header,
			#site-top-bar
			{
				padding-left:20px;
				padding-right:20px;
			}
			<?php endif; ?>
			
			<?php
			
			if ( (isset($shopkeeper_theme_options['site_logo'])) && (trim($shopkeeper_theme_options['site_logo']) != "" ) ) {
				
				if (is_ssl()) {
					$site_logo = str_replace("http://", "https://", $shopkeeper_theme_options['site_logo']);		
				} else {
					$site_logo = $shopkeeper_theme_options['site_logo'];
				}
				
			?>
			
				<?php if ( (isset($shopkeeper_theme_options['logo_height'])) && (trim($shopkeeper_theme_options['logo_height']) != "" ) ) { ?>
				
				@media only screen and (min-width: 1024px) {
				.site-branding img {
					height:<?php echo esc_html($site_logo_height); ?>px;
					width:auto;
				}
				
				.site-header .main-navigation,
				.site-header .site-tools
				{
					height:<?php echo esc_html($site_logo_height); ?>px;
					line-height:<?php echo esc_html($site_logo_height); ?>px;
				}
				}
				
				<?php } ?>

			<?php
			}
			?>
			
			@media only screen and (min-width: 63.9375em) {
				.site-header.sticky .main-navigation,
				.site-header.sticky .site-tools,
				.site-header.sticky .site-branding img
				{
					height:33px;
					line-height:33px;
					width:auto;
				}
			}

			<?php if ( (isset($shopkeeper_theme_options['spacing_above_logo'])) && (trim($shopkeeper_theme_options['spacing_above_logo']) != "" ) ) { ?>
			@media only screen and (min-width: 1024px) {
				.site-header {
					padding-top:<?php echo esc_html($shopkeeper_theme_options['spacing_above_logo']); ?>px;
				}
			}
			<?php } ?>
			
			<?php if ( (isset($shopkeeper_theme_options['spacing_below_logo'])) && (trim($shopkeeper_theme_options['spacing_below_logo']) != "" ) ) { ?>
			@media only screen and (min-width: 1024px) {
				.site-header {
					padding-bottom:<?php echo esc_html($shopkeeper_theme_options['spacing_below_logo']); ?>px;
				}
			}
			<?php } ?>
			
			@media only screen and (min-width: 63.9375em) {
				#page_wrapper.sticky_header .content-area,
				#page_wrapper.transparent_header .content-area
				{
					margin-top:<?php echo esc_html($content_margin); ?>px;
				}
				
				.transparent_header .single-post-header .title,
				#page_wrapper.transparent_header .shop_header .page-title
				{
					padding-top: <?php echo esc_html($content_margin); ?>px;
				}
				
				.transparent_header .single-post-header.with-thumb .title
				{
					padding-top: <?php echo esc_html(200 + $content_margin); ?>px;
				}

				.transparent_header.sticky_header .page-title-shown .entry-header.with_featured_img,
				{
					margin-top: -<?php echo esc_html($content_margin)+85; ?>px;
				}

				.sticky_header .page-title-shown .entry-header.with_featured_img
				{
					margin-top: -<?php echo esc_html($content_margin); ?>px;
				}

				.page-template-default .transparent_header .entry-header.with_featured_img,
				.page-template-page-full-width .transparent_header .entry-header.with_featured_img
				{
					margin-top: -<?php echo esc_html($content_margin)+85; ?>px;
				}
			}
			
			<?php if ( (isset($shopkeeper_theme_options['main_header_font_size'])) && (trim($shopkeeper_theme_options['main_header_font_size']) != "" ) ) : ?>
			.site-header,
			.default-navigation,
			.main-navigation .mega-menu > ul > li > a
			{
				font-size: <?php echo esc_html($shopkeeper_theme_options['main_header_font_size']) ?>px;
			}
			<?php endif; ?>		
			
			<?php if ( (isset($shopkeeper_theme_options['sticky_header_color'])) && (trim($shopkeeper_theme_options['sticky_header_color']) != "" ) ) : ?>
			.site-header,
			.main-navigation a,
			.site-tools ul li a,
			.shopping_bag_items_number,
			.wishlist_items_number,
			.site-title a,
			.widget_product_search .search-but-added,
			.widget_search .search-but-added
			{
				color:<?php echo esc_html($shopkeeper_theme_options['sticky_header_color']) ?>;
			}

			.site-branding
			{
				border-color: <?php echo esc_html($shopkeeper_theme_options['main_header_font_color']) ?>;
			}
			<?php endif; ?>
			
			<?php if ( (isset($shopkeeper_theme_options['main_header_font_color'])) && (trim($shopkeeper_theme_options['main_header_font_color']) != "" ) ) : ?>
			@media only screen and (min-width: 63.9375em) {
				.site-header,
				.main-navigation a,
				.site-tools ul li a,
				.shopping_bag_items_number,
				.wishlist_items_number,
				.site-title a,
				.widget_product_search .search-but-added,
				.widget_search .search-but-added
				{
					color:<?php echo esc_html($shopkeeper_theme_options['main_header_font_color']) ?>;
				}
		
				.site-branding
				{
					border-color: <?php echo esc_html($shopkeeper_theme_options['main_header_font_color']) ?>;
				}
			}
			<?php endif; ?>
			
			
			<?php if ( (isset($shopkeeper_theme_options['main_header_transparent_light_color'])) && (trim($shopkeeper_theme_options['main_header_transparent_light_color']) != "" ) ) : ?>
			@media only screen and (min-width: 1024px) {
				#page_wrapper.transparent_header.transparency_light .site-header,
				#page_wrapper.transparent_header.transparency_light .site-header .main-navigation a,
				#page_wrapper.transparent_header.transparency_light .site-header .site-tools ul li a,
				#page_wrapper.transparent_header.transparency_light .site-header .shopping_bag_items_number,
				#page_wrapper.transparent_header.transparency_light .site-header .wishlist_items_number,
				#page_wrapper.transparent_header.transparency_light .site-header .site-title a,
				#page_wrapper.transparent_header.transparency_light .site-header .widget_product_search .search-but-added,
				#page_wrapper.transparent_header.transparency_light .site-header .widget_search .search-but-added
				{
					color:<?php echo esc_html($shopkeeper_theme_options['main_header_transparent_light_color']) ?>;
				}
			}
			<?php endif; ?>
			
			
			<?php if ( (isset($shopkeeper_theme_options['main_header_transparent_dark_color'])) && (trim($shopkeeper_theme_options['main_header_transparent_dark_color']) != "" ) ) : ?>
			@media only screen and (min-width: 1024px) {
				#page_wrapper.transparent_header.transparency_dark .site-header,
				#page_wrapper.transparent_header.transparency_dark .site-header .main-navigation a,
				#page_wrapper.transparent_header.transparency_dark .site-header .site-tools ul li a,
				#page_wrapper.transparent_header.transparency_dark .site-header .shopping_bag_items_number,
				#page_wrapper.transparent_header.transparency_dark .site-header .wishlist_items_number,
				#page_wrapper.transparent_header.transparency_dark .site-header .site-title a,
				#page_wrapper.transparent_header.transparency_dark .site-header .widget_product_search .search-but-added,
				#page_wrapper.transparent_header.transparency_dark .site-header .widget_search .search-but-added
				{
					color:<?php echo esc_html($shopkeeper_theme_options['main_header_transparent_dark_color']) ?>;
				}
			}
			<?php endif; ?>

		
			
			/* sticky */
			
			<?php if ( (isset($shopkeeper_theme_options['sticky_header_background_color'])) && (trim($shopkeeper_theme_options['sticky_header_background_color']) != "" ) ) : ?>
			@media only screen and (min-width: 63.9375em) {
				.site-header.sticky,
				#page_wrapper.transparent_header .site-header.sticky
				{
					background: <?php echo esc_html($shopkeeper_theme_options['sticky_header_background_color']) ?>;
				}
			}
			<?php endif; ?>
			
			<?php if ( (isset($shopkeeper_theme_options['sticky_header_color'])) && (trim($shopkeeper_theme_options['sticky_header_color']) != "" ) ) : ?>
			@media only screen and (min-width: 63.9375em) {
				.site-header.sticky,
				.site-header.sticky .main-navigation a,
				.site-header.sticky .site-tools ul li a,
				.site-header.sticky .shopping_bag_items_number,
				.site-header.sticky .wishlist_items_number,
				.site-header.sticky .site-title a,
				.site-header.sticky .widget_product_search .search-but-added,
				.site-header.sticky .widget_search .search-but-added,
				#page_wrapper.transparent_header .site-header.sticky,
				#page_wrapper.transparent_header .site-header.sticky .main-navigation a,
				#page_wrapper.transparent_header .site-header.sticky .site-tools ul li a,
				#page_wrapper.transparent_header .site-header.sticky .shopping_bag_items_number,
				#page_wrapper.transparent_header .site-header.sticky .wishlist_items_number,
				#page_wrapper.transparent_header .site-header.sticky .site-title a,
				#page_wrapper.transparent_header .site-header.sticky .widget_product_search .search-but-added,
				#page_wrapper.transparent_header .site-header.sticky .widget_search .search-but-added
				{
					color:<?php echo esc_html($shopkeeper_theme_options['sticky_header_color']) ?>;
				}
				
				.site-header.sticky .site-branding
				{
					border-color: <?php echo esc_html($shopkeeper_theme_options['sticky_header_color']) ?>;
				}
			}
			<?php endif; ?>
			
			<?php 
			
			if ( 
			(isset($shopkeeper_theme_options['main_header_wishlist'])) && 
			(isset($shopkeeper_theme_options['main_header_shopping_bag'])) && 
			(isset($shopkeeper_theme_options['main_header_search_bar'])) && 
			(isset($shopkeeper_theme_options['main_header_off_canvas'])) && 
			($shopkeeper_theme_options['main_header_wishlist'] == "0") && 
			($shopkeeper_theme_options['main_header_shopping_bag'] == "0") && 
			($shopkeeper_theme_options['main_header_search_bar'] == "0") && 
			($shopkeeper_theme_options['main_header_off_canvas'] == "0") ) : 
			?>
			
			.site-tools { margin:0; }
			
			<?php endif; ?>
			
			
			<?php if ( (isset($shopkeeper_theme_options['sticky_header_logo'])) && (trim($shopkeeper_theme_options['sticky_header_logo']) != "" ) ) : ?>
			@media only screen and (max-width: 63.95em) {
				.site-logo {
					display:none;
				}
				.sticky-logo {
					display:block;
				}
			}
			<?php endif; ?>
			
			
			
			/* header-centered-2menus */
			
			<?php if ( (isset($shopkeeper_theme_options['main_header_layout'])) && ($shopkeeper_theme_options['main_header_layout'] == "2" || $shopkeeper_theme_options['main_header_layout'] == "22") ) : ?>
			
				<?php
				
				$header_col_right_menu_right_padding = 0;
				
				if ( (isset($shopkeeper_theme_options['main_header_wishlist'])) && ($shopkeeper_theme_options['main_header_wishlist'] == "1") ) $header_col_right_menu_right_padding += 60;
				if ( (isset($shopkeeper_theme_options['main_header_shopping_bag'])) && ($shopkeeper_theme_options['main_header_shopping_bag'] == "1") ) $header_col_right_menu_right_padding += 60;
				if ( (isset($shopkeeper_theme_options['main_header_search_bar'])) && ($shopkeeper_theme_options['main_header_search_bar'] == "1") ) $header_col_right_menu_right_padding += 40;
				if ( (isset($shopkeeper_theme_options['main_header_off_canvas'])) && ($shopkeeper_theme_options['main_header_off_canvas'] == "1") ) $header_col_right_menu_right_padding += 40;
				
				?>
				
				.header_col.right_menu {
					padding-right:<?php echo esc_html($header_col_right_menu_right_padding); ?>px;
				}
				
				.rtl .header_col.right_menu {
					padding-right:0;
				}
				.rtl .header_col.left_menu {
					padding-left:<?php echo esc_html($header_col_right_menu_right_padding); ?>px;
				}

				/*.header_col.left_menu {
					padding-left:<?php echo esc_html($header_col_right_menu_right_padding); ?>px;
				}*/
				
				<?php if ( (isset($shopkeeper_theme_options['main_header_layout'])) && ($shopkeeper_theme_options['main_header_layout'] == "2") ) : ?>
				.header_col.left_menu .main-navigation {
					text-align:right !important;
					margin:0 -15px !important;
				}
				.header_col.right_menu .main-navigation {
					text-align:left !important;
					margin:0 -15px !important;
				}
				<?php endif; ?>
				
				<?php if ( (isset($shopkeeper_theme_options['main_header_layout'])) && ($shopkeeper_theme_options['main_header_layout'] == "22") ) : ?>
				.header_col.left_menu .main-navigation {
					text-align:left !important;
					margin:0 -15px !important;
				}
				.header_col.right_menu .main-navigation {
					text-align:right !important;
					margin:0 -15px !important;
				}
				<?php endif; ?>
				
				.site-header .site-tools {
					height:30px !important;
					/*line-height:30px !important;*/
					position:absolute;
					top:2px;
					right:0;
				}
				
				<?php if ( (isset($shopkeeper_theme_options['logo_min_height'])) && (trim($shopkeeper_theme_options['logo_min_height']) != "" ) ) : ?>
				.header_col.branding {
					min-width:<?php echo esc_html($shopkeeper_theme_options['logo_min_height']); ?>px;
				}
				<?php endif; ?>
			
			<?php endif; ?>
			
			
			/* header-centered-menu-under */
			
			<?php if ( (isset($shopkeeper_theme_options['main_header_layout'])) && ($shopkeeper_theme_options['main_header_layout'] == "3") ) : ?>
			
				.main-navigation {
					text-align:center !important;
				}
				
				.site-header .main-navigation {
					height:50px !important;
					line-height:50px !important;
					margin:10px auto -10px auto;
				}
				
				.site-header .site-tools {
					height:30px !important;
					line-height:30px !important;
					position:absolute;
					top:2px;
					right:0;
				}
			
			<?php endif; ?>

			.transparent_header .with-featured-img
			{
				<?php $mt = 85 + 46 + $shopkeeper_theme_options['spacing_above_logo'] + $shopkeeper_theme_options['spacing_below_logo']; ?>
				margin-top: -<?php echo $mt; ?>px;
			}
			
			
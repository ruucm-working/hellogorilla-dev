import { injectGlobal } from 'styled-components'

import normalize from 'ruucm-blocks/libs/normalize'

// import NanumSquare from 'ruucm-blocks/css-patterns/fonts/NanumSquare'
// import Montserrat from 'ruucm-blocks/css-patterns/fonts/Montserrat'
// import NanumMyeongjo from 'ruucm-blocks/css-patterns/fonts/NanumMyeongjo'
import NanumSquareRound from 'ruucm-blocks/css-patterns/fonts/NanumSquareRound'

import HelloGorillaIcon from 'ruucm-blocks/css-patterns/icons/HelloGorillaIcon'

import { wem2 } from 'ruucm-blocks/tools/mixins'

import aboutStyle from './VCStyles/aboutStyle'
import programStyle from './VCStyles/programStyle'
import newsStyle from './VCStyles/newsStyle'

import orderStyle from './WooCommerceStyles/orderStyle'
import cartStyle from './WooCommerceStyles/cartStyle'
import checkoutStyle from './WooCommerceStyles/checkoutStyle'
import addressStyle from './WooCommerceStyles/addressStyle'
import editaccountStyle from './WooCommerceStyles/editaccountStyle'

// App Styles
injectGlobal`
  ${normalize}
  /* Fonts */
  ${NanumSquareRound}
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  /* Icons */
  ${HelloGorillaIcon}
  
  /* Body Styles */

  body {
    font-family: "NanumSquareRoundWeb", sans-serif;
    font-weight: 300;
  }
  /* Content Styles */
  #content {
    overflow-x: hidden;
  }
  


  /* Basic Typo */
  *, h1, h2, h3, p, a {
    /* font-family: NanumSquareWeb */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* WooCommerce */

  .has-very-dark-gray-color {
    color: #231f20;
    font-size: 14px;
    line-height: 1.71;
    padding-bottom:32px;
  }

  .has-cyan-bluish-gray-color {
  color: #918f8f;
  padding-bottom: 32px;
  }

  .has-small-font-size{
  font-size: 11px;
  line-height: 1.73;
  }

  .wp-block-image {
    padding-bottom: 32px;
    width: 100%;
  }
  .wp-block-video {
    padding-bottom: 32px;
  }
  img {
    width: 100%;
    height: auto;
  }

  .item {
    padding-left: ${wem2(240)};
    padding-right: ${wem2(240)};
    margin-top: ${wem2(96)};
  }
  .item-header {
    text-align: center;
    font-size: ${wem2(32)};
    color: #231f20;
    margin-bottom: ${wem2(72)};
  }
  .item-img {
    cursor: pointer;
    margin-bottom:${wem2(24)};
  }
  .item-title {
    /* width: 288px;
    height: 18px; */
    font-size: ${wem2(18)};
    text-align: center;
    color: #231f20;
    margin-bottom: ${wem2(12)};
  }
  .item-text {
    /* width: 288px;
    height: 44px; */
    font-size: ${wem2(14)};
    line-height: 1.57;
    text-align: center;
    color: #918f8f;
    margin-bottom: ${wem2(12)};
  }
  .item-price {
    /* width: 288px;
    height: 18px; */
    font-size: ${wem2(18)};
    text-align: center;
    color: #231f20;
    margin-bottom:0;
  }
  .item-more {
    margin-top: ${wem2(72)};
    width: ${wem2(144)};
    height: ${wem2(48)};
    border-radius: 2px;
    border: solid 1px #533c97;
    background-color: #ffffff;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
  .coupon, .woocommerce-shipping-destination, .woocommerce-shipping-calculator, .checkout_coupon_box  {
    display: none;
  }



  .artist {
    padding-left: ${wem2(240)};
    padding-right: ${wem2(240)};
    margin-top: ${wem2(144)};
  }
  .artist-header {
    /* width: 199px;
    height: 32px; */
    font-size: ${wem2(32)};
    color: #231f20;
    margin-bottom: ${wem2(72)};
  }
  .artist-img {
    cursor:pointer;
    margin-bottom:0;
  }
  .artist-more {
    width: ${wem2(116)};
    height: ${wem2(48)};
    border-radius: 2px;
    border: solid 1px #533c97;
    background-color: #ffffff;
    margin-top: ${wem2(72)};
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom:${wem2(144)};
    cursor: pointer;
  }
  .more-text {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   font-size: ${wem2(16)};
   color: #533c97;
  }



  .banner01 {
    padding-left: 240px;
    padding-right: 240px;
    height: ${wem2(336)};
    background-color: #533c97;
  }
  .banner02 {
    padding-left: 240px;
    padding-right: 240px;
    height: ${wem2(336)};
    background-color: #0eb780;
  }
  .banner-title {
    color:white;
    font-size: ${wem2(32)};
    line-height: 1.5;
  }
  .banner-more {
    font-size: ${wem2(14)};
    color: #ffffff;
    cursor: pointer;
  }
  .banner-label {
    color: #ffffff;
    font-size: ${wem2(16)};
    white-space: nowrap;
  }
  .banner-text {
    font-size: ${wem2(14)};
    line-height: 1.71;
    color: #ffffff;
  }
  .banner-img {
    font-size: ${wem2(240)};
    float: right;
  }
  .hellogorilla-about-image {
    /* font-size: ${wem2(240)};
    float: right; */
  }

  /* Visual Composer Styles */
  ${aboutStyle}
  .single {
    p {
      line-height: 1.7em;
    }
  }
  .woocommerce-account {
    #content {
      padding: 200px 0;
      max-width: 960px;
      margin: 0 auto;
    }
  }
  .woocommerce-cart  {
    .hellogorilla-page-banner {
      margin-bottom: 80px;
    }
    .return-to-shop {
      display: none;
    }
  }
 
  .woocommerce-checkout  {
    .hellogorilla-page-banner {
      margin-bottom: 80px;
    }
  }
 
  .page-id-121, .page-id-194  {
    #footer-content {
      margin-top: 0;
    }
    #footer-line {
      background: transparent;
    }
  }

  ${programStyle}
  ${newsStyle}

  ${orderStyle}
  ${addressStyle}
  ${cartStyle}
  ${checkoutStyle}
  ${editaccountStyle}

`

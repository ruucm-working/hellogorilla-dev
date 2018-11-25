import { injectGlobal } from 'styled-components'

import normalize from 'ruucm-blocks/libs/normalize'

// import NanumSquare from 'ruucm-blocks/css-patterns/fonts/NanumSquare'
// import Montserrat from 'ruucm-blocks/css-patterns/fonts/Montserrat'
// import NanumMyeongjo from 'ruucm-blocks/css-patterns/fonts/NanumMyeongjo'
import NanumSquareRound from 'ruucm-blocks/css-patterns/fonts/NanumSquareRound'

import HelloGorillaIcon from 'ruucm-blocks/css-patterns/icons/HelloGorillaIcon'

import { wem2 } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

import homeStyle from './VCStyles/homeStyle'
import aboutStyle from './VCStyles/aboutStyle'
import programStyle from './VCStyles/programStyle'
import newsStyle from './VCStyles/newsStyle'
import newseditorStyle from './VCStyles/newseditorStyle'
import newartistStyle from './VCStyles/newartistStyle'
import notFoundStyle from './VCStyles/notFoundStyle'

import orderStyle from './WooCommerceStyles/orderStyle'
import cartStyle from './WooCommerceStyles/cartStyle'
import checkoutStyle from './WooCommerceStyles/checkoutStyle'
import addressStyle from './WooCommerceStyles/addressStyle'
import editaccountStyle from './WooCommerceStyles/editaccountStyle'
import payagainStyle from './WooCommerceStyles/payagainStyle'
import orderreceivedStyle from './WooCommerceStyles/orderreceivedStyle'

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
  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }

  ${homeStyle}
  ${programStyle}
  ${newsStyle}
  ${newseditorStyle}
  ${newartistStyle}
  ${notFoundStyle}

  ${orderStyle}
  ${addressStyle}
  ${cartStyle}
  ${checkoutStyle}
  ${editaccountStyle}
  ${payagainStyle}
  ${orderreceivedStyle}

`

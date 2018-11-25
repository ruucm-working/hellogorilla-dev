import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const style = css`
.page-id-121,
.page-id-194
{
  .wpb_column {
    @media all and (max-width: 763px) {
    margin-top: 20px;
    }
  }
  .item {
    /* padding-left: ${wem2(240)}; */
    /* padding-right: ${wem2(240)}; */
    max-width: ${wem2(960)};
    margin: 0 auto;
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
      :hover {
      background-color:  #533c97;
      color: white !important;
    }
  }
  .coupon, .woocommerce-shipping-destination, .woocommerce-shipping-calculator, .checkout_coupon_box  {
    display: none;
  }



  .artist {
    max-width: 960px;
    margin: 0 auto;
    /* padding-left: ${wem2(240)};
    padding-right: ${wem2(240)}; */
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
    width: ${wem2(144)};
    height: ${wem2(48)};
    border-radius: 2px;
    border: solid 1px #533c97;
    background-color: #ffffff;
    margin-top: ${wem2(72)};
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom:${wem2(144)};
    color: #533c97;
    cursor: pointer;
    :hover {
      background-color:  #533c97;
      color: white !important;
    }
  }
  .more-text {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   font-size: ${wem2(16)};
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
}
`

export default style

import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-7 {
    .woocommerce-cart-form {
      margin-left: ${wem2(150)} !important;
      width: ${wem2(564)} !important;
      max-width: 564px !important;

      /* ${media.tablet`
      margin-left: 150px !important  
      `} */

      /* @media all and (min-width: 1401px) {
      margin-left: 150px !important  
      } */
      thead {
        /* display: unset !important; */
        tr {
          white-space: nowrap;
          .product-remove {
            display: none !important;
          }
          .product-thumbnail {
            display: none !important;
          }
          .product-subtotal {
            display: none !important;
          }
        }
      }

      /* 상품정보 */
      .woocommerce-cart-form__cart-item {
        position: relative;
        .product-remove {
          vertical-align: middle;
        }
        .product-thumbnail {
          vertical-align: middle;
          img {
            height: 110px !important;
            vertical-align: middle;
          }
        }
        .product-name {
          display: inline-block ;
          padding-top: 60px;
          a {
            /* position: absolute; */
            font-family: 'NanumSquareRoundWeb', sans-serif !important;
            font-size: 14px !important;
            color: #231f20 !important;
            font-weight: 300;
          }
        }
        .product-price {
          /* position: absolute;
          left: ${wem2(310)};
          top: ${wem2(100)};
          padding: unset !important; */
          display: block;
          padding: unset !important;
          margin-top: -20px;
          span {
            /* position: absolute; */
          }
        }
        .product-quantity {
          vertical-align: middle;
          /* margin-top: 10px; */
          padding: unset;
          padding-top: 14px;
          .screen-reader-text {
            display: none;
          }
        }
        .product-subtotal {
          vertical-align: middle;
        }
      }
      /* 수량 */
      .quantity {
        a {
          display: inline-block;
        }
      }
    }
    h2 {
      display: none;
    }

    /* 카트 계산서 */
    .cart-collaterals {
      margin-right: ${wem2(150)};
      width: ${wem2(324)} !important;
      max-width : 324px;
      /* right: ${wem2(-123)};
      position: relative;
      margin-right: ${wem2(240)}; */
      @media all and (min-width: 1401px) {
      margin-right: 150px !important  
      }
    }
    .cart_totals {
      padding: ${wem2(20)} !important;
      h2 {
        display: none;
      }
    }
    .shop_table {
      margin-top: ${wem2(14)} !important;
      width: 100%;
    }
    /* 장바구니 합계 */
    .cart-subtotal {
      white-space: nowrap;
      th {
        padding: unset !important;
        vertical-align: middle !important;
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(14)} !important;
        color: #231f20 !important;
      }
      td {
        padding: unset !important;
        float: right;
      }
      .woocommerce-Price-amount {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(14)} !important;
        color: #231f20 !important;
      }
    }
    /* 고정 요금 */
    .woocommerce-shipping-totals {
      th {
        vertical-align: middle;
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(14)} !important;
        color: #231f20 !important;
      }
      td {
        vertical-align: middle;
      }
      label {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(14)} !important;
        color: #231f20 !important;
        float: right;
        ::before {
          display: none !important;
        }
      }
      .woocommerce-shipping-destination {
        display: none !important;
      }  
      .woocommerce-shipping-calculator {
        display: none !important;
      }
      .woocommerce-Price-amount {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(14)} !important;
        color: #231f20 !important;
      }
    }

    /* 합계 */
    .order-total {
      th {
        vertical-align: middle;
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(16)} !important;
        color: #533c97 !important;
      }
      td {
        vertical-align: middle;
        float: right;
      }
      .woocommerce-Price-amount {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(16)} !important;
        color: #533c97 !important;
      }
    }
    /* 결제진행 박스 */
    .wc-proceed-to-checkout {
      position: relative;
      height: 48px;
    }
    .checkout-button {
      background-color: #533c97 !important;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }


    /* 장바구니 비었을때 */
    .cart-empty {
      font-size: ${wem2(25)};
      &:before {
        display: none;
      }
    }
    /* 쿠폰 */
    .coupon {
      position: relative;
      ::before {
        /* color: pink !important; */
        /* vertical-align: middle */
        left: 35px !important;
        top: -3px !important;
      font-size: 28px !important;
      }
    }
  }
`

export default style

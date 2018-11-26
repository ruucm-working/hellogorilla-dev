import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-7 {
    .post-7{
    ${media.tablet`
      min-height: 1300px;
    `}
    @media all and (min-width: 769px) and (max-width: 1024px) 
      {  min-height: 950px;      }  
    }
    .woocommerce-cart-form {
      margin-left: ${wem2(150)} !important;
      width: ${wem2(564)} !important;
      max-width: 564px !important;
         ${media.tablet`
        margin-left: unset !important;
        `}
      thead {
        display: unset !important;
        /* width: 551px; */
        position: relative;
          ${media.tablet`
          display: none !important;
          `}
        tr {
          white-space: nowrap;
          /* border-bottom: 1px solid #e9e8e8; */
            .product-remove {
              display: none !important;
            }
            .product-thumbnail {
              display: none !important;
            }
            .product-subtotal {
              display: none !important;
            }
            .product-quantity {
              padding-left: 205px;
            }
          .product-price {
            position:absolute;
            right: -95px;
          }
        }
      }

      /* 상품정보 */
      tbody{
        float: left;
        border-top: 1px solid #e9e8e8;
        ${media.tablet`
          border-top: none;
          width: 100%;
          `}
        .woocommerce-cart-form__cart-item {
          position: relative;
          border-bottom: 1px solid #e9e8e8 !important;
          /* float: left; */
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
      }

      /* 수량 */
      .quantity {
        a {
          display: inline-block;
        }
      }
      ${media.tablet`
        padding: 0 20px;
      `}
    }
    h2 {
      display: none;
    }

    /* 카트 계산서 */
    .cart-collaterals {
      margin-right: ${wem2(150)};
      width: ${wem2(324)} !important;
        @media all and (min-width: 1401px) {
        margin-right: 150px !important  
      }
        @media all and (max-width: 1024px) {
        margin: unset !important  
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
        font-size: 14px !important;
        color: #231f20 !important;
      }
      td {
        /* float: right; */
        padding: unset !important;
        float: right;
      }
      .woocommerce-Price-amount {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: 14px !important;
        color: #231f20 !important;
      }
      ${media.tablet`
        .woocommerce-Price-amount {
          width: 100% !important;
        }
      `}
      
    }
    /* 고정 요금 */
    .woocommerce-shipping-totals {
      th {
        /* vertical-align: middle; */
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: 14px!important;
        color: #231f20 !important;
        ${media.tablet`
        padding: unset !important;
        `}
      }
      td {
        /* vertical-align: middle; */
        white-space: nowrap;
      }
      label {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: 14px !important;
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
        font-size: 14px !important;
        color: #231f20 !important;
      }
      ${media.tablet`
        >td {
          display: table;
          float: right;
        }
      `}
    }

    /* 합계 */
    .order-total {
      th {
        vertical-align: middle;
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: 16px !important;
        color: #533c97 !important;
      }
      td {
        vertical-align: middle;
        float: right;
      }
      .woocommerce-Price-amount {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: 16px !important;
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
      font-size: 25px;
      &:before {
        display: none;
      }
      ${media.tablet`
        font-size: 14px;
      `}
    }
    /* 쿠폰 */
    .coupon {
      position: relative;
      display: none !important; 
      /* ${media.tablet`
        display: none !important;
      `} */
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

import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-7 {
    .woocommerce-cart-form {
      /* margin-left: ${wem2(150)} !important;
      width: ${wem2(564)} !important; */
      min-width: 564px !important;
      /* 상품정보 */
      .product-remove {
        vertical-align: middle;
      }
      .product-name {
        display: inline-block;
        padding: unset !important;
        position:relative ;
        height: 62px !important;
        a {
        position: absolute;
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: ${wem2(14)} !important;
        color: #231f20 !important;
        font-weight: 300;
        }
      }
      .product-price {
        display: inline-block !important;
        padding: unset !important;
        position:relative ;
        height: 62px !important;
        width: 100% !important;
        span {
          position: absolute;
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
  }
`

export default style

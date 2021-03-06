import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-8 {
    .post-8 {
      .woocommerce {
        /* margin-left: ${wem2(240)};
        margin-right: ${wem2(240)}; */
        margin: unset;
        max-width: 960px;
        white-space: nowrap;
        left: 50%;
        transform: translateX(-50%);
        .checkout_coupon_box {
          display: none;
        }
      }
      .checkout {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        /* 왼쪽 고객정보 */
        .col2-set {
          width: 50% !important;
          display: inline-block;
          .woocommerce-billing-fields {
            h3 {
              font-size: ${wem2(24)};
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1;
              letter-spacing: normal;
              color: #231f20;
              margin: unset;
            }
          }
          .form-row {
            margin: unset;
            margin-top: ${wem2(24)};
            label {
              font-family: 'NanumSquareRoundWeb', sans-serif;
              font-size: 11px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1;
              letter-spacing: normal;
              color: #231f20;
              .required {
                border-bottom: unset;
                font-size: 11px;
                color: #231f20 !important;
              }
            }
          }
          .form-row-first {
            width: 100%;
          }
          .input-text {
            margin: unset;
            margin-top: 10px;
            border-radius: 2px;
            border-color: #231f20;
          }
          ${media.tablet`
            display:block;
            width: 100% !important;
            padding: 0 20px !important;
          `}
        }

        /* 오른쪽 주문내역&결제하기 */
        .woocommerce-checkout-review-order {
          width: 50% !important;
          margin: unset;
          display: inline-block;
          ${media.tablet`
            width: 100% !important;
          `}
          /* 주문내역 */
          tr {
            th {
              font-family: 'NanumSquareRoundWeb', sans-serif !important;
              font-size: 12px;
              font-weight: normal !important;
              color: #231f20;
              /* color: pink; */
            }
            td {
              font-family: 'NanumSquareRoundWeb', sans-serif !important;
              font-size: 14px;
              font-weight: normal !important;
              color: #231f20;
            }
          }
          .order-total {
            th {
              color: #533c97 !important;
            }
            td {
              color: #533c97 !important;
            }
          }
          .shop_table {
            width: 100%;
          }

          /* 결제하기 */
          .woocommerce-checkout-payment {
            .form-row {
              width: 100% !important;
            }
            .input-text {
              border-color: #231f20;
              border-radius: 2px;
            }
            .button {
              background-color: #533c97 !important;
              position: relative;
              left: 50%;
              transform: translateX(-50%);
            }
            .checkout-input-row2 {
              .col {
                display: table-caption !important;
              }
            }
          }
        }
        ${media.tablet`
          .woocommerce-error {
            ${media.tablet`
              display: block;
              left: 0;
              padding: 30px 20px!important;
              white-space: normal;
              height: auto;
              position: relative;
              margin-bottom: 30px;
              margin-top: 10px;
    
            `};
          }
        `};
      }
    }
  }
  /* 에러메세지 아이콘과 텍스트 간격 */
  body.gbt_custom_notif:not(.woocommerce-account) .woocommerce-error li:first-child {
    ${media.tablet`
      padding-top: 40px !important;
    `};
  }
`

export default style

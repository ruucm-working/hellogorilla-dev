import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-8 {
    .post-8 {
      .woocommerce {
        margin-left: ${wem2(240)};
        margin-right: ${wem2(240)};
      }
      .checkout {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        /* 왼쪽 고객정보 */
        .col2-set {
          width: 50% !important;
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
        }

        /* 오른쪽 주문내역&결제하기 */
        .woocommerce-checkout-review-order {
          width: 50% !important;
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
          .shop_table {
            width: 100%;
          }

          /* 결제하기 */
          .woocommerce-checkout-payment {
            .form-row {
              width: 100% !important;
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
      }
    }
  }
`

export default style

import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-8 {
    .post-8 {
      font-family: 'NanumSquareRoundWeb', sans-serif;
      .woocommerce-notice {
        background: #533c97;
      }
      /* 주문 상세 */
      .woocommerce-order-details {
        max-width: 500px;
        margin: 0 auto;
        .woocommerce-order-details__title {
          font-size: 24px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #231f20;
        }
        .woocommerce-table--order-details {
          width: 100%;
          thead {
            tr {
              border-bottom: 1px solid #e9e8e8;
            }
            th {
              font-family: 'NanumSquareRoundWeb', sans-serif;
              font-size: 14px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1;
              letter-spacing: normal;
              color: #231f20;
            }
          }
          tbody {
            tr {
              font-family: 'NanumSquareRoundWeb', sans-serif;
              font-size: 14px;
              font-weight: normal;
              color: #231f20;
            }
            td {
              border-bottom: 1px solid #e9e8e8;
              font-family: 'NanumSquareRoundWeb', sans-serif;
              font-size: 14px;
              font-weight: normal;
              color: #231f20;
            }
            .product-total {
              text-align: center;
            }
          }
          tfoot {
            th {
              font-family: 'NanumSquareRoundWeb', sans-serif;
              font-size: 14px;
              font-weight: normal;
              color: #231f20;
              padding: unset;
              float: left;
              padding-top: 15px;
            }
            td {
              font-family: 'NanumSquareRoundWeb', sans-serif;
              vertical-align: middle;
              text-align: center;
            }
            ins {
              background: unset;
              text-decoration: none;
              color: #533c97;
            }
          }
        }
      }
      .woocommerce-customer-details {
        max-width: 500px;
      }
    }
  }
`

export default style

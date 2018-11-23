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
          thead {
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
        }
      }
    }
  }
`

export default style

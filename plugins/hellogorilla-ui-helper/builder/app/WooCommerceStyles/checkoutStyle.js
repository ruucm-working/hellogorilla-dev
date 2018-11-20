import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-8 {
    .checkout {
      font-family: 'NanumSquareRoundWeb', sans-serif;
      /* 왼쪽 고객정보 */
      .col2-set {
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
        }
        .input-text  {
          margin: unset;
          margin-top: 10px;
        }
      }

      /* 오른쪽 주문내역&결제하기 */
      .woocommerce-checkout-review-order {
        /* 결제하기 */
        .woocommerce-checkout-payment {
          .button {
            background-color: #533c97 !important;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
`

export default style

import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-9 {
    /* address page css */
    .woocommerce-MyAccount-content {
      font-family: 'NanumSquareRoundWeb', sans-serif;
      color: #231f20;
      .col2-set {
        margin-top: unset;
      }
      .u-columns {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
        .edit {
          font-size: 11px;
        }
        address {
          margin-top: 10px;
        }
      }

      .woocommerce-Address-title title h3 {
        font-size: ${wem2(24)};
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
      }
      .woocommerce-address-fields {
        margin-top: 40px;
        .form-row {
          label {
            font-size: 11px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: normal;
            color: #231f20;
            .required {
              float: top;
              color: #231f20 !important;
              border-bottom: unset;
            }
          }
        }
        .input-text {
          margin-top: 10px;
          width: 708px;
          height: 52px;
          border-radius: 2px;
          background-color: rgba(244, 243, 243, 0.5);
        }
        #billing_country_field {
          display: none;
        }
      }
    }
  }
`

export default style

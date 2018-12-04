import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-9 {
    .woocommerce-EditAccountForm {
      font-family: 'NanumSquareRoundWeb', sans-serif;
      color: #231f20;
      .woocommerce-form-row {
        width: 100%;
        max-width: 708px;
        min-width: 300px;
        label {
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #231f20;
          .required {
            color: #231f20 !important;
            font-size: 11px !important;
          }
        }

        .woocommerce-Input {
          margin-top: 10px;
          width: 100% !important;
        }
      }
      .form-row-last {
        display: none;
      }
      .woocommerce-form-row--wide {
        label[for='account_display_name'] {
          display: none;
        }
        #account_display_name {
          display: none;
        }
        span {
          em {
            display: none;
          }
        }
      }

      legend {
        font-family: 'NanumSquareRoundWeb', sans-serif !important;
        font-size: 24px;
        font-weight: normal !important;
        font-style: normal !important;
        font-stretch: normal !important;
        line-height: 1 !important;
        letter-spacing: normal !important;
        color: #231f20 !important;
      }
    }
    button {
      width: 100%;
      /* height: 52px; */
      background-color: #533c97 !important;
    }
  }
`

export default style

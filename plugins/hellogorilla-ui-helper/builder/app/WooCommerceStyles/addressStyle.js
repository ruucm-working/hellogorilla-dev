import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-9 {
    /* address page css */
    address {
      margin-top: 15px;
      line-height: 1.4 !important;
    }
    .woocommerce-MyAccount-content {
      font-family: 'NanumSquareRoundWeb', sans-serif;
      color: #231f20;
      max-width: 708px;
      min-width: 300px;
      /* 주소 편집 */
      /* .woocommerce-address-fields {
        max-width: 708px;
        min-width: 300px; */
      /* .col2-set {
        margin-top: unset;
      } */
      .u-columns {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
        margin-top: 90px !important;
        ${media.tablet`
          margin-left: 30px !important;
          /* width: 100%; */
        `}
        .edit {
          font-size: 12px;
          background: #533c97;
          color: white;
          padding: 2px;
          border-radius: 2px;
        }
        .u-column2 {
          margin-top: 40px !important;
          ${media.tablet`
          margin-top: 40px !important;
          /* width: 100%; */
        `}
        }
      }

      .title {
        h3 {
          font-size: ${wem2(24)};
          font-weight: 400 !important;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #231f20;
          ${media.tablet`
          font-size: 18px;
        `}
        }
      }

      /* margin-top: 40px; */
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
        width: ${wem2(708)};
        height: 52px;
        border-radius: 2px;
        background-color: rgba(244, 243, 243, 0.5);
        max-width: 708px;
        min-width: 300px;
      }
      #billing_country_field {
        display: none;
      }
      .button {
        width: 100%;
        /* height: 52px; */
        background-color: #533c97 !important;
        /* max-width: 708px;
          min-width: 500px; */
      }
      /* } */
    }
  }
`

export default style

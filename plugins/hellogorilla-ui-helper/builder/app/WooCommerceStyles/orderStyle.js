import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-9 {
    .post-9 {
      padding-left: 10px;
    }
    /* navigation css */
    .woocommerce-MyAccount-navigation {
      li {
        color: #231f20;
        a {
          font-family: 'NanumSquareRoundWeb', sans-serif;
          font-size: ${wem2(15)};
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          :hover {
            color: #533c97;
          }
        }
      }
      .is-active {
        color: #533c97;
      }
    }

    /* content css */
    .woocommerce-MyAccount-content {
      width: ${wem2(708)};
      table {
        width: 100%;
      }
      thead {
        border-bottom: 1px solid #e9e8e8;
      }
      tr {
        height: ${wem2(22)};
        span {
          font-family: 'NanumSquareRoundWeb', sans-serif;
        }
      }
      .woocommerce-orders-table__header {
        font-size: ${wem2(12)};
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
      }

      /* table */
      .woocommerce-orders-table__row {
        height: ${wem2(138)};
        border-bottom: 1px solid #e9e8e8;
      }
      .woocommerce-orders-table__cell {
        vertical-align: middle;
        text-align: center;
        font-size: ${wem2(14)};
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
        a {
          font-weight: normal;
        }
      }

      .woocommerce-button {
        color: #0fb780 !important;
      }
      .view {
        border-bottom: 1px solid #0fb780;
        padding-bottom: unset !important;
      }
      .cancel {
        border-bottom: 1px solid #0fb780;
        padding-bottom: unset !important;
      }
    }
  }
`

export default style

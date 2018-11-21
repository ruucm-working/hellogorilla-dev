import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-9 {
    /* address page css */
    .woocommerce-MyAccount-content {
      p {
        display: none;
      }
      .col2-set {
        margin-top: unset;
        .woocommerce-Address-title title {
          font-size: ${wem2(24)};
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
`

export default style

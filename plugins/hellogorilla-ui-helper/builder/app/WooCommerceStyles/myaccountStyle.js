import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-9 {
    .woocommerce-MyAccount-navigation {
      li {
        color: #231f20;
      }
      .is-active {
        color: #533c97;
      }
      a {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        font-size: ${wem2(15)};
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
      }
    }
  }
`

export default style

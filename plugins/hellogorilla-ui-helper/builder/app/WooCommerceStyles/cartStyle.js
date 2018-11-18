import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-7 {
    form {
      margin-left: ${wem2(150)} !important;
      width: ${wem2(564)} !important;
    }
    h2 {
      display: none;
    }

    .cart-collaterals {
      margin-right: ${wem2(150)};
      width: ${wem2(324)} !important;
    }
    .cart_totals {
      h2 {
        display: none;
      }
    }
    .shop_table {
      margin-top: 14px !important;
    }
    .cart-subtotal {
      white-space: nowrap;
    }
  }
`

export default style

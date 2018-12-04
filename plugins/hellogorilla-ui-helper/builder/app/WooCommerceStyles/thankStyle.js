import { css } from 'styled-components'
import { wem } from 'ruucm-blocks/tools/mixins'

const style = css`
  .woocommerce-order-received {
    .woocommerce-order-details {
      display: none;
    }

    .woocommerce-notice--success {
      text-align: center;
    }
    .woocommerce-order {
      text-align: center;
      margin-top: ${wem(100)};
      font-size: ${wem(25)};
      line-height: ${wem(50)};
    }
  }
  .cart-empty {
    text-align: center;
    margin-top: ${wem(100)};
    font-size: ${wem(25)};
    line-height: ${wem(50)};
  }
  .return-to-shop {
    display: none;
  }
`

export default style

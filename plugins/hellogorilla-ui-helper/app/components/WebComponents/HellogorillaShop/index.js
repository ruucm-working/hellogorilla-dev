import React from 'react'

import { WooCommerce, WP } from '../../../../builder/app/modules/DataContainer'
import { ShopGrid } from '../../../../builder/app/modules/Shop'

const HelloGorillaShop = props => {
  return (
    <WooCommerce dataType="product">
      <WP>
        <ShopGrid />
      </WP>
    </WooCommerce>
  )
}
export default HelloGorillaShop

import React from 'react'

import { WooCommerce } from '../../../../builder/app/modules/DataContainer'
import { ShopGrid } from '../../../../builder/app/modules/Shop'
import { wem } from 'ruucm-blocks/tools/mixins'

const HelloGorillaShop = props => {
  return (
    <WooCommerce dataType="product">
      <ShopGrid />
    </WooCommerce>
  )
}
export default HelloGorillaShop

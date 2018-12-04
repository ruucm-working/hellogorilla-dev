import React from 'react'

import { ProductDesc } from '../../../../builder/app/modules/ProductDesc'
import { WooCommerce } from '../../../../builder/app/modules/DataContainer'

const ProductDescComp = props => {
  return (
    // <ProductTabs active="1" id="product-desc">
    <WooCommerce dataType="singleProduct">
      <ProductDesc
        productId={props.wpObject.post_id}
        shortcodeChild={props.wpObject.shortcodeChild}
      />
    </WooCommerce>
    // </ProductTabs>
  )
}

export default ProductDescComp

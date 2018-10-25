import React from 'react'

import { ProductSummary } from '../../../../builder/app/modules/ProductSummary'
import { WooCommerce } from '../../../../builder/app/modules/DataContainer'

const ProductSummaryComp = props => {
  return (
    <WooCommerce dataType="singleProduct">
      <ProductSummary productId={props.wpObject.post_id} />
    </WooCommerce>
  )
}

export default ProductSummaryComp

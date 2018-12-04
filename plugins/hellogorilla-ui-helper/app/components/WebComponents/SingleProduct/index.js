import React, { Component } from 'react'

import { WooCommerce } from '../../../../builder/app/modules/DataContainer'
import { SingleProduct } from '../../../../builder/app/modules/SingleProduct'

const SingleProductComponent = props => {
  return (
    <WooCommerce dataType="singleProduct">
      <SingleProduct productId={props.wpObject.post_id} />
    </WooCommerce>
  )
}
export default SingleProductComponent

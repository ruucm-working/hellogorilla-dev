/**
 *
 * SingleProduct
 *
 */

import React from 'react'
import { compose, lifecycle } from 'recompose'
import styled, { css } from 'styled-components'
import { log } from 'ruucm-util'

const SingleProduct = props => {
  let data = props[props.dataType]

  return data ? (
    <div dangerouslySetInnerHTML={{ __html: data.description }} />
  ) : (
    <div />
  )
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.getProducts
        ? this.props.getProducts({ productId: this.props.productId })
        : void 0 // don't run in builder
    },
  })
)

export default enhance(SingleProduct)

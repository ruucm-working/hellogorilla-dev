/**
 *
 * Checkout
 *
 */

import React from 'react'
import { compose, lifecycle } from 'recompose'
import styled from 'styled-components'

const Wrap = styled.div``

const Checkout = props => {
  return <Wrap>Checkout</Wrap>
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      // var cat = getParameterByName('cat') // "lorem"
      // let options = {
      //   category: cat ? cat : 'all',
      // }
      // this.props.getDatas ? this.props.getDatas(options) : ''
    },
  })
)

export default enhance(Checkout)

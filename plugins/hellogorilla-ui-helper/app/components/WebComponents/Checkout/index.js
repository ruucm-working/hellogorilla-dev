import React, { Component } from 'react'

import { WP } from '../../../../builder/app/modules/DataContainer'

import { Checkout } from '../../../../builder/app/modules/Checkout'

export default class CheckoutComponent extends Component {
  render() {
    return (
      <WP>
        <Checkout />
      </WP>
    )
  }
}

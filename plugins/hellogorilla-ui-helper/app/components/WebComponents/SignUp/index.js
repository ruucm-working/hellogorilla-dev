import React, { Component } from 'react'

import { WP } from '../../../../builder/app/modules/DataContainer'

import { SignUp } from '../../../../builder/app/modules/SignUp'

export default class SignUpComponent extends Component {
  render() {
    return (
      <WP nonce={this.props.wpObject.nonce}>
        <SignUp />
      </WP>
    )
  }
}

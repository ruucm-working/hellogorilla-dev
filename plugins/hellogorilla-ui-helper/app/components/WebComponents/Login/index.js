import React, { Component } from 'react'

import { WP } from '../../../../builder/app/modules/DataContainer'

import { Login } from '../../../../builder/app/modules/Login'

export default class SignUpComponent extends Component {
  render() {
    return (
      <WP nonce={this.props.wpObject.nonce}>
        <Login />
      </WP>
    )
  }
}

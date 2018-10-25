/**
 *
 * MenuItem
 *
 */

import React, { Component } from 'react'

class MenuItem extends Component {
  render() {
    return <li style={this.props.style}>{this.props.children}</li>
  }
}

export default MenuItem

/**
 *
 * Logo
 *
 */

import React, { Component } from 'react'

class Logo extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <div style={this.props.style}>{this.props.children}</div>
      </a>
    )
  }
}

export default Logo

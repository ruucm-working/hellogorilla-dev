/**
 *
 * Menu
 *
 */

import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return <ul {...this.props}>{this.props.children}</ul>
  }
}

export default Menu

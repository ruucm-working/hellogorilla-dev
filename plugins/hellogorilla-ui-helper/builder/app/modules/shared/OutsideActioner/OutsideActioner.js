import React, { Component } from 'react'
import { log } from 'ruucm-util'

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideActioner extends Component {
  constructor(props) {
    super(props)

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mouseover', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mouseover', this.handleClickOutside)
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.props.type == 'onModal') {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        log('action 1')
        this.props.action()
      }
    } else {
      // Except case for Modal Open
      var x = document.getElementsByClassName('ReactModal__Overlay--after-open')
      if (this.wrapperRef && !this.wrapperRef.contains(event.target) && !x[0]) {
        log('action 2')
        this.props.action()
      }
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef} className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

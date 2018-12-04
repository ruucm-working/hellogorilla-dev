/**
 *
 * MainNav
 *
 */

import React from 'react'
import { isString } from 'lodash'
import { log } from 'ruucm-util'

const MainNav = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children
  return (
    <div style={props.style}>
      {React.Children.map(props.children, child => {
        let newChildProps = {
          ...otherProps,
        }
        return isString(child.type)
          ? child
          : React.cloneElement(
              child,
              newChildProps
              // Only pass anim props, when child id Wrapper(Comp)
            )
      })}
    </div>
  )
}
export default MainNav

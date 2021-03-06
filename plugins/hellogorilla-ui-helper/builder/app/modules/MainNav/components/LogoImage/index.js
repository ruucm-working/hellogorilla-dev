/**
 *
 * LogoImage
 *
 */

import React from 'react'
import styled from 'styled-components'

const LogoImageWrapper = styled.span``

const LogoImage = props => {
  return (
    <LogoImageWrapper style={{ ...props.style }}>
      <span className="magharbor magharbor-main-logo" />
    </LogoImageWrapper>
  )
}

export default LogoImage

import React from 'react'

import styled from 'styled-components'
import { SimpleLoadingSpinner } from 'ruucm-blocks/components/LoadingSpinners'

const LoadingWrap = styled.div`
  height: 600px;
  position: relative;
`

const LoadingSpinner = props => {
  return (
    <LoadingWrap>
      <SimpleLoadingSpinner />
    </LoadingWrap>
  )
}

export default LoadingSpinner

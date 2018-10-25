import React from 'react'
import styled, { css } from 'styled-components'
import { log } from 'ruucm-util'

import { Row, Column } from 'ruucm-blocks/layouts'
import { center } from 'ruucm-blocks/tools/mixins'

const PageColumn = styled(Column)`
  height: 100vh;
`
const PageImage = styled.div`
  ${center('y')};
  right: 4vw;
`
const Image = styled.img`
  width: 460px;
  height: 460px;
  object-fit: cover;
`
const ImageCaption = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  line-height: 98px;
  font-size: 62px;
  color: #38393c;

  position: absolute;
  height: 98px;
  transform: rotateZ(-90deg);
  left: -3vw;
  transform-origin: left center 0px;
  bottom: 1vw;
`
const Desc = styled.div`
  width: 38vw;
  font-weight: 400;
  line-height: 27px;
  font-size: 20px;
  color: #38393c;
  ${center('xy')};
  strong {
    font-weight: 900;
    color: #2348a7;
  }
  p {
    margin-bottom: 20px;
  }
`
const PageNum = styled.div`
  font-family: NanumSquareWeb;
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #38393c;
  position: absolute;
  bottom: 36px;
  right: 6vw;
`

const ProgressBar = styled.div`
  width: 100vw;
  height: 17px;
  position: absolute;
`
const Bar = styled.div`
  height: 100%;
  background: #fdd388;
  ${props => {
    return (
      props.current &&
      css`
        width: ${props.current * 100}%;
      `
    )
  }};
`

const PageComp = props => {
  const { data, index, totalNum } = props
  log('data', data)

  return data ? <Row>aaaa</Row> : <div>loading</div>
}

export default PageComp

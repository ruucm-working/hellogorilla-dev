/**
 *
 * ChatButton
 *
 */

import React from 'react'
import styled from 'styled-components'
import { wem, centerIconA } from 'ruucm-blocks/tools/mixins'

import Img from '../../assets/chat.png'

const Wrapper = styled.a`
  position: fixed;
  right: ${wem(48)};
  bottom: ${wem(42)};
  z-index: 99;
  ${centerIconA};
`
const Icon = styled.span``
const IconImage = styled.img`
  width: ${wem(92)};
  height: ${wem(92)};
  border-radius: ${wem(92)};
  vertical-align: middle;
`
const Text = styled.a`
  font-style: normal;
  font-weight: 700;
  line-height: ${wem(37)};
  font-size: ${wem(30)};

  color: #381e1e;
  margin-left: ${wem(8)};
`

const ChatButton = props => {
  return (
    <Wrapper
      style={props.style}
      href="https://pf.kakao.com/_xoaSxgC"
      target="_blank"
    >
      <IconImage src={Img} />
      <Text>
        클래스<br />
        문의하기
      </Text>
    </Wrapper>
  )
}

export default ChatButton

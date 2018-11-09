/**
 *
 * Footer
 *
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { Row, Column, EmptySpace } from 'ruucm-blocks/layouts'

import { wem2 } from 'ruucm-blocks/tools/mixins'

const Wrap = styled.div`
  width: 100%;
  font-family: 'NanumSquareRound', sans-serif;
  color: #231f20;
`

const Content = styled.div`
  margin-top: ${wem2(144)};
  padding-left: ${wem2(240)};
  padding-right: ${wem2(240)};
  font-size: 15px;
`

const FooterLine = styled.div`
  height: 1px;
  background-color: #231f20;
  margin-bottom: 47px;
`

const Left = styled.div`
  padding-bottom: 20px;
`
const Right = styled.div`
  padding-left: ${wem2(44)};
  padding-bottom: 11px;
`
const Right2 = styled.div`
  padding-left: ${wem2(44)};
  padding-bottom: 24px;
  line-height: 1.77;
  font-size: 13px;
`
const Icon = styled.div`
  padding-left: ${wem2(44)};
  height: 24px;
  .hellogorilla-icon-instagram-24 {
    font-size: 24px;
    :hover {
      color: rgb(128, 93, 233);
    }
  }
`

const L = styled.span`
  font-weight: 300;
`

const Footer = props => {
  return (
    <div>
      <Wrap>
        <Content>
          <FooterLine />
          <Row>
            <Column col="5">
              <Left>문의하기</Left>
              <Left>이용약관</Left>
              <Left>개인정보취급방침</Left>
              <Left>헬로우뮤지움</Left>
            </Column>
            <Column col="7">
              <Right>(주) 헬로고릴라</Right>
              <Right2>
                대표 <L>김효정</L> | 개인정보관리책임자 <L>김소정</L> |
                사업자등록번호 <L>220-88-64886</L> <br /> 통신판매업신고{' '}
                <L>123-45-6789 | 04718 서울시 성동구 금호로72</L>
              </Right2>
              <Icon>
                <span className="hellogorilla hellogorilla-icon-instagram-24" />

                <span className="hellogorilla hellogorilla-youtube" />
              </Icon>
            </Column>
          </Row>
        </Content>
      </Wrap>
    </div>
  )
}

export default Footer

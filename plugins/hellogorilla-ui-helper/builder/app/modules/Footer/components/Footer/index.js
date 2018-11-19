/**
 *
 * Footer
 *
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { Row, Column, EmptySpace } from 'ruucm-blocks/layouts'

import { wem2 } from 'ruucm-blocks/tools/mixins'
import media, { isTablet } from 'ruucm-blocks/tools/media'

const Wrap = styled.div`
  width: 100%;
  font-family: 'NanumSquareRoundWeb', sans-serif;
  color: #231f20;
  position: relative;
`

const Content = styled.div`
  margin-top: ${wem2(144)};
  /* padding-left: ${wem2(240)};
  padding-right: ${wem2(240)}; */
  font-size: ${wem2(15)};
  margin-bottom: ${wem2(96)};
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 960px;
  ${media.tablet`
    text-align: center;
  `};
`

const FooterLine = styled.div`
  height: 1px;
  background-color: #231f20;
  margin-bottom: 47px;
`

const Left = styled.a`
  padding-bottom: 20px;
  display: block;
`
const Right = styled.div`
  padding-left: ${wem2(44)};
  padding-bottom: 11px;
  ${media.tablet`
    padding-left: 0;
  `};
`
const Right2 = styled.div`
  padding-left: ${wem2(44)};
  padding-bottom: 24px;
  line-height: 1.77;
  font-size: 13px;
  ${media.tablet`
    padding-left: 0;
    margin-top: 30px;
  `};
`
const Icon = styled.div`
  padding-left: ${wem2(44)};
  height: 24px;
  .hellogorilla-icon-instagram-24 {
    font-size: 24px;
    cursor: pointer;
    :hover {
      color: rgb(128, 93, 233);
    }
  }
  .hellogorilla-youtube {
    font-size: 24px;
    margin-left: ${wem2(20)};
    cursor: pointer;
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
        <Content id="footer-content">
          <FooterLine id="footer-line" />
          <Row>
            <Column col="5">
              <Left href="mailto:so@hellomuseum.com">문의하기</Left>
              <Left>이용약관</Left>
              <Left>개인정보취급방침</Left>
              <Left href="http://www.hellomuseum.com" target="_blank">
                헬로우뮤지움
              </Left>
            </Column>
            <Column col="7">
              <Right>(주) 헬로고릴라</Right>
              <Right2>
                대표 <L>김효정</L> | 개인정보관리책임자 <L>김소정</L> |{' '}
                {isTablet() && <br />}
                사업자등록번호 <L>220-88-64886</L> <br /> 통신판매업신고{' '}
                <L>
                  123-45-6789 | {isTablet() && <br />}04718 서울시 성동구
                  금호로72
                </L>
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

/**
 *
 * ProductDesc
 *
 */

import React from 'react'
import { compose, lifecycle } from 'recompose'
import Select from 'react-select'

import styled, { css } from 'styled-components'
import media from 'ruucm-blocks/tools/media'
import { wem2 } from 'ruucm-blocks/tools/mixins'

import { Footer } from '../../../Footer'

const View = styled.div`
  /* position: relative; */
`

const LoadingWrapper = styled.div``
const Wrapper = styled.div`
  /* position: absolute; */
  left: 0;
  display: inline-block;
  ${media.tablet`
    display: block;
    max-width: 335px;
    margin: 0 auto;
  `};
`

const Left = styled.div`
  margin-left: ${wem2(240)};
  max-width: ${wem2(528)};
  ${media.tablet`
    margin: 0;
  `};
`
const MainImgWrap = styled.div`
  position: relative;
`

const MainImg = styled.img`
  /* 아래값은 지우고 작업 */
  width: 100%;
  padding-bottom: 32px;
`

const SoldOut = styled.div`
  display: none;
  position: absolute;
  width: ${wem2(288)};
  height: ${wem2(288)};
  background-color: rgba(83, 60, 151, 0.8);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${props =>
    props.show &&
    css`
      display: block;
    `};
`
const SoldOutLabel = styled.div`
  line-height: 1.14;
  font-size: 32px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Lato', sans-serif;
`

const ContentsWrapper = styled.div``

const ProductDesc = props => {
  let contents = props[props.dataType + '_' + props.category]
  return contents ? (
    <View>
      <Wrapper>
        <Left>
          <MainImgWrap>
            <MainImg src={contents.images[0].src} />
            <SoldOut show={!contents.in_stock}>
              <SoldOutLabel>
                SOLD
                <br />
                OUT
              </SoldOutLabel>
            </SoldOut>
          </MainImgWrap>

          <ContentsWrapper
            dangerouslySetInnerHTML={{
              __html: props.shortcodeChild,
            }}
          />
          {/* <Footer productFooter={true} /> */}
        </Left>
      </Wrapper>
    </View>
  ) : (
    <LoadingWrapper />
  )
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.getProducts
        ? this.props.getProducts({ productId: this.props.productId })
        : void 0 // don't run in builder
    },
  })
)
export default enhance(ProductDesc)

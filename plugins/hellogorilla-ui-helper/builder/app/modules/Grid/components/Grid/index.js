/**
 *
 * Grid
 *
 */

import React from 'react'
import { log } from 'ruucm-util'
import { map, isNil, isEmpty } from 'lodash'
import styled, { css } from 'styled-components'
import { Row, Column, EmptySpace } from 'ruucm-blocks/layouts'
import { LittleFerryLoader } from 'ruucm-blocks/components/LoadingSpinners'
import { Hover, Animate, Frame } from 'ruucm-blocks/animation'
import { center } from 'ruucm-blocks/tools/mixins'
import { compose, lifecycle } from 'recompose'

import Category from './Category'

const Wrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`
const Title = styled.h1`
  font-family: NanumSquareWeb;
  font-weight: 900;
  font-size: 120px;
  color: #38393c;
`

const LoadingWrapper = styled.div`
  position: relative;
  background: #2348A7;
  height: 34.76vw;
`
const LoadingText = styled.h1`
  font-family: NanumMyeongjoWeb;
  color: #eae5e3;
  font-size: 40px;
  position: absolute;
  ${center('xy')};
`

const Item = styled.a`
  width: 500px;
  height: 500px;
  position: relative;
  margin-bottom: 50px;
  display: block;
  ${props =>
    props.backImg &&
    css`
      background: url(${props.backImg});
    `};
`
const StyledColumn = styled(Column)`
  &:nth-of-type(2n) {
    ${Item} {
      margin-left: auto;
    }
  }
`
const OverlayAnimate = styled(Animate)`
  background: rgba(82, 94, 246, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`

const ItemNumber = styled.h1`
  font-weight: 900;
  color: #eae5e3;
  z-index: 1;
  position: absolute;
  left: 40px;
  top: 40px;
`
const Slug = styled.h1`
  font-family: NanumMyeongjoWeb;
  line-height: 86px;
  font-size: 60px;
`
const Number = styled.h1`
  font-family: NanumMyeongjoWeb;
  line-height: 143px;
  font-size: 100px;
`

const ItemTitle = styled.h1`
  font-family: NanumMyeongjoWeb;
  font-weight: 900;
  line-height: 63px;
  font-size: 48px;
  color: #eae5e3;
  width: 420px;
  text-align: center;
  z-index: 1;
  bottom: 40px;
  ${center('x')};
`

const Grid = props => {
  let contents = props[props.postType]

  return (
    <Wrapper>
      <EmptySpace height="210" />
      <Title>모아보기</Title>
      <EmptySpace height="165" />

      <Category {...props} />
      <EmptySpace height="100" />

      {isNil(contents) ? (
        <LoadingWrapper>
          <LittleFerryLoader waveColor="#2348A7" />
        </LoadingWrapper>
      ) : isEmpty(contents) ? (
        <LoadingWrapper>
          <LoadingText>준비 중입니다.</LoadingText>
        </LoadingWrapper> // No Data!
      ) : (
        <Row>
          {map(contents, (item, id) => {
            return (
              <StyledColumn col="6" key={id}>
                <Item
                  href={item.link}
                  backImg={item._embedded['wp:featuredmedia'][0].source_url}
                >
                  <Frame>
                    <Hover>
                      <ItemNumber>
                        <Slug>Curation</Slug>
                        <Number> {item['post-meta-fields'].item_number}</Number>
                      </ItemNumber>
                      <ItemTitle>{item.title.rendered}</ItemTitle>
                      <OverlayAnimate
                        to={{ opacity: 0 }}
                        options={{ time: 0.25 }}
                      />
                    </Hover>
                  </Frame>
                </Item>
              </StyledColumn>
            )
          })}
        </Row>
      )}
      <EmptySpace height="218" />
    </Wrapper>
  )
}
// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.getPosts ? this.props.getPosts({ category: 'all' }) : void 0 // don't run in builder
    },
  })
)
export default enhance(Grid)

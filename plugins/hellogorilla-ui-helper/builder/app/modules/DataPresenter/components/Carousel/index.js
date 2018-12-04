import React from 'react'
import styled, { css } from 'styled-components'
import { compose, lifecycle } from 'recompose'

import { log } from 'ruucm-util'
import { map, isNil, isEmpty } from 'lodash'
import Slider from 'react-slick'
import slickStyle from './slick-style'
import slickThemeStyle from './slick-theme-style'
import { Link } from 'react-router'
import { center } from 'ruucm-blocks/tools/mixins'
import {
  JellyLoadingSpinner,
  LittleFerryLoader,
} from 'ruucm-blocks/components/LoadingSpinners'

const Wrapper = styled.div`
  ${slickStyle};
  ${slickThemeStyle};
  width: 104.3%;
  position: relative;
  ${props =>
    props.align == 'right' &&
    css`
      margin-left: 16.5vw;
      ${Title} {
        left: 7.5vw;
      }
      ${StyledLink} {
        margin-right: calc(16.5vw + 77px);
      }
      .slick-next {
        right: calc(16.5vw + 120px);
      }
    `};
  ${props =>
    props.align == 'left' &&
    css`
      margin-left: -16.5vw;
      ${Title} {
        left: calc(16.5vw + 7.5vw);
      }
      ${StyledLink} {
        margin-right: 17px;
      }
      .slick-next {
        right: calc(16.5vw - 170px);
      }
    `};
`
const LoadingWrapper = styled.div`
  position: relative;
  background: #2348a7;
  height: 34.76vw;
`
const LoadingText = styled.h1`
  font-family: NanumMyeongjoWeb;
  color: #eae5e3;
  font-size: 40px;
  position: absolute;
  ${center('xy')};
`

const ContentWrapper = styled.div`
  position: relative;
  text-align: right;
`

const Title = styled.h1`
  font-size: 122px;
  font-family: Montserrat;
  font-style: italic;
  font-weight: 900;
  color: #fdd388;
  transform: rotate(-90deg);
  transform-origin: left;
  position: absolute;
  z-index: 1;
  bottom: 0;
`

const StyledLink = styled.a`
  font-weight: 300;
  font-size: 35px;
  font-family: NanumSquareWeb;
  text-decoration: none;
  display: block;
  margin-bottom: 30px;
  color: #2348a7;
`

function NextArrow(props) {
  const { className, onClick } = props
  return <div className={className} onClick={onClick} />
}

function PrevArrow(props) {
  return <div />
}

const Carousel = props => {
  let contents = props[props.postType]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <Wrapper {...props}>
      <Title>{props.title}</Title>
      {isNil(contents) ? (
        <LoadingWrapper>
          <LittleFerryLoader waveColor="#2348A7" />
        </LoadingWrapper>
      ) : isEmpty(contents) ? (
        <LoadingWrapper>
          <LoadingText>준비 중입니다.</LoadingText>
        </LoadingWrapper> // No Data!
      ) : (
        <ContentWrapper>
          <StyledLink href={props.viewAllLink}>모아보기</StyledLink>
          <Slider {...settings}>
            {map(contents, (data, id) => {
              return React.Children.map(props.children, child =>
                React.cloneElement(child, { itemData: data })
              )
            })}
          </Slider>
        </ContentWrapper>
      )}
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

export default enhance(Carousel)

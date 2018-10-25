import React from 'react'
import styled, { css } from 'styled-components'

import { log } from 'ruucm-util'
import { map, isEmpty } from 'lodash'

const Wrapper = styled.a`
  position: relative;
  display: block;
  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(82, 94, 246, 0.4);
    transition: all 320ms;
  }
  &:hover {
    &:after {
      opacity: 0;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 34.76vw;
  object-fit: cover;
`
const ItemTitle = styled.h1`
  font-family: NanumMyeongjoWeb;
  font-size: 40px;
  color: #eae5e3;
  position: absolute;
  top: 0;
  z-index: 1;
  white-space: nowrap;
  line-height: 63px;
  ${css`
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    transform: translateX(-50%) translateY(-50%);
  `};
`

const CarouselItem = props => {
  return !isEmpty(props.itemData) ? (
    <Wrapper href={props.itemData.link}>
      <Image src={props.itemData._embedded['wp:featuredmedia'][0].source_url} />
      <ItemTitle
        dangerouslySetInnerHTML={{ __html: props.itemData.title.rendered }}
      />
    </Wrapper>
  ) : (
    '[no item data]'
  )
}

export default CarouselItem

/**
 *
 * PageBanner
 *
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { Row, Column, EmptySpace } from 'ruucm-blocks/layouts'
import media from 'ruucm-blocks/tools/media'

import { wem2 } from 'ruucm-blocks/tools/mixins'
import img1 from '../../assets/store-banner-background-1.png'
import img2 from '../../assets/store-banner-background-2.png'
import img3 from '../../assets/store-banner-background-3.png'
import img4 from '../../assets/store-banner-background-4.png'

const Wrap = styled.div`
  ${media.tablet`
    margin-top: 80px;
  `};
`
const Img1 = styled.img`
  width: 100%;
`
const Img2 = styled.img`
  width: 100%;
  ${media.tablet`
    visibility: hidden;
    height: 50px;
  `};
`
const Img3 = styled.img`
  width: 100%;
  ${media.tablet`
    visibility: hidden;
    height: 50px;
  `};
`
const Img4 = styled.img`
  width: 100%;
`

const BannerText = styled.div`
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  font-size: ${wem2(28)};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: rgb(83, 60, 151);
  white-space: nowrap;

  ${media.tablet`
    font-size: 16px !important;
  `};
`

const PageBanner = ({ bannerText, ...props }) => {
  return (
    <Wrap>
      <Row>
        <Column col="12">
          <Img1 src={img1} />
        </Column>
      </Row>

      <Row>
        <Column col="4">
          <Img2 src={img2} />
        </Column>

        <Column col="4">
          <BannerText>{bannerText}</BannerText>
        </Column>
        <Column col="4">
          <Img3 src={img3} />
        </Column>
      </Row>

      <Row>
        <Column col="12">
          <Img4 src={img4} />
        </Column>
      </Row>
    </Wrap>
  )
}

export default PageBanner

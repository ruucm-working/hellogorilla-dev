/**
 *
 * Product
 *
 */

import React from 'react'
import { compose, lifecycle } from 'recompose'
import styled, { css } from 'styled-components'
import { log, commaPipe } from 'ruucm-util'

import { map } from 'lodash'
import { Row, Column, EmptySpace } from 'ruucm-blocks/layouts'
import { wem2 } from 'ruucm-blocks/tools/mixins'
import { _t } from '../../../../shared/translate'

const Size = styled.div`
  /* width: ${wem2(288)};
  height: ${wem2(360)}; */
  @media all and (max-width: 575px) {
    /* width: 100%; */
    height: 350px;
  }
`

const ProductWrap = styled.div`
  padding-bottom: ${wem2(72)};
`

const Wrapper = styled.div`
  position: relative;
`
const StyledColumn = styled(Column)``

const ProductWrapper = styled.div`
  position: relative;
  height: ${wem2(360)};
`
const Center = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  /* width: 100%;
  height: 100%; */
`

const ImageWrapper = styled.div`
  width: ${wem2(288)};
  height: ${wem2(360)};
  /* width: 100%;
  height: 100%; */
  max-width: 288px;
  max-height: 360px;
  @media all and (max-width: 575px) {
    width: 253px;
    height: 316px;
  }
`

const Overlay = styled.div`
  /* width: ${wem2(288)};
  height: ${wem2(360)}; */
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  cursor: pointer;
  z-index: 10;
  :hover {
    opacity: 1;
    background-color: rgba(128, 92, 232, 0.5);
  }
`
const SalePercentage = styled.div`
  background: #533c97;
  display: none;
  position: absolute;
  top: 0;
  /* margin-top: ${wem2(96)}; */
  /* margin-left: ${wem2(16)}; */
  width: ${wem2(72)};
  height: ${wem2(72)};
  border-bottom-right-radius: 2px;
  ${props =>
    props.show &&
    css`
      display: block;
    `};
`
const SaleText = styled.div`
  font-size: ${wem2(24)};
  text-align: center;
  color: #ffffff;
  margin-top: ${wem2(12)};
  ${props =>
    props.small &&
    css`
      font-size: ${wem2(16)};
      margin-top: ${wem2(8)};
    `};
`
const NewLabel = styled.div`
  display: none;
  background: #533c97;
  position: absolute;
  width: ${wem2(96)};
  height: ${wem2(36)};
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  ${props =>
    props.show &&
    css`
      display: block;
    `};
`
const NewLabelText = styled.div`
  font-size: ${wem2(14)};
  color: white;
  text-transform: uppercase;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
`

const SoldOut = styled.div`
  display: none;
  position: absolute;
  width: ${wem2(240)};
  height: ${wem2(240)};
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
  font-size: ${wem2(28)};
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Lato', sans-serif;
`

const TextWrapper = styled.div`
  text-align: center;
  margin-top: ${wem2(24)};
`
const Title = styled.h1`
  font-size: ${wem2(18)};
  color: #231f20;
  font-weight: 500;
`
const Desc = styled.h1`
  margin-top: ${wem2(12)};
  font-size: ${wem2(14)};
  line-height: 1.57;
  color: #918f8f;
  white-space: normal;
`

const MoreLink = styled.a``
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Price = styled.div`
  text-align: center;
  margin-top: ${wem2(12)};
`
const RegularPrice = styled.div`
  display: none;
  font-size: ${wem2(18)};
  color: #4a4a4a;
  ${props =>
    props.show &&
    css`
      display: block;
      text-decoration: line-through;
      color: #b7b5b6;
    `};
`
const SalePrice = styled.div`
  margin-top: ${wem2(6)};
  font-size: ${wem2(18)};
  color: #4a4a4a;
`

const Product = ({ current_lang, ...props }) => {
  const { data, addToCart, index } = props
  const amazon_link = data.meta_data.filter(obj => {
    return obj.key === 'amazon_link'
  })
  log('amazon_link', amazon_link)
  return (
    <ProductWrap>
      <MoreLink
        href={
          current_lang == 'en'
            ? data.meta_data.filter(obj => {
                return obj.key === 'amazon_link'
              })[0].value
            : data.permalink
        }
        target={current_lang == 'en' ? '_blank' : ''}
      >
        <Wrapper featured={data.featured}>
          <Size>
            <ProductWrapper>
              <Center>
                <ImageWrapper>
                  <Image src={data.images[0].src} />
                </ImageWrapper>

                <Overlay />
                <SalePercentage show={data.sale_price}>
                  <SaleText>
                    {100 -
                      Math.trunc(
                        (data.sale_price / data.regular_price) * 100
                      )}{' '}
                    %
                  </SaleText>

                  <SaleText small>OFF</SaleText>
                </SalePercentage>

                <NewLabel show={data.tags.length}>
                  <NewLabelText>
                    {data.tags[0] ? data.tags[0].name : ''}
                  </NewLabelText>
                </NewLabel>

                <SoldOut show={!data.in_stock}>
                  <SoldOutLabel>
                    SOLD
                    <br />
                    OUT
                  </SoldOutLabel>
                </SoldOut>
              </Center>
            </ProductWrapper>
          </Size>
        </Wrapper>
      </MoreLink>

      <TextWrapper>
        <Title>{data.name}</Title>

        <Desc dangerouslySetInnerHTML={{ __html: data.short_description }} />
      </TextWrapper>

      <Price>
        <RegularPrice show={data.sale_price}>
          {_t(current_lang, '￦')}
          {commaPipe(data.regular_price)}
        </RegularPrice>
        <SalePrice>
          {_t(current_lang, '￦')}
          {commaPipe(data.price)}
        </SalePrice>
      </Price>
    </ProductWrap>
  )
}

export default Product

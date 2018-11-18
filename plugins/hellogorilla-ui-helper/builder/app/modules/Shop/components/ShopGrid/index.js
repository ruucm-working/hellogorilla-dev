/**
 *
 * ShopGrid
 *
 */

import React from 'react'
import { compose, lifecycle, withState } from 'recompose'
import styled, { css } from 'styled-components'
import { log } from 'ruucm-util'

import { map } from 'lodash'
import Product from './Product'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'
import { Row, Column } from 'ruucm-blocks/layouts'

import bannerImg from '../../assets/banner.png'
import LoadingSpinner from '../../../shared/LoadingSpinner'

// ../../assets/banner.png

const Wrap = styled.div`
  /* background: white; */
  min-height: 1000px;
  margin-left: ${wem2(240)};
  margin-right: ${wem2(240)};
  margin-top: 128px;
`

const Search = styled.div`
  background: center / cover no-repeat url(${bannerImg});
  height: 288px;
  position: relative;
`
const SearchTitle = styled.div`
  font-size: 28px;
  text-align: center;
  color: #533c97;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const Category = styled.ul`
  margin-left: ${wem2(145)};
  margin-right: ${wem2(144)};
`
const CategoryWrapAll = styled.div`
  width: ${wem2(111)};
  height: ${wem2(48)};
  border-radius: 2px;
  border: solid 1px #533c97;
  background-color: #ffffff;
  display: inline-block;
  position: relative;
  color: #533c97;
  cursor: pointer;
  :hover {
    background-color: #533c97;
    color: white;
  }
  ${props =>
    props.active &&
    css`
      background-color: #533c97;
      color: white;
    `};
`
const CategoryWrap = styled.div`
  width: ${wem2(116)};
  height: ${wem2(48)};
  border-radius: 2px;
  border: solid 1px #533c97;
  background-color: #ffffff;
  display: inline-block;
  position: relative;
  color: #533c97;
  margin-left: ${wem2(24)};
  cursor: pointer;
  :hover {
    background-color: #533c97;
    color: white;
  }
  ${props =>
    props.active &&
    css`
      background-color: #533c97;
      color: white;
    `};
`
const CategoryItem = styled.li`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${wem2(16)};
  width: fit-content;
`

const ShopGrid = ({ active, setActive, ...props }) => {
  let contents = props[props.dataType + '_' + props.category]
  return (
    <Wrap>
      <Category>
        <CategoryWrapAll
          onClick={() => {
            props.getProducts()
            setActive(0)
          }}
          active={active == 0}
        >
          <CategoryItem> 모두 보기</CategoryItem>
        </CategoryWrapAll>

        <CategoryWrap
          onClick={() => {
            props.getProducts({ category: 17 })
            setActive(1)
          }}
          active={active == 1}
        >
          <CategoryItem> 카테고리 1</CategoryItem>
        </CategoryWrap>

        <CategoryWrap
          onClick={() => {
            props.getProducts({ category: 18 })
            setActive(2)
          }}
          active={active == 2}
        >
          <CategoryItem>카테고리 2</CategoryItem>
        </CategoryWrap>

        <CategoryWrap
          onClick={() => {
            props.getProducts({ category: 19 })
            setActive(3)
          }}
          active={active == 3}
        >
          <CategoryItem>카테고리 3</CategoryItem>
        </CategoryWrap>

        <CategoryWrap
          onClick={() => {
            props.getProducts({ category: 20 })
            setActive(4)
          }}
          active={active == 4}
        >
          <CategoryItem>카테고리 4</CategoryItem>
        </CategoryWrap>
      </Category>

      {contents ? (
        <Row>
          {map(contents, (item, id) => {
            return (
              <Column col="4">
                <Product
                  key={id}
                  data={item}
                  addToCart={props.addToCart}
                  index={id}
                />
              </Column>
            )
          })}
        </Row>
      ) : (
        <LoadingSpinner />
      )}
    </Wrap>
  )
}
// Component enhancer
const enhance = compose(
  withState('active', 'setActive', 0),
  lifecycle({
    componentDidMount() {
      this.props.getProducts ? this.props.getProducts() : void 0 // don't run in builder
    },
  })
)
export default enhance(ShopGrid)

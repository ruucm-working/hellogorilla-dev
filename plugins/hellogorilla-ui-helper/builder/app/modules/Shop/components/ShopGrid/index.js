/**
 *
 * ShopGrid
 *
 */

import React from 'react'
import { compose, lifecycle, withState, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { log } from 'ruucm-util'

import { map } from 'lodash'
import Product from './Product'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'
import { Row, Column } from 'ruucm-blocks/layouts'

import bannerImg from '../../assets/banner.png'
import LoadingSpinner from '../../../shared/LoadingSpinner'
import { _t } from '../../../shared/translate'

// ../../assets/banner.png
const Height = styled.div`
  min-height: 1928px;
  /* height: fill-available; */
`

const Wrap = styled.div`
  /* background: white; */
  /* margin-left: ${wem2(240)};
  margin-right: ${wem2(240)}; */
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  white-space: nowrap;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 128px;
  position: relative;
    .col-sm-4 {
    @media all and (min-width: 575px) {
      height: 350px !important;
    }
  }
`

const Category = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
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

const StyledRow = styled(Row)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: ${wem2(144)};
`

const ShopGrid = ({
  // from parent
  contents,

  // local
  active,
  setActive,
  setContents,
  filterByLang,

  // wordpress
  current_lang,

  ...props
}) => {
  return (
    <Height>
      <Wrap>
        <Category>
          <CategoryWrapAll
            onClick={() => {
              setContents(null)
              setActive(0)
              props.getProducts()
            }}
            active={active == 0}
          >
            <CategoryItem>{_t(current_lang, '모두 보기')}</CategoryItem>
          </CategoryWrapAll>

          <CategoryWrap
            onClick={() => {
              setContents(null)
              setActive(1)
              props.getProducts({ category: 17 })
            }}
            active={active == 1}
          >
            <CategoryItem>{_t(current_lang, '카테고리 1')}</CategoryItem>
          </CategoryWrap>

          {/* <CategoryWrap
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
          </CategoryWrap> */}
        </Category>

        {contents ? (
          <StyledRow>
            {map(filterByLang(current_lang, contents), (item, id) => {
              return (
                <Column col="4">
                  <Product
                    key={id}
                    data={item}
                    addToCart={props.addToCart}
                    index={id}
                    current_lang={current_lang}
                  />
                </Column>
              )
            })}
          </StyledRow>
        ) : (
          <LoadingSpinner />
        )}
      </Wrap>
    </Height>
  )
}
// Component enhancer
const enhance = compose(
  withState('active', 'setActive', 0),
  withState('contents', 'setContents', null),
  withHandlers({
    filterByLang: props => (lang, contents) => {
      var res = []
      var res_en = []
      for (let index = 0; index < contents.length; index++) {
        contents[index].meta_data.filter(obj => {
          if (obj.key === 'amazon_link') res_en.push(contents[index])
        })
      }
      res = contents.filter(val => !res_en.includes(val))
      return lang == 'en' ? res_en : res
    },
  }),

  lifecycle({
    componentWillReceiveProps(nextProps) {
      let contents = this.props[this.props.dataType + '_' + this.props.category]

      let contentsNext =
        nextProps[nextProps.dataType + '_' + nextProps.category]

      if (contents != contentsNext) {
        this.props.setContents(contentsNext)
      }
    },
    componentDidMount() {
      this.props.getProducts ? this.props.getProducts() : void 0 // don't run in builder
    },
  })
)
export default enhance(ShopGrid)

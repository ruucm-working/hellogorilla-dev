import React from 'react'
import styled, { css } from 'styled-components'

import { Hover, Animate, Frame } from 'ruucm-blocks/animation'
import { compose, withState } from 'recompose'

const Category = styled.ul`
  position: relative;
  height: 93px;
`

const CategoryItem = styled(Frame)`
  font-family: Montserrat;
  font-weight: bold;
  line-height: 94px;
  font-size: 40px;
  color: #38393c;
  display: inline-block;
  margin-right: 63px;
  cursor: pointer;
  position: relative;
  ${props =>
    props.active &&
    css`
      &:before {
        content: '';
        position: absolute;
        right: -50px;
        top: -12px;
        width: 94px;
        height: 94px;
        background: rgba(82, 242, 91, 0.6);
        border-radius: 50px;
      }
    `};
`
const AnimatedCircle = styled(Animate)`
  opacity: 0;
  position: absolute;
  right: -37px;
  top: -10px;
  width: 94px;
  height: 94px;
  background: rgba(82, 242, 91, 0.6);
  border-radius: 50px;
`
const CategoryComp = props => {
  let activeCat = props.activeCat
  return (
    <Category>
      <CategoryItem
        active={1 == activeCat}
        onClick={() => {
          props.setActiveCat(1)
          props.getPosts({ category: 4 })
        }}
      >
        <Hover>
          eat
          <AnimatedCircle
            to={{ opacity: 1, x: '13px', y: '-2px' }}
            options={{ time: 0.32 }}
          />
        </Hover>
      </CategoryItem>

      <CategoryItem
        active={2 == activeCat}
        onClick={e => {
          e.stopPropagation()
          props.setActiveCat(2)
          props.getPosts({ category: 5 })
        }}
      >
        <Hover>
          life
          <AnimatedCircle
            to={{ opacity: 1, x: '13px', y: '-2px' }}
            options={{ time: 0.32 }}
          />
        </Hover>
      </CategoryItem>

      <CategoryItem
        active={3 == activeCat}
        onClick={() => {
          props.setActiveCat(3)
          props.getPosts({ category: 6 })
        }}
      >
        <Hover>
          growth
          <AnimatedCircle
            to={{ opacity: 1, x: '13px', y: '-2px' }}
            options={{ time: 0.32 }}
          />
        </Hover>
      </CategoryItem>

      <CategoryItem
        active={4 == activeCat}
        onClick={e => {
          e.stopPropagation()
          props.setActiveCat(4)
          props.getPosts({ category: 7 })
        }}
      >
        <Hover>
          love
          <AnimatedCircle
            to={{ opacity: 1, x: '13px', y: '-2px' }}
            options={{ time: 0.32 }}
          />
        </Hover>
      </CategoryItem>

      <CategoryItem
        active={5 == activeCat}
        onClick={e => {
          e.stopPropagation()
          props.setActiveCat(5)
          props.getPosts({ category: 8 })
        }}
      >
        <Hover>
          tools
          <AnimatedCircle
            to={{ opacity: 1, x: '13px', y: '-2px' }}
            options={{ time: 0.32 }}
          />
        </Hover>
      </CategoryItem>
    </Category>
  )
}

// Component enhancer
const enhance = compose(withState('activeCat', 'setActiveCat', 0))

export default enhance(CategoryComp)

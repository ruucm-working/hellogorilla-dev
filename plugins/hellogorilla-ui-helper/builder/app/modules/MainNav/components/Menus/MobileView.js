import React from 'react'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import styled, { css } from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import burgerStyle from './burgerStyle'
import { centerIconA, wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'
import { map } from 'lodash'
import { _t, _u } from '../../../shared/translate'
import { menuHeight, subMenuHeight } from '../../../shared/consts'

const MenuWrapper = styled.div`
  /* padding-top: 150px; */
  background: #533c97;
`

const LoginMenuItem = styled.div``
const MenuItem = styled.a`
  display: block;
  padding-top: 50px;
  padding-left: 20px;
  font-size: 15px;

  color: #ffffff;
`
const MenuFoldButton = styled.span`
  cursor: pointer;
  display: inline-block;
  transform: rotate(180deg);
  ${props =>
    props.showing &&
    css`
      transform: initial;
    `}
`
const SubMenuItemWrap = styled.a``

const SubMenuItem = styled.a``

const CartMenuItem = styled.a``

const CartIcon = styled.span``
const MainLogo = styled.a`
  font-size: 45px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 49px;
  height: 45px;
`

const Wrap = styled.div`
  display: none;

  ${media.tablet`
    display: block;
    ${burgerStyle}
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 47px;
    background: #533c97;
  `};
`

const MobileView = ({
  contents,
  current_lang,
  showSub,
  setShowSub,
  ...props
}) => {
  return (
    <Wrap>
      <MainLogo href="/">
        <span className="hellogorilla hellogorilla-logo">
          <span className="path1" />
          <span className="path2" />
          <span className="path3" />
        </span>
      </MainLogo>
      <Menu
        left
        customCrossIcon={<img src={require('./assets/icon-close.svg')} />}
      >
        <MenuWrapper>
          {map(contents, (item, id) => {
            switch (id) {
              case 0:
                return (
                  <div>
                    <MenuItem key={id} href={item.url}>
                      {_t(current_lang, item.title)}

                      <MenuFoldButton
                        className="hellogorilla hellogorilla-arrow-dropdown-selected"
                        onClick={() => {
                          setShowSub(!showSub)
                        }}
                        showing={showSub}
                      />
                    </MenuItem>

                    {showSub ? (
                      <SubMenuItemWrap>
                        <SubMenuItem
                          href={_u(current_lang, '/hellogorilla/about-us')}
                          onMouseOver={() => setShowSub(true)}
                        >
                          {_t(current_lang, '소개')}
                        </SubMenuItem>
                        <SubMenuItem
                          href={_u(current_lang, '/hellogorilla/program')}
                          onMouseOver={() => setShowSub(true)}
                        >
                          {_t(current_lang, '프로그램')}
                        </SubMenuItem>
                      </SubMenuItemWrap>
                    ) : (
                      ''
                    )}
                  </div>
                )

              default:
                return item.menu_item_parent == 0 ? (
                  <MenuItem key={id} href={item.url}>
                    {_t(current_lang, item.title)}
                  </MenuItem>
                ) : (
                  ''
                )
            }
          })}
          <CartMenuItem href={_u(current_lang, '/cart')}>
            <CartIcon className="hellogorilla hellogorilla-icon-cart-61" />
          </CartMenuItem>
        </MenuWrapper>
      </Menu>
    </Wrap>
  )
}

// Component enhancer
const enhance = compose(withState('showSub', 'setShowSub', false))

export default enhance(MobileView)

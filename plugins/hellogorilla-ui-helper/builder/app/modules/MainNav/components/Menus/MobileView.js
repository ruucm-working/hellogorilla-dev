import React from 'react'
import styled, { css } from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import burgerStyle from './burgerStyle'
import { centerIconA, wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'
import { map } from 'lodash'
import { _t, _u } from '../../../shared/translate'

const MenuWrapper = styled.div`
  padding-top: 150px;
  background: #444041;
`

const LoginMenuItem = styled.div``
const MenuItem = styled.a`
  display: block;
`

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

const MobileComp = ({ contents, current_lang, ...props }) => {
  return (
    <Wrap>
      <MainLogo href="/">
        <span className="hellogorilla hellogorilla-logo">
          <span className="path1" />
          <span className="path2" />
          <span className="path3" />
        </span>
      </MainLogo>
      <Menu left>
        <MenuWrapper>
          <LoginMenuItem
            dangerouslySetInnerHTML={{ __html: props.shortcodeChild }}
          />
          {map(contents, (item, id) => (
            <MenuItem key={id} href={item.url}>
              {_t(current_lang, item.title)}
            </MenuItem>
          ))}
          <CartMenuItem href={_u(current_lang, '/cart')}>
            <CartIcon className="hellogorilla hellogorilla-icon-cart-61" />
          </CartMenuItem>
        </MenuWrapper>
      </Menu>
    </Wrap>
  )
}

export default MobileComp

import React from 'react'
import styled, { css } from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import burgerStyle from './burgerStyle'
import { centerIconA, wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'
import { map } from 'lodash'
import { _t } from '../../../shared/translate'

const MenuWrapper = styled.div``

const LoginMenuItem = styled.div``
const MenuItem = styled.a``

const CartIcon = styled.span`
  padding-left: ${wem2(40)};
  display: inline-block;
`
const MainLogo = styled.a`
  padding-left: ${wem2(40)};
`

const Mobile = styled.div`
  display: none;
  ${css`
    ${MenuWrapper} {
      padding: ${wem2(36)} ${wem2(28)} ${wem2(45)} ${wem2(28)};
    }
    ${LoginMenuItem} {
      font-size: ${wem2(16)};
      font-weight: 300;
      line-height: 1.19;
    }
    ${MenuItem} {
      display: block;
      font-size: ${wem2(16)};
      line-height: ${wem2(59)};
      color: #000000;
      text-transform: uppercase;
      border-bottom: solid ${wem2(1)} #707070;
      &:nth-of-type(1) {
        border-top: solid ${wem2(1)} #707070;
      }
    }
  `};
  ${media.tablet`
    display: block;
    ${burgerStyle}
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 70px;
    background: #efede2;
    box-shadow: 0px 4px 23.8px 0.2px rgba(0, 0, 0, 0.18);
  `};
`

const MobileLogo = styled.img`
  width: 53 ${wem2(0.8)};
  margin-top: ${wem2(12)};
  margin-left: ${wem2(15)};
  display: none;
  ${media.tablet`
  display: inline-block;
`};
`
const MobileCartMenuItem = styled.div`
  display: inline-block;
  line-height: ${wem2(59)};
  height: ${wem2(59)};
  border-bottom: ${wem2(1)} solid rgb(112, 112, 112);
  width: calc(100% - ${wem2(60)});
  ${CartIcon} {
    font-size: ${wem2(25)};
  }
`
const MobileCartItem = styled.div`
  display: inline-block;
  .login-menu-item,
  .signup-menu-item {
    display: none;
  }
`
const MobileComp = ({ contents, current_lang, ...props }) => {
  return (
    <Mobile>
      <a href="/">
        <span className="hellogorilla hellogorilla-logo">
          <span className="path1" />
          <span className="path2" />
          <span className="path3" />
        </span>
      </a>
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
          <MobileCartMenuItem>
            <CartIcon className="beerspick beerspick-shopping-cart-solid" />
            {/* <MobileCartItem
              dangerouslySetInnerHTML={{ __html: props.shortcodeChild }}
            /> */}
          </MobileCartMenuItem>
        </MenuWrapper>
      </Menu>
    </Mobile>
  )
}

export default MobileComp

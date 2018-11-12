/**
 *
 * Menus
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { log } from 'ruucm-util'
import { map } from 'lodash'
import { Row, Column, EmptySpace } from 'ruucm-blocks/layouts'
import media from 'ruucm-blocks/tools/media'
import styled, { css } from 'styled-components'
import { centerIconA, wem, wem2, center } from 'ruucm-blocks/tools/mixins'

import { slide as Menu } from 'react-burger-menu'
import burgerStyle from './burgerStyle'
import _t from '../../../shared/translate'
import { menuHeight, subMenuHeight } from '../../../shared/consts'
// import mobileLogo from '../../assets/mobile-logo.png'

const Desktop = styled.div`
  font-family: 'NanumSquareRoundWeb', sans-serif;
  font-size: 15px;
  line-height: 15px;
  position: relative;
  height: ${menuHeight + 'px'};
  background: #533c97;
  width: 100%;
  color: white;
  ${media.tablet`
    display: none;
  `};
`

const Header = styled.div`
  /* max-width: 960px; */
  padding-left: ${wem2(240)};
  padding-right: ${wem2(240)};
`

const Centering = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* max-width: 960px; */
  width: 66.66%;
`

const Logo = styled.a`
  font-size: ${menuHeight + 'px'};
  display: block;
  .hellogorilla-logo {
    vertical-align: super;
  }
`
const Right = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  .hellogorilla-icon-cart-61 {
    margin-left: ${wem2(40)};
    font-size: 27px;
    vertical-align: middle;
    cursor: pointer;
    :hover {
      color: #0fb780;
    }
  }
`

const MenuWrapper = styled.div`
  color: white;
  font-size: 15px;
  line-height: 15px;
  display: inline-block;
`
const MenuItem = styled.a`
  padding-left: ${wem2(40)};
  cursor: pointer;
  :hover {
    color: #0fb780;
  }

  ${props =>
    props.current &&
    css`
      color: #0fb780;
      font-weight: 700;
    `};
`

const SubMenuItemWrap = styled.a`
  position: absolute;
  left: ${wem2(40 / 2)};
  top: 45px;
`

const SubMenuItem = styled.a`
  width: 96px;
  text-align: center;
  line-height: ${subMenuHeight + 'px'};
  height: ${subMenuHeight + 'px'};
  cursor: pointer;
  background: #0eb780;
  color: white;
  display: block;
  margin-bottom: 1px;
  :hover {
    color: #0fb780;
    background: #533c97;
  }

  ${props =>
    props.current &&
    css`
      color: #0fb780;
      font-weight: 700;
    `};
`

const MainLogo = styled.a`
  padding-left: ${wem2(40)};
`

const LoginMenuItem = styled.div`
  display: inline-block;
  position: relative;
  .cosmosfarm-members-loginout-link {
    display: inline-block;
    padding-left: ${wem2(40)};
    :hover {
      color: #0fb780;
    }
  }
  .cosmosfarm-members-register-link {
    display: inline-block;
    :hover {
      color: #0fb780;
    }
  }
  /* .hellogorilla-cart-count {
    display: inline-block;
    padding-left: 40px;
    font-size: 22px;
    vertical-align: middle;
    :hover {
      color: #0fb780;
    }
  } */
  .hellogorilla-cart-count {
    position: absolute;
    font-size: 10px;
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    text-align: center;
    color: #533c97;
    border-radius: 50%;
    margin-left: ${wem2(59)};
    top: -22px;
  }
  .cosmosfarm-members-account-links {
    display: inline-block;
  }
  .cosmosfarm-members-account-link {
    display: inline-block;
  }
`

const CartIcon = styled.span`
  padding-left: ${wem2(40)};
  display: inline-block;
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
const Menus = ({
  me,
  wpLogout,
  isActivePage,
  current_lang,
  showSub,
  setShowSub,
  ...props
}) => {
  let contents = props[props.wpType + '_' + props.sort + '_wpData']

  return (
    <div>
      <Desktop>
        <Header>
          <Centering
          // onMouseOut={() => setShowSub(false)}
          >
            <Logo href="/">
              <span className="hellogorilla hellogorilla-logo">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </span>
            </Logo>
            <Right>
              <MenuWrapper>
                {map(contents, (item, id) =>
                  item.menu_item_parent == 0 ? (
                    <MenuItem
                      key={id}
                      href={item.url}
                      current={isActivePage(item.url)}
                      onMouseOver={() => {
                        if (item.title == '헬로고릴라') setShowSub(true)
                        else setShowSub(false)
                      }}
                    >
                      {_t(current_lang, item.title)}
                    </MenuItem>
                  ) : (
                    ''
                  )
                )}
                {showSub ? (
                  <SubMenuItemWrap>
                    <SubMenuItem onMouseOver={() => setShowSub(true)}>
                      {_t(current_lang, '소개')}
                    </SubMenuItem>
                    <SubMenuItem onMouseOver={() => setShowSub(true)}>
                      {_t(current_lang, '프로그램')}
                    </SubMenuItem>
                  </SubMenuItemWrap>
                ) : (
                  ''
                )}

                {me ? (
                  // <MenuItem
                  //   onClick={() =>
                  //     wpLogout(() => {
                  //       alert('로그아웃 되었습니다')
                  //       window.location = '/'
                  //     })
                  //   }
                  // >
                  //   로그아웃
                  // </MenuItem>
                  <MenuItem
                    href="/my-account"
                    current={isActivePage('/my-account/')}
                  >
                    {_t(current_lang, '마이페이지')}
                  </MenuItem>
                ) : (
                  <span>
                    <MenuItem href="/login" current={isActivePage('/login/')}>
                      {_t(current_lang, '로그인')}
                    </MenuItem>
                    <MenuItem
                      href="/customer-signup"
                      current={isActivePage('/customer-signup/')}
                    >
                      {_t(current_lang, '회원가입')}
                    </MenuItem>
                  </span>
                )}
              </MenuWrapper>
              {/* <MainLogo
                href="/"
                className="beerspick beerspick-beerspick_logo_header"
              /> */}
              <LoginMenuItem
                dangerouslySetInnerHTML={{ __html: props.shortcodeChild }}
              />
              <a href="/cart">
                <span className="hellogorilla hellogorilla-icon-cart-61" />
              </a>
            </Right>
            {/* <a href="/my-account">카트</a> */}

            {/* <IconMenuItem href="https://www.instagram.com/beers_pick/">
                <span className="beerspick beerspick-instagram_logo" />
              </IconMenuItem>
              <IconMenuItem href="https://www.facebook.com/Beers-Pick-비어스픽-177713022999530/">
                <span className="beerspick beerspick-facebook_logo" />
              </IconMenuItem>

              <IconMenuItem href="https://www.youtube.com/channel/UC-KG6FDPqMh5k55OldVTEgA">
                <span className="beerspick-2 beerspick-2-youtube" />
              </IconMenuItem> */}
          </Centering>
        </Header>
      </Desktop>

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
            <EmptySpace height="41.5" />
            {map(contents, (item, id) => (
              <MenuItem key={id} href={item.url}>
                {_t(current_lang, item.title)}
              </MenuItem>
            ))}
            <MobileCartMenuItem>
              <CartIcon className="beerspick beerspick-shopping-cart-solid" />
              <MobileCartItem
                dangerouslySetInnerHTML={{ __html: props.shortcodeChild }}
              />
            </MobileCartMenuItem>
          </MenuWrapper>
        </Menu>
      </Mobile>
    </div>
  )
}

// Component enhancer
const enhance = compose(
  withState('showSub', 'setShowSub', false),
  withHandlers({
    isActivePage: ({ ...props }) => url => {
      return url == location.href || url == location.pathname ? true : false
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getDatas ? this.props.getDatas() : ''

      this.props.getMe()
      this.props.getCurrentLang()
    },
  })
)

export default enhance(Menus)

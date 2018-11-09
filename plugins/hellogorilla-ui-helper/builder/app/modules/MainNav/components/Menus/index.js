/**
 *
 * Menus
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers } from 'recompose'
import { log } from 'ruucm-util'
import { map } from 'lodash'
import { Row, Column, EmptySpace } from 'ruucm-blocks/layouts'
import media from 'ruucm-blocks/tools/media'
import styled, { css } from 'styled-components'
import { centerIconA, wem, wem2, center } from 'ruucm-blocks/tools/mixins'

import { slide as Menu } from 'react-burger-menu'
import burgerStyle from './burgerStyle'
// import mobileLogo from '../../assets/mobile-logo.png'

const Desktop = styled.div`
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 15px;
  line-height: 15px;
  position: relative;
  height: 61px;
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
  font-size: 61px;
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
  .hellogorilla-cart {
    vertical-align: middle;
    font-size: 22px;
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
  padding-left: 40px;
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

const MainLogo = styled.a`
  padding-left: 40px;
`

const LoginMenuItem = styled.div`
  display: inline-block;
  .cosmosfarm-members-loginout-link {
    display: inline-block;
    padding-left: 40px;
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
  .hellogorilla-cart-count {
    display: inline-block;
    padding-left: 40px;
    :hover {
      color: #0fb780;
    }
  }
  .cosmosfarm-members-account-links {
    display: inline-block;
  }
  .cosmosfarm-members-account-link {
    display: inline-block;
  }
`

const CartIcon = styled.span`
  padding-left: 40px;
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
const Menus = ({ me, wpLogout, isActivePage, ...props }) => {
  let contents = props[props.wpType + '_' + props.sort + '_wpData']

  return (
    <div>
      <Desktop>
        <Header>
          <Centering>
            <Logo href="/">
              <span className="hellogorilla hellogorilla-logo">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </span>
            </Logo>
            <Right>
              <MenuWrapper>
                {map(contents, (item, id) => (
                  <MenuItem
                    key={id}
                    href={item.url}
                    current={isActivePage(item.url)}
                  >
                    {item.title}
                  </MenuItem>
                ))}
                {me ? (
                  <MenuItem
                    onClick={() =>
                      wpLogout(() => {
                        alert('로그아웃 되었습니다')
                        window.location = '/'
                      })
                    }
                  >
                    로그아웃
                  </MenuItem>
                ) : (
                  <span>
                    <MenuItem href="/login">로그인</MenuItem>
                    <MenuItem href="/customer-signup">회원가입</MenuItem>
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
                {item.title}
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
  withHandlers({
    isActivePage: ({ ...props }) => url => {
      return url == location.href ? true : false
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getDatas ? this.props.getDatas() : ''

      this.props.getMe()
    },
  })
)

export default enhance(Menus)

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
  background: #533c97;
  padding-top: 70px;
  padding-bottom: 32px;
  padding-left: 20px;
`
const MenuItem = styled.a`
  display: block;
  font-family: NanumSquareRoundWeb;
  font-size: 15px;
  color: #ffffff;
  margin-top: 32px;
  :hover {
    color: #0eb780;
    font-weight: 700;
  }
`
const MenuFoldButton = styled.span`
  cursor: pointer;
  display: inline-block;
  transform: rotate(180deg);
  height: 15px;
  right: 16px;
  font-size: 8px;
  position: absolute;
  line-height: 15px;
  ${props =>
    props.showing &&
    css`
      transform: initial;
    `}
`
const SubMenuItemWrap = styled.div`
  background-color: #0eb780;
  margin-left: -20px;
  margin-top: 16px;
  padding-left: 32px;
`

const SubMenuItem = styled.a`
  height: 45px;
  line-height: 45px;
  font-family: NanumSquareRoundWeb;
  font-size: 13px;
  color: #ffffff;
  display: block;
  :hover {
    color: #533c97;
  }
`

const CartMenuItem = styled.a`
  font-size: 26px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`
const CartCount = styled.div`
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

    top: -4px;
    right: -6px;
    line-height: 14px;
  }
`

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
  position: relative;
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
  // from parent
  me,
  contents,
  current_lang,
  showSub,
  setShowSub,
  shortcodeChild,
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
      <CartMenuItem href={_u(current_lang, '/cart')}>
        <CartCount dangerouslySetInnerHTML={{ __html: shortcodeChild }} />
        <CartIcon className="hellogorilla hellogorilla-icon-cart-61" />
      </CartMenuItem>
      <Menu
        left
        customCrossIcon={<img src={require('./assets/icon-close.svg')} />}
      >
        <MenuWrapper>
          {map(contents, (item, id) => {
            switch (id) {
              case 0: // 헬로고릴라 서브메뉴
                return (
                  <div>
                    <MenuItem
                      key={id}
                      href={item.url}
                      onClick={() => {
                        setShowSub(!showSub)
                      }}
                    >
                      {_t(current_lang, item.title)}

                      <MenuFoldButton
                        className="hellogorilla hellogorilla-arrow-dropdown-selected"
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

          {me ? (
            <MenuItem href="/my-account">
              {_t(current_lang, '마이페이지')}
            </MenuItem>
          ) : (
            <span>
              <MenuItem href={_u(current_lang, '/login')}>
                {_t(current_lang, '로그인')}
              </MenuItem>
              <MenuItem href={_u(current_lang, '/customer-signup')}>
                {_t(current_lang, '회원가입')}
              </MenuItem>
            </span>
          )}
        </MenuWrapper>
      </Menu>
    </Wrap>
  )
}

// Component enhancer
const enhance = compose(withState('showSub', 'setShowSub', false))

export default enhance(MobileView)

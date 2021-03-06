/**
 *
 * UserProfile
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { log, getParameterByName } from 'ruucm-util'

import { Slider } from 'ruucm-blocks/components/Slider'
import { center } from 'ruucm-blocks/tools/mixins'
import { Row, Column } from 'ruucm-blocks/layouts'
import { map } from 'lodash'
import { wem2 } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

import profileDefault from '../../assets/profile-default.jpg'
import coverDefault from '../../assets/cover-default-2.jpg'
import LoadingSpinner from '../../../shared/LoadingSpinner'

// import Page from './Page'
import { Frame, Hover, Animate } from 'ruucm-blocks/animation'
import { _t } from '../../../shared/translate'

const CoverImg = styled.div`
  ${props =>
    props.src &&
    css`
      background: center / cover no-repeat url(${props.src});
      height: 288px;
    `};
`

const Wrap = styled.div`
  /* margin-left: ${wem2(240)};
  margin-right: ${wem2(240)}; */
  max-width: 960px;
  margin: 0 auto;
  ${media.tablet`
    padding: 0 20px;
  `}
`

const User = styled.a``
const UserImage = styled.img`
  position: absolute;
  top: -128px;
  @media all and (max-width: 575px) {
    width: 100%;
    position: relative;
  }
`

const ProfileWrap = styled.div`
  margin-left: 48px;
  margin-top: 48px;
  ${media.tablet`
      margin-left: unset;
      margin-top: -90px;
  `};
`
const ShortDesc = styled.div`
  font-size: 16px;
  color: #918f8f;
  line-height: 1.86;
`

const NameLink = styled.div`
  margin-top: 20px;
  ${media.tablet`
      margin-top: 40px;
  `};
`
const UserName = styled.div`
  font-size: 32px;
  color: #231f20;
  display: inline-block;
  font-weight: 500;
`
const Links = styled.div`
  display: inline-block;
  float: right;
`
const HomePage = styled.a`
  font-size: 24px;
`
const Facebook = styled.a`
  font-size: 24px;
  margin-left: 16px;
`
const Instagram = styled.a`
  font-size: 24px;
  margin-left: 16px;
`

const LongDesc = styled.div`
  margin-top: 26px;
  font-size: 14px;
  line-height: 1.86;
  color: #231f20;
`
const Embed = styled.iframe`
  width: 100%;
  min-height: 26vw;
`

const Video = styled.video`
  width: 100%;
  margin-top: 26px;
`
const VideoSource = styled.source``

const Portfolios = styled.div`
  margin-top: 96px;
`
const Label = styled.div`
  font-size: 16px;
  color: #533c97;
  font-weight: 600;
`
const NoProductLabel = styled.div`
  margin-top: 20px;
`

const SliderWrap = styled.div`
  margin-top: 24px;
  .lcotMS {
    background-color: pink;
  }
  .ckSEUD {
    display: none;
  }
`

const PortfoliItemWrap = styled.div`
  background-color: #f4f3f3;
  width: 624px;
  height: 320px;
  position: relative;
`
const PortfoliItem = styled.div`
  /* width: 456px;
  height: 320px; */
  position: relative;
`
const PortfolioImage = styled.img`
  width: 456px;
  height: 320px;
  object-fit: cover;
  margin: 0 auto;
`
const PortfolioTitle = styled.div`
  width: 100%;
  text-align: center;

  font-family: NanumSquareRoundWeb;
  font-size: 14px;
  height: 14px;
  color: #231f20;
  margin-top: 20px;
`

const Products = styled.div`
  margin-top: ${wem2(96)};
`

const Item = styled.a`
  margin-top: 24px;
  margin-bottom: 24px;
`
const ItemImage = styled.img`
  margin-top: ${wem2(24)};
  width: ${wem2(288)};
  height: ${wem2(288)};
  object-fit: cover;
`
const ItemTitle = styled.div`
  margin-top: ${wem2(20)};
  font-size: ${wem2(14)};
  color: #231f20;
`

const Dot = styled.div`
  display: none;
`
const ArrowWrapper = styled.span`
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;

  &:before {
    color: #e9e8e8;
  }
  &:hover {
    &:before {
      color: #805de9;
    }
  }


  ${props =>
    props.next &&
    css`
      right: 24px;
    `}
  ${props =>
    props.prev &&
    css`
      left: 24px;
      transform: translateY(-50%) rotate(180deg);
    `}
  ${media.phone`
    display: none;
  `};
`

const ArrowNext = props => {
  return (
    <ArrowWrapper
      next
      className="hellogorilla hellogorilla-arrow-right-selected"
      onClick={props.onClick}
    />
  )
}

const ArrowPrev = props => {
  return (
    <ArrowWrapper
      prev
      className="hellogorilla hellogorilla-arrow-right-selected"
      onClick={props.onClick}
    />
  )
}

const MobileSliderDot = dots => {
  return <Dot>{dots}</Dot>
}

const getFileName = source => {
  var regex = /[^/]*$/g
  var found = source.match(regex)

  return found[0].slice(0, -4)
}

// component
const UserProfile = ({ current_lang, IsEmbed, ...props }) => {
  let user = props[props.wpType + '_' + props.sort + '_wpData']
  // log('user', user)

  log('current_lang(UserProfile)', current_lang)

  return user ? (
    <div>
      <CoverImg
        src={user.meta.img_cover ? user.meta.img_cover : coverDefault}
      />
      <Wrap>
        <Row>
          <Column col="4">
            <UserImage
              src={
                user.meta.img_profile ? user.meta.img_profile : profileDefault
              }
            />
          </Column>

          <Column col="8">
            <ProfileWrap>
              <ShortDesc>
                {current_lang == 'en'
                  ? user.meta.short_desc_en
                  : user.meta.short_desc}
              </ShortDesc>

              <NameLink>
                <UserName>
                  {current_lang == 'en' ? user.user_name : user.name}
                </UserName>
                <Links>
                  <HomePage
                    href={user.meta.homepage ? user.meta.homepage : '#'}
                    target={user.meta.homepage ? '_blank' : ''}
                  >
                    <span className="hellogorilla hellogorilla-icon-website-hover-32" />
                  </HomePage>
                  <Facebook
                    href={user.meta.facebook ? user.meta.facebook : '#'}
                    target={user.meta.facebook ? '_blank' : ''}
                  >
                    {/* <span className="hellogorilla hellogorilla-icon-facebook-24">
                          <span className="path1" />
                          <span className="path2" />
                        </span> */}
                    <span className="hellogorilla hellogorilla-icon-facebook-hover-24">
                      <span className="path1" />
                      <span className="path2" />
                    </span>
                  </Facebook>
                  <Instagram
                    href={user.meta.instagram ? user.meta.instagram : '#'}
                    target={user.meta.instagram ? '_blank' : ''}
                  >
                    <span className="hellogorilla hellogorilla-icon-instagram-hover-24" />
                  </Instagram>
                </Links>
              </NameLink>

              <LongDesc>
                {current_lang == 'en'
                  ? user.meta.long_desc_en
                  : user.meta.long_desc}
              </LongDesc>

              {user.meta.artist_video ? (
                IsEmbed(user.meta.artist_video) ? (
                  <Embed
                    src={
                      'https://www.youtube.com/embed/' + user.meta.artist_video
                    }
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                ) : (
                  <Video controls>
                    <VideoSource src={user.meta.artist_video} />
                  </Video>
                )
              ) : (
                ''
              )}

              <Portfolios>
                <Label>{_t(current_lang, '작품 소개')}</Label>

                {user.meta.portfolio_01 ? (
                  <SliderWrap>
                    <Slider
                      nextArrow={<ArrowNext />}
                      prevArrow={<ArrowPrev />}
                      appendDots={MobileSliderDot}
                      autoplaySpeed={4000}
                    >
                      <PortfoliItemWrap>
                        <PortfoliItem>
                          <PortfolioImage src={user.meta.portfolio_01} />

                          <PortfolioTitle>
                            {getFileName(user.meta.portfolio_01)}
                          </PortfolioTitle>
                        </PortfoliItem>
                      </PortfoliItemWrap>

                      {user.meta.portfolio_02 ? (
                        <PortfoliItemWrap>
                          <PortfoliItem>
                            <PortfolioImage src={user.meta.portfolio_02} />

                            <PortfolioTitle>
                              {getFileName(user.meta.portfolio_02)}
                            </PortfolioTitle>
                          </PortfoliItem>
                        </PortfoliItemWrap>
                      ) : (
                        ''
                      )}
                      {user.meta.portfolio_03 ? (
                        <PortfoliItemWrap>
                          <PortfoliItem>
                            <PortfolioImage src={user.meta.portfolio_03} />
                            <PortfolioTitle>
                              {getFileName(user.meta.portfolio_03)}
                            </PortfolioTitle>
                          </PortfoliItem>
                        </PortfoliItemWrap>
                      ) : (
                        ''
                      )}

                      {user.meta.portfolio_04 ? (
                        <PortfoliItemWrap>
                          <PortfoliItem>
                            <PortfolioImage src={user.meta.portfolio_04} />
                            <PortfolioTitle>
                              {getFileName(user.meta.portfolio_04)}
                            </PortfolioTitle>
                          </PortfoliItem>
                        </PortfoliItemWrap>
                      ) : (
                        ''
                      )}

                      {user.meta.portfolio_05 ? (
                        <PortfoliItemWrap>
                          <PortfoliItem>
                            <PortfolioImage src={user.meta.portfolio_05} />
                            <PortfolioTitle>
                              {getFileName(user.meta.portfolio_05)}
                            </PortfolioTitle>
                          </PortfoliItem>
                        </PortfoliItemWrap>
                      ) : (
                        ''
                      )}
                    </Slider>
                  </SliderWrap>
                ) : (
                  '관련 작품이 없습니다'
                )}
              </Portfolios>

              <Products>
                <Label>{_t(current_lang, '관련 상품')}</Label>
                {user.user_products.length > 0 ? (
                  <Row>
                    {map(user.user_products, (item, id) => (
                      <Column col="6">
                        <Item key={id} href={'/?p=' + item.ID}>
                          <ItemImage src={item.image} />
                          <ItemTitle>{item.post_title}</ItemTitle>
                        </Item>
                      </Column>
                    ))}
                  </Row>
                ) : (
                  <NoProductLabel>관련상품이 없습니다.</NoProductLabel>
                )}
              </Products>
            </ProfileWrap>
          </Column>
        </Row>
      </Wrap>
    </div>
  ) : (
    <LoadingSpinner />
  )
}

// Component enhancer
const enhance = compose(
  withHandlers({
    IsEmbed: props => video_url => {
      var res = true
      var pathArray = video_url.split('/')
      // var protocol = pathArray[0]
      var host = ''

      if (pathArray.length > 0) host = pathArray[2]
      if (host == location.host) res = false

      return res
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getPosts
        ? this.props.getDatas({ userId: getParameterByName('id') })
        : void 0 // don't run in builder
    },
  })
)

export default enhance(UserProfile)

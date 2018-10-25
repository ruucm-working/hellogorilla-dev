/**
 *
 * UserProfile
 *
 */

import React from "react";
import { compose, lifecycle } from "recompose";
import styled, { css } from "styled-components";
import { log, getParameterByName } from "ruucm-util";

import { Slider } from "ruucm-blocks/components/Slider";
import { center } from "ruucm-blocks/tools/mixins";
import { Row, Column } from "ruucm-blocks/layouts";
import { map } from "lodash";
import { wem2 } from "ruucm-blocks/tools/mixins";

import profileDefault from "../../assets/profile-default.jpg";
import coverDefault from "../../assets/cover-default.jpg";

// import Page from './Page'
import { Frame, Hover, Animate } from "ruucm-blocks/animation";

const CoverImg = styled.div`
  ${props =>
    props.src &&
    css`
      background: center / cover no-repeat url(${props.src});
      height: 288px;
    `};
`;

const Wrap = styled.div`
  margin-left: ${wem2(240)};
  margin-right: ${wem2(240)};
`;

const User = styled.a``;
const UserImage = styled.img`
  position: absolute;
  top: -128px;
`;

const ProfileWrap = styled.div`
  margin-left: 48px;
  margin-top: 48px;
`;
const ShortDesc = styled.div`
  font-size: 16px;
  color: #918f8f;
`;

const NameLink = styled.div`
  margin-top: 20px;
`;
const UserName = styled.div`
  font-size: 32px;
  color: #231f20;
  display: inline-block;
  font-weight: 500;
`;
const Links = styled.div`
  display: inline-block;
  float: right;
`;
const HomePage = styled.a`
  font-size: 24px;
`;
const Facebook = styled.a`
  font-size: 24px;
  margin-left: 16px;
`;
const Instagram = styled.a`
  font-size: 24px;
  margin-left: 16px;
`;

const LongDesc = styled.div`
  margin-top: 26px;
  font-size: 14px;
  line-height: 1.86;
  color: #231f20;
`;

const Video = styled.video`
  width: 100%;
  margin-top: 26px;
`;
const VideoSource = styled.source``;

const Portfolios = styled.div`
  margin-top: 96px;
`;
const Label = styled.div`
  font-size: 16px;
  color: #533c97;
  font-weight: 600;
`;
const SliderWrap = styled.div`
  margin-top: 24px;
  .lcotMS {
    background-color: pink;
  }
  .ckSEUD {
    display: none;
  }
`;

const PortfoliItemWrap = styled.div`
  background-color: #f4f3f3;
  width: 624px;
  height: 320px;
  position: relative;
`;
const PortfoliItem = styled.div`
  /* width: 456px;
  height: 320px; */
`;
const PortfolioImage = styled.img`
  width: 456px;
  height: 320px;
  object-fit: cover;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const PortfolioTitle = styled.div``;

const Products = styled.div`
  margin-top: 96px;
`;

const Item = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;
const ItemImage = styled.img`
  width: ${wem2(288)};
  height: ${wem2(288)};
  object-fit: cover;
`;
const ItemTitle = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #231f20;
`;

const UserProfile = props => {
  let user = props[props.wpType + "_" + props.sort + "_wpData"];
  // log('user', user)

  return (
    <div>
      {user ? (
        <div>
          <CoverImg
            src={user.meta.img_cover ? user.meta.img_cover : coverDefault}
          />
          <Wrap>
            <Row>
              <Column col="4">
                <UserImage
                  src={
                    user.meta.img_profile
                      ? user.meta.img_profile
                      : profileDefault
                  }
                />
              </Column>

              <Column col="8">
                <ProfileWrap>
                  <ShortDesc>{user.meta.short_desc}</ShortDesc>

                  <NameLink>
                    <UserName>{user.name}</UserName>
                    <Links>
                      <HomePage href={user.meta.homepage} target="_blank">
                        <span className="hellogorilla hellogorilla-icon-website-hover-32" />
                      </HomePage>
                      <Facebook href={user.meta.facebook} target="_blank">
                        {/* <span className="hellogorilla hellogorilla-icon-facebook-24">
                          <span className="path1" />
                          <span className="path2" />
                        </span> */}
                        <span className="hellogorilla hellogorilla-icon-facebook-hover-24">
                          <span className="path1" />
                          <span className="path2" />
                        </span>
                      </Facebook>
                      <Instagram href={user.meta.instagram} target="_blank">
                        <span className="hellogorilla hellogorilla-icon-instagram-hover-24" />
                      </Instagram>
                    </Links>
                  </NameLink>

                  <LongDesc>{user.meta.long_desc}</LongDesc>

                  <Video controls>
                    <VideoSource src={user.meta.artist_video} />
                  </Video>

                  <Portfolios>
                    <Label>작품 소개</Label>
                    <SliderWrap>
                      <Slider>
                        <PortfoliItemWrap>
                          <PortfoliItem>
                            <PortfolioImage src={user.meta.portfolio_01} />
                          </PortfoliItem>
                        </PortfoliItemWrap>

                        {user.meta.portfolio_02 ? (
                          <PortfoliItemWrap>
                            <PortfoliItem>
                              <PortfolioImage src={user.meta.portfolio_02} />
                            </PortfoliItem>
                          </PortfoliItemWrap>
                        ) : (
                          ""
                        )}
                        {user.meta.portfolio_03 ? (
                          <PortfoliItemWrap>
                            <PortfoliItem>
                              <PortfolioImage src={user.meta.portfolio_03} />
                            </PortfoliItem>
                          </PortfoliItemWrap>
                        ) : (
                          ""
                        )}
                      </Slider>
                    </SliderWrap>
                  </Portfolios>

                  <Products>
                    <Label>관련 상품</Label>
                    <Row>
                      {map(user.user_products, (item, id) => (
                        <Column col="6">
                          <Item key={id}>
                            <ItemImage src={item.image} />
                            <ItemTitle>{item.post_title}</ItemTitle>
                          </Item>
                        </Column>
                      ))}
                    </Row>
                  </Products>
                </ProfileWrap>
              </Column>
            </Row>
          </Wrap>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.getPosts
        ? this.props.getDatas({ userId: getParameterByName("id") })
        : void 0; // don't run in builder
    }
  })
);

export default enhance(UserProfile);

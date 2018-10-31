/**
 *
 * Contents
 *
 */

import React from "react";
import { compose, lifecycle } from "recompose";
import { map } from "lodash";
import styled from "styled-components";
import { Center } from "ruucm-blocks/css-patterns/centering";
import { Row, Column } from "ruucm-blocks/layouts";
import media from "ruucm-blocks/tools/media";
import { wem, wem2 } from "ruucm-blocks/tools/mixins";
import { log } from "ruucm-util";
import profileDefault from "../../assets/profile-default.jpg";
import bannerImg from "../../assets/banner.png";

const Wrapper = styled.div``;

const Search = styled.div`
  background: center / cover no-repeat url(${bannerImg});
  height: 288px;
  position: relative;
`;
const SearchTitle = styled.div`
  font-size: 28px;
  text-align: center;
  color: #533c97;
  padding-top: 90px;
`;
const SearchBar = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const SearchInput = styled.input`
  width: ${wem2(409)};
  height: ${wem2(48)};
  margin-top: 32px;
  display: inline-block;
`;
const SearchBtn = styled.div`
  width: ${wem2(48)};
  height: ${wem2(48)};
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  background-color: #805de9;
  display: inline-block;
  vertical-align: middle;
  position: relative;
`;
const Icon = styled.div`
  font-size: ${wem2(24)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ArtistWrap = styled.div`
  margin-left: ${wem2(240)};
  margin-right: ${wem2(240)};
  margin-top: ${wem2(128)};
`;
const StyledColumn = styled(Column)`
  &:nth-of-type(4n) {
    ${Box} {
      margin-right: 0;
      ${media.tablet`
        margin-right: 37.5px;
      `};
    }
  }
`;
const Box = styled.a`
  border: solid 1px #707070;
  display: block;
  margin-right: ${wem(20)};
  margin-bottom: ${wem(60)};
  text-decoration: none;
  ${media.tablet`
    margin-left: 37.5px;
    margin-right: 37.5px;
    margin-bottom: 20px;
  `};
`;

const UserWrap = styled.div`
  position: relative;
  min-height: ${wem2(300)};
`;

const User = styled.a`
  margin-right: ${wem2(28)};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const UserImageOverlay = styled.div`
  width: 204px;
  height: 232px;
  opacity: 0.5;
  background-color: #231f20;
`;
const UserImage = styled.img`
  width: ${wem2(204)};
  height: ${wem2(232)};
  object-fit: cover;
  position: relative;
`;
const Overlay = styled.div`
  width: ${wem2(204)};
  height: ${wem2(232)};
  opacity: 0.5;
  background-color: #231f20;
  position: absolute;
  top: 0;
  :hover {
    background-color: rgba(128, 92, 232, 0.5);
  }
`;

const UserInfo = styled.div`
  height: 100%;
  width: 100%;
  padding-top: ${wem2(94)};
  color: white;
  :hover {
    opacity: 0;
  }
`;
const UserName = styled.div`
  font-size: ${wem2(20)};
  text-align: center;
`;
const UserProducts = styled.div`
  margin-top: ${wem2(10)};
  font-size: ${wem2(14)};
  text-align: center;
`;

const Contents = ({ getDatas, ...props }) => {
  let contents = props[props.wpType + "_" + props.sort + "_wpData"];
  return (
    <div>
      <Wrapper>
        <Search>
          <SearchTitle>헬로고릴라 아티스트를 소개합니다</SearchTitle>
          <SearchBar>
            <SearchInput
              type="text"
              onChange={e => {
                log("e.target.value", e.target.value);
                getDatas({
                  role: "editor",
                  search: e.target.value
                });
              }}
            />
            <SearchBtn>
              <Icon className="hellogorilla hellogorilla-icon-search-24" />
            </SearchBtn>
          </SearchBar>
        </Search>

        <ArtistWrap>
          <Row>
            {map(contents, (item, id) => (
              <StyledColumn col="3" key={id}>
                <UserWrap>
                  <User href={"/user-profile/?id=" + item.id}>
                    <UserImage
                      src={
                        item.meta.img_profile
                          ? item.meta.img_profile
                          : profileDefault
                      }
                    />

                    <Overlay>
                      <UserInfo>
                        <UserName>{item.name}</UserName>

                        <UserProducts>
                          {item.user_products[0]
                            ? item.user_products[0].post_title
                            : ""}

                          {item.user_products[1]
                            ? " 외 " + (item.user_products.length - 1) + "점"
                            : ""}
                        </UserProducts>
                      </UserInfo>
                    </Overlay>
                  </User>
                </UserWrap>
              </StyledColumn>
            ))}
          </Row>
        </ArtistWrap>
      </Wrapper>
    </div>
  );
};

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      let options = {
        role: "editor"
      };
      this.props.getDatas(options);
    }
  })
);

export default enhance(Contents);

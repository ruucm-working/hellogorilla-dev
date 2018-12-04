/**
 *
 * Page86
 *
 */

import React, { Component } from "react";

import {
  MainNav,
  Logo,
  LogoImage,
  LogoText,
  Menu,
  MenuItem
} from "modules/MainNav";
import { Center } from "modules/Centering";
import { Hover, Frame, OnTap, Animate, Wrapper } from "modules/Animation";
import { EmptySpace } from "modules/Layout";
import { Post, WP } from "modules/DataContainer";
import { Carousel, CarouselItem } from "modules/DataPresenter";
import { SignUp, Title, Desc, Button, Form, InputField } from "modules/SignUp";
import { Footer, Text, Deco } from "modules/Footer";

class Page86 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <MainNav
          style={{
            backgroundColor: "#525ef6",
            position: "relative",
            paddingLeft: "25px"
          }}
        >
          <Logo style={{ display: "inline-block" }}>
            <LogoImage style={{ fontSize: "60px", verticalAlign: "middle" }} />
            <LogoText
              style={{
                fontSize: "50px",
                color: "#ffffff",
                fontFamily: "NanumSquareWeb",
                fontWeight: 100,
                verticalAlign: "middle",
                lineHeight: "116px",
                marginLeft: "18px"
              }}
            >
              <span>하버 collecting</span>
            </LogoText>
          </Logo>
          <Center axis="y" style={{ position: "absolute", right: "25px" }}>
            <Menu style={{ fontFamily: "Montserrat", position: "relative" }}>
              <MenuItem
                style={{ display: "inline-block", marginRight: "40px" }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  <Hover
                    style={{ color: "#c4c4c4" }}
                    color="#ffffff"
                    transition={{ target: "color", time: 320 }}
                  >
                    <span
                      style={{
                        fontWeight: 200,
                        fontStyle: "italic",
                        fontSize: "60px"
                      }}
                    >
                      mag
                    </span>
                  </Hover>
                </a>
              </MenuItem>
              <MenuItem style={{ display: "inline-block" }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Hover
                    style={{ color: "#c4c4c4" }}
                    color="#ffffff"
                    transition={{ target: "color", time: 320 }}
                  >
                    <span
                      style={{
                        fontWeight: 200,
                        fontStyle: "italic",
                        fontSize: "60px"
                      }}
                    >
                      school
                    </span>
                  </Hover>
                </a>
              </MenuItem>
            </Menu>
          </Center>
        </MainNav>

        <EmptySpace height="285" />

        <Post postType="harbor_collecting">
          <Carousel title="collecting" viewAllLink="/collecting" align="right">
            <CarouselItem />
          </Carousel>
        </Post>

        <EmptySpace height={252} />

        <WP wpType="col_harbor_">
          <Frame
            style={{
              backgroundColor: "#525ef6",
              width: "104.3%",
              marginLeft: "-16.5vw",
              minHeight: "34.76vw",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <SignUp>
              <Title title="Follow" style={{ zIndex: 3 }} />
              <Desc
                style={{
                  right: "0px",
                  fontSize: "60px",
                  fontFamily: "NanumMyeongjoWeb",
                  color: "#eae5e3"
                }}
              >
                <span>1주일에 한번</span>
              </Desc>
              <EmptySpace height={65} />
              <Desc
                style={{
                  right: "0px",
                  fontSize: "60px",
                  fontFamily: "NanumMyeongjoWeb",
                  color: "#eae5e3",
                  lineHeight: "120%"
                }}
              >
                <span>개발자, 디자이너의</span>
              </Desc>
              <Desc
                style={{
                  right: "0px",
                  fontSize: "60px",
                  fontFamily: "NanumMyeongjoWeb",
                  color: "#eae5e3",
                  lineHeight: "120%"
                }}
              >
                <span>라이프 스타일과 IT 트렌드 팔로업</span>
              </Desc>
              <OnTap
                style={{
                  position: "absolute",
                  top: "106px",
                  right: "88px",
                  zIndex: 3
                }}
              >
                <Animate to={{ opacity: 0 }} options={{ time: 1, delay: 1 }}>
                  <Button
                    style={{
                      border: "none",
                      cursor: "pointer",
                      fontSize: "40px",
                      fontFamily: "Montserrat",
                      paddingLeft: "55px",
                      paddingTop: "15px",
                      paddingRight: "55px",
                      paddingBottom: "15px",
                      borderRadius: "50px",
                      fontWeight: 800,
                      color: "#525ef6",
                      outline: "none"
                    }}
                  >
                    <span>Sign Up</span>
                  </Button>
                </Animate>
              </OnTap>
              <Animate
                style={{
                  position: "absolute",
                  bottom: "74px",
                  right: "88px",
                  zIndex: 1
                }}
                options={{ curve: "Elastic.easeIn.config(1, 0.8)", time: 1.5 }}
                to={{
                  x: "-291",
                  y: "-185",
                  z: 200,
                  transformOrigin: "center center"
                }}
              >
                <Animate
                  style={{
                    width: "23px",
                    height: "23px",
                    backgroundColor: "#ffffff",
                    borderRadius: "30px"
                  }}
                  options={{ time: 1.5 }}
                  to={{ scale: 53 }}
                />
              </Animate>
              <Form>
                <Wrapper
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)"
                  }}
                >
                  <Animate
                    options={{ time: 1, delay: 1.5 }}
                    style={{
                      opacity: 1,
                      maxWidth: "300px",
                      margin: "0 auto",
                      visibility: "hidden"
                    }}
                    from={{ opacity: 0, x: "-300" }}
                  >
                    <InputField placeholder="EMAIL" type="email" name="email" />
                  </Animate>
                  <Animate
                    options={{ time: 1, delay: 2 }}
                    style={{
                      opacity: 1,
                      maxWidth: "300px",
                      margin: "0 auto",
                      visibility: "hidden"
                    }}
                    from={{ x: "-300", opacity: 0 }}
                  >
                    <InputField
                      placeholder="PASSWORD"
                      type="password"
                      name="password"
                    />
                  </Animate>
                  <Animate
                    options={{ time: 1, delay: 2.5 }}
                    style={{
                      opacity: 1,
                      maxWidth: "300px",
                      margin: "0 auto",
                      visibility: "hidden"
                    }}
                    from={{ x: "-300", opacity: 0 }}
                  >
                    <InputField
                      placeholder="NAME"
                      type="text"
                      name="username"
                    />
                  </Animate>
                </Wrapper>
                <Animate
                  options={{ time: 1, delay: 2 }}
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    right: "88px",
                    bottom: "100px",
                    visibility: "hidden"
                  }}
                  from={{ y: "-200", opacity: 0 }}
                >
                  <Button
                    style={{
                      border: "none",
                      cursor: "pointer",
                      fontSize: "40px",
                      fontFamily: "Montserrat",
                      paddingLeft: "55px",
                      paddingTop: "15px",
                      paddingRight: "55px",
                      paddingBottom: "15px",
                      borderRadius: "50px",
                      fontWeight: 800,
                      color: "#ffffff",
                      backgroundColor: "#525ef6"
                    }}
                  >
                    <span>Sign Up</span>
                  </Button>
                </Animate>
              </Form>
            </SignUp>
          </Frame>
        </WP>

        <EmptySpace height={411} />

        <Footer
          style={{
            textAlign: "right",
            fontFamily: "NanumSquareWeb",
            color: "#38393C",
            fontSize: "20px",
            fontWeight: 300,
            paddingRight: "70px",
            position: "relative",
            paddingBottom: "31px"
          }}
        >
          <Text><span>하버 . 서울시 마포구 독막로19길 12 B1 .</span></Text>
          <Text style={{ marginTop: "5px" }}>
            <span>사업자 등록번호: 559-63-00040 .</span>
          </Text>
          <Text style={{ marginTop: "5px" }}>
            <span>contact@harbor.school .</span>
          </Text>
          <Text style={{ marginTop: "37px" }}>
            <span>Copyright © 2018 Harbor. All rights reserved .</span>
          </Text>
          <Deco
            style={{
              height: "124px",
              width: "124px",
              backgroundColor: "#525ef6",
              transform: "rotate(45deg)",
              transformOrigin: "bottom left",
              position: "absolute",
              right: "-36px",
              bottom: "0px"
            }}
          />
        </Footer>

      </div>
    ); // eslint-disable-line
  }
}

export default Page86;

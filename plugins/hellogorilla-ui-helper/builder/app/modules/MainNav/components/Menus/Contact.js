import React from "react";
import styled from "styled-components";

import { Center } from "ruucm-blocks/css-patterns/centering";
import { centerIconA } from "ruucm-blocks/tools/mixins";

const Logo = styled.div`
  margin-bottom: 18.3px;
  .beerspick-beerspick_logo_about {
    font-size: 80px;
    color: black;
  }
`;
const LogoTitle = styled.h1`
  font-weight: 700;
  color: #000000;
  margin-bottom: -40px;
  font-size: 32px;
  line-height: 1.16;
`;
const LogoDesc = styled.p`
  font-family: HelveticaCnWeb;
  font-weight: 500;
  color: #000000;
  font-style: italic;
  margin-top: -30px;
  font-size: 20px;
  line-height: 1.4;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  white-space: nowrap;
  ${centerIconA};
`;
const ContactInfoIcon = styled.span`
  font-size: 18px;
  margin-right: 15px;
  &:before {
    width: 30px;
    display: inline-block;
    text-align: center;
  }
`;
const ContactInfoDesc = styled.a`
  display: inline-block;
  color: #000000;
  font-size: 12px;
  line-height: 2.5;
`;

const Contact = props => {
  return (
    <Center
      axis="x"
      style={{
        bottom: "0"
      }}
    >
      <Logo>
        <LogoTitle>비어스픽</LogoTitle>
        <span className="beerspick beerspick-beerspick_logo_about" />
        <LogoDesc>Beer's Pick</LogoDesc>
      </Logo>
      <ContactInfo>
        <ContactInfoIcon className="beerspick beerspick-envelope" />
        <ContactInfoDesc>contact@beerspick.com</ContactInfoDesc>
      </ContactInfo>
      <ContactInfo>
        <ContactInfoIcon className="beerspick beerspick-tel" />
        <ContactInfoDesc>010-9330-4619</ContactInfoDesc>
      </ContactInfo>
      <ContactInfo>
        <ContactInfoIcon className="beerspick beerspick-location-arrow" />
        <ContactInfoDesc>서울특별시 서대문구 연희동 218-15 2층</ContactInfoDesc>
      </ContactInfo>
    </Center>
  );
};

export default Contact;

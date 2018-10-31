import React from "react";

import { compose, withState, lifecycle, withHandlers } from "recompose";
import styled, { css } from "styled-components";
import { wem, wem2 } from "ruucm-blocks/tools/mixins";
import { Field, reduxForm } from "redux-form";
import { log } from "ruucm-util";
import EmptySpace from "ruucm-blocks/layouts/EmptySpace";

const Wrap = styled.div`
  margin-left: ${wem2(480)};
  margin-right: ${wem2(480)};
`;

const Email = styled.div`
  font-size: ${wem2(28)};
  text-align: center;
  color: #231f20;
`;
const LoginBox = styled.div`
  border-radius: 2px;
  background-color: #533c97;
  width: ${wem2(480)};
  height: ${wem2(52)};
  font-size: ${wem2(14)};
  margin-top: ${wem2(48)};
  color: #ffffff;
  position: relative;
  cursor: pointer;
`;
const Login = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FindID_Login = props => {
  return (
    <div>
      <EmptySpace height="144" />
      <Wrap>
        <Email>gorilla41@gmail.com</Email>

        <LoginBox>
          <Login>로그인</Login>
        </LoginBox>
      </Wrap>
    </div>
  );
};

export default FindID_Login;

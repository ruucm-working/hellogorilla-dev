import React from "react";

import { compose, withState, lifecycle, withHandlers } from "recompose";
import styled, { css } from "styled-components";
import { wem, wem2 } from "ruucm-blocks/tools/mixins";

import { Field, reduxForm } from "redux-form";
import { log } from "ruucm-util";
import validate from "./validate";
import LoadingSpinner from "../../../shared/LoadingSpinner";

const Wrap = styled.div`
  margin-top: ${wem2(96)};
  margin-left: ${wem2(480)};
  margin-right: ${wem2(480)};
`;
const Title = styled.h1`
  text-align: center;
  font-size: ${wem2(24)};
  color: #231f20;
`;

const ErrorWrapper = styled.div`
  color: #ee4230;
`;
const Info = styled.div`
  font-family: NanumBarunGothicWeb;
  font-size: 18px;
  line-height: 0.89;
  color: #050505;
  margin-bottom: 35px;
  font-weight: 700;
`;
const UserEmail = styled.div``;
const HelloText = styled.div``;

const CommonButtonStyle = styled.button`
  font-family: NanumBarunGothicWeb;
  font-size: 18px;
  line-height: 2.7;
  text-align: center;
  color: #ffffff;

  height: 50px;
  border-radius: 24px;
  background-color: #0054a6;
  border: none;
  cursor: pointer;
`;

const LoginButtons = styled.div`
  margin: 10px 0;
`;

const LoginButton = styled(CommonButtonStyle)`
  width: 100px;
  margin-right: 10px;
`;

const SignupButton = styled(CommonButtonStyle)`
  width: 100px;
  ${props =>
    props.direactLogin &&
    css`
      width: 250px;
    `};
`;

const EmailField = styled.input`
  margin-top: ${wem2(40)};
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #231f20;
  color: #231f20;
  padding-left: ${wem2(20)};
  font-size: ${wem2(14)};
`;
const PasswordField = styled.input`
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #b7b5b6;
  margin-top: ${wem2(16)};
  color: #b7b5b6;
  padding-left: ${wem2(20)};
  font-size: ${wem2(14)};
`;

const emailField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div>
    <EmailField {...input} placeholder={placeholder} type={type} />
  </div>
);
const passwordField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div>
    <PasswordField {...input} placeholder={placeholder} type={type} />
  </div>
);

const LoginForm = ({
  // from parent
  label,
  userInfo,
  setUserInfo,
  direactLogin,
  back,

  // redux-form
  history,
  error,
  pristine,
  reset,
  handleSubmit,
  submitting,

  // woocommerce
  wpLogin,
  ...props
}) => {
  return (
    <Wrap>
      {/* <Info>{label}</Info> */}
      <Title>로그인</Title>
      <form
        onSubmit={handleSubmit(values => {
          if (validate(values))
            return wpLogin(values, res => {
              alert("로그인 성공");
              window.location = "/";
            });
        })}
      >
        <div className="input-fields">
          <Field
            name="username"
            type="text"
            placeholder="ddoooodd@gmail.com"
            component={emailField}
          />
          <Field
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            component={passwordField}
          />
        </div>

        <LoginButtons>
          {error && <ErrorWrapper>{error}</ErrorWrapper>}

          <LoginButton type="submit" disabled={submitting}>
            로그인
          </LoginButton>

          <SignupButton
            type="button"
            onClick={() => back()}
            direactLogin={direactLogin}
          >
            {direactLogin ? "회원 가입하기" : "뒤로"}
          </SignupButton>
        </LoginButtons>
      </form>
    </Wrap>
  );
};

// Component enhancer
const enhance = compose();
// withState('submitSuccessed', 'setsubmitSuccess', '')
export default enhance(
  reduxForm({
    form: "LOGIN_FORM"
  })(LoginForm)
);

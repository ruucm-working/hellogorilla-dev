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

const Title = styled.div`
  font-size: ${wem2(24)};
  color: #231f20;
  text-align: center;
  font-weight: 500;
`;

const RenderFieldLabel = styled.div`
  display: block;
  font-size: ${wem2(11)};
  color: #231f20;
  margin-top: ${wem2(19)};
  ${props =>
    props.first &&
    css`
      margin-top: ${wem2(48)};
    `};
`;
const WriteField = styled.input`
  margin-top: ${wem2(10)};
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #231f20;
  font-size: ${wem2(14)};
  padding-left: ${wem2(20)};
  color: #b7b5b6;
  font-weight: 100;
`;

const Alarm = styled.div`
  margin-top: ${wem2(12)};
  margin-left: ${wem2(20)};
  font-size: ${wem2(11)};
  color: #0eb780;
`;

const CompleteBox = styled.div`
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  background-color: #533c97;
  margin-top: ${wem2(48)};
  position: relative;
  cursor: pointer;
`;
const Complete = styled.div`
  font-size: ${wem2(14)};
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div>
    <RenderFieldLabel first>{label}</RenderFieldLabel>
    <WriteField input {...input} placeholder={placeholder} type={type} />
  </div>
);
const passwordmatchField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div>
    <RenderFieldLabel>{label}</RenderFieldLabel>
    <WriteField input {...input} placeholder={placeholder} type={type} />
  </div>
);

const ResetPassword = props => {
  return (
    <div>
      <EmptySpace height="96" />
      <Wrap>
        <Title>비밀번호 재설정</Title>

        <Field
          name="password"
          type="password"
          label="새로운 비밀번호"
          placeholder="8-20자 이내로 입력해주세요."
          component={renderField}
        />
        <Alarm>정확한 비밀번호를 입력해주세요.</Alarm>

        <Field
          name="password_match"
          type="password"
          label="비밀번호 재확인"
          placeholder="***********"
          component={passwordmatchField}
        />

        <CompleteBox>
          <Complete>완료</Complete>
        </CompleteBox>
      </Wrap>
    </div>
  );
};

export default ResetPassword;

import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import validate from './validate'

const Wrap = styled.div`
  margin-top: ${wem2(96)};
  margin-left: ${wem2(480)};
  margin-right: ${wem2(480)};
`

// const InfoBox = styled.div`
//   background: rebeccapurple;
//   position: fixed;
//   top: 50%;
//   transform: translateY(-50%);
// `;
const CloseBtn = styled.button``

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${wem2(24)};
  color: #231f20;
`

const PromotionDesc = styled.div``

const Form = styled.form`
  padding-top: ${wem2(48)};
`

const RenderFieldLabel = styled.div`
  display: block;
  font-size: ${wem2(11)};
  color: #231f20;
  margin-top: ${wem2(24)};
`
const PasswardmatchField = styled.div`
  display: none;
`

const WriteField = styled.input`
  margin-top: ${wem2(10)};
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #231f20;
  font-size: ${wem2(14)};
  padding-left: ${wem2(20)};
  color: #b7b5b6;
`
const PhoneWriteField = styled.input`
  margin-top: ${wem2(10)};
  width: ${wem2(332)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #231f20;
  font-size: ${wem2(14)};
  padding-left: ${wem2(20)};
  color: #b7b5b6;
  display: inline-block;
  margin-right: ${wem2(10)};
`
const PhoneMatchField = styled.input`
  margin-top: ${wem2(12)};
  width: ${wem2(332)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #231f20;
  font-size: ${wem2(14)};
  padding-left: ${wem2(20)};
  color: #b7b5b6;
  display: inline-block;
  margin-right: ${wem2(10)};
`

const PassButton = styled.div`
  display: inline-block;
  width: ${wem2(136)};
  height: ${wem2(52)};
  border-radius: 2px;
  background-color: #533c97;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
`
const PassText = styled.div`
  white-space: nowrap;
  font-size: ${wem2(14)};
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const RoleFieldLabel = styled.span``
const RadioFieldLabel = styled.span``
const CheckFieldLabel = styled.span``
const CheckFields = styled.div``
const HR = styled.hr``
const SelectAll = styled.input``
const SelectAllLabel = styled.span``

const Agree = styled.div`
  text-align: center;
  font-size: 13px;
  color: #231f20;
  margin-top: 48px;
`

const ErrorWrapper = styled.div`
  color: #ee4230;
`

const Button = styled.button`
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  background-color: #805de9;
  position: relative;
  margin-top: ${wem2(20)};
  cursor: pointer;
`
const Next = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: ${wem2(14)};
`

const Already = styled.div`
  font-size: ${wem2(13)};
  color: #231f20;
  margin-top: ${wem2(96)};
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

// redux-form
const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <RenderFieldLabel>{label}</RenderFieldLabel>
    <WriteField input {...input} placeholder={placeholder} type={type} />
  </div>
)

const passwardmatchField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <PasswardmatchField>{label}</PasswardmatchField>
    <WriteField input {...input} placeholder={placeholder} type={type} />
  </div>
)
const phoneField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <RenderFieldLabel>{label}</RenderFieldLabel>
    <PhoneWriteField input {...input} placeholder={placeholder} type={type} />
    <PassButton>
      <PassText>인증번호 전송</PassText>
    </PassButton>
  </div>
)

const phoneMatchField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    {/* <RenderFieldLabel /> */}
    <PhoneMatchField input {...input} placeholder={placeholder} type={type} />
    <PassButton>
      <PassText>인증번호 확인</PassText>
    </PassButton>
  </div>
)

const loginField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <LoginField {...input} placeholder={placeholder} type={type} />
  </div>
)

const roleField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <RoleFieldLabel>{label}</RoleFieldLabel>
    <input {...input} type={type} />
  </div>
)
const radioField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <RadioFieldLabel>{label}</RadioFieldLabel>
    <input {...input} type={type} />
  </div>
)

const checkField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <CheckFieldLabel>{label}</CheckFieldLabel>
    <input {...input} type={type} />
  </div>
)

// react
const SignUp = ({
  // local
  modalOpen,
  setModalOpen,

  // from parent
  stage,
  setStage,
  setSubmitSuccess,
  signUpRole,
  setSignUpRole,
  signUpInfo,
  setSignUpInfo,

  // redux-form
  history,
  error,
  pristine,
  reset,
  handleSubmit,
  submitting,
  wpSignUp,

  ...props
}) => {
  return (
    <Wrap>
      <Title>회원가입</Title>

      <Form
        onSubmit={handleSubmit(values => {
          log('values', values)
          if (validate(values)) {
            wpSignUp(values, 'customer', res => {
              log('res', res)
              alert('회원가입을 축하 합니다.\n홈으로 이동합니다. ')
              window.location = '/'
            })
          }
        })}
      >
        <div>
          <Field
            name="email"
            type="email"
            label="이메일"
            placeholder="이메일 (email@gmail.com) "
            component={renderField}
          />
          <Field
            name="username"
            type="text"
            label="이름"
            component={renderField}
          />

          <Field
            name="password"
            type="password"
            label="비밀번호"
            placeholder="8-20자 이내로 입력해주세요."
            component={renderField}
          />
          <Field
            name="password_match"
            type="password"
            // label="비밀번호(확인)"
            placeholder="비밀번호 확인을 위해 재입력해주세요."
            component={passwardmatchField}
          />

          <Field
            name="phone"
            type="tel"
            label="휴대폰"
            component={phoneField}
          />

          <Field
            name="phone_match"
            type="tel"
            // label="인증번호를 입력해주세요."
            placeholder="인증번호를 입력해주세요."
            component={phoneMatchField}
          />
        </div>

        <Agree>
          가입 버튼을 누름과 동시에 이용약관에 동의한 것으로 간주합니다.
        </Agree>
        <div>
          {error && <ErrorWrapper>{error}</ErrorWrapper>}

          <Button type="submit" disabled={submitting}>
            <Next>가입하기</Next>
          </Button>
        </div>

        <Already>이미 계정이 있으신가요?</Already>
      </Form>
    </Wrap>
  )
}

// Component enhancer
const enhance = compose(withState('modalOpen', 'setModalOpen', false))
export default enhance(
  reduxForm({
    form: 'HG_SIGNUP_FORM',
  })(SignUp)
)

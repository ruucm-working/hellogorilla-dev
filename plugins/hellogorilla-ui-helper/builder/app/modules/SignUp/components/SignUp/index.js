import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import validate from './validate'
import { _t } from '../../../shared/translate'
import SendCode from '../../../shared/PhoneVerfication/SendCode'
import ConfirmCode from '../../../shared/PhoneVerfication/ConfirmCode'

const Wrap = styled.div`
  /* max-width: 960px;
  margin: 0 auto; */
  margin-top: ${wem2(96)};
  min-height: ${wem2(900)};
`

const Title = styled.h1`
  /* position: absolute; */
  /* left: 50%;
  transform: translateX(-50%); */
  text-align: center;
  font-size: ${wem2(24)};
  color: #231f20;
`

const Form = styled.form`
  padding-top: ${wem2(48)};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const RenderFieldLabel = styled.div`
  display: block;
  font-size: ${wem2(11)};
  color: #231f20;
  margin-top: ${wem2(24)};
`
const PasswordmatchField = styled.div`
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

const Agree = styled.a`
  text-align: center;
  font-size: ${wem2(13)};
  color: #231f20;
  margin-top: 48px;
  display: block;
`

const ErrorWrapper = styled.div`
  font-size: ${wem2(11)};
  margin-top: ${wem2(12)};
  margin-left: ${wem2(20)};
  color: #0eb780;
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

const Already = styled.a`
  font-size: ${wem2(13)};
  color: #231f20;
  margin-top: ${wem2(96)};
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
`

// redux-form
const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <RenderFieldLabel>{label}</RenderFieldLabel>
    <WriteField input {...input} placeholder={placeholder} type={type} />
  </div>
)
const passwordmatchField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <PasswordmatchField>{label}</PasswordmatchField>
    <WriteField input {...input} placeholder={placeholder} type={type} />
  </div>
)

// react
const SignUp = ({
  // local
  modalOpen,
  setModalOpen,
  phoneValue,
  setPhoneValue,
  phoneVerfied,
  setPhoneVerfied,

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

  // wordpress
  current_lang,
  wpSignUp,
  wpGetEmailByPhone,

  ...props
}) => {
  return (
    <div>
      <Wrap>
        <Title>{_t(current_lang, '회원가입')}</Title>

        <Form
          onSubmit={handleSubmit(values => {
            log('values', values)
            if (
              validate(
                {
                  phoneValue,
                  phoneVerfied,
                  ...values,
                },
                current_lang
              )
            ) {
              wpSignUp(
                {
                  phone: phoneValue,
                  ...values,
                },
                'customer',
                res => {
                  alert(_t(current_lang, '회원가입을 축하 합니다.\n홈으로 이동합니다.'))
                  window.location = '/'
                }
              )
            }
          })}
        >
          <div>
            <Field name="email" type="email" label={_t(current_lang, '이메일')} placeholder={_t(current_lang, '이메일을 입력해주세요')} component={renderField} />
            <Field name="username" type="text" label={_t(current_lang, '이름')} component={renderField} />
            <Field name="password" type="password" label="비밀번호" label={_t(current_lang, '비밀번호')} placeholder={_t(current_lang, '8-20자 이내로 입력해주세요.')} component={renderField} />
            <Field name="password_match" type="password" placeholder={_t(current_lang, '비밀번호 확인을 위해 재입력해주세요.')} component={passwordmatchField} />
            <SendCode current_lang={current_lang} setPhoneValue={setPhoneValue} wpGetEmailByPhone={wpGetEmailByPhone} />
            {/* render ConfirmCode if phone is not already signed up */}
            {phoneValue ? <ConfirmCode current_lang={current_lang} phoneValue={phoneValue} setPhoneVerfied={setPhoneVerfied} /> : ''}
          </div>

          <Agree href="/agreement" target="_blank">
            {_t(current_lang, '가입 버튼을 누름과 동시에 이용약관에 동의한 것으로 간주합니다.')}
          </Agree>
          <div>
            {error && <ErrorWrapper>{error}</ErrorWrapper>}

            <Button type="submit" disabled={submitting}>
              <Next>{_t(current_lang, '가입하기')}</Next>
            </Button>
          </div>

          <Already href="/login">{_t(current_lang, '이미 계정이 있으신가요?')}</Already>
        </Form>
      </Wrap>
    </div>
  )
}

// Component enhancer
const enhance = compose(
  withState('modalOpen', 'setModalOpen', false),
  withState('phoneValue', 'setPhoneValue', ''),
  withState('phoneVerfied', 'setPhoneVerfied', false),

  lifecycle({
    componentDidMount() {
      IMP.init('imp72953913')
    },
  })
)
export default enhance(
  reduxForm({
    form: 'HG_SIGNUP_FORM',
  })(SignUp)
)

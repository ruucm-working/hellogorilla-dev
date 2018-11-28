import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import EmptySpace from 'ruucm-blocks/layouts/EmptySpace'
import { _t } from '../../../shared/translate'
import SendCode from '../../../shared/PhoneVerfication/SendCode'
import ConfirmCode from '../../../shared/PhoneVerfication/ConfirmCode'
import ResetPassword from './ResetPassword'

const Wrap = styled.div`
  margin-left: ${wem2(480)};
  margin-right: ${wem2(480)};
`

const Title = styled.div`
  text-align: center;
  font-weight: 500;
`
const Email = styled.span`
  font-size: ${wem2(24)};
  color: #231f20;
  cursor: pointer;
`
const Bar = styled.span`
  font-size: ${wem2(24)};
  color: #231f20;
  margin-left: ${wem2(40)};
  margin-right: ${wem2(40)};
`
const Password = styled.span`
  font-size: ${wem2(24)};
  cursor: pointer;
  color: #805de9;
`

const RenderFieldLabel = styled.div`
  display: block;
  font-size: ${wem2(11)};
  color: #231f20;
  margin-top: ${wem2(24)};
  ${props =>
    props.email &&
    css`
      margin-top: ${wem2(48)};
    `};
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

const ErrorWrapper = styled.div`
  margin-top: ${wem2(12)};
  margin-left: ${wem2(20)};
  font-size: ${wem2(11)};
  color: #0eb780;
`

const emailField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <RenderFieldLabel email>{label}</RenderFieldLabel>
    <WriteField input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <ErrorWrapper>{error}</ErrorWrapper>)}
  </div>
)
const showEmailErr = value => '가입 시 입력한 이메일을 다시 확인해주세요.'

const FindPassword = ({
  // from parent
  current_lang,
  wpGetEmailByPhone,
  changePassword,

  // local
  setCurrentView,
  phoneValue,
  setPhoneValue,
  phoneVerfied,
  setPhoneVerfied,
  emailValue,
  setEmailValue,
  checkDuplicatedEmail,
  emailExist,

  ...props
}) => {
  return (
    <div>
      <EmptySpace height="96" />
      {!phoneVerfied || !emailExist || !(emailExist == emailValue) ? (
        <Wrap>
          <Title>
            <Email onClick={() => setCurrentView('find-id')}>
              {_t(current_lang, '이메일 찾기')}
            </Email>

            <Bar>|</Bar>
            <Password>{_t(current_lang, '비밀번호 찾기')}</Password>
          </Title>

          <Field
            name="email"
            type="email"
            label={_t(current_lang, '이메일')}
            placeholder={_t(current_lang, '이메일을 입력해주세요')}
            component={emailField}
            onChange={e => checkDuplicatedEmail(e.target.value)}
            validate={
              (!emailExist || // 이메일로 가입된 유저가 없을경우
                (phoneVerfied && emailExist != emailValue)) && // 본인 인증 후, 핸드폰 번호의 유저와, 입력한 이메일의 유저가 다를 경우
              showEmailErr
            }
          />

          <SendCode
            current_lang={current_lang}
            setPhoneValue={setPhoneValue}
            wpGetEmailByPhone={wpGetEmailByPhone}
            setEmailValue={setEmailValue}
          />

          {phoneValue ? (
            <ConfirmCode
              current_lang={current_lang}
              phoneValue={phoneValue}
              setPhoneVerfied={setPhoneVerfied}
            />
          ) : (
            ''
          )}
        </Wrap>
      ) : (
        <ResetPassword
          emailValue={emailValue}
          changePassword={changePassword}
        />
      )}
    </div>
  )
}

// Component enhancer
const enhance = compose(
  withState('phoneValue', 'setPhoneValue', ''),
  withState('phoneVerfied', 'setPhoneVerfied', false),
  withState('emailValue', 'setEmailValue', ''),
  withState('emailExist', 'setEmailExist', true),

  withHandlers({
    checkDuplicatedEmail: ({
      wpEmailExists,
      setEmailExist,
      ...props
    }) => email => {
      if (
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
        wpEmailExists
      ) {
        log("it's a email! & check function available")

        wpEmailExists(email, res => setEmailExist(res))
      }
    },
  })
)
export default enhance(FindPassword)

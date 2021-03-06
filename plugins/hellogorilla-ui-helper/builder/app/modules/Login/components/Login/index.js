import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'

import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import validate from './validate'
import LoadingSpinner from '../../../shared/LoadingSpinner'

import Find_ID from '../FindID'
// import FindID_Login from '../FindID_Login'

import Find_Password from '../FindPassword'
// import ResetPassword from '../ResetPassword'
import { _t } from '../../../shared/translate'

const Wrap = styled.div`
  margin-top: ${wem2(96)};
  /* margin-left: ${wem2(480)};
  margin-right: ${wem2(480)}; */
  position:relative;
  height: ${wem2(400)};
`

const Absolute = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 960px;
  width: 100%;
  form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`
const Title = styled.h1`
  text-align: center;
  font-size: ${wem2(24)};
  color: #231f20;
  font-weight: 500;
`

const EmailField = styled.input`
  margin-top: ${wem2(40)};
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #b7b5b6;
  color: #231f20;
  padding-left: ${wem2(20)};
  font-size: ${wem2(14)};
  background-color: #ffffff;
  :focus {
    border-color: #231f20;
  }
`
const PasswordField = styled.input`
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #b7b5b6;
  margin-top: ${wem2(16)};
  color: #b7b5b6;
  padding-left: ${wem2(20)};
  font-size: ${wem2(14)};
  background-color: #ffffff;
  :focus {
    border-color: #231f20;
  }
`

const LoginButtons = styled.div`
  margin-top: ${wem2(20)};
`
const ErrorWrapper = styled.div`
  font-size: ${wem2(11)};
  margin-top: ${wem2(12)};
  margin-bottom: ${wem2(12)};
  margin-left: ${wem2(20)};
  color: #0eb780;
`

const CommonButtonStyle = styled.button`
  text-decoration: none;
  border-color: white;
`

const LoginButton = styled(CommonButtonStyle)`
  width: ${wem2(480)};
  height: ${wem2(52)};
  border-radius: 2px;
  background-color: #805de9;
  font-size: ${wem2(14)};
  color: #ffffff;
  cursor: pointer;
`

const Bottom = styled.div`
  margin-top: ${wem2(48)};
  text-align: center;
`
const FindID = styled.a`
  font-size: ${wem2(13)};
  color: #231f20;
  cursor: pointer;
  font-weight: 500;
  :hover {
    color: #805de9;
  }
`
const FindPassword = styled.a`
  font-size: ${wem2(13)};
  color: #231f20;
  cursor: pointer;
  font-weight: 500;
  :hover {
    color: #805de9;
  }
`
const SignupButton = styled.a`
  font-size: ${wem2(13)};
  border: none;
  color: #231f20;
  cursor: pointer;
  font-family: 'NanumSquareRound', sans-serif;
  font-weight: 500 !important;
  background: white;
  padding: 0;
  :hover {
    color: #805de9;
  }
  ${props => props.direactLogin && css``};
`
const Bar = styled.span`
  font-size: ${wem2(13)};
  color: #231f20;
  margin-left: ${wem2(16)};
  margin-right: ${wem2(16)};
`

const emailField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <EmailField {...input} placeholder={placeholder} type={type} />
  </div>
)
const passwordField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <PasswordField {...input} placeholder={placeholder} type={type} />
  </div>
)

const LoginForm = ({
  // from parent
  label,
  userInfo,
  setUserInfo,
  direactLogin,
  back,

  // local
  currentView,
  setCurrentView,

  // redux-form
  history,
  error,
  pristine,
  reset,
  handleSubmit,
  submitting,

  // wordpress
  wpLogin,
  current_lang,
  wpGetEmailByPhone,
  wpEmailExists,
  changePassword,
  ...props
}) => {
  return (() => {
    switch (currentView) {
      case 'login':
        return (
          <Wrap>
            {/* <Info>{label}</Info> */}
            <Absolute>
              <Title>{_t(current_lang, '로그인')}</Title>
              <form
                onSubmit={handleSubmit(values => {
                  if (validate(values, current_lang))
                    return wpLogin(values, res => {
                      if (res) {
                        log('current_lang', current_lang)
                        alert(_t(current_lang, '로그인에 성공 하였습니다'))
                        current_lang == 'en'
                          ? (window.location = '/home-en')
                          : (window.location = '/')
                      }
                    })
                })}
              >
                <div className="input-fields">
                  <Field
                    name="username"
                    type="text"
                    placeholder={_t(current_lang, '이메일을 입력해주세요')}
                    component={emailField}
                  />
                  <Field
                    name="password"
                    type="password"
                    placeholder={_t(current_lang, '비밀번호를 입력해주세요.')}
                    component={passwordField}
                  />
                </div>

                <LoginButtons>
                  {error && <ErrorWrapper>{error}</ErrorWrapper>}

                  <LoginButton type="submit" disabled={submitting}>
                    {_t(current_lang, '로그인')}
                  </LoginButton>

                  <Bottom>
                    <FindID onClick={() => setCurrentView('find-id')}>
                      {_t(current_lang, '아이디 찾기')}
                    </FindID>
                    <Bar>|</Bar>
                    <FindPassword onClick={() => setCurrentView('find-pw')}>
                      {_t(current_lang, '비밀번호 찾기')}
                    </FindPassword>
                    <Bar>|</Bar>
                    <SignupButton href="/customer-signup">
                      {_t(current_lang, '가입하기')}
                    </SignupButton>
                  </Bottom>
                </LoginButtons>
              </form>
            </Absolute>
          </Wrap>
        )
      case 'find-id':
        return (
          <Find_ID
            setCurrentView={setCurrentView}
            current_lang={current_lang}
            wpGetEmailByPhone={wpGetEmailByPhone}
          />
        )
      case 'find-pw':
        return (
          <Find_Password
            setCurrentView={setCurrentView}
            current_lang={current_lang}
            wpGetEmailByPhone={wpGetEmailByPhone}
            wpEmailExists={wpEmailExists}
            changePassword={changePassword}
          />
        )
      default:
        break
    }
  })()
}

// Component enhancer
const enhance = compose(withState('currentView', 'setCurrentView', 'login'))
// withState('submitSuccessed', 'setsubmitSuccess', '')
export default enhance(
  reduxForm({
    form: 'LOGIN_FORM',
  })(LoginForm)
)

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

const Wrap = styled.div`
  margin-top: ${wem2(96)};
  margin-left: ${wem2(480)};
  margin-right: ${wem2(480)};
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
  color: #ee4230;
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

const Info = styled.div``
const UserEmail = styled.div``
const HelloText = styled.div``

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

  // woocommerce
  wpLogin,
  ...props
}) => {
  return (() => {
    switch (currentView) {
      case 'login':
        return (
          <Wrap>
            {/* <Info>{label}</Info> */}
            <Title>로그인</Title>
            <form
              onSubmit={handleSubmit(values => {
                if (validate(values))
                  return wpLogin(values, res => {
                    if (res) {
                      alert('환영 합니다')
                      window.location = '/'
                    }
                  })
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

                <Bottom>
                  <FindID onClick={() => setCurrentView('find-id')}>
                    아이디 찾기
                  </FindID>
                  <Bar>|</Bar>
                  <FindPassword onClick={() => setCurrentView('find-pw')}>
                    비밀번호 찾기
                  </FindPassword>
                  <Bar>|</Bar>
                  <SignupButton href="/customer-signup">가입하기</SignupButton>
                </Bottom>
              </LoginButtons>
            </form>
          </Wrap>
        )
      case 'find-id':
        return <Find_ID setCurrentView={setCurrentView} />
      case 'find-pw':
        return <Find_Password setCurrentView={setCurrentView} />
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

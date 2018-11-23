import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import EmptySpace from 'ruucm-blocks/layouts/EmptySpace'

const Wrap = styled.div`
  margin-left: ${wem2(480)};
  margin-right: ${wem2(480)};
`

const Email = styled.div`
  font-size: ${wem2(28)};
  text-align: center;
  color: #231f20;
`
const LoginBox = styled.a`
  border-radius: 2px;
  background-color: #533c97;
  width: ${wem2(480)};
  height: ${wem2(52)};
  font-size: ${wem2(14)};
  margin-top: ${wem2(48)};
  color: #ffffff;
  position: relative;
  cursor: pointer;
  display: block;
`
const Login = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
`

const FindID_Login = ({ emailValue, ...props }) => {
  return (
    <div>
      <EmptySpace height="144" />
      <Wrap>
        <Email>{emailValue}</Email>

        <LoginBox href="/login">
          <Login>로그인</Login>
        </LoginBox>
      </Wrap>
    </div>
  )
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      // this.props.getEmailByPhone(this.props.phoneValue, )
    },
  })
)
export default enhance(FindID_Login)

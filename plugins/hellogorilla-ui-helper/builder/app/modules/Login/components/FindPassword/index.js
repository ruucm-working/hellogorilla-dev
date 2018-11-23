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

const Alarm = styled.div`
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
  </div>
)

const FindPassword = ({
  // from parent
  current_lang,

  // local
  setCurrentView,
  ...props
}) => {
  return (
    <div>
      <EmptySpace height="96" />
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
        />
        <Alarm>
          {_t(current_lang, '가입 시 입력한 이메일을 다시 확인해주세요.')}
        </Alarm>

        <SendCode />
        <ConfirmCode />
      </Wrap>
    </div>
  )
}

export default FindPassword

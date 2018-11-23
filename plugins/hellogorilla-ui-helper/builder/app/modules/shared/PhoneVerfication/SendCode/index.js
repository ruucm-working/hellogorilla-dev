import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import EmptySpace from 'ruucm-blocks/layouts/EmptySpace'
import { _t } from '../../../shared/translate'

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
  color: #805de9;
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
  color: #231f20;
  cursor: pointer;
`
const RenderFieldWrap = styled.div`
  display: inline-block;
`

const RenderFieldLabel = styled.div`
  display: block;
  font-size: ${wem2(11)};
  color: #231f20;
  margin-top: ${wem2(24)};
`
const PhoneWriteField = styled.input`
  margin-top: ${wem2(10)};
  width: ${wem2(104)};
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
  background-color: #805de9;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  ${props =>
    props.purple &&
    css`
      background-color: #533c97;
    `};
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

const Alarm = styled.div`
  margin-top: ${wem2(12)};
  margin-left: ${wem2(20)};
  font-size: ${wem2(11)};
  color: #0eb780;
`

const PhoneMatchField = styled.input`
  margin-top: ${wem2(12)};
  width: ${wem2(332)};
  height: ${wem2(52)};
  border-radius: 2px;
  border: solid 1px #b7b5b6;
  font-size: ${wem2(14)};
  padding-left: ${wem2(20)};
  color: #b7b5b6;
  font-weight: 100;
  display: inline-block;
  margin-right: ${wem2(10)};
`

const phoneField = ({
  input,
  input02,
  input03,
  label,
  placeholder,
  type,
  current_lang,
  meta: { touched, error },
}) => (
  <RenderFieldWrap>
    <RenderFieldLabel>{label}</RenderFieldLabel>
    <PhoneWriteField input {...input} placeholder={placeholder} type={type} />
  </RenderFieldWrap>
)
// const phoneMatchField = ({
//   input,
//   label,
//   placeholder,
//   type,
//   current_lang,
//   meta: { touched, error },
// }) => (
//   <div>
//     {/* <RenderFieldLabel /> */}
//     <PhoneMatchField input {...input} placeholder={placeholder} type={type} />
//     <PassButton purple>
//       <PassText>{_t(current_lang, '인증번호 확인')}</PassText>
//     </PassButton>
//   </div>
// )

const SendCode = ({
  // from parent
  current_lang,

  // local
  setCurrentView,

  // redux-form
  history,
  error,
  pristine,
  reset,
  handleSubmit,
  submitting,
  ...props
}) => {
  return (
    <form>
      <Title>
        <Email>{_t(current_lang, '이메일 찾기')}</Email>
        <Bar>|</Bar>
        <Password onClick={() => setCurrentView('find-pw')}>
          {_t(current_lang, '비밀번호 찾기')}
        </Password>
      </Title>

      <Field
        name="phone1"
        type="tel"
        label={_t(current_lang, '휴대폰')}
        component={phoneField}
        current_lang={current_lang}
      />
      <Field
        name="phone2"
        type="tel"
        component={phoneField}
        current_lang={current_lang}
      />
      <Field
        name="phone3"
        type="tel"
        component={phoneField}
        current_lang={current_lang}
      />
      <PassButton type="submit">
        <PassText>{_t(current_lang, '인증번호 전송')}</PassText>
      </PassButton>
      <Alarm>
        {_t(current_lang, '가입 시 입력한 휴대폰 번호를 다시 확인해주세요.')}
      </Alarm>
    </form>
  )
}

// Component enhancer
const enhance = compose()
export default enhance(
  reduxForm({
    form: 'HG_SENDCODE_FORM',
  })(SendCode)
)
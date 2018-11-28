import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import EmptySpace from 'ruucm-blocks/layouts/EmptySpace'
import { _t } from '../../../shared/translate'
import validate from './validate'

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

const PassButton = styled.button`
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

const ErrorWrapper = styled.div`
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

const SendCode = ({
  // from parent
  current_lang,
  setPhoneValue,

  // local
  setCurrentView,
  handlePhoneSubmit,

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
    <form
      onSubmit={e => {
        // prevent parent form submit
        e.preventDefault()
        e.stopPropagation()

        // handle this form submit
        handleSubmit(values => {
          if (validate(values, current_lang)) {
            return handlePhoneSubmit(
              values.phone1 + values.phone2 + values.phone3
            )
          }
        })()
      }}
    >
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
        <PassText>{_t(current_lang, '휴대폰 가입확인')}</PassText>
      </PassButton>
      {/* <Alarm>
        {_t(current_lang, '가입 시 입력한 휴대폰 번호를 다시 확인해주세요.')}
      </Alarm> */}

      {error && <ErrorWrapper>{error}</ErrorWrapper>}
    </form>
  )
}

// Component enhancer
const enhance = compose(
  withHandlers({
    handlePhoneSubmit: ({
      current_lang,
      setPhoneValue,
      setEmailValue,
      wpGetEmailByPhone,
      startVerification,
      ...props
    }) => phone => {
      if (wpGetEmailByPhone) {
        wpGetEmailByPhone(phone, res => {
          if (res) {
            setPhoneValue(phone)
            setEmailValue(res)

            alert(
              _t(
                current_lang,
                '휴대폰 번호가 조회 되었습니다.\n아래 버튼을 클릭하여 인증을 진행해주세요.'
              )
            )
          } else {
            // err
            alert(
              _t(
                current_lang,
                '입력하신 휴대폰으로 등록된 사용자를 찾을 수 없습니다.'
              )
            )
          }
        }) // get email by verificated phone number
      } else {
        setPhoneValue(phone) // at SignUp (only phone verification)

        alert(
          _t(
            current_lang,
            '휴대폰 번호가 조회 되었습니다.\n아래 버튼을 클릭하여 인증을 진행해주세요.'
          )
        )
      }
    },
  })
)
export default enhance(
  reduxForm({
    form: 'HG_SENDCODE_FORM',
  })(SendCode)
)

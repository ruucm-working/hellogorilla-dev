import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import { _t } from '../../../shared/translate'
import validate from './validate'
// import TimeLeft from './TimeLeft'

const PassButton = styled.button`
  display: inline-block;
  width: ${wem2(136)};
  height: ${wem2(52)};
  border-radius: 2px;
  background-color: #805de9;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  margin: 0 auto;
  display: block;
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

const phoneMatchField = ({
  input,
  label,
  placeholder,
  type,
  current_lang,
  meta: { touched, error },
}) => (
  <span>
    {/* <RenderFieldLabel /> */}
    <PhoneMatchField input {...input} placeholder={placeholder} type={type} />
  </span>
)

const ConfirmCode = ({
  // from parent
  current_lang,
  phoneValue,

  // local
  setCurrentView,
  verifyCode,
  startVerification,

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
    <div>
      <PassButton purple onClick={() => startVerification()}>
        <PassText>{_t(current_lang, '인증번호 전송')}</PassText>
      </PassButton>
    </div>
    // <form
    //   onSubmit={e => {
    //     // prevent parent form submit
    //     e.preventDefault()
    //     e.stopPropagation()

    //     // handle this form submit
    //     handleSubmit(values => {
    //       if (validate({ phoneValue, ...values }, current_lang)) {
    //         return verifyCode(values.verifiction_code)
    //       }
    //     })()
    //   }}
    // >
    //   <Field
    //     name="verifiction_code"
    //     type="tel"
    //     // label="인증번호를 입력해주세요."
    //     placeholder={_t(current_lang, '인증번호를 입력해주세요.')}
    //     current_lang={current_lang}
    //     component={phoneMatchField}
    //   />
    //   <PassButton purple type="submit">
    //     <PassText>{_t(current_lang, '인증번호 확인')}</PassText>
    //   </PassButton>
    //   {/* <TimeLeft current_lang={current_lang} /> */}
    //   {error && <ErrorWrapper>{error}</ErrorWrapper>}
    // </form>
  )
}

// Component enhancer
const enhance = compose(
  // withHandlers({
  //   verifyCode: ({ current_lang, setPhoneVerfied, ...props }) => code => {
  //     if (code == '0000') {
  //       setPhoneVerfied(true)
  //       alert(_t(current_lang, '휴대폰이 정상적으로 인증 되었습니다'))
  //     } else alert(_t(current_lang, '휴대폰 인증에 실패 했습니다'))
  //   },
  // }),
  withHandlers({
    startVerification: ({ current_lang, setPhoneVerfied, ...props }) => () => {
      // IMP.certification(param, callback) 호출
      IMP.certification(
        {
          // param
          merchant_uid: 'merchant_' + new Date().getTime(), // 옵션 값
        },
        rsp => {
          // callback
          log('rsp', rsp)
          if (rsp.success) {
            // 인증 성공 시 로직,
            setTimeout(() => {
              alert(_t(current_lang, '휴대폰이 정상적으로 인증 되었습니다'))
              setPhoneVerfied(true)
            }, 320)
          } else {
            // 인증 실패 시 로직,
            setTimeout(() => {
              // alert(_t(current_lang, '휴대폰 인증에 실패 했습니다'))
            }, 320)
          }
        }
      )
    },
  }),
  lifecycle({
    componentDidMount() {
      IMP.init('imp72953913')
      log('IMP', IMP)
    },
  })
)
export default enhance(
  reduxForm({
    form: 'HG_CONFIRMCODE_FORM',
  })(ConfirmCode)
)

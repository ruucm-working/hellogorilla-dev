import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
import { log } from 'ruucm-util'
import EmptySpace from 'ruucm-blocks/layouts/EmptySpace'
import { _t } from '../../../shared/translate'
import SendCode from '../../../shared/PhoneVerfication/SendCode'
import ConfirmCode from '../../../shared/PhoneVerfication/ConfirmCode'
import FindID_Login from './FindID_Login'

const Wrap = styled.div`
  form {
    /* position: relative;
    left: 50%;
    transform: translateX(-50%); */
    text-align: center;
  }
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

const FindID = ({
  // from parent
  current_lang,
  wpGetEmailByPhone,

  // local
  setCurrentView,
  phoneValue,
  setPhoneValue,
  phoneVerfied,
  setPhoneVerfied,
  emailValue,
  setEmailValue,

  ...props
}) => {
  return (
    <div>
      <EmptySpace height="96" />
      {!phoneVerfied || !emailValue ? (
        <Wrap>
          <Title>
            <Email>{_t(current_lang, '이메일 찾기')}</Email>
            <Bar>|</Bar>
            <Password onClick={() => setCurrentView('find-pw')}>{_t(current_lang, '비밀번호 찾기')}</Password>
          </Title>
          <SendCode current_lang={current_lang} setPhoneValue={setPhoneValue} wpGetEmailByPhone={wpGetEmailByPhone} setEmailValue={setEmailValue} />
          {phoneValue ? <ConfirmCode current_lang={current_lang} phoneValue={phoneValue} setPhoneVerfied={setPhoneVerfied} /> : ''}
        </Wrap>
      ) : (
        <FindID_Login emailValue={emailValue} />
      )}
    </div>
  )
}

// Component enhancer
const enhance = compose(
  withState('phoneValue', 'setPhoneValue', ''),
  withState('phoneVerfied', 'setPhoneVerfied', false),
  withState('emailValue', 'setEmailValue', '')
)
export default enhance(FindID)

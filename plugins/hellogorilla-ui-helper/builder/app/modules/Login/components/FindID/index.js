import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { wem, wem2 } from 'ruucm-blocks/tools/mixins'
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

  // local
  setCurrentView,

  ...props
}) => {
  return (
    <div>
      <EmptySpace height="96" />
      <Wrap>
        <Title>
          <Email>{_t(current_lang, '이메일 찾기')}</Email>
          <Bar>|</Bar>
          <Password onClick={() => setCurrentView('find-pw')}>
            {_t(current_lang, '비밀번호 찾기')}
          </Password>
        </Title>
        <SendCode />
        <ConfirmCode />
      </Wrap>
    </div>
  )
}

// Component enhancer
const enhance = compose()
export default enhance(FindID)

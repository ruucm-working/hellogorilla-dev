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
        <SendCode />
        <ConfirmCode />
      </Wrap>
    </div>
  )
}

// Component enhancer
const enhance = compose()
export default enhance(FindID)

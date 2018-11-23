/**
 *
 * TimeLeft
 *
 */

import React from 'react'
import styled, { css } from 'styled-components'
import Countdown from 'react-countdown-now'
import { wem2 } from 'ruucm-blocks/tools/mixins'
import { _t } from '../../../translate'
import { log } from 'ruucm-util'

const StyleWrapper = styled.div`
  margin-top: ${wem2(12)};
  margin-left: ${wem2(20)};
  font-size: ${wem2(11)};
  color: #0eb780;
`

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed, current_lang }) => {
  if (completed) {
    // Render a completed state
    return <span>{_t(current_lang, '새로운 인증번호를 요청해주세요')}</span>
  } else {
    // Render a countdown
    return (
      <span>
        {_t(current_lang, '남은 시간')} {minutes}:{seconds}
      </span>
    )
  }
}

const TimeLeft = ({ current_lang, ...props }) => {
  return (
    <StyleWrapper>
      <Countdown
        date={Date.now() + 180000}
        renderer={renderer}
        current_lang={current_lang}
      />
    </StyleWrapper>
  )
}

export default TimeLeft

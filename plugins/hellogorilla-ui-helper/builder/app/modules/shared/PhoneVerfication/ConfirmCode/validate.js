import { SubmissionError } from 'redux-form'
import { _t } from '../../../shared/translate'

const validate = (values, current_lang) => {
  if (!values.phoneValue) {
    throw new SubmissionError({
      _error: _t(current_lang, '휴대폰 번호를 입력 해주세요'),
    })
  }

  if (!values.verifiction_code) {
    throw new SubmissionError({
      _error: _t(current_lang, '도착한 인증번호를 입력해 주세요'),
    })
  }

  return true
}

export default validate

import { SubmissionError } from 'redux-form'
import { _t } from '../../../shared/translate'

const validate = (values, current_lang) => {
  if (!values.phone1 || !values.phone2 || !values.phone1) {
    throw new SubmissionError({
      _error: _t(current_lang, '휴대폰은 번호를 입력 해주세요'),
    })
  }

  return true
}

export default validate

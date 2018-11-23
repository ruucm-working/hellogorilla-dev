import { SubmissionError } from 'redux-form'
import { _t } from '../../../../shared/translate'

const validate = (values, current_lang) => {
  if (!values.password) {
    throw new SubmissionError({
      _error: _t(current_lang, '비밀번호는 필수 필드 입니다'),
    })
  }

  if (values.password != values.password_match) {
    throw new SubmissionError({
      _error: _t(current_lang, '비밀번호가 같지 않습니다'),
    })
  }

  return true
}

export default validate

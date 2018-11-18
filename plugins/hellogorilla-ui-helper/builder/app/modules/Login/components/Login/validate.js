import { SubmissionError } from 'redux-form'
import { _t } from '../../../shared/translate'

const validate = (values, current_lang) => {
  if (!values.username) {
    throw new SubmissionError({
      _error: _t(current_lang, '이메일은 필수 필드 입니다'),
    })
  }

  if (!values.password) {
    throw new SubmissionError({
      _error: _t(current_lang, '비밀번호는 필수 필드 입니다'),
    })
  }

  return true
}

export default validate

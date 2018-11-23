import { SubmissionError } from 'redux-form'
import { _t } from '../../../shared/translate'

const validate = (values, current_lang) => {
  if (!values.email) {
    throw new SubmissionError({
      _error: _t(current_lang, '이메일은 필수 필드입니다'),
    })
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    throw new SubmissionError({
      _email: _t(current_lang, '이메일을 입력하세요'),
      _error: _t(current_lang, '이메일 형식이 잘못 되었습니다'),
    })
  }
  if (!values.username) {
    throw new SubmissionError({
      _error: _t(current_lang, '이름은 필수 필드 입니다'),
    })
  }

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
  if (!values.phone) {
    throw new SubmissionError({
      _error: _t(current_lang, '전화번호는 필수 필드 입니다'),
    })
  }

  return true
}

export default validate

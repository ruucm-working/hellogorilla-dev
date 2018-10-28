import { SubmissionError } from 'redux-form'

const validate = values => {
  if (!values.username) {
    throw new SubmissionError({
      _error: '닉네임은 필수 필드 입니다',
    })
  }

  if (!values.password) {
    throw new SubmissionError({
      _error: '비밀번호는 필수 필드 입니다',
    })
  }

  return true
}

export default validate

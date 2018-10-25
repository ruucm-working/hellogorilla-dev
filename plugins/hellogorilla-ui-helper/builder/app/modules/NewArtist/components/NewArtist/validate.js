import { SubmissionError } from 'redux-form'

const validate = (values, signUpOption) => {
  if (!values.username) {
    throw new SubmissionError({
      _error: '아이디는 필수 필드 입니다',
    })
  }
  if (!values.nickname) {
    throw new SubmissionError({
      _error: '닉네임은 필수 필드 입니다',
    })
  }

  if (!values.email) {
    throw new SubmissionError({
      _error: '이메일은 필수 필드입니다',
    })
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    throw new SubmissionError({
      _email: '이메일을 입력하세요',
      _error: '이메일 형식이 잘못 되었습니다',
    })
  }

  if (!values.password) {
    throw new SubmissionError({
      _error: '비밀번호는 필수 필드 입니다',
    })
  }

  if (values.password != values.password_match) {
    throw new SubmissionError({
      _error: '비밀번호가 같지 않습니다',
    })
  }

  if (!values.short_desc) {
    throw new SubmissionError({
      _error: '한줄 소개는 필수 필드 입니다',
    })
  }
  if (!values.long_desc) {
    throw new SubmissionError({
      _error: '자세한 소개는 필수 필드 입니다',
    })
  }
  if (!values.portfolio_01) {
    throw new SubmissionError({
      _error: '작품이미지 01 은 필수 필드 입니다',
    })
  }

  return true
}

export default validate

import { SubmissionError } from 'redux-form'

const validate = (values, signUpOption) => {
  if (signUpOption == 'premium' && !values.gift) {
    // only check if 프리미엄 멤버쉽
    throw new SubmissionError({
      _error: '웰컴팩을 선택해주세요',
    })
  }
  if (!values.phone) {
    throw new SubmissionError({
      _error: '전화번호는 필수 필드 입니다',
    })
  }
  if (!values.username) {
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

  if (!values.agree01) {
    throw new SubmissionError({
      _error: '이용약관 동의는 필수 입니다',
    })
  }
  if (!values.agree02) {
    throw new SubmissionError({
      _error: '개인정보 보호 동의는 필수 입니다',
    })
  }

  return true
}

export default validate

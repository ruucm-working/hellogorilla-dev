import { SubmissionError } from 'redux-form'

const validate = (values, signUpOption) => {
  if (!values.nickname) {
    throw new SubmissionError({
      _error: '닉네임은 필수 필드 입니다',
    })
  }

  if (!values.username) {
    throw new SubmissionError({
      _error: '영문명은 필수 필드 입니다',
    })
  }

  if (!values.short_desc) {
    throw new SubmissionError({
      _error: '한줄 소개는 필수 필드 입니다',
    })
  }
  if (!values.short_desc_en) {
    throw new SubmissionError({
      _error: '한줄 소개(en)는 필수 필드 입니다',
    })
  }
  if (!values.long_desc) {
    throw new SubmissionError({
      _error: '자세한 소개는 필수 필드 입니다',
    })
  }

  if (!values.long_desc_en) {
    throw new SubmissionError({
      _error: '자세한 소개(en)는 필수 필드 입니다',
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

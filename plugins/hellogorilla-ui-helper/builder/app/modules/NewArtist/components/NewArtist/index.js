import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import validate from './validate'

import Dropzone from 'react-dropzone'
import { _t, _u } from '../../../shared/translate'

const Wrap = styled.div``
const InfoBox = styled.div`
  background: rebeccapurple;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
`
const CloseBtn = styled.button``

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 150px;
`

const PromotionDesc = styled.div``

const Form = styled.form``
const fileFieldLabel = styled.div``
const UploadedImg = styled.img`
  width: 100px;
`
const RederFieldLabel = styled.div`
  margin-bottom: 50px;
`
const textareaFieldLabel = styled.span``
const radioFieldLabel = styled.span``
const checkFieldLabel = styled.span``
const CheckFields = styled.div``
const HR = styled.hr``
const SelectAll = styled.input``
const SelectAllLabel = styled.span``

const ErrorWrapper = styled.div`
  color: #ee4230;
`

// redux-form
const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    <RederFieldLabel>{label}</RederFieldLabel>
  </div>
)

const textareaField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} type={type} />
    <textareaFieldLabel>{label}</textareaFieldLabel>
  </div>
)

const renderDropzoneInput = ({ wpUpload, label, ...field }) => {
  const files = field.input.value
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => {
          log('filesToUpload', filesToUpload)
          wpUpload(filesToUpload[0], source_url =>
            field.input.onChange(source_url)
          )
        }}
      >
        <div>여기에 이미지 파일을 끌어다 놓으세요</div>
      </Dropzone>
      {field.meta.touched && field.meta.error && (
        <span className="error">{field.meta.error}</span>
      )}
      {log('files', files)}
      {files && <UploadedImg src={files} />}
      <fileFieldLabel>{label}</fileFieldLabel>
    </div>
  )
}

// react
const NewArtist = ({
  // local
  modalOpen,
  setModalOpen,

  // from parent
  stage,
  setStage,
  setSubmitSuccess,
  signUpRole,
  setSignUpRole,
  signUpInfo,
  setSignUpInfo,
  wpSignUp,
  wpUpload,

  // redux-form
  history,
  error,
  pristine,
  reset,
  handleSubmit,
  submitting,

  ...props
}) => {
  return (
    <Wrap>
      <Title>회원정보</Title>

      <Form
        onSubmit={handleSubmit(values => {
          if (validate(values)) {
            wpSignUp(values, 'editor', res => {
              alert(res.username + ' 아티스트가 생성 되었습니다')
              log('res', res)
              location.href = '/'
            })
          }
        })}
      >
        <div>
          <Field
            name="username"
            type="text"
            label="아이디"
            component={renderField}
          />

          <Field
            name="nickname"
            type="text"
            label="닉네임"
            component={renderField}
          />

          <Field
            name="email"
            type="email"
            label="이메일"
            placeholder={_t('en', '이메일을 입력해주세요')}
            component={renderField}
          />
          <Field
            name="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호(6자리 이상)"
            component={renderField}
          />
          <Field
            name="password_match"
            type="password"
            label="비밀번호(확인)"
            component={renderField}
          />

          <Field
            name="short_desc"
            type="text"
            label="한줄 소개"
            component={renderField}
          />

          <Field
            name="long_desc"
            label="자세한 소개"
            component={textareaField}
          />

          <Field
            name="homepage"
            type="text"
            label="홈페이지"
            component={renderField}
          />

          <Field
            name="facebook"
            type="text"
            label="페이스북 (전체주소)"
            component={renderField}
          />

          <Field
            name="instagram"
            type="text"
            label="인스타그램 (전체주소)"
            component={renderField}
          />

          <Field
            name="img_cover"
            label="커버 이미지"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />

          <Field
            name="img_profile"
            label="프로필 이미지"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />

          <Field
            name="artist_video"
            label="영상"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />

          <Field
            name="portfolio_01"
            label="작품 이미지 1"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />

          <Field
            name="portfolio_02"
            label="작품 이미지 2"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />
          <Field
            name="portfolio_03"
            label="작품 이미지 3"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />
        </div>

        <div>
          {error && <ErrorWrapper>{error}</ErrorWrapper>}

          <button type="submit" disabled={submitting}>
            만들기
          </button>
        </div>
      </Form>
    </Wrap>
  )
}

// Component enhancer
const enhance = compose(withState('modalOpen', 'setModalOpen', false))
export default enhance(
  reduxForm({
    form: 'HG_NEW_ARTIST_FORM',
  })(NewArtist)
)

import React from 'react'

import { compose, withState, lifecycle, withHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { log } from 'ruucm-util'
import validate from './validate'

import Dropzone from 'react-dropzone'
import { _t, _u } from '../../../shared/translate'

const Wrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-family: 'NanumSquareRoundWeb', sans-serif;
`
const InfoBox = styled.div`
  background: rebeccapurple;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
`
const CloseBtn = styled.button``

const Title = styled.h1`
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 150px;
  font-family: 'NanumSquareRoundWeb', sans-serif;
  font-size: 24px;
  color: #231f20;
  font-weight: 900;
`

const PromotionDesc = styled.div``

const Form = styled.form`
  input {
    border: 1px solid #231f20;
    border-radius: 2px;
  }
`

const UploadedImg = styled.img`
  width: 100px;
`
const FieldWrap = styled.div`
  margin-bottom: 50px;
`
const RederFieldLabel = styled.div`
  margin-bottom: 10px;
  font-weight: 900;
  font-family: 'NanumSquareRoundWeb', sans-serif;
  font-size: 11px;
  color: #231f20;
`
const TextareaFieldLabel = styled.div`
  margin-bottom: 10px;
  font-weight: 900;
  font-family: 'NanumSquareRoundWeb', sans-serif;
  font-size: 11px;
  color: #231f20;
`

const TextareaField = styled.textarea`
  height: 200px;
`
const FileFieldLabel = styled.div`
  font-family: 'NanumSquareRoundWeb', sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
`
const FileFieldLabel2 = styled.div`
  padding: 20px;
`
const OptLabel = styled.label`
  display: inline-block;
  margin-right: 30px;
`

const ErrorWrapper = styled.div`
  color: #ee4230;
`
const Button = styled.button`
  margin-top: 15px;
  font-size: 22px !important;
  cursor: pointer;
`

// redux-form
const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <FieldWrap>
    <RederFieldLabel>{label}</RederFieldLabel>
    <input {...input} placeholder={placeholder} type={type} />
  </FieldWrap>
)

const textareaField = ({ input, label, type, meta: { touched, error } }) => (
  <FieldWrap>
    <TextareaFieldLabel>{label}</TextareaFieldLabel>
    <TextareaField {...input} type={type} />
  </FieldWrap>
)

const renderDropzoneInput = ({ wpUpload, label, ...field }) => {
  const files = field.input.value
  return (
    <FieldWrap>
      <FileFieldLabel>{label}</FileFieldLabel>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => {
          log('filesToUpload', filesToUpload)
          wpUpload(filesToUpload[0], source_url =>
            field.input.onChange(source_url)
          )
        }}
      >
        <FileFieldLabel2>여기에 파일을 끌어다 놓으세요</FileFieldLabel2>
      </Dropzone>
      {field.meta.touched && field.meta.error && (
        <span className="error">{field.meta.error}</span>
      )}
      {log('files', files)}
      {files && <UploadedImg src={files} />}
    </FieldWrap>
  )
}

// react
const NewArtist = ({
  // local
  modalOpen,
  setModalOpen,
  activeOpt,
  setActiveOpt,

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
      <Title>아티스트 정보</Title>

      <Form
        onSubmit={handleSubmit(values => {
          if (validate(values)) {
            wpSignUp(
              {
                email: values.username.replace(/\s/g, '') + '@hellogo.co.kr',
                password: 'museum101', // default password
                ...values,
              },
              'editor',
              res => {
                alert(res.username + ' 아티스트가 생성 되었습니다')
                log('res', res)
                location.href = '/'
              }
            )
          }
        })}
      >
        <div>
          <Field
            name="nickname"
            type="text"
            label="닉네임"
            component={renderField}
          />

          <Field
            name="username"
            type="text"
            label="닉네임 (en)"
            component={renderField}
          />

          <Field
            name="short_desc"
            type="text"
            label="한줄 소개"
            component={renderField}
          />

          <Field
            name="short_desc_en"
            type="text"
            label="한줄 소개 (en)"
            component={renderField}
          />

          <Field
            name="long_desc"
            label="자세한 소개"
            component={textareaField}
          />

          <Field
            name="long_desc_en"
            label="자세한 소개 (en)"
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
          <div>
            <FileFieldLabel>작가의 영상</FileFieldLabel>
            <OptLabel>
              <input
                type="radio"
                value="youtube"
                checked={activeOpt === 'youtube'}
                onClick={() => setActiveOpt('youtube')}
              />
              유튜브
            </OptLabel>

            <OptLabel>
              <input
                type="radio"
                value="upload"
                checked={activeOpt === 'upload'}
                onClick={() => setActiveOpt('upload')}
              />
              업로드
            </OptLabel>
          </div>
          {activeOpt == 'upload' ? (
            <Field
              name="artist_video"
              label=""
              component={renderDropzoneInput}
              wpUpload={wpUpload}
            />
          ) : (
            <Field
              name="artist_video"
              label="유튜브 영상의 ID를 입력하세요"
              component={renderField}
              type="text"
            />
          )}

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

          <Field
            name="portfolio_04"
            label="작품 이미지 4"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />
          <Field
            name="portfolio_05"
            label="작품 이미지 5"
            component={renderDropzoneInput}
            wpUpload={wpUpload}
          />
        </div>

        <div>
          {error && <ErrorWrapper>{error}</ErrorWrapper>}

          <Button type="submit" disabled={submitting}>
            만들기
          </Button>
        </div>
      </Form>
    </Wrap>
  )
}

// Component enhancer
const enhance = compose(
  withState('modalOpen', 'setModalOpen', false),
  withState('activeOpt', 'setActiveOpt', 'youtube')
)
export default enhance(
  reduxForm({
    form: 'HG_NEW_ARTIST_FORM',
  })(NewArtist)
)

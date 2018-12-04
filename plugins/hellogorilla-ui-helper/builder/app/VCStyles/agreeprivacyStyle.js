import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const style = css`
  /* agreement */
  .page-id-421 {
    font-family: 'NanumSquareRoundWeb', sans-serif;
    .entry-content {
      max-width: 960px;
      margin: 0 auto;
      margin-top: 20px;
      padding-top: 100px;
      h1 {
        font-size: 24px;
        font-weight: 400;
        color: #231f20;
      }
      p {
        margin-top: 14px;
        line-height: 1.2;
        color: #231f20;
      }
      strong {
        font-weight: 700;
      }
      ${media.tablet`
        padding-left: 20px;
        padding-right: 20px;
      `};
    }
  }
  /* privacy */
  .page-id-422 {
    font-family: 'NanumSquareRoundWeb', sans-serif;
    .entry-content {
      max-width: 960px;
      margin: 0 auto;
      margin-top: 20px;
      padding-top: 100px;
      h1 {
        font-size: 24px;
        font-weight: 400;
        color: #231f20;
      }
      p {
        margin-top: 14px;
        line-height: 1.2;
        color: #231f20;
      }
      strong {
        font-weight: 700;
      }
      ${media.tablet`
        padding-left: 20px;
        padding-right: 20px;
      `};
    }
  }
`

export default style

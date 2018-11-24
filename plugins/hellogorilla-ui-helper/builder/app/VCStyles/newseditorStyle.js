import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const newseditorStyle = css`
  .page-id-20 {
    .kboard-form {
      max-width: 960px !important;
      margin: 0 auto !important;
      min-height: 1400px;
    }
    .kboard-attr-row {
      .attr-name {
        color: #231f20;
        font-size: 24px;
      }
      label {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        margin-top: 10px;
      }
      #kboard-input-title {
        margin-top: 10px;
        border: 1px solid #231f20;
        border-radius: 2px;
      }
    }
    .kboard-default-button-small {
    }
    .wp-editor-wrap {
      top: 100px;
      .button {
        background: #533c97 !important;
        color: white !important;
        height: 100% !important;
      }
    }
    .kboard-control {
      margin-top: 850px;
      @media all and (max-width: 700px) {
        margin-top: 1500px;
      }
      .kboard-default-button-small {
        cursor: pointer;
        font-size: 24px !important;
        :hover {
          color: unset;
        }
      }
    }
  }
`

export default newseditorStyle

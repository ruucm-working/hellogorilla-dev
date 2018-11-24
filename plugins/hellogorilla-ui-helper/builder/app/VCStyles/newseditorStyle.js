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
      /* width: 144px;
      height: 52px;
      background: #533c97;
      color: white; */
    }
    .wp-editor-wrap {
      margin-top: 150px;
      .button {
        background: #533c97 !important;
        color: white !important;
        height: 100% !important;
      }
    }
    .kboard-control {
      margin-top: unset;
    }
  }
`

export default newseditorStyle

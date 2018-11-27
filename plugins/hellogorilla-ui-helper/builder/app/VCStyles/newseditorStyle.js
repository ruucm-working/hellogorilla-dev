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
      position: relative;
      ${media.tablet`
        min-height: 1800px !important;
      `}
      .kboard-attr-row {
        margin-top: 50px;
        .attr-name {
          color: #231f20;
          font-size: 24px;
          /* display: none; */
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
      .kboard-content {
        margin-top: 250px;
        padding: unset;
      }
      .wp-editor-wrap {
        .button {
          background: #533c97 !important;
          color: white !important;
          height: 100% !important;
        }
      }
      .kboard-control {
        position: absolute;
        bottom: 20px;
        width: 100%;
        .right {
          .kboard-default-button-small {
            border: 1px solid #533c97;
            color: black;
            border-radius: 2px;
            cursor: pointer;
            width: 144px !important;
            height: 48px;
            line-height: 48px;
            display: inline-block;
            font-size: 16px !important;
            :hover {
              color: white;
              background: #533c97;
            }
          }
        }
        .kboard-default-button-small {
          cursor: pointer;
          font-size: 16px !important;
          :hover {
            color: unset;
          }
        }
      }
    }
  }
`

export default newseditorStyle

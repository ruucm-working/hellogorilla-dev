import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const style = css`
  .page-id-168 {
    .site-content {
      max-width: 960px;
      margin: 0 auto;
      /* margin-top: ${wem2(128)}; */
      font-family: 'NanumSquareRoundWeb', sans-serif;

      .NewArtist__Title-sc-1mlgdnv-3 {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
      }
      .NewArtist__Form-sc-1mlgdnv-5 {
        input {
          border: 1px solid #231f20;
          border-radius: 2px;
          margin-top: 10px;
        }
        .NewArtist__RederFieldLabel-sc-1mlgdnv-8 {
          font-family: 'NanumSquareRoundWeb', sans-serif;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #231f20;
        }
        div {
          margin-top: 20px;
          margin-bottom: 10px;
        }
      }
      filefieldlabel {
        font-family: 'NanumSquareRoundWeb', sans-serif;
        font-weight: 700;
      }
      button {
        margin-top: 15px;
        font-size: 22px !important;
      }
    }
  }
`

export default style

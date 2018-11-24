import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const newsStyle = css`
  .error404 {
    .error-404 {
      padding-top: 200px;
      padding-bottom: 200px;
      .error-banner {
        img {
          width: 100px;
        }
      }
      .page-title {
        font-size: 30px !important;
      }
      .page-content {
        display: none;
      }
    }
  }
`

export default newsStyle

import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const notFoundStyle = css`
  .error404 {
    .error-404 {
      padding-top: ${wem2(200)};
      padding-bottom: ${wem2(200)};
      .error-banner {
        img {
          width: ${wem2(100)};
        }
      }
      .page-title {
        font-size: ${wem2(30)} !important;
      }
      .page-content {
        display: none;
      }
    }
  }
`

export default notFoundStyle

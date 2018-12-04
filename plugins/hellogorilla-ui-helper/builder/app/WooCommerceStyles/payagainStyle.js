import { css } from 'styled-components'
import { wem } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  /* 결제정보 */
  .payagain-cardpan {
    &:nth-of-type(2) {
      display: none;
    }
    ${media.tablet`
      padding: 0 20px;
    `}
  }
`

export default style

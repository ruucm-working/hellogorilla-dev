import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const prgramStyle = css`
  .page-id-270,
  .page-id-378 {
    .program-header {
      margin-top: 96px;
    }
    .program-sub-title {
      font-size: 16px;
      color: #231f20;
      text-align: center;
    }
    .program-title {
      margin-top: 24px;
      font-size: 32px;
      color: #231f20;
      text-align: center;
    }

    .vc_row-fluid {
      ${media.tablet`
    /* min-height: 650px !important; */
    margin-bottom: 20px;
  `};
    }
    .program-left {
      /* margin-top: 72px; */
      text-align: center;
      padding-right: 24px;
    }
    .program-left-title {
      margin-top: 20px;
      font-size: 28px;
      color: #533c97;
    }

    .program-right {
      /* margin-top: 72px; */
      text-align: center;
      padding-left: 24px;
    }
    .program-right-title {
      margin-top: 20px;
      font-size: 28px;
      color: #0eb780;
    }
    .program-text {
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      color: #231f20;
      height: 200px;
    }
    .program-info {
      font-size: 14px;
      line-height: 1.71;
      color: #231f20;
      text-align: left;
      .program-info-bold {
        font-weight: 500;
      }
    }

    .program-artist-right {
      height: ${wem2(352)};
      /* min-height: 290px; */
      /* max-height: 352px; */
      position: relative;
      ${media.tablet`
    height: 100%;
  `};
    }
    .program-artist {
      font-size: ${wem2(16)};
      color: #533c97;
      margin-top: ${wem2(24)};
      margin-bottom: unset;
      ${media.tablet`
    font-size: 14px;
  `};
    }
    .program-artist-name {
      font-size: ${wem2(20)};
      color: #231f20;
      margin-top: ${wem2(10)};
      margin-bottom: unset;
      ${media.tablet`
        font-size: 16px;
      `};
    }
    .vc_empty_space {
      ${media.tablet`
        height: 20px !important;
      `};
    }
    .program-artist-info {
      font-size: ${wem2(14)};
      line-height: 2;
      color: #231f20;
      margin-bottom: unset;
      /* position: absolute; */
      /* bottom: 4%; */

      position: relative;
      margin-top: 40px;
      ${media.tablet`
        font-size: 12px;
        position: unset;
      `};
    }

    .banner01 {
      padding-left: 240px;
      padding-right: 240px;
      height: ${wem2(336)};
      background-color: #533c97;
      ${media.tablet`
      padding: 0 20px;
      padding-top: 30px;
      margin-bottom: unset;
    `};
    }
    .banner02 {
      padding-left: 240px;
      padding-right: 240px;
      height: ${wem2(336)};
      background-color: #0eb780;
      ${media.tablet`
      padding: 0 20px;
      /* height: 310px; */
    `};
    }
    .banner-title {
      color: white;
      font-size: ${wem2(32)};
      line-height: 1.5;
    }
    .banner-more {
      font-size: ${wem2(14)};
      color: #ffffff;
      cursor: pointer;
    }
    .banner-label {
      color: #ffffff;
      font-size: ${wem2(16)};
      white-space: nowrap;
    }
    .banner-text {
      font-size: ${wem2(14)};
      line-height: 1.71;
      color: #ffffff;
    }
    .banner-img {
      font-size: ${wem2(240)};
      float: right;
      ${media.tablet`
      display: none;
    `};
    }
    .hellogorilla-about-image {
    }
    .Footer__Content-sc-1u7gwec-1 {
      z-index: -20;
      margin-top: -1px;
      ${media.tablet`
        margin-top: -22px;
      `}
    }
  }
`

export default prgramStyle

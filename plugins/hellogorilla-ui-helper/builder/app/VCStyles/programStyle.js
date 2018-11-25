import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

// App Styles
const prgramStyle = css`
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
    height: 144px;
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
    max-height: 352px;
    position: relative;
  }
  .program-artist {
    font-size: 16px;
    color: #533c97;
    margin-top: 24px;
    margin-bottom: unset;
  }
  .program-artist-name {
    font-size: 20px;
    color: #231f20;
    margin-top: 10px;
    margin-bottom: unset;
  }
  .program-artist-info {
    font-size: 14px;
    line-height: 2;
    color: #231f20;
    margin-bottom: unset;
    position: absolute; 
    bottom: 0;
    /* margin-top: ${wem2(100)} !important; */
  }


  .banner01 {
    padding-left: 240px;
    padding-right: 240px;
    height: ${wem2(336)};
    background-color: #533c97;
  }
  .banner02 {
    padding-left: 240px;
    padding-right: 240px;
    height: ${wem2(336)};
    background-color: #0eb780;
  }
  .banner-title {
    color:white;
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
  }
  .hellogorilla-about-image {
    /* font-size: ${wem2(240)};
    float: right; */
  }

`

export default prgramStyle

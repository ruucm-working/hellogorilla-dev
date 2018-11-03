import { css } from "styled-components";

import { wem, wem2, center } from "ruucm-blocks/tools/mixins";
import media from "ruucm-blocks/tools/media";

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
  }
`;

export default prgramStyle;

import { css } from "styled-components";

import { wem, wem2, center } from "ruucm-blocks/tools/mixins";
import media from "ruucm-blocks/tools/media";

// App Styles
const newsStyle = css`
  .kboard-list-header {
    margin-left: ${wem2(240)};
    margin-right: ${wem2(240)};
    margin-top: ${wem2(96)};
  }
  .kboard-total-count {
    margin-left: ${wem2(48)};
    font-size: ${wem2(15)};
    color: #231f20;
  }

  .kboard-list {
    margin-top: ${wem2(49)};
  }
  table {
    width: 100%;
  }
  thead {
    display: none;
  }
  tr {
    /* position: relative; */
  }
  .kboard-list-notice {
    /* width: ${wem2(960)}; */
    height: ${wem2(55)};
    background-color: #f9f9f9;
  }

  .kboard-mobile-contents {
    display: none;
  }
  .kboard-list-title {
    position: relative;
    font-size: ${wem2(15)};
    color: #533c97;
  }
  .kboard-default-cut-strings {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: max-content;
    vertical-align:middle;
    line-height: 1;
  }
  .kboard-list-date {
    font-size: ${wem2(16)};
    color: #533c97;
    float:right;
    margin-top: ${wem2(20)};
    /* vertical-align:middle; */
    line-height: 1;
  }
`;

export default newsStyle;

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
    /* color: #231f20; */
  }
  thead {
    display: none;
  }
  tbody {
    color: #231f20;
  }
  tr {
    height: ${wem2(55)};
    border-top: 1px solid #e9e8e8;
    border-bottom: 1px solid #e9e8e8;
    cursor: pointer;
    :hover {
      background-color: #533c97;
      color: white;
    }
  }
  td {
    color: unset !important;
  }
  .kboard-list-notice {
    height: ${wem2(55)};
    background-color: #f9f9f9;
    color: #533c97;
  }

  .kboard-mobile-contents {
    display: none;
  }
  .kboard-list-title {
    position: relative;
    font-size: ${wem2(15)};
  }
  .kboard-default-cut-strings {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: max-content;
    vertical-align: middle;
    line-height: 1;
    margin-left: ${wem2(48)};
  }
  .kboard-list-date {
    font-size: ${wem2(16)};
    float: right;
    margin-top: ${wem2(20)};
    line-height: 1;
    margin-right: ${wem2(48)};
  }

  /* New2 css */
  #kboard-document {
    margin-left: ${wem2(240)};
    margin-right: ${wem2(240)};
    margin-top: ${wem2(96)};
  }
  .kboard-document-wrap {
    position: relative;
  }
  .kboard-title {
    height: ${wem2(55)};
    font-size: ${wem2(15)};
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    line-height: 1;
    color: #231f20;
    border-top: 1px solid #e9e8e8;
    border-bottom: 1px solid #e9e8e8;
    padding-top: ${wem2(20)};
    padding-bottom: ${wem2(20)};
    padding-left: ${wem2(48)};
  }
  .detail-value {
    position: absolute;
    top: ${wem2(20)};
    right: ${wem2(48)};
    font-size: ${wem2(16)};
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #231f20;
  }
  .kboard-content {
    height: ${wem2(625)};
    padding-top: ${wem2(21)};
    font-size: ${wem2(14)};
    line-height: 1.86;
    color: #231f20;
    border-bottom: 1px solid #e9e8e8;
  }
  .content-view {
    margin-left: ${wem2(48)};
    margin-right: ${wem2(48)};
  }
  .kboard-document-navi {
    display: none;
  }
  .kboard-control {
    display: none;
  }

  .kboard-pagination {
    margin-top: ${wem2(72)};
    position: relative;
    padding-bottom: ${wem2(70)};
  }
  .kboard-pagination-pages {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }
  li {
    display: inline-block;
    position: relative;
    width: ${wem2(48)};
    height: ${wem2(48)};
    border-radius: 2px;
    border: solid 1px #533c97;
    margin-left: ${wem2(12)};
    color: #533c97;
    cursor: pointer;
    :hover {
      background: #533c97;
      color: #ffffff;
    }
    a {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: ${wem2(16)};
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: normal;
      white-space: nowrap;
    }
  }
  .active {
    background: #533c97;
    color: #ffffff;
  }
  .first-page {
    width: ${wem2(85)};
    height: ${wem2(48)};
    border-radius: 2px;
    border: solid 1px #533c97;
    background-color: #ffffff;
    margin-right: ${wem2(12)};
    cursor: pointer;
    :hover {
      background: #533c97;
      color: #ffffff;
    }
  }
  .last-page {
    width: ${wem2(85)};
    height: ${wem2(48)};
    border-radius: 2px;
    border: solid 1px #533c97;
    background-color: #ffffff;
    margin-left: ${wem2(24)};
    cursor: pointer;
    :hover {
      background: #533c97;
      color: #ffffff;
    }
  }
  .prev-page {
    display: none;
  }
  .next-page {
    display: none;
  }
`;

export default newsStyle;

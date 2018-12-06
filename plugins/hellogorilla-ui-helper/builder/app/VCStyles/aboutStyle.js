import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-362,
  .page-id-377 {
    .vc_column-inner {
      padding: unset;
    }
    .hello-gorilla-first-row {
      margin-top: 94px;
    }
    .hello-gorilla-left {
      /* margin-top: 94px */
    }
    .hello-gorilla-right {
      /* margin-top: 94px  */
      max-width: 528px;
    }
    .hello-gorilla-title {
      /* font-family: Lato; */
      font-size: 32px;
      font-weight: 300;
      line-height: 1.5;
      color: #231f20;
    }
    .hello-gorilla-sub-title {
      font-size: 20px;
      color: #533c97;
      margin: unset;
      line-height: 1.5;
    }
    .hello-gorilla-text {
      font-size: 16px;
      line-height: 1.75;
      color: #231f20;
      margin: unset;
    }
    .hello-gorilla-img {
      margin: unset;
    }

    .hello-gorilla-second-row {
      margin-top: 192px;
    }

    .hello-gorilla-third-row {
      margin-top: 144px;
    }

    .hello-gorilla-button {
      width: 144px;
      height: 48px;
      border-radius: 2px;
      background-color: #805de9;
      left: 50%;
      position: relative;
      transform: translateX(-50%);
      color: white;
      margin-top: 37px;
      cursor: pointer;
    }
    .hello-gorilla-button-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }

    .hello-gorilla-fourth-row {
      margin-top: 157px;
    }
    .hello-gorilla-fifth-row {
      margin-top: 192px;
    }

    /* History */
    .history-item {
      border-left: 1px solid #e9e8e8;
      padding-bottom: 65px;
      &:last-child {
        border: none;
      }
      .year {
        font-family: Lato;
        font-size: 20px;
        color: #ffffff;
        line-height: 80px;
        height: 80px;
        position: relative;
        display: inline-block;
        z-index: 1;
        &:before {
          width: 75px;
          height: 70px;
          transform: rotate(-15deg);
          display: block;
          content: '';
          background: #533c97;
          position: absolute;
          top: 5px;
          left: -15px;
          z-index: -1;
        }
      }
      .title {
        font-family: NanumSquareRoundWeb;
        font-size: 16px;
        color: #231f20;
        display: inline-block;
        margin-left: 40px;
        max-width: 288px;
        &.number2 {
          margin-left: 90px !important;
          margin-top: 40px;
          margin-bottom: 12px;
        }
        ${media.tablet`
          margin-top: 10px;
          margin-bottom: 20px;
          &.number2 {
            margin-left: 40px !important;
          }
        `};
      }
      .desc {
        font-family: NanumSquareRoundWeb;
        font-size: 14px;
        color: #918f8f;
        margin-left: 90px;
        margin-bottom: 20px;
        vertical-align: top;
        margin-right: 10px;
        ${media.tablet`
          margin-left: 40px;
        `};
      }
      .certi-icon {
        ${media.tablet`
          margin-top: 30px;
          margin-left: 40px;
        `};
      }
      img {
        margin-left: 90px;
        width: 288px;
        ${media.tablet`
          margin-left: 40px;
          width: 230px;
        `};
      }

      &.two-line {
        .year {
          line-height: 30px;
          padding-top: 10px;
        }
        .title {
          margin-left: 33px;
          ${media.tablet`
            margin-left: 40px;
          `};
        }
      }
    }
  }
`

export default style

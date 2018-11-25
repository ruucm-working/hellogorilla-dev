import { css } from 'styled-components'

import { wem, wem2, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .page-id-9 {
    .post-9 {
      /* error */
      .woocommerce-error {
        color: #231f20 !important;
        ::before {
          color: #231f20 !important;
          vertical-align: middle;
        }
      }
    }

    /* navigation css */
    .woocommerce-MyAccount-navigation {
      width: ${wem2(55)};
      padding-left: 30px;
      white-space: nowrap;
      li {
        color: #231f20;
        a {
          font-family: 'NanumSquareRoundWeb', sans-serif;
          /* font-size: ${wem2(15)}; */
          font-size: 15px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          :hover {
            color: #533c97;
          }
        }
      }
      .is-active {
        color: #533c97;
      }
    }

    /* content css */
    .woocommerce-MyAccount-content {
      width: ${wem2(708)};
      ${media.tablet`
      margin-top: 30px !important;
      width: 100%;
      `}

      @media all and (min-width: 738px) and (max-width: 768px) 
      {
      margin-top: 200px !important;      
        }       
       

      table {
        width: 100vw;
      }
      thead {
        border-bottom: 1px solid #e9e8e8;
      }
      tr {
        height: ${wem2(22)};
        span {
          font-family: 'NanumSquareRoundWeb', sans-serif;
        }
      }
      .woocommerce-orders-table__header {
        font-size: ${wem2(12)};
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
      }

      /* table */
      .woocommerce-orders-table__row {
        height: ${wem2(138)};
        border-bottom: 1px solid #e9e8e8;
      }
      .woocommerce-orders-table__cell {
        vertical-align: middle;
        text-align: center;
        font-size: ${wem2(14)};
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #231f20;
        a {
          font-weight: normal;
        }
      }

      .woocommerce-button {
        color: #0fb780 !important;
      }
      .view {
        border-bottom: 1px solid #0fb780;
        padding-bottom: unset !important;
      }
      .cancel {
        border-bottom: 1px solid #0fb780;
        padding-bottom: unset !important;
      }

      /* 주문 상세보기 view-order */
      mark {
        background-color: #533c97 !important;
        color: white !important;
      }
      .woocommerce-order-details {
        /* background: pink; */
        ${media.tablet`
        padding: unset;  
        /* padding-left: 10px; */
        width: fit-content;
        margin: 0 auto;
         `}
        margin-top: 20px;
        .woocommerce-table--order-details {
          display: unset;
          tbody {
            .woocommerce-table__product-total {
              text-align: center;
            }
          }
          tfoot {
            th {
              float: left;
              padding-left: unset;
            }
            td {
              text-align: center;
            }
          }
        }
      }
      .woocommerce-customer-details {
        ${media.tablet`
        padding: unset;  
        `}
      }
    }
  }
`

export default style

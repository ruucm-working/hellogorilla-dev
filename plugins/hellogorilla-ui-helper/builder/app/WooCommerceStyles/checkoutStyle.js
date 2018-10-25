import { css } from 'styled-components'

import { wem, center } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  .entry-content .woocommerce {
    width: 60vw;
    margin: 0 auto;
    ${media.phone`
      width: 90vw;
      padding-bottom: 100px;
    `};
  }
  form.woocommerce-form-login {
    .form-row-first {
      margin-top: ${wem(50)};
      margin-bottom: ${wem(30)};
    }
    h3 {
      font-weight: 900;
      font-size: ${wem(32)};
      margin-bottom: ${wem(50)};
    }
    label {
      width: ${wem(200)};
      line-height: ${wem(51)};
      font-size: ${wem(28)};
      color: black;
      display: inline-block;
    }
    input {
      border: none;
      border-bottom: ${wem(1)} solid black;
      background: transparent;
      line-height: ${wem(40)};
      width: ${wem(300)};
      outline: none;
      border-radius: 0;
      color: black;
      font-size: ${wem(20)};
      margin-left: ${wem(50)};
      &::placeholder {
        color: black;
        font-size: ${wem(13)};
      }
    }
    input[type='submit'] {
      font-size: ${wem(30)};
      color: #284ea2;
      font-weight: 900;
      border: none;
      background: transparent;
      float: right;
      padding: 0;
    }
    .woocommerce-form__label-for-checkbox,
    .lost_password {
      display: none;
    }

    ${media.phone`
      > p {
        font-size: 10px;
        line-height: 1.6em;
      }
      input[type='submit'] {
        margin-top: 20px;
        text-align: right;
      }
    `};
  }
  form.woocommerce-form-login,
  form.woocommerce-checkout {
    background: white;
    color: black;
    border-radius: ${wem(6)};
    padding: ${wem(52)};
    padding-bottom: ${wem(80)};
    ${center('x')};
    position: relative;
    width: 100%;
    min-height: ${wem(450)};
    box-shadow: rgba(0, 0, 0, 0.3) ${wem(5)} ${wem(10)} ${wem(100)} 0;

    margin-top: ${wem(150)};
    ${media.phone`
      width: 100%;
    `};
    .required {
      display: none;
    }
  }
  /* Info */
  .woocommerce-info {
    font-weight: 900;
    font-size: ${wem(32)};
    margin-top: ${wem(50)};
    margin-bottom: ${wem(50)};
  }
  .checkout_coupon {
    input {
      border: none;
      border-bottom: ${wem(1)} solid black;
      background: transparent;
      line-height: ${wem(40)};
      width: ${wem(300)};
      outline: none;
      border-radius: 0;
      color: black;
      font-size: ${wem(20)};
      margin-left: ${wem(50)};
      &::placeholder {
        color: black;
        font-size: ${wem(13)};
      }
    }
  }
  .woocommerce-message {
    margin-top: ${wem(50)};
  }
  /* Error */
  .woocommerce-error {
    color: red;
    margin-bottom: ${wem(50)};
  }
  /* 고객상세 */
  .woocommerce-billing-fields {
    h3 {
      font-weight: 900;
      font-size: ${wem(32)};
      margin-bottom: ${wem(50)};
    }
    label {
      width: ${wem(200)};
      line-height: ${wem(51)};
      font-size: ${wem(28)};
      color: black;
      display: inline-block;
    }
    input {
      border: none;
      border-bottom: ${wem(1)} solid black;
      background: transparent;
      line-height: ${wem(40)};
      width: ${wem(300)};
      outline: none;
      border-radius: 0;
      color: black;
      font-size: ${wem(20)};
      margin-left: ${wem(50)};
      &::placeholder {
        color: black;
        font-size: ${wem(13)};
      }
    }
  }
  /* 추가정보, 계정 만들기 */
  .woocommerce-additional-fields,
  .woocommerce-account-fields {
    padding-top: ${wem(100)};
    padding-bottom: ${wem(100)};
    h3 {
      font-weight: 900;
      font-size: ${wem(32)};
      margin-bottom: ${wem(50)};
    }
    /* Common Form Style */
    label {
      width: ${wem(200)};
      line-height: ${wem(51)};
      font-size: ${wem(28)};
      color: black;
      display: inline-block;
    }
    input {
      border: none;
      border-bottom: ${wem(1)} solid black;
      background: transparent;
      line-height: ${wem(40)};
      width: ${wem(300)};
      outline: none;
      border-radius: 0;
      color: black;
      font-size: ${wem(20)};
      margin-left: ${wem(50)};
      &::placeholder {
        color: black;
        font-size: ${wem(13)};
      }
    }
  }
  /* 고객님의 주문 */
  #order_review_heading {
    font-weight: 900;
    font-size: ${wem(32)};
    margin-bottom: ${wem(50)};
  }
  #order_review {
    table {
      th {
        line-height: ${wem(51)};
        font-size: ${wem(28)};
        color: black;
        text-align: left;
        padding: ${wem(10)} ${wem(20)};
      }
      td {
        line-height: ${wem(51)};
        font-size: ${wem(28)};
        color: black;
        padding: ${wem(10)} ${wem(20)};
      }
    }
  }
  .quantity {
    input[type='number'] {
      border: none;
      border-bottom: ${wem(1)} solid black;
      background: transparent;
      line-height: ${wem(40)};
      width: ${wem(300)};
      outline: none;
      border-radius: 0;
      color: black;
      font-size: ${wem(20)};
      margin-left: ${wem(50)};
      &::placeholder {
        color: black;
        font-size: ${wem(13)};
      }
    }
  }
  /* Place Order Button */
  input[type='submit'] {
    font-size: ${wem(30)};
    color: #284ea2;
    font-weight: 900;
    border: none;
    background: transparent;
    float: right;
    padding: 0;
  }
`

export default style

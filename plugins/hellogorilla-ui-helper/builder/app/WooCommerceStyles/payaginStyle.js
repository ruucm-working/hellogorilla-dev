import { css } from 'styled-components'
import { wem } from 'ruucm-blocks/tools/mixins'
import media from 'ruucm-blocks/tools/media'

const style = css`
  label[for='payment_method_iamport_pay_again'] {
    font-weight: 900;
    font-size: ${wem(32)};
    margin-bottom: ${wem(50)};
    margin-top: ${wem(100)};
    display: block;
  }
  #wc-iamport_pay_again-cc-form {
    width: 50vw;
    min-height: ${wem(450)};
    margin: 0 auto;
    border-radius: ${wem(6)};
    padding: ${wem(59)} ${wem(55)};
    font-family: NanumSquareWeb;
    border: 1px solid black;
    margin-bottom: ${wem(50)};
    /* Title */
    > p {
      color: black;
      font-weight: 900;
      font-size: ${wem(18)};
      margin-bottom: ${wem(50)};
    }
    /* 카드번호, 만료일 */
    .checkout-input-row1 {
      label {
        width: 35%;
        line-height: ${wem(51)};
        font-size: ${wem(28)};
        color: black;
        display: inline-block;
      }
      input {
        border: none;
        background: transparent;
        font-size: ${wem(28)};
        line-height: ${wem(51)};
        color: black;
        width: 60%;
      }
    }
    /* 소지자 확인, 비밀번호 */
    .checkout-input-row2 {
      .col {
        display: block;
      }
      label {
        width: 35%;
        line-height: ${wem(51)};
        font-size: ${wem(28)};
        color: black;
        display: inline-block;
      }
      input {
        border: none;
        background: transparent;
        font-size: ${wem(28)};
        line-height: ${wem(51)};
        color: black;
        width: 60%;
      }
    }
    ${media.phone`
      width: 90%;
    `};
  }
`

export default style

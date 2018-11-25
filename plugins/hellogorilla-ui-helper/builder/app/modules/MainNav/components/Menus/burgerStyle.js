import { css } from 'styled-components'

const burgerStyle = css`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 21px;
    height: 18px;
    left: 16px;
    top: 16px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #ffffff;
    height: 1px !important;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 21px !important;
    top: 13px !important;
    left: 16px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    width: 21px !important;
    height: 21px !important;
  }

  /* General sidebar styles */
  .bm-menu {
    background: white;
    font-size: 1.15em;
    height: 120vh !important;
    position: relative;
  }
  .bm-menu-wrap {
    top: 0;
    width: 100vw !important;
    overflow: scroll;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    background: rgba(35, 31, 32, 0.85);
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.69) !important;
    top: 0;
  }
`

export default burgerStyle

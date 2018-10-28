import { css } from 'styled-components'

const burgerStyle = css`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 30px;
    left: 19px;
    top: 22px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #000000;
    height: 4px !important;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 34px !important;
    top: 24px !important;
    right: 19px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #000;
    width: 4.5px !important;
    height: 30px !important;
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
    color: #b8b7ad;
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

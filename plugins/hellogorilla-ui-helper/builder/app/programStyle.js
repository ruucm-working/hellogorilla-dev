import { injectGlobal } from "styled-components";

import normalize from "ruucm-blocks/libs/normalize";

import NanumSquare from "ruucm-blocks/css-patterns/fonts/NanumSquare";
import Montserrat from "ruucm-blocks/css-patterns/fonts/Montserrat";
import NanumMyeongjo from "ruucm-blocks/css-patterns/fonts/NanumMyeongjo";
import HarborMagazineIcon from "ruucm-blocks/css-patterns/icons/HarborMagazineIcon";
import HarborSchoolIcon from "ruucm-blocks/css-patterns/icons/HarborSchoolIcon";
import PortfolioClassIcon from "ruucm-blocks/css-patterns/icons/PortfolioClassIcon";
import HelloGorillaIcon from "ruucm-blocks/css-patterns/icons/HelloGorillaIcon";

import { wem2 } from "ruucm-blocks/tools/mixins";

import { checkoutStyle, payaginStyle, thankStyle } from "./WooCommerceStyles";

// App Styles
injectGlobal`
  ${normalize}
  /* Fonts */
  ${NanumSquare}
  ${NanumMyeongjo}
  ${Montserrat}
  /* Icons */
  ${HelloGorillaIcon}
  /* Body Styles */


  @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  body {
    font-family: "NanumSquareRound", sans-serif;
    font-weight: 300;
  }
  /* Content Styles */
  #content {
    overflow-x: hidden;
  }
  


  /* Basic Typo */
  *, h1, h2, h3, p, a {
    /* font-family: NanumSquareWeb */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* WooCommerce */


  .program-header {
    margin-top: 96px;
  }
  .program-sub-title {
  font-size: 16px;
  color: #231f20;
  }
  .program-title {
  margin-top: 24px;
  font-size: 32px;
  color: #231f20;
  }

  .program-left {
    /* margin-top: 72px; */
    text-align:center;
    padding-right: 24px;
  }
  .program-left-title {
    margin-top: 20px;
    font-size: 28px;
    color: #533c97;
  }

  .program-right {
    /* margin-top: 72px; */
    text-align:center;
    padding-left:24px;
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

`;

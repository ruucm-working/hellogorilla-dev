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




.hello-gorilla-first-row {
  margin-top: 94px
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
  cursor:pointer;
}
.hello-gorilla-button-text {
  position:absolute;
  left: 50%;
  top:50%;
  transform:translate(-50%,-50%);
  font-size:16px
}
`;

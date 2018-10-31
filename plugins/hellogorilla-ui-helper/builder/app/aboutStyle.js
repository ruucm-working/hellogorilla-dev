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




.hello-gorilla {
  margin-top: ${wem2(94)};
}
.hello-gorilla-left {
    /* margin-top: ${wem2(94)}; */
}
.hello-gorilla-right {
    /* margin-top: ${wem2(94)};  */
}
.hello-gorilla-title {
  /* font-family: Lato; */
  font-size: ${wem2(32)}
  font-weight: 300;
  line-height: 1.5;
  color: #231f20;
  }
.hello-gorilla-sub-title {
  font-size: ${wem2(20)};
  color: #533c97;
  margin: unset;
}
.hello-gorilla-text {
  font-size: ${wem2(16)};
  line-height: 1.75;
  color: #231f20;
  margin: unset;
}
.hello-gorilla-img {
  margin: unset;  
}

  
`;

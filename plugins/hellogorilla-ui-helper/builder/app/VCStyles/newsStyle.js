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
`;

export default newsStyle;

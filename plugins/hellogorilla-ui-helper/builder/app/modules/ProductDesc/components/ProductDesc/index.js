/**
 *
 * ProductDesc
 *
 */

import React from "react";
import { compose, lifecycle } from "recompose";
import Select from "react-select";

import styled, { css } from "styled-components";
import media from "ruucm-blocks/tools/media";
import { wem2 } from "ruucm-blocks/tools/mixins";

import { Footer } from "../../../Footer";

const View = styled.div`
  /* position: relative; */
`;

const LoadingWrapper = styled.div``;
const Wrapper = styled.div`
  /* position: absolute; */
  left: 0;
  display: inline-block;
`;

const Left = styled.div`
  margin-left: ${wem2(240)};
  max-width: ${wem2(528)};
  /* padding-top: 72px; */
`;
const MainImg = styled.img`
  /* 아래값은 지우고 작업 */
  width: 100%;
  padding-bottom: 32px;
`;

const ContentsWrapper = styled.div``;

const ProductDesc = props => {
  let contents = props[props.dataType + "_" + props.category];
  return contents ? (
    <View>
      <Wrapper>
        <Left>
          <MainImg src={contents.images[0].src} />

          <ContentsWrapper
            dangerouslySetInnerHTML={{
              __html: props.shortcodeChild
            }}
          />
          {/* <Footer productFooter={true} /> */}
        </Left>
      </Wrapper>
    </View>
  ) : (
    <LoadingWrapper />
  );
};

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.getProducts
        ? this.props.getProducts({ productId: this.props.productId })
        : void 0; // don't run in builder
    }
  })
);
export default enhance(ProductDesc);

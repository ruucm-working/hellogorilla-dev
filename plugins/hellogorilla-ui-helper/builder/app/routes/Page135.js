/**
 *
 * Page135
 *
 */

import React, { Component } from "react";

import { Post } from "modules/DataContainer";
import { Grid } from "modules/Grid";

class Page135 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Post postType="harbor_curation"><Grid /></Post>

      </div>
    ); // eslint-disable-line
  }
}

export default Page135;

/**
 *
 * Page69
 *
 */

import React, { Component } from "react";

import { Post } from "modules/DataContainer";
import { SinglePost } from "modules/SinglePost";

class Page69 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Post postType="singlePost"><SinglePost postId={67} /></Post>

      </div>
    ); // eslint-disable-line
  }
}

export default Page69;

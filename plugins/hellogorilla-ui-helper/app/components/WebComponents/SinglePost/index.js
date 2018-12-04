import React, { Component } from 'react'

import { Post } from '../../../../builder/app/modules/DataContainer'
import { SinglePost } from '../../../../builder/app/modules/SinglePost'

const SinglePostComponent = props => {
  return (
    <Post postType="singlePost">
      <SinglePost postId={props.wpObject.post_id} />
    </Post>
  )
}
export default SinglePostComponent

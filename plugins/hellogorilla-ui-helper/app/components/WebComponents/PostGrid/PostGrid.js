import React from 'react'

import { Post } from '../../../../builder/app/modules/DataContainer'
import {
  Carousel,
  CarouselItem,
} from '../../../../builder/app/modules/DataPresenter'

import { PostGrid } from '../../../../builder/app/modules/PostGrid'

const PostGridComponent = props => {
  return (
    <Post postType="posts">
      <PostGrid />
    </Post>
  )
}

export default PostGridComponent

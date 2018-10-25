import React from 'react'

import { Post } from '../../../../builder/app/modules/DataContainer'
import {
  Carousel,
  CarouselItem,
} from '../../../../builder/app/modules/DataPresenter'

const PostCarouselComponent = props => {
  return (
    <Post postType={props.wpObject.type}>
      <Carousel
        title={props.wpObject.title}
        viewAllLink={props.wpObject.link}
        align={props.wpObject.align}
      >
        <CarouselItem />
      </Carousel>
    </Post>
  )
}

export default PostCarouselComponent

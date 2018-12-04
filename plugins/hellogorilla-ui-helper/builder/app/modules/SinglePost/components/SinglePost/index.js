/**
 *
 * SinglePost
 *
 */

import React from 'react'
import { compose, lifecycle } from 'recompose'
import styled, { css } from 'styled-components'
import { log } from 'ruucm-util'

import { Slider } from 'ruucm-blocks/components/Slider'
import { center } from 'ruucm-blocks/tools/mixins'
import { map } from 'lodash'
import Cover from './Cover'

// import Page from './Page'
import { Frame, Hover, Animate } from 'ruucm-blocks/animation'

const Wrap = styled.div``

const Title = styled.h1``
const Desc = styled.p``

const SinglePost = props => {
  let postData = props.singlePost
  // let pagedData = getPagedData(postData)
  log('postData', postData)

  return (
    <div>
      {postData ? (
        <Wrap>
          <Title>{postData.title.rendered}</Title>
          <Desc>{postData.content.rendered}</Desc>
        </Wrap>
      ) : (
        ''
      )}
    </div>
  )
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.getPosts
        ? this.props.getPosts({ postId: this.props.postId })
        : void 0 // don't run in builder
    },
  })
)

export default enhance(SinglePost)

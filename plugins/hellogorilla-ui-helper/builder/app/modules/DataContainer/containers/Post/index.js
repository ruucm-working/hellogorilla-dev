/**
 *
 * Post Redux Container
 *
 */

import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectName, selectPostData } from './selectors'
import { getData } from './actions'
import { compose, lifecycle, withHandlers } from 'recompose'

import { log } from 'ruucm-util'
import request from 'superagent'

const Post = props => {
  return (
    <div>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          datas: props[props.postType + '_postData'],
        })
      )}
    </div>
  )
}

// Component redux
const mapStateToProps = (state, ownProps) => {
  var key = ownProps.postType + '_postData'
  var obj = { name: selectName() }
  obj[key] = selectPostData(ownProps.postType)
  return createStructuredSelector(obj)
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
  }
}

// Component enhancer
const enhance = compose(
  withHandlers({
    getData: props => postType => {
      const { dispatch, name } = props // eslint-disable-line
      let dataUrl =
        'http://col.harbor.school/wp-json/wp/v2/' + postType + '/?_embed'
      request.get(dataUrl).end((err, res) => {
        dispatch(getData(props.postType, res.body))
      })
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getData(this.props.postType)
    },
  })
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhance(Post))

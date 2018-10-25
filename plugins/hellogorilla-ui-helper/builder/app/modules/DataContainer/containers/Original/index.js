/**
 *
 * Original Redux Container
 *
 */

import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectName, selectOriginalData } from './selectors'
import { getData } from './actions'
import { compose, lifecycle, withHandlers } from 'recompose'

import { log } from 'ruucm-util'
import request from 'superagent'

const Original = ({ children, originalData }) => {
  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { datas: originalData })
      )}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  name: selectName(),
  originalData: selectOriginalData(),
})

// Component enhancer
const enhance = compose(
  withHandlers({
    getData: props => dataUrl => {
      const { dispatch, name } = props // eslint-disable-line
      request.get(dataUrl).end((err, res) => {
        dispatch(getData(res.body))
      })
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getData(this.props.dataUrl)
    },
  })
)

// Component redux
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhance(Original))

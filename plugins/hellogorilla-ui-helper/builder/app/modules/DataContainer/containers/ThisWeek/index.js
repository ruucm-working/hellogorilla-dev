/**
 *
 * ThisWeek Redux Container
 *
 */

import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectName, selectThisWeekData } from './selectors'
import { getData } from './actions'
import { compose, lifecycle, withHandlers } from 'recompose'

import { log } from 'ruucm-util'
import request from 'superagent'

const Wrapper = styled.div`
  /* overflow: hidden; */
`

const ThisWeek = ({ children, thisWeekData, getData, dataUrl }) => {
  log('thisWeekData', thisWeekData)

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { datas: thisWeekData })
  )
  log('childrenWithProps', childrenWithProps)
  return thisWeekData.length && children ? (
    <Wrapper>{childrenWithProps}</Wrapper>
  ) : (
    <div>
      {/* <button onClick={() => getData(dataUrl)}>get data</button> */}
      Loading...
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  name: selectName(),
  thisWeekData: selectThisWeekData(),
})

// Component enhancer
const enhance = compose(
  withHandlers({
    getData: props => dataUrl => {
      const { dispatch, thisWeekData } = props // eslint-disable-line
      request.get(dataUrl).end((err, res) => {
        if (!err) dispatch(getData(res.body))
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
)(enhance(ThisWeek))

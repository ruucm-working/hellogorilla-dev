/**
 *
 * Users Redux Container
 *
 */

import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectName, selectUsersData } from './selectors'
import { getData } from './actions'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'

import { log } from 'ruucm-util'
import request from 'superagent'
import WPAPI from 'wpapi'

const Users = props => {
  return (
    <div>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          datas: props[props.usersType + '_usersData'],
        })
      )}
    </div>
  )
}

// Component redux
const mapStateToProps = (state, ownProps) => {
  var key = ownProps.usersType + '_usersData'
  var obj = { name: selectName() }
  obj[key] = selectUsersData(ownProps.usersType)
  return createStructuredSelector(obj)
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
  }
}

// Component enhancer
const enhance = compose(
  withProps({
    wp: new WPAPI({
      endpoint: 'http://col.harbor.school/wp-json/',
      username: 'admin',
      password: 'wjfgoak',
    }),
  }),
  withHandlers({
    createUser: props => usersType => {
      const { dispatch, name, nonce, wp } = props // eslint-disable-line
      // let dataUrl = 'http://col.harbor.school/wp-json/wp/v2/users'
      // log('nonce', nonce)
      // request
      //   .post(dataUrl)
      //   .send({
      //     username: 'Manny',
      //     email: 'test1@ruucm.work',
      //     password: 'test',
      //   }) // sends a JSON post body
      //   .set('X-WP-Nonce', nonce)
      //   .set('accept', 'json')
      //   .end((err, res) => {
      //     // Calling the end function will send the request
      //     dispatch(getData(props.usersType, res.body))
      //   })
      wp.users()
        .create({
          username: 'Manny3',
          email: 'test3@ruucm.work',
          password: 'test',
        })
        .then(res => {
          log('res', res)
          dispatch(getData(props.usersType, res.body))
        })
        .catch(err => {
          log('err', err)
        })
    },
  }),
  lifecycle({
    componentDidMount() {
      // create test user
      this.props.createUser('')
    },
  })
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhance(Users))

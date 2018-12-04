import { combineReducers } from 'redux'
import postReducer from './containers/Post/reducer.js'
import usersReducer from './containers/Users/reducer.js'
import wpReducer from './containers/WP/reducer.js'
import wcReducer from './containers/WooCommerce/reducer.js'

export default combineReducers({
  post: postReducer,
  users: usersReducer,
  wp: wpReducer,
  wc: wcReducer,
})

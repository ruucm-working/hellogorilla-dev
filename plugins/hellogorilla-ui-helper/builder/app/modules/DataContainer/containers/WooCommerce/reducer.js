/**
 * Post/PostReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  SAMPLE_ACTION,
  GET_POSTS_DATA,
  GET_POSTS,
  ADD_TO_CART,
  CREATE_ORDER,
  GET_DATAS,
} from './constants'
import { log } from 'ruucm-util'

// The initial state of the App
const initialState = {
  name: 'Sample Name',
  postData: [],
}

const dataContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, { name: action.name })
    case `${GET_POSTS}/${action.namespace}`:
      var key = action.namespace
      var obj = {}
      obj[key] = action.postData
      return Object.assign({}, state, obj)
    case `${ADD_TO_CART}/${action.namespace}`:
      var key = action.namespace
      var obj = {}
      obj[key] = action.postData
      return Object.assign({}, state, obj)
    case `${CREATE_ORDER}/${action.namespace}`:
      var key = action.namespace
      var obj = {}
      obj[key] = action.postData
      return Object.assign({}, state, obj)
    case `${GET_DATAS}/${action.namespace}`:
      var key = action.namespace
      var obj = {}
      log('action', action)
      obj[key] = action.wcData
      return Object.assign({}, state, obj)
    default:
      return state
  }
}

export default dataContainerReducer

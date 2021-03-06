/**
 * WP/WPReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { SAMPLE_ACTION, GET_POSTS_DATA, GET_DATAS } from './constants'
import { log } from 'ruucm-util'

// The initial state of the App
const initialState = {
  name: 'Sample Name',
  wpData: [],
}

const dataContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, { name: action.name })
    case `${GET_POSTS_DATA}/${action.namespace}`:
      var key = action.namespace + '_wpData'
      var obj = {}
      obj[key] = action.wpData
      return Object.assign({}, state, obj)
    case `${GET_DATAS}/${action.namespace}`:
      var key = action.namespace + '_wpData'
      var obj = {}
      obj[key] = action.wpData
      return Object.assign({}, state, obj)
    default:
      return state
  }
}

export default dataContainerReducer

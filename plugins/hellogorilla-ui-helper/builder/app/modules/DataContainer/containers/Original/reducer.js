/**
 * Original/OriginalReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { SAMPLE_ACTION, GET_POSTS_DATA } from './constants'

// The initial state of the App
const initialState = {
  name: 'Sample Name',
  originalData: [],
}

function dataContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, { name: action.name })
    case GET_POSTS_DATA:
      return Object.assign({}, state, { originalData: action.originalData })
    default:
      return state
  }
}

export default dataContainerReducer

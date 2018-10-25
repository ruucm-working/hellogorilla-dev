import { combineReducers } from 'redux'
// import animationReducer from './containers/Animation/reducer.js'
import frameReducer from './containers/Frame/reducer.js'

export default combineReducers({
  frame: frameReducer,
})

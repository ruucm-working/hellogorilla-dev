import DataContainerReducer from 'modules/DataContainer/reducer.js'
import SignUpReducer from 'modules/SignUp/reducer.js'
import AnimationReducer from 'ruucm-blocks/animation/reducer.js'
import { reducer as reduxFormReducer } from 'redux-form'

export default {
  DataContainer: DataContainerReducer,
  SignUp: SignUpReducer,
  Animation: AnimationReducer,
  form: reduxFormReducer,
}

import DataContainerReducer from '../../../builder/app/modules/DataContainer/reducer.js'
import AnimationReducer from '../../../builder/app/modules/Animation/reducer.js'
import { reducer as reduxFormReducer } from 'redux-form'

export default {
  DataContainer: DataContainerReducer,
  Animation: AnimationReducer,
  form: reduxFormReducer,
}

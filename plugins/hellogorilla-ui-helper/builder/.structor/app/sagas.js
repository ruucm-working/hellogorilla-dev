import DataContainerSagas from 'modules/DataContainer/sagas.js';
import SignUpSagas from 'modules/SignUp/sagas.js';
import AnimationSagas from 'modules/Animation/sagas.js';
export default [
    ...DataContainerSagas,
    ...SignUpSagas,
    ...AnimationSagas
];
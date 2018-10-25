/**
 * DataContainer/WP selectors
 */

import { createSelector } from 'reselect'

/**
 * Direct selector to the DataContainer.wp state domain
 */
const selectWP = () => state => state.DataContainer.wp

/**
 * Other specific selectors
 */
const selectName = () => createSelector(selectWP(), wpState => wpState.name)
const selectWPData = namespace =>
  createSelector(selectWP(), wpState => wpState[namespace + '_wpData'])

export default selectWP

export { selectName, selectWPData }

/**
 * DataContainer/Original selectors
 */

import { createSelector } from 'reselect'

/**
 * Direct selector to the DataContainer.original state domain
 */
const selectOriginal = () => state => state.DataContainer.original

/**
 * Other specific selectors
 */
const selectName = () =>
  createSelector(selectOriginal(), originalState => originalState.name)
const selectOriginalData = () =>
  createSelector(selectOriginal(), originalState => originalState.originalData)

export default selectOriginal

export { selectName, selectOriginalData }

/**
 * DataContainer/Post selectors
 */

import { createSelector } from 'reselect'

/**
 * Direct selector to the DataContainer.post state domain
 */
const selectPost = () => state => state.DataContainer.wc

/**
 * Other specific selectors
 */
const selectName = () =>
  createSelector(selectPost(), postState => postState.name)
const selectPostData = namespace =>
  createSelector(selectPost(), postState => postState[namespace])

export default selectPost

export { selectName, selectPostData }

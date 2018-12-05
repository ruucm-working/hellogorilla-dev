/**
 * DataContainer/Post selectors
 */

import { createSelector } from 'reselect'

/**
 * Direct selector to the DataContainer.post state domain
 */
const selectPost = () => state => state.DataContainer.wc
const selectWC = () => state => state.DataContainer.wc

/**
 * Other specific selectors
 */
const selectName = () =>
  createSelector(
    selectPost(),
    postState => postState.name
  )
const selectPostData = namespace =>
  createSelector(
    selectPost(),
    postState => postState[namespace]
  )
const selectWCData = () =>
  createSelector(
    selectWC(),
    wcState => {
      log('wcState', wcState)
      log('wcState.cart', wcState.cart)
      return wcState.cart
    }
  )

export default selectPost

export { selectName, selectPostData, selectWCData }

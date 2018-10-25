/**
 * DataContainer/Users selectors
 */

import { createSelector } from 'reselect'

/**
 * Direct selector to the DataContainer.users state domain
 */
const selectUsers = () => state => state.DataContainer.users

/**
 * Other specific selectors
 */
const selectName = () =>
  createSelector(selectUsers(), usersState => usersState.name)
const selectUsersData = namespace =>
  createSelector(
    selectUsers(),
    usersState => usersState[namespace + '_usersData']
  )

export default selectUsers

export { selectName, selectUsersData }

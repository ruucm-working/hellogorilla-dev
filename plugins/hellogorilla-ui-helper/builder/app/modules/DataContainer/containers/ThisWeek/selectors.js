/**
 * DataContainer/ThisWeek selectors
 */

import { createSelector } from 'reselect'

/**
 * Direct selector to the DataContainer.thisWeek state domain
 */
const selectThisWeek = () => state => state.DataContainer.thisWeek

/**
 * Other specific selectors
 */
const selectName = () =>
  createSelector(selectThisWeek(), thisWeekState => thisWeekState.name)
const selectThisWeekData = () =>
  createSelector(selectThisWeek(), thisWeekState => thisWeekState.thisWeekData)

export default selectThisWeek

export { selectName, selectThisWeekData }

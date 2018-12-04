/**
 * DataContainer/DataContainer selectors
 */

import { createSelector } from "reselect";

/**
 * Direct selector to the DataContainer.dataContainer state domain
 */
const selectDatacontainer = () => state => state.DataContainer.dataContainer;

/**
 * Other specific selectors
 */
const selectName = () =>
  createSelector(
    selectDatacontainer(),
    dataContainerState => dataContainerState.name
  );

export default selectDatacontainer;

export { selectName };

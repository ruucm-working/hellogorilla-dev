/**
 * WP/WP Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'ComponentName' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'namespace/ComponentName/YOUR_ACTION_CONSTANT';
 */

export const SAMPLE_ACTION = 'DataContainer/WP/SAMPLE_ACTION'
export const GET_POSTS_DATA = 'DataContainer/WP/GET_POSTS_DATA'
export const GET_DATAS = 'DataContainer/WP/GET_DATAS'

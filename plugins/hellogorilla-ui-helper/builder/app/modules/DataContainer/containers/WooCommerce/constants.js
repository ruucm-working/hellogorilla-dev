/**
 * WC/WC Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'ComponentName' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'namespace/ComponentName/YOUR_ACTION_CONSTANT';
 */

export const SAMPLE_ACTION = 'DataContainer/WC/SAMPLE_ACTION'
export const GET_POSTS = 'DataContainer/WC/GET_POSTS'
export const ADD_TO_CART = 'DataContainer/WC/ADD_TO_CART'
export const CREATE_ORDER = 'DataContainer/WC/CREATE_ORDER'
export const GET_DATAS = 'DataContainer/WC/GET_DATAS'

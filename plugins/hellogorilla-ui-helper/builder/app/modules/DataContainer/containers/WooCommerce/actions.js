/**
 * Post Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SAMPLE_ACTION,
  GET_POSTS_DATA,
  GET_POSTS,
  ADD_TO_CART,
  CREATE_ORDER,
} from './constants'
import { log } from 'ruucm-util'

/**
 * Sample action description
 *
 * @param  {name} name param description
 *
 * @return {object} An action object with a type of SAMPLE_ACTION
 */
export function sampleAction(name) {
  return {
    type: SAMPLE_ACTION,
    name,
  }
}

export function getProducts(namespace, postData) {
  return {
    type: `${GET_POSTS}/${namespace}`,
    namespace: namespace,
    postData: postData,
  }
}

export function addToCart(namespace, postData, index) {
  return {
    type: `${ADD_TO_CART}/${namespace}`,
    namespace: namespace,
    postData: postData,
  }
}

export function createOrder(namespace, postData) {
  return {
    type: `${CREATE_ORDER}/${namespace}`,
    namespace: namespace,
    postData: postData,
  }
}

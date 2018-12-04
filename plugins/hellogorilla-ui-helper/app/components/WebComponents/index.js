import { log } from 'ruucm-util'

if (!window._babelPolyfill) {
  require('babel-polyfill')
}

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './store'

import MainNav from './MainNav'
import Footer from './Footer'

// import PostGrid from './PostGrid'
import SinglePost from './SinglePost'

import HelloGorillaShop from './HelloGorillaShop'
import ProductSummary from './ProductSummary'
import ProductDesc from './ProductDesc'

import UserList from './UserList'
import UserProfile from './UserProfile'

import Login from './Login'
import SignUp from './SignUp'
import NewArtist from './NewArtist'
import MyPage from './MyPage'
import Checkout from './Checkout'
import PageBanner from './PageBanner'

document.addEventListener('DOMContentLoaded', function() {
  // Redux
  const initialState = {}
  const store = configureStore(initialState)

  const shortcode_mainNav_containers = document.querySelectorAll(
    '.hellogorilla-main-nav'
  )
  const shortcode_footer_containers = document.querySelectorAll(
    '.hellogorilla-footer'
  )
  const shortcode_postGrid_containers = document.querySelectorAll(
    '.hellogorilla-post-grid'
  )
  const shortcode_singlePost_containers = document.querySelectorAll(
    '.hellogorilla-single-post'
  )
  const shortcode_shop_containers = document.querySelectorAll(
    '.hellogorilla-shop'
  )

  const shortcode_productSummary_containers = document.querySelectorAll(
    '.hellogorilla-product-summary'
  )
  const shortcode_productDesc_containers = document.querySelectorAll(
    '.hellogorilla-product-desc'
  )

  const shortcode_userList_containers = document.querySelectorAll(
    '.hellogorilla-user-list'
  )
  const shortcode_userProfile_containers = document.querySelectorAll(
    '.hellogorilla-user-profile'
  )

  const shortcode_logIn_containers = document.querySelectorAll(
    '.hellogorilla-login'
  )
  const shortcode_signUp_containers = document.querySelectorAll(
    '.hellogorilla-signup'
  )
  const shortcode_newArtist_containers = document.querySelectorAll(
    '.hellogorilla-new-artist'
  )
  const shortcode_myPage_containers = document.querySelectorAll(
    '.hellogorilla-mypage'
  )
  const shortcode_checkout_containers = document.querySelectorAll(
    '.hellogorilla-checkout'
  )

  const shortcode_pageBanner_containers = document.querySelectorAll(
    '.hellogorilla-page-banner'
  )

  for (let i = 0; i < shortcode_mainNav_containers.length; ++i) {
    const objectId = shortcode_mainNav_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <MainNav wpObject={window[objectId]} />
      </Provider>,
      shortcode_mainNav_containers[i]
    )
  }

  for (let i = 0; i < shortcode_footer_containers.length; ++i) {
    const objectId = shortcode_footer_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Footer wpObject={window[objectId]} />,
      shortcode_footer_containers[i]
    )
  }

  // for (let i = 0; i < shortcode_postGrid_containers.length; ++i) {
  //   const objectId = shortcode_postGrid_containers[i].getAttribute(
  //     'data-object-id'
  //   )
  //   ReactDOM.render(
  //     <Provider store={store}>
  //       <PostGrid wpObject={window[objectId]} />
  //     </Provider>,
  //     shortcode_postGrid_containers[i]
  //   )
  // }

  for (let i = 0; i < shortcode_singlePost_containers.length; ++i) {
    const objectId = shortcode_singlePost_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <SinglePost wpObject={window[objectId]} />
      </Provider>,
      shortcode_singlePost_containers[i]
    )
  }

  for (let i = 0; i < shortcode_shop_containers.length; ++i) {
    const objectId = shortcode_shop_containers[i].getAttribute('data-object-id')
    ReactDOM.render(
      <Provider store={store}>
        <HelloGorillaShop wpObject={window[objectId]} />
      </Provider>,
      shortcode_shop_containers[i]
    )
  }

  for (let i = 0; i < shortcode_productSummary_containers.length; ++i) {
    const objectId = shortcode_productSummary_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <ProductSummary wpObject={window[objectId]} />
      </Provider>,
      shortcode_productSummary_containers[i]
    )
  }

  for (let i = 0; i < shortcode_productDesc_containers.length; ++i) {
    const objectId = shortcode_productDesc_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <ProductDesc wpObject={window[objectId]} />
      </Provider>,
      shortcode_productDesc_containers[i]
    )
  }

  for (let i = 0; i < shortcode_userList_containers.length; ++i) {
    const objectId = shortcode_userList_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <UserList wpObject={window[objectId]} />
      </Provider>,
      shortcode_userList_containers[i]
    )
  }

  for (let i = 0; i < shortcode_userProfile_containers.length; ++i) {
    const objectId = shortcode_userProfile_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <UserProfile wpObject={window[objectId]} />
      </Provider>,
      shortcode_userProfile_containers[i]
    )
  }

  for (let i = 0; i < shortcode_logIn_containers.length; ++i) {
    const objectId = shortcode_logIn_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <Login wpObject={window[objectId]} />
      </Provider>,
      shortcode_logIn_containers[i]
    )
  }

  for (let i = 0; i < shortcode_signUp_containers.length; ++i) {
    const objectId = shortcode_signUp_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <SignUp wpObject={window[objectId]} />
      </Provider>,
      shortcode_signUp_containers[i]
    )
  }
  for (let i = 0; i < shortcode_newArtist_containers.length; ++i) {
    const objectId = shortcode_newArtist_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <NewArtist wpObject={window[objectId]} />
      </Provider>,
      shortcode_newArtist_containers[i]
    )
  }
  for (let i = 0; i < shortcode_myPage_containers.length; ++i) {
    const objectId = shortcode_myPage_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <MyPage wpObject={window[objectId]} />
      </Provider>,
      shortcode_myPage_containers[i]
    )
  }
  for (let i = 0; i < shortcode_checkout_containers.length; ++i) {
    const objectId = shortcode_checkout_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <Provider store={store}>
        <Checkout wpObject={window[objectId]} />
      </Provider>,
      shortcode_checkout_containers[i]
    )
  }

  for (let i = 0; i < shortcode_pageBanner_containers.length; ++i) {
    const objectId = shortcode_pageBanner_containers[i].getAttribute(
      'data-object-id'
    )
    ReactDOM.render(
      <PageBanner wpObject={window[objectId]} />,
      shortcode_pageBanner_containers[i]
    )
  }
})

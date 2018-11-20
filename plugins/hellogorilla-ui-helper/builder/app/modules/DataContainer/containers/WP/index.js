/**
 *
 * WP Redux Container
 *
 */

import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectName, selectWPData } from './selectors'
import { getDatas, getPosts } from './actions'
import {
  compose,
  withHandlers,
  withProps,
  lifecycle,
  mapProps,
  defaultProps,
} from 'recompose'

import { log } from 'ruucm-util'
import { isString } from 'lodash'
import WPAPI from 'wpapi'
import axios from 'axios'
import { DATA_BASE_URL, WP_ADMIN_ID, WP_ADMIN_PW } from '../../consts'

const WP = props => {
  return (
    <div>
      {React.Children.map(props.children, child => {
        let newChildProps = {
          ...props,
          ...child.props,
          style: child.props.style,
        }
        return isString(child.type)
          ? child
          : React.cloneElement(child, newChildProps)
      })}
    </div>
  )
}

// Component redux
const mapStateToProps = (state, ownProps) => {
  // make keys
  var key = ownProps.wpType + '_' + ownProps.sort + '_wpData'
  var obj = { name: selectName() }
  obj[key] = selectWPData(ownProps.wpType + '_' + ownProps.sort)

  obj['me'] = selectWPData('me' + '_' + ownProps.sort)
  obj['current_lang'] = selectWPData('current_lang')

  return createStructuredSelector(obj)
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
  }
}

// Component enhancer
const enhance = compose(
  withProps({
    wp: new WPAPI({
      endpoint: DATA_BASE_URL + 'wp-json',
      // This assumes you are using basic auth, as described further below
      username: WP_ADMIN_ID,
      password: WP_ADMIN_PW,
    }),
  }),
  mapProps(({ wp, ...rest }) => {
    wp.login = wp.registerRoute('custom', '/login')
    return {
      wp: wp,
      ...rest,
    }
  }),
  mapProps(({ wp, ...rest }) => {
    wp.menu = wp.registerRoute('custom', '/menu')
    return {
      wp: wp,
      ...rest,
    }
  }),
  mapProps(({ wp, ...rest }) => {
    wp.logout = wp.registerRoute('custom', '/logout')
    return {
      wp: wp,
      ...rest,
    }
  }),
  mapProps(({ wp, ...rest }) => {
    wp.currentLang = wp.registerRoute('custom', '/current-lang')
    return {
      wp: wp,
      ...rest,
    }
  }),
  withHandlers({
    getDatas: ({ nonce, ...props }) => options => {
      log('getDatas')
      log('props.wpType', props.wpType)
      log('options', options)
      const { dispatch, wp } = props
      if (props.wpType == 'menu') {
        wp.menu()
          .then(menus => {
            dispatch(getDatas(props.wpType + '_' + props.sort, menus))
          })
          .catch(err => {
            log('err', err)
          })
      } else if (props.wpType == 'user') {
        log('wp', wp)
        log('nonce', nonce)

        var newWp = new WPAPI({
          endpoint: DATA_BASE_URL + 'wp-json',
          // This assumes you are using basic auth, as described further below
          username: WP_ADMIN_ID,
          password: WP_ADMIN_PW,
        })

        log('newWp', newWp)
        // .setHeaders('X-WP-Nonce', nonce)
        newWp
          .users()
          .setHeaders('X-WP-Nonce', nonce)
          .param('roles', options.role)
          .param('search', options.search)
          .then(datas => {
            dispatch(getDatas(props.wpType + '_' + props.sort, datas))
          })
          .catch(err => {
            log('err', err)
          })
      } else if (props.wpType == 'singleUser') {
        wp.users()
          .setHeaders('X-WP-Nonce', nonce)
          .id(options.userId)
          .embed()
          .then(datas => {
            log('datas', datas)
            dispatch(getDatas(props.wpType + '_' + props.sort, datas))
          })
          .catch(err => {
            log('err', err)
          })
      } else if (props.wpType == 'post') {
        wp.posts()
          .param(
            'categories',
            options.category == 'all' ? '' : options.category
          )
          .perPage(100)
          .embed()
          .then(menus => {
            dispatch(getDatas(props.wpType + '_' + props.sort, menus))
          })
          .catch(err => {
            log('err', err)
          })
      } else if (props.wpType == 'singlePost') {
        wp.posts()
          .id(options.postId)
          .embed()
          .then(data => {
            dispatch(getDatas(props.wpType + '_' + props.sort, data))
          })
          .catch(err => {
            log('err', err)
          })
      }
    },
    getPosts: props => cat => {
      const { dispatch, wp } = props
      if (props.sort == 'popular')
        wp.posts()
          .perPage(100)
          .param('categories', props.wpType == 'all' ? '' : props.wpType)
          .embed()
          .then(posts => {
            function getNumber(key) {
              if (key['post-meta-fields'].wpb_post_views_count)
                return Number(key['post-meta-fields'].wpb_post_views_count[0])
              else return -1
            }

            function compare(a, b) {
              let aNum = getNumber(a)
              let bNum = getNumber(b)
              if (aNum > bNum) return -1
              if (aNum < bNum) return 1
              return 0
            }

            posts.sort(compare)
            dispatch(getPosts(props.wpType + '_' + props.sort, posts))
          })
          .catch(err => {
            log('err', err)
          })
      else
        wp.posts()
          .param('categories', props.wpType == 'all' ? '' : props.wpType)
          .embed()
          .then(posts => {
            dispatch(getPosts(props.wpType + '_' + props.sort, posts))
          })
          .catch(err => {
            log('err', err)
          })
    },
    wpLogin: props => (values, afterSuccess) => {
      const { dispatch, wp } = props
      wp.login()
        .create({
          id: values.username,
          password: values.password,
        })
        .then(res => {
          afterSuccess(res)
        })
        .catch(err => {
          // alert('에러 - ' + err.code)
          alert('에러 - 정보를 다시 확인해주세요')
        })
    },
    wpLogout: props => afterSuccess => {
      const { wp } = props
      wp.logout()
        .create()
        .then(res => {
          log('res', res)
          afterSuccess()
        })
        .catch(err => {
          log('err', err)
        })
    },
    wpUpload: props => (data, afterSuccess) => {
      const { dispatch, wp, nonce } = props
      wp.media()
        // Specify a path to the file you want to upload, or a Buffer
        .file(data)
        .setHeaders('X-WP-Nonce', nonce)
        .create()
        .then(res => {
          log('res', res)
          afterSuccess(res.source_url)
        })
        .catch(err => {
          log('err', err)
        })
    },

    getMe: props => () => {
      const { dispatch, wp } = props
      log('get Me!', props)
      // get Current LoggedIn user
      axios({
        method: 'post',
        url: DATA_BASE_URL + 'wp-json/wp/v2/users/me',
        headers: { 'X-WP-Nonce': props.nonce },
      })
        .then(res => {
          dispatch(getDatas('me' + '_' + props.sort, res))
        })
        .catch(err => {
          log('err(getMe)', err)
        })
    },

    getCurrentLang: props => () => {
      const { dispatch, wp } = props

      var pathString = window.location.pathname.slice(-4)
      log('window.location', window.location.pathname)

      if (pathString == '-en/') dispatch(getDatas('current_lang', 'en'))
      else dispatch(getDatas('current_lang', 'ko'))

      // var pathArray = window.location.pathname.split('/')

      // if (pathArray[1] == 'en') dispatch(getDatas('current_lang', 'en'))
      // else dispatch(getDatas('current_lang', 'ko'))

      // wp.currentLang()
      //   .then(res => {
      //     log('res(currentLang)', res)
      //   })
      //   .catch(err => {
      //     log('err(currentLang)', err)
      //   })
    },
  }),
  withHandlers({
    wpSignUp: props => (values, role, afterSuccess) => {
      const { dispatch, wp, nonce } = props
      log('nonce', nonce)

      const EmptyCheck = val => {
        return val ? val : ''
      }

      let meta = {
        short_desc: EmptyCheck(values.short_desc),
        long_desc: EmptyCheck(values.long_desc),
        homepage: EmptyCheck(values.homepage),
        facebook: EmptyCheck(values.facebook),
        instagram: EmptyCheck(values.instagram),
        img_cover: EmptyCheck(values.img_cover),
        img_profile: EmptyCheck(values.img_profile),
        artist_video: EmptyCheck(values.artist_video),
        portfolio_01: EmptyCheck(values.portfolio_01),
        portfolio_02: EmptyCheck(values.portfolio_02),
        portfolio_03: EmptyCheck(values.portfolio_03),
      }

      log('meta', meta)
      if (role == 'customer') {
        wp.users()
          .setHeaders('X-WP-Nonce', nonce)
          .create({
            name: values.username,
            username: values.email,
            email: values.email,
            password: values.password,
            roles: 'shop_manager',
            meta: meta,
          })
          .then(res => {
            if (res.id > 0) {
              // success
              props.wpLogin(
                {
                  username: values.email,
                  password: values.password,
                },
                afterSuccess
              )
            }
          })
          .catch(err => {
            log('err', err)
            alert('err - ' + err.message)
          })
      } else if (role == 'editor') {
        wp.users()
          .setHeaders('X-WP-Nonce', nonce)
          .create({
            username: values.username,
            email: values.email,
            password: values.password,
            roles: role,
            nickname: values.nickname,
            meta: meta,
          })
          .then(res => {
            if (res.id > 0) {
              afterSuccess(res)
            }
          })
          .catch(err => {
            log('err', err)
          })
      }
    },
  })
)

export default defaultProps({ sort: 'recent' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(enhance(WP))
)

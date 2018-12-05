/**
 *
 * WooCommerce Redux Container
 *
 */

import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectName, selectPostData, selectWCData } from './selectors'
import { getProducts, addToCart, createOrder, getDatas } from './actions'
import {
  compose,
  withHandlers,
  withProps,
  defaultProps,
  mapProps,
  lifecycle,
} from 'recompose'
import { log } from 'ruucm-util'
import { isString } from 'lodash'

// import WPAPI from 'wpapi'
import WooCommerceAPI from 'woocommerce-api'
import WPAPI from 'wpapi'

import { DATA_BASE_URL, WP_ADMIN_ID, WP_ADMIN_PW } from '../../consts'

const WooCommerce = props => {
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
  var key = ownProps.dataType + '_' + ownProps.category

  var obj = { name: selectName(), cart_items: selectWCData() }
  obj[key] = selectPostData(key)

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
    wc: new WooCommerceAPI({
      url: DATA_BASE_URL,
      consumerKey: 'ck_547e360fd8308a0af390669ff3da1e9db567a02f',
      consumerSecret: 'cs_8da9d8111f290100aa131f11edfe05f225d2e114',
      wpAPI: true,
      version: 'wc/v2',
    }),
    wp: new WPAPI({
      endpoint: DATA_BASE_URL + 'wp-json',
      // This assumes you are using basic auth, as described further below
      username: WP_ADMIN_ID,
      password: WP_ADMIN_PW,
    }),
  }),
  mapProps(({ wp, ...rest }) => {
    wp.updateFixedCart = wp.registerRoute('custom', '/update-fixed-cart')
    return {
      wp: wp,
      ...rest,
    }
  }),
  // withHandlers({
  //   clean: props => () => {
  //     const { dispatch } = props
  //     dispatch(getProducts(dataType, null))
  //   },
  // }),
  withHandlers({
    getProductById: props => (productId, afterSuccess) => {
      const { dispatch, wc, dataType, wcType, sort, category } = props
      wc.getAsync('products/' + productId)
        .then(res => {
          let result = JSON.parse(res.toJSON().body)
          afterSuccess && afterSuccess(result)

          // dispatch(getDatas(wcType, result, sort, category))
          return result
        })
        .catch(err => {
          log('err', err)
        })
    },
    getCartItems: props => afterSuccess => {
      const { dispatch, wc } = props

      let result = JSON.parse(localStorage.getItem('lsCart')) || []
      log('getCartItems!', result)
      setTimeout(() => {
        dispatch(getDatas('cart', result)) // dispatch value with key 'cart'
      }, 0)

      afterSuccess && afterSuccess(result)
    },
    getCartItemsByAPI: props => afterSuccess => {
      const { dispatch, wc } = props
      log('getCartItemsByAPI!')
      wc.get('cart', function(err, data, res) {
        let result = JSON.parse(res)
        // dispatch(getDatas('cart', result, props.sort, props.category)) // dispatch value with key 'cart'
        afterSuccess(result)
      })
    },
    updateCartByAPI: props => (
      cart_item_key,
      quantity,
      afterSuccess,
      isClear
    ) => {
      const { dispatch, wc, wcType } = props
      var newCartItemData = {
        cart_item_key: cart_item_key,
        quantity: quantity,
      }

      const update = () => {
        wc.post('cart/cart-item', newCartItemData, (err, data, res) => {
          log('data', data)
          if (!err) {
            log('update complete', res)
            afterSuccess(res)
          } else log('err', err)
        })
      }

      if (quantity == MAX_CART_NUM && !isClear) {
        // ask once more
        var r = confirm('장바구니에서 아이템을 삭제 합니다')
        if (r == true) update()
      } else if (quantity > 0) {
        // update! when quantity is not MAX_CART_NUM
        update()
      } else if (quantity <= 0) alert('아이템 수량은 최소 한개 입니다.')
    },
  }),
  withHandlers({
    getProducts: props => options => {
      const { dispatch, wc, dataType, category } = props
      log('props', props)
      log('options', options)
      if (dataType == 'product') {
        let optionUrl = options
          ? 'products' + '?category=' + options.category
          : 'products'
        wc.getAsync(optionUrl)
          .then(result => {
            log('result', result)
            log('category', category)
            let datas = JSON.parse(result.toJSON().body)
            dispatch(getProducts(dataType + '_' + category, datas))
          })
          .catch(err => {
            log('err', err)
          })
      } else if (dataType == 'singleProduct') {
        log('fetch!')
        wc.getAsync('products/' + options.productId)
          .then(result => {
            log('result', result)
            let datas = JSON.parse(result.toJSON().body)
            log('datas', datas)
            dispatch(getProducts(dataType + '_' + category, datas))
          })
          .catch(err => {
            log('err', err)
          })
      }
    },

    addToCart: ({ getProductById, getCartItems, ...props }) => (
      productId,
      quantity
    ) => {
      getProductById(productId, res => {
        var oldItems = JSON.parse(localStorage.getItem('lsCart')) || []
        var found = -1
        // check if productId is already in oldItems
        for (var i = 0; i < oldItems.length; i++) {
          if (oldItems[i].id == productId) {
            found = i
            break
          }
        }
        log('oldItems', oldItems)

        if (found >= 0) {
          log('found!', found)
          // just add quantity of that
          var newQuantity = oldItems[found].quantity + quantity
          oldItems[found] = {
            ...oldItems[found],
            quantity: newQuantity,
            line_total: Number(res.price) * newQuantity,
          }
        } else {
          // new item push
          oldItems.push({
            quantity: quantity,
            ...res,
            // common cart props
            original_price: res.price,
            line_total: Number(res.price) * quantity,
            product_name: res.name,
            product_id: res.id,
            // meta_data: {
            //   item_color: res.meta_data.filter(obj => {
            //     return obj.key === 'item_color'
            //   })[0].value,
            //   size_fit: res.meta_data.filter(obj => {
            //     return obj.key === 'size_fit'
            //   })[0].value,
            // },
          })
        }

        localStorage.setItem('lsCart', JSON.stringify(oldItems))

        log('oldItems', oldItems)

        props.dispatch(getDatas('cart', oldItems, props.sort, props.category)) // dispatch value with key 'cart'
        alert('장바구니에 상품이 담겼습니다')
      })
    },
    updateFixedCart: ({ wp, ...props }) => fixedItems => {
      wp.updateFixedCart()
        .create({
          fixedItems: fixedItems,
        })
        .then(res => {
          log('res(updateFixedCart)', res)
        })
        .catch(err => {
          log('err', err)
        })
    },
    addToCartByAPI: ({ getCartItems, ...props }) => (
      productId,
      variationId,
      quantity,
      isDirectCheckout
    ) => {
      const { wc } = props
      var cartData = {
        product_id: productId,
        quantity: quantity,
        variation_id: variationId,
      }
      wc.post('cart/add', cartData, (err, data, res) => {
        if (!err) {
          let result = JSON.parse(res)
          log('result(addToCart)', result)

          if (result.data.status == 500) {
            if (result.code == 'wc_cart_rest_product_out_of_stock')
              alert('에러 - 해당 상품의 재고가 부족합니다')
            else alert('에러 - ' + result.message)
          } else {
            getCartItems(() => void 0)
            isDirectCheckout
              ? (window.location = '/cnyttan-cart')
              : alert('장바구니에 상품이 담겼습니다')
          }
        } else log('err', err)
      })
    },
    createOrder: props => (orderData, successMessage) => {
      log('createOrder')
      const { dispatch, wc, clean, dataType } = props

      var defaultData = {
        payment_method: 'bacs',
        payment_method_title: 'Direct Bank Transfer',
        set_paid: true,
        billing: {
          first_name: 'John(default data)',
          last_name: 'Doe',
          address_1: '969 Market',
          address_2: '',
          city: 'San Francisco',
          state: 'CA',
          postcode: '94103',
          country: 'US',
          email: 'john.doe@example.com',
          phone: '(555) 555-5555',
        },
        shipping: {
          first_name: 'John',
          last_name: 'Doe',
          address_1: '969 Market',
          address_2: '',
          city: 'San Francisco',
          state: 'CA',
          postcode: '94103',
          country: 'US',
        },
        line_items: [
          {
            product_id: 93,
            quantity: 2,
          },
          {
            product_id: 22,
            variation_id: 23,
            quantity: 1,
          },
        ],
      }

      wc.post(
        'orders',
        orderData ? orderData : defaultData,
        (err, data, res) => {
          if (!err) {
            alert(successMessage)
            let result = JSON.parse(res)
            dispatch(createOrder(dataType, result))
          } else log('err', err)
        }
      )
    },
  }),
  lifecycle({
    componentDidMount() {
      log('this.props(WooCommerce)', this.props)
    },
  })
)

export default defaultProps({ sort: 'recent', category: 'all' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(enhance(WooCommerce))
)

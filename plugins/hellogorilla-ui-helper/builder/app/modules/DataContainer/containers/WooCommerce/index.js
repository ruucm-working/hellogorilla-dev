/**
 *
 * WooCommerce Redux Container
 *
 */

import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectName, selectPostData } from "./selectors";
import { getProducts, addToCart, createOrder } from "./actions";
import {
  compose,
  withHandlers,
  withProps,
  defaultProps,
  mapProps
} from "recompose";
import { log } from "ruucm-util";
import { isString } from "lodash";

// import WPAPI from 'wpapi'
import WooCommerceAPI from "woocommerce-api";

import { DATA_BASE_URL } from "../../consts";

const WooCommerce = props => {
  return (
    <div>
      {React.Children.map(props.children, child => {
        let newChildProps = {
          ...props,
          ...child.props,
          style: child.props.style
        };
        return isString(child.type)
          ? child
          : React.cloneElement(child, newChildProps);
      })}
    </div>
  );
};

// Component redux
const mapStateToProps = (state, ownProps) => {
  var key = ownProps.dataType + "_" + ownProps.category;
  var obj = { name: selectName() };
  obj[key] = selectPostData(key);

  return createStructuredSelector(obj);
};
function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch
  };
}

// Component enhancer
const enhance = compose(
  withProps({
    wc: new WooCommerceAPI({
      url: DATA_BASE_URL,
      consumerKey: "ck_547e360fd8308a0af390669ff3da1e9db567a02f",
      consumerSecret: "cs_8da9d8111f290100aa131f11edfe05f225d2e114",
      wpAPI: true,
      version: "wc/v2"
    })
  }),
  // mapProps(({ wp, ...rest }) => {
  //   wp.harbor_curation = wp.registerRoute('wp/v2', '/harbor_curation/(?P<id>)')
  //   return {
  //     wp: wp,
  //     ...rest,
  //   }
  // }),
  // withHandlers({
  //   clean: props => () => {
  //     const { dispatch } = props
  //     dispatch(getProducts(dataType, null))
  //   },
  // }),
  withHandlers({
    getProducts: props => options => {
      const { dispatch, wc, dataType, category } = props;
      log("props", props);
      log("options", options);
      if (dataType == "product") {
        let optionUrl = options
          ? "products" + "?category=" + options.category
          : "products";
        wc.getAsync(optionUrl)
          .then(result => {
            log("result", result);
            log("category", category);
            let datas = JSON.parse(result.toJSON().body);
            dispatch(getProducts(dataType + "_" + category, datas));
          })
          .catch(err => {
            log("err", err);
          });
      } else if (dataType == "singleProduct") {
        log("fetch!");
        wc.getAsync("products/" + options.productId)
          .then(result => {
            log("result", result);
            let datas = JSON.parse(result.toJSON().body);
            log("datas", datas);
            dispatch(getProducts(dataType + "_" + category, datas));
          })
          .catch(err => {
            log("err", err);
          });
      }
    },
    addToCart: props => (productId, variationId, optionSlug) => {
      const { dispatch, wc, clean, dataType } = props;
      log("addToCart!");
      log("productId", productId);
      log("variationId", variationId);

      var orderData = {
        product_id: productId,
        quantity: 1,
        variation_id: variationId
      };
      // clear cart first
      wc.post("cart/clear", (err, data, res) => {
        log("data", data);
        if (!err) {
          log("res", res);
        } else log("err", err);
      });

      wc.post("cart/add", orderData, (err, data, res) => {
        log("data", data);
        if (!err) {
          let result = JSON.parse(res);
          dispatch(addToCart(dataType, result));
          log("result", result);
          // alert('상품이 선택 되었습니다')
          // window.location = DATA_BASE_URL + '/cart'
        } else log("err", err);
      });

      // //d-harborschool.test//?add-to-cart=48&variation_id=105&attribute_pa_dayorend=weekday-a
      // http: alert('날짜가 선택 되었습니다 \n\n결제 페이지로 이동합니다.')

      // window.location =
      //   DATA_BASE_URL +
      //   '//?add-to-cart=' +
      //   productId +
      //   '&variation_id=' +
      //   variationId +
      //   '&quantity=1' +
      //   '&attribute_pa_dayorend=' +
      //   optionSlug
    },
    createOrder: props => (orderData, successMessage) => {
      log("createOrder");
      const { dispatch, wc, clean, dataType } = props;

      var defaultData = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
          first_name: "John(default data)",
          last_name: "Doe",
          address_1: "969 Market",
          address_2: "",
          city: "San Francisco",
          state: "CA",
          postcode: "94103",
          country: "US",
          email: "john.doe@example.com",
          phone: "(555) 555-5555"
        },
        shipping: {
          first_name: "John",
          last_name: "Doe",
          address_1: "969 Market",
          address_2: "",
          city: "San Francisco",
          state: "CA",
          postcode: "94103",
          country: "US"
        },
        line_items: [
          {
            product_id: 93,
            quantity: 2
          },
          {
            product_id: 22,
            variation_id: 23,
            quantity: 1
          }
        ]
      };

      wc.post(
        "orders",
        orderData ? orderData : defaultData,
        (err, data, res) => {
          if (!err) {
            alert(successMessage);
            let result = JSON.parse(res);
            dispatch(createOrder(dataType, result));
          } else log("err", err);
        }
      );
    }
  })
);

export default defaultProps({ sort: "recent", category: "all" })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(enhance(WooCommerce))
);

webpackHotUpdate(0,{

/***/ 2814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(45);

var _react2 = _interopRequireDefault(_react);

var _ruucmUtil = __webpack_require__(136);

var _lodash = __webpack_require__(316);

var _styledComponents = __webpack_require__(135);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _layouts = __webpack_require__(1062);

var _LoadingSpinners = __webpack_require__(1722);

var _centering = __webpack_require__(1828);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'Grid__Title'
})(['font-family:NanumSquareWeb;font-weight:800;font-size:120px;color:#38393c;']); /**
                                                                                    *
                                                                                    * Grid
                                                                                    *
                                                                                    */

var Cateogry = _styledComponents2.default.ul.withConfig({
  displayName: 'Grid__Cateogry'
})(['position:relative;height:93px;']);
var CateogryItem = _styledComponents2.default.li.withConfig({
  displayName: 'Grid__CateogryItem'
})(['']);

var LoadingWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Grid__LoadingWrapper'
})(['']);
var ContentsWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Grid__ContentsWrapper'
})(['max-width:1050px;margin:0 auto;']);

var Contents = _styledComponents2.default.div.withConfig({
  displayName: 'Grid__Contents'
})(['']);

var Grid = function Grid(props) {
  var contents = props[props.postType];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      Title,
      null,
      '\uBAA8\uC544\uBCF4\uAE30'
    ),
    (0, _lodash.isNil)(contents) ? _react2.default.createElement(
      LoadingWrapper,
      null,
      _react2.default.createElement(_LoadingSpinners.LittleFerryLoader, { waveColor: '#525EF6' })
    ) : (0, _lodash.isEmpty)(contents) ? _react2.default.createElement(
      LoadingWrapper,
      null,
      _react2.default.createElement(
        'div',
        null,
        '\uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.'
      )
    ) // No Data!
    : _react2.default.createElement(
      ContentsWrapper,
      null,
      _react2.default.createElement(
        Cateogry,
        null,
        _react2.default.createElement(
          _centering.Center,
          { axis: 'x' },
          _react2.default.createElement(
            CateogryItem,
            { onClick: function onClick() {
                return props.getPosts({ category: 4 });
              } },
            'eat'
          ),
          _react2.default.createElement(
            CateogryItem,
            { onClick: function onClick() {
                return props.getPosts({ category: 5 });
              } },
            'life'
          ),
          _react2.default.createElement(
            CateogryItem,
            { onClick: function onClick() {
                return props.getPosts({ category: 6 });
              } },
            'growth'
          ),
          _react2.default.createElement(
            CateogryItem,
            { onClick: function onClick() {
                return props.getPosts({ category: 7 });
              } },
            'love'
          ),
          _react2.default.createElement(
            CateogryItem,
            { onClick: function onClick() {
                return props.getPosts({ category: 8 });
              } },
            'tools'
          )
        )
      ),
      _react2.default.createElement(
        _layouts.Row,
        null,
        (0, _lodash.map)(contents, function (data, id) {
          return _react2.default.createElement(
            _layouts.Column,
            { col: '6', key: id },
            data.title.rendered
          );
        })
      )
    )
  );
};

exports.default = Grid;

/***/ })

})
//# sourceMappingURL=0.6f4ad6d84d597e6c6b9d.hot-update.js.map
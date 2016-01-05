webpackHotUpdate(0,{

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Hr = __webpack_require__(216);

	var _Hr2 = _interopRequireDefault(_Hr);

	var _ImageWrapper = __webpack_require__(225);

	var _ImageWrapper2 = _interopRequireDefault(_ImageWrapper);

	var _reactRouter = __webpack_require__(177);

	var _ExecutionEnvironment = __webpack_require__(9);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Related = (function (_React$Component) {
	  _inherits(Related, _React$Component);

	  function Related(p) {
	    _classCallCheck(this, Related);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Related).call(this, p));

	    _this.state = {
	      related: []
	    };
	    if (_ExecutionEnvironment2.default.canUseDOM) {
	      fetch('/articles.json?relatedTo=' + _this.props._for).then(function (data) {
	        return data.json();
	      }).then(function (data) {
	        return _this.setState({
	          related: data.data.map(function (e) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'col-md-4', key: e.slug },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/' + e.category + '/' + e.slug, style: { textDecoration: 'none' } },
	                _react2.default.createElement(_ImageWrapper2.default, { src: e.header_image_url, alt: e.title, height: '260px' }),
	                _react2.default.createElement(
	                  'h2',
	                  { style: { fontWeight: 100, textAlign: 'center' } },
	                  e.title
	                ),
	                _react2.default.createElement(
	                  'h4',
	                  { style: { fontWeight: 100, textAlign: 'center' } },
	                  e.author_name
	                )
	              )
	            );
	          })
	        });
	      });
	    }
	    return _this;
	  }

	  _createClass(Related, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(_Hr2.default, null),
	        _react2.default.createElement(
	          'h1',
	          { style: { fontFamily: 'chardons', textAlign: 'center', fontWeight: 100 } },
	          ' Related articles you may want to read '
	        ),
	        this.state.related
	      );
	    }
	  }]);

	  return Related;
	})(_react2.default.Component);

	exports.default = Related;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ }

})
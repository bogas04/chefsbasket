webpackHotUpdate(0,{

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(177);

	var _ImageWrapper = __webpack_require__(225);

	var _ImageWrapper2 = _interopRequireDefault(_ImageWrapper);

	var _ExecutionEnvironment = __webpack_require__(9);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TrendingTopics = (function (_React$Component) {
	  _inherits(TrendingTopics, _React$Component);

	  function TrendingTopics(p) {
	    _classCallCheck(this, TrendingTopics);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrendingTopics).call(this, p));

	    _this.state = { topics: [] };
	    if (_ExecutionEnvironment2.default.canUseDOM) {
	      fetch('/articles.json?trending=1').then(function (data) {
	        return data.json();
	      }).then(function (data) {
	        return _this.setState({ topics: data.data.slice(0, 2) });
	      });
	    } else {
	      // server side rendering
	      // Option 1: Consume the REST API Synchronously.
	      // Option 2: Use the function that API route uses. (much better approach)
	    }
	    return _this;
	  }

	  _createClass(TrendingTopics, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'h1',
	          { style: { fontFamily: 'chardons', fontWeight: '100', textAlign: 'center', marginBottom: '20px' } },
	          'Trending Topics'
	        ),
	        this.state.topics.length > 0 ? this.state.topics.map(function (t) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-md-6', key: t.slug },
	            _react2.default.createElement(
	              Topic,
	              {
	                image: t.header_image,
	                author: t.author_name,
	                url: '/' + t.category + '/' + t.slug,
	                likes: t.likes,
	                date: t.created_at
	              },
	              t.title
	            )
	          );
	        }) : _react2.default.createElement(
	          'h4',
	          { className: 'text-center' },
	          ' Nothing to show '
	        )
	      );
	    }
	  }]);

	  return TrendingTopics;
	})(_react2.default.Component);

	exports.default = TrendingTopics;

	var Topic = (function (_React$Component2) {
	  _inherits(Topic, _React$Component2);

	  function Topic() {
	    _classCallCheck(this, Topic);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Topic).apply(this, arguments));
	  }

	  _createClass(Topic, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: this.props.url, style: { textDecoration: 'none' } },
	          _react2.default.createElement(_ImageWrapper2.default, { src: this.props.image, alt: this.props.children }),
	          _react2.default.createElement(
	            'h2',
	            { style: { fontWeight: '100', textAlign: 'center' } },
	            this.props.children
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-3 text-left' },
	            _react2.default.createElement('span', { style: { color: 'green' }, className: 'glyphicon glyphicon-time' }),
	            ' ',
	            this.props.date
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6 text-center' },
	            _react2.default.createElement(
	              'span',
	              { style: { fontWeight: '100', textAlign: 'center', fontSize: '120%' } },
	              this.props.author
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-3 text-right' },
	            _react2.default.createElement('span', { style: { color: 'red' }, className: 'glyphicon glyphicon-heart' }),
	            ' ',
	            this.props.likes
	          )
	        )
	      );
	    }
	  }]);

	  return Topic;
	})(_react2.default.Component);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ }

})
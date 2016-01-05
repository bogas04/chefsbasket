webpackHotUpdate(0,{

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRemarkable = __webpack_require__(237);

	var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

	var _ExecutionEnvironment = __webpack_require__(9);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _Banner = __webpack_require__(217);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _Related = __webpack_require__(299);

	var _Related2 = _interopRequireDefault(_Related);

	var _Hr = __webpack_require__(216);

	var _Hr2 = _interopRequireDefault(_Hr);

	var _Content = __webpack_require__(228);

	var _Content2 = _interopRequireDefault(_Content);

	var _Tag = __webpack_require__(300);

	var _Tag2 = _interopRequireDefault(_Tag);

	var _NotFound = __webpack_require__(301);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Article = (function (_React$Component) {
	  _inherits(Article, _React$Component);

	  function Article(p) {
	    _classCallCheck(this, Article);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Article).call(this, p));

	    _this.state = { data: _this.props.default || _react2.default.createElement(
	        'h1',
	        { className: 'text-center' },
	        ' Loading ... '
	      ) };
	    if (!_this.props.loadStatic && _ExecutionEnvironment2.default.canUseDOM) {
	      // dynamic loading/client loading
	      fetch('/articles.json?slug=' + _this.props.params.slug).then(function (data) {
	        return data.json();
	      }).then(function (data) {
	        return _this.setState({ data: _this.fillIn(data.data.category, data.data) });
	      }).catch(function (e) {
	        return _this.setState({ data: _react2.default.createElement(_NotFound2.default, null) });
	      });
	    }
	    return _this;
	  }

	  _createClass(Article, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      if (this.props.loadStatic) {
	        // static loading/server loading
	        if (this.props.data) {
	          this.setState({
	            data: this.fillIn(this.props.data.category || 'travel', this.props.data)
	          });
	        }
	      }
	    }
	  }, {
	    key: 'fillIn',
	    value: function fillIn(layout, data) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Banner2.default,
	          { title: data.header_title, image: data.header_image_url },
	          _react2.default.createElement(
	            'p',
	            null,
	            data.header_summary
	          ),
	          layout === 'recipes' && _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'h3',
	              { style: { fontWeight: 100 } },
	              ' Difficulty: ',
	              data.difficulty,
	              ' '
	            ),
	            _react2.default.createElement(
	              'h4',
	              { style: { fontWeight: 100 } },
	              ' Serves: ',
	              data.serves,
	              ' '
	            )
	          )
	        ),
	        layout === 'recipes' ? _react2.default.createElement(
	          _Content2.default,
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            ' ',
	            data.title,
	            ' '
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-4' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Ingredients'
	            ),
	            _react2.default.createElement(_reactRemarkable2.default, { source: data.ingredients }),
	            _react2.default.createElement(
	              'h3',
	              null,
	              ' Tags '
	            ),
	            Array.isArray(data.tags) && data.tags.map(function (e) {
	              return _react2.default.createElement(_Tag2.default, { to: e, key: e });
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-8' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Preparation'
	            ),
	            _react2.default.createElement(_reactRemarkable2.default, { source: data.procedure })
	          )
	        ) : _react2.default.createElement(
	          _Content2.default,
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            ' ',
	            data.title,
	            ' '
	          ),
	          _react2.default.createElement(_reactRemarkable2.default, { source: data.body }),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'h3',
	              null,
	              ' Tags '
	            ),
	            Array.isArray(data.tags) && data.tags.map(function (e) {
	              return _react2.default.createElement(_Tag2.default, { to: e, key: e });
	            })
	          )
	        ),
	        _react2.default.createElement(_Related2.default, { _for: this.props.params ? this.props.params.slug : null })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.state.data;
	    }
	  }]);

	  return Article;
	})(_react2.default.Component);

	exports.default = Article;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ }

})
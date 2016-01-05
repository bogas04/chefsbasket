webpackHotUpdate(0,{

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Card = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TrendingTopics = __webpack_require__(224);

	var _TrendingTopics2 = _interopRequireDefault(_TrendingTopics);

	var _ExecutionEnvironment = __webpack_require__(9);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Card = exports.Card = (function (_React$Component) {
	  _inherits(Card, _React$Component);

	  function Card(props) {
	    _classCallCheck(this, Card);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));

	    _this.styles = {
	      wrapper: {
	        height: _this.props.height || '413px',
	        width: _this.props.width || '385px',
	        margin: '5px',
	        overflow: 'auto',
	        float: 'left'
	      },
	      title: {
	        fontSize: '120%',
	        color: 'grey',
	        padding: '5px',
	        textAlign: 'center'
	      },
	      description: {
	        padding: '5px',
	        height: '90px'
	      },
	      imageWrapper: {
	        height: '200px',
	        backgroundColor: 'grey',
	        textAlign: 'center',
	        overflow: 'hidden',
	        boxShadow: '0 0 10px 5px black inset'
	      }
	    };
	    return _this;
	  }

	  _createClass(Card, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: this.styles.wrapper },
	        _react2.default.createElement(
	          'a',
	          { href: this.props.url },
	          _react2.default.createElement(
	            'div',
	            { style: this.styles.imageWrapper, className: 'image-wrapper' },
	            _react2.default.createElement('img', { style: { width: '100%' }, src: this.props.image, alt: this.props.title })
	          ),
	          _react2.default.createElement(
	            'p',
	            { style: this.styles.title },
	            this.props.title
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          { style: this.styles.description },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Card;
	})(_react2.default.Component);

	var CardList = (function (_React$Component2) {
	  _inherits(CardList, _React$Component2);

	  function CardList(p) {
	    _classCallCheck(this, CardList);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(CardList).call(this, p));

	    _this2.state = { cardData: null };
	    if (_ExecutionEnvironment2.default.canUseDOM) {
	      fetch(_this2.props.dataSource).then(function (d) {
	        return d.json();
	      }).then(function (e) {
	        return _this2.setState({
	          cardData: e.data
	        });
	      });
	    }
	    return _this2;
	  }

	  _createClass(CardList, [{
	    key: 'render',
	    value: function render() {
	      var cards = undefined;
	      if (this.state.cardData) {
	        if (this.state.cardData.length > 0) {
	          cards = this.state.cardData.map(function (e) {
	            return _react2.default.createElement(
	              Card,
	              {
	                image: e.header_image_url,
	                url: '/' + e.category + '/' + e.slug,
	                title: e.title,
	                key: e.title + Math.random() },
	              e.header_summary
	            );
	          });
	        } else {
	          cards = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'h2',
	              null,
	              ' No posts to show :( Browse through trending topics '
	            ),
	            _react2.default.createElement(_TrendingTopics2.default, null)
	          );
	        }
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        cards
	      );
	    }
	  }]);

	  return CardList;
	})(_react2.default.Component);

	exports.default = CardList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ }

})
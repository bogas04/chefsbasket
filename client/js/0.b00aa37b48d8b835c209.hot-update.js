webpackHotUpdate(0,{

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(177);

	var _App = __webpack_require__(208);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(215);

	var _Home2 = _interopRequireDefault(_Home);

	var _Entertainment = __webpack_require__(227);

	var _Entertainment2 = _interopRequireDefault(_Entertainment);

	var _People = __webpack_require__(229);

	var _People2 = _interopRequireDefault(_People);

	var _Travel = __webpack_require__(230);

	var _Travel2 = _interopRequireDefault(_Travel);

	var _RecipeKit = __webpack_require__(231);

	var _RecipeKit2 = _interopRequireDefault(_RecipeKit);

	var _Ingredients = __webpack_require__(232);

	var _Ingredients2 = _interopRequireDefault(_Ingredients);

	var _Recipes = __webpack_require__(233);

	var _Recipes2 = _interopRequireDefault(_Recipes);

	var _Login = __webpack_require__(234);

	var _Login2 = _interopRequireDefault(_Login);

	var _Search = __webpack_require__(235);

	var _Search2 = _interopRequireDefault(_Search);

	var _Article = __webpack_require__(236);

	var _Article2 = _interopRequireDefault(_Article);

	var _Admin = __webpack_require__(302);

	var _Admin2 = _interopRequireDefault(_Admin);

	var _AdminHome = __webpack_require__(303);

	var _AdminHome2 = _interopRequireDefault(_AdminHome);

	var _AddArticle = __webpack_require__(304);

	var _AddArticle2 = _interopRequireDefault(_AddArticle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Router,
	  null,
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'admin', component: _Admin2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _AdminHome2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'article/add', component: _AddArticle2.default })
	  ),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'search', component: _Search2.default }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'recipes', component: _Recipes2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: ':slug', component: _Article2.default })
	    ),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'ingredients', component: _Ingredients2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: ':slug', component: _Article2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: 'recipekit', component: _RecipeKit2.default }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'travel', component: _Travel2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: ':slug', component: _Article2.default })
	    ),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'entertainment', component: _Entertainment2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: ':slug', component: _Article2.default })
	    ),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'people', component: _People2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: ':slug', component: _Article2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _Login2.default })
	  )
	);

/***/ }

})
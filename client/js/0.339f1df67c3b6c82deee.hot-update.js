webpackHotUpdate(0,{

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Content = __webpack_require__(228);

	var _Content2 = _interopRequireDefault(_Content);

	var _Article = __webpack_require__(236);

	var _Article2 = _interopRequireDefault(_Article);

	var _lodash = __webpack_require__(210);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddArticle = (function (_React$Component) {
	  _inherits(AddArticle, _React$Component);

	  function AddArticle(p) {
	    _classCallCheck(this, AddArticle);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddArticle).call(this, p));

	    _this.state = {
	      data: {
	        title: '',
	        slug: '',
	        header_image: '',
	        header_summary: '',
	        header_title: '',
	        author_name: 'STAFF EDITOR',
	        author_url: '',
	        body: '',
	        ingredients: '',
	        procedure: '',
	        category: 'recipes',
	        tags: []
	      }
	    };
	    return _this;
	  }

	  _createClass(AddArticle, [{
	    key: 'submit',
	    value: function submit(e) {
	      e.preventDefault();

	      // TODO: Do validation check
	      var data = this.state.data.data;

	      for (var key in data) {
	        if (_typeof(data[key]) !== 'object') {
	          if (data[key].length === 0) {
	            return alert('Fill the form completely');
	          }
	        }
	      }

	      fetch('/articles.json', {
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        },
	        method: 'post',
	        body: JSON.stringify(this.state.data)
	      }).then(function (e) {
	        return e.json();
	      }).then(function (e) {
	        return alert(e.msg);
	      }).catch(function (e) {
	        return console.log(e);
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(type, e) {
	      var _this2 = this;

	      (0, _lodash2.default)(function (type, e) {
	        var data = _this2.state.data;

	        switch (type) {
	          case 'tags':
	            // Unique elements
	            data.tags = [].concat(_toConsumableArray(new Set(e.currentTarget.value.split(',').map(function (e) {
	              return e.toUpperCase().trim();
	            }))));
	            break;
	          case 'header_image':
	            var fr = new FileReader();
	            fr.onload = function (_e) {
	              var data = _this2.state.data;

	              data.header_image = _e.target.result;
	              _this2.setState({ data: data });
	            };
	            fr.readAsDataURL(e.currentTarget.files[0]);
	            _this2.setState({ imagePreview: URL.createObjectURL(e.currentTarget.files[0]) });
	            break;
	          case 'title':
	            data.title = e.currentTarget.value;
	            // replace space with -, remove the/a for better SEO, convert to lower case
	            data.slug = data.title.toLowerCase().replace(' ', '-', 'g').replace(/(^the |^a | a | the )/, '', 'g');
	            break;
	          default:
	            if (type.indexOf('.') > -1) {
	              data[type.split('.')[0]] = data[type.split('.')[0]] || {};
	              data[type.split('.')[0]][type.split('.')[1]] = e.currentTarget.value;
	            } else {
	              data[type] = e.currentTarget.value;
	            }
	            break;
	        }
	        _this2.setState({ data: data });
	      }, 50)(type, e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var form = _react2.default.createElement(
	        'form',
	        { name: 'add-article', onSubmit: function onSubmit(e) {
	            return _this3.submit(e);
	          }, action: '/articles.json', method: 'post' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Header Details'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-4' },
	              _react2.default.createElement('input', { onChange: function onChange(e) {
	                  return _this3.update('header_image', e);
	                }, name: 'header_image', type: 'file', accept: 'image/*', className: 'form-control' }),
	              _react2.default.createElement(
	                'div',
	                { className: 'help-block' },
	                'Header image 2000x500 px recommended'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-8' },
	              _react2.default.createElement('input', { onChange: function onChange(e) {
	                  return _this3.update('header_title', e);
	                }, placeholder: 'Header Title', className: 'form-control', name: 'header_title', type: 'text' }),
	              _react2.default.createElement('textarea', { onChange: function onChange(e) {
	                  return _this3.update('header_summary', e);
	                }, placeholder: 'Header Summary', className: 'form-control',
	                name: 'header_summary', rows: '3' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Article Title'
	          ),
	          _react2.default.createElement('input', { onChange: function onChange(e) {
	              return _this3.update('title', e);
	            }, className: 'form-control', type: 'text', placeholder: 'Title', name: 'title' }),
	          _react2.default.createElement(
	            'p',
	            { className: 'help-block' },
	            this.state.data.title.length > 0 && _react2.default.createElement(
	              'span',
	              null,
	              'Your URL would look like : ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'chefsbasket.com/',
	                this.state.data.slug
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(
	                'label',
	                null,
	                ' Category '
	              ),
	              _react2.default.createElement(
	                'select',
	                { onChange: function onChange(e) {
	                    return _this3.update('category', e);
	                  }, className: 'form-control', name: 'category' },
	                _react2.default.createElement(
	                  'option',
	                  { value: 'recipes' },
	                  'Recipes'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'ingredients' },
	                  'Ingredients'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'people' },
	                  'People'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'entertainment' },
	                  'Entertainment'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'travel' },
	                  'Travel'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(
	                'label',
	                null,
	                ' Tags '
	              ),
	              _react2.default.createElement('input', { onChange: function onChange(e) {
	                  return _this3.update('tags', e);
	                }, className: 'form-control', type: 'text', placeholder: 'Tag1,Tag2,...', name: 'tags' })
	            )
	          ),
	          this.state.data.category === 'recipes' && _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(
	                'label',
	                null,
	                ' Serves '
	              ),
	              _react2.default.createElement('input', { onChange: function onChange(e) {
	                  return _this3.update('serves', e);
	                }, className: 'form-control', type: 'text', placeholder: 'Serves', name: 'serves' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(
	                'label',
	                null,
	                ' Difficulty '
	              ),
	              _react2.default.createElement('input', { onChange: function onChange(e) {
	                  return _this3.update('difficulty', e);
	                }, className: 'form-control', type: 'text', placeholder: 'Difficulty', name: 'difficulty' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Author Details'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement('input', { onChange: function onChange(e) {
	                  return _this3.update('author_name', e);
	                }, className: 'form-control', type: 'text', placeholder: 'Author', name: 'author_name' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement('input', { onChange: function onChange(e) {
	                  return _this3.update('author_url', e);
	                }, className: 'form-control', type: 'text', placeholder: 'Author URL', name: 'author_url' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Content'
	          ),
	          _react2.default.createElement(
	            'h5',
	            null,
	            ' Use ',
	            _react2.default.createElement(
	              'a',
	              { href: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', target: '_blank' },
	              'markdown'
	            ),
	            ' for formatting text '
	          ),
	          this.state.data.category === 'recipes' ? _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-4' },
	              _react2.default.createElement(
	                'label',
	                null,
	                ' Ingredients '
	              ),
	              _react2.default.createElement('textarea', { onChange: function onChange(e) {
	                  return _this3.update('ingredients', e);
	                }, className: 'form-control', rows: '10',
	                placeholder: '* Onions \r\n* Bell pepper ...', name: 'ingredients' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-8' },
	              _react2.default.createElement(
	                'label',
	                null,
	                ' Procedure '
	              ),
	              _react2.default.createElement('textarea', { onChange: function onChange(e) {
	                  return _this3.update('procedure', e);
	                }, className: 'form-control', rows: '10',
	                placeholder: '# Step 1 \r\nSaute chopped onions', name: 'procedure' })
	            )
	          ) : _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              ' Article body '
	            ),
	            _react2.default.createElement('textarea', { onChange: function onChange(e) {
	                return _this3.update('body', e);
	              }, className: 'form-control', rows: '10',
	              placeholder: 'Content', name: 'body' })
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-default' },
	          'Add Article'
	        )
	      );

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Content2.default,
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            ' Add Page ',
	            _react2.default.createElement(
	              'a',
	              { href: '#preview', className: 'btn btn-default' },
	              ' Preview '
	            )
	          ),
	          form
	        ),
	        _react2.default.createElement(
	          'h1',
	          null,
	          ' Live Render '
	        ),
	        _react2.default.createElement(_Article2.default, {
	          loadStatic: true,
	          data: Object.assign({}, this.state.data, { header_image: this.state.imagePreview }),
	          'default': _react2.default.createElement(
	            'h3',
	            null,
	            ' Enter Details of the Post '
	          )
	        }),
	        _react2.default.createElement(
	          'a',
	          { href: '#', className: 'btn' },
	          'Continue Editing'
	        )
	      );
	    }
	  }]);

	  return AddArticle;
	})(_react2.default.Component);

	exports.default = AddArticle;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ }

})
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabHeader = function (_React$Component) {
  _inherits(TabHeader, _React$Component);

  function TabHeader() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TabHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TabHeader)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (!_this.props.disabled && _this.props.onClick) {
        _this.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabHeader, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.active && this.props.active && this.props.onActive) {
        this.props.onActive();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props;
      var active = _props.active;
      var activeClassName = _props.activeClassName;
      var hidden = _props.hidden;
      var disabled = _props.disabled;
      var className = _props.className;
      var theme = _props.theme;

      var _className = (0, _classnames3.default)(theme.label, (_classnames = {}, _defineProperty(_classnames, theme.active, active), _defineProperty(_classnames, theme.hidden, hidden), _defineProperty(_classnames, theme.disabled, disabled), _defineProperty(_classnames, activeClassName, active), _classnames), className);

      return _react2.default.createElement(
        'label',
        { 'data-react-toolbox': 'tab', className: _className, onClick: this.handleClick },
        this.props.label
      );
    }
  }]);

  return TabHeader;
}(_react2.default.Component);

TabHeader.propTypes = {
  active: _react2.default.PropTypes.bool,
  activeClassName: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  hidden: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.any.isRequired,
  onActive: _react2.default.PropTypes.func,
  onClick: _react2.default.PropTypes.func,
  theme: _react2.default.PropTypes.shape({
    active: _react2.default.PropTypes.string,
    disabled: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string
  })
};
TabHeader.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  hidden: false
};
exports.default = (0, _reactCssThemr.themr)('ToolboxTabs')(TabHeader);
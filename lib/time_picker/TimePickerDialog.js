'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _time = require('../utils/time');

var _time2 = _interopRequireDefault(_time);

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePickerDialog = function (_React$Component) {
  _inherits(TimePickerDialog, _React$Component);

  function TimePickerDialog() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TimePickerDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TimePickerDialog)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      display: 'hours',
      displayTime: _this.props.value
    }, _this.handleClockChange = function (value) {
      _this.setState({ displayTime: value });
    }, _this.handleSelect = function (event) {
      _this.props.onSelect(_this.state.displayTime, event);
    }, _this.toggleTimeMode = function () {
      _this.setState({ displayTime: _time2.default.toggleTimeMode(_this.state.displayTime) });
    }, _this.handleHandMoved = function () {
      if (_this.state.display === 'hours') _this.setState({ display: 'minutes' });
    }, _this.switchDisplay = function (display) {
      _this.setState({ display: display });
    }, _this.actions = [{ label: 'Cancel', className: _this.props.theme.button, onClick: _this.props.onDismiss }, { label: 'Ok', className: _this.props.theme.button, onClick: _this.handleSelect }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimePickerDialog, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.active && this.props.active) {
        setTimeout(this.refs.clock.handleCalculateShape, 1000);
      }
    }
  }, {
    key: 'formatHours',
    value: function formatHours() {
      if (this.props.format === 'ampm') {
        return this.state.displayTime.getHours() % 12 || 12;
      } else {
        return this.state.displayTime.getHours();
      }
    }
  }, {
    key: 'renderAMPMLabels',
    value: function renderAMPMLabels() {
      var theme = this.props.theme;

      if (this.props.format === 'ampm') {
        return _react2.default.createElement(
          'div',
          { className: theme.ampm },
          _react2.default.createElement(
            'span',
            { className: theme.am, onClick: this.toggleTimeMode },
            'AM'
          ),
          _react2.default.createElement(
            'span',
            { className: theme.pm, onClick: this.toggleTimeMode },
            'PM'
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.props.theme;

      var display = this.state.display + 'Display';
      var format = _time2.default.getTimeMode(this.state.displayTime) + 'Format';
      var className = (0, _classnames2.default)([theme.dialog, theme[display], theme[format]], this.props.className);
      return _react2.default.createElement(
        _dialog2.default,
        { active: this.props.active, className: className, actions: this.actions },
        _react2.default.createElement(
          'header',
          { className: theme.header },
          _react2.default.createElement(
            'span',
            { className: theme.hours, onClick: this.switchDisplay.bind(this, 'hours') },
            ('0' + this.formatHours()).slice(-2)
          ),
          _react2.default.createElement(
            'span',
            { className: theme.separator },
            ':'
          ),
          _react2.default.createElement(
            'span',
            { className: theme.minutes, onClick: this.switchDisplay.bind(this, 'minutes') },
            ('0' + this.state.displayTime.getMinutes()).slice(-2)
          ),
          this.renderAMPMLabels()
        ),
        _react2.default.createElement(_Clock2.default, {
          ref: 'clock',
          display: this.state.display,
          format: this.props.format,
          onChange: this.handleClockChange,
          onHandMoved: this.handleHandMoved,
          theme: this.props.theme,
          time: this.state.displayTime
        })
      );
    }
  }]);

  return TimePickerDialog;
}(_react2.default.Component);

TimePickerDialog.propTypes = {
  active: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  format: _react2.default.PropTypes.oneOf(['24hr', 'ampm']),
  onDismiss: _react2.default.PropTypes.func,
  onSelect: _react2.default.PropTypes.func,
  theme: _react2.default.PropTypes.shape({
    am: _react2.default.PropTypes.string.isRequired,
    amFormat: _react2.default.PropTypes.string.isRequired,
    ampm: _react2.default.PropTypes.string.isRequired,
    button: _react2.default.PropTypes.string.isRequired,
    dialog: _react2.default.PropTypes.string.isRequired,
    header: _react2.default.PropTypes.string.isRequired,
    hours: _react2.default.PropTypes.string.isRequired,
    hoursDisplay: _react2.default.PropTypes.string.isRequired,
    minutes: _react2.default.PropTypes.string.isRequired,
    minutesDisplay: _react2.default.PropTypes.string.isRequired,
    pm: _react2.default.PropTypes.string.isRequired,
    pmFormat: _react2.default.PropTypes.string.isRequired,
    separator: _react2.default.PropTypes.string.isRequired
  }),
  value: _react2.default.PropTypes.object
};
TimePickerDialog.defaultProps = {
  active: false,
  format: '24hr',
  value: new Date()
};
exports.default = TimePickerDialog;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondary = exports.primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  component: _["default"],
  title: 'Design System|Button'
};
exports["default"] = _default;

var primary = function primary() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], null, 'Button');
};

exports.primary = primary;

var secondary = function secondary() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    variant: "secondary"
  }, 'Button');
};

exports.secondary = secondary;
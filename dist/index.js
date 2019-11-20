"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/loading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var show = props.show,
      type = props.type;

  return show && _react2.default.createElement(
    "div",
    {
      className: type === "fullPage" ? "loading-content-full-page" : "loading-content"
    },
    _react2.default.createElement("div", { className: "loading-center" })
  ) || null;
};

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @param {*} value
 * @returns {boolean}
 */
function isObject(value) {
  return value !== null && _typeof(value) === 'object' && !Array.isArray(value);
}
//# sourceMappingURL=is-object.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UrlHelper = /*#__PURE__*/function () {
  _createClass(UrlHelper, null, [{
    key: "create",

    /**
     * @param {Object} config
     * @param {string} config.host
     * @returns {CustomerMapper}
     */
    value: function create(config) {
      return new UrlHelper(config);
    }
    /**
     * @param {Object} config
     * @param {string} config.host
     * @returns {void}
     */

  }]);

  function UrlHelper(config) {
    _classCallCheck(this, UrlHelper);

    /**
     * @private
     * @type {Object}
     */
    this.config = config;
  }
  /**
   * @private
   * @returns {string}
   */


  _createClass(UrlHelper, [{
    key: "getOffsitePaymentUrl",

    /**
     * @returns {string}
     */
    value: function getOffsitePaymentUrl() {
      return "".concat(this.host, "/pay/initialize");
    }
    /**
     * @returns {string}
     */

  }, {
    key: "getPaymentUrl",
    value: function getPaymentUrl() {
      return "".concat(this.host, "/api/public/v1/orders/payments");
    }
    /**
     * @returns {string}
     */

  }, {
    key: "getGenerateClientTokenUrl",
    value: function getGenerateClientTokenUrl() {
      return "".concat(this.host, "/api/v2/public/payments/client_tokens");
    }
  }, {
    key: "host",
    get: function get() {
      return this.config.host;
    }
  }]);

  return UrlHelper;
}();

exports.default = UrlHelper;
//# sourceMappingURL=url-helper.js.map
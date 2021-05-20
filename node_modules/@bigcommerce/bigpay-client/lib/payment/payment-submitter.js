"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _paymentTypes = require("./payment-types");

var _payloadMapper = _interopRequireDefault(require("./v1/payment-mappers/payload-mapper"));

var _requestSender = _interopRequireDefault(require("../common/http-request/request-sender"));

var _urlHelper = _interopRequireDefault(require("./url-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PaymentSubmitter = /*#__PURE__*/function () {
  _createClass(PaymentSubmitter, null, [{
    key: "create",

    /**
     * @param {Object} config
     * @returns {PaymentSubmitter}
     */
    value: function create(config) {
      var urlHelper = _urlHelper.default.create(config);

      var requestSender = _requestSender.default.create();

      var payloadMapper = _payloadMapper.default.create();

      return new PaymentSubmitter(urlHelper, requestSender, payloadMapper);
    }
    /**
     * @param {UrlHelper} urlHelper
     * @param {RequestSender} requestSender
     * @param {PayloadMapper} payloadMapper
     * @returns {void}
     */

  }]);

  function PaymentSubmitter(urlHelper, requestSender, payloadMapper) {
    _classCallCheck(this, PaymentSubmitter);

    /**
     * @private
     * @type {UrlHelper}
     */
    this.urlHelper = urlHelper;
    /**
     * @private
     * @type {RequestSender}
     */

    this.requestSender = requestSender;
    /**
     * @private
     * @type {PayloadMapper}
     */

    this.payloadMapper = payloadMapper;
  }
  /**
   * @param {PaymentRequestData} data
   * @param {Function} [callback]
   * @returns {void}
   * @throws {Error}
   */


  _createClass(PaymentSubmitter, [{
    key: "submitPayment",
    value: function submitPayment(data, callback) {
      var _data$paymentMethod = data.paymentMethod,
          paymentMethod = _data$paymentMethod === void 0 ? {} : _data$paymentMethod;

      if (paymentMethod.type !== _paymentTypes.API) {
        throw new Error("".concat(paymentMethod.type, " is not supported."));
      }

      var payload = this.payloadMapper.mapToPayload(data);
      var url = this.urlHelper.getPaymentUrl();
      var options = {
        headers: this.payloadMapper.mapToHeaders(data)
      };
      this.requestSender.postRequest(url, payload, options, callback);
    }
  }]);

  return PaymentSubmitter;
}();

exports.default = PaymentSubmitter;
//# sourceMappingURL=payment-submitter.js.map
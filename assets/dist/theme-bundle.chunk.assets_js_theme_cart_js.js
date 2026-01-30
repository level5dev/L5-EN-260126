"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js"
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* harmony import */ var _custom_custom_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom/custom-cart */ "./assets/js/theme/custom/custom-cart.js");
/* harmony import */ var _custom_cart_page_upsell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom/cart-page-upsell */ "./assets/js/theme/custom/cart-page-upsell.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.customCart = this.context.itsConfig.custom_cart;
    if (this.customCart) {
      (0,_custom_custom_cart__WEBPACK_IMPORTED_MODULE_10__.floatingCheckoutButton)();
    }
    this.cartPageUpsell = new _custom_cart_page_upsell__WEBPACK_IMPORTED_MODULE_11__["default"](this.context);
    this.setApplePaySupport();
    this.bindEvents();
  };
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!newQty) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry),
        icon: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_9__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
            text: err,
            icon: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: this.customCart ? 'custom/cart/content' : 'cart/content',
        totals: this.customCart ? 'custom/cart/totals' : 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this5.bindEvents();
      _this5.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: _this6.context.cancelButtonText
      }).then(function (result) {
        if (result.value) {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
          text: $codeInput.data('error'),
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
            html: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this8.context);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
          text: validationDictionary.invalid_gift_certificate,
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
            html: resp.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    var _this0 = this;
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);

    // reload cart content when a Cart Page Upsell item is added to the cart
    $(document).on('cpu-refresh-cart-content', function () {
      return _this0.refreshContent(false);
    });
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ },

/***/ "./assets/js/theme/cart/shipping-estimator.js"
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: err,
          icon: 'error'
        });
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();


/***/ },

/***/ "./assets/js/theme/common/cart-item-details.js"
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_this, hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ },

/***/ "./assets/js/theme/common/gift-certificate-validator.js"
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ },

/***/ "./assets/js/theme/common/state-country.js"
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ },

/***/ "./assets/js/theme/common/utils/translations-utils.js"
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ },

/***/ "./assets/js/theme/custom/cart-page-upsell-product-details.js"
/*!********************************************************************!*\
  !*** ./assets/js/theme/custom/cart-page-upsell-product-details.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartPageUpsellProduct)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _make_options_unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./make-options-unique */ "./assets/js/theme/custom/make-options-unique.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var CartPageUpsellProduct = /*#__PURE__*/function () {
  function CartPageUpsellProduct($scope) {
    this.$scope = $scope;
    this.$scope.addClass('hasOptions--wired');
    this.initRadioAttributes();
    this.$form = $('form', this.$scope);
    this.$productId = $('[name="product_id"]', this.$form).val();
    this.key = 'cpu'; // unique indentifier for this customization

    this.$productOptionsElement = $("[data-" + this.key + "-option-change]", this.$form); // ie <div class="options" data-cpu-option-change>

    this.updateOptionView();
    // utils.api.productAttributes.optionChange(this.$productId, this.$form.serialize(), 'products/bulk-discount-rates', (err, response) => {
    //     const attributesData = response.data || {};
    //     const attributesContent = response.content || {};
    //     this.updateProductAttributes(attributesData);
    //     // if (hasDefaultOptions) {
    //         this.updateView(attributesData, attributesContent);
    //     // } else {
    //     //     this.updateDefaultAttributesForOOS(attributesData);
    //     // }
    // });

    this.bindEvents();
  }

  /**
   * add "isRequired" to options that are required
   */
  var _proto = CartPageUpsellProduct.prototype;
  _proto.addRequiredClasstoOptions = function addRequiredClasstoOptions() {
    $('.form-field', this.$productOptionsElement).toArray().forEach(function (option) {
      if ($(option).find('small:contains("Required")').length) {
        $(option).addClass('isRequired');
      }
    });
  }

  /**
   * Handle product options changes
   */;
  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var $changedOption = $(event.target);
    var optionRow = $(event.target).parents('.form-field');

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      // do nothing
    } else {
      this.updateOptionView();
    }

    // was an option with a value selected?
    if ($changedOption.val() !== '') {
      if ($changedOption.is('input')) {
        var type = $changedOption.attr('type');
        switch (type) {
          case 'radio':
            $changedOption.attr('checked', true);
            $changedOption.siblings('input').attr('checked', false);
            optionRow.addClass('isSelected');
            break;
          case 'checkbox':
            if ($changedOption.prop('checked')) {
              optionRow.addClass('isSelected');
              $changedOption.attr('checked', true);
            } else {
              optionRow.removeClass('isSelected');
              $changedOption.attr('checked', false);
            }
            break;
          case 'text':
          case 'number':
            $changedOption.val().length !== 0 ? optionRow.addClass('isSelected') : optionRow.removeClass('isSelected');
            $changedOption.attr('value', $changedOption.val());
            break;
        }
      } else if ($changedOption.is('select')) {
        var $selectedOption = $changedOption.find("option[value=\"" + $changedOption.val() + "\"]");
        $selectedOption.attr('selected', true);
        $selectedOption.siblings('option').attr('selected', false);
        // if it's a date select, make sure all 3 selects are filled in before saying it's filled in
        if ($changedOption.attr('name').indexOf('month') !== -1 || $changedOption.attr('name').indexOf('day') !== -1 || $changedOption.attr('name').indexOf('year') !== -1) {
          // count the other date fields (if changed month, see if day and year are filled out)
          var otherSelectedDateFields = $changedOption.siblings('select').toArray().reduce(function (count, select) {
            return $(select).val() === '' ? count : count + 1;
          }, 0);
          // if all fields are filled in
          if (otherSelectedDateFields === 2) {
            optionRow.addClass('isSelected');
          }
        } else {
          optionRow.addClass('isSelected'); // it's not a date select, just mark the option as selected
        }
      } else if ($changedOption.is('textarea')) {
        $changedOption.val().length !== 0 ? optionRow.addClass('isSelected') : optionRow.removeClass('isSelected');
        $changedOption.text($changedOption.val());
      }
    } else {
      // else remove class (there was no value for this option)
      optionRow.removeClass('isSelected');
    }
    this.checkOptionsSelected();
  }

  /**
   *  Make API call on option change to update availability
   */;
  _proto.updateOptionView = function updateOptionView() {
    var _this = this;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(this.$productId, this.$form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      _this.updateProductAttributes(productAttributesData);
      _this.updateView(productAttributesData);
      // stock stuff (should wire up image change as well later)
      // if (productAttributesData.stock !== undefined) {
      //     $('.currentStock', $scope).text(productAttributesData.stock);
      // } else {
      //     $('.currentStock', $scope).text('');
      // }
    });
  }

  /**
   *  Check whether all required options are selected
   */;
  _proto.checkOptionsSelected = function checkOptionsSelected() {
    /*
    ## see if all options are selected
    */
    var numberRequiredOptions = this.$scope.find('.form-field.isRequired').length;
    var numberSelectedOptions = this.$scope.find('.form-field.isRequired.isSelected').length;
    // const $addToCartButton = $form.find('.card-actions .button');
    // $addToCartButton.removeClass('button--success');
    if (numberRequiredOptions === 0 || numberRequiredOptions <= numberSelectedOptions) {
      this.$scope.addClass('hasOptions--selected'); // add class to product for easy adding to cart
      $('.cpu__modal').addClass('hasOptions--selected'); // update text for user as well
    } else {
      this.$scope.removeClass('hasOptions--selected'); // remove class since not all options filled in
      $('.cpu__modal').removeClass('hasOptions--selected'); // update text for user as well
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   *
   */;
  _proto.updatePriceView = function updatePriceView(price) {
    if (price.without_tax) {
      $("[data-product-price-without-tax]", this.$scope).html(price.without_tax.formatted);
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data) {
    // update price
    // const viewModel = this.getViewModel(this.$scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      this.updatePriceView(data.price);
    }
    // update image
    var imageEl = $(".cpu__item-img", this.$scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.image)) {
      var imageSrc = data.image.data.replace('{:size}', '300x300');
      imageEl.attr('src', imageSrc);
    } else {
      imageEl.attr('src', imageEl.data('src'));
    }
    // update message if there is one
    var optionMessage = data.stock_message || data.purchasing_message;
    if (optionMessage !== null) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
        text: optionMessage,
        icon: 'error'
      });
      this.$scope.addClass('hasOptions--error');
    } else {
      this.$scope.removeClass('hasOptions--error');
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this2 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope.add('.cpu__modal')).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('product-attribute-value'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this2.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this2.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable').prev('input').attr('disabled', true);
    }
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($attribute.parent().val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable').prev('input').attr('disabled', false);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.removeAttr('disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('product-attribute') : null;
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this3 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.click(function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.change();
          } else {
            $radio.data('state', true);
          }
          _this3.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * bind events
   */;
  _proto.bindEvents = function bindEvents() {
    var _this4 = this;
    (0,_make_options_unique__WEBPACK_IMPORTED_MODULE_2__["default"])(this.$scope, this.$productId, this.key); // make options unique so there aer no conflicts when selecting options

    this.addRequiredClasstoOptions(); // add "isRequired" to required options
    this.checkOptionsSelected();

    // listen for option changes
    this.$productOptionsElement.change(function (event) {
      _this4.productOptionsChanged(event, event.target);
    });
    this.$productOptionsElement.show();

    // update options selected on load
    this.$productOptionsElement.find('input[type="checkbox"]').trigger('change'); // trigger selected checkbox options to update starting checkbox values
    this.$productOptionsElement.find('input[type="radio"]:checked').trigger('change'); // trigger selected radio options to update starting radio buttons values
    this.$productOptionsElement.find('input[type="text"]').trigger('change'); // trigger update on input text to catch any default values
    this.$productOptionsElement.find('input[type="number"]').trigger('change'); // trigger update on input numbers to catch any default values
    this.$productOptionsElement.find('textarea').trigger('change'); // trigger update on textarea tp catch any default values
    this.$productOptionsElement.find('option:selected').parent().trigger('change'); // trigger selected options to update starting select box values
  };
  return CartPageUpsellProduct;
}();


/***/ },

/***/ "./assets/js/theme/custom/cart-page-upsell.js"
/*!****************************************************!*\
  !*** ./assets/js/theme/custom/cart-page-upsell.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartPageUpsell)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_page_upsell_product_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-page-upsell-product-details */ "./assets/js/theme/custom/cart-page-upsell-product-details.js");
/* harmony import */ var _make_options_unique__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-options-unique */ "./assets/js/theme/custom/make-options-unique.js");
/* harmony import */ var _common_carousel_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/carousel/index */ "./assets/js/theme/common/carousel/index.js");
/* harmony import */ var _upsell_array_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upsell-array-cart-page */ "./assets/js/theme/custom/upsell-array-cart-page.js");
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








//  Apr 2019: updated version includes ITS Upsell Suite
var VERSION = '2.0';
var CartPageUpsell = /*#__PURE__*/function () {
  function CartPageUpsell(context) {
    console.log('IntuitSolutions.net - Cart Page Upsell', VERSION);
    this.context = context;

    /**
     * options = 'related', 'similar', 'custom fields'
     * errorDefault = backup mode; only necessary with Upsell Suite
     * -- related = automatically loads related products from a random item in the cart
     * -- similar = automatically loads similar by view products from a random item in the cart
     * -- custom fields = will load the products specified by the cart item's custom fields
     * -- upsell suite = will load products specified by Upsell Suite CSVs
     */
    this.mode = 'upsell suite';
    this.errorDefault = 'related';
    this.showMobileInCarousel = true;
    this.productLimit = 3;
    this.loading = $('#cpu .loadingOverlay');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById.bind(_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product); // required to keep scope of utils to the utils
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage.bind(_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api); // required to keep scope of utils to the utils

    this.bindEvents();
  }

  /**
   * remove duplicate items from array
   *
   * pulled from stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
   * @param {array} upsellTargets - array of items we want to strip out any duplicate items from
   */
  var _proto = CartPageUpsell.prototype;
  _proto.removeDuplicateTargets = function removeDuplicateTargets(upsellTargets) {
    return Array.from(new Set(upsellTargets));
  }

  /**
   * get cart items URLs and Product Ids so we don't try to upsell an item that's already in the cart
   * @param {array} upsellTargets - array of items we want to strip out any cart item matches from
   */;
  _proto.removeCartItemTargets = function removeCartItemTargets(upsellTargets) {
    // get all data from the cart items
    var cartItemData = [];
    $('[data-upsell]').toArray().forEach(function (cartItem) {
      var producturl = $(cartItem).data('product-url').replace(window.location.origin, '') || '';
      var productId = $(cartItem).data('product-id').toString() || '';
      cartItemData.push(producturl, productId);
    });
    // only keep upsell items that aren't within our cartItemData array
    var result = upsellTargets.reduce(function (upsellItems, upsellitem) {
      if (cartItemData.indexOf(upsellitem) === -1) {
        upsellItems.push(upsellitem);
      }
      return upsellItems;
    }, []);
    // return result
    return result;
  }

  /**
   * get random int given a max
   */;
  _proto.getRandomInt = function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /**
   * automatically load products from the cart item's either related products or similar by view items
   * @param {string} type - "related" or "similar"
   */;
  _proto.loadAutoTargets = function loadAutoTargets(type) {
    var _this = this;
    var itemIndex = this.getRandomInt($('.cart-item').length); // get random item index (pick random item)
    var itemId = $('.cart-item').eq(itemIndex || 0).data('product-id'); // get product id of that random item
    if (itemId == undefined) {
      return $('#cpu').hide();
    }
    // see if we already ajax'd for these upsell items
    var storedData = JSON.parse(localStorage.getItem("cpu__items" + itemId)) || [];
    if (storedData.length) {
      // if already ajaxed and stored upsell items
      storedData = this.removeDuplicateTargets(storedData); // remove duplicate upsell targets
      storedData = this.removeCartItemTargets(storedData); // remove any upsell targets that match an item already in the cart
      this.loadUpsellTargets(storedData); // load those stored upsell items
    } else {
      // otherwise
      var opts = {
        template: "custom/cart-page-upsell-targets--" + type,
        config: {
          product: {
            related_products: {
              limit: 70
            },
            similar_by_views: {
              limit: 70
            }
          }
        }
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById(itemId, opts, function (err, res) {
        // ajax for the first item's upsell items (suggested products)
        if (err) {
          return $('#cpu').hide();
        }
        var targets = JSON.parse(res) || [];
        targets = _this.removeDuplicateTargets(targets); // remove duplicate upsell targets
        targets = _this.removeCartItemTargets(targets); // remove any upsell targets that match an item already in the cart
        localStorage.setItem("cpu__items" + itemId, JSON.stringify(targets));
        _this.loadUpsellTargets(targets);
      });
    }
  }

  /**
   * returns array of upsell product URLs and/or IDs
   */;
  _proto.loadCustomFieldTargets = function loadCustomFieldTargets() {
    var targets = [];
    $('[data-upsell]').toArray().forEach(function (cartItem) {
      var upsellItems = $(cartItem).data('upsell');
      if (upsellItems.length) {
        upsellItems.split(',').forEach(function (upsellItem) {
          if (upsellItem.length) {
            targets.push(upsellItem);
          }
        });
      }
    });
    // if mode is set to custom fields but no items have custom fields applied, default to using related products
    if (targets.length === 0) {
      return this.loadAutoTargets('related');
    }
    targets = this.removeDuplicateTargets(targets); // remove duplicate upsell targets
    targets = this.removeCartItemTargets(targets); // remove any upsell targets that match an item already in the cart
    return this.loadUpsellTargets(targets);
  };
  _proto.loadCSVTargets = /*#__PURE__*/function () {
    var _loadCSVTargets = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var cpuHTMLtext, cpuHTML, remainingSlots, targets, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            //  get the previously AJAXed products from sessionStorage
            cpuHTMLtext = sessionStorage.getItem("cpuCards");
            cpuHTML = _upsell_array_cart_page__WEBPACK_IMPORTED_MODULE_5__["default"].parseArrayFromString(cpuHTMLtext); //  if nothing has been downloaded,
            //  revert to backup mode
            if (cpuHTML.length) {
              _context.n = 1;
              break;
            }
            return _context.a(2, this.loadAutoTargets(this.errorDefault));
          case 1:
            //  display the previouly downloaded products
            cpuHTML.forEach(function (card) {
              return $('#cpu .cpu__list--customfields').append(card.html);
            });

            //  if there is room for more products,
            //  fill the rest of the add-on by
            //  adding products from the CSVs
            //  of products already in the CPU
            remainingSlots = this.productLimit - cpuHTML.length;
            if (!remainingSlots) {
              _context.n = 5;
              break;
            }
            _context.p = 2;
            _context.n = 3;
            return _upsell_array_cart_page__WEBPACK_IMPORTED_MODULE_5__["default"].getAdditionalProducts(cpuHTML.map(function (product) {
              return product.product_id;
            }), remainingSlots);
          case 3:
            targets = _context.v;
            return _context.a(2, this.loadUpsellTargets(targets));
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error("CPU parse error: ", _t);
          case 5:
            this.applyUpsellHandlers();
            return _context.a(2, this.loading.hide());
        }
      }, _callee, this, [[2, 4]]);
    }));
    function loadCSVTargets() {
      return _loadCSVTargets.apply(this, arguments);
    }
    return loadCSVTargets;
  }()
  /**
   * handle adding items to cart
   */
  ;
  _proto.addToCart = function addToCart(event) {
    var _this2 = this;
    var product = $(event.currentTarget).parents('.cpu__item');
    product.removeClass('hasError'); // remove any error highlighting
    // make sure all options are selected
    if (product.hasClass('hasOptions') && !product.hasClass('hasOptions--selected')) {
      product.hasClass('hasOptions--wired') ? $('.qaatx__options', product).slideDown() // if options loaded, just show them
      : this.toggleOptions(event); // options aren't loaded, load them + show them
      product.addClass('hasError');
      $('.cpu__item.isBeingAdded').removeClass('isBeingAdded');
      return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        text: 'Please make sure all required options have been selected',
        type: 'error'
      });
    }
    // actually add to cart
    this.loading.show();
    var form = $('.cpu__item-form', product);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.itemAdd(new FormData(form[0]), function (err, response) {
      var errorMessage = err || response.data.error; // take note of errors
      if (errorMessage) {
        // Guard statement
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        _this2.loading.hide();
        product.addClass('hasError'); // highlgihht error item
        var errorOffset = product.offset().top;
        $('html, body').animate({
          scrollTop: errorOffset - 20
        }, 700); // scroll user to the error product
        // remove class from our 'qued" items
        $('.cpu__item.isBeingAdded').removeClass('isBeingAdded');
        // alert user of error
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
          text: tmp.textContent || tmp.innerText,
          icon: 'error'
        });
      }
      _this2.loading.hide();
      // product.addClass('wasAdded');
      // $('.cpu__item-button', product).text('Added to Cart');
      $(document).trigger('cpu-refresh-cart-content');
      // if (product.hasClass('isBeingAdded')) {
      //     product.removeClass('isBeingAdded');
      //     ($('.cpu__item.isBeingAdded') && $('.cpu__item.isBeingAdded').length)
      //         ? $('.cpu__item.isBeingAdded').eq(0).find('.qaatc__addtocart').trigger('click') // trigger submitting next product to the cart
      //         : window.location = '/cart.php';
      // }
    });
  }

  /**
   * when modal option changed we need to sync the "real" form. Sync options selected in scope1 with scope2
   * @param {object} event
   * @param {string} productId
   */;
  _proto.syncFormOption = function syncFormOption(event, productId) {
    var opt = $(event.target).parents('.form-field');
    var type = $(opt).data('product-attribute');
    var target = null;
    var targetId = null;
    var value = null;
    switch (type) {
      case 'input-checkbox':
      case 'set-rectangle':
      case 'set-radio':
      case 'product-list':
      case 'swatch':
        target = $('input:checked', opt);
        if (target && target.length) {
          targetId = target.prop('id').replace("_" + productId, '').replace('modal_', '');
          $("#" + targetId).prop('checked', true);
          $("#" + targetId).siblings('input').prop('checked', false);
        } else {
          targetId = $(event.target).prop('id').replace("_" + productId, '').replace('modal_', '');
        }
        break;
      case 'set-select':
        target = $('.form-select', opt);
        targetId = target.prop('id').replace("_" + productId, '').replace('modal_', '');
        value = target.val();
        $("#" + targetId).val(value);
        break;
      case 'input-text':
      case 'textarea':
        target = $('.form-input', opt);
        targetId = target.prop('id').replace("_" + productId, '').replace('modal_', '');
        value = target.val();
        $("#" + targetId).val(value);
        break;
    }
    // force update on the "real" form
    $("#" + targetId).trigger('change');
  }

  /**
   * Add to cart from modal
   */;
  _proto.addToCartFromModal = function addToCartFromModal(modalContent, product) {
    var modal = modalContent.parents('.cpu__modal');
    if (!modal.hasClass('hasOptions--selected')) {
      return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        text: 'Please make sure all required options have been selected',
        icon: 'error',
        onClose: function onClose() {
          $('.cpu__item-button--options', product).trigger('click'); // show options again if tried adding to cart before selecting all options
        }
      });
    }
    $('.cpu__item-button--addtocart', product).trigger('click'); // trigger add to cart button click on main product
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close(); // close modal
  }

  /**
   * show and load if needed this product's options
   */;
  _proto.showOptions = function showOptions(e) {
    var _this3 = this;
    var product = $(e.currentTarget).parents('.cpu__item');
    var name = $('.cpu__item-name', product).text();
    var optionMarkup = $('.cpu__item-options', product).html();
    var productId = $('[name="product_id"]', product).val();
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: "Options for " + name,
      html: optionMarkup,
      customClass: 'cpu__modal',
      showCloseButton: true,
      showConfirmButton: false,
      onOpen: function onOpen() {
        // since the moda lHTML is cloned it doesn't have any handlers applied to it. This handles the "fake" cloned options to update the "real" options
        var modalContent = $(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().getContent());
        (0,_make_options_unique__WEBPACK_IMPORTED_MODULE_3__["default"])(modalContent, productId, 'modal');
        $('[data-cpu-option-change]', modalContent).change(function (event) {
          _this3.syncFormOption(event, productId);
        });
        // trigger default selected options unless there's an error.. then we'll get stuck in a loop
        if (!product.hasClass('hasOptions--error')) {
          $('[data-cpu-option-change]', modalContent).find('input[type="checkbox"]').trigger('change'); // trigger selected checkbox options to update starting checkbox values
          $('[data-cpu-option-change]', modalContent).find('input[type="radio"]:checked').trigger('change'); // trigger selected radio options to update starting radio buttons values
          $('[data-cpu-option-change]', modalContent).find('input[type="text"]').trigger('change'); // trigger update on input text to catch any default values
          $('[data-cpu-option-change]', modalContent).find('input[type="number"]').trigger('change'); // trigger update on input numbers to catch any default values
          $('[data-cpu-option-change]', modalContent).find('textarea').trigger('change'); // trigger update on textarea tp catch any default values
          $('[data-cpu-option-change]', modalContent).find('option:selected').parent().trigger('change'); // trigger selected options to update starting select box values
        }

        // this.optionHandlers[productId].updateOptionView();
        _this3.optionHandlers[productId].checkOptionsSelected(modalContent);

        // handle adding to cart from modal
        $('.cpu__item-button--modaladdtocart', modalContent).on('click', function () {
          return _this3.addToCartFromModal(modalContent, product);
        });
      }
    });
  }

  /**
   * apply upsell handlers
   */;
  _proto.applyUpsellHandlers = function applyUpsellHandlers() {
    var _this4 = this;
    this.optionHandlers = {};
    $('.cpu__item.hasOptions').toArray().forEach(function (product) {
      var thisID = $(product).find('input[name="product_id"]').val();
      _this4.optionHandlers[thisID] = new _cart_page_upsell_product_details__WEBPACK_IMPORTED_MODULE_2__["default"]($(product));
    }); // handle options for all products w/ options
    console.log(this.optionHandlers);
    $('.cpu__item-button--addtocart').on('click', function (e) {
      return _this4.addToCart(e);
    }); // manage adding to cart

    $('.cpu__item-button--options').on('click', function (e) {
      return _this4.showOptions(e);
    }); // manage adding to cart

    this.displayInCarousel();
  }

  /**
   * AJAX the upsell URLs and/or IDs and append where needed
   * @param {array} targets - targets to upsell
   */;
  _proto.loadUpsellTargets = function loadUpsellTargets(targets) {
    var _this5 = this;
    if (targets.length) {
      targets = targets.slice(0, this.productLimit || targets.length);
      var _runQueueInOrder = function runQueueInOrder() {
        if (targets.length === 0) {
          // when done all products
          _this5.applyUpsellHandlers();
          return _this5.loading.hide();
        }
        var target = targets.shift();
        var requestMethod = target.toString().match(/^[0-9]+$/) ? _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById : _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage;
        requestMethod(target, {
          template: 'custom/cart-page-upsell-item'
        }, function (err, response) {
          if (err) {
            return;
          } // if error
          $('#cpu .cpu__list--customfields').append(response); // no error, append markup
          _runQueueInOrder(); // run next item
        });
      };
      _runQueueInOrder(); // start the loop
    } else {
      $('#cpu').hide();
    }
  }

  /**
   * Add Slick options to product display after loading products,
   * then fire Slick
   */;
  _proto.displayInCarousel = function displayInCarousel() {
    if (!this.showMobileInCarousel) return;

    //  Add CSS to product cards before firing Slick
    $('.cpu__list').addClass('cpu__list-slick');
    $('.cpu__item').addClass('cpu__item-slick');
    $('.cpu__list').attr('data-slick', "{\n            \"infinite\": true,\n            \"dots\": false,\n            \"arrows\": true,\n            \"mobileFirst\": true,\n            \"rows\": 1,\n            \"slidesToShow\": 1,\n            \"slidesToScroll\": 1,\n            \"responsive\": [\n                {\n                    \"breakpoint\": 1025,\n                    \"settings\": \"unslick\"\n                }\n            ]\n        }");
    (0,_common_carousel_index__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    var mediaMatch = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_6__["default"])('medium');
    $(mediaMatch).on('change', function (e) {
      var bindToWindow = !e.target.matches;
      if (bindToWindow) {
        $('.cpu__list').slick('reinit');
      }
    });
  }

  /**
   * bind events
   */;
  _proto.bindEvents = function bindEvents() {
    this.loading.show();
    switch (this.mode) {
      case 'related':
        return this.loadAutoTargets('related');
      case 'similar':
        return this.loadAutoTargets('similar');
      case 'custom fields':
        return this.loadCustomFieldTargets();
      case 'upsell suite':
        return this.loadCSVTargets();
    }
  };
  return CartPageUpsell;
}();


/***/ },

/***/ "./assets/js/theme/custom/custom-cart.js"
/*!***********************************************!*\
  !*** ./assets/js/theme/custom/custom-cart.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   floatingCheckoutButton: () => (/* binding */ floatingCheckoutButton)
/* harmony export */ });
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var floatingCheckoutButton = function floatingCheckoutButton() {
  var $summaryContainer = $('.js-cart__totals');
  var $floatingButton = $('.floating-checkout-button');
  var mq = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_0__["default"])('medium');
  function WidthChange(mq) {
    var fadeTiming = 400;
    if (!mq.matches) {
      var initWindowPosition = window.scrollY + window.innerHeight;
      if (initWindowPosition < $summaryContainer.offset().top) {
        $floatingButton.show();
      } else {
        $floatingButton.hide();
      }
      $(window).on('scroll', function () {
        var bottomWindowPosition = window.scrollY + window.innerHeight;
        if (bottomWindowPosition < $summaryContainer.offset().top) {
          $floatingButton.fadeIn(fadeTiming);
        } else {
          $floatingButton.fadeOut(fadeTiming);
        }
      });
    } else {
      $floatingButton.hide();
    }
  }
  mq.addListener(WidthChange);
  WidthChange(mq);
  $floatingButton.on('click', function () {
    var goToCheckout = false; // Set to true if the button should go to checkout instead of scrolling the user down the page
    var totalsOffset = $summaryContainer.offset().top;
    if (goToCheckout) {
      window.location.href = '/checkout.php';
    } else {
      $('html, body').animate({
        scrollTop: totalsOffset - 100
      }, 700); // scroll user to the real checkout button product
    }
  });
};


/***/ },

/***/ "./assets/js/theme/custom/make-options-unique.js"
/*!*******************************************************!*\
  !*** ./assets/js/theme/custom/make-options-unique.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/*
 * put productID on the element's "for" and "id" attrs so multiple cases of same option set won't conflict
 */
var makeOptionIdsUnique = function makeOptionIdsUnique(scope, productId, key) {
  $('input[type="radio"], input[type="checkbox"]', scope).each(function (index, el) {
    var optionId = $(el).attr('id'); // update ID to include product ID
    $(el).attr('id', key + "_" + optionId + "_" + productId); // update option ID to include product ID
    $(el).next().attr('for', key + "_" + optionId + "_" + productId); // update option label to target updated ID
  });
  // add input fields label class and put in here. These options we need to select their sibling label
  var optionsWithLabelAttrs = ['input[type="text"]', 'input[type="number"]', 'input[type="file"]', 'select', 'textarea'];
  var optionsWithLabelAttrsSelectors = optionsWithLabelAttrs.join(',');
  $(optionsWithLabelAttrsSelectors, scope).parents('.form-field').find('label').each(function (index, el) {
    var optionId = $(el).attr('for'); // update ID to include product ID
    $(el).attr('for', key + "_" + optionId + "_" + productId); // update option ID to include product ID
    $(el).next().attr('id', key + "_" + optionId + "_" + productId); // update option label to target updated ID
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeOptionIdsUnique);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRThCO0FBQ1M7QUFDakM7QUFDVztBQUNDO0FBQ25CO0FBQ2lCO0FBRUs7QUFDUDtBQUFBLElBRWxDVyxJQUFJLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixJQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLElBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3JCRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ3hDLElBQUksQ0FBQ0MsWUFBWSxHQUFHRCxDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDNUMsSUFBSSxDQUFDRSxhQUFhLEdBQUdGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUM1QyxJQUFJLENBQUNHLFdBQVcsR0FBR0gsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzFDLElBQUksQ0FBQ0ksMkJBQTJCLEdBQUdKLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQztJQUMvRSxJQUFJLENBQUNLLFFBQVEsR0FBR0wsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQzNDTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUk7SUFDN0IsSUFBSSxDQUFDQyx3QkFBd0IsR0FBRyxJQUFJO0lBRXBDLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNDLFdBQVc7SUFFcEQsSUFBSSxJQUFJLENBQUNILFVBQVUs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QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvci5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2FydC1pdGVtLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9zdGF0ZS1jb3VudHJ5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL2NhcnQtcGFnZS11cHNlbGwtcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9jYXJ0LXBhZ2UtdXBzZWxsLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9jdXN0b20tY2FydC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vbWFrZS1vcHRpb25zLXVuaXF1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgYmluZCwgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNoZWNrSXNHaWZ0Q2VydFZhbGlkIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBzd2FsIGZyb20gJy4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcbmltcG9ydCBDYXJ0SXRlbURldGFpbHMgZnJvbSAnLi9jb21tb24vY2FydC1pdGVtLWRldGFpbHMnO1xuXG5pbXBvcnQgeyBmbG9hdGluZ0NoZWNrb3V0QnV0dG9uIH0gZnJvbSAnLi9jdXN0b20vY3VzdG9tLWNhcnQnO1xuaW1wb3J0IENhcnRQYWdlVXBzZWxsIGZyb20gJy4vY3VzdG9tL2NhcnQtcGFnZS11cHNlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50ID0gJCgnW2RhdGEtY2FydF0nKTtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zID0gJCgnW2RhdGEtY2FydC1hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uID0gbnVsbDtcblxuICAgICAgICB0aGlzLmN1c3RvbUNhcnQgPSB0aGlzLmNvbnRleHQuaXRzQ29uZmlnLmN1c3RvbV9jYXJ0O1xuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUNhcnQpIHtcbiAgICAgICAgICAgIGZsb2F0aW5nQ2hlY2tvdXRCdXR0b24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FydFBhZ2VVcHNlbGwgPSBuZXcgQ2FydFBhZ2VVcHNlbGwodGhpcy5jb250ZXh0KTtcblxuICAgICAgICB0aGlzLnNldEFwcGxlUGF5U3VwcG9ydCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZXRBcHBsZVBheVN1cHBvcnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhcnRVcGRhdGUoJHRhcmdldCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycm9yLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XG5cbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAoIW5ld1F0eSkge1xuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmludmFsaWRFbnRyeU1lc3NhZ2UucmVwbGFjZSgnW0VOVFJZXScsIGludmFsaWRFbnRyeSksXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0geyBwcm9kdWN0Rm9yQ2hhbmdlSWQ6IHByb2R1Y3RJZCwgLi4udGhpcy5jb250ZXh0IH07XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG1vZGFsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnaGlkZS1jb250ZW50Jyk7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCB0aGlzLiRtb2RhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQgPSAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICgkcHJvZHVjdE9wdGlvbnNDb250YWluZXIubGVuZ3RoICYmIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5jc3MoJ2hlaWdodCcsIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbkNoYW5nZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwub25lKE1vZGFsRXZlbnRzLm9wZW5lZCwgb3B0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgQ2FydEl0ZW1EZXRhaWxzKHRoaXMuJG1vZGFsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoY3VycmVudFRhcmdldCkuZmluZCgnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ3AuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY3VzdG9tQ2FydCA/ICdjdXN0b20vY2FydC9jb250ZW50JyA6ICdjYXJ0L2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgIHRvdGFsczogdGhpcy5jdXN0b21DYXJ0ID8gJ2N1c3RvbS9jYXJ0L3RvdGFscycgOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbENoZWNrb3V0QnV0dG9uczogJ2NhcnQvYWRkaXRpb25hbC1jaGVja291dC1idXR0b25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwocmVzcG9uc2UuYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgJChgW2RhdGEtY2FydC1pdGVtaWQ9JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1JZH0nXWAsIHRoaXMuJGNhcnRDb250ZW50KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFtkYXRhLWFjdGlvbj0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbn0nXWApXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBsZXQgcHJlVmFsO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2ZvY3VzJywgZnVuY3Rpb24gb25RdHlGb2N1cygpIHtcbiAgICAgICAgICAgIHByZVZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pLmNoYW5nZShldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm1EZWxldGUnKTtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY29udGV4dC5jYW5jZWxCdXR0b25UZXh0LFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNhcnRcbiAgICAgICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZWRpdF0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkLCBwcm9kdWN0SWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Gb3JtID0gJCgnLmNvdXBvbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUNvZGUoY29kZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFjaGVja0lzR2lmdENlcnRWYWxpZChjb2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHZhbGlkYXRpb25EaWN0aW9uYXJ5LmludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZXNwLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1HaWZ0d3JhcCcpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xuXG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcblxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xuXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xuXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb250ZXh0LnNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIHByb3ZpbmNlOiB0aGlzLmNvbnRleHQuc2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJyksIHNoaXBwaW5nRXJyb3JNZXNzYWdlcyk7XG5cbiAgICAgICAgLy8gcmVsb2FkIGNhcnQgY29udGVudCB3aGVuIGEgQ2FydCBQYWdlIFVwc2VsbCBpdGVtIGlzIGFkZGVkIHRvIHRoZSBjYXJ0XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjcHUtcmVmcmVzaC1jYXJ0LWNvbnRlbnQnLCAoKSA9PiB0aGlzLnJlZnJlc2hDb250ZW50KGZhbHNlKSk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4uL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgc2hpcHBpbmdFcnJvck1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHNoaXBwaW5nRXJyb3JNZXNzYWdlcztcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFc3RpbWF0b3JBbGVydCA9ICQoJy5zaGlwcGluZy1xdW90ZXMnKTtcblxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gZXN0aW1hdG9yIGVycm9yIG1lc3NhZ2VzIGFyZSBiZWluZyBpbmplY3RlZCBpbiBodG1sIGFzIGEgcmVzdWx0XG4gICAgICAgICAgICAvLyBvZiB1c2VyIHN1Ym1pdDsgY2xlYXJpbmcgYW5kIGFkZGluZyByb2xlIG9uIHN1Ym1pdCBwcm92aWRlc1xuICAgICAgICAgICAgLy8gcmVndWxhciBhbm5vdW5jZW1lbnQgb2YgdGhlc2UgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGlmIChzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnKSkge1xuICAgICAgICAgICAgICAgIHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQucmVtb3ZlQXR0cigncm9sZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnLCAnYWxlcnQnKTtcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcy5jb3VudHJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMucHJvdmluY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKHRvZ2dsZUJ1dHRvbiwgYnV0dG9uU2VsZWN0b3IsICR0b2dnbGVDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlID0gKHNlbGVjdG9yVG9BY3RpdmF0ZSkgPT4ge1xuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XG4gICAgICAgICAgICAkKGJ1dHRvblNlbGVjdG9yKS50ZXh0KCQoYCMke3NlbGVjdG9yVG9BY3RpdmF0ZX1gKS50ZXh0KCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWNsb3NlJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItYWRkJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkID0gIXRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZShldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNoaXBwaW5nLWVzdGltYXRlLXNob3dfX2J0bi1uYW1lJywgJGVzdGltYXRvckNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtRGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnI0NhcnRFZGl0UHJvZHVjdEZpZWxkc0Zvcm0nLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSB0aGlzLmNvbnRleHQucHJvZHVjdEZvckNoYW5nZUlkO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLm1vZGFsLWhlYWRlci10aXRsZScpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5odG1sKCkubWF0Y2goLycoLio/KScvKVsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJyB8fCBjZXJ0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubGFiZWwgPyBzdGF0ZU9iai5sYWJlbCA6IHN0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcbiAgICAgKlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAqXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xuICAgICAqL1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBtYWtlT3B0aW9uSWRzVW5pcXVlIGZyb20gJy4vbWFrZS1vcHRpb25zLXVuaXF1ZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0UGFnZVVwc2VsbFByb2R1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcblxuICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaGFzT3B0aW9ucy0td2lyZWQnKTtcblxuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcblxuICAgICAgICB0aGlzLiRmb3JtID0gJCgnZm9ybScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgdGhpcy4kZm9ybSkudmFsKCk7XG5cbiAgICAgICAgdGhpcy5rZXkgPSAnY3B1JzsgLy8gdW5pcXVlIGluZGVudGlmaWVyIGZvciB0aGlzIGN1c3RvbWl6YXRpb25cblxuICAgICAgICB0aGlzLiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKGBbZGF0YS0ke3RoaXMua2V5fS1vcHRpb24tY2hhbmdlXWAsIHRoaXMuJGZvcm0pOyAvLyBpZSA8ZGl2IGNsYXNzPVwib3B0aW9uc1wiIGRhdGEtY3B1LW9wdGlvbi1jaGFuZ2U+XG5cbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25WaWV3KCk7XG4gICAgICAgIC8vIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UodGhpcy4kcHJvZHVjdElkLCB0aGlzLiRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgIC8vICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgLy8gICAgIC8vIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlVmlldyhhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAvLyAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIC8vICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgLy8gfSk7XG5cblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgXCJpc1JlcXVpcmVkXCIgdG8gb3B0aW9ucyB0aGF0IGFyZSByZXF1aXJlZFxuICAgICAqL1xuICAgIGFkZFJlcXVpcmVkQ2xhc3N0b09wdGlvbnMoKSB7XG4gICAgICAgICQoJy5mb3JtLWZpZWxkJywgdGhpcy4kcHJvZHVjdE9wdGlvbnNFbGVtZW50KS50b0FycmF5KCkuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKCQob3B0aW9uKS5maW5kKCdzbWFsbDpjb250YWlucyhcIlJlcXVpcmVkXCIpJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChvcHRpb24pLmFkZENsYXNzKCdpc1JlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBwcm9kdWN0IG9wdGlvbnMgY2hhbmdlc1xuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9uUm93ID0gJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkJyk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3B0aW9uVmlldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2FzIGFuIG9wdGlvbiB3aXRoIGEgdmFsdWUgc2VsZWN0ZWQ/XG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi52YWwoKSAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJyk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uLnNpYmxpbmdzKCdpbnB1dCcpLmF0dHIoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Sb3cuYWRkQ2xhc3MoJ2lzU2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24ucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uUm93LmFkZENsYXNzKCdpc1NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2hhbmdlZE9wdGlvbi5hdHRyKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJvdy5yZW1vdmVDbGFzcygnaXNTZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uLmF0dHIoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAkY2hhbmdlZE9wdGlvbi52YWwoKS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9wdGlvblJvdy5hZGRDbGFzcygnaXNTZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvcHRpb25Sb3cucmVtb3ZlQ2xhc3MoJ2lzU2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3ZhbHVlJywgJGNoYW5nZWRPcHRpb24udmFsKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgkY2hhbmdlZE9wdGlvbi5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0ZWRPcHRpb24gPSAkY2hhbmdlZE9wdGlvbi5maW5kKGBvcHRpb25bdmFsdWU9XCIkeyRjaGFuZ2VkT3B0aW9uLnZhbCgpfVwiXWApO1xuICAgICAgICAgICAgICAgICRzZWxlY3RlZE9wdGlvbi5hdHRyKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICRzZWxlY3RlZE9wdGlvbi5zaWJsaW5ncygnb3B0aW9uJykuYXR0cignc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQncyBhIGRhdGUgc2VsZWN0LCBtYWtlIHN1cmUgYWxsIDMgc2VsZWN0cyBhcmUgZmlsbGVkIGluIGJlZm9yZSBzYXlpbmcgaXQncyBmaWxsZWQgaW5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uLmF0dHIoJ25hbWUnKS5pbmRleE9mKCdtb250aCcpICE9PSAtMSB8fFxuICAgICAgICAgICAgICAgICAgICAkY2hhbmdlZE9wdGlvbi5hdHRyKCduYW1lJykuaW5kZXhPZignZGF5JykgIT09IC0xIHx8XG4gICAgICAgICAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uLmF0dHIoJ25hbWUnKS5pbmRleE9mKCd5ZWFyJykgIT09IC0xXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvdW50IHRoZSBvdGhlciBkYXRlIGZpZWxkcyAoaWYgY2hhbmdlZCBtb250aCwgc2VlIGlmIGRheSBhbmQgeWVhciBhcmUgZmlsbGVkIG91dClcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3RoZXJTZWxlY3RlZERhdGVGaWVsZHMgPSAkY2hhbmdlZE9wdGlvbi5zaWJsaW5ncygnc2VsZWN0JykudG9BcnJheSgpLnJlZHVjZSgoY291bnQsIHNlbGVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoc2VsZWN0KS52YWwoKSA9PT0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudCArIDE7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhbGwgZmllbGRzIGFyZSBmaWxsZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWREYXRlRmllbGRzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Sb3cuYWRkQ2xhc3MoJ2lzU2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblJvdy5hZGRDbGFzcygnaXNTZWxlY3RlZCcpOyAvLyBpdCdzIG5vdCBhIGRhdGUgc2VsZWN0LCBqdXN0IG1hcmsgdGhlIG9wdGlvbiBhcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGNoYW5nZWRPcHRpb24uaXMoJ3RleHRhcmVhJykpIHtcbiAgICAgICAgICAgICAgICAkY2hhbmdlZE9wdGlvbi52YWwoKS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25Sb3cuYWRkQ2xhc3MoJ2lzU2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICA6IG9wdGlvblJvdy5yZW1vdmVDbGFzcygnaXNTZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uLnRleHQoJGNoYW5nZWRPcHRpb24udmFsKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZWxzZSByZW1vdmUgY2xhc3MgKHRoZXJlIHdhcyBubyB2YWx1ZSBmb3IgdGhpcyBvcHRpb24pXG4gICAgICAgICAgICBvcHRpb25Sb3cucmVtb3ZlQ2xhc3MoJ2lzU2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tPcHRpb25zU2VsZWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgTWFrZSBBUEkgY2FsbCBvbiBvcHRpb24gY2hhbmdlIHRvIHVwZGF0ZSBhdmFpbGFiaWxpdHlcbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25WaWV3KCkgIHtcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZSh0aGlzLiRwcm9kdWN0SWQsIHRoaXMuJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIC8vIHN0b2NrIHN0dWZmIChzaG91bGQgd2lyZSB1cCBpbWFnZSBjaGFuZ2UgYXMgd2VsbCBsYXRlcilcbiAgICAgICAgICAgIC8vIGlmIChwcm9kdWN0QXR0cmlidXRlc0RhdGEuc3RvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gICAgICQoJy5jdXJyZW50U3RvY2snLCAkc2NvcGUpLnRleHQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhLnN0b2NrKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgJCgnLmN1cnJlbnRTdG9jaycsICRzY29wZSkudGV4dCgnJyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBDaGVjayB3aGV0aGVyIGFsbCByZXF1aXJlZCBvcHRpb25zIGFyZSBzZWxlY3RlZFxuICAgICAqL1xuICAgIGNoZWNrT3B0aW9uc1NlbGVjdGVkKCkgIHtcbiAgICAgICAgLypcbiAgICAgICAgIyMgc2VlIGlmIGFsbCBvcHRpb25zIGFyZSBzZWxlY3RlZFxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBudW1iZXJSZXF1aXJlZE9wdGlvbnMgPSB0aGlzLiRzY29wZS5maW5kKCcuZm9ybS1maWVsZC5pc1JlcXVpcmVkJykubGVuZ3RoO1xuICAgICAgICBjb25zdCBudW1iZXJTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLiRzY29wZS5maW5kKCcuZm9ybS1maWVsZC5pc1JlcXVpcmVkLmlzU2VsZWN0ZWQnKS5sZW5ndGg7XG4gICAgICAgIC8vIGNvbnN0ICRhZGRUb0NhcnRCdXR0b24gPSAkZm9ybS5maW5kKCcuY2FyZC1hY3Rpb25zIC5idXR0b24nKTtcbiAgICAgICAgLy8gJGFkZFRvQ2FydEJ1dHRvbi5yZW1vdmVDbGFzcygnYnV0dG9uLS1zdWNjZXNzJyk7XG4gICAgICAgIGlmIChudW1iZXJSZXF1aXJlZE9wdGlvbnMgPT09IDAgfHwgbnVtYmVyUmVxdWlyZWRPcHRpb25zIDw9IG51bWJlclNlbGVjdGVkT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7IC8vIGFkZCBjbGFzcyB0byBwcm9kdWN0IGZvciBlYXN5IGFkZGluZyB0byBjYXJ0XG4gICAgICAgICAgICAkKCcuY3B1X19tb2RhbCcpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpOyAvLyB1cGRhdGUgdGV4dCBmb3IgdXNlciBhcyB3ZWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTsgLy8gcmVtb3ZlIGNsYXNzIHNpbmNlIG5vdCBhbGwgb3B0aW9ucyBmaWxsZWQgaW5cbiAgICAgICAgICAgICQoJy5jcHVfX21vZGFsJykucmVtb3ZlQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7IC8vIHVwZGF0ZSB0ZXh0IGZvciB1c2VyIGFzIHdlbGxcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKlxuICAgICAqL1xuICAgIHVwZGF0ZVByaWNlVmlldyhwcmljZSkge1xuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICQoYFtkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdYCwgdGhpcy4kc2NvcGUpLmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlVmlldyhkYXRhKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBwcmljZVxuICAgICAgICAvLyBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyhkYXRhLnByaWNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgaW1hZ2VcbiAgICAgICAgY29uc3QgaW1hZ2VFbCA9ICQoYC5jcHVfX2l0ZW0taW1nYCwgdGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLmltYWdlKSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBkYXRhLmltYWdlLmRhdGEucmVwbGFjZSgnezpzaXplfScsICczMDB4MzAwJyk7XG4gICAgICAgICAgICBpbWFnZUVsLmF0dHIoJ3NyYycsIGltYWdlU3JjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlRWwuYXR0cignc3JjJywgaW1hZ2VFbC5kYXRhKCdzcmMnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIG1lc3NhZ2UgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgIGNvbnN0IG9wdGlvbk1lc3NhZ2UgPSBkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2U7XG4gICAgICAgIGlmIChvcHRpb25NZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG9wdGlvbk1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLWVycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlLmFkZCgnLmNwdV9fbW9kYWwnKSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZScpLCAxMCk7XG5cbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJylcbiAgICAgICAgICAgICAgICAucHJldignaW5wdXQnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcbiAgICAgICAgICAgIGlmICgkYXR0cmlidXRlLnBhcmVudCgpLnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpXG4gICAgICAgICAgICAgICAgLnByZXYoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8uY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBiaW5kIGV2ZW50c1xuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIG1ha2VPcHRpb25JZHNVbmlxdWUodGhpcy4kc2NvcGUsIHRoaXMuJHByb2R1Y3RJZCwgdGhpcy5rZXkpOyAvLyBtYWtlIG9wdGlvbnMgdW5pcXVlIHNvIHRoZXJlIGFlciBubyBjb25mbGljdHMgd2hlbiBzZWxlY3Rpbmcgb3B0aW9uc1xuXG4gICAgICAgIHRoaXMuYWRkUmVxdWlyZWRDbGFzc3RvT3B0aW9ucygpOyAvLyBhZGQgXCJpc1JlcXVpcmVkXCIgdG8gcmVxdWlyZWQgb3B0aW9uc1xuICAgICAgICB0aGlzLmNoZWNrT3B0aW9uc1NlbGVjdGVkKCk7XG5cbiAgICAgICAgLy8gbGlzdGVuIGZvciBvcHRpb24gY2hhbmdlc1xuICAgICAgICB0aGlzLiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuY2hhbmdlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50LCBldmVudC50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICAvLyB1cGRhdGUgb3B0aW9ucyBzZWxlY3RlZCBvbiBsb2FkXG4gICAgICAgIHRoaXMuJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS50cmlnZ2VyKCdjaGFuZ2UnKTsgLy8gdHJpZ2dlciBzZWxlY3RlZCBjaGVja2JveCBvcHRpb25zIHRvIHVwZGF0ZSBzdGFydGluZyBjaGVja2JveCB2YWx1ZXNcbiAgICAgICAgdGhpcy4kcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykudHJpZ2dlcignY2hhbmdlJyk7IC8vIHRyaWdnZXIgc2VsZWN0ZWQgcmFkaW8gb3B0aW9ucyB0byB1cGRhdGUgc3RhcnRpbmcgcmFkaW8gYnV0dG9ucyB2YWx1ZXNcbiAgICAgICAgdGhpcy4kcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudHJpZ2dlcignY2hhbmdlJyk7IC8vIHRyaWdnZXIgdXBkYXRlIG9uIGlucHV0IHRleHQgdG8gY2F0Y2ggYW55IGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIHRoaXMuJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykudHJpZ2dlcignY2hhbmdlJyk7IC8vIHRyaWdnZXIgdXBkYXRlIG9uIGlucHV0IG51bWJlcnMgdG8gY2F0Y2ggYW55IGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIHRoaXMuJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCd0ZXh0YXJlYScpLnRyaWdnZXIoJ2NoYW5nZScpOyAvLyB0cmlnZ2VyIHVwZGF0ZSBvbiB0ZXh0YXJlYSB0cCBjYXRjaCBhbnkgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy4kcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnBhcmVudCgpLnRyaWdnZXIoJ2NoYW5nZScpOyAvLyB0cmlnZ2VyIHNlbGVjdGVkIG9wdGlvbnMgdG8gdXBkYXRlIHN0YXJ0aW5nIHNlbGVjdCBib3ggdmFsdWVzXG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCBDYXJ0UGFnZVVwc2VsbFByb2R1Y3QgZnJvbSAnLi9jYXJ0LXBhZ2UtdXBzZWxsLXByb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgbWFrZU9wdGlvbklkc1VuaXF1ZSBmcm9tICcuL21ha2Utb3B0aW9ucy11bmlxdWUnO1xuaW1wb3J0IGZvcm1hdENhcm91c2VsIGZyb20gJy4uL2NvbW1vbi9jYXJvdXNlbC9pbmRleCc7XG5pbXBvcnQgdXBzZWxsU3VpdGVDUFUgZnJvbSAnLi91cHNlbGwtYXJyYXktY2FydC1wYWdlJztcblxuaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuLi9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7XG5cbi8vICBBcHIgMjAxOTogdXBkYXRlZCB2ZXJzaW9uIGluY2x1ZGVzIElUUyBVcHNlbGwgU3VpdGVcbmNvbnN0IFZFUlNJT04gPSAnMi4wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydFBhZ2VVcHNlbGwge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ludHVpdFNvbHV0aW9ucy5uZXQgLSBDYXJ0IFBhZ2UgVXBzZWxsJywgVkVSU0lPTik7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9wdGlvbnMgPSAncmVsYXRlZCcsICdzaW1pbGFyJywgJ2N1c3RvbSBmaWVsZHMnXG4gICAgICAgICAqIGVycm9yRGVmYXVsdCA9IGJhY2t1cCBtb2RlOyBvbmx5IG5lY2Vzc2FyeSB3aXRoIFVwc2VsbCBTdWl0ZVxuICAgICAgICAgKiAtLSByZWxhdGVkID0gYXV0b21hdGljYWxseSBsb2FkcyByZWxhdGVkIHByb2R1Y3RzIGZyb20gYSByYW5kb20gaXRlbSBpbiB0aGUgY2FydFxuICAgICAgICAgKiAtLSBzaW1pbGFyID0gYXV0b21hdGljYWxseSBsb2FkcyBzaW1pbGFyIGJ5IHZpZXcgcHJvZHVjdHMgZnJvbSBhIHJhbmRvbSBpdGVtIGluIHRoZSBjYXJ0XG4gICAgICAgICAqIC0tIGN1c3RvbSBmaWVsZHMgPSB3aWxsIGxvYWQgdGhlIHByb2R1Y3RzIHNwZWNpZmllZCBieSB0aGUgY2FydCBpdGVtJ3MgY3VzdG9tIGZpZWxkc1xuICAgICAgICAgKiAtLSB1cHNlbGwgc3VpdGUgPSB3aWxsIGxvYWQgcHJvZHVjdHMgc3BlY2lmaWVkIGJ5IFVwc2VsbCBTdWl0ZSBDU1ZzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vZGUgPSAndXBzZWxsIHN1aXRlJztcbiAgICAgICAgdGhpcy5lcnJvckRlZmF1bHQgPSAncmVsYXRlZCc7XG4gICAgICAgIHRoaXMuc2hvd01vYmlsZUluQ2Fyb3VzZWwgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaW1pdCA9IDM7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gJCgnI2NwdSAubG9hZGluZ092ZXJsYXknKTtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkID0gdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZC5iaW5kKHV0aWxzLmFwaS5wcm9kdWN0KTsgLy8gcmVxdWlyZWQgdG8ga2VlcCBzY29wZSBvZiB1dGlscyB0byB0aGUgdXRpbHNcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UgPSB1dGlscy5hcGkuZ2V0UGFnZS5iaW5kKHV0aWxzLmFwaSk7IC8vIHJlcXVpcmVkIHRvIGtlZXAgc2NvcGUgb2YgdXRpbHMgdG8gdGhlIHV0aWxzXG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIGR1cGxpY2F0ZSBpdGVtcyBmcm9tIGFycmF5XG4gICAgICpcbiAgICAgKiBwdWxsZWQgZnJvbSBzdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTIyOTY0NS9yZW1vdmUtZHVwbGljYXRlLXZhbHVlcy1mcm9tLWpzLWFycmF5XG4gICAgICogQHBhcmFtIHthcnJheX0gdXBzZWxsVGFyZ2V0cyAtIGFycmF5IG9mIGl0ZW1zIHdlIHdhbnQgdG8gc3RyaXAgb3V0IGFueSBkdXBsaWNhdGUgaXRlbXMgZnJvbVxuICAgICAqL1xuICAgIHJlbW92ZUR1cGxpY2F0ZVRhcmdldHModXBzZWxsVGFyZ2V0cykge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHVwc2VsbFRhcmdldHMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgY2FydCBpdGVtcyBVUkxzIGFuZCBQcm9kdWN0IElkcyBzbyB3ZSBkb24ndCB0cnkgdG8gdXBzZWxsIGFuIGl0ZW0gdGhhdCdzIGFscmVhZHkgaW4gdGhlIGNhcnRcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB1cHNlbGxUYXJnZXRzIC0gYXJyYXkgb2YgaXRlbXMgd2Ugd2FudCB0byBzdHJpcCBvdXQgYW55IGNhcnQgaXRlbSBtYXRjaGVzIGZyb21cbiAgICAgKi9cbiAgICByZW1vdmVDYXJ0SXRlbVRhcmdldHModXBzZWxsVGFyZ2V0cykge1xuICAgICAgICAvLyBnZXQgYWxsIGRhdGEgZnJvbSB0aGUgY2FydCBpdGVtc1xuICAgICAgICBjb25zdCBjYXJ0SXRlbURhdGEgPSBbXTtcbiAgICAgICAgJCgnW2RhdGEtdXBzZWxsXScpLnRvQXJyYXkoKS5mb3JFYWNoKGNhcnRJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3R1cmwgPSAkKGNhcnRJdGVtKS5kYXRhKCdwcm9kdWN0LXVybCcpLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLm9yaWdpbiwgJycpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChjYXJ0SXRlbSkuZGF0YSgncHJvZHVjdC1pZCcpLnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgICAgICAgICBjYXJ0SXRlbURhdGEucHVzaChwcm9kdWN0dXJsLCBwcm9kdWN0SWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gb25seSBrZWVwIHVwc2VsbCBpdGVtcyB0aGF0IGFyZW4ndCB3aXRoaW4gb3VyIGNhcnRJdGVtRGF0YSBhcnJheVxuICAgICAgICBjb25zdCByZXN1bHQgPSB1cHNlbGxUYXJnZXRzLnJlZHVjZSgodXBzZWxsSXRlbXMsIHVwc2VsbGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJ0SXRlbURhdGEuaW5kZXhPZih1cHNlbGxpdGVtKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB1cHNlbGxJdGVtcy5wdXNoKHVwc2VsbGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVwc2VsbEl0ZW1zO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIC8vIHJldHVybiByZXN1bHRcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgcmFuZG9tIGludCBnaXZlbiBhIG1heFxuICAgICAqL1xuICAgIGdldFJhbmRvbUludChtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYXV0b21hdGljYWxseSBsb2FkIHByb2R1Y3RzIGZyb20gdGhlIGNhcnQgaXRlbSdzIGVpdGhlciByZWxhdGVkIHByb2R1Y3RzIG9yIHNpbWlsYXIgYnkgdmlldyBpdGVtc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gXCJyZWxhdGVkXCIgb3IgXCJzaW1pbGFyXCJcbiAgICAgKi9cbiAgICBsb2FkQXV0b1RhcmdldHModHlwZSkge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLmdldFJhbmRvbUludCgkKCcuY2FydC1pdGVtJykubGVuZ3RoKTsgLy8gZ2V0IHJhbmRvbSBpdGVtIGluZGV4IChwaWNrIHJhbmRvbSBpdGVtKVxuICAgICAgICBjb25zdCBpdGVtSWQgPSAkKCcuY2FydC1pdGVtJykuZXEoaXRlbUluZGV4IHx8IDApLmRhdGEoJ3Byb2R1Y3QtaWQnKTsgLy8gZ2V0IHByb2R1Y3QgaWQgb2YgdGhhdCByYW5kb20gaXRlbVxuICAgICAgICBpZiAoaXRlbUlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuICQoJyNjcHUnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlIGlmIHdlIGFscmVhZHkgYWpheCdkIGZvciB0aGVzZSB1cHNlbGwgaXRlbXNcbiAgICAgICAgbGV0IHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjcHVfX2l0ZW1zJHtpdGVtSWR9YCkpIHx8IFtdO1xuICAgICAgICBpZiAoc3RvcmVkRGF0YS5sZW5ndGgpIHsgLy8gaWYgYWxyZWFkeSBhamF4ZWQgYW5kIHN0b3JlZCB1cHNlbGwgaXRlbXNcbiAgICAgICAgICAgIHN0b3JlZERhdGEgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZVRhcmdldHMoc3RvcmVkRGF0YSk7IC8vIHJlbW92ZSBkdXBsaWNhdGUgdXBzZWxsIHRhcmdldHNcbiAgICAgICAgICAgIHN0b3JlZERhdGEgPSB0aGlzLnJlbW92ZUNhcnRJdGVtVGFyZ2V0cyhzdG9yZWREYXRhKTsgLy8gcmVtb3ZlIGFueSB1cHNlbGwgdGFyZ2V0cyB0aGF0IG1hdGNoIGFuIGl0ZW0gYWxyZWFkeSBpbiB0aGUgY2FydFxuICAgICAgICAgICAgdGhpcy5sb2FkVXBzZWxsVGFyZ2V0cyhzdG9yZWREYXRhKTsgLy8gbG9hZCB0aG9zZSBzdG9yZWQgdXBzZWxsIGl0ZW1zXG4gICAgICAgIH0gZWxzZSB7IC8vIG90aGVyd2lzZVxuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogYGN1c3RvbS9jYXJ0LXBhZ2UtdXBzZWxsLXRhcmdldHMtLSR7dHlwZX1gLFxuICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkX3Byb2R1Y3RzOiB7IGxpbWl0OiA3MCwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbWlsYXJfYnlfdmlld3M6IHsgbGltaXQ6IDcwLCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKGl0ZW1JZCwgb3B0cywgKGVyciwgcmVzKSA9PiB7IC8vIGFqYXggZm9yIHRoZSBmaXJzdCBpdGVtJ3MgdXBzZWxsIGl0ZW1zIChzdWdnZXN0ZWQgcHJvZHVjdHMpXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnI2NwdScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldHMgPSBKU09OLnBhcnNlKHJlcykgfHwgW107XG4gICAgICAgICAgICAgICAgdGFyZ2V0cyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlVGFyZ2V0cyh0YXJnZXRzKTsgLy8gcmVtb3ZlIGR1cGxpY2F0ZSB1cHNlbGwgdGFyZ2V0c1xuICAgICAgICAgICAgICAgIHRhcmdldHMgPSB0aGlzLnJlbW92ZUNhcnRJdGVtVGFyZ2V0cyh0YXJnZXRzKTsgLy8gcmVtb3ZlIGFueSB1cHNlbGwgdGFyZ2V0cyB0aGF0IG1hdGNoIGFuIGl0ZW0gYWxyZWFkeSBpbiB0aGUgY2FydFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjcHVfX2l0ZW1zJHtpdGVtSWR9YCwgSlNPTi5zdHJpbmdpZnkodGFyZ2V0cykpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFVwc2VsbFRhcmdldHModGFyZ2V0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgYXJyYXkgb2YgdXBzZWxsIHByb2R1Y3QgVVJMcyBhbmQvb3IgSURzXG4gICAgICovXG4gICAgbG9hZEN1c3RvbUZpZWxkVGFyZ2V0cygpIHtcbiAgICAgICAgbGV0IHRhcmdldHMgPSBbXTtcbiAgICAgICAgJCgnW2RhdGEtdXBzZWxsXScpLnRvQXJyYXkoKS5mb3JFYWNoKGNhcnRJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwc2VsbEl0ZW1zID0gJChjYXJ0SXRlbSkuZGF0YSgndXBzZWxsJyk7XG4gICAgICAgICAgICBpZiAodXBzZWxsSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdXBzZWxsSXRlbXNcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2godXBzZWxsSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBzZWxsSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzLnB1c2godXBzZWxsSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgbW9kZSBpcyBzZXQgdG8gY3VzdG9tIGZpZWxkcyBidXQgbm8gaXRlbXMgaGF2ZSBjdXN0b20gZmllbGRzIGFwcGxpZWQsIGRlZmF1bHQgdG8gdXNpbmcgcmVsYXRlZCBwcm9kdWN0c1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRBdXRvVGFyZ2V0cygncmVsYXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldHMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZVRhcmdldHModGFyZ2V0cyk7IC8vIHJlbW92ZSBkdXBsaWNhdGUgdXBzZWxsIHRhcmdldHNcbiAgICAgICAgdGFyZ2V0cyA9IHRoaXMucmVtb3ZlQ2FydEl0ZW1UYXJnZXRzKHRhcmdldHMpOyAvLyByZW1vdmUgYW55IHVwc2VsbCB0YXJnZXRzIHRoYXQgbWF0Y2ggYW4gaXRlbSBhbHJlYWR5IGluIHRoZSBjYXJ0XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRVcHNlbGxUYXJnZXRzKHRhcmdldHMpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRDU1ZUYXJnZXRzICgpICAgIHtcbiAgICAgICAgLy8gIGdldCB0aGUgcHJldmlvdXNseSBBSkFYZWQgcHJvZHVjdHMgZnJvbSBzZXNzaW9uU3RvcmFnZVxuICAgICAgICBjb25zdCBjcHVIVE1MdGV4dCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjcHVDYXJkc1wiKTtcbiAgICAgICAgY29uc3QgY3B1SFRNTCA9IHVwc2VsbFN1aXRlQ1BVLnBhcnNlQXJyYXlGcm9tU3RyaW5nKGNwdUhUTUx0ZXh0KTtcblxuICAgICAgICAvLyAgaWYgbm90aGluZyBoYXMgYmVlbiBkb3dubG9hZGVkLFxuICAgICAgICAvLyAgcmV2ZXJ0IHRvIGJhY2t1cCBtb2RlXG4gICAgICAgIGlmICghY3B1SFRNTC5sZW5ndGgpIHJldHVybiB0aGlzLmxvYWRBdXRvVGFyZ2V0cyh0aGlzLmVycm9yRGVmYXVsdCk7XG5cbiAgICAgICAgLy8gIGRpc3BsYXkgdGhlIHByZXZpb3VseSBkb3dubG9hZGVkIHByb2R1Y3RzXG4gICAgICAgIGNwdUhUTUwuZm9yRWFjaChjYXJkID0+ICQoJyNjcHUgLmNwdV9fbGlzdC0tY3VzdG9tZmllbGRzJykuYXBwZW5kKGNhcmQuaHRtbCkpXG5cbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIHJvb20gZm9yIG1vcmUgcHJvZHVjdHMsXG4gICAgICAgIC8vICBmaWxsIHRoZSByZXN0IG9mIHRoZSBhZGQtb24gYnlcbiAgICAgICAgLy8gIGFkZGluZyBwcm9kdWN0cyBmcm9tIHRoZSBDU1ZzXG4gICAgICAgIC8vICBvZiBwcm9kdWN0cyBhbHJlYWR5IGluIHRoZSBDUFVcbiAgICAgICAgbGV0IHJlbWFpbmluZ1Nsb3RzID0gdGhpcy5wcm9kdWN0TGltaXQgLSBjcHVIVE1MLmxlbmd0aDtcbiAgICAgICAgaWYgKHJlbWFpbmluZ1Nsb3RzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRzID0gYXdhaXQgdXBzZWxsU3VpdGVDUFUuZ2V0QWRkaXRpb25hbFByb2R1Y3RzKGNwdUhUTUwubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5wcm9kdWN0X2lkKSwgcmVtYWluaW5nU2xvdHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRVcHNlbGxUYXJnZXRzKHRhcmdldHMpO1xuICAgICAgICAgICAgfSAgIGNhdGNoKGVycikgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ1BVIHBhcnNlIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwbHlVcHNlbGxIYW5kbGVycygpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBoYW5kbGUgYWRkaW5nIGl0ZW1zIHRvIGNhcnRcbiAgICAgKi9cbiAgICBhZGRUb0NhcnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50cygnLmNwdV9faXRlbScpO1xuICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdoYXNFcnJvcicpOyAvLyByZW1vdmUgYW55IGVycm9yIGhpZ2hsaWdodGluZ1xuICAgICAgICAvLyBtYWtlIHN1cmUgYWxsIG9wdGlvbnMgYXJlIHNlbGVjdGVkXG4gICAgICAgIGlmIChwcm9kdWN0Lmhhc0NsYXNzKCdoYXNPcHRpb25zJykgJiYgIXByb2R1Y3QuaGFzQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIHByb2R1Y3QuaGFzQ2xhc3MoJ2hhc09wdGlvbnMtLXdpcmVkJylcbiAgICAgICAgICAgICAgICA/ICQoJy5xYWF0eF9fb3B0aW9ucycsIHByb2R1Y3QpLnNsaWRlRG93bigpIC8vIGlmIG9wdGlvbnMgbG9hZGVkLCBqdXN0IHNob3cgdGhlbVxuICAgICAgICAgICAgICAgIDogdGhpcy50b2dnbGVPcHRpb25zKGV2ZW50KTsgLy8gb3B0aW9ucyBhcmVuJ3QgbG9hZGVkLCBsb2FkIHRoZW0gKyBzaG93IHRoZW1cbiAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2hhc0Vycm9yJyk7XG4gICAgICAgICAgICAkKCcuY3B1X19pdGVtLmlzQmVpbmdBZGRlZCcpLnJlbW92ZUNsYXNzKCdpc0JlaW5nQWRkZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6ICdQbGVhc2UgbWFrZSBzdXJlIGFsbCByZXF1aXJlZCBvcHRpb25zIGhhdmUgYmVlbiBzZWxlY3RlZCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFjdHVhbGx5IGFkZCB0byBjYXJ0XG4gICAgICAgIHRoaXMubG9hZGluZy5zaG93KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSAkKCcuY3B1X19pdGVtLWZvcm0nLCBwcm9kdWN0KTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChuZXcgRm9ybURhdGEoZm9ybVswXSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjsgLy8gdGFrZSBub3RlIG9mIGVycm9yc1xuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkgeyAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2hhc0Vycm9yJyk7IC8vIGhpZ2hsZ2loaHQgZXJyb3IgaXRlbVxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yT2Zmc2V0ID0gcHJvZHVjdC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IChlcnJvck9mZnNldCAtIDIwKSB9LCA3MDApOyAvLyBzY3JvbGwgdXNlciB0byB0aGUgZXJyb3IgcHJvZHVjdFxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBjbGFzcyBmcm9tIG91ciAncXVlZFwiIGl0ZW1zXG4gICAgICAgICAgICAgICAgJCgnLmNwdV9faXRlbS5pc0JlaW5nQWRkZWQnKS5yZW1vdmVDbGFzcygnaXNCZWluZ0FkZGVkJyk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQgdXNlciBvZiBlcnJvclxuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5oaWRlKCk7XG4gICAgICAgICAgICAvLyBwcm9kdWN0LmFkZENsYXNzKCd3YXNBZGRlZCcpO1xuICAgICAgICAgICAgLy8gJCgnLmNwdV9faXRlbS1idXR0b24nLCBwcm9kdWN0KS50ZXh0KCdBZGRlZCB0byBDYXJ0Jyk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdjcHUtcmVmcmVzaC1jYXJ0LWNvbnRlbnQnKTtcbiAgICAgICAgICAgIC8vIGlmIChwcm9kdWN0Lmhhc0NsYXNzKCdpc0JlaW5nQWRkZWQnKSkge1xuICAgICAgICAgICAgLy8gICAgIHByb2R1Y3QucmVtb3ZlQ2xhc3MoJ2lzQmVpbmdBZGRlZCcpO1xuICAgICAgICAgICAgLy8gICAgICgkKCcuY3B1X19pdGVtLmlzQmVpbmdBZGRlZCcpICYmICQoJy5jcHVfX2l0ZW0uaXNCZWluZ0FkZGVkJykubGVuZ3RoKVxuICAgICAgICAgICAgLy8gICAgICAgICA/ICQoJy5jcHVfX2l0ZW0uaXNCZWluZ0FkZGVkJykuZXEoMCkuZmluZCgnLnFhYXRjX19hZGR0b2NhcnQnKS50cmlnZ2VyKCdjbGljaycpIC8vIHRyaWdnZXIgc3VibWl0dGluZyBuZXh0IHByb2R1Y3QgdG8gdGhlIGNhcnRcbiAgICAgICAgICAgIC8vICAgICAgICAgOiB3aW5kb3cubG9jYXRpb24gPSAnL2NhcnQucGhwJztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd2hlbiBtb2RhbCBvcHRpb24gY2hhbmdlZCB3ZSBuZWVkIHRvIHN5bmMgdGhlIFwicmVhbFwiIGZvcm0uIFN5bmMgb3B0aW9ucyBzZWxlY3RlZCBpbiBzY29wZTEgd2l0aCBzY29wZTJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvZHVjdElkXG4gICAgICovXG4gICAgc3luY0Zvcm1PcHRpb24oZXZlbnQsIHByb2R1Y3RJZCkge1xuICAgICAgICBjb25zdCBvcHQgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQnKTtcbiAgICAgICAgY29uc3QgdHlwZSA9ICQob3B0KS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgbGV0IHRhcmdldElkID0gbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbnB1dC1jaGVja2JveCc6XG4gICAgICAgICAgICBjYXNlICdzZXQtcmVjdGFuZ2xlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NldC1yYWRpbyc6XG4gICAgICAgICAgICBjYXNlICdwcm9kdWN0LWxpc3QnOlxuICAgICAgICAgICAgY2FzZSAnc3dhdGNoJzpcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkKCdpbnB1dDpjaGVja2VkJywgb3B0KTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0YXJnZXQucHJvcCgnaWQnKS5yZXBsYWNlKGBfJHtwcm9kdWN0SWR9YCwgJycpLnJlcGxhY2UoJ21vZGFsXycsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgJChgIyR7dGFyZ2V0SWR9YCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkKGAjJHt0YXJnZXRJZH1gKS5zaWJsaW5ncygnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gJChldmVudC50YXJnZXQpLnByb3AoJ2lkJykucmVwbGFjZShgXyR7cHJvZHVjdElkfWAsICcnKS5yZXBsYWNlKCdtb2RhbF8nLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2V0LXNlbGVjdCc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJCgnLmZvcm0tc2VsZWN0Jywgb3B0KTtcbiAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHRhcmdldC5wcm9wKCdpZCcpLnJlcGxhY2UoYF8ke3Byb2R1Y3RJZH1gLCAnJykucmVwbGFjZSgnbW9kYWxfJywgJycpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbCgpO1xuICAgICAgICAgICAgICAgICQoYCMke3RhcmdldElkfWApLnZhbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbnB1dC10ZXh0JzpcbiAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkKCcuZm9ybS1pbnB1dCcsIG9wdCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0YXJnZXQucHJvcCgnaWQnKS5yZXBsYWNlKGBfJHtwcm9kdWN0SWR9YCwgJycpLnJlcGxhY2UoJ21vZGFsXycsICcnKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhcmdldC52YWwoKTtcbiAgICAgICAgICAgICAgICAkKGAjJHt0YXJnZXRJZH1gKS52YWwodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvcmNlIHVwZGF0ZSBvbiB0aGUgXCJyZWFsXCIgZm9ybVxuICAgICAgICAkKGAjJHt0YXJnZXRJZH1gKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdG8gY2FydCBmcm9tIG1vZGFsXG4gICAgICovXG4gICAgYWRkVG9DYXJ0RnJvbU1vZGFsKG1vZGFsQ29udGVudCwgcHJvZHVjdCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IG1vZGFsQ29udGVudC5wYXJlbnRzKCcuY3B1X19tb2RhbCcpO1xuICAgICAgICBpZiAoIW1vZGFsLmhhc0NsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgcmVxdWlyZWQgb3B0aW9ucyBoYXZlIGJlZW4gc2VsZWN0ZWQnLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY3B1X19pdGVtLWJ1dHRvbi0tb3B0aW9ucycsIHByb2R1Y3QpLnRyaWdnZXIoJ2NsaWNrJyk7IC8vIHNob3cgb3B0aW9ucyBhZ2FpbiBpZiB0cmllZCBhZGRpbmcgdG8gY2FydCBiZWZvcmUgc2VsZWN0aW5nIGFsbCBvcHRpb25zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICQoJy5jcHVfX2l0ZW0tYnV0dG9uLS1hZGR0b2NhcnQnLCBwcm9kdWN0KS50cmlnZ2VyKCdjbGljaycpOyAvLyB0cmlnZ2VyIGFkZCB0byBjYXJ0IGJ1dHRvbiBjbGljayBvbiBtYWluIHByb2R1Y3RcbiAgICAgICAgc3dhbC5jbG9zZSgpOyAvLyBjbG9zZSBtb2RhbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNob3cgYW5kIGxvYWQgaWYgbmVlZGVkIHRoaXMgcHJvZHVjdCdzIG9wdGlvbnNcbiAgICAgKi9cbiAgICBzaG93T3B0aW9ucyhlKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSAkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLmNwdV9faXRlbScpO1xuICAgICAgICBjb25zdCBuYW1lID0gJCgnLmNwdV9faXRlbS1uYW1lJywgcHJvZHVjdCkudGV4dCgpO1xuICAgICAgICBjb25zdCBvcHRpb25NYXJrdXAgPSAkKCcuY3B1X19pdGVtLW9wdGlvbnMnLCBwcm9kdWN0KS5odG1sKCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsIHByb2R1Y3QpLnZhbCgpO1xuXG4gICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogYE9wdGlvbnMgZm9yICR7bmFtZX1gLFxuICAgICAgICAgICAgaHRtbDogb3B0aW9uTWFya3VwLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6ICdjcHVfX21vZGFsJyxcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgIG9uT3BlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBtb2RhIGxIVE1MIGlzIGNsb25lZCBpdCBkb2Vzbid0IGhhdmUgYW55IGhhbmRsZXJzIGFwcGxpZWQgdG8gaXQuIFRoaXMgaGFuZGxlcyB0aGUgXCJmYWtlXCIgY2xvbmVkIG9wdGlvbnMgdG8gdXBkYXRlIHRoZSBcInJlYWxcIiBvcHRpb25zXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gJChzd2FsLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgbWFrZU9wdGlvbklkc1VuaXF1ZShtb2RhbENvbnRlbnQsIHByb2R1Y3RJZCwgJ21vZGFsJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtY3B1LW9wdGlvbi1jaGFuZ2VdJywgbW9kYWxDb250ZW50KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNGb3JtT3B0aW9uKGV2ZW50LCBwcm9kdWN0SWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb25zIHVubGVzcyB0aGVyZSdzIGFuIGVycm9yLi4gdGhlbiB3ZSdsbCBnZXQgc3R1Y2sgaW4gYSBsb29wXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0Lmhhc0NsYXNzKCdoYXNPcHRpb25zLS1lcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNwdS1vcHRpb24tY2hhbmdlXScsIG1vZGFsQ29udGVudCkuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykudHJpZ2dlcignY2hhbmdlJyk7IC8vIHRyaWdnZXIgc2VsZWN0ZWQgY2hlY2tib3ggb3B0aW9ucyB0byB1cGRhdGUgc3RhcnRpbmcgY2hlY2tib3ggdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNwdS1vcHRpb24tY2hhbmdlXScsIG1vZGFsQ29udGVudCkuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS50cmlnZ2VyKCdjaGFuZ2UnKTsgLy8gdHJpZ2dlciBzZWxlY3RlZCByYWRpbyBvcHRpb25zIHRvIHVwZGF0ZSBzdGFydGluZyByYWRpbyBidXR0b25zIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1jcHUtb3B0aW9uLWNoYW5nZV0nLCBtb2RhbENvbnRlbnQpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudHJpZ2dlcignY2hhbmdlJyk7IC8vIHRyaWdnZXIgdXBkYXRlIG9uIGlucHV0IHRleHQgdG8gY2F0Y2ggYW55IGRlZmF1bHQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNwdS1vcHRpb24tY2hhbmdlXScsIG1vZGFsQ29udGVudCkuZmluZCgnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLnRyaWdnZXIoJ2NoYW5nZScpOyAvLyB0cmlnZ2VyIHVwZGF0ZSBvbiBpbnB1dCBudW1iZXJzIHRvIGNhdGNoIGFueSBkZWZhdWx0IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1jcHUtb3B0aW9uLWNoYW5nZV0nLCBtb2RhbENvbnRlbnQpLmZpbmQoJ3RleHRhcmVhJykudHJpZ2dlcignY2hhbmdlJyk7IC8vIHRyaWdnZXIgdXBkYXRlIG9uIHRleHRhcmVhIHRwIGNhdGNoIGFueSBkZWZhdWx0IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1jcHUtb3B0aW9uLWNoYW5nZV0nLCBtb2RhbENvbnRlbnQpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnBhcmVudCgpLnRyaWdnZXIoJ2NoYW5nZScpOyAvLyB0cmlnZ2VyIHNlbGVjdGVkIG9wdGlvbnMgdG8gdXBkYXRlIHN0YXJ0aW5nIHNlbGVjdCBib3ggdmFsdWVzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vcHRpb25IYW5kbGVyc1twcm9kdWN0SWRdLnVwZGF0ZU9wdGlvblZpZXcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkhhbmRsZXJzW3Byb2R1Y3RJZF0uY2hlY2tPcHRpb25zU2VsZWN0ZWQobW9kYWxDb250ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYWRkaW5nIHRvIGNhcnQgZnJvbSBtb2RhbFxuICAgICAgICAgICAgICAgICQoJy5jcHVfX2l0ZW0tYnV0dG9uLS1tb2RhbGFkZHRvY2FydCcsIG1vZGFsQ29udGVudCkub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5hZGRUb0NhcnRGcm9tTW9kYWwobW9kYWxDb250ZW50LCBwcm9kdWN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGFwcGx5IHVwc2VsbCBoYW5kbGVyc1xuICAgICAqL1xuICAgIGFwcGx5VXBzZWxsSGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMub3B0aW9uSGFuZGxlcnMgPSB7fTtcbiAgICAgICAgJCgnLmNwdV9faXRlbS5oYXNPcHRpb25zJykudG9BcnJheSgpLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgdGhpc0lEID0gJChwcm9kdWN0KS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25IYW5kbGVyc1t0aGlzSURdID0gbmV3IENhcnRQYWdlVXBzZWxsUHJvZHVjdCgkKHByb2R1Y3QpKVxuICAgICAgICB9KTsgLy8gaGFuZGxlIG9wdGlvbnMgZm9yIGFsbCBwcm9kdWN0cyB3LyBvcHRpb25zXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9uSGFuZGxlcnMpO1xuICAgICAgICAkKCcuY3B1X19pdGVtLWJ1dHRvbi0tYWRkdG9jYXJ0Jykub24oJ2NsaWNrJywgZSA9PiB0aGlzLmFkZFRvQ2FydChlKSk7IC8vIG1hbmFnZSBhZGRpbmcgdG8gY2FydFxuXG4gICAgICAgICQoJy5jcHVfX2l0ZW0tYnV0dG9uLS1vcHRpb25zJykub24oJ2NsaWNrJywgZSA9PiB0aGlzLnNob3dPcHRpb25zKGUpKTsgLy8gbWFuYWdlIGFkZGluZyB0byBjYXJ0XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5SW5DYXJvdXNlbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFKQVggdGhlIHVwc2VsbCBVUkxzIGFuZC9vciBJRHMgYW5kIGFwcGVuZCB3aGVyZSBuZWVkZWRcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB0YXJnZXRzIC0gdGFyZ2V0cyB0byB1cHNlbGxcbiAgICAgKi9cbiAgICBsb2FkVXBzZWxsVGFyZ2V0cyh0YXJnZXRzKSB7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuc2xpY2UoMCwgdGhpcy5wcm9kdWN0TGltaXQgfHwgdGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgcnVuUXVldWVJbk9yZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMCkgeyAvLyB3aGVuIGRvbmUgYWxsIHByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlVcHNlbGxIYW5kbGVycygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RNZXRob2QgPSB0YXJnZXQudG9TdHJpbmcoKS5tYXRjaCgvXlswLTldKyQvKSA/IHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQgOiB1dGlscy5hcGkuZ2V0UGFnZTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0TWV0aG9kKHRhcmdldCwgeyB0ZW1wbGF0ZTogJ2N1c3RvbS9jYXJ0LXBhZ2UtdXBzZWxsLWl0ZW0nIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgcmV0dXJuOyB9IC8vIGlmIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICQoJyNjcHUgLmNwdV9fbGlzdC0tY3VzdG9tZmllbGRzJykuYXBwZW5kKHJlc3BvbnNlKTsgLy8gbm8gZXJyb3IsIGFwcGVuZCBtYXJrdXBcbiAgICAgICAgICAgICAgICAgICAgcnVuUXVldWVJbk9yZGVyKCk7IC8vIHJ1biBuZXh0IGl0ZW1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBydW5RdWV1ZUluT3JkZXIoKTsgLy8gc3RhcnQgdGhlIGxvb3BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNjcHUnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgU2xpY2sgb3B0aW9ucyB0byBwcm9kdWN0IGRpc3BsYXkgYWZ0ZXIgbG9hZGluZyBwcm9kdWN0cyxcbiAgICAgKiB0aGVuIGZpcmUgU2xpY2tcbiAgICAgKi9cbiAgICBkaXNwbGF5SW5DYXJvdXNlbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dNb2JpbGVJbkNhcm91c2VsKSByZXR1cm47XG5cbiAgICAgICAgLy8gIEFkZCBDU1MgdG8gcHJvZHVjdCBjYXJkcyBiZWZvcmUgZmlyaW5nIFNsaWNrXG4gICAgICAgICQoJy5jcHVfX2xpc3QnKS5hZGRDbGFzcygnY3B1X19saXN0LXNsaWNrJylcbiAgICAgICAgJCgnLmNwdV9faXRlbScpLmFkZENsYXNzKCdjcHVfX2l0ZW0tc2xpY2snKVxuXG4gICAgICAgICQoJy5jcHVfX2xpc3QnKS5hdHRyKCdkYXRhLXNsaWNrJywgYHtcbiAgICAgICAgICAgIFwiaW5maW5pdGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZG90c1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiYXJyb3dzXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1vYmlsZUZpcnN0XCI6IHRydWUsXG4gICAgICAgICAgICBcInJvd3NcIjogMSxcbiAgICAgICAgICAgIFwic2xpZGVzVG9TaG93XCI6IDEsXG4gICAgICAgICAgICBcInNsaWRlc1RvU2Nyb2xsXCI6IDEsXG4gICAgICAgICAgICBcInJlc3BvbnNpdmVcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJicmVha3BvaW50XCI6IDEwMjUsXG4gICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3NcIjogXCJ1bnNsaWNrXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1gKTtcblxuICAgICAgICBmb3JtYXRDYXJvdXNlbCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG1lZGlhTWF0Y2ggPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoJ21lZGl1bScpO1xuXG4gICAgICAgICQobWVkaWFNYXRjaCkub24oJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IGJpbmRUb1dpbmRvdyA9ICFlLnRhcmdldC5tYXRjaGVzXG5cbiAgICAgICAgICAgIGlmIChiaW5kVG9XaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAkKCcuY3B1X19saXN0Jykuc2xpY2soJ3JlaW5pdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpbmQgZXZlbnRzXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nLnNob3coKTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICAgICAgY2FzZSAncmVsYXRlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1dG9UYXJnZXRzKCdyZWxhdGVkJyk7XG4gICAgICAgICAgICBjYXNlICdzaW1pbGFyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXV0b1RhcmdldHMoJ3NpbWlsYXInKTtcbiAgICAgICAgICAgIGNhc2UgJ2N1c3RvbSBmaWVsZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRDdXN0b21GaWVsZFRhcmdldHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ3Vwc2VsbCBzdWl0ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZENTVlRhcmdldHMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QnO1xuXG5jb25zdCBmbG9hdGluZ0NoZWNrb3V0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0ICRzdW1tYXJ5Q29udGFpbmVyID0gJCgnLmpzLWNhcnRfX3RvdGFscycpO1xuICAgIGNvbnN0ICRmbG9hdGluZ0J1dHRvbiA9ICQoJy5mbG9hdGluZy1jaGVja291dC1idXR0b24nKTtcbiAgICBjb25zdCBtcSA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSgnbWVkaXVtJyk7XG5cbiAgICBmdW5jdGlvbiBXaWR0aENoYW5nZShtcSkge1xuICAgICAgICBjb25zdCBmYWRlVGltaW5nID0gNDAwO1xuXG4gICAgICAgIGlmICghbXEubWF0Y2hlcykge1xuICAgICAgICAgICAgY29uc3QgaW5pdFdpbmRvd1Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChpbml0V2luZG93UG9zaXRpb24gPCAkc3VtbWFyeUNvbnRhaW5lci5vZmZzZXQoKS50b3ApIHtcbiAgICAgICAgICAgICAgICAkZmxvYXRpbmdCdXR0b24uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZmxvYXRpbmdCdXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b21XaW5kb3dQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvdHRvbVdpbmRvd1Bvc2l0aW9uIDwgJHN1bW1hcnlDb250YWluZXIub2Zmc2V0KCkudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICRmbG9hdGluZ0J1dHRvbi5mYWRlSW4oZmFkZVRpbWluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGZsb2F0aW5nQnV0dG9uLmZhZGVPdXQoZmFkZVRpbWluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZmxvYXRpbmdCdXR0b24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgIFdpZHRoQ2hhbmdlKG1xKTtcblxuICAgICRmbG9hdGluZ0J1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdvVG9DaGVja291dCA9IGZhbHNlOyAvLyBTZXQgdG8gdHJ1ZSBpZiB0aGUgYnV0dG9uIHNob3VsZCBnbyB0byBjaGVja291dCBpbnN0ZWFkIG9mIHNjcm9sbGluZyB0aGUgdXNlciBkb3duIHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IHRvdGFsc09mZnNldCA9ICRzdW1tYXJ5Q29udGFpbmVyLm9mZnNldCgpLnRvcDtcblxuICAgICAgICBpZiAoZ29Ub0NoZWNrb3V0KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY2hlY2tvdXQucGhwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0b3RhbHNPZmZzZXQgLSAxMDAgfSwgNzAwKTsgLy8gc2Nyb2xsIHVzZXIgdG8gdGhlIHJlYWwgY2hlY2tvdXQgYnV0dG9uIHByb2R1Y3RcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgZmxvYXRpbmdDaGVja291dEJ1dHRvbiB9O1xuIiwiLypcbiAqIHB1dCBwcm9kdWN0SUQgb24gdGhlIGVsZW1lbnQncyBcImZvclwiIGFuZCBcImlkXCIgYXR0cnMgc28gbXVsdGlwbGUgY2FzZXMgb2Ygc2FtZSBvcHRpb24gc2V0IHdvbid0IGNvbmZsaWN0XG4gKi9cbmNvbnN0IG1ha2VPcHRpb25JZHNVbmlxdWUgPSAoc2NvcGUsIHByb2R1Y3RJZCwga2V5KSA9PiB7XG4gICAgJCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBzY29wZSkuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbklkID0gJChlbCkuYXR0cignaWQnKTsgLy8gdXBkYXRlIElEIHRvIGluY2x1ZGUgcHJvZHVjdCBJRFxuICAgICAgICAkKGVsKS5hdHRyKCdpZCcsIGAke2tleX1fJHtvcHRpb25JZH1fJHtwcm9kdWN0SWR9YCk7IC8vIHVwZGF0ZSBvcHRpb24gSUQgdG8gaW5jbHVkZSBwcm9kdWN0IElEXG4gICAgICAgICQoZWwpLm5leHQoKS5hdHRyKCdmb3InLCBgJHtrZXl9XyR7b3B0aW9uSWR9XyR7cHJvZHVjdElkfWApOyAvLyB1cGRhdGUgb3B0aW9uIGxhYmVsIHRvIHRhcmdldCB1cGRhdGVkIElEXG4gICAgfSk7XG4gICAgLy8gYWRkIGlucHV0IGZpZWxkcyBsYWJlbCBjbGFzcyBhbmQgcHV0IGluIGhlcmUuIFRoZXNlIG9wdGlvbnMgd2UgbmVlZCB0byBzZWxlY3QgdGhlaXIgc2libGluZyBsYWJlbFxuICAgIGNvbnN0IG9wdGlvbnNXaXRoTGFiZWxBdHRycyA9IFtcbiAgICAgICAgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICAgICAgJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nLFxuICAgICAgICAnaW5wdXRbdHlwZT1cImZpbGVcIl0nLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3RleHRhcmVhJyxcbiAgICBdXG4gICAgY29uc3Qgb3B0aW9uc1dpdGhMYWJlbEF0dHJzU2VsZWN0b3JzID0gb3B0aW9uc1dpdGhMYWJlbEF0dHJzLmpvaW4oJywnKTtcbiAgICAkKG9wdGlvbnNXaXRoTGFiZWxBdHRyc1NlbGVjdG9ycywgc2NvcGUpLnBhcmVudHMoJy5mb3JtLWZpZWxkJykuZmluZCgnbGFiZWwnKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSAkKGVsKS5hdHRyKCdmb3InKTsgLy8gdXBkYXRlIElEIHRvIGluY2x1ZGUgcHJvZHVjdCBJRFxuICAgICAgICAkKGVsKS5hdHRyKCdmb3InLCBgJHtrZXl9XyR7b3B0aW9uSWR9XyR7cHJvZHVjdElkfWApOyAvLyB1cGRhdGUgb3B0aW9uIElEIHRvIGluY2x1ZGUgcHJvZHVjdCBJRFxuICAgICAgICAkKGVsKS5uZXh0KCkuYXR0cignaWQnLCBgJHtrZXl9XyR7b3B0aW9uSWR9XyR7cHJvZHVjdElkfWApOyAvLyB1cGRhdGUgb3B0aW9uIGxhYmVsIHRvIHRhcmdldCB1cGRhdGVkIElEXG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VPcHRpb25JZHNVbmlxdWU7XG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsInV0aWxzIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJkZWZhdWx0TW9kYWwiLCJNb2RhbEV2ZW50cyIsInN3YWwiLCJDYXJ0SXRlbURldGFpbHMiLCJmbG9hdGluZ0NoZWNrb3V0QnV0dG9uIiwiQ2FydFBhZ2VVcHNlbGwiLCJDYXJ0IiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCIkbW9kYWwiLCIkY2FydFBhZ2VDb250ZW50IiwiJCIsIiRjYXJ0Q29udGVudCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucyIsIiRvdmVybGF5IiwiaGlkZSIsIiRhY3RpdmVDYXJ0SXRlbUlkIiwiJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uIiwiY3VzdG9tQ2FydCIsImNvbnRleHQiLCJpdHNDb25maWciLCJjdXN0b21fY2FydCIsImNhcnRQYWdlVXBzZWxsIiwic2V0QXBwbGVQYXlTdXBwb3J0IiwiYmluZEV2ZW50cyIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImFkZENsYXNzIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJfdGhpcyIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiX3RoaXMyIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiaW52YWxpZEVudHJ5TWVzc2FnZSIsInJlcGxhY2UiLCJjYXJ0UmVtb3ZlSXRlbSIsIl90aGlzMyIsIml0ZW1SZW1vdmUiLCJjYXJ0RWRpdE9wdGlvbnMiLCJwcm9kdWN0SWQiLCJfdGhpczQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0Rm9yQ2hhbmdlSWQiLCJtb2RhbCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9wZW4iLCJmaW5kIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsIm9wdGlvbkNoYW5nZUhhbmRsZXIiLCIkcHJvZHVjdE9wdGlvbnNDb250YWluZXIiLCJtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCIsIm91dGVySGVpZ2h0IiwibGVuZ3RoIiwiY3NzIiwiaGFzQ2xhc3MiLCJvbmUiLCJvcGVuZWQiLCJwcm9kdWN0RGV0YWlscyIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJvbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIiRmb3JtIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94Iiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwicHJvcCIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIl90aGlzNSIsIiRjYXJ0SXRlbXNSb3dzIiwiJGNhcnRQYWdlVGl0bGUiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsImFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJmaWx0ZXIiLCJiaW5kQ2FydEV2ZW50cyIsIl90aGlzNiIsImRlYm91bmNlVGltZW91dCIsIl9iaW5kIiwiX2RlYm91bmNlIiwicHJldmVudERlZmF1bHQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiX3RoaXM3IiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImNvZGUiLCJhcHBseUNvZGUiLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiX3RoaXM4IiwiJGNlcnRDb250YWluZXIiLCIkY2VydEZvcm0iLCIkY2VydElucHV0IiwidG9nZ2xlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJpbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUiLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiX3RoaXM5IiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwiX3RoaXMwIiwic2hpcHBpbmdFcnJvck1lc3NhZ2VzIiwiY291bnRyeSIsInNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSIsInByb3ZpbmNlIiwic2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiZG9jdW1lbnQiLCJkZWZhdWx0Iiwic3RhdGVDb3VudHJ5Iiwibm9kIiwiVmFsaWRhdG9ycyIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImlzRXN0aW1hdG9yRm9ybU9wZW5lZCIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdFc3RpbWF0b3JBbGVydCIsInNoaXBwaW5nVmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiYXR0ciIsInJlbW92ZUF0dHIiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiaXMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUiLCJ0b2dnbGVCdXR0b24iLCJidXR0b25TZWxlY3RvciIsIiR0b2dnbGVDb250YWluZXIiLCJjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUiLCJzZWxlY3RvclRvQWN0aXZhdGUiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsImNsaWNrRXZlbnQiLCJxdW90ZUlkIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsIlByb2R1Y3REZXRhaWxzQmFzZSIsIm9wdGlvbkNoYW5nZURlY29yYXRvciIsImlzQnJvd3NlcklFIiwiY29udmVydEludG9BcnJheSIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCIkc2NvcGUiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJjYWxsIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwiX2lzRW1wdHkiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJlYWNoIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInB1c2giLCJpc1NhdGlzZmllZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImNoZWNrZWQiLCJnZXRTZWxlY3RlZE9wdGlvbkxhYmVsIiwicHJvZHVjdFZhcmlhbnRzbGlzdCIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVsIiwibGFiZWxzIiwidGl0bGUiLCJwcm9kdWN0VmFyaWFudCIsInNvcnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJtYXRjaCIsImNhcmQiLCJjZXJ0IiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsInNob3dBbGVydE1vZGFsIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsIl90cmFuc2Zvcm0iLCJpdGVtIiwicmV0IiwibmFtZSIsInJlcGxhY2VtZW50QXR0cmlidXRlcyIsIiRuZXdFbGVtZW50IiwiJGhpZGRlbklucHV0IiwicHJldiIsImFwcGVuZCIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJjb250YWluZXIiLCJwcmVmaXgiLCJfZWFjaCIsInN0YXRlcyIsInN0YXRlT2JqIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsImdldEJ5TmFtZSIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIiwibWFrZU9wdGlvbklkc1VuaXF1ZSIsIkNhcnRQYWdlVXBzZWxsUHJvZHVjdCIsImluaXRSYWRpb0F0dHJpYnV0ZXMiLCIkcHJvZHVjdElkIiwidXBkYXRlT3B0aW9uVmlldyIsImFkZFJlcXVpcmVkQ2xhc3N0b09wdGlvbnMiLCJ0b0FycmF5IiwiZm9yRWFjaCIsIm9wdGlvbiIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsIiRjaGFuZ2VkT3B0aW9uIiwidGFyZ2V0Iiwib3B0aW9uUm93IiwicGFyZW50cyIsIkZvcm1EYXRhIiwic2libGluZ3MiLCIkc2VsZWN0ZWRPcHRpb24iLCJpbmRleE9mIiwib3RoZXJTZWxlY3RlZERhdGVGaWVsZHMiLCJjb3VudCIsImNoZWNrT3B0aW9uc1NlbGVjdGVkIiwidXBkYXRlVmlldyIsIm51bWJlclJlcXVpcmVkT3B0aW9ucyIsIm51bWJlclNlbGVjdGVkT3B0aW9ucyIsInVwZGF0ZVByaWNlVmlldyIsInByaWNlIiwid2l0aG91dF90YXgiLCJmb3JtYXR0ZWQiLCJfaXNPYmplY3QiLCJpbWFnZUVsIiwiaW1hZ2UiLCJpbWFnZVNyYyIsIm9wdGlvbk1lc3NhZ2UiLCJzdG9ja19tZXNzYWdlIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsImNsb3Nlc3QiLCJyYWRpbyIsIiRyYWRpbyIsImNsaWNrIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiYyIsIkdlbmVyYXRvciIsInUiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfbmV4dCIsIl90aHJvdyIsImZvcm1hdENhcm91c2VsIiwidXBzZWxsU3VpdGVDUFUiLCJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJWRVJTSU9OIiwiY29uc29sZSIsImxvZyIsIm1vZGUiLCJlcnJvckRlZmF1bHQiLCJzaG93TW9iaWxlSW5DYXJvdXNlbCIsInByb2R1Y3RMaW1pdCIsImxvYWRpbmciLCJwcm9kdWN0IiwiZ2V0QnlJZCIsImdldFBhZ2UiLCJyZW1vdmVEdXBsaWNhdGVUYXJnZXRzIiwidXBzZWxsVGFyZ2V0cyIsIlNldCIsInJlbW92ZUNhcnRJdGVtVGFyZ2V0cyIsImNhcnRJdGVtRGF0YSIsImNhcnRJdGVtIiwicHJvZHVjdHVybCIsIm9yaWdpbiIsInRvU3RyaW5nIiwidXBzZWxsSXRlbXMiLCJ1cHNlbGxpdGVtIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibG9hZEF1dG9UYXJnZXRzIiwiaXRlbUluZGV4IiwiZXEiLCJzdG9yZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvYWRVcHNlbGxUYXJnZXRzIiwib3B0cyIsImNvbmZpZyIsInJlbGF0ZWRfcHJvZHVjdHMiLCJsaW1pdCIsInNpbWlsYXJfYnlfdmlld3MiLCJyZXMiLCJ0YXJnZXRzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxvYWRDdXN0b21GaWVsZFRhcmdldHMiLCJ1cHNlbGxJdGVtIiwibG9hZENTVlRhcmdldHMiLCJfbG9hZENTVlRhcmdldHMiLCJfY2FsbGVlIiwiY3B1SFRNTHRleHQiLCJjcHVIVE1MIiwicmVtYWluaW5nU2xvdHMiLCJfdCIsIl9jb250ZXh0Iiwic2Vzc2lvblN0b3JhZ2UiLCJwYXJzZUFycmF5RnJvbVN0cmluZyIsImdldEFkZGl0aW9uYWxQcm9kdWN0cyIsInByb2R1Y3RfaWQiLCJlcnJvciIsImFwcGx5VXBzZWxsSGFuZGxlcnMiLCJhZGRUb0NhcnQiLCJzbGlkZURvd24iLCJ0b2dnbGVPcHRpb25zIiwiZm9ybSIsIml0ZW1BZGQiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZXJyb3JPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidGV4dENvbnRlbnQiLCJzeW5jRm9ybU9wdGlvbiIsIm9wdCIsInRhcmdldElkIiwiYWRkVG9DYXJ0RnJvbU1vZGFsIiwibW9kYWxDb250ZW50Iiwib25DbG9zZSIsImNsb3NlIiwic2hvd09wdGlvbnMiLCJvcHRpb25NYXJrdXAiLCJjdXN0b21DbGFzcyIsInNob3dDbG9zZUJ1dHRvbiIsInNob3dDb25maXJtQnV0dG9uIiwib25PcGVuIiwib3B0aW9uSGFuZGxlcnMiLCJ0aGlzSUQiLCJkaXNwbGF5SW5DYXJvdXNlbCIsInNsaWNlIiwicnVuUXVldWVJbk9yZGVyIiwic2hpZnQiLCJyZXF1ZXN0TWV0aG9kIiwibWVkaWFNYXRjaCIsImJpbmRUb1dpbmRvdyIsIm1hdGNoZXMiLCJzbGljayIsIiRzdW1tYXJ5Q29udGFpbmVyIiwiJGZsb2F0aW5nQnV0dG9uIiwibXEiLCJXaWR0aENoYW5nZSIsImZhZGVUaW1pbmciLCJpbml0V2luZG93UG9zaXRpb24iLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJib3R0b21XaW5kb3dQb3NpdGlvbiIsImZhZGVJbiIsImZhZGVPdXQiLCJhZGRMaXN0ZW5lciIsImdvVG9DaGVja291dCIsInRvdGFsc09mZnNldCIsImhyZWYiLCJzY29wZSIsImVsIiwib3B0aW9uSWQiLCJuZXh0Iiwib3B0aW9uc1dpdGhMYWJlbEF0dHJzIiwib3B0aW9uc1dpdGhMYWJlbEF0dHJzU2VsZWN0b3JzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=

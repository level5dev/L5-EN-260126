"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_custom_its-global_js"],{

/***/ "./assets/js/theme/custom/card-add-to-cart.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/custom/card-add-to-cart.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardAddToCart)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var CardAddToCart = /*#__PURE__*/function () {
  function CardAddToCart(context) {
    if (!context.itsConfig.card_atc_button || context.itsConfig.card_atc_button_pos !== "bottom") return;
    this.hasQtyInput = context.itsConfig.card_atc_input;
    this.defaultQty = typeof context.itsConfig.card_atc_input_default === "string" ? 0 : context.itsConfig.card_atc_input_default;
    $("body").on("facetedSearchRefresh productViewModeChanged", this.bindEvents.bind(this));
    this.$overlay = $("[data-cart-item-add] .loadingOverlay");
    this.bindEvents();
  }

  /**
   * Add/Remove classes from the target element that is passed
   * @param {HTMLElement} $target - Element to add/remove classes on
   * @param {string} type - Type of update that is occurring
   */
  var _proto = CardAddToCart.prototype;
  _proto.updateCard = function updateCard($target, type) {
    if (type === void 0) {
      type = null;
    }
    var $scope = $target.hasClass("js-card-atc") ? $target : $target.parents(".js-card-atc");
    switch (type) {
      case "loading":
        $target.text($target.data("wait-message"));
        $scope.addClass("card-atc--adding");
        break;
      case "complete":
        $target.text($target.data("added-message"));
        $scope.removeClass("card-atc--adding");
        // $scope.addClass('card-atc--added');
        break;
      default:
        $scope.removeClass("card-atc--added");
        $scope.removeClass("card-atc--adding");
        // $(".js-card-atc__button", $scope).text(
        //   $(".js-card-atc__button", $scope).data("default-message"),
        // );
        // console.log($(".js-card-atc__button", $scope).data("default-message"));
        break;
    }
  }

  /**
   * Add product to the cart
   * @param {string} url - Product add url
   * @param {HTMLElement} $target - HTML element (card) that is being added
   */;
  _proto.addItemToCart = function addItemToCart(url, $target) {
    var _this = this;
    this.previewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_2__["default"])("#previewModal")[0];
    this.updateCard($target, "loading");
    var $cardAtcModal = $("[data-card-atc-modal]");
    $.post(url, function (reponse) {
      var cartResponse = reponse;
      _this.updateCard($target, "complete");
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.getCartQuantity({}, function (error, response) {
        if (error) return;
        var quantity = parseInt(response, 10);
        var $cartCounter = $(".navUser-action .cart-count");
        var $cardAddedHeading = $("[data-cart-added-heading]");
        $cartCounter.addClass("cart-count--positive");
        $("body").trigger("cart-quantity-update", quantity);

        // Open preview modal and update content
        if (_this.previewModal) {
          _this.previewModal.open();
          $cardAtcModal.show();
          _this.previewModal.updateContent($cardAtcModal);
          // if cart.items > 1 use plural text
          quantity > 1 ? $cardAddedHeading.text(quantity + " tools are in your cart. What's next?") : $cardAddedHeading.text("1 tool added in your cart. What's next?");
          if (window.ApplePaySession) {
            _this.previewModal.$modal.addClass("apple-pay-supported");
          }

          // if (!this.checkIsQuickViewChild($target)) {
          //     this.previewModal.$preModalFocusedEl = $target;
          // }

          // this.updateCartContent(this.previewModal, response.data.cart_item.id);
        }
      });
    });
  }

  /**
   * Add event listeners to quantity buttons
   * @param {HTMLElement[]} $cards - array of card elements
   */;
  _proto.wireQtyButtons = function wireQtyButtons($cards) {
    var _this2 = this;
    $(".js-card-atc-increment button", $cards).on("click", function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $scope = $target.parents(".js-card-atc");
      var $input = $(".js-card-atc__input--total", $scope);
      var qty = parseInt($input.val(), 10) || _this2.defaultQty;
      console.log(qty);
      _this2.updateCard($target);

      // If action is incrementing
      if ($target.data("action") === "inc") {
        qty++;
      } else if (qty > 0) {
        qty--;
      }

      // update hidden input
      $input.val(qty);
    });
  }

  /**
   * Add event listener to add to cart buttons
   * @param {HTMLElement[]} $cards - array of card elements
   */;
  _proto.wireAddToCartButton = function wireAddToCartButton($cards) {
    var _this3 = this;
    $(".js-card-atc__button", $cards).on("click", function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $scope = $target.parents(".js-card-atc");
      var qty = _this3.hasQtyInput ? parseInt($(".js-card-atc__input--total", $scope).val(), 10) : 1;
      var targetUrl = $target.data("card-add-to-cart");

      // eslint-disable-next-line no-restricted-globals
      if (isNaN(qty) || qty === 0) {
        var errormessage = qty === 0 ? "You must enter a quantity!" : "Quantity must be a number!";
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_1__["default"].fire({
          icon: "error",
          title: "Oops...",
          text: errormessage
        });
      }
      var newUrl = encodeURI(targetUrl + "&qty[]=" + qty);
      _this3.addItemToCart(newUrl, $target);
    });
  }

  /**
   * Add event listener to quantity input
   * @param {*} $cards - array of card elements
   */;
  _proto.wireQtyInput = function wireQtyInput($cards) {
    $cards.on("keypress", ".js-card-atc__input--total", function (event) {
      // If the browser supports event.which, then use event.which, otherwise use event.keyCode
      var x = event.which || event.keyCode;
      // Prevent triggering quantity change when pressing enter
      if (x === 13) {
        event.preventDefault();
      }
    });
  }

  // requestAdditionalProductInfo() {
  //     // TODO: add graphQL onload to pull extra product data? Min qty, Max qty, etc...?
  // }

  // triggerCardAddToCartModal() {
  //     // TODO: add setting to trigger add to cart modal after product is added to the cart?
  // }

  /**
   * Bind all Card Add to Cart events
   */;
  _proto.bindEvents = function bindEvents() {
    var $cards = $(".js-card-atc");
    this.wireQtyInput($cards);
    this.wireQtyButtons($cards);
    this.wireAddToCartButton($cards);
  };
  return CardAddToCart;
}();


/***/ }),

/***/ "./assets/js/theme/custom/image-swap-on-hover.js":
/*!*******************************************************!*\
  !*** ./assets/js/theme/custom/image-swap-on-hover.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imageSwapOnHover)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

// TODO: Remove JS and convert to css
function imageSwapOnHover(context) {
  var isActive = typeof context === 'object' ? context.itsConfig.image_swap_on_hover : context;
  if (!isActive) return;
  function swapImage() {
    var image = $(this).find('.card-image, .listItem-image');
    var imageContainer = $(this).find('[data-image-swap-src]');
    var altImageSrc = imageContainer.attr('data-image-swap-src');

    // Clear srcset because we don't have access to the the second images srcset
    image.attr('srcset', '');
    if (altImageSrc.length) {
      altImageSrc = altImageSrc.includes('{:size}') ? altImageSrc.replace('{:size}', '500x500') : altImageSrc;
      imageContainer.attr('data-image-swap-src', image.attr('src'));
      image.attr('src', altImageSrc);
    }
  }
  var gridImages = '[data-image-swap-link]';
  var slickImages = '[data-image-swap-link]';
  $(gridImages + ", " + slickImages).off('mouseenter mouseleave focus blur', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(swapImage, 500));
  $(gridImages + ", " + slickImages).on('mouseenter mouseleave focus blur', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(swapImage, 500));

  // Re-apply binds for image swap on hover after AJAX
  $('body').on('facetedSearchRefresh productViewModeChanged', function () {
    $(gridImages + ", " + slickImages).off('mouseenter mouseleave focus blur', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(swapImage, 500));
    $(gridImages + ", " + slickImages).on('mouseenter mouseleave focus blur', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(swapImage, 500));
  });
}

/***/ }),

/***/ "./assets/js/theme/custom/its-global.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/custom/its-global.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kitchen_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen-sink */ "./assets/js/theme/custom/kitchen-sink.js");
/* harmony import */ var _image_swap_on_hover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-swap-on-hover */ "./assets/js/theme/custom/image-swap-on-hover.js");
/* harmony import */ var _popup_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-login */ "./assets/js/theme/custom/popup-login.js");
/* harmony import */ var _card_add_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-add-to-cart */ "./assets/js/theme/custom/card-add-to-cart.js");
/* harmony import */ var _slide_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide-cart */ "./assets/js/theme/custom/slide-cart.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var inDevelopment = context.inDevelopment;
  if (inDevelopment) {
    console.log('this.context ', context); // eslint-disable-line

    (0,_kitchen_sink__WEBPACK_IMPORTED_MODULE_0__["default"])(context);
  }
  var slideCart = new _slide_cart__WEBPACK_IMPORTED_MODULE_4__["default"](context);
  (0,_image_swap_on_hover__WEBPACK_IMPORTED_MODULE_1__["default"])(context);
  (0,_popup_login__WEBPACK_IMPORTED_MODULE_2__["default"])(context);
  new _card_add_to_cart__WEBPACK_IMPORTED_MODULE_3__["default"](context); // eslint-disable-line
}

/***/ }),

/***/ "./assets/js/theme/custom/kitchen-sink.js":
/*!************************************************!*\
  !*** ./assets/js/theme/custom/kitchen-sink.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var toRem = function toRem(px) {
  var fontSize = parseFloat(window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size'));
  return px / fontSize;
};
var getInRem = function getInRem(string) {
  var pva = string.split(' ');
  var values = pva.map(function (item) {
    var regex = /px/gi;
    var px = item.replace(regex, '');
    if (px === 'auto' || Number(px) === 0) return px;
    var rems = toRem(Number(px));
    return rems.toFixed(2) + "rem";
  });
  return values.join(' ');
};
var componentToHex = function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
var rgbToHex = function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
var getInHex = function getInHex(string) {
  var rgbValues = string.slice(string.indexOf('(') + 1, string.indexOf(')')).split(',');
  var r = Number(rgbValues[0]);
  var g = Number(rgbValues[1]);
  var b = Number(rgbValues[2]);
  return rgbToHex(r, g, b);
};
var loadContainerStyleData = function loadContainerStyleData() {
  $('#ks-containers .ks-element__sub').each(function (idx, item) {
    var title = ".ks-" + $('.ks-element__sub-title', item).data('ks-type');
    var width = 'bugged for now';
    var maxWidth = window.getComputedStyle(document.querySelector(title)).getPropertyValue('max-width');
    var margin = getInRem(window.getComputedStyle(document.querySelector(title)).getPropertyValue('margin'));
    var padding = getInRem(window.getComputedStyle(document.querySelector(title)).getPropertyValue('padding'));
    var _float = window.getComputedStyle(document.querySelector(title)).getPropertyValue('float');
    var styles = "\n            <div class=\"styles-data-table\">\n            <table>\n                <tbody>\n                    <tr>\n                        <th>Width</th>\n                        <th>Max Width</th>\n                        <th>Margin</th>\n                        <th>Padding</th>\n                        <th>Float</th>\n                    </tr>\n                    <tr>\n                        <td>" + width + "</td>\n                        <td>" + maxWidth + "</td>\n                        <td>" + margin + "</td>\n                        <td>" + padding + "</td>\n                        <td>" + _float + "</td>\n                    </tr>\n                </tbody>\n            </table>\n            </div>\n        ";
    $('.ks-element__sub-container', item).append(styles);
  });
};
var loadPaletteStyleData = function loadPaletteStyleData() {
  $('#ks-palette .ks-element__sub').each(function (idx, item) {
    var colorElements = $('.ks-palette__box', item);
    colorElements.each(function (idx, el) {
      var color = getInHex(window.getComputedStyle(el).getPropertyValue('background-color'));
      $(el).find('.ks-palette__label--hex').text(color);
    });
  });
};
var loadTypographyStyleData = function loadTypographyStyleData() {
  $('#ks-typography .ks-element__sub').each(function (idx, item) {
    var title = ".ks-" + $('.ks-element__sub-title', item).text();
    var color = getInHex(window.getComputedStyle(document.querySelector(title)).getPropertyValue('color'));
    var fontSize = window.getComputedStyle(document.querySelector(title)).getPropertyValue('font-size');
    var fontFamily = window.getComputedStyle(document.querySelector(title)).getPropertyValue('font-family');
    var fontWeight = window.getComputedStyle(document.querySelector(title)).getPropertyValue('font-weight');
    var margin = getInRem(window.getComputedStyle(document.querySelector(title)).getPropertyValue('margin'));
    var padding = getInRem(window.getComputedStyle(document.querySelector(title)).getPropertyValue('padding'));
    var styles = "\n            <div class=\"styles-data-table\">\n                <table>\n                    <tbody>\n                        <tr>\n                            <th>Color</th>\n                            <th>Font Size</th>\n                            <th>Font Family</th>\n                            <th>Font Weight</th>\n                            <th>Margin</th>\n                            <th>Padding</th>\n                        </tr>\n                        <tr>\n                            <td>" + color + "</td>\n                            <td>" + fontSize + "</td>\n                            <td>" + fontFamily + "</td>\n                            <td>" + fontWeight + "</td>\n                            <td>" + margin + "</td>\n                            <td>" + padding + "</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        ";
    $('.ks-element__sub-container', item).prepend(styles);
  });
};
var loadButtonStyleData = function loadButtonStyleData() {
  $('#ks-buttons .ks-element__sub').each(function (idx, item) {
    var buttonClass = (".button--" + $('.ks-element__sub-title', item).text()).toLowerCase();
    var tableRows = $(buttonClass, item).toArray().map(function (button) {
      console.log('button ', getInHex(window.getComputedStyle(button).getPropertyValue('background-color')));
      var type = $(button).data('button-type');
      var color = getInHex(window.getComputedStyle(button).getPropertyValue('color'));
      var backgroundColor = getInHex(window.getComputedStyle(button).getPropertyValue('background-color'));
      var fontSize = window.getComputedStyle(button).getPropertyValue('font-size');
      var fontFamily = window.getComputedStyle(button).getPropertyValue('font-family');
      var fontWeight = window.getComputedStyle(button).getPropertyValue('font-weight');
      var borderWidth = window.getComputedStyle(button).getPropertyValue('border-width');
      var borderStyle = window.getComputedStyle(button).getPropertyValue('border-style');
      var borderColor = getInHex(window.getComputedStyle(button).getPropertyValue('border-color'));
      var margin = getInRem(window.getComputedStyle(button).getPropertyValue('margin'));
      var padding = getInRem(window.getComputedStyle(button).getPropertyValue('padding'));
      var tr = "\n                <tr>\n                    <td>" + type + "</td>\n                    <td>" + color + "</td>\n                    <td>" + backgroundColor + "</td>\n                    <td>" + fontSize + "</td>\n                    <td>" + fontFamily + "</td>\n                    <td>" + fontWeight + "</td>\n                    <td>" + borderWidth + " " + borderStyle + " " + borderColor + "</td>\n                    <td>" + margin + "</td>\n                    <td>" + padding + "</td>\n                </tr>\n            ";
      return tr;
    });
    var styles = "\n            <div class=\"styles-data-table\">\n                <table>\n                    <tbody>\n                        <tr>\n                            <th>Type</th>\n                            <th>Color</th>\n                            <th>Background Color</th>\n                            <th>Font Size</th>\n                            <th>Font Family</th>\n                            <th>Font Weight</th>\n                            <th>Border</th>\n                            <th>Margin</th>\n                            <th>Padding</th>\n                        </tr>\n                        " + tableRows.join('', ',') + "\n                    </tbody>\n                </table>\n            </div>\n        ";
    $('.ks-element__sub-container', item).prepend(styles);
  });
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var isActive = context.itsConfig.kitchen_sink;
  if (!isActive) return;
  loadContainerStyleData();
  loadPaletteStyleData();
  loadTypographyStyleData();
  loadButtonStyleData();
}

/***/ }),

/***/ "./assets/js/theme/custom/popup-login.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/custom/popup-login.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");






/* ==========================================================
    ## handle loggin in via ajax
    ========================================================== */
var submitLoginForm = function submitLoginForm() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .loadingOverlay').show(); // show loading screen
  var formData = {
    login_email: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#popupLoginWindowForm #login_email').val().trim(),
    // wanted to keep same ID as main login fields so can be autopopulated easily
    login_pass: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#popupLoginWindowForm #login_pass').val().trim() // wanted to keep same ID as main login fields so can be autopopulated easily
  };
  jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/login.php?action=check_login', formData, function (data) {
    // if get a response
    if (data.length) {
      // check for logged in
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage('/account.php', {
        template: 'custom/popup-login-window-customer-id'
      }, function (err, response) {
        // trim necessary b/c it was giving back whitespace as the response if we got a
        // response back from the account page, we're logged in
        if (response.trim().length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .loadingOverlay, #popupLoginWindowForm').hide(); // hide loading and form itself
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .alertBox--success').slideDown(); // ser is now logged in
          setTimeout(function () {
            // $('#popupLoginWindowForm').foundation('reveal', 'close'); // close modal after 2.5 seconds
            // or just reload the page
            // window.location.reload();
            var redirecturl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('qrb__trigger-was-clicked') ? window.location.href + "?qrb_open=true" : window.location.href;
            window.location.href = redirecturl;
          }, 2500);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .loadingOverlay').hide(); // hide loading
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .alertBox--error').slideDown();
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .loadingOverlay').hide(); // hide loading
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .alertBox--error').slideDown();
    }
  });
};

/* ==========================================================
## handle validating the form fields
========================================================== */
var registerLoginValidation = function registerLoginValidation($loginForm) {
  var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"];
  var loginValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
    submit: '#popupLoginWindowForm input[type="submit"]'
  });
  loginValidator.add([{
    selector: '#popupLoginWindowForm input[name="login_email"]',
    validate: function validate(cb, val) {
      var result = loginModel.email(val);
      cb(result);
    },
    errorMessage: 'Please use a valid email address, such as user@example.com.'
  }, {
    selector: '#popupLoginWindowForm input[name="login_pass"]',
    validate: function validate(cb, val) {
      var result = loginModel.password(val);
      cb(result);
    },
    errorMessage: 'You must enter a password.'
  }]);
  $loginForm.submit(function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal--popupLoginWindow .alertBox').slideUp(); // get rid of any previous errors
    loginValidator.performCheck();
    if (loginValidator.areAll('valid')) {
      submitLoginForm();
    }
  });
};
var popupLoginWindow = function popupLoginWindow(_ref) {
  var itsConfig = _ref.itsConfig;
  var $loginForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.classifyForm)('#popupLoginWindowForm');
  if (itsConfig.popup_login && $loginForm.length) {
    console.log('IntuitSolutions.net - Popup Login Window'); // eslint-disable-line

    registerLoginValidation($loginForm);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupLoginWindow);

/***/ }),

/***/ "./assets/js/theme/custom/slide-cart.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/custom/slide-cart.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideCart)
/* harmony export */ });
/* harmony import */ var mmenu_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-light */ "./node_modules/mmenu-light/src/mmenu-light.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var SlideCart = /*#__PURE__*/function () {
  function SlideCart(context) {
    console.log('IntuitSolutions.net - Slide Cart');
    this.context = context;
    this.$cartLoading = $('<div class="loadingOverlay"></div>');
    this.$slideCart = $('.slide-cart');
    this.loadingClass = 'is-loading';
    this.options = {
      template: 'common/cart-preview'
    };
    this.focusTrap = null;
    this.$preModalFocusedEl = null;
    this.bindEvents();
  }
  var _proto = SlideCart.prototype;
  _proto.initSlideCart = function initSlideCart() {
    var _this = this;
    var menu = new mmenu_light__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#slideCart'));
    var drawer = menu.offcanvas({
      position: 'right'
    });
    $('.slide-cart-open').on('click', function (event) {
      // Don't load on cart page
      if (_this.context.template === 'pages/cart') return;
      _this.setupFocusTrap();

      // Redirect to cart page on mobile
      if (/Mobi/i.test(navigator.userAgent)) {
        event.stopPropagation();
        window.location.href = '/cart.php';
        return;
      }
      event.preventDefault();
      drawer.open();
      _this.queryCart();
    });
    $('.slide-cart-close, .mm-ocd__backdrop').on('click', function () {
      drawer.close();
      _this.disableFocusTrap();
    }).on('keyup', function (event) {
      if (event.keyCode === 27) {
        drawer.close();
        _this.disableFocusTrap();
      }
    });
    ;
  };
  _proto.queryCart = function queryCart() {
    var _this2 = this;
    this.$slideCart.addClass(this.loadingClass).html(this.$cartLoading);
    this.$cartLoading.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent(this.options, function (err, response) {
      if (err) {
        window.location.href = '/cart.php';
      }
      _this2.$cartLoading.hide();
      _this2.$slideCart.removeClass(_this2.loadingClass);
      _this2.$slideCart.html(response);
      _this2.slideCartRemoveEvent();
    });
  };
  _proto.getNewCartQty = function getNewCartQty() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getCartQuantity({}, function (err, response) {
      if (err) throw new Error(err);
      $('.cart-quantity').text(response).toggleClass('countPill--positive', response > 0);
      if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].tools.storage.localStorageAvailable()) {
        localStorage.setItem('cart-quantity', response);
      }
    });
  };
  _proto.slideCartRemoveEvent = function slideCartRemoveEvent() {
    var _this3 = this;
    $('.slide-cart-remove').on('click', function (event) {
      var itemId = $(event.currentTarget).data('cart-itemid');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemRemove(itemId, function (err, response) {
        if (response.data.status === 'succeed') {
          _this3.$slideCart.addClass(_this3.loadingClass).html(_this3.$cartLoading);
          _this3.$cartLoading.show();
          _this3.getNewCartQty();
          _this3.queryCart();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            text: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.setupFocusTrap = function setupFocusTrap() {
    var _this4 = this;
    if (!this.$preModalFocusedEl) this.$preModalFocusedEl = $(document.activeElement);
    if (!this.focusTrap) {
      this.focusTrap = focus_trap__WEBPACK_IMPORTED_MODULE_3__.createFocusTrap(document.querySelector('#slideCart'), {
        escapeDeactivates: false,
        returnFocusOnDeactivate: false,
        allowOutsideClick: true,
        fallbackFocus: function fallbackFocus() {
          var fallbackNode = _this4.$preModalFocusedEl && _this4.$preModalFocusedEl.length ? _this4.$preModalFocusedEl[0] : $('[data-header-logo-link]')[0];
          return fallbackNode;
        }
      });
    }
    this.focusTrap.deactivate();
    this.focusTrap.activate();
  };
  _proto.disableFocusTrap = function disableFocusTrap() {
    if (this.focusTrap) this.focusTrap.deactivate();
    if (this.$preModalFocusedEl) this.$preModalFocusedEl.focus();
    this.$preModalFocusedEl = null;
  };
  _proto.bindEvents = function bindEvents() {
    this.initSlideCart();
  };
  return SlideCart;
}();


/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);


// WeakMap will defined in the global scope if native WeakMap is not supported.
var weakMap = new WeakMap(); // eslint-disable-line no-unused-vars

// Set defaults for sweetalert2 popup boxes
var Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'button button--primary',
    cancelButton: 'button button--secondary'
  }
});

// Re-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jdXN0b21faXRzLWdsb2JhbF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNOO0FBQ2tDO0FBQUEsSUFFdERLLGFBQWE7RUFDaEMsU0FBQUEsY0FBWUMsT0FBTyxFQUFFO0lBQ25CLElBQ0UsQ0FBQ0EsT0FBTyxDQUFDQyxTQUFTLENBQUNDLGVBQWUsSUFDbENGLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDRSxtQkFBbUIsS0FBSyxRQUFRLEVBRWxEO0lBRUYsSUFBSSxDQUFDQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDSSxjQUFjO0lBQ25ELElBQUksQ0FBQ0MsVUFBVSxHQUNiLE9BQU9OLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDTSxzQkFBc0IsS0FBSyxRQUFRLEdBQ3hELENBQUMsR0FDRFAsT0FBTyxDQUFDQyxTQUFTLENBQUNNLHNCQUFzQjtJQUU5Q0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxFQUFFLENBQ1YsNkNBQTZDLEVBQzdDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUMzQixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxRQUFRLEdBQUdKLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztJQUV6RCxJQUFJLENBQUNFLFVBQVUsQ0FBQyxDQUFDO0VBQ25COztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRSxJQUFBRyxNQUFBLEdBQUFkLGFBQUEsQ0FBQWUsU0FBQTtFQUFBRCxNQUFBLENBS0FFLFVBQVUsR0FBVixTQUFBQSxXQUFXQyxPQUFPLEVBQUVDLElBQUksRUFBUztJQUFBLElBQWJBLElBQUk7TUFBSkEsSUFBSSxHQUFHLElBQUk7SUFBQTtJQUM3QixJQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUMxQ0gsT0FBTyxHQUNQQSxPQUFPLENBQUNJLE9BQU8sQ0FBQyxjQUFjLENBQUM7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QUFFLHdCQUF3QjtJQUN2Q0MsWUFBWSxFQUFFO0VBQ2xCO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0EsaUVBQWU3UCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL2NhcmQtYWRkLXRvLWNhcnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL2ltYWdlLXN3YXAtb24taG92ZXIuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL2l0cy1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL2tpdGNoZW4tc2luay5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vcG9wdXAtbG9naW4uanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL3NsaWRlLWNhcnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3N3ZWV0LWFsZXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tIFwiQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHNcIjtcbmltcG9ydCBTd2FsIGZyb20gXCIuLi9nbG9iYWwvc3dlZXQtYWxlcnRcIjtcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgYWxlcnRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tIFwiLi4vZ2xvYmFsL21vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRBZGRUb0NhcnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgaWYgKFxuICAgICAgIWNvbnRleHQuaXRzQ29uZmlnLmNhcmRfYXRjX2J1dHRvbiB8fFxuICAgICAgY29udGV4dC5pdHNDb25maWcuY2FyZF9hdGNfYnV0dG9uX3BvcyAhPT0gXCJib3R0b21cIlxuICAgIClcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuaGFzUXR5SW5wdXQgPSBjb250ZXh0Lml0c0NvbmZpZy5jYXJkX2F0Y19pbnB1dDtcbiAgICB0aGlzLmRlZmF1bHRRdHkgPVxuICAgICAgdHlwZW9mIGNvbnRleHQuaXRzQ29uZmlnLmNhcmRfYXRjX2lucHV0X2RlZmF1bHQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyAwXG4gICAgICAgIDogY29udGV4dC5pdHNDb25maWcuY2FyZF9hdGNfaW5wdXRfZGVmYXVsdDtcblxuICAgICQoXCJib2R5XCIpLm9uKFxuICAgICAgXCJmYWNldGVkU2VhcmNoUmVmcmVzaCBwcm9kdWN0Vmlld01vZGVDaGFuZ2VkXCIsXG4gICAgICB0aGlzLmJpbmRFdmVudHMuYmluZCh0aGlzKSxcbiAgICApO1xuICAgIHRoaXMuJG92ZXJsYXkgPSAkKFwiW2RhdGEtY2FydC1pdGVtLWFkZF0gLmxvYWRpbmdPdmVybGF5XCIpO1xuXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkL1JlbW92ZSBjbGFzc2VzIGZyb20gdGhlIHRhcmdldCBlbGVtZW50IHRoYXQgaXMgcGFzc2VkXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICR0YXJnZXQgLSBFbGVtZW50IHRvIGFkZC9yZW1vdmUgY2xhc3NlcyBvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFR5cGUgb2YgdXBkYXRlIHRoYXQgaXMgb2NjdXJyaW5nXG4gICAqL1xuICB1cGRhdGVDYXJkKCR0YXJnZXQsIHR5cGUgPSBudWxsKSB7XG4gICAgY29uc3QgJHNjb3BlID0gJHRhcmdldC5oYXNDbGFzcyhcImpzLWNhcmQtYXRjXCIpXG4gICAgICA/ICR0YXJnZXRcbiAgICAgIDogJHRhcmdldC5wYXJlbnRzKFwiLmpzLWNhcmQtYXRjXCIpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcImxvYWRpbmdcIjpcbiAgICAgICAgJHRhcmdldC50ZXh0KCR0YXJnZXQuZGF0YShcIndhaXQtbWVzc2FnZVwiKSk7XG4gICAgICAgICRzY29wZS5hZGRDbGFzcyhcImNhcmQtYXRjLS1hZGRpbmdcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XG4gICAgICAgICR0YXJnZXQudGV4dCgkdGFyZ2V0LmRhdGEoXCJhZGRlZC1tZXNzYWdlXCIpKTtcbiAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKFwiY2FyZC1hdGMtLWFkZGluZ1wiKTtcbiAgICAgICAgLy8gJHNjb3BlLmFkZENsYXNzKCdjYXJkLWF0Yy0tYWRkZWQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAkc2NvcGUucmVtb3ZlQ2xhc3MoXCJjYXJkLWF0Yy0tYWRkZWRcIik7XG4gICAgICAgICRzY29wZS5yZW1vdmVDbGFzcyhcImNhcmQtYXRjLS1hZGRpbmdcIik7XG4gICAgICAgIC8vICQoXCIuanMtY2FyZC1hdGNfX2J1dHRvblwiLCAkc2NvcGUpLnRleHQoXG4gICAgICAgIC8vICAgJChcIi5qcy1jYXJkLWF0Y19fYnV0dG9uXCIsICRzY29wZSkuZGF0YShcImRlZmF1bHQtbWVzc2FnZVwiKSxcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJChcIi5qcy1jYXJkLWF0Y19fYnV0dG9uXCIsICRzY29wZSkuZGF0YShcImRlZmF1bHQtbWVzc2FnZVwiKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcHJvZHVjdCB0byB0aGUgY2FydFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gUHJvZHVjdCBhZGQgdXJsXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICR0YXJnZXQgLSBIVE1MIGVsZW1lbnQgKGNhcmQpIHRoYXQgaXMgYmVpbmcgYWRkZWRcbiAgICovXG4gIGFkZEl0ZW1Ub0NhcnQodXJsLCAkdGFyZ2V0KSB7XG4gICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoXCIjcHJldmlld01vZGFsXCIpWzBdO1xuXG4gICAgdGhpcy51cGRhdGVDYXJkKCR0YXJnZXQsIFwibG9hZGluZ1wiKTtcbiAgICBjb25zdCAkY2FyZEF0Y01vZGFsID0gJChcIltkYXRhLWNhcmQtYXRjLW1vZGFsXVwiKTtcblxuICAgICQucG9zdCh1cmwsIChyZXBvbnNlKSA9PiB7XG4gICAgICBjb25zdCBjYXJ0UmVzcG9uc2UgPSByZXBvbnNlO1xuXG4gICAgICB0aGlzLnVwZGF0ZUNhcmQoJHRhcmdldCwgXCJjb21wbGV0ZVwiKTtcbiAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENhcnRRdWFudGl0eSh7fSwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybjtcblxuICAgICAgICBjb25zdCBxdWFudGl0eSA9IHBhcnNlSW50KHJlc3BvbnNlLCAxMCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoXCIubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnRcIik7XG4gICAgICAgIGNvbnN0ICRjYXJkQWRkZWRIZWFkaW5nID0gJChcIltkYXRhLWNhcnQtYWRkZWQtaGVhZGluZ11cIik7XG4gICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcyhcImNhcnQtY291bnQtLXBvc2l0aXZlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50cmlnZ2VyKFwiY2FydC1xdWFudGl0eS11cGRhdGVcIiwgcXVhbnRpdHkpO1xuXG4gICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XG4gICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub3BlbigpO1xuICAgICAgICAgICRjYXJkQXRjTW9kYWwuc2hvdygpO1xuXG4gICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwudXBkYXRlQ29udGVudCgkY2FyZEF0Y01vZGFsKTtcbiAgICAgICAgICAvLyBpZiBjYXJ0Lml0ZW1zID4gMSB1c2UgcGx1cmFsIHRleHRcbiAgICAgICAgICBxdWFudGl0eSA+IDFcbiAgICAgICAgICAgID8gJGNhcmRBZGRlZEhlYWRpbmcudGV4dChcbiAgICAgICAgICAgICAgICBgJHtxdWFudGl0eX0gdG9vbHMgYXJlIGluIHlvdXIgY2FydC4gV2hhdCdzIG5leHQ/YCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAkY2FyZEFkZGVkSGVhZGluZy50ZXh0KFwiMSB0b29sIGFkZGVkIGluIHlvdXIgY2FydC4gV2hhdCdzIG5leHQ/XCIpO1xuXG4gICAgICAgICAgaWYgKHdpbmRvdy5BcHBsZVBheVNlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcyhcImFwcGxlLXBheS1zdXBwb3J0ZWRcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkdGFyZ2V0KSkge1xuICAgICAgICAgIC8vICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkdGFyZ2V0O1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byBxdWFudGl0eSBidXR0b25zXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gJGNhcmRzIC0gYXJyYXkgb2YgY2FyZCBlbGVtZW50c1xuICAgKi9cbiAgd2lyZVF0eUJ1dHRvbnMoJGNhcmRzKSB7XG4gICAgJChcIi5qcy1jYXJkLWF0Yy1pbmNyZW1lbnQgYnV0dG9uXCIsICRjYXJkcykub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0ICRzY29wZSA9ICR0YXJnZXQucGFyZW50cyhcIi5qcy1jYXJkLWF0Y1wiKTtcbiAgICAgIGNvbnN0ICRpbnB1dCA9ICQoXCIuanMtY2FyZC1hdGNfX2lucHV0LS10b3RhbFwiLCAkc2NvcGUpO1xuXG4gICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCkgfHwgdGhpcy5kZWZhdWx0UXR5O1xuICAgICAgY29uc29sZS5sb2cocXR5KTtcbiAgICAgIHRoaXMudXBkYXRlQ2FyZCgkdGFyZ2V0KTtcblxuICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgaWYgKCR0YXJnZXQuZGF0YShcImFjdGlvblwiKSA9PT0gXCJpbmNcIikge1xuICAgICAgICBxdHkrKztcbiAgICAgIH0gZWxzZSBpZiAocXR5ID4gMCkge1xuICAgICAgICBxdHktLTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgJGlucHV0LnZhbChxdHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lciB0byBhZGQgdG8gY2FydCBidXR0b25zXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gJGNhcmRzIC0gYXJyYXkgb2YgY2FyZCBlbGVtZW50c1xuICAgKi9cbiAgd2lyZUFkZFRvQ2FydEJ1dHRvbigkY2FyZHMpIHtcbiAgICAkKFwiLmpzLWNhcmQtYXRjX19idXR0b25cIiwgJGNhcmRzKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgY29uc3QgJHNjb3BlID0gJHRhcmdldC5wYXJlbnRzKFwiLmpzLWNhcmQtYXRjXCIpO1xuICAgICAgY29uc3QgcXR5ID0gdGhpcy5oYXNRdHlJbnB1dFxuICAgICAgICA/IHBhcnNlSW50KCQoXCIuanMtY2FyZC1hdGNfX2lucHV0LS10b3RhbFwiLCAkc2NvcGUpLnZhbCgpLCAxMClcbiAgICAgICAgOiAxO1xuXG4gICAgICBjb25zdCB0YXJnZXRVcmwgPSAkdGFyZ2V0LmRhdGEoXCJjYXJkLWFkZC10by1jYXJ0XCIpO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgICBpZiAoaXNOYU4ocXR5KSB8fCBxdHkgPT09IDApIHtcbiAgICAgICAgY29uc3QgZXJyb3JtZXNzYWdlID1cbiAgICAgICAgICBxdHkgPT09IDBcbiAgICAgICAgICAgID8gXCJZb3UgbXVzdCBlbnRlciBhIHF1YW50aXR5IVwiXG4gICAgICAgICAgICA6IFwiUXVhbnRpdHkgbXVzdCBiZSBhIG51bWJlciFcIjtcbiAgICAgICAgcmV0dXJuIFN3YWwuZmlyZSh7XG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgIHRpdGxlOiBcIk9vcHMuLi5cIixcbiAgICAgICAgICB0ZXh0OiBlcnJvcm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdVcmwgPSBlbmNvZGVVUkkoYCR7dGFyZ2V0VXJsfSZxdHlbXT0ke3F0eX1gKTtcblxuICAgICAgdGhpcy5hZGRJdGVtVG9DYXJ0KG5ld1VybCwgJHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHF1YW50aXR5IGlucHV0XG4gICAqIEBwYXJhbSB7Kn0gJGNhcmRzIC0gYXJyYXkgb2YgY2FyZCBlbGVtZW50c1xuICAgKi9cbiAgd2lyZVF0eUlucHV0KCRjYXJkcykge1xuICAgICRjYXJkcy5vbihcImtleXByZXNzXCIsIFwiLmpzLWNhcmQtYXRjX19pbnB1dC0tdG90YWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBldmVudC53aGljaCwgdGhlbiB1c2UgZXZlbnQud2hpY2gsIG90aGVyd2lzZSB1c2UgZXZlbnQua2V5Q29kZVxuICAgICAgY29uc3QgeCA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG4gICAgICAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgcXVhbnRpdHkgY2hhbmdlIHdoZW4gcHJlc3NpbmcgZW50ZXJcbiAgICAgIGlmICh4ID09PSAxMykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gcmVxdWVzdEFkZGl0aW9uYWxQcm9kdWN0SW5mbygpIHtcbiAgLy8gICAgIC8vIFRPRE86IGFkZCBncmFwaFFMIG9ubG9hZCB0byBwdWxsIGV4dHJhIHByb2R1Y3QgZGF0YT8gTWluIHF0eSwgTWF4IHF0eSwgZXRjLi4uP1xuICAvLyB9XG5cbiAgLy8gdHJpZ2dlckNhcmRBZGRUb0NhcnRNb2RhbCgpIHtcbiAgLy8gICAgIC8vIFRPRE86IGFkZCBzZXR0aW5nIHRvIHRyaWdnZXIgYWRkIHRvIGNhcnQgbW9kYWwgYWZ0ZXIgcHJvZHVjdCBpcyBhZGRlZCB0byB0aGUgY2FydD9cbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBCaW5kIGFsbCBDYXJkIEFkZCB0byBDYXJ0IGV2ZW50c1xuICAgKi9cbiAgYmluZEV2ZW50cygpIHtcbiAgICBjb25zdCAkY2FyZHMgPSAkKFwiLmpzLWNhcmQtYXRjXCIpO1xuXG4gICAgdGhpcy53aXJlUXR5SW5wdXQoJGNhcmRzKTtcbiAgICB0aGlzLndpcmVRdHlCdXR0b25zKCRjYXJkcyk7XG4gICAgdGhpcy53aXJlQWRkVG9DYXJ0QnV0dG9uKCRjYXJkcyk7XG4gIH1cbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBUT0RPOiBSZW1vdmUgSlMgYW5kIGNvbnZlcnQgdG8gY3NzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbWFnZVN3YXBPbkhvdmVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0JyA/IGNvbnRleHQuaXRzQ29uZmlnLmltYWdlX3N3YXBfb25faG92ZXIgOiBjb250ZXh0O1xuXG4gICAgaWYgKCFpc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgZnVuY3Rpb24gc3dhcEltYWdlKCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9ICQodGhpcykuZmluZCgnLmNhcmQtaW1hZ2UsIC5saXN0SXRlbS1pbWFnZScpO1xuICAgICAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9ICQodGhpcykuZmluZCgnW2RhdGEtaW1hZ2Utc3dhcC1zcmNdJyk7XG4gICAgICAgIGxldCBhbHRJbWFnZVNyYyA9IGltYWdlQ29udGFpbmVyLmF0dHIoJ2RhdGEtaW1hZ2Utc3dhcC1zcmMnKTtcblxuICAgICAgICAvLyBDbGVhciBzcmNzZXQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGUgdGhlIHNlY29uZCBpbWFnZXMgc3Jjc2V0XG4gICAgICAgIGltYWdlLmF0dHIoJ3NyY3NldCcsICcnKTtcblxuICAgICAgICBpZiAoYWx0SW1hZ2VTcmMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhbHRJbWFnZVNyYyA9IGFsdEltYWdlU3JjLmluY2x1ZGVzKCd7OnNpemV9JykgPyBhbHRJbWFnZVNyYy5yZXBsYWNlKCd7OnNpemV9JywgJzUwMHg1MDAnKSA6IGFsdEltYWdlU3JjO1xuICAgICAgICAgICAgaW1hZ2VDb250YWluZXIuYXR0cignZGF0YS1pbWFnZS1zd2FwLXNyYycsIGltYWdlLmF0dHIoJ3NyYycpKTtcbiAgICAgICAgICAgIGltYWdlLmF0dHIoJ3NyYycsIGFsdEltYWdlU3JjKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdyaWRJbWFnZXMgPSAnW2RhdGEtaW1hZ2Utc3dhcC1saW5rXSc7XG4gICAgY29uc3Qgc2xpY2tJbWFnZXMgPSAnW2RhdGEtaW1hZ2Utc3dhcC1saW5rXSc7XG5cblxuICAgICQoYCR7Z3JpZEltYWdlc30sICR7c2xpY2tJbWFnZXN9YCkub2ZmKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUgZm9jdXMgYmx1cicsIF8uZGVib3VuY2Uoc3dhcEltYWdlLCA1MDApKTtcbiAgICAkKGAke2dyaWRJbWFnZXN9LCAke3NsaWNrSW1hZ2VzfWApLm9uKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUgZm9jdXMgYmx1cicsIF8uZGVib3VuY2Uoc3dhcEltYWdlLCA1MDApKTtcblxuICAgIC8vIFJlLWFwcGx5IGJpbmRzIGZvciBpbWFnZSBzd2FwIG9uIGhvdmVyIGFmdGVyIEFKQVhcbiAgICAkKCdib2R5Jykub24oJ2ZhY2V0ZWRTZWFyY2hSZWZyZXNoIHByb2R1Y3RWaWV3TW9kZUNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICQoYCR7Z3JpZEltYWdlc30sICR7c2xpY2tJbWFnZXN9YCkub2ZmKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUgZm9jdXMgYmx1cicsIF8uZGVib3VuY2Uoc3dhcEltYWdlLCA1MDApKTtcbiAgICAgICAgJChgJHtncmlkSW1hZ2VzfSwgJHtzbGlja0ltYWdlc31gKS5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlIGZvY3VzIGJsdXInLCBfLmRlYm91bmNlKHN3YXBJbWFnZSwgNTAwKSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQga2l0Y2hlblNpbmsgZnJvbSAnLi9raXRjaGVuLXNpbmsnO1xuaW1wb3J0IGltYWdlU3dhcE9uSG92ZXIgZnJvbSAnLi9pbWFnZS1zd2FwLW9uLWhvdmVyJztcbmltcG9ydCBwb3B1cExvZ2luV2luZG93IGZyb20gJy4vcG9wdXAtbG9naW4nO1xuaW1wb3J0IENhcmRBZGRUb0NhcnQgZnJvbSAnLi9jYXJkLWFkZC10by1jYXJ0JztcbmltcG9ydCBTbGlkZUNhcnQgZnJvbSAnLi9zbGlkZS1jYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGluRGV2ZWxvcG1lbnQgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoaW5EZXZlbG9wbWVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jb250ZXh0ICcsIGNvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAga2l0Y2hlblNpbmsoY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVDYXJ0ID0gbmV3IFNsaWRlQ2FydChjb250ZXh0KTtcblxuICAgIGltYWdlU3dhcE9uSG92ZXIoY29udGV4dCk7XG4gICAgcG9wdXBMb2dpbldpbmRvdyhjb250ZXh0KTtcbiAgICBuZXcgQ2FyZEFkZFRvQ2FydChjb250ZXh0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufVxuIiwiY29uc3QgdG9SZW0gPSAocHgpID0+IHtcbiAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKSk7XG4gICAgcmV0dXJuIHB4IC8gZm9udFNpemU7XG59O1xuXG5jb25zdCBnZXRJblJlbSA9IChzdHJpbmcpID0+IHtcbiAgICBjb25zdCBwdmEgPSBzdHJpbmcuc3BsaXQoJyAnKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBwdmEubWFwKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCByZWdleCA9IC9weC9naTtcbiAgICAgICAgY29uc3QgcHggPSBpdGVtLnJlcGxhY2UocmVnZXgsICcnKTtcblxuICAgICAgICBpZiAocHggPT09ICdhdXRvJyB8fCBOdW1iZXIocHgpID09PSAwKSByZXR1cm4gcHg7XG5cbiAgICAgICAgY29uc3QgcmVtcyA9IHRvUmVtKE51bWJlcihweCkpO1xuICAgICAgICByZXR1cm4gYCR7cmVtcy50b0ZpeGVkKDIpfXJlbWA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsdWVzLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IGNvbXBvbmVudFRvSGV4ID0gKGMpID0+IHtcbiAgICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gYDAke2hleH1gIDogaGV4O1xufTtcblxuY29uc3QgcmdiVG9IZXggPSAociwgZywgYikgPT4gYCMke2NvbXBvbmVudFRvSGV4KHIpfSR7Y29tcG9uZW50VG9IZXgoZyl9JHtjb21wb25lbnRUb0hleChiKX1gO1xuXG5jb25zdCBnZXRJbkhleCA9IChzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZ2JWYWx1ZXMgPSBzdHJpbmcuc2xpY2Uoc3RyaW5nLmluZGV4T2YoJygnKSArIDEsIHN0cmluZy5pbmRleE9mKCcpJykpLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgciA9IE51bWJlcihyZ2JWYWx1ZXNbMF0pO1xuICAgIGNvbnN0IGcgPSBOdW1iZXIocmdiVmFsdWVzWzFdKTtcbiAgICBjb25zdCBiID0gTnVtYmVyKHJnYlZhbHVlc1syXSk7XG4gICAgcmV0dXJuIHJnYlRvSGV4KHIsIGcsIGIpO1xufTtcblxuY29uc3QgbG9hZENvbnRhaW5lclN0eWxlRGF0YSA9ICgpID0+IHtcbiAgICAkKCcja3MtY29udGFpbmVycyAua3MtZWxlbWVudF9fc3ViJykuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gYC5rcy0keyQoJy5rcy1lbGVtZW50X19zdWItdGl0bGUnLCBpdGVtKS5kYXRhKCdrcy10eXBlJyl9YDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAnYnVnZ2VkIGZvciBub3cnO1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGUpKS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXgtd2lkdGgnKTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gZ2V0SW5SZW0od2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZSkpLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbicpKTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IGdldEluUmVtKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGUpKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nJykpO1xuICAgICAgICBjb25zdCBmbG9hdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGUpKS5nZXRQcm9wZXJ0eVZhbHVlKCdmbG9hdCcpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXMtZGF0YS10YWJsZVwiPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPldpZHRoPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXggV2lkdGg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hcmdpbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGFkZGluZzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RmxvYXQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHt3aWR0aH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7bWF4V2lkdGh9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke21hcmdpbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7cGFkZGluZ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7ZmxvYXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICQoJy5rcy1lbGVtZW50X19zdWItY29udGFpbmVyJywgaXRlbSkuYXBwZW5kKHN0eWxlcyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBsb2FkUGFsZXR0ZVN0eWxlRGF0YSA9ICgpID0+IHtcbiAgICAkKCcja3MtcGFsZXR0ZSAua3MtZWxlbWVudF9fc3ViJykuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9yRWxlbWVudHMgPSAkKCcua3MtcGFsZXR0ZV9fYm94JywgaXRlbSk7XG5cbiAgICAgICAgY29sb3JFbGVtZW50cy5lYWNoKChpZHgsIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGdldEluSGV4KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJykpO1xuICAgICAgICAgICAgJChlbCkuZmluZCgnLmtzLXBhbGV0dGVfX2xhYmVsLS1oZXgnKS50ZXh0KGNvbG9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBsb2FkVHlwb2dyYXBoeVN0eWxlRGF0YSA9ICgpID0+IHtcbiAgICAkKCcja3MtdHlwb2dyYXBoeSAua3MtZWxlbWVudF9fc3ViJykuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gYC5rcy0keyQoJy5rcy1lbGVtZW50X19zdWItdGl0bGUnLCBpdGVtKS50ZXh0KCl9YDtcbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRJbkhleCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlKSkuZ2V0UHJvcGVydHlWYWx1ZSgnY29sb3InKSk7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZSkpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgICBjb25zdCBmb250RmFtaWx5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZSkpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5Jyk7XG4gICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlKSkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC13ZWlnaHQnKTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gZ2V0SW5SZW0od2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZSkpLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbicpKTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IGdldEluUmVtKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGUpKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nJykpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXMtZGF0YS10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2xvcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZvbnQgU2l6ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZvbnQgRmFtaWx5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rm9udCBXZWlnaHQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXJnaW48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QYWRkaW5nPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y29sb3J9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtmb250U2l6ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2ZvbnRGYW1pbHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtmb250V2VpZ2h0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7bWFyZ2lufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7cGFkZGluZ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgJCgnLmtzLWVsZW1lbnRfX3N1Yi1jb250YWluZXInLCBpdGVtKS5wcmVwZW5kKHN0eWxlcyk7XG4gICAgfSk7XG59O1xuY29uc3QgbG9hZEJ1dHRvblN0eWxlRGF0YSA9ICgpID0+IHtcbiAgICAkKCcja3MtYnV0dG9ucyAua3MtZWxlbWVudF9fc3ViJykuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gYC5idXR0b24tLSR7JCgnLmtzLWVsZW1lbnRfX3N1Yi10aXRsZScsIGl0ZW0pLnRleHQoKX1gLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gJChidXR0b25DbGFzcywgaXRlbSkudG9BcnJheSgpLm1hcChidXR0b24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2J1dHRvbiAnLCBnZXRJbkhleCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKSkpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9ICQoYnV0dG9uKS5kYXRhKCdidXR0b24tdHlwZScpO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBnZXRJbkhleCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2NvbG9yJykpO1xuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gZ2V0SW5IZXgod2luZG93LmdldENvbXB1dGVkU3R5bGUoYnV0dG9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJykpO1xuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgICAgICAgY29uc3QgZm9udEZhbWlseSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJ1dHRvbikuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKTtcbiAgICAgICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtd2VpZ2h0Jyk7XG4gICAgICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJ1dHRvbikuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXdpZHRoJyk7XG4gICAgICAgICAgICBjb25zdCBib3JkZXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJ1dHRvbikuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXN0eWxlJyk7XG4gICAgICAgICAgICBjb25zdCBib3JkZXJDb2xvciA9IGdldEluSGV4KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJ1dHRvbikuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykpO1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gZ2V0SW5SZW0od2luZG93LmdldENvbXB1dGVkU3R5bGUoYnV0dG9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4nKSk7XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gZ2V0SW5SZW0od2luZG93LmdldENvbXB1dGVkU3R5bGUoYnV0dG9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nJykpO1xuXG4gICAgICAgICAgICBjb25zdCB0ciA9IGBcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke3R5cGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y29sb3J9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7YmFja2dyb3VuZENvbG9yfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2ZvbnRTaXplfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2ZvbnRGYW1pbHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7Zm9udFdlaWdodH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtib3JkZXJXaWR0aH0gJHtib3JkZXJTdHlsZX0gJHtib3JkZXJDb2xvcn08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHttYXJnaW59PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cGFkZGluZ308L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgcmV0dXJuIHRyO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdHlsZXMgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3R5bGVzLWRhdGEtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbG9yPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QmFja2dyb3VuZCBDb2xvcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZvbnQgU2l6ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZvbnQgRmFtaWx5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rm9udCBXZWlnaHQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Cb3JkZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXJnaW48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QYWRkaW5nPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RhYmxlUm93cy5qb2luKCcnLCAnLCcpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAkKCcua3MtZWxlbWVudF9fc3ViLWNvbnRhaW5lcicsIGl0ZW0pLnByZXBlbmQoc3R5bGVzKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBjb250ZXh0Lml0c0NvbmZpZy5raXRjaGVuX3Npbms7XG4gICAgaWYgKCFpc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgbG9hZENvbnRhaW5lclN0eWxlRGF0YSgpO1xuICAgIGxvYWRQYWxldHRlU3R5bGVEYXRhKCk7XG4gICAgbG9hZFR5cG9ncmFwaHlTdHlsZURhdGEoKTtcbiAgICBsb2FkQnV0dG9uU3R5bGVEYXRhKCk7XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAjIyBoYW5kbGUgbG9nZ2luIGluIHZpYSBhamF4XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuY29uc3Qgc3VibWl0TG9naW5Gb3JtID0gKCkgPT4ge1xuICAgICQoJy5tb2RhbC0tcG9wdXBMb2dpbldpbmRvdyAubG9hZGluZ092ZXJsYXknKS5zaG93KCk7IC8vIHNob3cgbG9hZGluZyBzY3JlZW5cbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgbG9naW5fZW1haWw6ICQoJyNwb3B1cExvZ2luV2luZG93Rm9ybSAjbG9naW5fZW1haWwnKS52YWwoKS50cmltKCksIC8vIHdhbnRlZCB0byBrZWVwIHNhbWUgSUQgYXMgbWFpbiBsb2dpbiBmaWVsZHMgc28gY2FuIGJlIGF1dG9wb3B1bGF0ZWQgZWFzaWx5XG4gICAgICAgIGxvZ2luX3Bhc3M6ICQoJyNwb3B1cExvZ2luV2luZG93Rm9ybSAjbG9naW5fcGFzcycpLnZhbCgpLnRyaW0oKSwgLy8gd2FudGVkIHRvIGtlZXAgc2FtZSBJRCBhcyBtYWluIGxvZ2luIGZpZWxkcyBzbyBjYW4gYmUgYXV0b3BvcHVsYXRlZCBlYXNpbHlcbiAgICB9O1xuICAgICQucG9zdCgnL2xvZ2luLnBocD9hY3Rpb249Y2hlY2tfbG9naW4nLCBmb3JtRGF0YSwgKGRhdGEpID0+IHtcbiAgICAgICAgLy8gaWYgZ2V0IGEgcmVzcG9uc2VcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgbG9nZ2VkIGluXG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnL2FjY291bnQucGhwJywgeyB0ZW1wbGF0ZTogJ2N1c3RvbS9wb3B1cC1sb2dpbi13aW5kb3ctY3VzdG9tZXItaWQnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdHJpbSBuZWNlc3NhcnkgYi9jIGl0IHdhcyBnaXZpbmcgYmFjayB3aGl0ZXNwYWNlIGFzIHRoZSByZXNwb25zZSBpZiB3ZSBnb3QgYVxuICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNlIGJhY2sgZnJvbSB0aGUgYWNjb3VudCBwYWdlLCB3ZSdyZSBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtLXBvcHVwTG9naW5XaW5kb3cgLmxvYWRpbmdPdmVybGF5LCAjcG9wdXBMb2dpbldpbmRvd0Zvcm0nKS5oaWRlKCk7IC8vIGhpZGUgbG9hZGluZyBhbmQgZm9ybSBpdHNlbGZcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLS1wb3B1cExvZ2luV2luZG93IC5hbGVydEJveC0tc3VjY2VzcycpLnNsaWRlRG93bigpOyAvLyBzZXIgaXMgbm93IGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICQoJyNwb3B1cExvZ2luV2luZG93Rm9ybScpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdjbG9zZScpOyAvLyBjbG9zZSBtb2RhbCBhZnRlciAyLjUgc2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3IganVzdCByZWxvYWQgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0dXJsID0gJCgnYm9keScpLmhhc0NsYXNzKCdxcmJfX3RyaWdnZXItd2FzLWNsaWNrZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7d2luZG93LmxvY2F0aW9uLmhyZWZ9P3FyYl9vcGVuPXRydWVgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3R1cmw7XG4gICAgICAgICAgICAgICAgICAgIH0sIDI1MDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC0tcG9wdXBMb2dpbldpbmRvdyAubG9hZGluZ092ZXJsYXknKS5oaWRlKCk7IC8vIGhpZGUgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtLXBvcHVwTG9naW5XaW5kb3cgLmFsZXJ0Qm94LS1lcnJvcicpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLm1vZGFsLS1wb3B1cExvZ2luV2luZG93IC5sb2FkaW5nT3ZlcmxheScpLmhpZGUoKTsgLy8gaGlkZSBsb2FkaW5nXG4gICAgICAgICAgICAkKCcubW9kYWwtLXBvcHVwTG9naW5XaW5kb3cgLmFsZXJ0Qm94LS1lcnJvcicpLnNsaWRlRG93bigpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMjIGhhbmRsZSB2YWxpZGF0aW5nIHRoZSBmb3JtIGZpZWxkc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuY29uc3QgcmVnaXN0ZXJMb2dpblZhbGlkYXRpb24gPSAoJGxvZ2luRm9ybSkgPT4ge1xuICAgIGNvbnN0IGxvZ2luTW9kZWwgPSBmb3JtcztcblxuICAgIGNvbnN0IGxvZ2luVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgc3VibWl0OiAnI3BvcHVwTG9naW5XaW5kb3dGb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgIH0pO1xuXG4gICAgbG9naW5WYWxpZGF0b3IuYWRkKFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcG9wdXBMb2dpbldpbmRvd0Zvcm0gaW5wdXRbbmFtZT1cImxvZ2luX2VtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxvZ2luTW9kZWwuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnUGxlYXNlIHVzZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MsIHN1Y2ggYXMgdXNlckBleGFtcGxlLmNvbS4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwb3B1cExvZ2luV2luZG93Rm9ybSBpbnB1dFtuYW1lPVwibG9naW5fcGFzc1wiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLnBhc3N3b3JkKHZhbCk7XG5cbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgfSxcbiAgICBdKTtcblxuICAgICRsb2dpbkZvcm0uc3VibWl0KChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubW9kYWwtLXBvcHVwTG9naW5XaW5kb3cgLmFsZXJ0Qm94Jykuc2xpZGVVcCgpOyAvLyBnZXQgcmlkIG9mIGFueSBwcmV2aW91cyBlcnJvcnNcbiAgICAgICAgbG9naW5WYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgaWYgKGxvZ2luVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgc3VibWl0TG9naW5Gb3JtKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cblxuY29uc3QgcG9wdXBMb2dpbldpbmRvdyA9ICh7IGl0c0NvbmZpZyB9KSA9PiB7XG4gICAgY29uc3QgJGxvZ2luRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnI3BvcHVwTG9naW5XaW5kb3dGb3JtJyk7XG5cbiAgICBpZiAoaXRzQ29uZmlnLnBvcHVwX2xvZ2luICYmICRsb2dpbkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbnR1aXRTb2x1dGlvbnMubmV0IC0gUG9wdXAgTG9naW4gV2luZG93Jyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICByZWdpc3RlckxvZ2luVmFsaWRhdGlvbigkbG9naW5Gb3JtKTtcbiAgICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVwTG9naW5XaW5kb3c7XG4iLCJpbXBvcnQgTW1lbnVMaWdodCBmcm9tICdtbWVudS1saWdodCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0ICogYXMgZm9jdXNUcmFwUGFja2FnZSBmcm9tICdmb2N1cy10cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVDYXJ0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbnR1aXRTb2x1dGlvbnMubmV0IC0gU2xpZGUgQ2FydCcpXG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy4kY2FydExvYWRpbmcgPSAkKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgdGhpcy4kc2xpZGVDYXJ0ID0gJCgnLnNsaWRlLWNhcnQnKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nQ2xhc3MgPSAnaXMtbG9hZGluZyc7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY29tbW9uL2NhcnQtcHJldmlldycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBudWxsO1xuICAgICAgICB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdFNsaWRlQ2FydCgpIHtcbiAgICAgICAgY29uc3QgbWVudSA9IG5ldyBNbWVudUxpZ2h0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZUNhcnQnKSk7XG4gICAgICAgIGNvbnN0IGRyYXdlciA9IG1lbnUub2ZmY2FudmFzKHtwb3NpdGlvbjogJ3JpZ2h0J30pO1xuXG4gICAgICAgICQoJy5zbGlkZS1jYXJ0LW9wZW4nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBEb24ndCBsb2FkIG9uIGNhcnQgcGFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC50ZW1wbGF0ZSA9PT0gJ3BhZ2VzL2NhcnQnKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dXBGb2N1c1RyYXAoKTtcblxuICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gY2FydCBwYWdlIG9uIG1vYmlsZVxuICAgICAgICAgICAgaWYgKC9Nb2JpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jYXJ0LnBocCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZHJhd2VyLm9wZW4oKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlDYXJ0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zbGlkZS1jYXJ0LWNsb3NlLCAubW0tb2NkX19iYWNrZHJvcCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRyYXdlci5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9jdXNUcmFwKCk7XG4gICAgICAgIH0pLm9uKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9jdXNUcmFwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOztcbiAgICB9XG5cbiAgICBxdWVyeUNhcnQoKSB7XG4gICAgICAgIHRoaXMuJHNsaWRlQ2FydC5hZGRDbGFzcyh0aGlzLmxvYWRpbmdDbGFzcykuaHRtbCh0aGlzLiRjYXJ0TG9hZGluZyk7XG4gICAgICAgIHRoaXMuJGNhcnRMb2FkaW5nLnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KHRoaXMub3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY2FydC5waHAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRjYXJ0TG9hZGluZy5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZUNhcnQucmVtb3ZlQ2xhc3ModGhpcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVDYXJ0Lmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5zbGlkZUNhcnRSZW1vdmVFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXROZXdDYXJ0UXR5KCkge1xuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDYXJ0UXVhbnRpdHkoe30sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICQoJy5jYXJ0LXF1YW50aXR5JylcbiAgICAgICAgICAgICAgICAudGV4dChyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ2NvdW50UGlsbC0tcG9zaXRpdmUnLCByZXNwb25zZSA+IDApO1xuICAgICAgICAgICAgaWYgKHV0aWxzLnRvb2xzLnN0b3JhZ2UubG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydC1xdWFudGl0eScsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNsaWRlQ2FydFJlbW92ZUV2ZW50KCkge1xuICAgICAgICAkKCcuc2xpZGUtY2FydC1yZW1vdmUnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydC1pdGVtaWQnKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGVDYXJ0LmFkZENsYXNzKHRoaXMubG9hZGluZ0NsYXNzKS5odG1sKHRoaXMuJGNhcnRMb2FkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2FydExvYWRpbmcuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE5ld0NhcnRRdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeUNhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0dXBGb2N1c1RyYXAoKSB7XG4gICAgICAgIGlmICghdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwpIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGZvY3VzVHJhcFBhY2thZ2UuY3JlYXRlRm9jdXNUcmFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZUNhcnQnKSwge1xuICAgICAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgZmFsbGJhY2tGb2N1czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja05vZGUgPSB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCAmJiB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJCgnW2RhdGEtaGVhZGVyLWxvZ28tbGlua10nKVswXTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2tOb2RlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcbiAgICB9O1xuXG4gICAgZGlzYWJsZUZvY3VzVHJhcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICAgIGlmICh0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCkgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCA9IG51bGw7XG4gICAgfTtcblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlQ2FydCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBzd2VldEFsZXJ0IGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLy8gV2Vha01hcCB3aWxsIGRlZmluZWQgaW4gdGhlIGdsb2JhbCBzY29wZSBpZiBuYXRpdmUgV2Vha01hcCBpcyBub3Qgc3VwcG9ydGVkLlxuY29uc3Qgd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuLy8gU2V0IGRlZmF1bHRzIGZvciBzd2VldGFsZXJ0MiBwb3B1cCBib3hlc1xuY29uc3QgU3dhbCA9IHN3ZWV0QWxlcnQubWl4aW4oe1xuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeScsXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J1dHRvbiBidXR0b24tLXNlY29uZGFyeScsXG4gICAgfSxcbn0pO1xuXG4vLyBSZS1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IFN3YWw7XG4iXSwibmFtZXMiOlsidXRpbHMiLCJTd2FsIiwibW9kYWxGYWN0b3J5IiwiYWxlcnRNb2RhbCIsInNob3dBbGVydE1vZGFsIiwiQ2FyZEFkZFRvQ2FydCIsImNvbnRleHQiLCJpdHNDb25maWciLCJjYXJkX2F0Y19idXR0b24iLCJjYXJkX2F0Y19idXR0b25fcG9zIiwiaGFzUXR5SW5wdXQiLCJjYXJkX2F0Y19pbnB1dCIsImRlZmF1bHRRdHkiLCJjYXJkX2F0Y19pbnB1dF9kZWZhdWx0IiwiJCIsIm9uIiwiYmluZEV2ZW50cyIsImJpbmQiLCIkb3ZlcmxheSIsIl9wcm90byIsInByb3RvdHlwZSIsInVwZGF0ZUNhcmQiLCIkdGFyZ2V0IiwidHlwZSIsIiRzY29wZSIsImhhc0NsYXNzIiwicGFyZW50cyIsInRleHQiLCJkYXRhIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZEl0ZW1Ub0NhcnQiLCJ1cmwiLCJfdGhpcyIsInByZXZpZXdNb2RhbCIsIiRjYXJkQXRjTW9kYWwiLCJwb3N0IiwicmVwb25zZSIsImNhcnRSZXNwb25zZSIsImFwaSIsImNhcnQiLCJnZXRDYXJ0UXVhbnRpdHkiLCJlcnJvciIsInJlc3BvbnNlIiwicXVhbnRpdHkiLCJwYXJzZUludCIsIiRjYXJ0Q291bnRlciIsIiRjYXJkQWRkZWRIZWFkaW5nIiwidHJpZ2dlciIsIm9wZW4iLCJzaG93IiwidXBkYXRlQ29udGVudCIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsIiRtb2RhbCIsIndpcmVRdHlCdXR0b25zIiwiJGNhcmRzIiwiX3RoaXMyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCIkaW5wdXQiLCJxdHkiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwid2lyZUFkZFRvQ2FydEJ1dHRvbiIsIl90aGlzMyIsInRhcmdldFVybCIsImlzTmFOIiwiZXJyb3JtZXNzYWdlIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm5ld1VybCIsImVuY29kZVVSSSIsIndpcmVRdHlJbnB1dCIsIngiLCJ3aGljaCIsImtleUNvZGUiLCJkZWZhdWx0IiwiaW1hZ2VTd2FwT25Ib3ZlciIsImlzQWN0aXZlIiwiaW1hZ2Vfc3dhcF9vbl9ob3ZlciIsInN3YXBJbWFnZSIsImltYWdlIiwiZmluZCIsImltYWdlQ29udGFpbmVyIiwiYWx0SW1hZ2VTcmMiLCJhdHRyIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZ3JpZEltYWdlcyIsInNsaWNrSW1hZ2VzIiwib2ZmIiwiX2RlYm91bmNlIiwia2l0Y2hlblNpbmsiLCJwb3B1cExvZ2luV2luZG93IiwiU2xpZGVDYXJ0IiwiaW5EZXZlbG9wbWVudCIsInNsaWRlQ2FydCIsInRvUmVtIiwicHgiLCJmb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEluUmVtIiwic3RyaW5nIiwicHZhIiwic3BsaXQiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwicmVnZXgiLCJOdW1iZXIiLCJyZW1zIiwidG9GaXhlZCIsImpvaW4iLCJjb21wb25lbnRUb0hleCIsImMiLCJoZXgiLCJ0b1N0cmluZyIsInJnYlRvSGV4IiwiciIsImciLCJiIiwiZ2V0SW5IZXgiLCJyZ2JWYWx1ZXMiLCJzbGljZSIsImluZGV4T2YiLCJsb2FkQ29udGFpbmVyU3R5bGVEYXRhIiwiZWFjaCIsImlkeCIsIndpZHRoIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZmxvYXQiLCJzdHlsZXMiLCJhcHBlbmQiLCJsb2FkUGFsZXR0ZVN0eWxlRGF0YSIsImNvbG9yRWxlbWVudHMiLCJlbCIsImNvbG9yIiwibG9hZFR5cG9ncmFwaHlTdHlsZURhdGEiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInByZXBlbmQiLCJsb2FkQnV0dG9uU3R5bGVEYXRhIiwiYnV0dG9uQ2xhc3MiLCJ0b0xvd2VyQ2FzZSIsInRhYmxlUm93cyIsInRvQXJyYXkiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJ0ciIsImtpdGNoZW5fc2luayIsIm5vZCIsImZvcm1zIiwiY2xhc3NpZnlGb3JtIiwic3VibWl0TG9naW5Gb3JtIiwiZm9ybURhdGEiLCJsb2dpbl9lbWFpbCIsInRyaW0iLCJsb2dpbl9wYXNzIiwiZ2V0UGFnZSIsInRlbXBsYXRlIiwiZXJyIiwiaGlkZSIsInNsaWRlRG93biIsInNldFRpbWVvdXQiLCJyZWRpcmVjdHVybCIsImxvY2F0aW9uIiwiaHJlZiIsInJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uIiwiJGxvZ2luRm9ybSIsImxvZ2luTW9kZWwiLCJsb2dpblZhbGlkYXRvciIsInN1Ym1pdCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwicGFzc3dvcmQiLCJzbGlkZVVwIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiX3JlZiIsInBvcHVwX2xvZ2luIiwiTW1lbnVMaWdodCIsInN3YWwiLCJmb2N1c1RyYXBQYWNrYWdlIiwiJGNhcnRMb2FkaW5nIiwiJHNsaWRlQ2FydCIsImxvYWRpbmdDbGFzcyIsIm9wdGlvbnMiLCJmb2N1c1RyYXAiLCIkcHJlTW9kYWxGb2N1c2VkRWwiLCJpbml0U2xpZGVDYXJ0IiwibWVudSIsImRyYXdlciIsIm9mZmNhbnZhcyIsInBvc2l0aW9uIiwic2V0dXBGb2N1c1RyYXAiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlDYXJ0IiwiY2xvc2UiLCJkaXNhYmxlRm9jdXNUcmFwIiwiaHRtbCIsImdldENvbnRlbnQiLCJzbGlkZUNhcnRSZW1vdmVFdmVudCIsImdldE5ld0NhcnRRdHkiLCJFcnJvciIsInRvZ2dsZUNsYXNzIiwidG9vbHMiLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIml0ZW1JZCIsIml0ZW1SZW1vdmUiLCJzdGF0dXMiLCJlcnJvcnMiLCJfdGhpczQiLCJhY3RpdmVFbGVtZW50IiwiY3JlYXRlRm9jdXNUcmFwIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImFsbG93T3V0c2lkZUNsaWNrIiwiZmFsbGJhY2tGb2N1cyIsImZhbGxiYWNrTm9kZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0ZSIsImZvY3VzIiwic3dlZXRBbGVydCIsIndlYWtNYXAiLCJXZWFrTWFwIiwibWl4aW4iLCJidXR0b25zU3R5bGluZyIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=

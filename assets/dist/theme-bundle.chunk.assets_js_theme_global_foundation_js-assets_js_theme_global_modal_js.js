"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_global_foundation_js-assets_js_theme_global_modal_js"],{

/***/ "./assets/js/theme/global/foundation.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/foundation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.tab */ "./node_modules/foundation-sites/js/foundation/foundation.tab.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _reveal_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-close */ "./assets/js/theme/global/reveal-close.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($element) {
  $element.foundation({
    dropdown: {
      // specify the class used for active dropdowns
      active_class: 'is-open'
    },
    reveal: {
      bg_class: 'modal-background',
      dismiss_modal_class: 'modal-close',
      close_on_background_click: true
    },
    tab: {
      active_class: 'is-active'
    }
  });
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-reveal]', {
    $context: $element
  });
  (0,_reveal_close__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-reveal-close]', {
    $context: $element
  });
}

/***/ }),

/***/ "./assets/js/theme/global/modal.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/global/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   ModalEvents: () => (/* binding */ ModalEvents),
/* harmony export */   alertModal: () => (/* binding */ alertModal),
/* harmony export */   "default": () => (/* binding */ modalFactory),
/* harmony export */   defaultModal: () => (/* binding */ defaultModal),
/* harmony export */   showAlertModal: () => (/* binding */ showAlertModal)
/* harmony export */ });
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var bodyActiveClass = 'has-activeModal';
var loadingOverlayClass = 'loadingOverlay';
var modalBodyClass = 'modal-body';
var modalContentClass = 'modal-content';
var SizeClasses = {
  small: 'modal--small',
  large: 'modal--large',
  normal: ''
};
var ModalEvents = {
  close: 'close.fndtn.reveal',
  closed: 'closed.fndtn.reveal',
  open: 'open.fndtn.reveal',
  opened: 'opened.fndtn.reveal',
  loaded: 'loaded.data.custom'
};
function getSizeFromModal($modal) {
  if ($modal.hasClass(SizeClasses.small)) {
    return 'small';
  }
  if ($modal.hasClass(SizeClasses.large)) {
    return 'large';
  }
  return 'normal';
}
function getViewportHeight(multipler) {
  if (multipler === void 0) {
    multipler = 1;
  }
  var viewportHeight = $(window).height();
  return viewportHeight * multipler;
}
function wrapModalBody(content) {
  var $modalBody = $('<div>');
  $modalBody.addClass(modalBodyClass).html(content);
  return $modalBody;
}
function restrainContentHeight($content) {
  if ($content.length === 0) return;
  var $body = $("." + modalBodyClass, $content);
  if ($body.length === 0) return;
  var bodyHeight = $body.outerHeight();
  var contentHeight = $content.outerHeight();
  var viewportHeight = getViewportHeight(0.9);
  var maxHeight = viewportHeight - (contentHeight - bodyHeight);
  $body.css('max-height', maxHeight);
}
function createModalContent($modal) {
  var $content = $("." + modalContentClass, $modal);
  if ($content.length === 0) {
    var existingContent = $modal.children();
    $content = $('<div>').addClass(modalContentClass).append(existingContent).appendTo($modal);
  }
  return $content;
}
function createLoadingOverlay($modal) {
  var $loadingOverlay = $("." + loadingOverlayClass, $modal);
  if ($loadingOverlay.length === 0) {
    $loadingOverlay = $('<div>').addClass(loadingOverlayClass).appendTo($modal);
  }
  return $loadingOverlay;
}

/**
 * Require foundation.reveal
 * Decorate foundation.reveal with additional methods
 * @param {jQuery} $modal
 * @param {Object} [options]
 * @param {string} [options.size]
 */
var Modal = /*#__PURE__*/function () {
  function Modal($modal, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? null : _ref$size;
    this.$modal = $modal;
    this.$content = createModalContent(this.$modal);
    this.$overlay = createLoadingOverlay(this.$modal);
    this.defaultSize = size || getSizeFromModal($modal);
    this.size = this.defaultSize;
    this.pending = false;
    this.$preModalFocusedEl = null;
    this.focusTrap = null;
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalOpened = this.onModalOpened.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.bindEvents();

    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */
    this.$modal.on('click', '.dropdown-menu-button', function (e) {
      e.stopPropagation();
    });
  }
  var _proto = Modal.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$modal.on(ModalEvents.close, this.onModalClose);
    this.$modal.on(ModalEvents.closed, this.onModalClosed);
    this.$modal.on(ModalEvents.open, this.onModalOpen);
    this.$modal.on(ModalEvents.opened, this.onModalOpened);
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      size = _ref2.size,
      _ref2$pending = _ref2.pending,
      pending = _ref2$pending === void 0 ? true : _ref2$pending,
      _ref2$clearContent = _ref2.clearContent,
      clearContent = _ref2$clearContent === void 0 ? true : _ref2$clearContent;
    this.pending = pending;
    if (size) {
      this.size = size;
    }
    if (clearContent) {
      this.clearContent();
    }
    this.$modal.foundation('reveal', 'open');
  };
  _proto.close = function close() {
    this.$modal.foundation('reveal', 'close');
  };
  _proto.updateContent = function updateContent(content, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$wrap = _ref3.wrap,
      wrap = _ref3$wrap === void 0 ? false : _ref3$wrap;
    var $content = $(content);
    if (wrap) {
      $content = wrapModalBody(content);
    }
    this.pending = false;
    this.$content.html($content);
    this.$modal.trigger(ModalEvents.loaded);
    restrainContentHeight(this.$content);
    (0,_foundation__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$content);
  };
  _proto.clearContent = function clearContent() {
    this.$content.html('');
  };
  _proto.setupFocusTrap = function setupFocusTrap() {
    var _this = this;
    if (!this.$preModalFocusedEl) this.$preModalFocusedEl = $(document.activeElement);
    if (!this.focusTrap) {
      this.focusTrap = focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap(this.$modal[0], {
        escapeDeactivates: false,
        returnFocusOnDeactivate: false,
        allowOutsideClick: true,
        fallbackFocus: function fallbackFocus() {
          var fallbackNode = _this.$preModalFocusedEl && _this.$preModalFocusedEl.length ? _this.$preModalFocusedEl[0] : $('[data-header-logo-link]')[0];
          return fallbackNode;
        }
      });
    }
    this.focusTrap.deactivate();
    this.focusTrap.activate();
  };
  _proto.onModalClose = function onModalClose() {
    $('body').removeClass(bodyActiveClass);
  };
  _proto.onModalClosed = function onModalClosed() {
    this.size = this.defaultSize;
    if (this.focusTrap) this.focusTrap.deactivate();
    if (this.$preModalFocusedEl) this.$preModalFocusedEl.focus();
    this.$preModalFocusedEl = null;
  };
  _proto.onModalOpen = function onModalOpen() {
    $('body').addClass(bodyActiveClass);
  };
  _proto.onModalOpened = function onModalOpened() {
    var _this2 = this;
    if (this.pending) {
      this.$modal.one(ModalEvents.loaded, function () {
        if (_this2.$modal.hasClass('open')) _this2.setupFocusTrap();
      });
    } else {
      this.setupFocusTrap();
    }
    restrainContentHeight(this.$content);
  };
  _createClass(Modal, [{
    key: "pending",
    get: function get() {
      return this._pending;
    },
    set: function set(pending) {
      this._pending = pending;
      if (pending) {
        this.$overlay.show();
      } else {
        this.$overlay.hide();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      this._size = size;
      this.$modal.removeClass(SizeClasses.small).removeClass(SizeClasses.large).addClass(SizeClasses[size] || '');
    }
  }]);
  return Modal;
}();

/**
 * Return an array of modals
 * @param {string} selector
 * @param {Object} [options]
 * @param {string} [options.size]
 * @returns {array}
 */
function modalFactory(selector, options) {
  if (selector === void 0) {
    selector = '[data-reveal]';
  }
  if (options === void 0) {
    options = {};
  }
  var $modals = $(selector, options.$context);
  return $modals.map(function (index, element) {
    var $modal = $(element);
    var instanceKey = 'modalInstance';
    var cachedModal = $modal.data(instanceKey);
    if (cachedModal instanceof Modal) {
      return cachedModal;
    }
    var modal = new Modal($modal, options);
    $modal.data(instanceKey, modal);
    return modal;
  }).toArray();
}

/*
 * Return the default page modal
 */
function defaultModal() {
  return modalFactory('#modal')[0];
}

/*
 * Return the default alert modal
 */
function alertModal() {
  return modalFactory('#alert-modal')[0];
}

/*
 * Display the given message in the default alert modal
 */
function showAlertModal(message) {
  var modal = alertModal();
  modal.open();
  modal.updateContent("<span>" + message + "</span>");
}

/***/ }),

/***/ "./assets/js/theme/global/reveal-close.js":
/*!************************************************!*\
  !*** ./assets/js/theme/global/reveal-close.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ revealCloseFactory)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var revealCloseAttr = 'revealClose';
var revealCloseSelector = "[data-" + revealCloseAttr + "]";
var revealSelector = '[data-reveal]';
var RevealClose = /*#__PURE__*/function () {
  function RevealClose($button) {
    this.$button = $button;
    this.modalId = $button.data(revealCloseAttr);
    this.onClick = this.onClick.bind(this);
    this.bindEvents();
  }
  var _proto = RevealClose.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$button.on('click', this.onClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$button.off('click', this.onClick);
  };
  _proto.onClick = function onClick(event) {
    var modal = this.modal;
    if (modal) {
      event.preventDefault();
      modal.close();
    }
  };
  _createClass(RevealClose, [{
    key: "modal",
    get: function get() {
      var $modal;
      if (this.modalId) {
        $modal = $("#" + this.modalId);
      } else {
        $modal = this.$button.parents(revealSelector).eq(0);
      }
      return $modal.data('modalInstance');
    }
  }]);
  return RevealClose;
}();
/*
 * Extend foundation.reveal with the ability to close a modal by clicking on any of its child element
 * with data-reveal-close attribute.
 *
 * @example
 *
 * <div data-reveal id="helloModal">
 *   <button data-reveal-close>Continue</button>
 * </div>
 *
 * <div data-reveal id="helloModal"></div>
 * <button data-reveal-close="helloModal">Continue</button>
 */
function revealCloseFactory(selector, options) {
  if (selector === void 0) {
    selector = revealCloseSelector;
  }
  if (options === void 0) {
    options = {};
  }
  var $buttons = $(selector, options.$context);
  return $buttons.map(function (index, element) {
    var $button = $(element);
    var instanceKey = revealCloseAttr + "Instance";
    var cachedButton = $button.data(instanceKey);
    if (cachedButton instanceof RevealClose) {
      return cachedButton;
    }
    var button = new RevealClose($button);
    $button.data(instanceKey, button);
    return button;
  }).toArray();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9nbG9iYWxfZm91bmRhdGlvbl9qcy1hc3NldHNfanNfdGhlbWVfZ2xvYmFsX21vZGFsX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDRjtBQUNIO0FBQ3BCO0FBQ2E7QUFFaEQsNkJBQWUsb0NBQVVFLFFBQVEsRUFBRTtFQUMvQkEsUUFBUSxDQUFDQyxVQUFVLENBQUM7SUFDaEJDLFFBQVEsRUFBRTtNQUNOO01BQ0FDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNKQyxRQUFRLEVBQUUsa0JBQWtCO01BQzVCQyxtQkFBbUIsRUFBRSxhQUFhO01BQ2xDQyx5QkFBeUIsRUFBRTtJQUMvQixDQUFDO0lBQ0RDLEdBQUcsRUFBRTtNQUNETCxZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDLENBQUM7RUFFRkwsa0RBQVksQ0FBQyxlQUFlLEVBQUU7SUFBRVcsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztFQUNyREQseURBQWtCLENBQUMscUJBQXFCLEVBQUU7SUFBRVUsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztBQUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnNDO0FBQ0U7QUFFeEMsSUFBTVcsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxtQkFBbUIsR0FBRyxnQkFBZ0I7QUFDNUMsSUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDbkMsSUFBTUMsaUJBQWlCLEdBQUcsZUFBZTtBQUV6QyxJQUFNQyxXQUFXLEdBQUc7RUFDaEJDLEtBQUssRUFBRSxjQUFjO0VBQ3JCQyxLQUFLLEVBQUUsY0FBYztFQUNyQkMsTUFBTSxFQUFFO0FBQ1osQ0FBQztBQUVNLElBQU1DLFdBQVcsR0FBRztFQUN2QkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QkMsSUFBSSxFQUFFLG1CQUFtQjtF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QUdnQixtQkFBbUI7RUFBQTtFQUFBLElBQUVmLE9BQU87SUFBUEEsT0FBTyxHQUFHLENBQUMsQ0FBQztFQUFBO0VBQ25GLElBQU0yQixRQUFRLEdBQUczRyxDQUFDLENBQUMrRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ3RHLFFBQVEsQ0FBQztFQUU5QyxPQUFPaUksUUFBUSxDQUFDekIsR0FBRyxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO0lBQ3BDLElBQU1jLE9BQU8sR0FBR2xHLENBQUMsQ0FBQ29GLE9BQU8sQ0FBQztJQUMxQixJQUFNQyxXQUFXLEdBQU1TLGVBQWUsYUFBVTtJQUNoRCxJQUFNYyxZQUFZLEdBQUdWLE9BQU8sQ0FBQ1gsSUFBSSxDQUFDRixXQUFXLENBQUM7SUFFOUMsSUFBSXVCLFlBQVksWUFBWVgsV0FBVyxFQUFFO01BQ3JDLE9BQU9XLFlBQVk7SUFDdkI7SUFFQSxJQUFNQyxNQUFNLEdBQUcsSUFBSVosV0FBVyxDQUFDQyxPQUFPLENBQUM7SUFFdkNBLE9BQU8sQ0FBQ1gsSUFBSSxDQUFDRixXQUFXLEVBQUV3QixNQUFNLENBQUM7SUFFakMsT0FBT0EsTUFBTTtFQUNqQixDQUFDLENBQUMsQ0FBQ3BCLE9BQU8sQ0FBQyxDQUFDO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL21vZGFsLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9yZXZlYWwtY2xvc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24udGFiJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgcmV2ZWFsQ2xvc2VGYWN0b3J5IGZyb20gJy4vcmV2ZWFsLWNsb3NlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgJGVsZW1lbnQuZm91bmRhdGlvbih7XG4gICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAvLyBzcGVjaWZ5IHRoZSBjbGFzcyB1c2VkIGZvciBhY3RpdmUgZHJvcGRvd25zXG4gICAgICAgICAgICBhY3RpdmVfY2xhc3M6ICdpcy1vcGVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmV2ZWFsOiB7XG4gICAgICAgICAgICBiZ19jbGFzczogJ21vZGFsLWJhY2tncm91bmQnLFxuICAgICAgICAgICAgZGlzbWlzc19tb2RhbF9jbGFzczogJ21vZGFsLWNsb3NlJyxcbiAgICAgICAgICAgIGNsb3NlX29uX2JhY2tncm91bmRfY2xpY2s6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRhYjoge1xuICAgICAgICAgICAgYWN0aXZlX2NsYXNzOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIG1vZGFsRmFjdG9yeSgnW2RhdGEtcmV2ZWFsXScsIHsgJGNvbnRleHQ6ICRlbGVtZW50IH0pO1xuICAgIHJldmVhbENsb3NlRmFjdG9yeSgnW2RhdGEtcmV2ZWFsLWNsb3NlXScsIHsgJGNvbnRleHQ6ICRlbGVtZW50IH0pO1xufVxuIiwiaW1wb3J0IGZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIGZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJztcblxuY29uc3QgYm9keUFjdGl2ZUNsYXNzID0gJ2hhcy1hY3RpdmVNb2RhbCc7XG5jb25zdCBsb2FkaW5nT3ZlcmxheUNsYXNzID0gJ2xvYWRpbmdPdmVybGF5JztcbmNvbnN0IG1vZGFsQm9keUNsYXNzID0gJ21vZGFsLWJvZHknO1xuY29uc3QgbW9kYWxDb250ZW50Q2xhc3MgPSAnbW9kYWwtY29udGVudCc7XG5cbmNvbnN0IFNpemVDbGFzc2VzID0ge1xuICAgIHNtYWxsOiAnbW9kYWwtLXNtYWxsJyxcbiAgICBsYXJnZTogJ21vZGFsLS1sYXJnZScsXG4gICAgbm9ybWFsOiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCBNb2RhbEV2ZW50cyA9IHtcbiAgICBjbG9zZTogJ2Nsb3NlLmZuZHRuLnJldmVhbCcsXG4gICAgY2xvc2VkOiAnY2xvc2VkLmZuZHRuLnJldmVhbCcsXG4gICAgb3BlbjogJ29wZW4uZm5kdG4ucmV2ZWFsJyxcbiAgICBvcGVuZWQ6ICdvcGVuZWQuZm5kdG4ucmV2ZWFsJyxcbiAgICBsb2FkZWQ6ICdsb2FkZWQuZGF0YS5jdXN0b20nLFxufTtcblxuZnVuY3Rpb24gZ2V0U2l6ZUZyb21Nb2RhbCgkbW9kYWwpIHtcbiAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKFNpemVDbGFzc2VzLnNtYWxsKSkge1xuICAgICAgICByZXR1cm4gJ3NtYWxsJztcbiAgICB9XG5cbiAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKFNpemVDbGFzc2VzLmxhcmdlKSkge1xuICAgICAgICByZXR1cm4gJ2xhcmdlJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ25vcm1hbCc7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0SGVpZ2h0KG11bHRpcGxlciA9IDEpIHtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgIHJldHVybiB2aWV3cG9ydEhlaWdodCAqIG11bHRpcGxlcjtcbn1cblxuZnVuY3Rpb24gd3JhcE1vZGFsQm9keShjb250ZW50KSB7XG4gICAgY29uc3QgJG1vZGFsQm9keSA9ICQoJzxkaXY+Jyk7XG5cbiAgICAkbW9kYWxCb2R5XG4gICAgICAgIC5hZGRDbGFzcyhtb2RhbEJvZHlDbGFzcylcbiAgICAgICAgLmh0bWwoY29udGVudCk7XG5cbiAgICByZXR1cm4gJG1vZGFsQm9keTtcbn1cblxuZnVuY3Rpb24gcmVzdHJhaW5Db250ZW50SGVpZ2h0KCRjb250ZW50KSB7XG4gICAgaWYgKCRjb250ZW50Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgJGJvZHkgPSAkKGAuJHttb2RhbEJvZHlDbGFzc31gLCAkY29udGVudCk7XG5cbiAgICBpZiAoJGJvZHkubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBib2R5SGVpZ2h0ID0gJGJvZHkub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IGdldFZpZXdwb3J0SGVpZ2h0KDAuOSk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQgLSAoY29udGVudEhlaWdodCAtIGJvZHlIZWlnaHQpO1xuXG4gICAgJGJvZHkuY3NzKCdtYXgtaGVpZ2h0JywgbWF4SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxDb250ZW50KCRtb2RhbCkge1xuICAgIGxldCAkY29udGVudCA9ICQoYC4ke21vZGFsQ29udGVudENsYXNzfWAsICRtb2RhbCk7XG5cbiAgICBpZiAoJGNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ29udGVudCA9ICRtb2RhbC5jaGlsZHJlbigpO1xuXG4gICAgICAgICRjb250ZW50ID0gJCgnPGRpdj4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKG1vZGFsQ29udGVudENsYXNzKVxuICAgICAgICAgICAgLmFwcGVuZChleGlzdGluZ0NvbnRlbnQpXG4gICAgICAgICAgICAuYXBwZW5kVG8oJG1vZGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRpbmdPdmVybGF5KCRtb2RhbCkge1xuICAgIGxldCAkbG9hZGluZ092ZXJsYXkgPSAkKGAuJHtsb2FkaW5nT3ZlcmxheUNsYXNzfWAsICRtb2RhbCk7XG5cbiAgICBpZiAoJGxvYWRpbmdPdmVybGF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkbG9hZGluZ092ZXJsYXkgPSAkKCc8ZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MobG9hZGluZ092ZXJsYXlDbGFzcylcbiAgICAgICAgICAgIC5hcHBlbmRUbygkbW9kYWwpO1xuICAgIH1cblxuICAgIHJldHVybiAkbG9hZGluZ092ZXJsYXk7XG59XG5cbi8qKlxuICogUmVxdWlyZSBmb3VuZGF0aW9uLnJldmVhbFxuICogRGVjb3JhdGUgZm91bmRhdGlvbi5yZXZlYWwgd2l0aCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kYWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxuICovXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCwge1xuICAgICAgICBzaXplID0gbnVsbCxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kbW9kYWwgPSAkbW9kYWw7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQgPSBjcmVhdGVNb2RhbENvbnRlbnQodGhpcy4kbW9kYWwpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gY3JlYXRlTG9hZGluZ092ZXJsYXkodGhpcy4kbW9kYWwpO1xuICAgICAgICB0aGlzLmRlZmF1bHRTaXplID0gc2l6ZSB8fCBnZXRTaXplRnJvbU1vZGFsKCRtb2RhbCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGVmYXVsdFNpemU7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gbnVsbDtcblxuICAgICAgICB0aGlzLm9uTW9kYWxPcGVuID0gdGhpcy5vbk1vZGFsT3Blbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW9kYWxPcGVuZWQgPSB0aGlzLm9uTW9kYWxPcGVuZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vZGFsQ2xvc2UgPSB0aGlzLm9uTW9kYWxDbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW9kYWxDbG9zZWQgPSB0aGlzLm9uTW9kYWxDbG9zZWQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvKiBTVFJGLTI0NzEgLSBNdWx0aXBsZSBXaXNoIExpc3RzIC0gcHJldmVudHMgZG91YmxlLWZpcmluZ1xuICAgICAgICAgKiBvZiBmb3VuZGF0aW9uLmRyb3Bkb3duIGNsaWNrLmZuZHRuLmRyb3Bkb3duIGV2ZW50ICovXG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudS1idXR0b24nLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBwZW5kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVuZGluZztcbiAgICB9XG5cbiAgICBzZXQgcGVuZGluZyhwZW5kaW5nKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSBwZW5kaW5nO1xuXG4gICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cblxuICAgIHNldCBzaXplKHNpemUpIHtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XG5cbiAgICAgICAgdGhpcy4kbW9kYWxcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhTaXplQ2xhc3Nlcy5zbWFsbClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhTaXplQ2xhc3Nlcy5sYXJnZSlcbiAgICAgICAgICAgIC5hZGRDbGFzcyhTaXplQ2xhc3Nlc1tzaXplXSB8fCAnJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMuY2xvc2UsIHRoaXMub25Nb2RhbENsb3NlKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMuY2xvc2VkLCB0aGlzLm9uTW9kYWxDbG9zZWQpO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuLCB0aGlzLm9uTW9kYWxPcGVuKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbmVkLCB0aGlzLm9uTW9kYWxPcGVuZWQpO1xuICAgIH1cblxuICAgIG9wZW4oe1xuICAgICAgICBzaXplLFxuICAgICAgICBwZW5kaW5nID0gdHJ1ZSxcbiAgICAgICAgY2xlYXJDb250ZW50ID0gdHJ1ZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gcGVuZGluZztcblxuICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGVhckNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDb250ZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRtb2RhbC5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnY2xvc2UnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb250ZW50KGNvbnRlbnQsIHsgd3JhcCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgJGNvbnRlbnQgPSAkKGNvbnRlbnQpO1xuXG4gICAgICAgIGlmICh3cmFwKSB7XG4gICAgICAgICAgICAkY29udGVudCA9IHdyYXBNb2RhbEJvZHkoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kY29udGVudC5odG1sKCRjb250ZW50KTtcbiAgICAgICAgdGhpcy4kbW9kYWwudHJpZ2dlcihNb2RhbEV2ZW50cy5sb2FkZWQpO1xuXG4gICAgICAgIHJlc3RyYWluQ29udGVudEhlaWdodCh0aGlzLiRjb250ZW50KTtcbiAgICAgICAgZm91bmRhdGlvbih0aGlzLiRjb250ZW50KTtcbiAgICB9XG5cbiAgICBjbGVhckNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQuaHRtbCgnJyk7XG4gICAgfVxuXG4gICAgc2V0dXBGb2N1c1RyYXAoKSB7XG4gICAgICAgIGlmICghdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwpIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGZvY3VzVHJhcC5jcmVhdGVGb2N1c1RyYXAodGhpcy4kbW9kYWxbMF0sIHtcbiAgICAgICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZhbGxiYWNrRm9jdXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tOb2RlID0gdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwgJiYgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICQoJ1tkYXRhLWhlYWRlci1sb2dvLWxpbmtdJylbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbGxiYWNrTm9kZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgb25Nb2RhbENsb3NlKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoYm9keUFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xvc2VkKCkge1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRlZmF1bHRTaXplO1xuXG4gICAgICAgIGlmICh0aGlzLmZvY3VzVHJhcCkgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCkgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Nb2RhbE9wZW4oKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhib2R5QWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIG9uTW9kYWxPcGVuZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLm9uZShNb2RhbEV2ZW50cy5sb2FkZWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkgdGhpcy5zZXR1cEZvY3VzVHJhcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwRm9jdXNUcmFwKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN0cmFpbkNvbnRlbnRIZWlnaHQodGhpcy4kY29udGVudCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBtb2RhbHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNpemVdXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsRmFjdG9yeShzZWxlY3RvciA9ICdbZGF0YS1yZXZlYWxdJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJG1vZGFscyA9ICQoc2VsZWN0b3IsIG9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRtb2RhbHMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9ICdtb2RhbEluc3RhbmNlJztcbiAgICAgICAgY29uc3QgY2FjaGVkTW9kYWwgPSAkbW9kYWwuZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZE1vZGFsIGluc3RhbmNlb2YgTW9kYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRNb2RhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCRtb2RhbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgJG1vZGFsLmRhdGEoaW5zdGFuY2VLZXksIG1vZGFsKTtcblxuICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgfSkudG9BcnJheSgpO1xufVxuXG4vKlxuICogUmV0dXJuIHRoZSBkZWZhdWx0IHBhZ2UgbW9kYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNb2RhbCgpIHtcbiAgICByZXR1cm4gbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXTtcbn1cblxuLypcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBhbGVydCBtb2RhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRNb2RhbCgpIHtcbiAgICByZXR1cm4gbW9kYWxGYWN0b3J5KCcjYWxlcnQtbW9kYWwnKVswXTtcbn1cblxuLypcbiAqIERpc3BsYXkgdGhlIGdpdmVuIG1lc3NhZ2UgaW4gdGhlIGRlZmF1bHQgYWxlcnQgbW9kYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydE1vZGFsKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBtb2RhbCA9IGFsZXJ0TW9kYWwoKTtcbiAgICBtb2RhbC5vcGVuKCk7XG4gICAgbW9kYWwudXBkYXRlQ29udGVudChgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKTtcbn1cbiIsImNvbnN0IHJldmVhbENsb3NlQXR0ciA9ICdyZXZlYWxDbG9zZSc7XG5jb25zdCByZXZlYWxDbG9zZVNlbGVjdG9yID0gYFtkYXRhLSR7cmV2ZWFsQ2xvc2VBdHRyfV1gO1xuY29uc3QgcmV2ZWFsU2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXSc7XG5cbmNsYXNzIFJldmVhbENsb3NlIHtcbiAgICBjb25zdHJ1Y3RvcigkYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbiA9ICRidXR0b247XG4gICAgICAgIHRoaXMubW9kYWxJZCA9ICRidXR0b24uZGF0YShyZXZlYWxDbG9zZUF0dHIpO1xuXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBtb2RhbCgpIHtcbiAgICAgICAgbGV0ICRtb2RhbDtcblxuICAgICAgICBpZiAodGhpcy5tb2RhbElkKSB7XG4gICAgICAgICAgICAkbW9kYWwgPSAkKGAjJHt0aGlzLm1vZGFsSWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbW9kYWwgPSB0aGlzLiRidXR0b24ucGFyZW50cyhyZXZlYWxTZWxlY3RvcikuZXEoMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJG1vZGFsLmRhdGEoJ21vZGFsSW5zdGFuY2UnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRidXR0b24ub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICogRXh0ZW5kIGZvdW5kYXRpb24ucmV2ZWFsIHdpdGggdGhlIGFiaWxpdHkgdG8gY2xvc2UgYSBtb2RhbCBieSBjbGlja2luZyBvbiBhbnkgb2YgaXRzIGNoaWxkIGVsZW1lbnRcbiAqIHdpdGggZGF0YS1yZXZlYWwtY2xvc2UgYXR0cmlidXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj5cbiAqICAgPGJ1dHRvbiBkYXRhLXJldmVhbC1jbG9zZT5Db250aW51ZTwvYnV0dG9uPlxuICogPC9kaXY+XG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj48L2Rpdj5cbiAqIDxidXR0b24gZGF0YS1yZXZlYWwtY2xvc2U9XCJoZWxsb01vZGFsXCI+Q29udGludWU8L2J1dHRvbj5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV2ZWFsQ2xvc2VGYWN0b3J5KHNlbGVjdG9yID0gcmV2ZWFsQ2xvc2VTZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGJ1dHRvbnMgPSAkKHNlbGVjdG9yLCBvcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkYnV0dG9ucy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke3JldmVhbENsb3NlQXR0cn1JbnN0YW5jZWA7XG4gICAgICAgIGNvbnN0IGNhY2hlZEJ1dHRvbiA9ICRidXR0b24uZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZEJ1dHRvbiBpbnN0YW5jZW9mIFJldmVhbENsb3NlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQnV0dG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IFJldmVhbENsb3NlKCRidXR0b24pO1xuXG4gICAgICAgICRidXR0b24uZGF0YShpbnN0YW5jZUtleSwgYnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiJdLCJuYW1lcyI6WyJtb2RhbEZhY3RvcnkiLCJyZXZlYWxDbG9zZUZhY3RvcnkiLCIkZWxlbWVudCIsImZvdW5kYXRpb24iLCJkcm9wZG93biIsImFjdGl2ZV9jbGFzcyIsInJldmVhbCIsImJnX2NsYXNzIiwiZGlzbWlzc19tb2RhbF9jbGFzcyIsImNsb3NlX29uX2JhY2tncm91bmRfY2xpY2siLCJ0YWIiLCIkY29udGV4dCIsImZvY3VzVHJhcCIsImJvZHlBY3RpdmVDbGFzcyIsImxvYWRpbmdPdmVybGF5Q2xhc3MiLCJtb2RhbEJvZHlDbGFzcyIsIm1vZGFsQ29udGVudENsYXNzIiwiU2l6ZUNsYXNzZXMiLCJzbWFsbCIsImxhcmdlIiwibm9ybWFsIiwiTW9kYWxFdmVudHMiLCJjbG9zZSIsImNsb3NlZCIsIm9wZW4iLCJvcGVuZWQiLCJsb2FkZWQiLCJnZXRTaXplRnJvbU1vZGFsIiwiJG1vZGFsIiwiaGFzQ2xhc3MiLCJnZXRWaWV3cG9ydEhlaWdodCIsIm11bHRpcGxlciIsInZpZXdwb3J0SGVpZ2h0IiwiJCIsIndpbmRvdyIsImhlaWdodCIsIndyYXBNb2RhbEJvZHkiLCJjb250ZW50IiwiJG1vZGFsQm9keSIsImFkZENsYXNzIiwiaHRtbCIsInJlc3RyYWluQ29udGVudEhlaWdodCIsIiRjb250ZW50IiwibGVuZ3RoIiwiJGJvZHkiLCJib2R5SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwibWF4SGVpZ2h0IiwiY3NzIiwiY3JlYXRlTW9kYWxDb250ZW50IiwiZXhpc3RpbmdDb250ZW50IiwiY2hpbGRyZW4iLCJhcHBlbmQiLCJhcHBlbmRUbyIsImNyZWF0ZUxvYWRpbmdPdmVybGF5IiwiJGxvYWRpbmdPdmVybGF5IiwiTW9kYWwiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwiJG92ZXJsYXkiLCJkZWZhdWx0U2l6ZSIsInBlbmRpbmciLCIkcHJlTW9kYWxGb2N1c2VkRWwiLCJvbk1vZGFsT3BlbiIsImJpbmQiLCJvbk1vZGFsT3BlbmVkIiwib25Nb2RhbENsb3NlIiwib25Nb2RhbENsb3NlZCIsImJpbmRFdmVudHMiLCJvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJfdGVtcDIiLCJfcmVmMiIsIl9yZWYyJHBlbmRpbmciLCJfcmVmMiRjbGVhckNvbnRlbnQiLCJjbGVhckNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwiX3RlbXAzIiwiX3JlZjMiLCJfcmVmMyR3cmFwIiwid3JhcCIsInRyaWdnZXIiLCJzZXR1cEZvY3VzVHJhcCIsIl90aGlzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiY3JlYXRlRm9jdXNUcmFwIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImFsbG93T3V0c2lkZUNsaWNrIiwiZmFsbGJhY2tGb2N1cyIsImZhbGxiYWNrTm9kZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0ZSIsInJlbW92ZUNsYXNzIiwiZm9jdXMiLCJfdGhpczIiLCJvbmUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZXQiLCJfcGVuZGluZyIsInNldCIsInNob3ciLCJoaWRlIiwiX3NpemUiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCIkbW9kYWxzIiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRNb2RhbCIsImRhdGEiLCJtb2RhbCIsInRvQXJyYXkiLCJkZWZhdWx0TW9kYWwiLCJhbGVydE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJtZXNzYWdlIiwicmV2ZWFsQ2xvc2VBdHRyIiwicmV2ZWFsQ2xvc2VTZWxlY3RvciIsInJldmVhbFNlbGVjdG9yIiwiUmV2ZWFsQ2xvc2UiLCIkYnV0dG9uIiwibW9kYWxJZCIsIm9uQ2xpY2siLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50cyIsImVxIiwiJGJ1dHRvbnMiLCJjYWNoZWRCdXR0b24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9

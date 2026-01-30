"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/custom/its-product.js"
/*!***********************************************!*\
  !*** ./assets/js/theme/custom/its-product.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ITSProduct)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _custom_schematics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom/schematics */ "./assets/js/theme/custom/schematics.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



/**
 * IntuitSolutions - Custom JS that fires on the PDP
 */
var ITSProduct = /*#__PURE__*/function () {
  function ITSProduct(context) {
    this.context = context;
    var showMoreReviews = this.showMoreReviews.bind(this);
    $('.js-load-more-reviews').on('click', showMoreReviews);

    // schematic + parts list buttons
    $('.schematic__content .button:not(.button--pdf)').on('click', _custom_schematics__WEBPACK_IMPORTED_MODULE_1__["default"]);
    $('.more-info-slider__text a[href="#tab-warranty"]').on('click', function (e) {
      var $targetTabId = $(e.currentTarget).attr('href');
      $(".tab-title[href=\"" + $targetTabId + "\"]").trigger('click');
    });
  }
  var _proto = ITSProduct.prototype;
  _proto.showMoreReviews = function showMoreReviews(e) {
    e.preventDefault();
    var $store = $(e.currentTarget);
    var currentPage = $store.data('current-page');
    var productPageReviewsCount = this.context.productpageReviewsCount || 3;
    var productPageURL = this.context.productpageURL;
    var nextPageURL = productPageURL + "?revpage=" + (currentPage + 1);
    var productTotalReviews = this.context.productReviewsTotal;
    $("button.load-more-reviews.js-load-more-reviews").hide();
    $(".lds-ring-circle").css("display", "flex");
    $store.attr('disabled', true);
    var requestOptions = {
      config: {
        product: {
          reviews: {
            limit: productPageReviewsCount
          }
        }
      },
      template: 'products/ajax-reviews'
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(nextPageURL, requestOptions, function (err, res) {
      if (err) {
        $store.attr('disable', false);
        return;
      }
      $(res).hide().appendTo("#productReviews-list").slideDown(200);
      $store.data('current-page', currentPage + 1).attr('disabled', false);
      $(".lds-ring-circle").css("display", "none");
      setTimeout(function () {
        if ($("#productReviews-list li").length >= productTotalReviews) {
          $("button.load-more-reviews.js-load-more-reviews").hide();
        } else {
          $("button.load-more-reviews.js-load-more-reviews").show();
        }
      }, 0);
    });
  };
  return ITSProduct;
}();


/***/ },

/***/ "./assets/js/theme/custom/schematics.js"
/*!**********************************************!*\
  !*** ./assets/js/theme/custom/schematics.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  var image = new Image();
  image.src = $(event.currentTarget).attr('href') || '';
  image.onload = function (event) {
    var data = [{
      src: event.target.src,
      w: event.target.width,
      h: event.target.height
    }];
    loadGallery(data);
  };
  function loadGallery(images) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {
      index: 0,
      bgOpacity: 0.8
    };
    var gallery = new (photoswipe__WEBPACK_IMPORTED_MODULE_0___default())(pswpElement, (photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default()), images, options);
    gallery.init();
  }
}

/***/ },

/***/ "./assets/js/theme/product.js"
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _custom_its_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom/its-product */ "./assets/js/theme/custom/its-product.js");
/* harmony import */ var _common_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/carousel */ "./assets/js/theme/common/carousel/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */









var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    var body = this;
    if (this.context.hasVideo === "true") {
      $(".blog-post__card[show]").each(function () {
        body.loadSource($(this).attr("data-link"), $(this));
      });
    }

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();

    /**
     * IntuitSolutions - Custom Product
     */
    this.ITSProduct = new _custom_its_product__WEBPACK_IMPORTED_MODULE_7__["default"](this.context);
    // carousel(this.context);
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  _proto.loadSource = function loadSource(url, $elem) {
    var baseUrl = window.location.origin;
    $.ajax({
      url: "" + baseUrl + url
    }).done(function (html) {
      var regex = /<body[^>]*>((.|[\n\r])*)<\/body>/i;
      var match = regex.exec(html);
      var bodyContent = match ? match[1] : '';
      // console.log(bodyContent);
      var videos_tab = $("<div></div>");
      videos_tab.html(bodyContent);
      console.log(videos_tab.find("#fetch-section"));
      var videos_data = videos_tab.find("#fetch-section");
      var title = videos_data.find("#fetch-title").text();
      var image = videos_data.find("#fetch-image img");
      var tags = [];
      videos_data.find("[fetch-tags]").each(function () {
        tags.push({
          name: $(this).find("[tag-name]").text(),
          url: $(this).find("[tag-url]").text()
        });
        $elem.find(".blog-post__card-tags").append("<li class=\"tag\">\n                    <a class=\"h5\" href=\"" + $(this).find("[tag-url]").text() + "\">" + $(this).find("[tag-name]").text() + "</a>\n                </li>");
      });
      $elem.find(".blog-post__card-thumbnail a").append(videos_data.find("#fetch-image img"));
      $elem.find(".blog-post__card-title a").append(videos_data.find("#fetch-title").text());

      // console.log("Title: ", title);
      // console.log("Image: ", image);
      // console.log("Tags: ", tags);
    });
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/product/video-gallery.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDRDs7QUFFOUM7QUFDQTtBQUNBO0FBRkEsSUFJcUJFLFVBQVU7RUFDM0IsU0FBQUEsV0FBWUMsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO0lBRXRCLElBQU1DLGVBQWUsR0FBRyxJQUFJLENBQUNBLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUV2REMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUVILGVBQWUsQ0FBQzs7SUFHdkQ7SUFDQUUsQ0FBQyxDQUFDLCtDQUErQyxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUVOLDBEQUFVLENBQUM7SUFFMUVLLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztNQUNwRSxJQUFNQyxZQUFZLEdBQUdILENBQUMsQ0FBQ0UsQ0FBQyxDQUFDRSxhQUFhLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQztNQUNwREwsQ0FBQyx3QkFBcUJHLFlBQVksUUFBSSxDQUFDLENBQUNHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0VBQ047RUFBQyxJQUFBQyxNQUFBLEdBQUFYLFVBQUEsQ0FBQVksU0FBQTtFQUFBRCxNQUFBLENBRURULGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFDSSxDQUFDLEVBQUU7SUFDZkEsQ0FBQyxDQUFDTyxjQUFjLENBQUMsQ0FBQztJQUNsQixJQUFNQyxNQUFNLEdBQUdWLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDRSxhQUFhLENBQUM7SUFDakMsSUFBTU8sV0FBVyxHQUFHRCxNQUFNLENBQUNFLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0MsSUFBTUMsdUJBQXVCLEdBQUcs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Y3VzdG9tL2l0cy1wcm9kdWN0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9zY2hlbWF0aWNzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgc2NoZW1hdGljcyBmcm9tICcuLi9jdXN0b20vc2NoZW1hdGljcyc7XG5cbi8qKlxuICogSW50dWl0U29sdXRpb25zIC0gQ3VzdG9tIEpTIHRoYXQgZmlyZXMgb24gdGhlIFBEUFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElUU1Byb2R1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgICBjb25zdCBzaG93TW9yZVJldmlld3MgPSB0aGlzLnNob3dNb3JlUmV2aWV3cy5iaW5kKHRoaXMpXG5cbiAgICAgICAgJCgnLmpzLWxvYWQtbW9yZS1yZXZpZXdzJykub24oJ2NsaWNrJywgc2hvd01vcmVSZXZpZXdzKTtcblxuXG4gICAgICAgIC8vIHNjaGVtYXRpYyArIHBhcnRzIGxpc3QgYnV0dG9uc1xuICAgICAgICAkKCcuc2NoZW1hdGljX19jb250ZW50IC5idXR0b246bm90KC5idXR0b24tLXBkZiknKS5vbignY2xpY2snLCBzY2hlbWF0aWNzKTtcblxuICAgICAgICAkKCcubW9yZS1pbmZvLXNsaWRlcl9fdGV4dCBhW2hyZWY9XCIjdGFiLXdhcnJhbnR5XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXRUYWJJZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAkKGAudGFiLXRpdGxlW2hyZWY9XCIkeyR0YXJnZXRUYWJJZH1cIl1gKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93TW9yZVJldmlld3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0ICRzdG9yZSA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSAkc3RvcmUuZGF0YSgnY3VycmVudC1wYWdlJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RQYWdlUmV2aWV3c0NvdW50ID0gdGhpcy5jb250ZXh0LnByb2R1Y3RwYWdlUmV2aWV3c0NvdW50IHx8IDM7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RQYWdlVVJMID0gdGhpcy5jb250ZXh0LnByb2R1Y3RwYWdlVVJMO1xuICAgICAgICBjb25zdCBuZXh0UGFnZVVSTCA9IGAke3Byb2R1Y3RQYWdlVVJMfT9yZXZwYWdlPSR7Y3VycmVudFBhZ2UgKyAxfWA7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RUb3RhbFJldmlld3MgPSB0aGlzLmNvbnRleHQucHJvZHVjdFJldmlld3NUb3RhbDtcblxuICAgICAgICAkKFwiYnV0dG9uLmxvYWQtbW9yZS1yZXZpZXdzLmpzLWxvYWQtbW9yZS1yZXZpZXdzXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIi5sZHMtcmluZy1jaXJjbGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG4gICAgICAgICRzdG9yZS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xuICAgICAgICAgICAgICAgICAgICByZXZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdFBhZ2VSZXZpZXdzQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2FqYXgtcmV2aWV3cycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UobmV4dFBhZ2VVUkwsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAkc3RvcmUuYXR0cignZGlzYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQocmVzKS5oaWRlKCkuYXBwZW5kVG8oXCIjcHJvZHVjdFJldmlld3MtbGlzdFwiKS5zbGlkZURvd24oMjAwKTtcblxuICAgICAgICAgICAgJHN0b3JlLmRhdGEoJ2N1cnJlbnQtcGFnZScsIGN1cnJlbnRQYWdlICsgMSkuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKFwiLmxkcy1yaW5nLWNpcmNsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZigkKGAjcHJvZHVjdFJldmlld3MtbGlzdCBsaWApLmxlbmd0aCA+PSBwcm9kdWN0VG90YWxSZXZpZXdzKXtcbiAgICAgICAgICAgICAgICAgICAgJChcImJ1dHRvbi5sb2FkLW1vcmUtcmV2aWV3cy5qcy1sb2FkLW1vcmUtcmV2aWV3c1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQoXCJidXR0b24ubG9hZC1tb3JlLXJldmlld3MuanMtbG9hZC1tb3JlLXJldmlld3NcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IFBob3RvU3dpcGUgZnJvbSAncGhvdG9zd2lwZSc7XG5pbXBvcnQgUGhvdG9Td2lwZVVJRGVmYXVsdCBmcm9tICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS11aS1kZWZhdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKSB8fCAnJztcbiAgICBpbWFnZS5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFt7XG4gICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5zcmMsXG4gICAgICAgICAgICB3OiBldmVudC50YXJnZXQud2lkdGgsXG4gICAgICAgICAgICBoOiBldmVudC50YXJnZXQuaGVpZ2h0LFxuICAgICAgICB9XTtcblxuICAgICAgICBsb2FkR2FsbGVyeShkYXRhKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbG9hZEdhbGxlcnkoaW1hZ2VzKSB7XG4gICAgICAgIGNvbnN0IHBzd3BFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBzd3AnKVswXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgYmdPcGFjaXR5OiAwLjgsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZ2FsbGVyeSA9IG5ldyBQaG90b1N3aXBlKHBzd3BFbGVtZW50LCBQaG90b1N3aXBlVUlEZWZhdWx0LCBpbWFnZXMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGdhbGxlcnkuaW5pdCgpO1xuICAgIH1cbn1cbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgSVRTUHJvZHVjdCBmcm9tICcuL2N1c3RvbS9pdHMtcHJvZHVjdCc7XG5pbXBvcnQgY2Fyb3VzZWwgZnJvbSAnLi9jb21tb24vY2Fyb3VzZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXM7XG5cbiAgICAgICAgaWYodGhpcy5jb250ZXh0Lmhhc1ZpZGVvID09PSBcInRydWVcIil7XG4gICAgICAgICAgICAkKGAuYmxvZy1wb3N0X19jYXJkW3Nob3ddYCkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGJvZHkubG9hZFNvdXJjZSgkKHRoaXMpLmF0dHIoXCJkYXRhLWxpbmtcIiksICQodGhpcykpO1xuICAgICAgICAgICAgfSkgIFxuICAgICAgICB9XG5cbiAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuXG4gICAgICAgIGlmICgkcmV2aWV3Rm9ybS5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KHsgJHJldmlld0Zvcm0gfSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzKCRyZXZpZXdGb3JtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnR1aXRTb2x1dGlvbnMgLSBDdXN0b20gUHJvZHVjdFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5JVFNQcm9kdWN0ID0gbmV3IElUU1Byb2R1Y3QodGhpcy5jb250ZXh0KTtcbiAgICAgICAgLy8gY2Fyb3VzZWwodGhpcy5jb250ZXh0KTtcblxuICAgIH1cblxuICAgIGFyaWFEZXNjcmliZVJldmlld0lucHV0cygkZm9ybSkge1xuICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS1pbnB1dF0nKS5lYWNoKChfLCBpbnB1dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBtc2dTcGFuSWQgPSBgJHskaW5wdXQuYXR0cignbmFtZScpfS1tc2dgO1xuXG4gICAgICAgICAgICAkaW5wdXQuc2libGluZ3MoJ3NwYW4nKS5hdHRyKCdpZCcsIG1zZ1NwYW5JZCk7XG4gICAgICAgICAgICAkaW5wdXQuYXR0cignYXJpYS1kZXNjcmliZWRieScsIG1zZ1NwYW5JZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkU291cmNlKHVybCwgJGVsZW0pe1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogYCR7YmFzZVVybH0ke3VybH1gLFxuICAgICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbihodG1sKSB7XG4gICAgICAgICAgICBjb25zdCByZWdleCA9IC88Ym9keVtePl0qPigoLnxbXFxuXFxyXSkqKTxcXC9ib2R5Pi9pO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSByZWdleC5leGVjKGh0bWwpO1xuICAgICAgICAgICAgY29uc3QgYm9keUNvbnRlbnQgPSBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib2R5Q29udGVudCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb3NfdGFiID0gJChcIjxkaXY+PC9kaXY+XCIpO1xuICAgICAgICAgICAgdmlkZW9zX3RhYi5odG1sKGJvZHlDb250ZW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZGVvc190YWIuZmluZChcIiNmZXRjaC1zZWN0aW9uXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvc19kYXRhID0gdmlkZW9zX3RhYi5maW5kKFwiI2ZldGNoLXNlY3Rpb25cIik7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHZpZGVvc19kYXRhLmZpbmQoXCIjZmV0Y2gtdGl0bGVcIikudGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB2aWRlb3NfZGF0YS5maW5kKFwiI2ZldGNoLWltYWdlIGltZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBbXTtcbiAgICAgICAgICAgIHZpZGVvc19kYXRhLmZpbmQoXCJbZmV0Y2gtdGFnc11cIikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6JCh0aGlzKS5maW5kKFwiW3RhZy1uYW1lXVwiKS50ZXh0KCksXG4gICAgICAgICAgICAgICAgICAgIHVybDokKHRoaXMpLmZpbmQoXCJbdGFnLXVybF1cIikudGV4dCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJGVsZW0uZmluZChcIi5ibG9nLXBvc3RfX2NhcmQtdGFnc1wiKS5hcHBlbmQoYDxsaSBjbGFzcz1cInRhZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImg1XCIgaHJlZj1cIiR7JCh0aGlzKS5maW5kKFwiW3RhZy11cmxdXCIpLnRleHQoKX1cIj4keyQodGhpcykuZmluZChcIlt0YWctbmFtZV1cIikudGV4dCgpfTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPmApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRlbGVtLmZpbmQoXCIuYmxvZy1wb3N0X19jYXJkLXRodW1ibmFpbCBhXCIpLmFwcGVuZCh2aWRlb3NfZGF0YS5maW5kKFwiI2ZldGNoLWltYWdlIGltZ1wiKSk7XG4gICAgICAgICAgICAkZWxlbS5maW5kKFwiLmJsb2ctcG9zdF9fY2FyZC10aXRsZSBhXCIpLmFwcGVuZCh2aWRlb3NfZGF0YS5maW5kKFwiI2ZldGNoLXRpdGxlXCIpLnRleHQoKSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGl0bGU6IFwiLCB0aXRsZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkltYWdlOiBcIiwgaW1hZ2UpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUYWdzOiBcIiwgdGFncyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbInV0aWxzIiwic2NoZW1hdGljcyIsIklUU1Byb2R1Y3QiLCJjb250ZXh0Iiwic2hvd01vcmVSZXZpZXdzIiwiYmluZCIsIiQiLCJvbiIsImUiLCIkdGFyZ2V0VGFiSWQiLCJjdXJyZW50VGFyZ2V0IiwiYXR0ciIsInRyaWdnZXIiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJwcmV2ZW50RGVmYXVsdCIsIiRzdG9yZSIsImN1cnJlbnRQYWdlIiwiZGF0YSIsInByb2R1Y3RQYWdlUmV2aWV3c0NvdW50IiwicHJvZHVjdHBhZ2VSZXZpZXdzQ291bnQiLCJwcm9kdWN0UGFnZVVSTCIsInByb2R1Y3RwYWdlVVJMIiwibmV4dFBhZ2VVUkwiLCJwcm9kdWN0VG90YWxSZXZpZXdzIiwicHJvZHVjdFJldmlld3NUb3RhbCIsImhpZGUiLCJjc3MiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsInByb2R1Y3QiLCJyZXZpZXdzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJyZXMiLCJhcHBlbmRUbyIsInNsaWRlRG93biIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJzaG93IiwiZGVmYXVsdCIsIlBob3RvU3dpcGUiLCJQaG90b1N3aXBlVUlEZWZhdWx0IiwiZXZlbnQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwidGFyZ2V0IiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxvYWRHYWxsZXJ5IiwiaW1hZ2VzIiwicHN3cEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcHRpb25zIiwiaW5kZXgiLCJiZ09wYWNpdHkiLCJnYWxsZXJ5IiwiaW5pdCIsIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJtb2RhbEZhY3RvcnkiLCJjYXJvdXNlbCIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJfdGhpcyIsImNhbGwiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJyZXZpZXdNb2RhbCIsIl9pbmhlcml0c0xvb3NlIiwib25SZWFkeSIsIl90aGlzMiIsImJvZHkiLCJoYXNWaWRlbyIsImVhY2giLCJsb2FkU291cmNlIiwiaW5kZXhPZiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsImJ1bGtQcmljaW5nSGFuZGxlciIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwiYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCIkZm9ybSIsImZpbmQiLCJfIiwiaW5wdXQiLCIkaW5wdXQiLCJtc2dTcGFuSWQiLCJzaWJsaW5ncyIsIiRlbGVtIiwiYmFzZVVybCIsIm9yaWdpbiIsImFqYXgiLCJkb25lIiwiaHRtbCIsInJlZ2V4IiwibWF0Y2giLCJleGVjIiwiYm9keUNvbnRlbnQiLCJ2aWRlb3NfdGFiIiwiY29uc29sZSIsImxvZyIsInZpZGVvc19kYXRhIiwidGV4dCIsInRhZ3MiLCJwdXNoIiwibmFtZSIsImFwcGVuZCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkdGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJlbGVtZW50IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9

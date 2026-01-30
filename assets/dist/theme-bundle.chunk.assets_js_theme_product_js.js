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
    var _this = this;
    this.context = context;
    this.currentPage = 1;
    this.reviewsPerPage = this.context.productpageReviewsCount || 3;
    this.totalReviews = this.context.productReviewsTotal || 0;
    this.totalPages = Math.ceil(this.totalReviews / this.reviewsPerPage);
    $('.js-review-prev').on('click', function () {
      return _this.navigateReviews(_this.currentPage - 1);
    });
    $('.js-review-next').on('click', function () {
      return _this.navigateReviews(_this.currentPage + 1);
    });
    this.updatePageCounter();

    // schematic + parts list buttons
    $('.schematic__content .button:not(.button--pdf)').on('click', _custom_schematics__WEBPACK_IMPORTED_MODULE_1__["default"]);
    $('.more-info-slider__text a[href="#tab-warranty"]').on('click', function (e) {
      var $targetTabId = $(e.currentTarget).attr('href');
      $(".tab-title[href=\"" + $targetTabId + "\"]").trigger('click');
    });
  }
  var _proto = ITSProduct.prototype;
  _proto.navigateReviews = function navigateReviews(page) {
    var _this2 = this;
    var productPageURL = this.context.productpageURL;
    var pageURL = productPageURL + "?revpage=" + page;
    $('.js-review-prev, .js-review-next').attr('disabled', true);
    var requestOptions = {
      config: {
        product: {
          reviews: {
            limit: this.reviewsPerPage
          }
        }
      },
      template: 'products/ajax-reviews'
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(pageURL, requestOptions, function (err, res) {
      if (err) {
        $('.js-review-prev, .js-review-next').attr('disabled', false);
        return;
      }
      var $list = $('#productReviews-list');
      $list.fadeOut(200, function () {
        $list.html(res).fadeIn(200);
      });
      _this2.currentPage = page;
      $('.js-review-prev').attr('disabled', _this2.currentPage <= 1);
      $('.js-review-next').attr('disabled', _this2.currentPage >= _this2.totalPages);
      _this2.updatePageCounter();
    });
  };
  _proto.updatePageCounter = function updatePageCounter() {
    $('.js-review-page').text(this.currentPage + " / " + this.totalPages);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDRDs7QUFFOUM7QUFDQTtBQUNBO0FBRkEsSUFJcUJFLFVBQVU7RUFDM0IsU0FBQUEsV0FBWUMsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQixJQUFJLENBQUNELE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNFLFdBQVcsR0FBRyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSx1QkFBdUIsSUFBSSxDQUFDO0lBQy9ELElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxtQkFBbUIsSUFBSSxDQUFDO0lBQ3pELElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNKLFlBQVksR0FBRyxJQUFJLENBQUNGLGNBQWMsQ0FBQztJQUVwRU8sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNVixLQUFJLENBQUNXLGVBQWUsQ0FBQ1gsS0FBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUNsRlEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNVixLQUFJLENBQUNXLGVBQWUsQ0FBQ1gsS0FBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUNsRixJQUFJLENBQUNXLGlCQUFpQixDQUFDLENBQUM7O0lBRXhCO0lBQ0FILENBQUMsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFYiwwREFBVSxDQUFDO0lBRTFFWSxDQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDRyxDQUFDLEVBQUs7TUFDcEUsSUFBTUMsWUFBWSxHQUFHTCxDQUFDLENBQUNJLENBQUMsQ0FBQ0UsYUFBYSxDQUFDLENBQUNDLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDcERQLENBQUMsd0JBQXFCSyxZQUFZLFFBQUksQ0FBQyxDQUFDRyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzVELENBQUMsQ0FBQztFQUNOO0VBQUMsSUFBQUMsTUFBQSxHQUFBcEIsVUFBQSxDQUFBcUIsU0FBQTtFQUFBRCxNQUFBLENBRURQLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFDUyxJQUFJLEVBQUU7SUFBQSxJQUFBQyxNQUFBO0lBQ2xCLElBQU1DLGNBQWMsR0FBRyxJQUFJLENBQUN2QixPQUFPLENBQUN3QixjQUFjO0lBQ2xELElBQU1DLE9BQU8sR0FBTUYsY0FBYyxpQkFBWUYsSUFBTTtJQUVuRFgsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUNPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO0lBRTVELElBQU1TLGNBQWMsR0FBRztNQUNuQkMsTUFBTSxFQUFFO1FBQ0pDLE9BQU8sRUFBRTtVQUNMQyxPQUFPLEVBQUU7WUFDTEMsS0FBSyxFQUFFLElBQUksQ0FBQzNCO1VBQ2hCO1FBQ0o7TUFDSixDQUFDO01BQ0Q0QixRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRURsQyxzRUFBUyxDQUFDb0MsT0FBTyxDQUFDUixPQUFPLEVBQUVDLGNBQWMsRUFBRSxVQUFDUSxHQUFHLEVBQUVDLEdBQUcsRUFBSztNQUNyRCxJQUFJRCxHQUFHLEVBQUU7UUFDTHhCLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDTyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztRQUM3RDtNQUNKO01BRUEsSUFBTW1CLEtBQUssR0FBRzFCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztNQUN2QzBCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxZQUFNO1FBQ3JCRCxLQUFLLENBQUNFLElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUM7TUFDL0IsQ0FBQyxDQUFDO01BRUZqQixNQUFJLENBQUNwQixXQUFXLEdBQUdtQixJQUFJO01BQ3ZCWCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFVBQVUsRUFBRUssTUFBSSxDQUFDcEIsV0FBVyxJQUFJLENBQUMsQ0FBQztNQUM1RFEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNPLElBQUksQ0FBQyxVQUFVLEVBQUVLLE1BQUksQ0FBQ3BCLFdBQVcsSUFBSW9CLE1BQUksQ0FBQ2YsVUFBVSxDQUFDO01BQzFFZSxNQUFJLENBQUNULGlCQUFpQixDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBTSxNQUFBLENBRUROLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQkgsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM4QixJQUFJLENBQUksSUFBSSxDQUFDdEMsV0FBVyxXQUFNLElBQUksQ0FBQ0ssVUFBWSxDQUFDO0VBQ3pFLENBQUM7RUFBQSxPQUFBUixVQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakUrQjtBQUNvQztBQUV4RSw2QkFBZSxvQ0FBUzZDLEtBQUssRUFBRTtFQUMzQkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QixJQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7RUFDekJELEtBQUssQ0FBQ0UsR0FBRyxHQUFHdEMsQ0FBQyxDQUFDa0MsS0FBSyxDQUFDNUIsYUFBYSxDQUFDLENBQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0VBQ3JENkIsS0FBSyxDQUFDRyxNQUFNLEdBQUcsVUFBQ0wsS0FBSyxFQUFLO0lBQ3RCLElBQU1NLElBQUksR0FBRyxDQUFDO01BQ1ZGLEdBQUcsRUFBRUosS0FBSyxDQUFDTyxNQUFNLENBQUNILEdBQUc7TUFDckJJLENBQUMsRUFBRVIsS0FBSyxDQUFDTyxNQUFNLENBQUNFLEtBQUs7TUFDckJDLENBQUMsRUFBRVYsS0FBSyxDQUFDTyxNQUFNLENBQUNJO0lBQ3BCLENBQUMsQ0FBQztJQUVGQyxXQUFXLENBQUNOLElBQUksQ0FBQztFQUNyQixDQUFDO0VBRUQsU0FBU00sV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3pCLElBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsSUFBTUMsT0FBTyxHQUFHO01BQ1pDLEtBQUssRUFBRSxDQUFDO01BQ1JDLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFFRCxJQUFNQyxPQUFPLEdBQUcsSUFBSXRCLG1EQUFVLENBQUNnQixXQUFXLEVBQUVmLDhFQUFtQixFQUFFYyxNQUFNLEVBQUVJLE9BQU8sQ0FBQztJQUVqRkcsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUNsQjtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUN5QztBQUNGO0FBQ2U7QUFDQTtBQUNIO0FBQ007QUFDZjtBQUNJO0FBQ0w7QUFBQSxJQUVwQlMsT0FBTywwQkFBQUMsWUFBQTtFQUN4QixTQUFBRCxRQUFZMUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUVqQkEsS0FBQSxHQUFBMEUsWUFBQSxDQUFBQyxJQUFBLE9BQU01RSxPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLNEUsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtJQUMvQi9FLEtBQUEsQ0FBS2dGLFdBQVcsR0FBR3ZFLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM1RFQsS0FBQSxDQUFLaUYsZ0JBQWdCLEdBQUd4RSxDQUFDLENBQUMsdUNBQXVDLENBQUM7SUFDbEVULEtBQUEsQ0FBS2tGLFdBQVcsR0FBR1gseURBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLE9BQUF2RSxLQUFBO0VBQzdEO0VBQUNtRixjQUFBLENBQUFWLE9BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUF4RCxNQUFBLEdBQUF1RCxPQUFBLENBQUF0RCxTQUFBO0VBQUFELE1BQUEsQ0FFRGtFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFBQSxJQUFBL0QsTUFBQTtJQUVOLElBQU1nRSxJQUFJLEdBQUcsSUFBSTtJQUVqQixJQUFHLElBQUksQ0FBQ3RGLE9BQU8sQ0FBQ3VGLFFBQVEsS0FBSyxNQUFNLEVBQUM7TUFDaEM3RSxDQUFDLHlCQUF5QixDQUFDLENBQUM4RSxJQUFJLENBQUMsWUFBVTtRQUN2Q0YsSUFBSSxDQUFDRyxVQUFVLENBQUMvRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRVAsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3ZELENBQUMsQ0FBQztJQUNOOztJQUlBO0lBQ0FBLENBQUMsQ0FBQ2lELFFBQVEsQ0FBQyxDQUFDaEQsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQU07TUFDdkMsSUFBSVcsTUFBSSxDQUFDdUQsR0FBRyxDQUFDYSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksT0FBT1osTUFBTSxDQUFDYSxPQUFPLENBQUNDLFlBQVksS0FBSyxVQUFVLEVBQUU7UUFDL0ZkLE1BQU0sQ0FBQ2EsT0FBTyxDQUFDQyxZQUFZLENBQUMsSUFBSSxFQUFFakMsUUFBUSxDQUFDa0MsS0FBSyxFQUFFZixNQUFNLENBQUNDLFFBQVEsQ0FBQ2UsUUFBUSxDQUFDO01BQy9FO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSUMsU0FBUzs7SUFFYjtJQUNBM0IsK0RBQWtCLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUM0QixjQUFjLEdBQUcsSUFBSTNCLCtEQUFjLENBQUMzRCxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDVixPQUFPLEVBQUU4RSxNQUFNLENBQUNtQixNQUFNLENBQUNDLGtCQUFrQixDQUFDO0lBQzNHLElBQUksQ0FBQ0YsY0FBYyxDQUFDRyxpQkFBaUIsQ0FBQyxDQUFDO0lBRXZDN0Isa0VBQVksQ0FBQyxDQUFDO0lBRWQsSUFBSSxDQUFDOEIsa0JBQWtCLENBQUMsQ0FBQztJQUV6QixJQUFNQyxXQUFXLEdBQUc5QixzRUFBWSxDQUFDLG1CQUFtQixDQUFDO0lBRXJELElBQUk4QixXQUFXLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFFOUIsSUFBTUMsTUFBTSxHQUFHLElBQUlwQyx3REFBTSxDQUFDO01BQUVrQyxXQUFXLEVBQVhBO0lBQVksQ0FBQyxDQUFDO0lBRTFDM0YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLFlBQU07TUFDaEVvRixTQUFTLEdBQUdRLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUNsRixNQUFJLENBQUN0QixPQUFPLENBQUM7TUFDbkRzQixNQUFJLENBQUNtRix3QkFBd0IsQ0FBQ0osV0FBVyxDQUFDO0lBQzlDLENBQUMsQ0FBQztJQUVGQSxXQUFXLENBQUMxRixFQUFFLENBQUMsUUFBUSxFQUFFLFlBQU07TUFDM0IsSUFBSW9GLFNBQVMsRUFBRTtRQUNYQSxTQUFTLENBQUNXLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLE9BQU9YLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNwQztNQUNBLE9BQU8sS0FBSztJQUNoQixDQUFDLENBQUM7SUFHRixJQUFJLENBQUNDLG9CQUFvQixDQUFDLENBQUM7O0lBRTNCO0FBQ1I7QUFDQTtJQUNRLElBQUksQ0FBQzdHLFVBQVUsR0FBRyxJQUFJQSwyREFBVSxDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO0lBQzlDO0VBRUosQ0FBQztFQUFBbUIsTUFBQSxDQUVEc0Ysd0JBQXdCLEdBQXhCLFNBQUFBLHdCQUF3QkEsQ0FBQ0ksS0FBSyxFQUFFO0lBQzVCQSxLQUFLLENBQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ3RCLElBQUksQ0FBQyxVQUFDdUIsQ0FBQyxFQUFFQyxLQUFLLEVBQUs7TUFDMUMsSUFBTUMsTUFBTSxHQUFHdkcsQ0FBQyxDQUFDc0csS0FBSyxDQUFDO01BQ3ZCLElBQU1FLFNBQVMsR0FBTUQsTUFBTSxDQUFDaEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFNO01BRTlDZ0csTUFBTSxDQUFDRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUNsRyxJQUFJLENBQUMsSUFBSSxFQUFFaUcsU0FBUyxDQUFDO01BQzdDRCxNQUFNLENBQUNoRyxJQUFJLENBQUMsa0JBQWtCLEVBQUVpRyxTQUFTLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBL0YsTUFBQSxDQUVEeUYsb0JBQW9CLEdBQXBCLFNBQUFBLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQ25CLElBQUksSUFBSSxDQUFDL0IsR0FBRyxDQUFDYSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDMUMsSUFBSSxDQUFDVCxXQUFXLENBQUMvRCxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3JDO0VBQ0osQ0FBQztFQUFBQyxNQUFBLENBRURpRixrQkFBa0IsR0FBbEIsU0FBQUEsa0JBQWtCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxJQUFJLENBQUN2QixHQUFHLENBQUNhLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUMxQyxJQUFJLENBQUNSLGdCQUFnQixDQUFDaEUsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUMxQztFQUNKLENBQUM7RUFBQUMsTUFBQSxDQUVEc0UsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUNaLEdBQUcsRUFBRXVDLEtBQUssRUFBQztJQUNsQixJQUFNQyxPQUFPLEdBQUd2QyxNQUFNLENBQUNDLFFBQVEsQ0FBQ3VDLE1BQU07SUFDdEM1RyxDQUFDLENBQUM2RyxJQUFJLENBQUM7TUFDSDFDLEdBQUcsT0FBS3dDLE9BQU8sR0FBR3hDO0lBQ3RCLENBQUMsQ0FBQyxDQUNEMkMsSUFBSSxDQUFDLFVBQVNsRixJQUFJLEVBQUU7TUFDakIsSUFBTW1GLEtBQUssR0FBRyxtQ0FBbUM7TUFDakQsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQ3JGLElBQUksQ0FBQztNQUM5QixJQUFNc0YsV0FBVyxHQUFHRixLQUFLLEdBQUdBLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO01BQ3pDO01BQ0EsSUFBTUcsVUFBVSxHQUFHbkgsQ0FBQyxDQUFDLGFBQWEsQ0FBQztNQUNuQ21ILFVBQVUsQ0FBQ3ZGLElBQUksQ0FBQ3NGLFdBQVcsQ0FBQztNQUM1QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsQ0FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7TUFDOUMsSUFBTWtCLFdBQVcsR0FBR0gsVUFBVSxDQUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUM7TUFDckQsSUFBTWpCLEtBQUssR0FBR21DLFdBQVcsQ0FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ3RFLElBQUksQ0FBQyxDQUFDO01BQ3JELElBQU1NLEtBQUssR0FBR2tGLFdBQVcsQ0FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztNQUNsRCxJQUFNbUIsSUFBSSxHQUFHLEVBQUU7TUFDZkQsV0FBVyxDQUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDdEIsSUFBSSxDQUFDLFlBQVU7UUFDNUN5QyxJQUFJLENBQUNDLElBQUksQ0FBQztVQUNOQyxJQUFJLEVBQUN6SCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNvRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUN0RSxJQUFJLENBQUMsQ0FBQztVQUN0Q3FDLEdBQUcsRUFBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29HLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ3RFLElBQUksQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFFRjRFLEtBQUssQ0FBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUNzQixNQUFNLHFFQUNoQjFILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29HLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ3RFLElBQUksQ0FBQyxDQUFDLFdBQUs5QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNvRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUN0RSxJQUFJLENBQUMsQ0FBQyxnQ0FDMUYsQ0FBQztNQUNYLENBQUMsQ0FBQztNQUVGNEUsS0FBSyxDQUFDTixJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQ0osV0FBVyxDQUFDbEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7TUFDdkZNLEtBQUssQ0FBQ04sSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUNzQixNQUFNLENBQUNKLFdBQVcsQ0FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ3RFLElBQUksQ0FBQyxDQUFDLENBQUM7O01BRXRGO01BQ0E7TUFDQTtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBa0MsT0FBQTtBQUFBLEVBaElnQ1IscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnpDLElBQU1tRSxZQUFZO0VBQ3JCLFNBQUFBLGFBQVlDLFFBQVEsRUFBRTtJQUNsQixJQUFJLENBQUNDLE9BQU8sR0FBR0QsUUFBUSxDQUFDeEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ25ELElBQUksQ0FBQzBCLE9BQU8sR0FBR0YsUUFBUSxDQUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2pELElBQUksQ0FBQzJCLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNyQjtFQUFDLElBQUF2SCxNQUFBLEdBQUFrSCxZQUFBLENBQUFqSCxTQUFBO0VBQUFELE1BQUEsQ0FFRHdILGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFDN0gsQ0FBQyxFQUFFO0lBQ2RBLENBQUMsQ0FBQytCLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU0rRixPQUFPLEdBQUdsSSxDQUFDLENBQUNJLENBQUMsQ0FBQ0UsYUFBYSxDQUFDO0lBRWxDLElBQUksQ0FBQ3lILFlBQVksR0FBRztNQUNoQkksRUFBRSxFQUFFRCxPQUFPLENBQUMxRixJQUFJLENBQUMsU0FBUyxDQUFDO01BQzNCNEYsY0FBYyxFQUFFRjtJQUNwQixDQUFDO0lBRUQsSUFBSSxDQUFDRyxZQUFZLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3pCLENBQUM7RUFBQTdILE1BQUEsQ0FFRDRILFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNSLE9BQU8sQ0FBQ3RILElBQUksQ0FBQyxLQUFLLCtCQUE2QixJQUFJLENBQUN3SCxZQUFZLENBQUNJLEVBQUksQ0FBQztFQUMvRSxDQUFDO0VBQUExSCxNQUFBLENBRUQ2SCxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDUixPQUFPLENBQUNTLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDckMsSUFBSSxDQUFDUixZQUFZLENBQUNLLGNBQWMsQ0FBQ0ksUUFBUSxDQUFDLFdBQVcsQ0FBQztFQUMxRCxDQUFDO0VBQUEvSCxNQUFBLENBRUR1SCxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDRixPQUFPLENBQUM3SCxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ2dJLGNBQWMsQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVELENBQUM7RUFBQSxPQUFBZCxZQUFBO0FBQUE7QUFHVSxTQUFTL0QsWUFBWUEsQ0FBQSxFQUFHO0VBQ25DLElBQU04RSxTQUFTLEdBQUcsZUFBZTtFQUNqQyxJQUFNQyxhQUFhLEdBQUczSSxDQUFDLFlBQVUwSSxTQUFTLE1BQUcsQ0FBQztFQUU5Q0MsYUFBYSxDQUFDN0QsSUFBSSxDQUFDLFVBQUMxQixLQUFLLEVBQUV3RixPQUFPLEVBQUs7SUFDbkMsSUFBTUMsR0FBRyxHQUFHN0ksQ0FBQyxDQUFDNEksT0FBTyxDQUFDO0lBQ3RCLElBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDckcsSUFBSSxDQUFDa0csU0FBUyxDQUFDLFlBQVlmLFlBQVk7SUFFakUsSUFBSW1CLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQUQsR0FBRyxDQUFDckcsSUFBSSxDQUFDa0csU0FBUyxFQUFFLElBQUlmLFlBQVksQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNOLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vaXRzLXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL3NjaGVtYXRpY3MuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBzY2hlbWF0aWNzIGZyb20gJy4uL2N1c3RvbS9zY2hlbWF0aWNzJztcblxuLyoqXG4gKiBJbnR1aXRTb2x1dGlvbnMgLSBDdXN0b20gSlMgdGhhdCBmaXJlcyBvbiB0aGUgUERQXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVRTUHJvZHVjdCB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgdGhpcy5yZXZpZXdzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5wcm9kdWN0cGFnZVJldmlld3NDb3VudCB8fCAzO1xuICAgICAgICB0aGlzLnRvdGFsUmV2aWV3cyA9IHRoaXMuY29udGV4dC5wcm9kdWN0UmV2aWV3c1RvdGFsIHx8IDA7XG4gICAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsUmV2aWV3cyAvIHRoaXMucmV2aWV3c1BlclBhZ2UpO1xuXG4gICAgICAgICQoJy5qcy1yZXZpZXctcHJldicpLm9uKCdjbGljaycsICgpID0+IHRoaXMubmF2aWdhdGVSZXZpZXdzKHRoaXMuY3VycmVudFBhZ2UgLSAxKSk7XG4gICAgICAgICQoJy5qcy1yZXZpZXctbmV4dCcpLm9uKCdjbGljaycsICgpID0+IHRoaXMubmF2aWdhdGVSZXZpZXdzKHRoaXMuY3VycmVudFBhZ2UgKyAxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZUNvdW50ZXIoKTtcblxuICAgICAgICAvLyBzY2hlbWF0aWMgKyBwYXJ0cyBsaXN0IGJ1dHRvbnNcbiAgICAgICAgJCgnLnNjaGVtYXRpY19fY29udGVudCAuYnV0dG9uOm5vdCguYnV0dG9uLS1wZGYpJykub24oJ2NsaWNrJywgc2NoZW1hdGljcyk7XG5cbiAgICAgICAgJCgnLm1vcmUtaW5mby1zbGlkZXJfX3RleHQgYVtocmVmPVwiI3RhYi13YXJyYW50eVwiXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0VGFiSWQgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgJChgLnRhYi10aXRsZVtocmVmPVwiJHskdGFyZ2V0VGFiSWR9XCJdYCkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVSZXZpZXdzKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdFBhZ2VVUkwgPSB0aGlzLmNvbnRleHQucHJvZHVjdHBhZ2VVUkw7XG4gICAgICAgIGNvbnN0IHBhZ2VVUkwgPSBgJHtwcm9kdWN0UGFnZVVSTH0/cmV2cGFnZT0ke3BhZ2V9YDtcblxuICAgICAgICAkKCcuanMtcmV2aWV3LXByZXYsIC5qcy1yZXZpZXctbmV4dCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHJldmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLnJldmlld3NQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwcm9kdWN0cy9hamF4LXJldmlld3MnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHBhZ2VVUkwsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAkKCcuanMtcmV2aWV3LXByZXYsIC5qcy1yZXZpZXctbmV4dCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGxpc3QgPSAkKCcjcHJvZHVjdFJldmlld3MtbGlzdCcpO1xuICAgICAgICAgICAgJGxpc3QuZmFkZU91dCgyMDAsICgpID0+IHtcbiAgICAgICAgICAgICAgICAkbGlzdC5odG1sKHJlcykuZmFkZUluKDIwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAkKCcuanMtcmV2aWV3LXByZXYnKS5hdHRyKCdkaXNhYmxlZCcsIHRoaXMuY3VycmVudFBhZ2UgPD0gMSk7XG4gICAgICAgICAgICAkKCcuanMtcmV2aWV3LW5leHQnKS5hdHRyKCdkaXNhYmxlZCcsIHRoaXMuY3VycmVudFBhZ2UgPj0gdGhpcy50b3RhbFBhZ2VzKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZUNvdW50ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUGFnZUNvdW50ZXIoKSB7XG4gICAgICAgICQoJy5qcy1yZXZpZXctcGFnZScpLnRleHQoYCR7dGhpcy5jdXJyZW50UGFnZX0gLyAke3RoaXMudG90YWxQYWdlc31gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGhvdG9Td2lwZSBmcm9tICdwaG90b3N3aXBlJztcbmltcG9ydCBQaG90b1N3aXBlVUlEZWZhdWx0IGZyb20gJ3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLXVpLWRlZmF1bHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpIHx8ICcnO1xuICAgIGltYWdlLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gW3tcbiAgICAgICAgICAgIHNyYzogZXZlbnQudGFyZ2V0LnNyYyxcbiAgICAgICAgICAgIHc6IGV2ZW50LnRhcmdldC53aWR0aCxcbiAgICAgICAgICAgIGg6IGV2ZW50LnRhcmdldC5oZWlnaHQsXG4gICAgICAgIH1dO1xuXG4gICAgICAgIGxvYWRHYWxsZXJ5KGRhdGEpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsb2FkR2FsbGVyeShpbWFnZXMpIHtcbiAgICAgICAgY29uc3QgcHN3cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHN3cCcpWzBdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICBiZ09wYWNpdHk6IDAuOCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBnYWxsZXJ5ID0gbmV3IFBob3RvU3dpcGUocHN3cEVsZW1lbnQsIFBob3RvU3dpcGVVSURlZmF1bHQsIGltYWdlcywgb3B0aW9ucyk7XG5cbiAgICAgICAgZ2FsbGVyeS5pbml0KCk7XG4gICAgfVxufVxuIiwiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBJVFNQcm9kdWN0IGZyb20gJy4vY3VzdG9tL2l0cy1wcm9kdWN0JztcbmltcG9ydCBjYXJvdXNlbCBmcm9tICcuL2NvbW1vbi9jYXJvdXNlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcblxuICAgICAgICBjb25zdCBib2R5ID0gdGhpcztcblxuICAgICAgICBpZih0aGlzLmNvbnRleHQuaGFzVmlkZW8gPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgICQoYC5ibG9nLXBvc3RfX2NhcmRbc2hvd11gKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgYm9keS5sb2FkU291cmNlKCQodGhpcykuYXR0cihcImRhdGEtbGlua1wiKSwgJCh0aGlzKSk7XG4gICAgICAgICAgICB9KSAgXG4gICAgICAgIH1cblxuICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCRyZXZpZXdGb3JtLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoeyAkcmV2aWV3Rm9ybSB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5hcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJHJldmlld0Zvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludHVpdFNvbHV0aW9ucyAtIEN1c3RvbSBQcm9kdWN0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLklUU1Byb2R1Y3QgPSBuZXcgSVRTUHJvZHVjdCh0aGlzLmNvbnRleHQpO1xuICAgICAgICAvLyBjYXJvdXNlbCh0aGlzLmNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzKCRmb3JtKSB7XG4gICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLWlucHV0XScpLmVhY2goKF8sIGlucHV0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IG1zZ1NwYW5JZCA9IGAkeyRpbnB1dC5hdHRyKCduYW1lJyl9LW1zZ2A7XG5cbiAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncygnc3BhbicpLmF0dHIoJ2lkJywgbXNnU3BhbklkKTtcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JywgbXNnU3BhbklkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjYnVsa19wcmljaW5nJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRTb3VyY2UodXJsLCAkZWxlbSl7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBgJHtiYXNlVXJsfSR7dXJsfWAsXG4gICAgICAgIH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uKGh0bWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gLzxib2R5W14+XSo+KCgufFtcXG5cXHJdKSopPFxcL2JvZHk+L2k7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoaHRtbCk7XG4gICAgICAgICAgICBjb25zdCBib2R5Q29udGVudCA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJvZHlDb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvc190YWIgPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICB2aWRlb3NfdGFiLmh0bWwoYm9keUNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codmlkZW9zX3RhYi5maW5kKFwiI2ZldGNoLXNlY3Rpb25cIikpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9zX2RhdGEgPSB2aWRlb3NfdGFiLmZpbmQoXCIjZmV0Y2gtc2VjdGlvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdmlkZW9zX2RhdGEuZmluZChcIiNmZXRjaC10aXRsZVwiKS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IHZpZGVvc19kYXRhLmZpbmQoXCIjZmV0Y2gtaW1hZ2UgaW1nXCIpO1xuICAgICAgICAgICAgY29uc3QgdGFncyA9IFtdO1xuICAgICAgICAgICAgdmlkZW9zX2RhdGEuZmluZChcIltmZXRjaC10YWdzXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTokKHRoaXMpLmZpbmQoXCJbdGFnLW5hbWVdXCIpLnRleHQoKSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiQodGhpcykuZmluZChcIlt0YWctdXJsXVwiKS50ZXh0KClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkZWxlbS5maW5kKFwiLmJsb2ctcG9zdF9fY2FyZC10YWdzXCIpLmFwcGVuZChgPGxpIGNsYXNzPVwidGFnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaDVcIiBocmVmPVwiJHskKHRoaXMpLmZpbmQoXCJbdGFnLXVybF1cIikudGV4dCgpfVwiPiR7JCh0aGlzKS5maW5kKFwiW3RhZy1uYW1lXVwiKS50ZXh0KCl9PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+YCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGVsZW0uZmluZChcIi5ibG9nLXBvc3RfX2NhcmQtdGh1bWJuYWlsIGFcIikuYXBwZW5kKHZpZGVvc19kYXRhLmZpbmQoXCIjZmV0Y2gtaW1hZ2UgaW1nXCIpKTtcbiAgICAgICAgICAgICRlbGVtLmZpbmQoXCIuYmxvZy1wb3N0X19jYXJkLXRpdGxlIGFcIikuYXBwZW5kKHZpZGVvc19kYXRhLmZpbmQoXCIjZmV0Y2gtdGl0bGVcIikudGV4dCgpKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUaXRsZTogXCIsIHRpdGxlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSW1hZ2U6IFwiLCBpbWFnZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRhZ3M6IFwiLCB0YWdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsidXRpbHMiLCJzY2hlbWF0aWNzIiwiSVRTUHJvZHVjdCIsImNvbnRleHQiLCJfdGhpcyIsImN1cnJlbnRQYWdlIiwicmV2aWV3c1BlclBhZ2UiLCJwcm9kdWN0cGFnZVJldmlld3NDb3VudCIsInRvdGFsUmV2aWV3cyIsInByb2R1Y3RSZXZpZXdzVG90YWwiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCIkIiwib24iLCJuYXZpZ2F0ZVJldmlld3MiLCJ1cGRhdGVQYWdlQ291bnRlciIsImUiLCIkdGFyZ2V0VGFiSWQiLCJjdXJyZW50VGFyZ2V0IiwiYXR0ciIsInRyaWdnZXIiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJwYWdlIiwiX3RoaXMyIiwicHJvZHVjdFBhZ2VVUkwiLCJwcm9kdWN0cGFnZVVSTCIsInBhZ2VVUkwiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsInByb2R1Y3QiLCJyZXZpZXdzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJyZXMiLCIkbGlzdCIsImZhZGVPdXQiLCJodG1sIiwiZmFkZUluIiwidGV4dCIsImRlZmF1bHQiLCJQaG90b1N3aXBlIiwiUGhvdG9Td2lwZVVJRGVmYXVsdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZGF0YSIsInRhcmdldCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJsb2FkR2FsbGVyeSIsImltYWdlcyIsInBzd3BFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsImluZGV4IiwiYmdPcGFjaXR5IiwiZ2FsbGVyeSIsImluaXQiLCJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwibW9kYWxGYWN0b3J5IiwiY2Fyb3VzZWwiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiY2FsbCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwiX2luaGVyaXRzTG9vc2UiLCJvblJlYWR5IiwiYm9keSIsImhhc1ZpZGVvIiwiZWFjaCIsImxvYWRTb3VyY2UiLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiJHJldmlld0Zvcm0iLCJsZW5ndGgiLCJyZXZpZXciLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsIiRmb3JtIiwiZmluZCIsIl8iLCJpbnB1dCIsIiRpbnB1dCIsIm1zZ1NwYW5JZCIsInNpYmxpbmdzIiwiJGVsZW0iLCJiYXNlVXJsIiwib3JpZ2luIiwiYWpheCIsImRvbmUiLCJyZWdleCIsIm1hdGNoIiwiZXhlYyIsImJvZHlDb250ZW50IiwidmlkZW9zX3RhYiIsImNvbnNvbGUiLCJsb2ciLCJ2aWRlb3NfZGF0YSIsInRhZ3MiLCJwdXNoIiwibmFtZSIsImFwcGVuZCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkdGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiZWxlbWVudCIsIiRlbCIsImlzSW5pdGlhbGl6ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
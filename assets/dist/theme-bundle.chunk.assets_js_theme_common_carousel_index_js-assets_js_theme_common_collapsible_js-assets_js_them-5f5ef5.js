"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_common_carousel_index_js-assets_js_theme_common_collapsible_js-assets_js_them-5f5ef5"],{

/***/ "./assets/js/theme/common/aria/constants.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/aria/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaKeyCodes: () => (/* binding */ ariaKeyCodes)
/* harmony export */ });
var ariaKeyCodes = {
  RETURN: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ }),

/***/ "./assets/js/theme/common/aria/index.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/aria/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioOptions: () => (/* reexport safe */ _radioOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _radioOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioOptions */ "./assets/js/theme/common/aria/radioOptions.js");


/***/ }),

/***/ "./assets/js/theme/common/aria/radioOptions.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/aria/radioOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/js/theme/common/aria/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var setCheckedRadioItem = function setCheckedRadioItem(itemCollection, itemIdx) {
  itemCollection.each(function (idx, item) {
    var $item = $(item);
    if (idx !== itemIdx) {
      $item.attr('aria-checked', false).prop('checked', false);
      return;
    }
    $item.attr('aria-checked', true).prop('checked', true).focus();
    $item.trigger('change');
  });
};
var calculateTargetItemPosition = function calculateTargetItemPosition(lastItemIdx, currentIdx) {
  switch (true) {
    case currentIdx > lastItemIdx:
      return 0;
    case currentIdx < 0:
      return lastItemIdx;
    default:
      return currentIdx;
  }
};
var handleItemKeyDown = function handleItemKeyDown(itemCollection) {
  return function (e) {
    var keyCode = e.keyCode;
    var itemIdx = itemCollection.index(e.currentTarget);
    var lastCollectionItemIdx = itemCollection.length - 1;
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes).includes(keyCode)) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.UP:
        {
          var prevItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx - 1);
          itemCollection.get(prevItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx - 1);
          break;
        }
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.DOWN:
        {
          var nextItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx + 1);
          itemCollection.get(nextItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx + 1);
          break;
        }
      default:
        break;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($container, itemSelector) {
  var $itemCollection = $container.find(itemSelector);
  $container.on('keydown', itemSelector, handleItemKeyDown($itemCollection));
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/constants.js":
/*!******************************************************!*\
  !*** ./assets/js/theme/common/carousel/constants.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOCUSABLE_ELEMENTS_SELECTOR: () => (/* binding */ FOCUSABLE_ELEMENTS_SELECTOR)
/* harmony export */ });
var FOCUSABLE_ELEMENTS_SELECTOR = '[href], button, input, textarea, select, details, [contenteditable="true"], [tabindex]';

/***/ }),

/***/ "./assets/js/theme/common/carousel/index.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/carousel/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   onSlickCarouselChange: () => (/* binding */ onSlickCarouselChange),
/* harmony export */   onUserCarouselChange: () => (/* binding */ onUserCarouselChange),
/* harmony export */   setCarouselState: () => (/* binding */ setCarouselState)
/* harmony export */ });
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./assets/js/theme/common/carousel/utils/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var setCarouselState = function setCarouselState(_ref, carouselObj) {
  var delegateTarget = _ref.delegateTarget;
  var carouselObjCurrent = carouselObj || delegateTarget.slick;
  var $slider = carouselObjCurrent.$slider;
  $slider.data('state', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getActiveSlideIdxAndSlidesQuantity)(carouselObjCurrent));
};
var onUserCarouselChange = function onUserCarouselChange(_ref2, context, $slider) {
  var data = _ref2.data;
  var $activeSlider = $slider || data;
  var $parentContainer = $activeSlider.hasClass('productView-thumbnails') ? $activeSlider.parent('.productView-images') : $activeSlider;
  var _$activeSlider$data = $activeSlider.data('state'),
    activeSlideIdx = _$activeSlider$data.activeSlideIdx,
    slidesQuantity = _$activeSlider$data.slidesQuantity;
  var $carouselContentElement = $('[data-carousel-content-change-message]', $parentContainer);
  var carouselContentAnnounceMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.updateTextWithLiveData)(context.carouselContentAnnounceMessage, activeSlideIdx + 1, slidesQuantity);
  $carouselContentElement.text(carouselContentAnnounceMessage);
};
var onSlickCarouselChange = function onSlickCarouselChange(e, carouselObj, context) {
  var $dots = carouselObj.$dots,
    $slider = carouselObj.$slider,
    $prevArrow = carouselObj.$prevArrow,
    $nextArrow = carouselObj.$nextArrow,
    infinite = carouselObj.options.infinite;
  var _ref3 = $slider.data('state') || (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getActiveSlideIdxAndSlidesQuantity)(carouselObj),
    activeSlideIdx = _ref3.activeSlideIdx,
    slidesQuantity = _ref3.slidesQuantity;
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.dotsSetup)($dots, activeSlideIdx, slidesQuantity, context);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.arrowAriaLabling)($prevArrow, $nextArrow, activeSlideIdx, slidesQuantity, infinite, context.carouselArrowAndDotAriaLabel);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.analizeSlides)($slider.find('.slick-slide'));
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.refreshFocus)($prevArrow, $nextArrow, $dots, $slider, activeSlideIdx, slidesQuantity, infinite);
  $slider.data('state', null);
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  $('[data-slick]').each(function (idx, carousel) {
    // getting element using find to pass jest test
    var $carousel = $(document).find(carousel);
    $carousel.on('init breakpoint swipe', setCarouselState);
    $carousel.on('click', '.slick-arrow, .slick-dots', setCarouselState);
    $carousel.on('init breakpoint', function (e, carouselObj) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.activatePlayPauseButton)(e, carouselObj, context);
    });
    $carousel.on('init afterChange', function (e, carouselObj) {
      return onSlickCarouselChange(e, carouselObj, context);
    });
    $carousel.on('click', '.slick-arrow, .slick-dots', $carousel, function (e) {
      return onUserCarouselChange(e, context);
    });
    $carousel.on('swipe', function (e, carouselObj) {
      return onUserCarouselChange(e, context, carouselObj.$slider);
    });
    if ($carousel.hasClass('heroCarousel')) {
      $carousel.on('init afterChange', _utils__WEBPACK_IMPORTED_MODULE_1__.handleImageLoad);
      $carousel.on('swipe', _utils__WEBPACK_IMPORTED_MODULE_1__.handleImageAspectRatio);
      $carousel.on('click', '.slick-arrow, .slick-dots', _utils__WEBPACK_IMPORTED_MODULE_1__.handleImageAspectRatio);

      // Alternative image styling for IE, which doesn't support objectfit
      if (typeof document.documentElement.style.objectFit === 'undefined') {
        $carousel.find('.heroCarousel-slide').each(function (index, slide) {
          $(slide).addClass('compat-object-fit');
        });
      }
    }
    var isMultipleSlides = $carousel.children().length > 1;
    var customPaging = isMultipleSlides ? function () {
      return '<button data-carousel-dot type="button"></button>';
    } : function () {};
    $carousel.slick({
      accessibility: false,
      arrows: isMultipleSlides,
      customPaging: customPaging,
      dots: isMultipleSlides
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/activatePlayPauseButton.js":
/*!**************************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/activatePlayPauseButton.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);

var PLAY_ACTION = 'slickPlay';
var PAUSE_ACTION = 'slickPause';
var updateButtonLabels = function updateButtonLabels(context) {
  var carouselPlayPauseButtonPlay = context.carouselPlayPauseButtonPlay,
    carouselPlayPauseButtonPause = context.carouselPlayPauseButtonPause,
    carouselPlayPauseButtonAriaPlay = context.carouselPlayPauseButtonAriaPlay,
    carouselPlayPauseButtonAriaPause = context.carouselPlayPauseButtonAriaPause;
  return function ($button, action) {
    $button.text(action === PLAY_ACTION ? carouselPlayPauseButtonPause : carouselPlayPauseButtonPlay).attr('aria-label', action === PLAY_ACTION ? carouselPlayPauseButtonAriaPause : carouselPlayPauseButtonAriaPlay);
  };
};
var updateButtonLabelsWithContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (e, carouselObj, context) {
  var $slider = carouselObj.$slider,
    $dots = carouselObj.$dots,
    speed = carouselObj.options.speed;
  var $playPauseButton = $slider.find('[data-play-pause-button]');
  if ($playPauseButton.length === 0) return;

  // for correct carousel controls focus order
  if ($dots) {
    $playPauseButton.insertBefore($dots);
  } else $slider.append($playPauseButton);
  var _$slider$data = $slider.data('state'),
    slidesQuantity = _$slider$data.slidesQuantity;
  $playPauseButton.css('display', slidesQuantity > 1 ? 'block' : 'none');
  if (e.type === 'init') updateButtonLabelsWithContext = updateButtonLabels(context);
  if (e.type === 'breakpoint') {
    updateButtonLabelsWithContext($playPauseButton, PLAY_ACTION);
    return;
  }
  var onPlayPauseClick = function onPlayPauseClick() {
    var action = carouselObj.paused ? PLAY_ACTION : PAUSE_ACTION;
    $slider.slick(action);
    updateButtonLabelsWithContext($playPauseButton, action);
  };
  $playPauseButton.on('click', lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(onPlayPauseClick, speed, {
    trailing: false
  }));
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/analizeSlides.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/analizeSlides.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./assets/js/theme/common/carousel/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($slides) {
  $slides.each(function (idx, slide) {
    var $slide = $(slide);
    var tabIndex = $slide.hasClass('slick-active') ? 0 : -1;
    if ($slide.is(_constants__WEBPACK_IMPORTED_MODULE_0__.FOCUSABLE_ELEMENTS_SELECTOR)) $slide.attr('tabindex', tabIndex);
    $slide.find(_constants__WEBPACK_IMPORTED_MODULE_0__.FOCUSABLE_ELEMENTS_SELECTOR).each(function (index, child) {
      $(child).attr('tabindex', tabIndex);
    });
  });
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/arrowAriaLabling.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/arrowAriaLabling.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateTextWithLiveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateTextWithLiveData */ "./assets/js/theme/common/carousel/utils/updateTextWithLiveData.js");
/* harmony import */ var _tooltipSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltipSetup */ "./assets/js/theme/common/carousel/utils/tooltipSetup.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($prevArrow, $nextArrow, activeSlideIdx, slidesQuantity, isInfinite, ariaLabel) {
  if (slidesQuantity < 2 || !$prevArrow || !$nextArrow) return;
  var activeSlideNumber = activeSlideIdx + 1;
  var prevSlideNumber = activeSlideIdx === 0 ? slidesQuantity : activeSlideNumber - 1;
  var arrowLeftText = (0,_updateTextWithLiveData__WEBPACK_IMPORTED_MODULE_0__["default"])(ariaLabel, prevSlideNumber, slidesQuantity);
  $prevArrow.attr({
    'aria-label': arrowLeftText,
    tabindex: !isInfinite && activeSlideIdx === 0 ? -1 : 0
  });
  (0,_tooltipSetup__WEBPACK_IMPORTED_MODULE_1__["default"])($prevArrow);
  var nextSlideNumber = activeSlideIdx === slidesQuantity - 1 ? 1 : activeSlideNumber + 1;
  var arrowRightText = (0,_updateTextWithLiveData__WEBPACK_IMPORTED_MODULE_0__["default"])(ariaLabel, nextSlideNumber, slidesQuantity);
  $nextArrow.attr({
    'aria-label': arrowRightText,
    tabindex: !isInfinite && activeSlideIdx === slidesQuantity - 1 ? -1 : 0
  });
  (0,_tooltipSetup__WEBPACK_IMPORTED_MODULE_1__["default"])($nextArrow);
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/dotsSetup.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/dotsSetup.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateTextWithLiveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateTextWithLiveData */ "./assets/js/theme/common/carousel/utils/updateTextWithLiveData.js");
/* harmony import */ var _tooltipSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltipSetup */ "./assets/js/theme/common/carousel/utils/tooltipSetup.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($dots, activeSlideIdx, slidesQuantity, _ref) {
  var carouselArrowAndDotAriaLabel = _ref.carouselArrowAndDotAriaLabel,
    carouselActiveDotAriaLabel = _ref.carouselActiveDotAriaLabel;
  if (!$dots) return;
  if (slidesQuantity < 2) {
    $dots.css('display', 'none');
    return;
  }
  $dots.css('display', 'block');
  $dots.children().each(function (idx, dot) {
    var dotLabelText = (0,_updateTextWithLiveData__WEBPACK_IMPORTED_MODULE_0__["default"])(carouselArrowAndDotAriaLabel, idx + 1, slidesQuantity);
    var dotSlideStatusText = idx === activeSlideIdx ? ", " + carouselActiveDotAriaLabel : '';
    var dotAriaLabel = "" + dotLabelText + dotSlideStatusText;
    var $dotButton = $(dot).find('[data-carousel-dot]');
    (0,_tooltipSetup__WEBPACK_IMPORTED_MODULE_1__["default"])($dotButton.attr('aria-label', dotAriaLabel));
  });
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/getActiveSlideIdxAndSlidesQuantity.js":
/*!*************************************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/getActiveSlideIdxAndSlidesQuantity.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var slideCount = _ref.slideCount,
    $slides = _ref.$slides,
    _ref$options = _ref.options,
    slidesToShow = _ref$options.slidesToShow,
    slidesToScroll = _ref$options.slidesToScroll;
  var lastVisibleIdx = $slides.get().reduce(function (acc, curr, idx) {
    if ($(curr).hasClass('slick-active')) return idx;
    return acc;
  }, -1);
  var activeSlideIdx = lastVisibleIdx < slidesToShow ? 0 : Math.ceil((lastVisibleIdx + 1 - slidesToShow) / slidesToScroll);
  var slidesQuantity;
  if (slideCount === 0) {
    slidesQuantity = 0;
  } else if (slideCount <= slidesToShow) {
    slidesQuantity = 1;
  } else slidesQuantity = Math.ceil((slideCount - slidesToShow) / slidesToScroll) + 1;

  // FYI - one slide can contain several card items for product carousel
  return {
    activeSlideIdx: activeSlideIdx,
    slidesQuantity: slidesQuantity
  };
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/getActiveSlideInfo.js":
/*!*********************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/getActiveSlideInfo.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref, isAnalyzedDataAttr) {
  var $slider = _ref.$slider;
  var $activeSlide = $slider.find('.slick-current');
  var isAnalyzedSlide = $activeSlide.data(isAnalyzedDataAttr);
  if (isAnalyzedSlide) return {
    isAnalyzedSlide: isAnalyzedSlide
  };
  var $activeSlideImg = $activeSlide.find('.heroCarousel-image');
  var activeSlideImgNode = $activeSlideImg[0];
  var $activeSlideAndClones = $slider.find("[data-hero-slide=" + $activeSlide.data('hero-slide') + "]");
  return {
    $slider: $slider,
    $activeSlide: $activeSlide,
    $activeSlideImg: $activeSlideImg,
    activeSlideImgNode: activeSlideImgNode,
    $activeSlideAndClones: $activeSlideAndClones
  };
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/handleImageAspectRatio.js":
/*!*************************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/handleImageAspectRatio.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getActiveSlideInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getActiveSlideInfo */ "./assets/js/theme/common/carousel/utils/getActiveSlideInfo.js");

var IMAGE_CLASSES = {
  vertical: 'is-vertical-image-type',
  square: 'is-square-image-type'
};
var IS_ANALYZED_DATA_ATTR = 'image-ratio-analyzed';
var defineAspectRatioClass = function defineAspectRatioClass(imageAspectRatio) {
  switch (true) {
    case imageAspectRatio > 0.8 && imageAspectRatio <= 1.2:
      return IMAGE_CLASSES.square;
    case imageAspectRatio > 1.2:
      return IMAGE_CLASSES.vertical;
    default:
      return '';
  }
};
var setAspectRatioClass = function setAspectRatioClass(imageNode, $slides) {
  if (imageNode.naturalHeight <= 1) return;
  var imageAspectRatio = imageNode.naturalHeight / imageNode.naturalWidth;
  $slides.addClass(defineAspectRatioClass(imageAspectRatio));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref, carouselObj) {
  var delegateTarget = _ref.delegateTarget;
  var _getActiveSlideInfo = (0,_getActiveSlideInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(carouselObj || delegateTarget.slick, IS_ANALYZED_DATA_ATTR),
    isAnalyzedSlide = _getActiveSlideInfo.isAnalyzedSlide,
    $activeSlide = _getActiveSlideInfo.$activeSlide,
    $activeSlideImg = _getActiveSlideInfo.$activeSlideImg,
    activeSlideImgNode = _getActiveSlideInfo.activeSlideImgNode,
    $activeSlideAndClones = _getActiveSlideInfo.$activeSlideAndClones;
  if (isAnalyzedSlide) return;
  $activeSlideAndClones.data(IS_ANALYZED_DATA_ATTR, true);
  if ($activeSlide.find('.heroCarousel-content').length) return;
  if (activeSlideImgNode.complete) {
    if (activeSlideImgNode.naturalHeight === 1) {
      // only base64 image from srcset was loaded
      $activeSlideImg.on('load', function () {
        return setAspectRatioClass(activeSlideImgNode, $activeSlideAndClones);
      });
    } else if (activeSlideImgNode.naturalHeight > 1) {
      setAspectRatioClass(activeSlideImgNode, $activeSlideAndClones);
    }
  } else $activeSlideImg.on('load', function () {
    return setAspectRatioClass(activeSlideImgNode, $activeSlideAndClones);
  });
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/handleImageLoad.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/handleImageLoad.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* harmony import */ var _getActiveSlideInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getActiveSlideInfo */ "./assets/js/theme/common/carousel/utils/getActiveSlideInfo.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var IMAGE_ERROR_CLASS = 'is-image-error';
var IS_ANALYZED_DATA_ATTR = 'image-load-analyzed';
var generateImage = function generateImage($image, $slides) {
  $('<img />').on('error', function () {
    return $slides.addClass(IMAGE_ERROR_CLASS);
  }).attr('src', $image.attr('src'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (e, carouselObj) {
  var _getActiveSlideInfo = (0,_getActiveSlideInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(carouselObj, IS_ANALYZED_DATA_ATTR),
    isAnalyzedSlide = _getActiveSlideInfo.isAnalyzedSlide,
    $activeSlideImg = _getActiveSlideInfo.$activeSlideImg,
    activeSlideImgNode = _getActiveSlideInfo.activeSlideImgNode,
    $activeSlideAndClones = _getActiveSlideInfo.$activeSlideAndClones;
  if (isAnalyzedSlide) return;
  $activeSlideAndClones.data(IS_ANALYZED_DATA_ATTR, true);
  if (activeSlideImgNode.complete) {
    if (activeSlideImgNode.naturalHeight === 0) {
      $activeSlideAndClones.addClass(IMAGE_ERROR_CLASS);
    } else if (activeSlideImgNode.naturalHeight === 1) {
      // only base64 image from srcset was loaded
      $activeSlideImg.on('error', function () {
        return $activeSlideAndClones.addClass(IMAGE_ERROR_CLASS);
      });
    }
    return;
  }
  if (!$activeSlideImg.attr('src')) {
    $activeSlideAndClones.addClass(IMAGE_ERROR_CLASS);
    return;
  }
  if (_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_0__.isBrowserIE) {
    generateImage($activeSlideImg, $activeSlideAndClones);
    return;
  }
  $activeSlideImg.on('error', function () {
    return $activeSlideAndClones.addClass(IMAGE_ERROR_CLASS);
  });
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/index.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activatePlayPauseButton: () => (/* reexport safe */ _activatePlayPauseButton__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   analizeSlides: () => (/* reexport safe */ _analizeSlides__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   arrowAriaLabling: () => (/* reexport safe */ _arrowAriaLabling__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   dotsSetup: () => (/* reexport safe */ _dotsSetup__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   getActiveSlideIdxAndSlidesQuantity: () => (/* reexport safe */ _getActiveSlideIdxAndSlidesQuantity__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   handleImageAspectRatio: () => (/* reexport safe */ _handleImageAspectRatio__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   handleImageLoad: () => (/* reexport safe */ _handleImageLoad__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   refreshFocus: () => (/* reexport safe */ _refreshFocus__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   updateTextWithLiveData: () => (/* reexport safe */ _updateTextWithLiveData__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _activatePlayPauseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activatePlayPauseButton */ "./assets/js/theme/common/carousel/utils/activatePlayPauseButton.js");
/* harmony import */ var _analizeSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analizeSlides */ "./assets/js/theme/common/carousel/utils/analizeSlides.js");
/* harmony import */ var _arrowAriaLabling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrowAriaLabling */ "./assets/js/theme/common/carousel/utils/arrowAriaLabling.js");
/* harmony import */ var _dotsSetup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dotsSetup */ "./assets/js/theme/common/carousel/utils/dotsSetup.js");
/* harmony import */ var _getActiveSlideIdxAndSlidesQuantity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getActiveSlideIdxAndSlidesQuantity */ "./assets/js/theme/common/carousel/utils/getActiveSlideIdxAndSlidesQuantity.js");
/* harmony import */ var _handleImageAspectRatio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleImageAspectRatio */ "./assets/js/theme/common/carousel/utils/handleImageAspectRatio.js");
/* harmony import */ var _handleImageLoad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleImageLoad */ "./assets/js/theme/common/carousel/utils/handleImageLoad.js");
/* harmony import */ var _refreshFocus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refreshFocus */ "./assets/js/theme/common/carousel/utils/refreshFocus.js");
/* harmony import */ var _updateTextWithLiveData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateTextWithLiveData */ "./assets/js/theme/common/carousel/utils/updateTextWithLiveData.js");










/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/refreshFocus.js":
/*!***************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/refreshFocus.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./assets/js/theme/common/carousel/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($prevArrow, $nextArrow, $dots, $slider, activeSlideIdx, slidesQuantity, isInfinite) {
  if (isInfinite || !$prevArrow || !$nextArrow) return;
  if (activeSlideIdx === 0 && $prevArrow.is(':focus')) {
    $nextArrow.focus();
  } else if (activeSlideIdx === slidesQuantity - 1 && $nextArrow.is(':focus')) {
    if ($dots) {
      $dots.children().first().find('[data-carousel-dot]').focus();
      return;
    }
    var $firstActiveSlide = $slider.find('.slick-active').first();
    if ($firstActiveSlide.is(_constants__WEBPACK_IMPORTED_MODULE_0__.FOCUSABLE_ELEMENTS_SELECTOR)) {
      $firstActiveSlide.focus();
    } else $firstActiveSlide.find(_constants__WEBPACK_IMPORTED_MODULE_0__.FOCUSABLE_ELEMENTS_SELECTOR).first().focus();
  }
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/tooltipSetup.js":
/*!***************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/tooltipSetup.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var TOOLTIP_DATA_SELECTOR = 'data-carousel-tooltip';
var TOOLTIP_CLASS = 'carousel-tooltip';
var TOOLTIP_NODE = "<span " + TOOLTIP_DATA_SELECTOR + " class=\"" + TOOLTIP_CLASS + "\"></span>";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($node) {
  var $existedTooltip = $node.find("[" + TOOLTIP_DATA_SELECTOR + "]");
  if ($existedTooltip.length) {
    $existedTooltip.attr('aria-label', $node.attr('aria-label'));
  } else {
    var $tooltip = $(TOOLTIP_NODE).attr('aria-label', $node.attr('aria-label'));
    $node.append($tooltip);
  }
});

/***/ }),

/***/ "./assets/js/theme/common/carousel/utils/updateTextWithLiveData.js":
/*!*************************************************************************!*\
  !*** ./assets/js/theme/common/carousel/utils/updateTextWithLiveData.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SLIDE_NUMBER = '[SLIDE_NUMBER]';
var SLIDES_QUANTITY = '[SLIDES_QUANTITY]';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (textForChange, slideNumber, slidesQuantity) {
  return textForChange.replace(SLIDE_NUMBER, slideNumber).replace(SLIDES_QUANTITY, slidesQuantity);
});

/***/ }),

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapsible: () => (/* binding */ Collapsible),
/* harmony export */   CollapsibleEvents: () => (/* binding */ CollapsibleEvents),
/* harmony export */   "default": () => (/* binding */ collapsibleFactory)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {String} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {String} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = (0,_media_query_list__WEBPACK_IMPORTED_MODULE_1__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-label', this._getToggleAriaLabelText($toggle)).attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto._getToggleAriaLabelText = function _getToggleAriaLabelText($toggle) {
    var $textToggleChildren = $toggle.children().filter(function (__, child) {
      return $(child).text().trim();
    });
    var $ariaLabelTarget = $textToggleChildren.length ? $textToggleChildren.first() : $toggle;
    return $($ariaLabelTarget).text().trim();
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    // if(this.openClassName) {
    //     return;
    // }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return this.$target.is(':hidden') && !this.$target.hasClass(this.openClassName);
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
  return Collapsible;
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [overrideOptions]
 * @param {Object} [overrideOptions.$context]
 * @param {String} [overrideOptions.disabledBreakpoint]
 * @param {Object} [overrideOptions.disabledState]
 * @param {Object} [overrideOptions.enabledState]
 * @param {String} [overrideOptions.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}

/***/ }),

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mediaQueryListFactory)
/* harmony export */ });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  xlarge: 1441,
  large: 1281,
  medium: 1025,
  small: 769,
  xsmall: 481
};

/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */
function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }
  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

/***/ }),

/***/ "./assets/js/theme/common/product-details-base.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/common/product-details-base.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetailsBase),
/* harmony export */   optionChangeDecorator: () => (/* binding */ optionChangeDecorator)
/* harmony export */ });
/* harmony import */ var lodash_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/floor */ "./node_modules/lodash/floor.js");
/* harmony import */ var lodash_floor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_floor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aria */ "./assets/js/theme/common/aria/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var optionsTypesMap = {
  INPUT_FILE: 'input-file',
  INPUT_TEXT: 'input-text',
  INPUT_NUMBER: 'input-number',
  INPUT_CHECKBOX: 'input-checkbox',
  TEXTAREA: 'textarea',
  DATE: 'date',
  SET_SELECT: 'set-select',
  SET_RECTANGLE: 'set-rectangle',
  SET_RADIO: 'set-radio',
  SWATCH: 'swatch',
  PRODUCT_LIST: 'product-list'
};
function optionChangeDecorator(areDefaultOtionsSet) {
  var _this = this;
  return function (err, response) {
    var attributesData = response.data || {};
    var attributesContent = response.content || {};
    _this.updateProductAttributes(attributesData);
    if (areDefaultOtionsSet) {
      _this.updateView(attributesData, attributesContent);
    } else {
      _this.updateDefaultAttributesForOOS(attributesData);
    }
  };
}
var ProductDetailsBase = /*#__PURE__*/function () {
  function ProductDetailsBase($scope, context) {
    var _this2 = this;
    this.$scope = $scope;
    this.context = context;
    this.initRadioAttributes();
    _wishlist__WEBPACK_IMPORTED_MODULE_3__["default"].load(this.context);
    this.getTabRequests();
    $('[data-product-attribute]').each(function (__, value) {
      var type = value.getAttribute('data-product-attribute');
      _this2._makeProductVariantAccessible(value, type);
    });
  }
  var _proto = ProductDetailsBase.prototype;
  _proto._makeProductVariantAccessible = function _makeProductVariantAccessible(variantDomNode, variantType) {
    switch (variantType) {
      case optionsTypesMap.SET_RADIO:
      case optionsTypesMap.SWATCH:
        {
          (0,_aria__WEBPACK_IMPORTED_MODULE_4__.initRadioOptions)($(variantDomNode), '[type=radio]');
          break;
        }
      default:
        break;
    }
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
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
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
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $bdspData: $('#bdsp-data', $scope),
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    var breadCrumbs = $('.breadcrumb.is-active');
    var breadModel = this.getViewModel(breadCrumbs);
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      breadModel.sku.$value.text(data.sku);
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    var bdspPercentage = viewModel.$bdspData.data('bdsp-percentage-off') || 0;
    var hasBdspSale = bdspPercentage !== 0;
    if (price.with_tax) {
      var updatedPrice = price.price_range ? price.price_range.min.with_tax.formatted + " - " + price.price_range.max.with_tax.formatted : price.with_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(updatedPrice);
    }
    if (price.without_tax) {
      var bdspAmountOff = price.without_tax.value * (bdspPercentage / 100);
      var _updatedPrice;
      if (!hasBdspSale) {
        _updatedPrice = price.price_range ? price.price_range.min.without_tax.formatted + " - " + price.price_range.max.without_tax.formatted : price.without_tax.formatted;
      } else {
        var discountPrice = lodash_floor__WEBPACK_IMPORTED_MODULE_0___default()(price.without_tax.value - bdspAmountOff, 2).toFixed(2);
        _updatedPrice = "$" + discountPrice;
      }
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(_updatedPrice);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax && !hasBdspSale) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax && !hasBdspSale) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    } else if (hasBdspSale) {
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.nonSaleWithoutTax.$span.html(price.without_tax.formatted);
    }
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message');
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide(0);
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  return ProductDetailsBase;
}();


/***/ }),

/***/ "./assets/js/theme/common/utils/ie-helpers.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertIntoArray: () => (/* binding */ convertIntoArray),
/* harmony export */   isBrowserIE: () => (/* binding */ isBrowserIE)
/* harmony export */ });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ }),

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/custom/parse-csv.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/custom/parse-csv.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProductList)
/* harmony export */ });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);


/*
 *	Read a list of product IDs from a CSV, 
 *	filter for global add-on if necessary, return array
 *	@param {string} addOnCode - Initials of global add-on or 'product'
 *	@param {string} productID - If first argument is 'product', ID of product
 */
function getProductList(addOnCode, productID) {
  //	if we are fetching a list for an individual product,
  //	'product' will be passed as the first argument;
  //	otherwise, the initials of the global add-on will be passed
  return new Promise(function (resolveCSV, rejectCSV) {
    var csvPath = addOnCode === 'product' ? "/content/upsell-suite/product/" + productID + ".csv" : "/content/upsell-suite/global/store.csv";
    papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(csvPath, {
      download: true,
      header: true,
      complete: function complete(results, file) {
        //	if its not a proper upsell suite CSV, abort
        if (!results.data[0].hasOwnProperty("product_id")) {
          rejectCSV('file not found');
          return;
        }
        //  in the case of a single product's list,
        //  we're taking all of the IDs;
        //  if it's a global add-on, only take
        //  the ones that match the add-on code
        var prodArray = results.data.filter(function (row) {
          return row.product_id.length && (addOnCode === 'product' || row.AddOn === addOnCode);
        });

        //  if this is a single product's CSV,
        //  save complete array of products
        //  for CPU add-on to use later
        if (addOnCode === 'product') {
          window.upsellCSV = [].concat(prodArray);
        }
        if (prodArray.length) {
          resolveCSV(prodArray);
        } else {
          rejectCSV('no products in file');
        }
      },
      error: function error(err, file) {
        console.error("Unable to parse " + csvPath);
        rejectCSV(err);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/custom/upsell-array-cart-page.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/custom/upsell-array-cart-page.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _parse_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse-csv */ "./assets/js/theme/custom/parse-csv.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var upsellCPU = {
  //  number of products to display on cart page
  numberOfProductsInCPU: 3,
  /*
   *  Fires from product page when item is added to cart:
   *  select products for CPU based on priority,
   *  AJAX product card content and save to sessionStorage
   *  @param {number} addedItemID - the item just added
   *  @param {Array} cartItems - array of product IDs of items already in cart
   *  @param {Array} customFieldProducts - array of product IDs to be added to CPU via custom fields of item just added
   */
  saveUpsellData: function saveUpsellData(addedItemID, cartItems, customFieldProducts) {
    var _this = this;
    this.currentItem = addedItemID;
    this.currentCustomFields = customFieldProducts;
    cartItems.push(addedItemID);

    //  retrieve HTML of products stored when
    //  previous products were added to cart
    var cpuHTMLtext = sessionStorage.getItem("cpuCards");
    this.cpuHTML = this.parseArrayFromString(cpuHTMLtext);
    this.cpuHTML.forEach(function (product, i, htmlArray) {
      //  remove products from stored CPU if:
      //  1) product is now an item in the cart
      //  2) product was added via custom field
      //      from an item that is no longer in the cart
      if (cartItems.includes(product.product_id) || product.source !== 'csv' && !cartItems.includes(parseInt(product.source))) {
        htmlArray.splice(i, 1);
      }

      //  if a product was previously added via CSV
      //  and is also in the current product's custom fields,
      //  upgrade its priority status 
      if (product.source === 'csv' && _this.currentCustomFields.includes(product.product_id)) {
        product.source = _this.currentItem;
      }
    });

    //  get an array of product IDs in storage
    var cpuItems = this.cpuHTML.map(function (item) {
      return item.product_id;
    });
    //  create an array of products to be added,
    //  starting with IDs from the custom fields
    //  of the product just added, minus the ones already stored
    var itemsToAdd = this.currentCustomFields.filter(function (id) {
      return !cpuItems.includes(id);
    });

    //  count the products in storage
    //  that were added via custom field;
    //  these are given priority over Upsell Suite CSVs
    var savedCustomFieldCount = 0;
    this.cpuHTML.forEach(function (product) {
      if (product.source != 'csv') savedCustomFieldCount++;
    });

    //  after the custom fields products,
    //  how many are we adding from the CSV?
    //  if all of the products in storage are
    //  from custom fields, we're done here
    var slotsAvailable = this.numberOfProductsInCPU - savedCustomFieldCount;
    if (slotsAvailable < 1) return;

    //  if the product just added to the cart
    //  has more custom field products than there is
    //  space left in CPU, drop the last ones
    itemsToAdd.length = Math.min(itemsToAdd.length, slotsAvailable);

    //  retrieve contents of Upsell Suite CSVs
    //  for items previously added to cart and
    //  calculate relative values of upsell products
    //  including CSV from newest cart item
    this.updateArrayOfCSVProducts();

    //  occasionally later references to this variable
    //  have resulted in fatal errors during testing;
    //  if for whatever reason the above function didn't work, just abort
    if (!this.combinedCSV) {
      console.error("Error parsing CSV data from sessionStorage");
      return;
    }

    //  now check the array of products
    //  from the combined CSV data
    //  to fill out the rest of the CPU
    var storedCSVindex = 0;
    while (itemsToAdd.length < slotsAvailable && storedCSVindex < this.combinedCSV.length) {
      while (
      //  skip products that are already in the cart...
      cartItems.includes(this.combinedCSV[storedCSVindex].product_id)
      //  ...and skip repeats that are already
      //  in the current product's custom fields
      || itemsToAdd.includes(this.combinedCSV[storedCSVindex].product_id)) storedCSVindex++;
      itemsToAdd.push(this.combinedCSV[storedCSVindex++].product_id);
    }

    //  now clear out space in storage for the new CSV products
    this.cpuHTML.forEach(function (savedProduct, i, htmlArray) {
      //  if a product we're about to add
      //  is already in storage, no need to AJAX it again;
      //  note that this is not checked in the previous loop
      //  because we're iterating over the stored items in this step,
      //  not the new items to add, so that we'll know which ones to remove...
      if (itemsToAdd.includes(savedProduct.product_id)) {
        itemsToAdd.splice(itemsToAdd.indexOf(savedProduct.product_id), 1);
        //  ...in other words, if a product is in storage
        //  was previously added via CSV and
        //  is no longer at the top of the priority list,
        //  it can now be removed to make room for a better one
      } else if (savedProduct.source == 'csv') {
        htmlArray.splice(i, 1);
      }
    });

    //  at this point the newly-truncated arrays
    //  of products stored and products to be added
    //  should add up the the size of the CPU (usually 3);
    //  so we AJAX the new products as needed 
    //  to fill the open slots, and we're out
    if (itemsToAdd.length) {
      console.log("Products being added to CPU: ", itemsToAdd);
      this.getCPUcards(itemsToAdd);
    }
  },
  /*
   *  Parse array of objects from string stored in sessionStorage
   *  or, if empty, create new array;
   *  by the way, this can't possibly be the best way
   *  to parse an array of objects stored as a string;
   *  the problem is if you just use .split(',')
   *  you'll get an array with all of the key-value pairs
   *  pulled out of each of the objects;
   *  this was the best I could do, but
   *  if you know a better way please replace this amateurish nonsense
   *  @param {string} arrayString - array of objects stored as a string
   */
  parseArrayFromString: function parseArrayFromString(arrayString) {
    return arrayString ? arrayString.split('},{').map(function (string) {
      if (!string.startsWith('{')) string = '{' + string;
      if (!string.endsWith('}')) string = string + '}';
      return string;
    }).map(function (item) {
      return JSON.parse(item);
    }) : [];
  },
  /*
   *  Get the array of CSV products for all items in cart from sessionStorage,
   *  then update with data from new CSV
   */
  updateArrayOfCSVProducts: function updateArrayOfCSVProducts() {
    var _this2 = this;
    var combinedCSVtext = sessionStorage.getItem("combinedCSV");
    this.combinedCSV = this.parseArrayFromString(combinedCSVtext);

    //  CSV for current product is downloaded and parsed
    //  on product page load, then saved as a window variable;
    //  if no CSV is available for this product,
    //  site-wide default products are not saved
    if (typeof window.upsellCSV === "undefined") return;
    window.upsellCSV.forEach(function (newProduct, i) {
      //  if the product ID is already in the combined CSV,
      //  add the frequency of purchases from the new cart item...
      if (!_this2.combinedCSV.some(function (product) {
        if (product.product_id == newProduct.product_id) {
          product.freq = parseInt(product.freq) + parseInt(newProduct.freq);
          return true;
        }
      })) {
        //  ...otherwise just add the product to the array
        newProduct.freq = parseInt(newProduct.freq);
        _this2.combinedCSV.push(newProduct);
      }

      //  sort the array so the most-purchased products are first
      _this2.combinedCSV.sort(function (a, b) {
        return b.freq - a.freq;
      });
      //  don't need to save them all; even 20 may be too many
      if (_this2.combinedCSV.length > 20) _this2.combinedCSV.length = 20;
      //  stick 'em in sessionStorage for the next time we do this
      sessionStorage.setItem("combinedCSV", _this2.combinedCSV.map(function (prod) {
        return JSON.stringify(prod);
      }));
    });
  },
  /*
   *  Recursive function to AJAX HTML for product cards in CPU;
   *  recursive call is in AJAX callback
   *  @param {array} idArray - product IDs to be added
   */
  getCPUcards: function getCPUcards(idArray) {
    var _this3 = this;
    //  finish if the IDs have all been AJAXed
    //  or the HTML data is full up;
    //  should happen at the same time
    if (!idArray.length || this.cpuHTML.length >= this.numberOfProductsInCPU) {
      console.log("CPU will display these products: ", this.cpuHTML.map(function (item) {
        return item.product_id;
      }));
      return;
    }
    var nextID = idArray.shift();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(nextID, {
      template: 'custom/cart-page-upsell-item'
    }, function (err, response) {
      if (err) {
        console.error(err);
        console.log("Failed to load " + nextID + " for CPU");
      }

      //  create a new object to store the product card
      var newCPUItem = {};
      newCPUItem.product_id = nextID;
      //  if the ID came from a custom field,
      //  save the ID of the referring product;
      //  otherwise mark it from a CSV
      newCPUItem.source = _this3.currentCustomFields.includes(nextID) ? _this3.currentItem : 'csv';
      newCPUItem.html = response;
      _this3.cpuHTML.push(newCPUItem);

      //  update sessionStorage after each AJAX
      //  in case user clicks away before
      //  all products are complete
      sessionStorage.setItem("cpuCards", _this3.cpuHTML.map(function (obj) {
        return JSON.stringify(obj);
      }));
      //  and then get the next item
      _this3.getCPUcards(idArray);
    });
  },
  /*
   *  If there are not enough products to fill the CPU on cart page load,
   *  get CSV of a product already in CPU
   *  @param {Array} cpuProducts - product IDs already saved in CPU
   *  @param {number} arraySize - number of additional products needed to fill CPU
   */
  getAdditionalProducts: function getAdditionalProducts(cpuProducts, arraySize) {
    if (arraySize === void 0) {
      arraySize = this.numberOfProductsInCPU;
    }
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolveArray, rejectArray) {
        var csvArray, returnArray, csvIndex;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              csvArray = [];
              _context.prev = 1;
              _context.next = 4;
              return (0,_parse_csv__WEBPACK_IMPORTED_MODULE_2__["default"])('product', cpuProducts[0]);
            case 4:
              csvArray = _context.sent;
              _context.next = 20;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.log("Unable to retrieve CSV for " + cpuProducts[0]);
              // console.err(err);
              //  if there's a second item in the CPU, try that one
              if (!(cpuProducts.length > 1)) {
                _context.next = 20;
                break;
              }
              _context.prev = 11;
              _context.next = 14;
              return (0,_parse_csv__WEBPACK_IMPORTED_MODULE_2__["default"])('product', cpuProducts[1]);
            case 14:
              csvArray = _context.sent;
              _context.next = 20;
              break;
            case 17:
              _context.prev = 17;
              _context.t1 = _context["catch"](11);
              console.log("Unable to retrieve CSV for " + cpuProducts[1]);
              // console.err(err);
            case 20:
              if (csvArray.length) {
                _context.next = 31;
                break;
              }
              _context.prev = 21;
              _context.next = 24;
              return (0,_parse_csv__WEBPACK_IMPORTED_MODULE_2__["default"])('def');
            case 24:
              csvArray = _context.sent;
              _context.next = 31;
              break;
            case 27:
              _context.prev = 27;
              _context.t2 = _context["catch"](21);
              console.log("No default upsell products for store");
              //  still no dice, dip out
              return _context.abrupt("return", rejectArray('No further CSVs available'));
            case 31:
              returnArray = [];
              csvIndex = 0; //  find products to send back
              while (returnArray.length < arraySize && csvIndex < csvArray.length) {
                //  skip products that are already in CPU
                while (cpuProducts.includes(csvArray[csvIndex]) && csvIndex < csvArray.length) csvIndex++;
                returnArray.push(csvArray[csvIndex]);
              }
              resolveArray(returnArray);
              return _context.abrupt("return");
            case 36:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 7], [11, 17], [21, 27]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upsellCPU);

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fY2Fyb3VzZWxfaW5kZXhfanMtYXNzZXRzX2pzX3RoZW1lX2NvbW1vbl9jb2xsYXBzaWJsZV9qcy1hc3NldHNfanNfdGhlbS01ZjVlZjUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsRUFBRSxFQUFFLEVBQUU7RUFDTkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQztBQUUzQyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxjQUFjLEVBQUVDLE9BQU8sRUFBSztFQUNyREQsY0FBYyxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUs7SUFDL0IsSUFBTUMsS0FBSyxHQUFHQyxDQUFDLENBQUNGLElBQUksQ0FBQztJQUNyQixJQUFJRCxHQUFHLEtBQUtGLE9BQU8sRUFBRTtNQUNqQkksS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztNQUN4RDtJQUNKO0lBRUFILEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDOURKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSUMsV0FBVyxFQUFFQyxVQUFVLEVBQUs7RUFDN0QsUUFBUSxJQUFJ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aGVtZS9jb21tb24vYXJpYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvcmFkaW9PcHRpb25zLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJvdXNlbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Nhcm91c2VsL2luZGV4LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJvdXNlbC91dGlscy9hY3RpdmF0ZVBsYXlQYXVzZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2Fyb3VzZWwvdXRpbHMvYW5hbGl6ZVNsaWRlcy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2Fyb3VzZWwvdXRpbHMvYXJyb3dBcmlhTGFibGluZy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2Fyb3VzZWwvdXRpbHMvZG90c1NldHVwLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJvdXNlbC91dGlscy9nZXRBY3RpdmVTbGlkZUlkeEFuZFNsaWRlc1F1YW50aXR5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJvdXNlbC91dGlscy9nZXRBY3RpdmVTbGlkZUluZm8uanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Nhcm91c2VsL3V0aWxzL2hhbmRsZUltYWdlQXNwZWN0UmF0aW8uanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Nhcm91c2VsL3V0aWxzL2hhbmRsZUltYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2Fyb3VzZWwvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Nhcm91c2VsL3V0aWxzL3JlZnJlc2hGb2N1cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2Fyb3VzZWwvdXRpbHMvdG9vbHRpcFNldHVwLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJvdXNlbC91dGlscy91cGRhdGVUZXh0V2l0aExpdmVEYXRhLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jb2xsYXBzaWJsZS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbWVkaWEtcXVlcnktbGlzdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL3BhcnNlLWNzdi5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vdXBzZWxsLWFycmF5LWNhcnQtcGFnZS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS93aXNobGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJpYUtleUNvZGVzID0ge1xuICAgIFJFVFVSTjogMTMsXG4gICAgU1BBQ0U6IDMyLFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG59O1xuIiwiaW1wb3J0IHsgYXJpYUtleUNvZGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzZXRDaGVja2VkUmFkaW9JdGVtID0gKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4KSA9PiB7XG4gICAgaXRlbUNvbGxlY3Rpb24uZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChpdGVtKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gaXRlbUlkeCkge1xuICAgICAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgZmFsc2UpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCB0cnVlKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkuZm9jdXMoKTtcbiAgICAgICAgJGl0ZW0udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24gPSAobGFzdEl0ZW1JZHgsIGN1cnJlbnRJZHgpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGN1cnJlbnRJZHggPiBsYXN0SXRlbUlkeDogcmV0dXJuIDA7XG4gICAgY2FzZSBjdXJyZW50SWR4IDwgMDogcmV0dXJuIGxhc3RJdGVtSWR4O1xuICAgIGRlZmF1bHQ6IHJldHVybiBjdXJyZW50SWR4O1xuICAgIH1cbn07XG5cbmNvbnN0IGhhbmRsZUl0ZW1LZXlEb3duID0gaXRlbUNvbGxlY3Rpb24gPT4gZSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlO1xuICAgIGNvbnN0IGl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5pbmRleChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IGxhc3RDb2xsZWN0aW9uSXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhhcmlhS2V5Q29kZXMpLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5MRUZUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlVQOiB7XG4gICAgICAgIGNvbnN0IHByZXZJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQocHJldkl0ZW1JZHgpLmZvY3VzKCk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlJJR0hUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLkRPV046IHtcbiAgICAgICAgY29uc3QgbmV4dEl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChuZXh0SXRlbUlkeCkuZm9jdXMoKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCArIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiBicmVhaztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoJGNvbnRhaW5lciwgaXRlbVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgJGl0ZW1Db2xsZWN0aW9uID0gJGNvbnRhaW5lci5maW5kKGl0ZW1TZWxlY3Rvcik7XG5cbiAgICAkY29udGFpbmVyLm9uKCdrZXlkb3duJywgaXRlbVNlbGVjdG9yLCBoYW5kbGVJdGVtS2V5RG93bigkaXRlbUNvbGxlY3Rpb24pKTtcbn07XG4iLCJleHBvcnQgY29uc3QgRk9DVVNBQkxFX0VMRU1FTlRTX1NFTEVDVE9SID0gJ1tocmVmXSwgYnV0dG9uLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgZGV0YWlscywgW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0sIFt0YWJpbmRleF0nO1xuIiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5cbmltcG9ydCB7XG4gICAgYWN0aXZhdGVQbGF5UGF1c2VCdXR0b24sXG4gICAgYW5hbGl6ZVNsaWRlcyxcbiAgICBhcnJvd0FyaWFMYWJsaW5nLFxuICAgIGRvdHNTZXR1cCxcbiAgICBnZXRBY3RpdmVTbGlkZUlkeEFuZFNsaWRlc1F1YW50aXR5LFxuICAgIGhhbmRsZUltYWdlQXNwZWN0UmF0aW8sXG4gICAgaGFuZGxlSW1hZ2VMb2FkLFxuICAgIHJlZnJlc2hGb2N1cyxcbiAgICB1cGRhdGVUZXh0V2l0aExpdmVEYXRhLFxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHNldENhcm91c2VsU3RhdGUgPSAoeyBkZWxlZ2F0ZVRhcmdldCB9LCBjYXJvdXNlbE9iaikgPT4ge1xuICAgIGNvbnN0IGNhcm91c2VsT2JqQ3VycmVudCA9IGNhcm91c2VsT2JqIHx8IGRlbGVnYXRlVGFyZ2V0LnNsaWNrO1xuICAgIGNvbnN0IHsgJHNsaWRlciB9ID0gY2Fyb3VzZWxPYmpDdXJyZW50O1xuXG4gICAgJHNsaWRlci5kYXRhKCdzdGF0ZScsIGdldEFjdGl2ZVNsaWRlSWR4QW5kU2xpZGVzUXVhbnRpdHkoY2Fyb3VzZWxPYmpDdXJyZW50KSk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25Vc2VyQ2Fyb3VzZWxDaGFuZ2UgPSAoeyBkYXRhIH0sIGNvbnRleHQsICRzbGlkZXIpID0+IHtcbiAgICBjb25zdCAkYWN0aXZlU2xpZGVyID0gJHNsaWRlciB8fCBkYXRhO1xuICAgIGNvbnN0ICRwYXJlbnRDb250YWluZXIgPSAkYWN0aXZlU2xpZGVyLmhhc0NsYXNzKCdwcm9kdWN0Vmlldy10aHVtYm5haWxzJykgPyAkYWN0aXZlU2xpZGVyLnBhcmVudCgnLnByb2R1Y3RWaWV3LWltYWdlcycpIDogJGFjdGl2ZVNsaWRlcjtcbiAgICBjb25zdCB7IGFjdGl2ZVNsaWRlSWR4LCBzbGlkZXNRdWFudGl0eSB9ID0gJGFjdGl2ZVNsaWRlci5kYXRhKCdzdGF0ZScpO1xuICAgIGNvbnN0ICRjYXJvdXNlbENvbnRlbnRFbGVtZW50ID0gJCgnW2RhdGEtY2Fyb3VzZWwtY29udGVudC1jaGFuZ2UtbWVzc2FnZV0nLCAkcGFyZW50Q29udGFpbmVyKTtcbiAgICBjb25zdCBjYXJvdXNlbENvbnRlbnRBbm5vdW5jZU1lc3NhZ2UgPSB1cGRhdGVUZXh0V2l0aExpdmVEYXRhKGNvbnRleHQuY2Fyb3VzZWxDb250ZW50QW5ub3VuY2VNZXNzYWdlLCAoYWN0aXZlU2xpZGVJZHggKyAxKSwgc2xpZGVzUXVhbnRpdHkpO1xuXG4gICAgJGNhcm91c2VsQ29udGVudEVsZW1lbnQudGV4dChjYXJvdXNlbENvbnRlbnRBbm5vdW5jZU1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uU2xpY2tDYXJvdXNlbENoYW5nZSA9IChlLCBjYXJvdXNlbE9iaiwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgJGRvdHMsXG4gICAgICAgICRzbGlkZXIsXG4gICAgICAgICRwcmV2QXJyb3csXG4gICAgICAgICRuZXh0QXJyb3csXG4gICAgICAgIG9wdGlvbnM6IHsgaW5maW5pdGUgfSxcbiAgICB9ID0gY2Fyb3VzZWxPYmo7XG5cbiAgICBjb25zdCB7IGFjdGl2ZVNsaWRlSWR4LCBzbGlkZXNRdWFudGl0eSB9ID0gJHNsaWRlci5kYXRhKCdzdGF0ZScpIHx8IGdldEFjdGl2ZVNsaWRlSWR4QW5kU2xpZGVzUXVhbnRpdHkoY2Fyb3VzZWxPYmopO1xuXG4gICAgZG90c1NldHVwKCRkb3RzLCBhY3RpdmVTbGlkZUlkeCwgc2xpZGVzUXVhbnRpdHksIGNvbnRleHQpO1xuICAgIGFycm93QXJpYUxhYmxpbmcoJHByZXZBcnJvdywgJG5leHRBcnJvdywgYWN0aXZlU2xpZGVJZHgsIHNsaWRlc1F1YW50aXR5LCBpbmZpbml0ZSwgY29udGV4dC5jYXJvdXNlbEFycm93QW5kRG90QXJpYUxhYmVsKTtcbiAgICBhbmFsaXplU2xpZGVzKCRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykpO1xuICAgIHJlZnJlc2hGb2N1cygkcHJldkFycm93LCAkbmV4dEFycm93LCAkZG90cywgJHNsaWRlciwgYWN0aXZlU2xpZGVJZHgsIHNsaWRlc1F1YW50aXR5LCBpbmZpbml0ZSk7XG5cbiAgICAkc2xpZGVyLmRhdGEoJ3N0YXRlJywgbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICQoJ1tkYXRhLXNsaWNrXScpLmVhY2goKGlkeCwgY2Fyb3VzZWwpID0+IHtcbiAgICAgICAgLy8gZ2V0dGluZyBlbGVtZW50IHVzaW5nIGZpbmQgdG8gcGFzcyBqZXN0IHRlc3RcbiAgICAgICAgY29uc3QgJGNhcm91c2VsID0gJChkb2N1bWVudCkuZmluZChjYXJvdXNlbCk7XG5cbiAgICAgICAgJGNhcm91c2VsLm9uKCdpbml0IGJyZWFrcG9pbnQgc3dpcGUnLCBzZXRDYXJvdXNlbFN0YXRlKTtcbiAgICAgICAgJGNhcm91c2VsLm9uKCdjbGljaycsICcuc2xpY2stYXJyb3csIC5zbGljay1kb3RzJywgc2V0Q2Fyb3VzZWxTdGF0ZSk7XG5cbiAgICAgICAgJGNhcm91c2VsLm9uKCdpbml0IGJyZWFrcG9pbnQnLCAoZSwgY2Fyb3VzZWxPYmopID0+IGFjdGl2YXRlUGxheVBhdXNlQnV0dG9uKGUsIGNhcm91c2VsT2JqLCBjb250ZXh0KSk7XG4gICAgICAgICRjYXJvdXNlbC5vbignaW5pdCBhZnRlckNoYW5nZScsIChlLCBjYXJvdXNlbE9iaikgPT4gb25TbGlja0Nhcm91c2VsQ2hhbmdlKGUsIGNhcm91c2VsT2JqLCBjb250ZXh0KSk7XG4gICAgICAgICRjYXJvdXNlbC5vbignY2xpY2snLCAnLnNsaWNrLWFycm93LCAuc2xpY2stZG90cycsICRjYXJvdXNlbCwgZSA9PiBvblVzZXJDYXJvdXNlbENoYW5nZShlLCBjb250ZXh0KSk7XG4gICAgICAgICRjYXJvdXNlbC5vbignc3dpcGUnLCAoZSwgY2Fyb3VzZWxPYmopID0+IG9uVXNlckNhcm91c2VsQ2hhbmdlKGUsIGNvbnRleHQsIGNhcm91c2VsT2JqLiRzbGlkZXIpKTtcblxuICAgICAgICBpZiAoJGNhcm91c2VsLmhhc0NsYXNzKCdoZXJvQ2Fyb3VzZWwnKSkge1xuICAgICAgICAgICAgJGNhcm91c2VsLm9uKCdpbml0IGFmdGVyQ2hhbmdlJywgaGFuZGxlSW1hZ2VMb2FkKTtcbiAgICAgICAgICAgICRjYXJvdXNlbC5vbignc3dpcGUnLCBoYW5kbGVJbWFnZUFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgICRjYXJvdXNlbC5vbignY2xpY2snLCAnLnNsaWNrLWFycm93LCAuc2xpY2stZG90cycsIGhhbmRsZUltYWdlQXNwZWN0UmF0aW8pO1xuXG4gICAgICAgICAgICAvLyBBbHRlcm5hdGl2ZSBpbWFnZSBzdHlsaW5nIGZvciBJRSwgd2hpY2ggZG9lc24ndCBzdXBwb3J0IG9iamVjdGZpdFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub2JqZWN0Rml0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICRjYXJvdXNlbC5maW5kKCcuaGVyb0Nhcm91c2VsLXNsaWRlJykuZWFjaCgoaW5kZXgsIHNsaWRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoc2xpZGUpLmFkZENsYXNzKCdjb21wYXQtb2JqZWN0LWZpdCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNNdWx0aXBsZVNsaWRlcyA9ICRjYXJvdXNlbC5jaGlsZHJlbigpLmxlbmd0aCA+IDE7XG4gICAgICAgIGNvbnN0IGN1c3RvbVBhZ2luZyA9IGlzTXVsdGlwbGVTbGlkZXNcbiAgICAgICAgICAgID8gKCkgPT4gKFxuICAgICAgICAgICAgICAgICc8YnV0dG9uIGRhdGEtY2Fyb3VzZWwtZG90IHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICgpID0+IHt9O1xuXG4gICAgICAgICRjYXJvdXNlbC5zbGljayh7XG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogaXNNdWx0aXBsZVNsaWRlcyxcbiAgICAgICAgICAgIGN1c3RvbVBhZ2luZyxcbiAgICAgICAgICAgIGRvdHM6IGlzTXVsdGlwbGVTbGlkZXMsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBQTEFZX0FDVElPTiA9ICdzbGlja1BsYXknO1xuY29uc3QgUEFVU0VfQUNUSU9OID0gJ3NsaWNrUGF1c2UnO1xuY29uc3QgdXBkYXRlQnV0dG9uTGFiZWxzID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNhcm91c2VsUGxheVBhdXNlQnV0dG9uUGxheSxcbiAgICAgICAgY2Fyb3VzZWxQbGF5UGF1c2VCdXR0b25QYXVzZSxcbiAgICAgICAgY2Fyb3VzZWxQbGF5UGF1c2VCdXR0b25BcmlhUGxheSxcbiAgICAgICAgY2Fyb3VzZWxQbGF5UGF1c2VCdXR0b25BcmlhUGF1c2UsXG4gICAgfSA9IGNvbnRleHQ7XG5cbiAgICByZXR1cm4gKCRidXR0b24sIGFjdGlvbikgPT4ge1xuICAgICAgICAkYnV0dG9uXG4gICAgICAgICAgICAudGV4dChhY3Rpb24gPT09IFBMQVlfQUNUSU9OXG4gICAgICAgICAgICAgICAgPyBjYXJvdXNlbFBsYXlQYXVzZUJ1dHRvblBhdXNlIDogY2Fyb3VzZWxQbGF5UGF1c2VCdXR0b25QbGF5KVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtbGFiZWwnLCBhY3Rpb24gPT09IFBMQVlfQUNUSU9OXG4gICAgICAgICAgICAgICAgPyBjYXJvdXNlbFBsYXlQYXVzZUJ1dHRvbkFyaWFQYXVzZSA6IGNhcm91c2VsUGxheVBhdXNlQnV0dG9uQXJpYVBsYXkpO1xuICAgIH07XG59O1xubGV0IHVwZGF0ZUJ1dHRvbkxhYmVsc1dpdGhDb250ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgY2Fyb3VzZWxPYmosIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7ICRzbGlkZXIsICRkb3RzLCBvcHRpb25zOiB7IHNwZWVkIH0gfSA9IGNhcm91c2VsT2JqO1xuICAgIGNvbnN0ICRwbGF5UGF1c2VCdXR0b24gPSAkc2xpZGVyLmZpbmQoJ1tkYXRhLXBsYXktcGF1c2UtYnV0dG9uXScpO1xuXG4gICAgaWYgKCRwbGF5UGF1c2VCdXR0b24ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAvLyBmb3IgY29ycmVjdCBjYXJvdXNlbCBjb250cm9scyBmb2N1cyBvcmRlclxuICAgIGlmICgkZG90cykge1xuICAgICAgICAkcGxheVBhdXNlQnV0dG9uLmluc2VydEJlZm9yZSgkZG90cyk7XG4gICAgfSBlbHNlICRzbGlkZXIuYXBwZW5kKCRwbGF5UGF1c2VCdXR0b24pO1xuXG4gICAgY29uc3QgeyBzbGlkZXNRdWFudGl0eSB9ID0gJHNsaWRlci5kYXRhKCdzdGF0ZScpO1xuICAgICRwbGF5UGF1c2VCdXR0b24uY3NzKCdkaXNwbGF5Jywgc2xpZGVzUXVhbnRpdHkgPiAxID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cbiAgICBpZiAoZS50eXBlID09PSAnaW5pdCcpIHVwZGF0ZUJ1dHRvbkxhYmVsc1dpdGhDb250ZXh0ID0gdXBkYXRlQnV0dG9uTGFiZWxzKGNvbnRleHQpO1xuXG4gICAgaWYgKGUudHlwZSA9PT0gJ2JyZWFrcG9pbnQnKSB7XG4gICAgICAgIHVwZGF0ZUJ1dHRvbkxhYmVsc1dpdGhDb250ZXh0KCRwbGF5UGF1c2VCdXR0b24sIFBMQVlfQUNUSU9OKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9uUGxheVBhdXNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNhcm91c2VsT2JqLnBhdXNlZCA/IFBMQVlfQUNUSU9OIDogUEFVU0VfQUNUSU9OO1xuXG4gICAgICAgICRzbGlkZXIuc2xpY2soYWN0aW9uKTtcbiAgICAgICAgdXBkYXRlQnV0dG9uTGFiZWxzV2l0aENvbnRleHQoJHBsYXlQYXVzZUJ1dHRvbiwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgJHBsYXlQYXVzZUJ1dHRvbi5vbignY2xpY2snLCB0aHJvdHRsZShvblBsYXlQYXVzZUNsaWNrLCBzcGVlZCwgeyB0cmFpbGluZzogZmFsc2UgfSkpO1xufTtcbiIsImltcG9ydCB7IEZPQ1VTQUJMRV9FTEVNRU5UU19TRUxFQ1RPUiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkc2xpZGVzKSA9PiB7XG4gICAgJHNsaWRlcy5lYWNoKChpZHgsIHNsaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0ICRzbGlkZSA9ICQoc2xpZGUpO1xuICAgICAgICBjb25zdCB0YWJJbmRleCA9ICRzbGlkZS5oYXNDbGFzcygnc2xpY2stYWN0aXZlJykgPyAwIDogLTE7XG5cbiAgICAgICAgaWYgKCRzbGlkZS5pcyhGT0NVU0FCTEVfRUxFTUVOVFNfU0VMRUNUT1IpKSAkc2xpZGUuYXR0cigndGFiaW5kZXgnLCB0YWJJbmRleCk7XG5cbiAgICAgICAgJHNsaWRlLmZpbmQoRk9DVVNBQkxFX0VMRU1FTlRTX1NFTEVDVE9SKS5lYWNoKChpbmRleCwgY2hpbGQpID0+IHtcbiAgICAgICAgICAgICQoY2hpbGQpLmF0dHIoJ3RhYmluZGV4JywgdGFiSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgdXBkYXRlVGV4dFdpdGhMaXZlRGF0YSBmcm9tICcuL3VwZGF0ZVRleHRXaXRoTGl2ZURhdGEnO1xuaW1wb3J0IHRvb2x0aXBTZXR1cCBmcm9tICcuL3Rvb2x0aXBTZXR1cCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkcHJldkFycm93LCAkbmV4dEFycm93LCBhY3RpdmVTbGlkZUlkeCwgc2xpZGVzUXVhbnRpdHksIGlzSW5maW5pdGUsIGFyaWFMYWJlbCkgPT4ge1xuICAgIGlmIChzbGlkZXNRdWFudGl0eSA8IDIgfHwgISRwcmV2QXJyb3cgfHwgISRuZXh0QXJyb3cpIHJldHVybjtcblxuICAgIGNvbnN0IGFjdGl2ZVNsaWRlTnVtYmVyID0gYWN0aXZlU2xpZGVJZHggKyAxO1xuXG4gICAgY29uc3QgcHJldlNsaWRlTnVtYmVyID0gYWN0aXZlU2xpZGVJZHggPT09IDAgPyBzbGlkZXNRdWFudGl0eSA6IGFjdGl2ZVNsaWRlTnVtYmVyIC0gMTtcbiAgICBjb25zdCBhcnJvd0xlZnRUZXh0ID0gdXBkYXRlVGV4dFdpdGhMaXZlRGF0YShhcmlhTGFiZWwsIHByZXZTbGlkZU51bWJlciwgc2xpZGVzUXVhbnRpdHkpO1xuXG4gICAgJHByZXZBcnJvdy5hdHRyKHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBhcnJvd0xlZnRUZXh0LFxuICAgICAgICB0YWJpbmRleDogIWlzSW5maW5pdGUgJiYgYWN0aXZlU2xpZGVJZHggPT09IDAgPyAtMSA6IDAsXG4gICAgfSk7XG4gICAgdG9vbHRpcFNldHVwKCRwcmV2QXJyb3cpO1xuXG4gICAgY29uc3QgbmV4dFNsaWRlTnVtYmVyID0gYWN0aXZlU2xpZGVJZHggPT09IHNsaWRlc1F1YW50aXR5IC0gMSA/IDEgOiBhY3RpdmVTbGlkZU51bWJlciArIDE7XG4gICAgY29uc3QgYXJyb3dSaWdodFRleHQgPSB1cGRhdGVUZXh0V2l0aExpdmVEYXRhKGFyaWFMYWJlbCwgbmV4dFNsaWRlTnVtYmVyLCBzbGlkZXNRdWFudGl0eSk7XG5cbiAgICAkbmV4dEFycm93LmF0dHIoe1xuICAgICAgICAnYXJpYS1sYWJlbCc6IGFycm93UmlnaHRUZXh0LFxuICAgICAgICB0YWJpbmRleDogIWlzSW5maW5pdGUgJiYgYWN0aXZlU2xpZGVJZHggPT09IHNsaWRlc1F1YW50aXR5IC0gMSA/IC0xIDogMCxcbiAgICB9KTtcbiAgICB0b29sdGlwU2V0dXAoJG5leHRBcnJvdyk7XG59O1xuIiwiaW1wb3J0IHVwZGF0ZVRleHRXaXRoTGl2ZURhdGEgZnJvbSAnLi91cGRhdGVUZXh0V2l0aExpdmVEYXRhJztcbmltcG9ydCB0b29sdGlwU2V0dXAgZnJvbSAnLi90b29sdGlwU2V0dXAnO1xuXG5leHBvcnQgZGVmYXVsdCAoJGRvdHMsIGFjdGl2ZVNsaWRlSWR4LCBzbGlkZXNRdWFudGl0eSwgeyBjYXJvdXNlbEFycm93QW5kRG90QXJpYUxhYmVsLCBjYXJvdXNlbEFjdGl2ZURvdEFyaWFMYWJlbCB9KSA9PiB7XG4gICAgaWYgKCEkZG90cykgcmV0dXJuO1xuXG4gICAgaWYgKHNsaWRlc1F1YW50aXR5IDwgMikge1xuICAgICAgICAkZG90cy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJGRvdHMuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAkZG90cy5jaGlsZHJlbigpLmVhY2goKGlkeCwgZG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdExhYmVsVGV4dCA9IHVwZGF0ZVRleHRXaXRoTGl2ZURhdGEoY2Fyb3VzZWxBcnJvd0FuZERvdEFyaWFMYWJlbCwgaWR4ICsgMSwgc2xpZGVzUXVhbnRpdHkpO1xuICAgICAgICBjb25zdCBkb3RTbGlkZVN0YXR1c1RleHQgPSBpZHggPT09IGFjdGl2ZVNsaWRlSWR4ID8gYCwgJHtjYXJvdXNlbEFjdGl2ZURvdEFyaWFMYWJlbH1gIDogJyc7XG4gICAgICAgIGNvbnN0IGRvdEFyaWFMYWJlbCA9IGAke2RvdExhYmVsVGV4dH0ke2RvdFNsaWRlU3RhdHVzVGV4dH1gO1xuICAgICAgICBjb25zdCAkZG90QnV0dG9uID0gJChkb3QpLmZpbmQoJ1tkYXRhLWNhcm91c2VsLWRvdF0nKTtcblxuICAgICAgICB0b29sdGlwU2V0dXAoJGRvdEJ1dHRvbi5hdHRyKCdhcmlhLWxhYmVsJywgZG90QXJpYUxhYmVsKSk7XG4gICAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgc2xpZGVDb3VudCwgJHNsaWRlcywgb3B0aW9uczogeyBzbGlkZXNUb1Nob3csIHNsaWRlc1RvU2Nyb2xsIH0gfSkgPT4ge1xuICAgIGNvbnN0IGxhc3RWaXNpYmxlSWR4ID0gJHNsaWRlcy5nZXQoKS5yZWR1Y2UoKGFjYywgY3VyciwgaWR4KSA9PiB7XG4gICAgICAgIGlmICgkKGN1cnIpLmhhc0NsYXNzKCdzbGljay1hY3RpdmUnKSkgcmV0dXJuIGlkeDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAtMSk7XG5cbiAgICBjb25zdCBhY3RpdmVTbGlkZUlkeCA9IGxhc3RWaXNpYmxlSWR4IDwgc2xpZGVzVG9TaG93XG4gICAgICAgID8gMFxuICAgICAgICA6IE1hdGguY2VpbCgobGFzdFZpc2libGVJZHggKyAxIC0gc2xpZGVzVG9TaG93KSAvIHNsaWRlc1RvU2Nyb2xsKTtcblxuICAgIGxldCBzbGlkZXNRdWFudGl0eTtcbiAgICBpZiAoc2xpZGVDb3VudCA9PT0gMCkge1xuICAgICAgICBzbGlkZXNRdWFudGl0eSA9IDA7XG4gICAgfSBlbHNlIGlmIChzbGlkZUNvdW50IDw9IHNsaWRlc1RvU2hvdykge1xuICAgICAgICBzbGlkZXNRdWFudGl0eSA9IDE7XG4gICAgfSBlbHNlIHNsaWRlc1F1YW50aXR5ID0gTWF0aC5jZWlsKChzbGlkZUNvdW50IC0gc2xpZGVzVG9TaG93KSAvIHNsaWRlc1RvU2Nyb2xsKSArIDE7XG5cbiAgICAvLyBGWUkgLSBvbmUgc2xpZGUgY2FuIGNvbnRhaW4gc2V2ZXJhbCBjYXJkIGl0ZW1zIGZvciBwcm9kdWN0IGNhcm91c2VsXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZlU2xpZGVJZHgsXG4gICAgICAgIHNsaWRlc1F1YW50aXR5LFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgJHNsaWRlciB9LCBpc0FuYWx5emVkRGF0YUF0dHIpID0+IHtcbiAgICBjb25zdCAkYWN0aXZlU2xpZGUgPSAkc2xpZGVyLmZpbmQoJy5zbGljay1jdXJyZW50Jyk7XG4gICAgY29uc3QgaXNBbmFseXplZFNsaWRlID0gJGFjdGl2ZVNsaWRlLmRhdGEoaXNBbmFseXplZERhdGFBdHRyKTtcblxuICAgIGlmIChpc0FuYWx5emVkU2xpZGUpIHJldHVybiB7IGlzQW5hbHl6ZWRTbGlkZSB9O1xuXG4gICAgY29uc3QgJGFjdGl2ZVNsaWRlSW1nID0gJGFjdGl2ZVNsaWRlLmZpbmQoJy5oZXJvQ2Fyb3VzZWwtaW1hZ2UnKTtcbiAgICBjb25zdCBhY3RpdmVTbGlkZUltZ05vZGUgPSAkYWN0aXZlU2xpZGVJbWdbMF07XG4gICAgY29uc3QgJGFjdGl2ZVNsaWRlQW5kQ2xvbmVzID0gJHNsaWRlci5maW5kKGBbZGF0YS1oZXJvLXNsaWRlPSR7JGFjdGl2ZVNsaWRlLmRhdGEoJ2hlcm8tc2xpZGUnKX1dYCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAkc2xpZGVyLFxuICAgICAgICAkYWN0aXZlU2xpZGUsXG4gICAgICAgICRhY3RpdmVTbGlkZUltZyxcbiAgICAgICAgYWN0aXZlU2xpZGVJbWdOb2RlLFxuICAgICAgICAkYWN0aXZlU2xpZGVBbmRDbG9uZXMsXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgZ2V0QWN0aXZlU2xpZGVJbmZvIGZyb20gJy4vZ2V0QWN0aXZlU2xpZGVJbmZvJztcblxuY29uc3QgSU1BR0VfQ0xBU1NFUyA9IHtcbiAgICB2ZXJ0aWNhbDogJ2lzLXZlcnRpY2FsLWltYWdlLXR5cGUnLFxuICAgIHNxdWFyZTogJ2lzLXNxdWFyZS1pbWFnZS10eXBlJyxcbn07XG5jb25zdCBJU19BTkFMWVpFRF9EQVRBX0FUVFIgPSAnaW1hZ2UtcmF0aW8tYW5hbHl6ZWQnO1xuXG5jb25zdCBkZWZpbmVBc3BlY3RSYXRpb0NsYXNzID0gKGltYWdlQXNwZWN0UmF0aW8pID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGltYWdlQXNwZWN0UmF0aW8gPiAwLjggJiYgaW1hZ2VBc3BlY3RSYXRpbyA8PSAxLjI6XG4gICAgICAgIHJldHVybiBJTUFHRV9DTEFTU0VTLnNxdWFyZTtcbiAgICBjYXNlIGltYWdlQXNwZWN0UmF0aW8gPiAxLjI6XG4gICAgICAgIHJldHVybiBJTUFHRV9DTEFTU0VTLnZlcnRpY2FsO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59O1xuXG5jb25zdCBzZXRBc3BlY3RSYXRpb0NsYXNzID0gKGltYWdlTm9kZSwgJHNsaWRlcykgPT4ge1xuICAgIGlmIChpbWFnZU5vZGUubmF0dXJhbEhlaWdodCA8PSAxKSByZXR1cm47XG5cbiAgICBjb25zdCBpbWFnZUFzcGVjdFJhdGlvID0gaW1hZ2VOb2RlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZU5vZGUubmF0dXJhbFdpZHRoO1xuICAgICRzbGlkZXMuYWRkQ2xhc3MoZGVmaW5lQXNwZWN0UmF0aW9DbGFzcyhpbWFnZUFzcGVjdFJhdGlvKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoeyBkZWxlZ2F0ZVRhcmdldCB9LCBjYXJvdXNlbE9iaikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaXNBbmFseXplZFNsaWRlLFxuICAgICAgICAkYWN0aXZlU2xpZGUsXG4gICAgICAgICRhY3RpdmVTbGlkZUltZyxcbiAgICAgICAgYWN0aXZlU2xpZGVJbWdOb2RlLFxuICAgICAgICAkYWN0aXZlU2xpZGVBbmRDbG9uZXMsXG4gICAgfSA9IGdldEFjdGl2ZVNsaWRlSW5mbyhjYXJvdXNlbE9iaiB8fCBkZWxlZ2F0ZVRhcmdldC5zbGljaywgSVNfQU5BTFlaRURfREFUQV9BVFRSKTtcblxuICAgIGlmIChpc0FuYWx5emVkU2xpZGUpIHJldHVybjtcblxuICAgICRhY3RpdmVTbGlkZUFuZENsb25lcy5kYXRhKElTX0FOQUxZWkVEX0RBVEFfQVRUUiwgdHJ1ZSk7XG5cbiAgICBpZiAoJGFjdGl2ZVNsaWRlLmZpbmQoJy5oZXJvQ2Fyb3VzZWwtY29udGVudCcpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaWYgKGFjdGl2ZVNsaWRlSW1nTm9kZS5jb21wbGV0ZSkge1xuICAgICAgICBpZiAoYWN0aXZlU2xpZGVJbWdOb2RlLm5hdHVyYWxIZWlnaHQgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgYmFzZTY0IGltYWdlIGZyb20gc3Jjc2V0IHdhcyBsb2FkZWRcbiAgICAgICAgICAgICRhY3RpdmVTbGlkZUltZy5vbignbG9hZCcsICgpID0+IHNldEFzcGVjdFJhdGlvQ2xhc3MoYWN0aXZlU2xpZGVJbWdOb2RlLCAkYWN0aXZlU2xpZGVBbmRDbG9uZXMpKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVTbGlkZUltZ05vZGUubmF0dXJhbEhlaWdodCA+IDEpIHtcbiAgICAgICAgICAgIHNldEFzcGVjdFJhdGlvQ2xhc3MoYWN0aXZlU2xpZGVJbWdOb2RlLCAkYWN0aXZlU2xpZGVBbmRDbG9uZXMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlICRhY3RpdmVTbGlkZUltZy5vbignbG9hZCcsICgpID0+IHNldEFzcGVjdFJhdGlvQ2xhc3MoYWN0aXZlU2xpZGVJbWdOb2RlLCAkYWN0aXZlU2xpZGVBbmRDbG9uZXMpKTtcbn07XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4uLy4uL3V0aWxzL2llLWhlbHBlcnMnO1xuaW1wb3J0IGdldEFjdGl2ZVNsaWRlSW5mbyBmcm9tICcuL2dldEFjdGl2ZVNsaWRlSW5mbyc7XG5cbmNvbnN0IElNQUdFX0VSUk9SX0NMQVNTID0gJ2lzLWltYWdlLWVycm9yJztcbmNvbnN0IElTX0FOQUxZWkVEX0RBVEFfQVRUUiA9ICdpbWFnZS1sb2FkLWFuYWx5emVkJztcblxuY29uc3QgZ2VuZXJhdGVJbWFnZSA9ICgkaW1hZ2UsICRzbGlkZXMpID0+IHtcbiAgICAkKCc8aW1nIC8+JylcbiAgICAgICAgLm9uKCdlcnJvcicsICgpID0+ICRzbGlkZXMuYWRkQ2xhc3MoSU1BR0VfRVJST1JfQ0xBU1MpKVxuICAgICAgICAuYXR0cignc3JjJywgJGltYWdlLmF0dHIoJ3NyYycpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChlLCBjYXJvdXNlbE9iaikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaXNBbmFseXplZFNsaWRlLFxuICAgICAgICAkYWN0aXZlU2xpZGVJbWcsXG4gICAgICAgIGFjdGl2ZVNsaWRlSW1nTm9kZSxcbiAgICAgICAgJGFjdGl2ZVNsaWRlQW5kQ2xvbmVzLFxuICAgIH0gPSBnZXRBY3RpdmVTbGlkZUluZm8oY2Fyb3VzZWxPYmosIElTX0FOQUxZWkVEX0RBVEFfQVRUUik7XG5cbiAgICBpZiAoaXNBbmFseXplZFNsaWRlKSByZXR1cm47XG5cbiAgICAkYWN0aXZlU2xpZGVBbmRDbG9uZXMuZGF0YShJU19BTkFMWVpFRF9EQVRBX0FUVFIsIHRydWUpO1xuXG4gICAgaWYgKGFjdGl2ZVNsaWRlSW1nTm9kZS5jb21wbGV0ZSkge1xuICAgICAgICBpZiAoYWN0aXZlU2xpZGVJbWdOb2RlLm5hdHVyYWxIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICRhY3RpdmVTbGlkZUFuZENsb25lcy5hZGRDbGFzcyhJTUFHRV9FUlJPUl9DTEFTUyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlU2xpZGVJbWdOb2RlLm5hdHVyYWxIZWlnaHQgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgYmFzZTY0IGltYWdlIGZyb20gc3Jjc2V0IHdhcyBsb2FkZWRcbiAgICAgICAgICAgICRhY3RpdmVTbGlkZUltZy5vbignZXJyb3InLCAoKSA9PiAkYWN0aXZlU2xpZGVBbmRDbG9uZXMuYWRkQ2xhc3MoSU1BR0VfRVJST1JfQ0xBU1MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoISRhY3RpdmVTbGlkZUltZy5hdHRyKCdzcmMnKSkge1xuICAgICAgICAkYWN0aXZlU2xpZGVBbmRDbG9uZXMuYWRkQ2xhc3MoSU1BR0VfRVJST1JfQ0xBU1MpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgIGdlbmVyYXRlSW1hZ2UoJGFjdGl2ZVNsaWRlSW1nLCAkYWN0aXZlU2xpZGVBbmRDbG9uZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJGFjdGl2ZVNsaWRlSW1nLm9uKCdlcnJvcicsICgpID0+ICRhY3RpdmVTbGlkZUFuZENsb25lcy5hZGRDbGFzcyhJTUFHRV9FUlJPUl9DTEFTUykpO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYWN0aXZhdGVQbGF5UGF1c2VCdXR0b24gfSBmcm9tICcuL2FjdGl2YXRlUGxheVBhdXNlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5hbGl6ZVNsaWRlcyB9IGZyb20gJy4vYW5hbGl6ZVNsaWRlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93QXJpYUxhYmxpbmcgfSBmcm9tICcuL2Fycm93QXJpYUxhYmxpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb3RzU2V0dXAgfSBmcm9tICcuL2RvdHNTZXR1cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldEFjdGl2ZVNsaWRlSWR4QW5kU2xpZGVzUXVhbnRpdHkgfSBmcm9tICcuL2dldEFjdGl2ZVNsaWRlSWR4QW5kU2xpZGVzUXVhbnRpdHknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYW5kbGVJbWFnZUFzcGVjdFJhdGlvIH0gZnJvbSAnLi9oYW5kbGVJbWFnZUFzcGVjdFJhdGlvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFuZGxlSW1hZ2VMb2FkIH0gZnJvbSAnLi9oYW5kbGVJbWFnZUxvYWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWZyZXNoRm9jdXMgfSBmcm9tICcuL3JlZnJlc2hGb2N1cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVwZGF0ZVRleHRXaXRoTGl2ZURhdGEgfSBmcm9tICcuL3VwZGF0ZVRleHRXaXRoTGl2ZURhdGEnO1xuIiwiaW1wb3J0IHsgRk9DVVNBQkxFX0VMRU1FTlRTX1NFTEVDVE9SIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgKCRwcmV2QXJyb3csICRuZXh0QXJyb3csICRkb3RzLCAkc2xpZGVyLCBhY3RpdmVTbGlkZUlkeCwgc2xpZGVzUXVhbnRpdHksIGlzSW5maW5pdGUpID0+IHtcbiAgICBpZiAoaXNJbmZpbml0ZSB8fCAhJHByZXZBcnJvdyB8fCAhJG5leHRBcnJvdykgcmV0dXJuO1xuXG4gICAgaWYgKGFjdGl2ZVNsaWRlSWR4ID09PSAwICYmICRwcmV2QXJyb3cuaXMoJzpmb2N1cycpKSB7XG4gICAgICAgICRuZXh0QXJyb3cuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNsaWRlSWR4ID09PSBzbGlkZXNRdWFudGl0eSAtIDEgJiYgJG5leHRBcnJvdy5pcygnOmZvY3VzJykpIHtcbiAgICAgICAgaWYgKCRkb3RzKSB7XG4gICAgICAgICAgICAkZG90cy5jaGlsZHJlbigpLmZpcnN0KCkuZmluZCgnW2RhdGEtY2Fyb3VzZWwtZG90XScpLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkZmlyc3RBY3RpdmVTbGlkZSA9ICRzbGlkZXIuZmluZCgnLnNsaWNrLWFjdGl2ZScpLmZpcnN0KCk7XG5cbiAgICAgICAgaWYgKCRmaXJzdEFjdGl2ZVNsaWRlLmlzKEZPQ1VTQUJMRV9FTEVNRU5UU19TRUxFQ1RPUikpIHtcbiAgICAgICAgICAgICRmaXJzdEFjdGl2ZVNsaWRlLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSAkZmlyc3RBY3RpdmVTbGlkZS5maW5kKEZPQ1VTQUJMRV9FTEVNRU5UU19TRUxFQ1RPUikuZmlyc3QoKS5mb2N1cygpO1xuICAgIH1cbn07XG4iLCJjb25zdCBUT09MVElQX0RBVEFfU0VMRUNUT1IgPSAnZGF0YS1jYXJvdXNlbC10b29sdGlwJztcbmNvbnN0IFRPT0xUSVBfQ0xBU1MgPSAnY2Fyb3VzZWwtdG9vbHRpcCc7XG5jb25zdCBUT09MVElQX05PREUgPSBgPHNwYW4gJHtUT09MVElQX0RBVEFfU0VMRUNUT1J9IGNsYXNzPVwiJHtUT09MVElQX0NMQVNTfVwiPjwvc3Bhbj5gO1xuXG5leHBvcnQgZGVmYXVsdCAoJG5vZGUpID0+IHtcbiAgICBjb25zdCAkZXhpc3RlZFRvb2x0aXAgPSAkbm9kZS5maW5kKGBbJHtUT09MVElQX0RBVEFfU0VMRUNUT1J9XWApO1xuICAgIGlmICgkZXhpc3RlZFRvb2x0aXAubGVuZ3RoKSB7XG4gICAgICAgICRleGlzdGVkVG9vbHRpcC5hdHRyKCdhcmlhLWxhYmVsJywgJG5vZGUuYXR0cignYXJpYS1sYWJlbCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQoVE9PTFRJUF9OT0RFKS5hdHRyKCdhcmlhLWxhYmVsJywgJG5vZGUuYXR0cignYXJpYS1sYWJlbCcpKTtcbiAgICAgICAgJG5vZGUuYXBwZW5kKCR0b29sdGlwKTtcbiAgICB9XG59O1xuIiwiY29uc3QgU0xJREVfTlVNQkVSID0gJ1tTTElERV9OVU1CRVJdJztcbmNvbnN0IFNMSURFU19RVUFOVElUWSA9ICdbU0xJREVTX1FVQU5USVRZXSc7XG5cbmV4cG9ydCBkZWZhdWx0ICh0ZXh0Rm9yQ2hhbmdlLCBzbGlkZU51bWJlciwgc2xpZGVzUXVhbnRpdHkpID0+IChcbiAgICB0ZXh0Rm9yQ2hhbmdlXG4gICAgICAgIC5yZXBsYWNlKFNMSURFX05VTUJFUiwgc2xpZGVOdW1iZXIpXG4gICAgICAgIC5yZXBsYWNlKFNMSURFU19RVUFOVElUWSwgc2xpZGVzUXVhbnRpdHkpXG4pO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi9tZWRpYS1xdWVyeS1saXN0JztcblxuY29uc3QgUExVR0lOX0tFWSA9ICdjb2xsYXBzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzaWJsZUV2ZW50cyA9IHtcbiAgICBvcGVuOiAnb3Blbi5jb2xsYXBzaWJsZScsXG4gICAgY2xvc2U6ICdjbG9zZS5jb2xsYXBzaWJsZScsXG4gICAgdG9nZ2xlOiAndG9nZ2xlLmNvbGxhcHNpYmxlJyxcbiAgICBjbGljazogJ2NsaWNrLmNvbGxhcHNpYmxlJyxcbn07XG5cbmNvbnN0IENvbGxhcHNpYmxlU3RhdGUgPSB7XG4gICAgY2xvc2VkOiAnY2xvc2VkJyxcbiAgICBvcGVuOiAnb3BlbicsXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kSGFzaChpZCkge1xuICAgIGlmIChpZCAmJiBpZC5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHJldHVybiBgIyR7aWR9YDtcbn1cblxuZnVuY3Rpb24gb3B0aW9uc0Zyb21EYXRhKCRlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzYWJsZWRCcmVha3BvaW50OiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RGlzYWJsZWRCcmVha3BvaW50YCksXG4gICAgICAgIGRpc2FibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1EaXNhYmxlZFN0YXRlYCksXG4gICAgICAgIGVuYWJsZWRTdGF0ZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfUVuYWJsZWRTdGF0ZWApLFxuICAgICAgICBvcGVuQ2xhc3NOYW1lOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9T3BlbkNsYXNzTmFtZWApLFxuICAgIH07XG59XG5cbi8qKlxuICogQ29sbGFwc2UvRXhwYW5kIHRvZ2dsZVxuICovXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkdG9nZ2xlIC0gVHJpZ2dlciBidXR0b25cbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIENvbnRlbnQgdG8gY29sbGFwc2UgLyBleHBhbmRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuJGNvbnRleHRdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRpc2FibGVkQnJlYWtwb2ludF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRTdGF0ZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZW5hYmxlZFN0YXRlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5vcGVuQ2xhc3NOYW1lXVxuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiA8YnV0dG9uIGlkPVwiI21vcmVcIj5Db2xsYXBzZTwvYnV0dG9uPlxuICAgICAqIDxkaXYgaWQ9XCJjb250ZW50XCI+Li4uPC9kaXY+XG4gICAgICpcbiAgICAgKiBuZXcgQ29sbGFwc2libGUoJCgnI21vcmUnKSwgJCgnI2NvbnRlbnQnKSk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoJHRvZ2dsZSwgJHRhcmdldCwge1xuICAgICAgICBkaXNhYmxlZEJyZWFrcG9pbnQsXG4gICAgICAgIGRpc2FibGVkU3RhdGUsXG4gICAgICAgIGVuYWJsZWRTdGF0ZSxcbiAgICAgICAgb3BlbkNsYXNzTmFtZSA9ICdpcy1vcGVuJyxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlID0gJHRvZ2dsZTtcbiAgICAgICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9ICR0YXJnZXQuYXR0cignaWQnKTtcbiAgICAgICAgdGhpcy5vcGVuQ2xhc3NOYW1lID0gb3BlbkNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFN0YXRlID0gZGlzYWJsZWRTdGF0ZTtcbiAgICAgICAgdGhpcy5lbmFibGVkU3RhdGUgPSBlbmFibGVkU3RhdGU7XG5cbiAgICAgICAgaWYgKGRpc2FibGVkQnJlYWtwb2ludCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ID0gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KGRpc2FibGVkQnJlYWtwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0Lm1hdGNoZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdXRvLWJpbmRcbiAgICAgICAgdGhpcy5vbkNsaWNrZWQgPSB0aGlzLm9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoID0gdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIEFzc2lnbiBET00gYXR0cmlidXRlc1xuICAgICAgICB0aGlzLiR0YXJnZXQuYXR0cignYXJpYS1oaWRkZW4nLCB0aGlzLmlzQ29sbGFwc2VkKTtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAuYXR0cignYXJpYS1sYWJlbCcsIHRoaXMuX2dldFRvZ2dsZUFyaWFMYWJlbFRleHQoJHRvZ2dsZSkpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1jb250cm9scycsICR0YXJnZXQuYXR0cignaWQnKSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc09wZW4pO1xuXG4gICAgICAgIC8vIExpc3RlblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNDb2xsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0YXJnZXQuaXMoJzpoaWRkZW4nKSAmJiAhdGhpcy4kdGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCeVN0YXRlKHRoaXMuZGlzYWJsZWRTdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5lbmFibGVkU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgX2dldFRvZ2dsZUFyaWFMYWJlbFRleHQoJHRvZ2dsZSkge1xuICAgICAgICBjb25zdCAkdGV4dFRvZ2dsZUNoaWxkcmVuID0gJHRvZ2dsZS5jaGlsZHJlbigpLmZpbHRlcigoX18sIGNoaWxkKSA9PiAkKGNoaWxkKS50ZXh0KCkudHJpbSgpKTtcbiAgICAgICAgY29uc3QgJGFyaWFMYWJlbFRhcmdldCA9ICR0ZXh0VG9nZ2xlQ2hpbGRyZW4ubGVuZ3RoID8gJHRleHRUb2dnbGVDaGlsZHJlbi5maXJzdCgpIDogJHRvZ2dsZTtcblxuICAgICAgICByZXR1cm4gJCgkYXJpYUxhYmVsVGFyZ2V0KS50ZXh0KCkudHJpbSgpO1xuICAgIH1cblxuICAgIG9wZW4oeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5vcGVuLCBbdGhpc10pO1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMudG9nZ2xlLCBbdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbG9zZSwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQnlTdGF0ZShzdGF0ZSwgLi4uYXJncykge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5vcGVuOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3Blbi5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUuY2xvc2VkOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDb2xsYXBzaWJsZShjb2xsYXBzaWJsZUluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiAkLmNvbnRhaW5zKHRoaXMuJHRhcmdldC5nZXQoMCksIGNvbGxhcHNpYmxlSW5zdGFuY2UuJHRhcmdldC5nZXQoMCkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vbihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vZmYoQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYodGhpcy5vcGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKG1lZGlhKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBtZWRpYS5tYXRjaGVzO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGNvbnN0cnVjdGluZyBDb2xsYXBzaWJsZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcGFyYW0ge09iamVjdH0gW292ZXJyaWRlT3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3ZlcnJpZGVPcHRpb25zLiRjb250ZXh0XVxuICogQHBhcmFtIHtTdHJpbmd9IFtvdmVycmlkZU9wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxuICogQHBhcmFtIHtPYmplY3R9IFtvdmVycmlkZU9wdGlvbnMuZGlzYWJsZWRTdGF0ZV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3ZlcnJpZGVPcHRpb25zLmVuYWJsZWRTdGF0ZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3ZlcnJpZGVPcHRpb25zLm9wZW5DbGFzc05hbWVdXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgQ29sbGFwc2libGUgaW5zdGFuY2VzXG4gKlxuICogQGV4YW1wbGVcbiAqIDxhIGhyZWY9XCIjY29udGVudFwiIGRhdGEtY29sbGFwc2libGU+Q29sbGFwc2U8L2E+XG4gKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICpcbiAqIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xsYXBzaWJsZUZhY3Rvcnkoc2VsZWN0b3IgPSBgW2RhdGEtJHtQTFVHSU5fS0VZfV1gLCBvdmVycmlkZU9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRjb2xsYXBzaWJsZXMgPSAkKHNlbGVjdG9yLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRjb2xsYXBzaWJsZXMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtQTFVHSU5fS0VZfUluc3RhbmNlYDtcbiAgICAgICAgY29uc3QgY2FjaGVkQ29sbGFwc2libGUgPSAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRDb2xsYXBzaWJsZSBpbnN0YW5jZW9mIENvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ29sbGFwc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHByZXBlbmRIYXNoKCR0b2dnbGUuZGF0YShQTFVHSU5fS0VZKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5kYXRhKGAke1BMVUdJTl9LRVl9VGFyZ2V0YCkgfHxcbiAgICAgICAgICAgICR0b2dnbGUuYXR0cignaHJlZicpKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IF8uZXh0ZW5kKG9wdGlvbnNGcm9tRGF0YSgkdG9nZ2xlKSwgb3ZlcnJpZGVPcHRpb25zKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSBuZXcgQ29sbGFwc2libGUoJHRvZ2dsZSwgJCh0YXJnZXRJZCwgb3ZlcnJpZGVPcHRpb25zLiRjb250ZXh0KSwgb3B0aW9ucyk7XG5cbiAgICAgICAgJHRvZ2dsZS5kYXRhKGluc3RhbmNlS2V5LCBjb2xsYXBzaWJsZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxhcHNpYmxlO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiIsIi8qXG4gKiBSZW1lbWJlciB0byB1cGRhdGUgL2Fzc2V0cy9zY3NzL3NldHRpbmdzL2dsb2JhbC9zY3JlZW5zaXplcy9zY3JlZW5zaXplcy5zY3NzXG4gKiBpZiB5b3UgZGVjaWRlIHRvIGNoYW5nZSBicmVha3BvaW50IHZhbHVlc1xuICovXG5jb25zdCBicmVha3BvaW50U2l6ZXMgPSB7XG4gICAgeGxhcmdlOiAxNDQxLFxuICAgIGxhcmdlOiAxMjgxLFxuICAgIG1lZGl1bTogMTAyNSxcbiAgICBzbWFsbDogNzY5LFxuICAgIHhzbWFsbDogNDgxLFxufTtcblxuLyoqXG4gKiBDcmVhdGUgTWVkaWFRdWVyeUxpc3QgdXNpbmcgYnJlYWtwb2ludCBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJlYWtwb2ludE5hbWVcbiAqIEByZXR1cm4ge01lZGlhUXVlcnlMaXN0fG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lZGlhUXVlcnlMaXN0RmFjdG9yeShicmVha3BvaW50TmFtZSkge1xuICAgIGlmICghYnJlYWtwb2ludE5hbWUgfHwgIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBicmVha3BvaW50U2l6ZXNbYnJlYWtwb2ludE5hbWVdO1xuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBgKG1pbi13aWR0aDogJHticmVha3BvaW50fXB4KWA7XG4gICAgY29uc3QgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcblxuICAgIHJldHVybiBtZWRpYVF1ZXJ5TGlzdDtcbn1cbiIsImltcG9ydCBXaXNobGlzdCBmcm9tICcuLi93aXNobGlzdCc7XG5pbXBvcnQgeyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9hcmlhJztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc051bWJlciwgZmxvb3IgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxuICAgIElOUFVUX1RFWFQ6ICdpbnB1dC10ZXh0JyxcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIERBVEU6ICdkYXRlJyxcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXG4gICAgU0VUX1JFQ1RBTkdMRTogJ3NldC1yZWN0YW5nbGUnLFxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcbiAgICBQUk9EVUNUX0xJU1Q6ICdwcm9kdWN0LWxpc3QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbkNoYW5nZURlY29yYXRvcihhcmVEZWZhdWx0T3Rpb25zU2V0KSB7XG4gICAgcmV0dXJuIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICBpZiAoYXJlRGVmYXVsdE90aW9uc1NldCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJykuZWFjaCgoX18sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFsdWUsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YXJpYW50RG9tTm9kZSwgdmFyaWFudFR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TRVRfUkFESU86XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNXQVRDSDoge1xuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG5cbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGZyYWdtZW50IGlkZW50aWZpZXIgaW4gVVJMIHJlcXVlc3RpbmcgYSBzcGVjaWZpYyB0YWJcbiAgICAgKi9cbiAgICBnZXRUYWJSZXF1ZXN0cygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyN0YWItJykgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKCcudGFicycpLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJDb250ZW50ID0gJChgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKTtcblxuICAgICAgICAgICAgaWYgKCRhY3RpdmVUYWIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICRhY3RpdmVUYWIuZmluZCgnLnRhYicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJHRhYkNvbnRlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkYmRzcERhdGE6ICQoJyNiZHNwLWRhdGEnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHByaWNlV2l0aFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHByaWNlV2l0aG91dFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0OiAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXG4gICAgICAgICAgICBzdG9jazoge1xuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBjb25zdCBicmVhZENydW1icyA9ICQoJy5icmVhZGNydW1iLmlzLWFjdGl2ZScpO1xuICAgICAgICBjb25zdCBicmVhZE1vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwoYnJlYWRDcnVtYnMpO1xuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGRhdGEud2VpZ2h0KSkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICBicmVhZE1vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcbiAgICAgICAgaWYgKHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmxlbmd0aCAmJiBpc051bWJlcihkYXRhLnN0b2NrKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydFdyYXBwZXIuaXMoJzpoaWRkZW4nKSAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGNvbnN0IGJkc3BQZXJjZW50YWdlID0gdmlld01vZGVsLiRiZHNwRGF0YS5kYXRhKCdiZHNwLXBlcmNlbnRhZ2Utb2ZmJykgfHwgMDtcbiAgICAgICAgY29uc3QgaGFzQmRzcFNhbGUgPSBiZHNwUGVyY2VudGFnZSAhPT0gMDtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJkc3BBbW91bnRPZmYgPSBwcmljZS53aXRob3V0X3RheC52YWx1ZSAqIChiZHNwUGVyY2VudGFnZSAvIDEwMClcbiAgICAgICAgICAgIGxldCB1cGRhdGVkUHJpY2U7XG5cbiAgICAgICAgICAgIGlmICghaGFzQmRzcFNhbGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICAgICAgOiBwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc2NvdW50UHJpY2UgPSBmbG9vcihwcmljZS53aXRob3V0X3RheC52YWx1ZSAtIGJkc3BBbW91bnRPZmYsIDIpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVkUHJpY2UgPSBgJCR7ZGlzY291bnRQcmljZX1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4ICYmICFoYXNCZHNwU2FsZSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCAmJiAhaGFzQmRzcFNhbGUpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQmRzcFNhbGUpe1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5leHBvcnQgY29uc3QgY29udmVydEludG9BcnJheSA9IGNvbGxlY3Rpb24gPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29sbGVjdGlvbik7XG4iLCJjb25zdCBjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyA9ICh3aXNobGlzdFVybCwgLi4ucGFnaW5hdGlvbkl0ZW1zKSA9PiAkLmVhY2gocGFnaW5hdGlvbkl0ZW1zLCAoXywgJGl0ZW0pID0+IHtcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XG5cbiAgICBpZiAoJGl0ZW0ubGVuZ3RoICYmICFwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJykuaW5jbHVkZXMoJ3BhZ2U9JykpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicsIGAke3dpc2hsaXN0VXJsfXBhZ2U9JHtwYWdlTnVtYmVyfWApO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyID0gKCkgPT4ge1xuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcblxuICAgIGlmICghJHBhZ2luYXRpb25MaXN0Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgJG5leHRJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCcsICRwYWdpbmF0aW9uTGlzdCk7XG4gICAgY29uc3QgJHByZXZJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XG4gICAgY29uc3QgcGFydGlhbFBhZ2luYXRpb25VcmwgPSBjdXJyZW50SHJlZi5zcGxpdCgncGFnZT0nKS5zaGlmdCgpO1xuXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcbn07XG4iLCJpbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnO1xuXG4vKlxuICpcdFJlYWQgYSBsaXN0IG9mIHByb2R1Y3QgSURzIGZyb20gYSBDU1YsIFxuICpcdGZpbHRlciBmb3IgZ2xvYmFsIGFkZC1vbiBpZiBuZWNlc3NhcnksIHJldHVybiBhcnJheVxuICpcdEBwYXJhbSB7c3RyaW5nfSBhZGRPbkNvZGUgLSBJbml0aWFscyBvZiBnbG9iYWwgYWRkLW9uIG9yICdwcm9kdWN0J1xuICpcdEBwYXJhbSB7c3RyaW5nfSBwcm9kdWN0SUQgLSBJZiBmaXJzdCBhcmd1bWVudCBpcyAncHJvZHVjdCcsIElEIG9mIHByb2R1Y3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHJvZHVjdExpc3QoYWRkT25Db2RlLCBwcm9kdWN0SUQpIHtcblx0Ly9cdGlmIHdlIGFyZSBmZXRjaGluZyBhIGxpc3QgZm9yIGFuIGluZGl2aWR1YWwgcHJvZHVjdCxcblx0Ly9cdCdwcm9kdWN0JyB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQ7XG5cdC8vXHRvdGhlcndpc2UsIHRoZSBpbml0aWFscyBvZiB0aGUgZ2xvYmFsIGFkZC1vbiB3aWxsIGJlIHBhc3NlZFxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVDU1YsIHJlamVjdENTVikgPT4ge1xuICAgIGNvbnN0IGNzdlBhdGggPSBhZGRPbkNvZGUgPT09ICdwcm9kdWN0J1xuICAgICAgICA/IGAvY29udGVudC91cHNlbGwtc3VpdGUvcHJvZHVjdC8ke3Byb2R1Y3RJRH0uY3N2YFxuICAgICAgICA6IGAvY29udGVudC91cHNlbGwtc3VpdGUvZ2xvYmFsL3N0b3JlLmNzdmBcblxuICAgIFBhcGEucGFyc2UoXG4gICAgXHRjc3ZQYXRoLFxuICAgIFx0e1xuICAgIFx0XHRkb3dubG9hZDogdHJ1ZSxcbiAgICBcdFx0aGVhZGVyOiB0cnVlLFxuICAgIFx0XHRjb21wbGV0ZTogKHJlc3VsdHMsIGZpbGUpID0+IHtcbiAgICBcdFx0XHQvL1x0aWYgaXRzIG5vdCBhIHByb3BlciB1cHNlbGwgc3VpdGUgQ1NWLCBhYm9ydFxuXHRcdFx0XHRpZiAoIXJlc3VsdHMuZGF0YVswXS5oYXNPd25Qcm9wZXJ0eShcInByb2R1Y3RfaWRcIikpIHtcblx0XHRcdFx0XHRyZWplY3RDU1YoJ2ZpbGUgbm90IGZvdW5kJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgLy8gIGluIHRoZSBjYXNlIG9mIGEgc2luZ2xlIHByb2R1Y3QncyBsaXN0LFxuICAgICAgICAgICAgICAgIC8vICB3ZSdyZSB0YWtpbmcgYWxsIG9mIHRoZSBJRHM7XG4gICAgICAgICAgICAgICAgLy8gIGlmIGl0J3MgYSBnbG9iYWwgYWRkLW9uLCBvbmx5IHRha2VcbiAgICAgICAgICAgICAgICAvLyAgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgYWRkLW9uIGNvZGVcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kQXJyYXkgPSByZXN1bHRzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihyb3cgPT4gcm93LnByb2R1Y3RfaWQubGVuZ3RoICYmIChhZGRPbkNvZGUgPT09ICdwcm9kdWN0JyB8fCByb3cuQWRkT24gPT09IGFkZE9uQ29kZSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gIGlmIHRoaXMgaXMgYSBzaW5nbGUgcHJvZHVjdCdzIENTVixcbiAgICAgICAgICAgICAgICAvLyAgc2F2ZSBjb21wbGV0ZSBhcnJheSBvZiBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIC8vICBmb3IgQ1BVIGFkZC1vbiB0byB1c2UgbGF0ZXJcbiAgICAgICAgICAgICAgICBpZiAoYWRkT25Db2RlID09PSAncHJvZHVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwc2VsbENTViA9IFsuLi5wcm9kQXJyYXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm9kQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVDU1YocHJvZEFycmF5KTtcbiAgICAgICAgICAgICAgICB9ICAgZWxzZSAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdENTVignbm8gcHJvZHVjdHMgaW4gZmlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKGVyciwgZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBwYXJzZSAke2NzdlBhdGh9YCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0Q1NWKGVycik7XG5cdFx0XHR9XG4gICAgXHR9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGdldFByb2R1Y3RMaXN0IGZyb20gJy4vcGFyc2UtY3N2JztcblxuY29uc3QgdXBzZWxsQ1BVID0ge1xuXHQvLyAgbnVtYmVyIG9mIHByb2R1Y3RzIHRvIGRpc3BsYXkgb24gY2FydCBwYWdlXG4gICAgbnVtYmVyT2ZQcm9kdWN0c0luQ1BVOiAzLFxuXG4gICAgLypcbiAgICAgKiAgRmlyZXMgZnJvbSBwcm9kdWN0IHBhZ2Ugd2hlbiBpdGVtIGlzIGFkZGVkIHRvIGNhcnQ6XG4gICAgICogIHNlbGVjdCBwcm9kdWN0cyBmb3IgQ1BVIGJhc2VkIG9uIHByaW9yaXR5LFxuICAgICAqICBBSkFYIHByb2R1Y3QgY2FyZCBjb250ZW50IGFuZCBzYXZlIHRvIHNlc3Npb25TdG9yYWdlXG4gICAgICogIEBwYXJhbSB7bnVtYmVyfSBhZGRlZEl0ZW1JRCAtIHRoZSBpdGVtIGp1c3QgYWRkZWRcbiAgICAgKiAgQHBhcmFtIHtBcnJheX0gY2FydEl0ZW1zIC0gYXJyYXkgb2YgcHJvZHVjdCBJRHMgb2YgaXRlbXMgYWxyZWFkeSBpbiBjYXJ0XG4gICAgICogIEBwYXJhbSB7QXJyYXl9IGN1c3RvbUZpZWxkUHJvZHVjdHMgLSBhcnJheSBvZiBwcm9kdWN0IElEcyB0byBiZSBhZGRlZCB0byBDUFUgdmlhIGN1c3RvbSBmaWVsZHMgb2YgaXRlbSBqdXN0IGFkZGVkXG4gICAgICovXG4gICAgc2F2ZVVwc2VsbERhdGEoYWRkZWRJdGVtSUQsIGNhcnRJdGVtcywgY3VzdG9tRmllbGRQcm9kdWN0cykgICAge1xuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gYWRkZWRJdGVtSUQ7XG4gICAgICAgIHRoaXMuY3VycmVudEN1c3RvbUZpZWxkcyA9IGN1c3RvbUZpZWxkUHJvZHVjdHM7XG4gICAgICAgIGNhcnRJdGVtcy5wdXNoKGFkZGVkSXRlbUlEKTtcblxuICAgICAgICAvLyAgcmV0cmlldmUgSFRNTCBvZiBwcm9kdWN0cyBzdG9yZWQgd2hlblxuICAgICAgICAvLyAgcHJldmlvdXMgcHJvZHVjdHMgd2VyZSBhZGRlZCB0byBjYXJ0XG4gICAgICAgIGNvbnN0IGNwdUhUTUx0ZXh0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNwdUNhcmRzXCIpO1xuICAgICAgICB0aGlzLmNwdUhUTUwgPSB0aGlzLnBhcnNlQXJyYXlGcm9tU3RyaW5nKGNwdUhUTUx0ZXh0KVxuXG4gICAgICAgIHRoaXMuY3B1SFRNTC5mb3JFYWNoKChwcm9kdWN0LCBpLCBodG1sQXJyYXkpID0+IHtcbiAgICAgICAgICAgIC8vICByZW1vdmUgcHJvZHVjdHMgZnJvbSBzdG9yZWQgQ1BVIGlmOlxuICAgICAgICAgICAgLy8gIDEpIHByb2R1Y3QgaXMgbm93IGFuIGl0ZW0gaW4gdGhlIGNhcnRcbiAgICAgICAgICAgIC8vICAyKSBwcm9kdWN0IHdhcyBhZGRlZCB2aWEgY3VzdG9tIGZpZWxkXG4gICAgICAgICAgICAvLyAgICAgIGZyb20gYW4gaXRlbSB0aGF0IGlzIG5vIGxvbmdlciBpbiB0aGUgY2FydFxuICAgICAgICAgICAgaWYgKGNhcnRJdGVtcy5pbmNsdWRlcyhwcm9kdWN0LnByb2R1Y3RfaWQpXG4gICAgICAgICAgICAgICAgfHwgKHByb2R1Y3Quc291cmNlICE9PSAnY3N2JyAmJiAhY2FydEl0ZW1zLmluY2x1ZGVzKHBhcnNlSW50KHByb2R1Y3Quc291cmNlKSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBodG1sQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgaWYgYSBwcm9kdWN0IHdhcyBwcmV2aW91c2x5IGFkZGVkIHZpYSBDU1ZcbiAgICAgICAgICAgIC8vICBhbmQgaXMgYWxzbyBpbiB0aGUgY3VycmVudCBwcm9kdWN0J3MgY3VzdG9tIGZpZWxkcyxcbiAgICAgICAgICAgIC8vICB1cGdyYWRlIGl0cyBwcmlvcml0eSBzdGF0dXMgXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5zb3VyY2UgPT09ICdjc3YnICYmIHRoaXMuY3VycmVudEN1c3RvbUZpZWxkcy5pbmNsdWRlcyhwcm9kdWN0LnByb2R1Y3RfaWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zb3VyY2UgPSB0aGlzLmN1cnJlbnRJdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAgZ2V0IGFuIGFycmF5IG9mIHByb2R1Y3QgSURzIGluIHN0b3JhZ2VcbiAgICAgICAgbGV0IGNwdUl0ZW1zID0gdGhpcy5jcHVIVE1MLm1hcChpdGVtID0+IGl0ZW0ucHJvZHVjdF9pZCk7XG4gICAgICAgIC8vICBjcmVhdGUgYW4gYXJyYXkgb2YgcHJvZHVjdHMgdG8gYmUgYWRkZWQsXG4gICAgICAgIC8vICBzdGFydGluZyB3aXRoIElEcyBmcm9tIHRoZSBjdXN0b20gZmllbGRzXG4gICAgICAgIC8vICBvZiB0aGUgcHJvZHVjdCBqdXN0IGFkZGVkLCBtaW51cyB0aGUgb25lcyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBsZXQgaXRlbXNUb0FkZCA9IHRoaXMuY3VycmVudEN1c3RvbUZpZWxkcy5maWx0ZXIoaWQgPT4gIWNwdUl0ZW1zLmluY2x1ZGVzKGlkKSk7XG5cbiAgICAgICAgLy8gIGNvdW50IHRoZSBwcm9kdWN0cyBpbiBzdG9yYWdlXG4gICAgICAgIC8vICB0aGF0IHdlcmUgYWRkZWQgdmlhIGN1c3RvbSBmaWVsZDtcbiAgICAgICAgLy8gIHRoZXNlIGFyZSBnaXZlbiBwcmlvcml0eSBvdmVyIFVwc2VsbCBTdWl0ZSBDU1ZzXG4gICAgICAgIGxldCBzYXZlZEN1c3RvbUZpZWxkQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNwdUhUTUwuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LnNvdXJjZSAhPSAnY3N2Jykgc2F2ZWRDdXN0b21GaWVsZENvdW50Kys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICBhZnRlciB0aGUgY3VzdG9tIGZpZWxkcyBwcm9kdWN0cyxcbiAgICAgICAgLy8gIGhvdyBtYW55IGFyZSB3ZSBhZGRpbmcgZnJvbSB0aGUgQ1NWP1xuICAgICAgICAvLyAgaWYgYWxsIG9mIHRoZSBwcm9kdWN0cyBpbiBzdG9yYWdlIGFyZVxuICAgICAgICAvLyAgZnJvbSBjdXN0b20gZmllbGRzLCB3ZSdyZSBkb25lIGhlcmVcbiAgICAgICAgY29uc3Qgc2xvdHNBdmFpbGFibGUgPSB0aGlzLm51bWJlck9mUHJvZHVjdHNJbkNQVSAtIHNhdmVkQ3VzdG9tRmllbGRDb3VudDtcbiAgICAgICAgaWYgKHNsb3RzQXZhaWxhYmxlIDwgMSkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gIGlmIHRoZSBwcm9kdWN0IGp1c3QgYWRkZWQgdG8gdGhlIGNhcnRcbiAgICAgICAgLy8gIGhhcyBtb3JlIGN1c3RvbSBmaWVsZCBwcm9kdWN0cyB0aGFuIHRoZXJlIGlzXG4gICAgICAgIC8vICBzcGFjZSBsZWZ0IGluIENQVSwgZHJvcCB0aGUgbGFzdCBvbmVzXG4gICAgICAgIGl0ZW1zVG9BZGQubGVuZ3RoID0gTWF0aC5taW4oaXRlbXNUb0FkZC5sZW5ndGgsIHNsb3RzQXZhaWxhYmxlKTtcblxuICAgICAgICAvLyAgcmV0cmlldmUgY29udGVudHMgb2YgVXBzZWxsIFN1aXRlIENTVnNcbiAgICAgICAgLy8gIGZvciBpdGVtcyBwcmV2aW91c2x5IGFkZGVkIHRvIGNhcnQgYW5kXG4gICAgICAgIC8vICBjYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVzIG9mIHVwc2VsbCBwcm9kdWN0c1xuICAgICAgICAvLyAgaW5jbHVkaW5nIENTViBmcm9tIG5ld2VzdCBjYXJ0IGl0ZW1cbiAgICAgICAgdGhpcy51cGRhdGVBcnJheU9mQ1NWUHJvZHVjdHMoKTtcblxuICAgICAgICAvLyAgb2NjYXNpb25hbGx5IGxhdGVyIHJlZmVyZW5jZXMgdG8gdGhpcyB2YXJpYWJsZVxuICAgICAgICAvLyAgaGF2ZSByZXN1bHRlZCBpbiBmYXRhbCBlcnJvcnMgZHVyaW5nIHRlc3Rpbmc7XG4gICAgICAgIC8vICBpZiBmb3Igd2hhdGV2ZXIgcmVhc29uIHRoZSBhYm92ZSBmdW5jdGlvbiBkaWRuJ3Qgd29yaywganVzdCBhYm9ydFxuICAgICAgICBpZiAoIXRoaXMuY29tYmluZWRDU1YpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIENTViBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgbm93IGNoZWNrIHRoZSBhcnJheSBvZiBwcm9kdWN0c1xuICAgICAgICAvLyAgZnJvbSB0aGUgY29tYmluZWQgQ1NWIGRhdGFcbiAgICAgICAgLy8gIHRvIGZpbGwgb3V0IHRoZSByZXN0IG9mIHRoZSBDUFVcbiAgICAgICAgbGV0IHN0b3JlZENTVmluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGl0ZW1zVG9BZGQubGVuZ3RoIDwgc2xvdHNBdmFpbGFibGUgJiYgc3RvcmVkQ1NWaW5kZXggPCB0aGlzLmNvbWJpbmVkQ1NWLmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICAgIC8vICBza2lwIHByb2R1Y3RzIHRoYXQgYXJlIGFscmVhZHkgaW4gdGhlIGNhcnQuLi5cbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXMuaW5jbHVkZXModGhpcy5jb21iaW5lZENTVltzdG9yZWRDU1ZpbmRleF0ucHJvZHVjdF9pZClcbiAgICAgICAgICAgICAgICAvLyAgLi4uYW5kIHNraXAgcmVwZWF0cyB0aGF0IGFyZSBhbHJlYWR5XG4gICAgICAgICAgICAgICAgLy8gIGluIHRoZSBjdXJyZW50IHByb2R1Y3QncyBjdXN0b20gZmllbGRzXG4gICAgICAgICAgICAgICAgfHwgaXRlbXNUb0FkZC5pbmNsdWRlcyh0aGlzLmNvbWJpbmVkQ1NWW3N0b3JlZENTVmluZGV4XS5wcm9kdWN0X2lkKVxuICAgICAgICAgICAgICAgICkgc3RvcmVkQ1NWaW5kZXgrKztcbiAgICAgICAgICAgIGl0ZW1zVG9BZGQucHVzaCh0aGlzLmNvbWJpbmVkQ1NWW3N0b3JlZENTVmluZGV4KytdLnByb2R1Y3RfaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIG5vdyBjbGVhciBvdXQgc3BhY2UgaW4gc3RvcmFnZSBmb3IgdGhlIG5ldyBDU1YgcHJvZHVjdHNcbiAgICAgICAgdGhpcy5jcHVIVE1MLmZvckVhY2goKHNhdmVkUHJvZHVjdCwgaSwgaHRtbEFycmF5KSA9PiB7XG4gICAgICAgICAgICAvLyAgaWYgYSBwcm9kdWN0IHdlJ3JlIGFib3V0IHRvIGFkZFxuICAgICAgICAgICAgLy8gIGlzIGFscmVhZHkgaW4gc3RvcmFnZSwgbm8gbmVlZCB0byBBSkFYIGl0IGFnYWluO1xuICAgICAgICAgICAgLy8gIG5vdGUgdGhhdCB0aGlzIGlzIG5vdCBjaGVja2VkIGluIHRoZSBwcmV2aW91cyBsb29wXG4gICAgICAgICAgICAvLyAgYmVjYXVzZSB3ZSdyZSBpdGVyYXRpbmcgb3ZlciB0aGUgc3RvcmVkIGl0ZW1zIGluIHRoaXMgc3RlcCxcbiAgICAgICAgICAgIC8vICBub3QgdGhlIG5ldyBpdGVtcyB0byBhZGQsIHNvIHRoYXQgd2UnbGwga25vdyB3aGljaCBvbmVzIHRvIHJlbW92ZS4uLlxuICAgICAgICAgICAgaWYgKGl0ZW1zVG9BZGQuaW5jbHVkZXMoc2F2ZWRQcm9kdWN0LnByb2R1Y3RfaWQpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNUb0FkZC5zcGxpY2UoaXRlbXNUb0FkZC5pbmRleE9mKHNhdmVkUHJvZHVjdC5wcm9kdWN0X2lkKSwgMSk7XG4gICAgICAgICAgICAvLyAgLi4uaW4gb3RoZXIgd29yZHMsIGlmIGEgcHJvZHVjdCBpcyBpbiBzdG9yYWdlXG4gICAgICAgICAgICAvLyAgd2FzIHByZXZpb3VzbHkgYWRkZWQgdmlhIENTViBhbmRcbiAgICAgICAgICAgIC8vICBpcyBubyBsb25nZXIgYXQgdGhlIHRvcCBvZiB0aGUgcHJpb3JpdHkgbGlzdCxcbiAgICAgICAgICAgIC8vICBpdCBjYW4gbm93IGJlIHJlbW92ZWQgdG8gbWFrZSByb29tIGZvciBhIGJldHRlciBvbmVcbiAgICAgICAgICAgIH0gICBlbHNlIGlmIChzYXZlZFByb2R1Y3Quc291cmNlID09ICdjc3YnKSB7XG4gICAgICAgICAgICAgICAgaHRtbEFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gIGF0IHRoaXMgcG9pbnQgdGhlIG5ld2x5LXRydW5jYXRlZCBhcnJheXNcbiAgICAgICAgLy8gIG9mIHByb2R1Y3RzIHN0b3JlZCBhbmQgcHJvZHVjdHMgdG8gYmUgYWRkZWRcbiAgICAgICAgLy8gIHNob3VsZCBhZGQgdXAgdGhlIHRoZSBzaXplIG9mIHRoZSBDUFUgKHVzdWFsbHkgMyk7XG4gICAgICAgIC8vICBzbyB3ZSBBSkFYIHRoZSBuZXcgcHJvZHVjdHMgYXMgbmVlZGVkIFxuICAgICAgICAvLyAgdG8gZmlsbCB0aGUgb3BlbiBzbG90cywgYW5kIHdlJ3JlIG91dFxuICAgICAgICBpZiAoaXRlbXNUb0FkZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdHMgYmVpbmcgYWRkZWQgdG8gQ1BVOiBcIiwgaXRlbXNUb0FkZCk7XG4gICAgICAgICAgICB0aGlzLmdldENQVWNhcmRzKGl0ZW1zVG9BZGQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogIFBhcnNlIGFycmF5IG9mIG9iamVjdHMgZnJvbSBzdHJpbmcgc3RvcmVkIGluIHNlc3Npb25TdG9yYWdlXG4gICAgICogIG9yLCBpZiBlbXB0eSwgY3JlYXRlIG5ldyBhcnJheTtcbiAgICAgKiAgYnkgdGhlIHdheSwgdGhpcyBjYW4ndCBwb3NzaWJseSBiZSB0aGUgYmVzdCB3YXlcbiAgICAgKiAgdG8gcGFyc2UgYW4gYXJyYXkgb2Ygb2JqZWN0cyBzdG9yZWQgYXMgYSBzdHJpbmc7XG4gICAgICogIHRoZSBwcm9ibGVtIGlzIGlmIHlvdSBqdXN0IHVzZSAuc3BsaXQoJywnKVxuICAgICAqICB5b3UnbGwgZ2V0IGFuIGFycmF5IHdpdGggYWxsIG9mIHRoZSBrZXktdmFsdWUgcGFpcnNcbiAgICAgKiAgcHVsbGVkIG91dCBvZiBlYWNoIG9mIHRoZSBvYmplY3RzO1xuICAgICAqICB0aGlzIHdhcyB0aGUgYmVzdCBJIGNvdWxkIGRvLCBidXRcbiAgICAgKiAgaWYgeW91IGtub3cgYSBiZXR0ZXIgd2F5IHBsZWFzZSByZXBsYWNlIHRoaXMgYW1hdGV1cmlzaCBub25zZW5zZVxuICAgICAqICBAcGFyYW0ge3N0cmluZ30gYXJyYXlTdHJpbmcgLSBhcnJheSBvZiBvYmplY3RzIHN0b3JlZCBhcyBhIHN0cmluZ1xuICAgICAqL1xuICAgIHBhcnNlQXJyYXlGcm9tU3RyaW5nKGFycmF5U3RyaW5nKSAge1xuICAgICAgICByZXR1cm4gYXJyYXlTdHJpbmdcbiAgICAgICAgPyBhcnJheVN0cmluZy5zcGxpdCgnfSx7JylcbiAgICAgICAgICAgIC5tYXAoc3RyaW5nID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0cmluZy5zdGFydHNXaXRoKCd7JykpIHN0cmluZyA9ICd7JyArIHN0cmluZztcbiAgICAgICAgICAgICAgICBpZiAoIXN0cmluZy5lbmRzV2l0aCgnfScpKSBzdHJpbmcgPSBzdHJpbmcgKyAnfSc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gSlNPTi5wYXJzZShpdGVtKSlcbiAgICAgICAgOiBbXTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiAgR2V0IHRoZSBhcnJheSBvZiBDU1YgcHJvZHVjdHMgZm9yIGFsbCBpdGVtcyBpbiBjYXJ0IGZyb20gc2Vzc2lvblN0b3JhZ2UsXG4gICAgICogIHRoZW4gdXBkYXRlIHdpdGggZGF0YSBmcm9tIG5ldyBDU1ZcbiAgICAgKi9cbiAgICB1cGRhdGVBcnJheU9mQ1NWUHJvZHVjdHMoKSAgIHtcbiAgICAgICAgY29uc3QgY29tYmluZWRDU1Z0ZXh0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNvbWJpbmVkQ1NWXCIpO1xuICAgICAgICB0aGlzLmNvbWJpbmVkQ1NWID0gdGhpcy5wYXJzZUFycmF5RnJvbVN0cmluZyhjb21iaW5lZENTVnRleHQpO1xuXG4gICAgICAgIC8vICBDU1YgZm9yIGN1cnJlbnQgcHJvZHVjdCBpcyBkb3dubG9hZGVkIGFuZCBwYXJzZWRcbiAgICAgICAgLy8gIG9uIHByb2R1Y3QgcGFnZSBsb2FkLCB0aGVuIHNhdmVkIGFzIGEgd2luZG93IHZhcmlhYmxlO1xuICAgICAgICAvLyAgaWYgbm8gQ1NWIGlzIGF2YWlsYWJsZSBmb3IgdGhpcyBwcm9kdWN0LFxuICAgICAgICAvLyAgc2l0ZS13aWRlIGRlZmF1bHQgcHJvZHVjdHMgYXJlIG5vdCBzYXZlZFxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy51cHNlbGxDU1YgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgICAgd2luZG93LnVwc2VsbENTVi5mb3JFYWNoKChuZXdQcm9kdWN0LCBpKSA9PiB7XG4gICAgICAgICAgICAvLyAgaWYgdGhlIHByb2R1Y3QgSUQgaXMgYWxyZWFkeSBpbiB0aGUgY29tYmluZWQgQ1NWLFxuICAgICAgICAgICAgLy8gIGFkZCB0aGUgZnJlcXVlbmN5IG9mIHB1cmNoYXNlcyBmcm9tIHRoZSBuZXcgY2FydCBpdGVtLi4uXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tYmluZWRDU1Yuc29tZShwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QucHJvZHVjdF9pZCA9PSBuZXdQcm9kdWN0LnByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZnJlcSA9IHBhcnNlSW50KHByb2R1Y3QuZnJlcSkgKyBwYXJzZUludChuZXdQcm9kdWN0LmZyZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAvLyAgLi4ub3RoZXJ3aXNlIGp1c3QgYWRkIHRoZSBwcm9kdWN0IHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3QuZnJlcSA9IHBhcnNlSW50KG5ld1Byb2R1Y3QuZnJlcSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21iaW5lZENTVi5wdXNoKG5ld1Byb2R1Y3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgc29ydCB0aGUgYXJyYXkgc28gdGhlIG1vc3QtcHVyY2hhc2VkIHByb2R1Y3RzIGFyZSBmaXJzdFxuICAgICAgICAgICAgdGhpcy5jb21iaW5lZENTVi5zb3J0KChhLCBiKSA9PiBiLmZyZXEgLSBhLmZyZXEpO1xuICAgICAgICAgICAgLy8gIGRvbid0IG5lZWQgdG8gc2F2ZSB0aGVtIGFsbDsgZXZlbiAyMCBtYXkgYmUgdG9vIG1hbnlcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJpbmVkQ1NWLmxlbmd0aCA+IDIwKSB0aGlzLmNvbWJpbmVkQ1NWLmxlbmd0aCA9IDIwXG4gICAgICAgICAgICAvLyAgc3RpY2sgJ2VtIGluIHNlc3Npb25TdG9yYWdlIGZvciB0aGUgbmV4dCB0aW1lIHdlIGRvIHRoaXNcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb21iaW5lZENTVlwiLCB0aGlzLmNvbWJpbmVkQ1NWLm1hcChwcm9kID0+IEpTT04uc3RyaW5naWZ5KHByb2QpKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAqICBSZWN1cnNpdmUgZnVuY3Rpb24gdG8gQUpBWCBIVE1MIGZvciBwcm9kdWN0IGNhcmRzIGluIENQVTtcbiAgICAgKiAgcmVjdXJzaXZlIGNhbGwgaXMgaW4gQUpBWCBjYWxsYmFja1xuICAgICAqICBAcGFyYW0ge2FycmF5fSBpZEFycmF5IC0gcHJvZHVjdCBJRHMgdG8gYmUgYWRkZWRcbiAgICAgKi9cbiAgICBnZXRDUFVjYXJkcyhpZEFycmF5KSB7XG4gICAgICAgIC8vICBmaW5pc2ggaWYgdGhlIElEcyBoYXZlIGFsbCBiZWVuIEFKQVhlZFxuICAgICAgICAvLyAgb3IgdGhlIEhUTUwgZGF0YSBpcyBmdWxsIHVwO1xuICAgICAgICAvLyAgc2hvdWxkIGhhcHBlbiBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICAgIGlmICghaWRBcnJheS5sZW5ndGggfHwgdGhpcy5jcHVIVE1MLmxlbmd0aCA+PSB0aGlzLm51bWJlck9mUHJvZHVjdHNJbkNQVSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUFUgd2lsbCBkaXNwbGF5IHRoZXNlIHByb2R1Y3RzOiBcIiwgdGhpcy5jcHVIVE1MLm1hcChpdGVtID0+IGl0ZW0ucHJvZHVjdF9pZCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV4dElEID0gaWRBcnJheS5zaGlmdCgpO1xuICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKFxuICAgICAgICAgICAgbmV4dElELFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY3VzdG9tL2NhcnQtcGFnZS11cHNlbGwtaXRlbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIGxvYWQgJHtuZXh0SUR9IGZvciBDUFVgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAgY3JlYXRlIGEgbmV3IG9iamVjdCB0byBzdG9yZSB0aGUgcHJvZHVjdCBjYXJkXG4gICAgICAgICAgICAgICAgbGV0IG5ld0NQVUl0ZW0gPSB7fTtcbiAgICAgICAgICAgICAgICBuZXdDUFVJdGVtLnByb2R1Y3RfaWQgPSBuZXh0SUQ7XG4gICAgICAgICAgICAgICAgLy8gIGlmIHRoZSBJRCBjYW1lIGZyb20gYSBjdXN0b20gZmllbGQsXG4gICAgICAgICAgICAgICAgLy8gIHNhdmUgdGhlIElEIG9mIHRoZSByZWZlcnJpbmcgcHJvZHVjdDtcbiAgICAgICAgICAgICAgICAvLyAgb3RoZXJ3aXNlIG1hcmsgaXQgZnJvbSBhIENTVlxuICAgICAgICAgICAgICAgIG5ld0NQVUl0ZW0uc291cmNlID0gdGhpcy5jdXJyZW50Q3VzdG9tRmllbGRzLmluY2x1ZGVzKG5leHRJRCkgPyB0aGlzLmN1cnJlbnRJdGVtIDogJ2Nzdic7XG4gICAgICAgICAgICAgICAgbmV3Q1BVSXRlbS5odG1sID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jcHVIVE1MLnB1c2gobmV3Q1BVSXRlbSk7XG5cbiAgICAgICAgICAgICAgICAvLyAgdXBkYXRlIHNlc3Npb25TdG9yYWdlIGFmdGVyIGVhY2ggQUpBWFxuICAgICAgICAgICAgICAgIC8vICBpbiBjYXNlIHVzZXIgY2xpY2tzIGF3YXkgYmVmb3JlXG4gICAgICAgICAgICAgICAgLy8gIGFsbCBwcm9kdWN0cyBhcmUgY29tcGxldGVcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3B1Q2FyZHNcIiwgdGhpcy5jcHVIVE1MLm1hcChvYmogPT4gSlNPTi5zdHJpbmdpZnkob2JqKSkpO1xuICAgICAgICAgICAgICAgIC8vICBhbmQgdGhlbiBnZXQgdGhlIG5leHQgaXRlbVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q1BVY2FyZHMoaWRBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiAgSWYgdGhlcmUgYXJlIG5vdCBlbm91Z2ggcHJvZHVjdHMgdG8gZmlsbCB0aGUgQ1BVIG9uIGNhcnQgcGFnZSBsb2FkLFxuICAgICAqICBnZXQgQ1NWIG9mIGEgcHJvZHVjdCBhbHJlYWR5IGluIENQVVxuICAgICAqICBAcGFyYW0ge0FycmF5fSBjcHVQcm9kdWN0cyAtIHByb2R1Y3QgSURzIGFscmVhZHkgc2F2ZWQgaW4gQ1BVXG4gICAgICogIEBwYXJhbSB7bnVtYmVyfSBhcnJheVNpemUgLSBudW1iZXIgb2YgYWRkaXRpb25hbCBwcm9kdWN0cyBuZWVkZWQgdG8gZmlsbCBDUFVcbiAgICAgKi9cblx0Z2V0QWRkaXRpb25hbFByb2R1Y3RzKGNwdVByb2R1Y3RzLCBhcnJheVNpemUgPSB0aGlzLm51bWJlck9mUHJvZHVjdHNJbkNQVSlcdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UgKGFzeW5jIChyZXNvbHZlQXJyYXksIHJlamVjdEFycmF5KSA9PiB7XG4gICAgICAgICAgICBsZXQgY3N2QXJyYXkgPSBbXTtcblx0XHRcdHRyeVx0e1xuICAgICAgICAgICAgICAgIC8vICBwYXJzZSB0aGUgdXBzZWxsIENTViBmb3IgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIENTVlxuXHRcdFx0XHRjc3ZBcnJheSA9IGF3YWl0IGdldFByb2R1Y3RMaXN0KCdwcm9kdWN0JywgY3B1UHJvZHVjdHNbMF0pXG5cdFx0XHR9XHRjYXRjaChlcnIpXHR7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBVbmFibGUgdG8gcmV0cmlldmUgQ1NWIGZvciAke2NwdVByb2R1Y3RzWzBdfWApO1xuXHRcdFx0XHQvLyBjb25zb2xlLmVycihlcnIpO1xuICAgICAgICAgICAgICAgIC8vICBpZiB0aGVyZSdzIGEgc2Vjb25kIGl0ZW0gaW4gdGhlIENQVSwgdHJ5IHRoYXQgb25lXG5cdFx0XHRcdGlmIChjcHVQcm9kdWN0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0dHJ5XHR7XG5cdFx0XHRcdFx0XHRjc3ZBcnJheSA9IGF3YWl0IGdldFByb2R1Y3RMaXN0KCdwcm9kdWN0JywgY3B1UHJvZHVjdHNbMV0pXG5cdFx0XHRcdFx0fVx0Y2F0Y2goZXJyKVx0e1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYFVuYWJsZSB0byByZXRyaWV2ZSBDU1YgZm9yICR7Y3B1UHJvZHVjdHNbMV19YCk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmVycihlcnIpO1xuXHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9XG5cbiAgICAgICAgICAgIC8vICBpZiB3ZSBzdGlsbCBoYXZlbid0IGZvdW5kIGFueSBtb3JlIHByb2R1Y3RzLi4uXG4gICAgICAgICAgICBpZiAoIWNzdkFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vICAuLi5mYWxsIGJhY2sgb24gc2l0ZS13aWRlIHVwc2VsbCBkZWZhdWx0c1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNzdkFycmF5ID0gYXdhaXQgZ2V0UHJvZHVjdExpc3QoJ2RlZicpO1xuICAgICAgICAgICAgICAgIH0gICBjYXRjaChlcnIpICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZGVmYXVsdCB1cHNlbGwgcHJvZHVjdHMgZm9yIHN0b3JlXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgc3RpbGwgbm8gZGljZSwgZGlwIG91dFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0QXJyYXkoJ05vIGZ1cnRoZXIgQ1NWcyBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblx0XHRcdGxldCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdFx0bGV0IGNzdkluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vICBmaW5kIHByb2R1Y3RzIHRvIHNlbmQgYmFja1xuXHRcdFx0d2hpbGUgKHJldHVybkFycmF5Lmxlbmd0aCA8IGFycmF5U2l6ZSAmJiBjc3ZJbmRleCA8IGNzdkFycmF5Lmxlbmd0aClcdHtcbiAgICAgICAgICAgICAgICAvLyAgc2tpcCBwcm9kdWN0cyB0aGF0IGFyZSBhbHJlYWR5IGluIENQVVxuXHRcdFx0XHR3aGlsZSAoXG4gICAgICAgICAgICAgICAgICAgIGNwdVByb2R1Y3RzLmluY2x1ZGVzKGNzdkFycmF5W2NzdkluZGV4XSkgXG4gICAgICAgICAgICAgICAgICAgICYmIGNzdkluZGV4IDwgY3N2QXJyYXkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICkgY3N2SW5kZXgrKztcblx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChjc3ZBcnJheVtjc3ZJbmRleF0pO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZUFycmF5KHJldHVybkFycmF5KTtcblx0XHRcdHJldHVybjtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cHNlbGxDUFU7XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3VudC9hZGQtd2lzaGxpc3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcbiAgICAgKi9cbiAgICB3aXNobGlzdERlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hsaXN0Rm9ybSkge1xuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyV2lzaGxpc3ROYW1lRXJyb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkYWRkV2lzaGxpc3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRhZGRXaXNoTGlzdEZvcm0gPSAkKCcud2lzaGxpc3QtZm9ybScpO1xuXG4gICAgICAgIGlmICgkKCdbZGF0YS1wYWdpbmF0aW9uLXdpc2hsaXN0XScpLmxlbmd0aCkge1xuICAgICAgICAgICAgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkV2lzaExpc3RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImFyaWFLZXlDb2RlcyIsIlJFVFVSTiIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwic2V0Q2hlY2tlZFJhZGlvSXRlbSIsIml0ZW1Db2xsZWN0aW9uIiwiaXRlbUlkeCIsImVhY2giLCJpZHgiLCJpdGVtIiwiJGl0ZW0iLCIkIiwiYXR0ciIsInByb3AiLCJmb2N1cyIsInRyaWdnZXIiLCJjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24iLCJsYXN0SXRlbUlkeCIsImN1cnJlbnRJZHgiLCJoYW5kbGVJdGVtS2V5RG93biIsImUiLCJrZXlDb2RlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwibGFzdENvbGxlY3Rpb25JdGVtSWR4IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZJdGVtSWR4IiwiZ2V0IiwibmV4dEl0ZW1JZHgiLCIkY29udGFpbmVyIiwiaXRlbVNlbGVjdG9yIiwiJGl0ZW1Db2xsZWN0aW9uIiwiZmluZCIsIm9uIiwiRk9DVVNBQkxFX0VMRU1FTlRTX1NFTEVDVE9SIiwiYWN0aXZhdGVQbGF5UGF1c2VCdXR0b24iLCJhbmFsaXplU2xpZGVzIiwiYXJyb3dBcmlhTGFibGluZyIsImRvdHNTZXR1cCIsImdldEFjdGl2ZVNsaWRlSWR4QW5kU2xpZGVzUXVhbnRpdHkiLCJoYW5kbGVJbWFnZUFzcGVjdFJhdGlvIiwiaGFuZGxlSW1hZ2VMb2FkIiwicmVmcmVzaEZvY3VzIiwidXBkYXRlVGV4dFdpdGhMaXZlRGF0YSIsInNldENhcm91c2VsU3RhdGUiLCJfcmVmIiwiY2Fyb3VzZWxPYmoiLCJkZWxlZ2F0ZVRhcmdldCIsImNhcm91c2VsT2JqQ3VycmVudCIsInNsaWNrIiwiJHNsaWRlciIsImRhdGEiLCJvblVzZXJDYXJvdXNlbENoYW5nZSIsIl9yZWYyIiwiY29udGV4dCIsIiRhY3RpdmVTbGlkZXIiLCIkcGFyZW50Q29udGFpbmVyIiwiaGFzQ2xhc3MiLCJwYXJlbnQiLCJfJGFjdGl2ZVNsaWRlciRkYXRhIiwiYWN0aXZlU2xpZGVJZHgiLCJzbGlkZXNRdWFudGl0eSIsIiRjYXJvdXNlbENvbnRlbnRFbGVtZW50IiwiY2Fyb3VzZWxDb250ZW50QW5ub3VuY2VNZXNzYWdlIiwidGV4dCIsIm9uU2xpY2tDYXJvdXNlbENoYW5nZSIsIiRkb3RzIiwiJHByZXZBcnJvdyIsIiRuZXh0QXJyb3ciLCJpbmZpbml0ZSIsIm9wdGlvbnMiLCJfcmVmMyIsImNhcm91c2VsQXJyb3dBbmREb3RBcmlhTGFiZWwiLCJjYXJvdXNlbCIsIiRjYXJvdXNlbCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJzbGlkZSIsImFkZENsYXNzIiwiaXNNdWx0aXBsZVNsaWRlcyIsImNoaWxkcmVuIiwiY3VzdG9tUGFnaW5nIiwiYWNjZXNzaWJpbGl0eSIsImFycm93cyIsImRvdHMiLCJQTEFZX0FDVElPTiIsIlBBVVNFX0FDVElPTiIsInVwZGF0ZUJ1dHRvbkxhYmVscyIsImNhcm91c2VsUGxheVBhdXNlQnV0dG9uUGxheSIsImNhcm91c2VsUGxheVBhdXNlQnV0dG9uUGF1c2UiLCJjYXJvdXNlbFBsYXlQYXVzZUJ1dHRvbkFyaWFQbGF5IiwiY2Fyb3VzZWxQbGF5UGF1c2VCdXR0b25BcmlhUGF1c2UiLCIkYnV0dG9uIiwiYWN0aW9uIiwidXBkYXRlQnV0dG9uTGFiZWxzV2l0aENvbnRleHQiLCJzcGVlZCIsIiRwbGF5UGF1c2VCdXR0b24iLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmQiLCJfJHNsaWRlciRkYXRhIiwiY3NzIiwidHlwZSIsIm9uUGxheVBhdXNlQ2xpY2siLCJwYXVzZWQiLCJfdGhyb3R0bGUiLCJ0cmFpbGluZyIsIiRzbGlkZXMiLCIkc2xpZGUiLCJ0YWJJbmRleCIsImlzIiwiY2hpbGQiLCJ0b29sdGlwU2V0dXAiLCJpc0luZmluaXRlIiwiYXJpYUxhYmVsIiwiYWN0aXZlU2xpZGVOdW1iZXIiLCJwcmV2U2xpZGVOdW1iZXIiLCJhcnJvd0xlZnRUZXh0IiwidGFiaW5kZXgiLCJuZXh0U2xpZGVOdW1iZXIiLCJhcnJvd1JpZ2h0VGV4dCIsImNhcm91c2VsQWN0aXZlRG90QXJpYUxhYmVsIiwiZG90IiwiZG90TGFiZWxUZXh0IiwiZG90U2xpZGVTdGF0dXNUZXh0IiwiZG90QXJpYUxhYmVsIiwiJGRvdEJ1dHRvbiIsInNsaWRlQ291bnQiLCJfcmVmJG9wdGlvbnMiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImxhc3RWaXNpYmxlSWR4IiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIk1hdGgiLCJjZWlsIiwiaXNBbmFseXplZERhdGFBdHRyIiwiJGFjdGl2ZVNsaWRlIiwiaXNBbmFseXplZFNsaWRlIiwiJGFjdGl2ZVNsaWRlSW1nIiwiYWN0aXZlU2xpZGVJbWdOb2RlIiwiJGFjdGl2ZVNsaWRlQW5kQ2xvbmVzIiwiZ2V0QWN0aXZlU2xpZGVJbmZvIiwiSU1BR0VfQ0xBU1NFUyIsInZlcnRpY2FsIiwic3F1YXJlIiwiSVNfQU5BTFlaRURfREFUQV9BVFRSIiwiZGVmaW5lQXNwZWN0UmF0aW9DbGFzcyIsImltYWdlQXNwZWN0UmF0aW8iLCJzZXRBc3BlY3RSYXRpb0NsYXNzIiwiaW1hZ2VOb2RlIiwibmF0dXJhbEhlaWdodCIsIm5hdHVyYWxXaWR0aCIsIl9nZXRBY3RpdmVTbGlkZUluZm8iLCJjb21wbGV0ZSIsImlzQnJvd3NlcklFIiwiSU1BR0VfRVJST1JfQ0xBU1MiLCJnZW5lcmF0ZUltYWdlIiwiJGltYWdlIiwiZGVmYXVsdCIsImZpcnN0IiwiJGZpcnN0QWN0aXZlU2xpZGUiLCJUT09MVElQX0RBVEFfU0VMRUNUT1IiLCJUT09MVElQX0NMQVNTIiwiVE9PTFRJUF9OT0RFIiwiJG5vZGUiLCIkZXhpc3RlZFRvb2x0aXAiLCIkdG9vbHRpcCIsIlNMSURFX05VTUJFUiIsIlNMSURFU19RVUFOVElUWSIsInRleHRGb3JDaGFuZ2UiLCJzbGlkZU51bWJlciIsInJlcGxhY2UiLCJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJQTFVHSU5fS0VZIiwiQ29sbGFwc2libGVFdmVudHMiLCJvcGVuIiwiY2xvc2UiLCJ0b2dnbGUiLCJjbGljayIsIkNvbGxhcHNpYmxlU3RhdGUiLCJjbG9zZWQiLCJwcmVwZW5kSGFzaCIsImlkIiwiaW5kZXhPZiIsIm9wdGlvbnNGcm9tRGF0YSIsIiRlbGVtZW50IiwiZGlzYWJsZWRCcmVha3BvaW50IiwiZGlzYWJsZWRTdGF0ZSIsImVuYWJsZWRTdGF0ZSIsIm9wZW5DbGFzc05hbWUiLCJDb2xsYXBzaWJsZSIsIiR0b2dnbGUiLCIkdGFyZ2V0IiwiX3RlbXAiLCJfcmVmJG9wZW5DbGFzc05hbWUiLCJ0YXJnZXRJZCIsImRpc2FibGVkTWVkaWFRdWVyeUxpc3QiLCJkaXNhYmxlZCIsIm1hdGNoZXMiLCJvbkNsaWNrZWQiLCJiaW5kIiwib25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2giLCJpc0NvbGxhcHNlZCIsIl9nZXRUb2dnbGVBcmlhTGFiZWxUZXh0IiwiaXNPcGVuIiwiYmluZEV2ZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIiR0ZXh0VG9nZ2xlQ2hpbGRyZW4iLCJmaWx0ZXIiLCJfXyIsInRyaW0iLCIkYXJpYUxhYmVsVGFyZ2V0IiwiX3RlbXAyIiwiX3JlZjIkbm90aWZ5Iiwibm90aWZ5IiwiX3RlbXAzIiwiX3JlZjMkbm90aWZ5IiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVCeVN0YXRlIiwic3RhdGUiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwidW5kZWZpbmVkIiwiaGFzQ29sbGFwc2libGUiLCJjb2xsYXBzaWJsZUluc3RhbmNlIiwiY29udGFpbnMiLCJhZGRMaXN0ZW5lciIsInVuYmluZEV2ZW50cyIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwiZXZlbnQiLCJtZWRpYSIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl9kaXNhYmxlZCIsInNldCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInNlbGVjdG9yIiwib3ZlcnJpZGVPcHRpb25zIiwiJGNvbGxhcHNpYmxlcyIsIiRjb250ZXh0IiwibWFwIiwiZWxlbWVudCIsImluc3RhbmNlS2V5IiwiY2FjaGVkQ29sbGFwc2libGUiLCJfZXh0ZW5kIiwiY29sbGFwc2libGUiLCJ0b0FycmF5IiwiYnJlYWtwb2ludFNpemVzIiwieGxhcmdlIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsInhzbWFsbCIsImJyZWFrcG9pbnROYW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJyZWFrcG9pbnQiLCJtZWRpYVF1ZXJ5IiwibWVkaWFRdWVyeUxpc3QiLCJXaXNobGlzdCIsImluaXRSYWRpb09wdGlvbnMiLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3Rpb25zU2V0IiwiX3RoaXMiLCJlcnIiLCJyZXNwb25zZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCIkc2NvcGUiLCJfdGhpczIiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwibG9hZCIsImdldFRhYlJlcXVlc3RzIiwidmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSIsInZhcmlhbnREb21Ob2RlIiwidmFyaWFudFR5cGUiLCJfdGhpczMiLCJpIiwicmFkaW8iLCIkcmFkaW8iLCJfdGhpczQiLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJwYXJzZUludCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCJzaWJsaW5ncyIsImdldFZpZXdNb2RlbCIsIiRiZHNwRGF0YSIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGlucHV0Iiwic2t1IiwiJGxhYmVsIiwiJHZhbHVlIiwidXBjIiwicXVhbnRpdHkiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidmlld01vZGVsIiwiaGlkZSIsImJyZWFkQ3J1bWJzIiwiYnJlYWRNb2RlbCIsInNob3dNZXNzYWdlQm94Iiwic3RvY2tfbWVzc2FnZSIsInB1cmNoYXNpbmdfbWVzc2FnZSIsIl9pc09iamVjdCIsInByaWNlIiwidXBkYXRlUHJpY2VWaWV3Iiwid2VpZ2h0IiwiaHRtbCIsImZvcm1hdHRlZCIsInZhcmlhbnRJZCIsInZhbCIsInNob3ciLCJfaXNOdW1iZXIiLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYWRkVG9DYXJ0V3JhcHBlciIsInB1cmNoYXNhYmxlIiwiYmRzcFBlcmNlbnRhZ2UiLCJoYXNCZHNwU2FsZSIsIndpdGhfdGF4IiwidXBkYXRlZFByaWNlIiwicHJpY2VfcmFuZ2UiLCJtaW4iLCJtYXgiLCJ3aXRob3V0X3RheCIsImJkc3BBbW91bnRPZmYiLCJkaXNjb3VudFByaWNlIiwiX2Zsb29yIiwidG9GaXhlZCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsIm1lc3NhZ2UiLCIkbWVzc2FnZUJveCIsImluc3RvY2siLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJjbG9zZXN0IiwiJHNlbGVjdCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJkb2N1bWVudE1vZGUiLCJjb252ZXJ0SW50b0FycmF5IiwiY29sbGVjdGlvbiIsInNsaWNlIiwiY2FsbCIsImNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzIiwid2lzaGxpc3RVcmwiLCJwYWdpbmF0aW9uSXRlbXMiLCJfIiwicGFnaW5hdGlvbkxpbmsiLCJwYWdlTnVtYmVyIiwid2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIiLCIkcGFnaW5hdGlvbkxpc3QiLCIkbmV4dEl0ZW0iLCIkcHJldkl0ZW0iLCJjdXJyZW50SHJlZiIsInBhcnRpYWxQYWdpbmF0aW9uVXJsIiwic3BsaXQiLCJzaGlmdCIsIlBhcGEiLCJnZXRQcm9kdWN0TGlzdCIsImFkZE9uQ29kZSIsInByb2R1Y3RJRCIsIlByb21pc2UiLCJyZXNvbHZlQ1NWIiwicmVqZWN0Q1NWIiwiY3N2UGF0aCIsInBhcnNlIiwiZG93bmxvYWQiLCJoZWFkZXIiLCJyZXN1bHRzIiwiZmlsZSIsImhhc093blByb3BlcnR5IiwicHJvZEFycmF5Iiwicm93IiwicHJvZHVjdF9pZCIsIkFkZE9uIiwidXBzZWxsQ1NWIiwiY29uY2F0IiwiZXJyb3IiLCJjb25zb2xlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwibiIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsInV0aWxzIiwidXBzZWxsQ1BVIiwibnVtYmVyT2ZQcm9kdWN0c0luQ1BVIiwic2F2ZVVwc2VsbERhdGEiLCJhZGRlZEl0ZW1JRCIsImNhcnRJdGVtcyIsImN1c3RvbUZpZWxkUHJvZHVjdHMiLCJjdXJyZW50SXRlbSIsImN1cnJlbnRDdXN0b21GaWVsZHMiLCJjcHVIVE1MdGV4dCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNwdUhUTUwiLCJwYXJzZUFycmF5RnJvbVN0cmluZyIsInByb2R1Y3QiLCJodG1sQXJyYXkiLCJzb3VyY2UiLCJzcGxpY2UiLCJjcHVJdGVtcyIsIml0ZW1zVG9BZGQiLCJzYXZlZEN1c3RvbUZpZWxkQ291bnQiLCJzbG90c0F2YWlsYWJsZSIsInVwZGF0ZUFycmF5T2ZDU1ZQcm9kdWN0cyIsImNvbWJpbmVkQ1NWIiwic3RvcmVkQ1NWaW5kZXgiLCJzYXZlZFByb2R1Y3QiLCJsb2ciLCJnZXRDUFVjYXJkcyIsImFycmF5U3RyaW5nIiwic3RyaW5nIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiSlNPTiIsImNvbWJpbmVkQ1NWdGV4dCIsIm5ld1Byb2R1Y3QiLCJzb21lIiwiZnJlcSIsInNvcnQiLCJiIiwic2V0SXRlbSIsInByb2QiLCJzdHJpbmdpZnkiLCJpZEFycmF5IiwibmV4dElEIiwiYXBpIiwiZ2V0QnlJZCIsInRlbXBsYXRlIiwibmV3Q1BVSXRlbSIsIm9iaiIsImdldEFkZGl0aW9uYWxQcm9kdWN0cyIsImNwdVByb2R1Y3RzIiwiYXJyYXlTaXplIiwiX2NhbGxlZSIsInJlc29sdmVBcnJheSIsInJlamVjdEFycmF5IiwiY3N2QXJyYXkiLCJyZXR1cm5BcnJheSIsImNzdkluZGV4IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwidDEiLCJ0MiIsIl94IiwiX3gyIiwibm9kIiwiUGFnZU1hbmFnZXIiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiV2lzaExpc3QiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJjb25maXJtZWQiLCJjb25maXJtIiwid2lzaGxpc3REZWxldGUiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJlcnJvck1lc3NhZ2UiLCJlbnRlcldpc2hsaXN0TmFtZUVycm9yIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwib25SZWFkeSIsIiRhZGRXaXNoTGlzdEZvcm0iXSwic291cmNlUm9vdCI6IiJ9

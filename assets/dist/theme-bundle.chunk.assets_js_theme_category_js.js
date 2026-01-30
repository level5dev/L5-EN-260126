(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js"
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _custom_its_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom/its-category */ "./assets/js/theme/custom/its-category.js");
/* harmony import */ var _custom_toggle_category_listing_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom/toggle-category-listing-view */ "./assets/js/theme/custom/toggle-category-listing-view.js");
/* harmony import */ var _custom_its_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom/its-global */ "./assets/js/theme/custom/its-global.js");
/* harmony import */ var _custom_custom_sidebar_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom/custom-sidebar-filter */ "./assets/js/theme/custom/custom-sidebar-filter.js");
/* harmony import */ var _custom_jquery_nice_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom/jquery-nice-select */ "./assets/js/theme/custom/jquery-nice-select.js");
/* harmony import */ var _custom_jquery_nice_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_custom_jquery_nice_select__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);

    /**
     * IntuitSolutions - Custom Category
     */
    _this.ITSCategory = new _custom_its_category__WEBPACK_IMPORTED_MODULE_5__["default"](context);
    _this.toggleCategoryListingView = new _custom_toggle_category_listing_view__WEBPACK_IMPORTED_MODULE_6__["default"](context);
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      "aria-live": ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$("[data-shop-by-price]").length) return;
    if ($(".navList-action").hasClass("is-active")) {
      $("a.navList-action.is-active").focus();
    }
    $("a.navList-action").on("click", function () {
      return _this2.setLiveRegionAttributes($("span.price-filter-message"), "status", "assertive");
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    // this.populateGridProduct();
    if ($(".product").length < 95) {
      $("#loader-block").hide();
    }
    this.niceSelect();
    $(document).ready(function () {
      // $('[all-sort-select-pc]').niceSelect();
      $(".form-select").niceSelect();
    });
    this.validateProductsCount();
    this.dynamicResizeProductGrid();
    // this.constructData();
    (0,_custom_custom_sidebar_filter__WEBPACK_IMPORTED_MODULE_8__.customSidebar)();
    // checkFilterFromCustomField();

    $('[data-button-type="add-cart"]').on("click", function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), "status", "polite");
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($("#facetedSearch").length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on("sortBy-submitted", this.onSortBySubmit);
    }
    $("a.reset-btn").on("click", function () {
      return _this3.setLiveRegionsAttributes($("span.reset-message"), "status", "polite");
    });
    this.ariaNotifyNoProducts();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $("[data-no-products-notification]");
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $("#product-listing-container");
    var $facetedSearchContainer = $("#faceted-search-container");
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: this.toggleCategoryListingView.getRequestTemplateType("category"),
        sidebar: "category/sidebar"
      },
      showMore: "category/show-more"
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $("body").triggerHandler("compareReset");
      $("html, body").animate({
        scrollTop: 0
      }, 100);

      /**
       * IntuitSolutions - Category Update
       */
      _this4.ITSCategory.afterFacetUpdate();
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
    $("body").on("productViewModeChanged", function () {
      var NewOpts = {
        config: {
          category: {
            shop_by_price: true,
            products: {
              limit: productsPerPage
            }
          }
        },
        template: {
          productListing: _this4.toggleCategoryListingView.getRequestTemplateType("category"),
          sidebar: "category/sidebar"
        },
        showMore: "category/show-more"
      };
      _this4.facetedSearch.updateRequestOptions(NewOpts);
    });
  }

  //resize
  ;
  _proto.dynamicResizeProductGrid = function dynamicResizeProductGrid() {
    // const filter = $(".actionBar.filter--section").width();
    // const wrapper = $("#product-listing-container").width();
    // $("#product-block").width(wrapper - filter);
    // console.log(wrapper - filter);
  }

  //SSCODE: Populate Product Grid in category.html
  ;
  _proto.validateProductsCount = function validateProductsCount() {
    var products = this.context.products;
    var body = this;
    var UUIDcatc = this.context.UUIDcatc;
    var categoryId = this.context.categoryId;
    var num = this.context.num;
    // console.log(products);
    //console.log('catID is ', categoryId)
    var existProdId = [];
    products.forEach(function (pr) {
      existProdId.push(pr.id);
    });

    // const toolBuilderCard = this.addToolSetBuilderCard();
    // if (toolBuilderCard) {
    //   $("#isotope-container").prepend(toolBuilderCard);
    //   //this.setupToolBuilderEvents();
    // }

    if ($(".product").length > 98) {
      requestAxios(1);
    } else {
      $("#loader-block").hide();
      body.newConfigureIsotopeForAll();
      body.restartCustomGlobal();
    }

    // console.log(existProdId);
    function requestAxios(attempt) {
      axios.get("https://i2lq18l4v8.execute-api.us-east-2.amazonaws.com/products/" + categoryId, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var data = response.data;
        data.forEach(function (pr) {
          if (existProdId.includes(pr["id"])) {
            var $item = $(".product[data-entity-id=\"" + pr["id"] + "\"]");
            $item.attr("data-best-selling", "" + pr["total_sold"]);
            $item.attr("data-date-created", "" + pr["date_created"]);
          } else if (products.length > 99) {
            var template = constructTemplate(pr, num);
            num = num + 1;
            $("#isotope-container").append(template);
          }
        });
        $("#loader-block").hide();
        body.newConfigureIsotopeForAll();
        body.restartCustomGlobal();
        // body.disableViewDetailButton();
      })["catch"](function (error) {
        if (attempt < 5) {
          requestAxios(attempt + 1);
        } else {
          console.log(error);
        }
      });
    }
    function constructTemplate(pr, num) {
      var img = {};
      for (var i = 0; i < pr["images"].length; i++) {
        if (pr["images"][i]["is_thumbnail"]) {
          img = pr["images"][i];
          break;
        }
      }
      var actionSection = "";
      if (pr["variants"].length > 1) {
        actionSection = "<button type=\"button\" class=\"button button--primary quickview button--quickview\" data-product-id=\"" + pr["id"] + "\">View Options</button>";
      } else {
        actionSection = "\n            <div class=\"card-atc js-card-atc\">\n              <div class=\"card-atc__section card-atc__section--qty\">\n                <label for=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" class=\"card-atc__label is-srOnly\">Quantity:</label>\n                <div class=\"card-atc-increment card-atc-increment--has-buttons js-card-atc-increment\">\n\n                  <input type=\"tel\" class=\"form-input card-atc__input card-atc__input--total js-card-atc__input--total\" name=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" id=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" value=\"1\" min=\"1\" pattern=\"[0-9]*\" aria-live=\"polite\">\n                  <div class=\"card-atc-button-wrapper\">\n                    <button class=\"button button--icon\" data-action=\"inc\" type=\"button\">\n                      <span class=\"is-srOnly\">Increase Quantity of undefined</span>\n                      <span class=\"icon-wrapper\" aria-hidden=\"true\">\n                        <svg class=\"icon\">\n                          <use xlink:href=\"#icon-add\"></use>\n                        </svg>\n                      </span>\n                    </button>\n                    <button class=\"button button--icon\" data-action=\"dec\" type=\"button\">\n                      <span class=\"is-srOnly\">Decrease Quantity of undefined</span>\n                      <span class=\"icon-wrapper\" aria-hidden=\"true\">\n                        <svg class=\"icon\">\n                          <use xlink:href=\"#icon-minus\"></use>PP\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-atc__section card-atc__section--action\">\n                <button type=\"button\" class=\"card-atc__button button button--primary js-card-atc__button\" id=\"card-atc__add-" + pr["id"] + "-" + UUIDcatc + "\" data-default-message=\"Add to Cart\" data-wait-message=\"ADDING...\" data-added-message=\"Add to Cart\" value=\"Add to Cart\" data-card-add-to-cart=\"/cart.php?action=add&amp;product_id=" + pr["id"] + "\" data-event-type=\"product-click\">Add to Cart</button>\n                <span class=\"product-status-message aria-description--hidden\">Adding to cart\u2026 The item has been added</span>\n              </div>\n          </div>";
      }
      var template = "\n          <div id=\"product-" + pr["id"] + "\" sort-order=\"" + pr["sort_order"] + "\" \n          class=\"product\"\n          data-fake-name=\"" + pr["fake-heading"] + "\" \n          data-product-price=\"" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n          product-date-created=\"" + pr["date_created"] + "\" \n          product-is-featured=\"" + pr["is_featured"] + "\" \n          product-best-selling=\"" + pr["total_sold"] + "\"\n          product-custom-sort-order=\"" + pr["custom-sort-order"] + "\"\n          data-custom-best-selling=\"" + num + "\" \n          >\n              <div class=\"card-wrapper\">\n                  <article class=\"card\" data-test=\"card-" + pr["id"] + "\">\n                      <figure class=\"card-figure\">\n                          <div class=\"sale-flag-sash\" style=\"display: " + (pr["variants"][0].sale_price !== 0 ? "block;" : "none;") + " \"><span class=\"sale-text\">On Sale</span></div>\n                          <a href=\"" + pr["custom_url"]["url"] + "\" \n                          class=\"card-figure__link\" \n                          aria-label=\"" + pr["name"] + ", \n                          $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\">\n                              <div class=\" card-img-container\">\n                                  <img src=\"" + img["url_thumbnail"] + "\" \n                                  alt=\"img[\"description\"]\" title=\"" + pr["fake-heading"] + "\" \n                                  data-sizes=\"auto\" \n                                  srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  data-srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  class=\"card-image lazyautosizes lazyloaded\" sizes=\"248px\">\n                              </div>\n                          </a>\n                         <figcaption class=\"card-figcaption\">\n                              <div class=\"card-figcaption-body\"></div>\n                         </figcaption>\n                      </figure>\n                      <div class=\"card-body\">\n                          <p class=\"productView-type-title h4\" \n                          product-name=\"\">" + pr["fake-heading"] + "</p>\n                          <h3 class=\"card-title \">\n                              <a aria-label=\"" + pr["name"] + ", \n                                $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n                              href=\"" + pr["custom_url"]["url"] + "\">\n                              " + pr["name"] + "</a>\n                          </h3>\n                          <p class=\"card-text card-text--sku\">\n                              <span> SKU#: " + pr["sku"] + " </span>\n                          </p>\n                          <div class=\"card-text card-text--price\" data-test-info-type=\"price\">\n                              <div class=\"price-section price-section--withoutTax rrp-price--withoutTax h4\" style=\"display: block;\">\n                                  <span class=\"is-srOnly\"> MSRP: </span>\n                                  <span data-product-rrp-price-without-tax=\"\" class=\"price price--rrp h5\">\n                                    " + (pr["variants"][0].sale_price !== 0 ? "$" + pr["variants"][0].retail_price : "") + "\n                                  </span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax non-sale-price--withoutTax h5\" style=\"display: none;\">\n                                <span class=\"is-srOnly\"> Was: </span>\n                                <span data-product-non-sale-price-without-tax=\"\" class=\"price price--non-sale\"></span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax h4\">\n                                <span class=\"price-label is-srOnly\"></span>\n                                <span class=\"price-now-label is-srOnly\" style=\"display: none;\">Now:</span>\n                                <span data-product-price-without-tax=\"\" class=\"price price--withoutTax\">$" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "</span>\n                              </div>\n                          </div>\n                          <p class=\"card-text card-text--extra\" style=\"display: " + (pr["custom_fields"].find(function (field) {
        return field["name"] === "__card-extra-info";
      }) !== undefined ? "relative;" : "none;") + " \"> \n                          " + (pr["custom_fields"].find(function (field) {
        return field["name"] === "__card-extra-info";
      }) !== undefined ? pr["custom_fields"].find(function (field) {
        return field["name"] === "__card-extra-info";
      }).value : "") + "</p>\n                         <div class=\"card-action-wrapper\">\n                              " + actionSection + "\n                              <button type=\"button\" onclick=\"window.location.href=" + pr["custom_url"]["url"] + "\" \n                              class=\"button button--primary\" >View Details</button>\n                         </div>\n                      </div>\n                  </article>\n              </div>\n          </div>";
      return template;
    }
  };
  _proto.startGlobal = function startGlobal() {
    (0,_custom_its_global__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
  }

  // check if mobile user
  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
  ;
  _proto.checkMobile = function checkMobile() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  _proto.resetSectionCssForMobileView = function resetSectionCssForMobileView() {
    if (screen.width < 600) {
      $("[section-view]").attr("id", "");
      $("[section-view]").attr("class", "");
    } else {
      $("[section-view]").attr("id", "product-listing-container");
      $("[section-view]").attr("class", "container");
    }
  };
  _proto.dynamicGridWidthSizingForIsotope = function dynamicGridWidthSizingForIsotope() {
    var width = window.innerWidth;
    if (width > 1300) {
      width = 1200;
    } else if (width < 320) {
      width = 320;
    } else if (width < 600) {
      // purposely empty block
    } else {
      width = width - 320;
    }
    this.resetSectionCssForMobileView();
    // console.log(width);

    $("#grid-all-product").css("width", width + "px");
  };
  _proto.newConfigureIsotopeForAll = function newConfigureIsotopeForAll() {
    // $(".grid").css("display", "grid");
    //   $(".lds-block").hide();
    var grid = document.getElementById("isotope-container");
    var body = this;
    var iso;
    runIsotope();
    $(".filter--container").css("opacity", "100%");
    $("#all-sort-select, #all-sort-select").prop("disabled", false);
    $(".filter-wrapper").css("background-color", "unset");
    $(".nice-select.form-select").removeClass("disabled");
    /*
    iso.on("arrangeComplete", function () {
      if (window.innerWidth > 1100) {
        // setTimeout(function () {
          console.log("called");
          $(`#isotope-container .product`).each(function () {
            let left = Number($(this)[0].style.left.replace("%", ""));
            let perLeft = left + 5;
            
            if(window.innerWidth >= 1440){
              if(left > 60){
                perLeft = Math.min(perLeft, 68.2);
              }else if(left > 30){
                perLeft = Math.min(perLeft, 36.5);
              }else{
                perLeft = Math.min(perLeft, 5);
              }
            }else{
              if(left > 60){
                perLeft = Math.min(perLeft, 68);
              }else if(left > 30){
                perLeft = Math.min(perLeft, 36.5);
              }else{
                perLeft = Math.min(perLeft, 5);
              }
            }
            $(this)[0].style.left = `${perLeft}%`;
          });
        // }, 0);
      }
    });
    */

    // TODO: NEXT
    /*
    let arranging = false;
    iso.on("arrangeComplete", function () {
      if(arranging){
        return;
      }
      setTimeout(function () {
        arranging = true;
        if ($(".filter--box").length > 0) {
          let leftArr = [];
          let rowPr = {};
           $(`#isotope-container .product`).each(function () {
            if ($(this).css("display") !== "none") {
              leftArr.push($(this)[0].style.left);
              if (rowPr[$(this)[0].style.top] === undefined) {
                rowPr[$(this)[0].style.top] = 0;
              }
              rowPr[$(this)[0].style.top] += 1;
            }
          });
          leftArr = Array.from([...new Set(leftArr)][0]);
           // leftArr = Array.from([...new Set(xList)][0]);
          leftArr = leftArr.sort();
          console.log(Array.from([...new Set(xList)][0]));
          const rightKey = {};
          for (let i = 0; i < leftArr.length; i++) {
            rightKey[leftArr[i]] = leftArr[leftArr.length - i - 1];
          }
          console.log(rightKey);
          if (window.innerWidth > 1100) {
            setTimeout(function () {
              $(`#isotope-container .product`).each(function () {
                if ($(this).css("display") !== "none") {
                  // $(this)[0].style.transition = "right 0.2s";
                  // if(rowPr[$(this)[0].style.top] === leftArr.length){
                  //   $(this)[0].style.right = rightKey[$(this)[0].style.left];
                  //   $(this)[0].style.left = "";
                  // }else{
                  //   $(this)[0].style.right = $(this)[0].style.left;
                  //   $(this)[0].style.left = "";
                  // }
                  $(this)[0].style.right = rightKey[$(this)[0].style.left];
                  $(this)[0].style.left = "";
                }
              });
              arranging = false;
            }, 0);
          }
        }
      }, 0);
    });
    */

    function runIsotope() {
      // $(window).load(function () {
      // setTimeout(function () {

      iso = new Isotope(grid, {
        // options...
        itemSelector: ".product",
        layoutMode: "fitRows",
        percentPosition: true,
        fitRows: {
          align: "right"
        },
        // masonry: {
        // columnWidth : 280,
        // isRTL: true
        // },
        getSortData: {
          name: function name(itemElem) {
            return itemElem.getAttribute("data-name");
          },
          price: function price(itemElem) {
            return Number(itemElem.getAttribute("data-product-price"));
          },
          review: function review(itemElem) {
            return itemElem.getAttribute("data-rating");
          },
          best_selling: function best_selling(itemElem) {
            return Number(itemElem.getAttribute("data-custom-best-selling"));
          },
          newest: function newest(itemElem) {
            return itemElem.getAttribute("data-date-created");
          },
          custom_sort_order: function custom_sort_order(itemElem) {
            return Number(itemElem.getAttribute("data-custom-sort"));
          },
          custom_sort_num: function custom_sort_num(itemElem) {
            return Number(itemElem.getAttribute("data-custom-num"));
          }
        }
      });
      // });
      // }, 0);
      $("[all-sort-select-mobile]").change(function () {
        var val = $(this).val().split("-");
        if (val[0] === "review") {
          iso.arrange({
            sortBy: [val[0], "rating_count"],
            sortAscending: {
              review: false,
              rating_count: false
            }
          });
        } else {
          iso.arrange({
            sortBy: val[0],
            sortAscending: val[1] === "asc"
          });
        }
      });

      // waiting for nice select to initialize
      setTimeout(function () {
        // $(`.nice-select ul.list li`).off("click");
        $(".nice-select ul.list li").on("click", function () {
          var val = $(this).attr("data-value").split("-");
          if (val[0] === "review") {
            iso.arrange({
              sortBy: [val[0], "rating_count"],
              sortAscending: {
                review: false,
                rating_count: false
              }
            });
          } else {
            iso.arrange({
              sortBy: val[0],
              sortAscending: val[1] === "asc"
            });
          }
          // $(this).parent().parent().focus();
        });
      }, 100);
      $("#all-sort-select, #sort-button").prop("disabled", false);
      setTimeout(function () {
        if (body.context.subcategories.length === 0) {
          iso.arrange({
            sortBy: "custom_sort_order",
            sortAscending: true
          });
        } else {
          iso.arrange({
            sortBy: "custom_sort_num",
            sortAscending: true
          });
        }
      }, 3);
      var resizeLayout = false;
      addEventListener("resize", function (event) {
        resizeLayout = true;
      });
      iso.on("layoutComplete", function () {
        if (resizeLayout) {
          resizeLayout = false;
          iso.arrange();
          return;
        }
        return;
      });

      /////////////////////////////////
      addEventListener("CheckboxUpdated", function (event) {
        // const val = [];
        // $("[input-filter]:checked").each(function() {
        //   val.push($(this).val());
        // });
        var val = {};
        $("[input-filter]:checked").each(function () {
          if (val[$(this).attr("input-filter")] === undefined) {
            val[$(this).attr("input-filter")] = [];
          }
          val[$(this).attr("input-filter")].push($(this).val());
        });
        // console.log(val);
        if (Object.keys(val).length > 0) {
          //  console.log(val)
          //  console.log(iso)
          iso.arrange({
            // item element provided as argument
            filter: function filter(item1, item2) {
              var itemElem = item1 || item2;
              var filter_data = itemElem.getAttribute("filter-data").replace(/\s+/g, " ").trim().split(" ");
              var isValid = true;
              var key = Object.keys(val);
              for (var k = 0; k < key.length; k++) {
                var temp = false;
                var tempVal = val[key[k]];
                for (var i = 0; i < tempVal.length; i++) {
                  // if (!filter_data.includes(val[i])) {
                  //   isValid = false;
                  //   break;
                  // }
                  if (filter_data.includes(tempVal[i])) {
                    temp = true;
                    break;
                  }
                }
                if (!temp) {
                  isValid = false;
                  break;
                }
              }
              return isValid;
            }
          });
        } else {
          iso.arrange({
            // item element provided as argument
            filter: "*"
          });
        }
      });
    }
  };
  _proto.restartCustomGlobal = function restartCustomGlobal() {
    $("[data-action]").off("click");
    $(".card-atc__button").off("click");
    $("[href=\"#slideCart\"]").off("click");
    this.startGlobal();
  }

  /**
   JQuery Nice Select Library https://jqueryniceselect.hernansartorio.com/
  */;
  _proto.niceSelect = function niceSelect() {
    $.fn.niceSelect = function (method) {
      // Methods
      if (typeof method == "string") {
        if (method == "update") {
          this.each(function () {
            var $select = $(this);
            var $dropdown = $(this).next(".nice-select");
            var open = $dropdown.hasClass("open");
            if ($dropdown.length) {
              $dropdown.remove();
              create_nice_select($select);
              if (open) {
                $select.next().trigger("click");
              }
            }
          });
        } else if (method == "destroy") {
          this.each(function () {
            var $select = $(this);
            var $dropdown = $(this).next(".nice-select");
            if ($dropdown.length) {
              $dropdown.remove();
              $select.css("display", "");
            }
          });
          if ($(".nice-select").length == 0) {
            $(document).off(".nice_select");
          }
        } else {
          console.log('Method "' + method + '" does not exist.');
        }
        return this;
      }

      // Hide native select
      this.hide();

      // Create custom markup
      this.each(function () {
        var $select = $(this);
        if (!$select.next().hasClass("nice-select")) {
          create_nice_select($select);
        }
      });
      function create_nice_select($select) {
        $select.after($("<div></div>").addClass("nice-select").addClass($select.attr("class") || "").addClass($select.attr("disabled") ? "disabled" : "").attr("tabindex", $select.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
        var $dropdown = $select.next();
        var $options = $select.find("option");
        var $selected = $select.find("option:selected");
        $dropdown.find(".current").html($selected.data("display") || $selected.text());
        $options.each(function (i) {
          var $option = $(this);
          var display = $option.data("display");
          $dropdown.find("ul").append($("<li></li>").attr("data-value", $option.val()).attr("data-display", display || null).addClass("option" + ($option.is(":selected") ? " selected" : "") + ($option.is(":disabled") ? " disabled" : "")).html($option.text()));
        });
      }

      /* Event listeners */

      // Unbind existing events in case that the plugin has been initialized before
      $(document).off(".nice_select");

      // Open/close
      $(document).on("click.nice_select", ".nice-select", function (event) {
        var $dropdown = $(this);
        $(".nice-select").not($dropdown).removeClass("open");
        $dropdown.toggleClass("open");
        if ($dropdown.hasClass("open")) {
          $dropdown.find(".option");
          $dropdown.find(".focus").removeClass("focus");
          $dropdown.find(".selected").addClass("focus");
        } else {
          $dropdown.focus();
        }
      });

      // Close when clicking outside
      $(document).on("click.nice_select", function (event) {
        if ($(event.target).closest(".nice-select").length === 0) {
          $(".nice-select").removeClass("open").find(".option");
        }
      });

      // Option click
      $(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (event) {
        var $option = $(this);
        var $dropdown = $option.closest(".nice-select");
        $dropdown.find(".selected").removeClass("selected");
        $option.addClass("selected");
        var text = $option.data("display") || $option.text();
        $dropdown.find(".current").text(text);
        $dropdown.prev("select").val($option.data("value")).trigger("change");
        setTimeout(function () {
          if (!$dropdown.hasClass("open")) {
            $dropdown.addClass("open");
          }
        }, 1);
      });

      // Keyboard events
      $(document).on("keydown.nice_select", ".nice-select", function (event) {
        var $dropdown = $(this);
        var $focused_option = $($dropdown.find(".focus") || $dropdown.find(".list .option.selected"));

        // Space or Enter
        if (event.keyCode == 32 || event.keyCode == 13) {
          if ($dropdown.hasClass("open")) {
            $focused_option.trigger("click");
          } else {
            $dropdown.trigger("click");
          }
          return false;
          // Down
        } else if (event.keyCode == 40) {
          if (!$dropdown.hasClass("open")) {
            $dropdown.trigger("click");
          } else {
            var $next = $focused_option.nextAll(".option:not(.disabled)").first();
            if ($next.length > 0) {
              $dropdown.find(".focus").removeClass("focus");
              $next.addClass("focus");
            }
          }
          return false;
          // Up
        } else if (event.keyCode == 38) {
          if (!$dropdown.hasClass("open")) {
            $dropdown.trigger("click");
          } else {
            var $prev = $focused_option.prevAll(".option:not(.disabled)").first();
            if ($prev.length > 0) {
              $dropdown.find(".focus").removeClass("focus");
              $prev.addClass("focus");
            }
          }
          return false;
          // Esc
        } else if (event.keyCode == 27) {
          if ($dropdown.hasClass("open")) {
            $dropdown.trigger("click");
          }
          // Tab
        } else if (event.keyCode == 9) {
          if ($dropdown.hasClass("open")) {
            return false;
          }
        }
      });

      // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
      var style = document.createElement("a").style;
      style.cssText = "pointer-events:auto";
      if (style.pointerEvents !== "auto") {
        $("html").addClass("no-csspointerevents");
      }
      return this;
    };
  };
  _proto.addToolSetBuilderCard = function addToolSetBuilderCard() {
    var categoryId = this.context.categoryId;
    //console.log('cattt ', categoryId)
    // Only add the card if category ID is 74
    if (categoryId === 74) {
      var toolSetBuilderCard = "\n        <div id=\"tool-set-builder-card\" \n           class=\"product tool-set-builder-card\"\n           data-product-price=\"4813\"\n           data-date-created=\"2025-01-01\"\n           data-best-selling=\"0\"\n           data-custom-best-selling=\"0\"\n           data-custom-sort=\"-1\"\n           data-custom-num=\"-1\"\n           filter-data=\"MA 7A 710 1012 FH EH SF MF\">\n        <div class=\"card-wrapper\">\n          <a class=\"card-img-container card product--card\" href=\"/custom-automatic-tool-set/\">\n            <img src=\"https://cdn11.bigcommerce.com/s-89a9ntp16/images/stencil/original/image-manager/455.png\" \n                  alt=\"Level5 Tool Set Builder - Customize Today\" \n                  title=\"Level5 Tool Set Builder\" \n                  class=\"card-image tool-builder-image\">\n          </a>\n        </div>\n      </div>\n    ";
      return toolSetBuilderCard;
    }
    return null;
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ },

/***/ "./assets/js/theme/common/utils/translations-utils.js"
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./assets/js/theme/custom/custom-sidebar-filter.js"
/*!*********************************************************!*\
  !*** ./assets/js/theme/custom/custom-sidebar-filter.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkFilterFromCustomField: () => (/* binding */ checkFilterFromCustomField),
/* harmony export */   customSidebar: () => (/* binding */ customSidebar)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var customSidebar = function customSidebar() {
  var title = {
    // Include Automatic Taper?
    // YT: "Taper Included",
    // NT: "No Taper",

    // // Flat Box Set Sizes:
    // 710: `7"/10" Boxes`,
    // 1012: `10"/12" Boxes`,
    // 71012: `7"/10"/12" Boxes`,

    // // Flat Box Capacities:
    // SF: `Standard`,
    // MF: `MEGA`,

    // // Corner Applicator Type:
    // MA: "MiniShot™",
    // "7A": '7" Corner Box',
    // "8A": '8" Corner Box',

    // // # of Corner Finishers:
    // "03": `3" Corner Finisher`,
    // "0335": `3"/3.5" Corner Finishers`,

    // // # of Compound Pumps:
    // "1P": "1 Pump",
    // "2P": "2 Pumps",

    // // Nail Spotter Included?
    // YN: "Nail Spotter",
    // NN: "No Nail Spotter",

    // // Handle Type:
    // FH: "FL Handles",
    // EH: "Ext Handles",
  };
  // $('.form-select').select2();

  $(".tag--block").each(function () {
    title[$(this).find("input").val()] = $(this).find("span").attr("top-title");
  });
  window.onresize = function (resize) {
    if (window.innerWidth > 1024) {
      $(".filter-list_container[pc]").css("display", "flex");
      $(".filter-list_container[mobile]").css("display", "none");
    } else {
      $(".filter-list_container[mobile]").css("display", "flex");
      $(".filter-list_container[pc]").css("display", "none");
    }
  };
  // console.log(title);

  $("#filter-button-mobile").on("click", function () {
    $(".custom-model-main").addClass("model-open");
  });
  $(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass("model-open");
  });
  $(".filter--show_button").each(function () {
    $(this).click(function () {
      var block = $("[filter-block=\"" + $(this).attr("filter-button") + "\"]");
      // if (block.css("display") === "none") {
      //   block.css("display", "grid");
      // } else {
      //   block.css("display", "none");
      // }
      if (block.hasClass("show")) {
        block.removeClass("show");
      } else {
        block.addClass("show");
      }
      // console.log("clicked");
    });
  });
  $(".tag_title--block").click(function () {
    var input = $(this).siblings().find("input");
    if (input.is(":checked")) {
      input.prop("checked", false);
    } else {
      input.prop("checked", true);
    }
    fillFilterList();
  });
  $("[input-filter]").on("change", fillFilterList);
  $(".filter-wrapper[sort-block]").on("mousedown", function (evt) {});
  function clearFilterAtTop(val) {
    $("[input-filter][value=\"" + val + "\"]").prop("checked", false);
    fillFilterList();
  }
  function fillFilterList() {
    var temp = [];
    $(".filter-list_container").empty();
    if ($("[input-filter]:checked").length > 0) {
      if (window.innerWidth > 1024) {
        $(".filter-list_container[pc]").css("display", "flex");
        $(".filter-list_container[mobile]").css("display", "none");
      } else {
        $(".filter-list_container[mobile]").css("display", "flex");
        $(".filter-list_container[pc]").css("display", "none");
      }
      $("#isotope-container").css("margin-top", "10px");
      $(".filter-list_container").append("\n      <li class=\"filter-list clear-all\" data=\"clear-all-filter\">\n          <div>\n            <u>Clear All</u>\n          </div>\n        </li>");
      $("[data=\"clear-all-filter\"]").on("click", function () {
        $("[input-filter]:checked").each(function () {
          $(this).prop("checked", false);
        });
        fillFilterList();
      });
    } else {
      $(".filter-list_container").css("display", "none");
      $("#isotope-container").css("margin-top", "0px");
    }
    $("[input-filter]:checked").each(function () {
      var val = $(this).val();
      temp.push(val);
      $(".filter-list_container").append("<li class=\"filter-list\" data=\"" + val + "\"\">\n      <div>\n      " + title[val] + "\n      <div>x</div>\n      </div></li>");
      setTimeout(function () {
        $(".filter-list[data=\"" + val + "\"]").click(function () {
          clearFilterAtTop(val);
        });
      }, 0);
    });
    var createEvent = new Event("CheckboxUpdated", {});
    window.dispatchEvent(createEvent);
  }
};
var checkFilterFromCustomField = function checkFilterFromCustomField() {
  var filterData = [];
  $("#isotope-container .product").each(function () {
    filterData = filterData.concat($(this).attr("filter-data").split(" "));
  });
  filterData = filterData.filter(function (value, index, self) {
    return self.indexOf(value) === index && value.length > 0;
  });
  console.log(filterData);
  $(".filter--container .filter--box").each(function () {
    var notExist = true;
    $(this).find("input").each(function () {
      if (filterData.includes($(this).val())) {
        notExist = false;
        // break;
      }
    });
    if (notExist) {
      $(this).hide();
    }
  });
};


/***/ },

/***/ "./assets/js/theme/custom/its-category.js"
/*!************************************************!*\
  !*** ./assets/js/theme/custom/its-category.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ITSCategory)
/* harmony export */ });
var ITSCategory = /*#__PURE__*/function () {
  function ITSCategory(context) {
    this.context = context;
  }
  var _proto = ITSCategory.prototype;
  _proto.afterFacetUpdate = function afterFacetUpdate() {};
  return ITSCategory;
}();


/***/ },

/***/ "./assets/js/theme/custom/jquery-nice-select.js"
/*!******************************************************!*\
  !*** ./assets/js/theme/custom/jquery-nice-select.js ***!
  \******************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
var niceSelect = function niceSelect($) {
  (function ($) {
    $.fn.niceSelect = function (method) {
      // Methods
      if (typeof method == 'string') {
        if (method == 'update') {
          this.each(function () {
            var $select = $(this);
            var $dropdown = $(this).next('.nice-select');
            var open = $dropdown.hasClass('open');
            if ($dropdown.length) {
              $dropdown.remove();
              create_nice_select($select);
              if (open) {
                $select.next().trigger('click');
              }
            }
          });
        } else if (method == 'destroy') {
          this.each(function () {
            var $select = $(this);
            var $dropdown = $(this).next('.nice-select');
            if ($dropdown.length) {
              $dropdown.remove();
              $select.css('display', '');
            }
          });
          if ($('.nice-select').length == 0) {
            $(document).off('.nice_select');
          }
        } else {
          console.log('Method "' + method + '" does not exist.');
        }
        return this;
      }

      // Hide native select
      this.hide();

      // Create custom markup
      this.each(function () {
        var $select = $(this);
        if (!$select.next().hasClass('nice-select')) {
          create_nice_select($select);
        }
      });
      function create_nice_select($select) {
        $select.after($('<div></div>').addClass('nice-select').addClass($select.attr('class') || '').addClass($select.attr('disabled') ? 'disabled' : '').attr('tabindex', $select.attr('disabled') ? null : '0').html('<span class="current"></span><ul class="list"></ul>'));
        var $dropdown = $select.next();
        var $options = $select.find('option');
        var $selected = $select.find('option:selected');
        $dropdown.find('.current').html($selected.data('display') || $selected.text());
        $options.each(function (i) {
          var $option = $(this);
          var display = $option.data('display');
          $dropdown.find('ul').append($('<li></li>').attr('data-value', $option.val()).attr('data-display', display || null).addClass('option' + ($option.is(':selected') ? ' selected' : '') + ($option.is(':disabled') ? ' disabled' : '')).html($option.text()));
        });
      }

      /* Event listeners */

      // Unbind existing events in case that the plugin has been initialized before
      $(document).off('.nice_select');

      // Open/close
      $(document).on('click.nice_select', '.nice-select', function (event) {
        var $dropdown = $(this);
        $('.nice-select').not($dropdown).removeClass('open');
        $dropdown.toggleClass('open');
        if ($dropdown.hasClass('open')) {
          $dropdown.find('.option');
          $dropdown.find('.focus').removeClass('focus');
          $dropdown.find('.selected').addClass('focus');
        } else {
          $dropdown.focus();
        }
      });

      // Close when clicking outside
      $(document).on('click.nice_select', function (event) {
        if ($(event.target).closest('.nice-select').length === 0) {
          $('.nice-select').removeClass('open').find('.option');
        }
      });

      // Option click
      $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
        var $option = $(this);
        var $dropdown = $option.closest('.nice-select');
        $dropdown.find('.selected').removeClass('selected');
        $option.addClass('selected');
        var text = $option.data('display') || $option.text();
        $dropdown.find('.current').text(text);
        $dropdown.prev('select').val($option.data('value')).trigger('change');
      });

      // Keyboard events
      $(document).on('keydown.nice_select', '.nice-select', function (event) {
        var $dropdown = $(this);
        var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

        // Space or Enter
        if (event.keyCode == 32 || event.keyCode == 13) {
          if ($dropdown.hasClass('open')) {
            $focused_option.trigger('click');
          } else {
            $dropdown.trigger('click');
          }
          return false;
          // Down
        } else if (event.keyCode == 40) {
          if (!$dropdown.hasClass('open')) {
            $dropdown.trigger('click');
          } else {
            var $next = $focused_option.nextAll('.option:not(.disabled)').first();
            if ($next.length > 0) {
              $dropdown.find('.focus').removeClass('focus');
              $next.addClass('focus');
            }
          }
          return false;
          // Up
        } else if (event.keyCode == 38) {
          if (!$dropdown.hasClass('open')) {
            $dropdown.trigger('click');
          } else {
            var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
            if ($prev.length > 0) {
              $dropdown.find('.focus').removeClass('focus');
              $prev.addClass('focus');
            }
          }
          return false;
          // Esc
        } else if (event.keyCode == 27) {
          if ($dropdown.hasClass('open')) {
            $dropdown.trigger('click');
          }
          // Tab
        } else if (event.keyCode == 9) {
          if ($dropdown.hasClass('open')) {
            return false;
          }
        }
      });

      // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
      var style = document.createElement('a').style;
      style.cssText = 'pointer-events:auto';
      if (style.pointerEvents !== 'auto') {
        $('html').addClass('no-csspointerevents');
      }
      return this;
    };
  })(jQuery);
};

/***/ },

/***/ "./assets/js/theme/custom/toggle-category-listing-view.js"
/*!****************************************************************!*\
  !*** ./assets/js/theme/custom/toggle-category-listing-view.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleCategoryListingView)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var ToggleCategoryListingView = /*#__PURE__*/function () {
  function ToggleCategoryListingView(context) {
    var _this = this;
    this.context = context;
    this.defaultViewType = this.context.defaultViewType;
    this.oppositeViewType = this.defaultViewType !== 'grid' ? 'grid' : 'list';
    this.productsPerPage = this.context.categoryProductsPerPage;
    this.loadingOverlay = $('.loadingOverlay.loadingOverlay--product-listing');
    $('body').on('facetedSearchRefresh', function () {
      _this.addToggleEvents();
    });
    this.init();
  }
  var _proto = ToggleCategoryListingView.prototype;
  _proto.getStoredViewType = function getStoredViewType() {
    return sessionStorage.getItem('category-view-type') || null;
  };
  _proto.getRequestTemplateType = function getRequestTemplateType(type) {
    var pageType = this.getStoredViewType();
    return !pageType ? type + "/product-listing" : "custom/category-" + pageType + "-view";
  };
  _proto.storeViewType = function storeViewType(type) {
    sessionStorage.setItem('category-view-type', type);
  };
  _proto.getCategoryPage = function getCategoryPage(pageType) {
    var _this2 = this;
    var config = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: this.productsPerPage
          }
        }
      },
      template: "custom/category-" + pageType + "-view"
    };
    this.loadingOverlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.api.getPage(_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getUrl(), config, function (err, content) {
      if (err) {
        throw new Error(err);
      }
      $('#product-listing-container').html(content);
      _this2.loadingOverlay.hide();
      _this2.storeViewType(pageType);
      _this2.addToggleEvents();
      $('body').triggerHandler('productViewModeChanged');
    });
  };
  _proto.addToggleEvents = function addToggleEvents() {
    var _this3 = this;
    $('.js-category__toggle-view').on('click', function (e) {
      var type = $(e.currentTarget).data('view-type');
      if ($(e.currentTarget).hasClass('active-category-view')) return;
      _this3.getCategoryPage(type, _this3.addToggleEvents);
    });
  };
  _proto.init = function init() {
    var storedViewType = this.getStoredViewType();
    if (storedViewType === this.defaultViewType || !storedViewType) {
      return this.addToggleEvents();
    }
    this.getCategoryPage(this.oppositeViewType);
  };
  return ToggleCategoryListingView;
}();


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQ3ZDO0FBQzhCO0FBQy9CO0FBSVA7QUFDaUI7QUFBQSxJQUVwQ1csUUFBUSwwQkFBQUMsWUFBQTtFQUMzQixTQUFBRCxTQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ25CQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR1osbUdBQTJCLENBQUNTLE9BQU8sQ0FBQzs7SUFFaEU7QUFDSjtBQUNBO0lBQ0lDLEtBQUEsQ0FBS1QsV0FBVyxHQUFHLElBQUlBLDREQUFXLENBQUNRLE9BQU8sQ0FBQztJQUMzQ0MsS0FBQSxDQUFLRyx5QkFBeUIsR0FBRyxJQUFJWCw0RUFBeUIsQ0FBQ08sT0FBTyxDQUFDO0lBQUMsT0FBQUMsS0FBQTtFQUMxRTtFQUFDSSxjQUFBLENBQUFQLFFBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFPLE1BQUEsR0FBQVIsUUFBQSxDQUFBUyxTQUFBO0VBQUFELE1BQUEsQ0FFREUsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLGNBQWMsRUFBRTtJQUMxREYsUUFBUSxDQUFDRyxJQUFJLENBQUM7TUFDWkMsSUFBSSxFQUFFSCxRQUFRO01BQ2QsV0FBVyxFQUFFQztJQUNmLENBQUMsQ0FBQztFQUNKLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsK0JBQStCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ2hDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMs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QUFDWCxnQkFBZ0IsQ0FBQztFQUMvQyxDQUFDO0VBQUEsT0FBQXJRLHlCQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9jdXN0b20tc2lkZWJhci1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL2l0cy1jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vanF1ZXJ5LW5pY2Utc2VsZWN0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSBcIkBiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzXCI7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSBcIi4vY2F0YWxvZ1wiO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tIFwiLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0c1wiO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSBcIi4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoXCI7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tIFwiLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlsc1wiO1xuaW1wb3J0IElUU0NhdGVnb3J5IGZyb20gXCIuL2N1c3RvbS9pdHMtY2F0ZWdvcnlcIjtcbmltcG9ydCBUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IGZyb20gXCIuL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3XCI7XG5pbXBvcnQgY3VzdG9tR2xvYmFsIGZyb20gXCIuL2N1c3RvbS9pdHMtZ2xvYmFsXCI7XG5pbXBvcnQge1xuICBjdXN0b21TaWRlYmFyLFxuICBjaGVja0ZpbHRlckZyb21DdXN0b21GaWVsZCxcbn0gZnJvbSBcIi4vY3VzdG9tL2N1c3RvbS1zaWRlYmFyLWZpbHRlclwiO1xuaW1wb3J0IHsgbmljZVNlbGVjdCB9IGZyb20gXCIuL2N1c3RvbS9qcXVlcnktbmljZS1zZWxlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcbiAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuXG4gICAgLyoqXG4gICAgICogSW50dWl0U29sdXRpb25zIC0gQ3VzdG9tIENhdGVnb3J5XG4gICAgICovXG4gICAgdGhpcy5JVFNDYXRlZ29yeSA9IG5ldyBJVFNDYXRlZ29yeShjb250ZXh0KTtcbiAgICB0aGlzLnRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcgPSBuZXcgVG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyhjb250ZXh0KTtcbiAgfVxuXG4gIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgXCJhcmlhLWxpdmVcIjogYXJpYUxpdmVTdGF0dXMsXG4gICAgfSk7XG4gIH1cblxuICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xuICAgIGlmICghJChcIltkYXRhLXNob3AtYnktcHJpY2VdXCIpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaWYgKCQoXCIubmF2TGlzdC1hY3Rpb25cIikuaGFzQ2xhc3MoXCJpcy1hY3RpdmVcIikpIHtcbiAgICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZVwiKS5mb2N1cygpO1xuICAgIH1cblxuICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoXG4gICAgICAgICQoXCJzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlXCIpLFxuICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICBcImFzc2VydGl2ZVwiLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgb25SZWFkeSgpIHtcbiAgICAvLyB0aGlzLnBvcHVsYXRlR3JpZFByb2R1Y3QoKTtcbiAgICBpZiAoJChcIi5wcm9kdWN0XCIpLmxlbmd0aCA8IDk1KSB7XG4gICAgICAkKFwiI2xvYWRlci1ibG9ja1wiKS5oaWRlKCk7XG4gICAgfVxuICAgIHRoaXMubmljZVNlbGVjdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICQoJ1thbGwtc29ydC1zZWxlY3QtcGNdJykubmljZVNlbGVjdCgpO1xuICAgICAgJChcIi5mb3JtLXNlbGVjdFwiKS5uaWNlU2VsZWN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy52YWxpZGF0ZVByb2R1Y3RzQ291bnQoKTtcbiAgICB0aGlzLmR5bmFtaWNSZXNpemVQcm9kdWN0R3JpZCgpO1xuICAgIC8vIHRoaXMuY29uc3RydWN0RGF0YSgpO1xuICAgIGN1c3RvbVNpZGViYXIoKTtcbiAgICAvLyBjaGVja0ZpbHRlckZyb21DdXN0b21GaWVsZCgpO1xuXG4gICAgJCgnW2RhdGEtYnV0dG9uLXR5cGU9XCJhZGQtY2FydFwiXScpLm9uKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKFxuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLFxuICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICBcInBvbGl0ZVwiLFxuICAgICAgKSxcbiAgICApO1xuXG4gICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgIGlmICgkKFwiI2ZhY2V0ZWRTZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgaG9va3Mub24oXCJzb3J0Qnktc3VibWl0dGVkXCIsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgICQoXCJhLnJlc2V0LWJ0blwiKS5vbihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcyhcbiAgICAgICAgJChcInNwYW4ucmVzZXQtbWVzc2FnZVwiKSxcbiAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgXCJwb2xpdGVcIixcbiAgICAgICksXG4gICAgKTtcblxuICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcbiAgfVxuXG4gIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoXCJbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dXCIpO1xuICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKFwiI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXJcIik7XG4gICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKFwiI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgcHJvZHVjdExpc3Rpbmc6XG4gICAgICAgICAgdGhpcy50b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3LmdldFJlcXVlc3RUZW1wbGF0ZVR5cGUoXCJjYXRlZ29yeVwiKSxcbiAgICAgICAgc2lkZWJhcjogXCJjYXRlZ29yeS9zaWRlYmFyXCIsXG4gICAgICB9LFxuICAgICAgc2hvd01vcmU6IFwiY2F0ZWdvcnkvc2hvdy1tb3JlXCIsXG4gICAgfTtcblxuICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKFxuICAgICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgICAoY29udGVudCkgPT4ge1xuICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICQoXCJib2R5XCIpLnRyaWdnZXJIYW5kbGVyKFwiY29tcGFyZVJlc2V0XCIpO1xuXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwLFxuICAgICAgICApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnR1aXRTb2x1dGlvbnMgLSBDYXRlZ29yeSBVcGRhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuSVRTQ2F0ZWdvcnkuYWZ0ZXJGYWNldFVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAkKFwiYm9keVwiKS5vbihcInByb2R1Y3RWaWV3TW9kZUNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgTmV3T3B0cyA9IHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOlxuICAgICAgICAgICAgdGhpcy50b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3LmdldFJlcXVlc3RUZW1wbGF0ZVR5cGUoXCJjYXRlZ29yeVwiKSxcbiAgICAgICAgICBzaWRlYmFyOiBcImNhdGVnb3J5L3NpZGViYXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01vcmU6IFwiY2F0ZWdvcnkvc2hvdy1tb3JlXCIsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmZhY2V0ZWRTZWFyY2gudXBkYXRlUmVxdWVzdE9wdGlvbnMoTmV3T3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICAvL3Jlc2l6ZVxuICBkeW5hbWljUmVzaXplUHJvZHVjdEdyaWQoKSB7XG4gICAgLy8gY29uc3QgZmlsdGVyID0gJChcIi5hY3Rpb25CYXIuZmlsdGVyLS1zZWN0aW9uXCIpLndpZHRoKCk7XG4gICAgLy8gY29uc3Qgd3JhcHBlciA9ICQoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKS53aWR0aCgpO1xuICAgIC8vICQoXCIjcHJvZHVjdC1ibG9ja1wiKS53aWR0aCh3cmFwcGVyIC0gZmlsdGVyKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3cmFwcGVyIC0gZmlsdGVyKTtcbiAgfVxuXG4gIC8vU1NDT0RFOiBQb3B1bGF0ZSBQcm9kdWN0IEdyaWQgaW4gY2F0ZWdvcnkuaHRtbFxuICB2YWxpZGF0ZVByb2R1Y3RzQ291bnQoKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLmNvbnRleHQucHJvZHVjdHM7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG4gICAgY29uc3QgVVVJRGNhdGMgPSB0aGlzLmNvbnRleHQuVVVJRGNhdGM7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRoaXMuY29udGV4dC5jYXRlZ29yeUlkO1xuICAgIGxldCBudW0gPSB0aGlzLmNvbnRleHQubnVtO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbiAgICAvL2NvbnNvbGUubG9nKCdjYXRJRCBpcyAnLCBjYXRlZ29yeUlkKVxuICAgIGNvbnN0IGV4aXN0UHJvZElkID0gW107XG4gICAgcHJvZHVjdHMuZm9yRWFjaCgocHIpID0+IHtcbiAgICAgIGV4aXN0UHJvZElkLnB1c2gocHIuaWQpO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc3QgdG9vbEJ1aWxkZXJDYXJkID0gdGhpcy5hZGRUb29sU2V0QnVpbGRlckNhcmQoKTtcbiAgICAvLyBpZiAodG9vbEJ1aWxkZXJDYXJkKSB7XG4gICAgLy8gICAkKFwiI2lzb3RvcGUtY29udGFpbmVyXCIpLnByZXBlbmQodG9vbEJ1aWxkZXJDYXJkKTtcbiAgICAvLyAgIC8vdGhpcy5zZXR1cFRvb2xCdWlsZGVyRXZlbnRzKCk7XG4gICAgLy8gfVxuXG4gICAgaWYgKCQoXCIucHJvZHVjdFwiKS5sZW5ndGggPiA5OCkge1xuICAgICAgcmVxdWVzdEF4aW9zKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiI2xvYWRlci1ibG9ja1wiKS5oaWRlKCk7XG4gICAgICBib2R5Lm5ld0NvbmZpZ3VyZUlzb3RvcGVGb3JBbGwoKTtcbiAgICAgIGJvZHkucmVzdGFydEN1c3RvbUdsb2JhbCgpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKGV4aXN0UHJvZElkKTtcbiAgICBmdW5jdGlvbiByZXF1ZXN0QXhpb3MoYXR0ZW1wdCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9pMmxxMThsNHY4LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3Byb2R1Y3RzLyR7Y2F0ZWdvcnlJZH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgZGF0YS5mb3JFYWNoKChwcikgPT4ge1xuICAgICAgICAgICAgaWYgKGV4aXN0UHJvZElkLmluY2x1ZGVzKHByW1wiaWRcIl0pKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgLnByb2R1Y3RbZGF0YS1lbnRpdHktaWQ9XCIke3ByW1wiaWRcIl19XCJdYCk7XG4gICAgICAgICAgICAgICRpdGVtLmF0dHIoXCJkYXRhLWJlc3Qtc2VsbGluZ1wiLCBgJHtwcltcInRvdGFsX3NvbGRcIl19YCk7XG4gICAgICAgICAgICAgICRpdGVtLmF0dHIoXCJkYXRhLWRhdGUtY3JlYXRlZFwiLCBgJHtwcltcImRhdGVfY3JlYXRlZFwiXX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdHMubGVuZ3RoID4gOTkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBjb25zdHJ1Y3RUZW1wbGF0ZShwciwgbnVtKTtcbiAgICAgICAgICAgICAgbnVtID0gbnVtICsgMTtcbiAgICAgICAgICAgICAgJChcIiNpc290b3BlLWNvbnRhaW5lclwiKS5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoXCIjbG9hZGVyLWJsb2NrXCIpLmhpZGUoKTtcbiAgICAgICAgICBib2R5Lm5ld0NvbmZpZ3VyZUlzb3RvcGVGb3JBbGwoKTtcbiAgICAgICAgICBib2R5LnJlc3RhcnRDdXN0b21HbG9iYWwoKTtcbiAgICAgICAgICAvLyBib2R5LmRpc2FibGVWaWV3RGV0YWlsQnV0dG9uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDUpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBeGlvcyhhdHRlbXB0ICsgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdFRlbXBsYXRlKHByLCBudW0pIHtcbiAgICAgIGxldCBpbWcgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJbXCJpbWFnZXNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByW1wiaW1hZ2VzXCJdW2ldW1wiaXNfdGh1bWJuYWlsXCJdKSB7XG4gICAgICAgICAgaW1nID0gcHJbXCJpbWFnZXNcIl1baV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGFjdGlvblNlY3Rpb24gPSBcIlwiO1xuICAgICAgaWYgKHByW1widmFyaWFudHNcIl0ubGVuZ3RoID4gMSkge1xuICAgICAgICBhY3Rpb25TZWN0aW9uID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBxdWlja3ZpZXcgYnV0dG9uLS1xdWlja3ZpZXdcIiBkYXRhLXByb2R1Y3QtaWQ9XCIke3ByW1wiaWRcIl19XCI+VmlldyBPcHRpb25zPC9idXR0b24+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvblNlY3Rpb24gPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGMganMtY2FyZC1hdGNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYXRjX19zZWN0aW9uIGNhcmQtYXRjX19zZWN0aW9uLS1xdHlcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2FyZC1hdGNfX3F0eS0ke3ByW1wiaWRcIl19LSR7VVVJRGNhdGN9XCIgY2xhc3M9XCJjYXJkLWF0Y19fbGFiZWwgaXMtc3JPbmx5XCI+UXVhbnRpdHk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGMtaW5jcmVtZW50IGNhcmQtYXRjLWluY3JlbWVudC0taGFzLWJ1dHRvbnMganMtY2FyZC1hdGMtaW5jcmVtZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJmb3JtLWlucHV0IGNhcmQtYXRjX19pbnB1dCBjYXJkLWF0Y19faW5wdXQtLXRvdGFsIGpzLWNhcmQtYXRjX19pbnB1dC0tdG90YWxcIiBuYW1lPVwiY2FyZC1hdGNfX3F0eS0ke3ByW1wiaWRcIl19LSR7VVVJRGNhdGN9XCIgaWQ9XCJjYXJkLWF0Y19fcXR5LSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiB2YWx1ZT1cIjFcIiBtaW49XCIxXCIgcGF0dGVybj1cIlswLTldKlwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYXRjLWJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgZGF0YS1hY3Rpb249XCJpbmNcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5JbmNyZWFzZSBRdWFudGl0eSBvZiB1bmRlZmluZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXdyYXBwZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWFkZFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImRlY1wiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkRlY3JlYXNlIFF1YW50aXR5IG9mIHVuZGVmaW5lZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljb24tbWludXNcIj48L3VzZT5QUFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYXRjX19zZWN0aW9uIGNhcmQtYXRjX19zZWN0aW9uLS1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhcmQtYXRjX19idXR0b24gYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBqcy1jYXJkLWF0Y19fYnV0dG9uXCIgaWQ9XCJjYXJkLWF0Y19fYWRkLSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiBkYXRhLWRlZmF1bHQtbWVzc2FnZT1cIkFkZCB0byBDYXJ0XCIgZGF0YS13YWl0LW1lc3NhZ2U9XCJBRERJTkcuLi5cIiBkYXRhLWFkZGVkLW1lc3NhZ2U9XCJBZGQgdG8gQ2FydFwiIHZhbHVlPVwiQWRkIHRvIENhcnRcIiBkYXRhLWNhcmQtYWRkLXRvLWNhcnQ9XCIvY2FydC5waHA/YWN0aW9uPWFkZCZhbXA7cHJvZHVjdF9pZD0ke3ByW1wiaWRcIl19XCIgZGF0YS1ldmVudC10eXBlPVwicHJvZHVjdC1jbGlja1wiPkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXN0YXR1cy1tZXNzYWdlIGFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkFkZGluZyB0byBjYXJ04oCmIFRoZSBpdGVtIGhhcyBiZWVuIGFkZGVkPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdC0ke3ByW1wiaWRcIl19XCIgc29ydC1vcmRlcj1cIiR7cHJbXCJzb3J0X29yZGVyXCJdfVwiIFxuICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFwiXG4gICAgICAgICAgZGF0YS1mYWtlLW5hbWU9XCIke3ByW1wiZmFrZS1oZWFkaW5nXCJdfVwiIFxuICAgICAgICAgIGRhdGEtcHJvZHVjdC1wcmljZT1cIiR7cHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgOiBwcltcImNhbGN1bGF0ZWRfcHJpY2VcIl0udG9GaXhlZCgyKVxuICAgICAgICB9XCIgXG4gICAgICAgICAgcHJvZHVjdC1kYXRlLWNyZWF0ZWQ9XCIke3ByW1wiZGF0ZV9jcmVhdGVkXCJdfVwiIFxuICAgICAgICAgIHByb2R1Y3QtaXMtZmVhdHVyZWQ9XCIke3ByW1wiaXNfZmVhdHVyZWRcIl19XCIgXG4gICAgICAgICAgcHJvZHVjdC1iZXN0LXNlbGxpbmc9XCIke3ByW1widG90YWxfc29sZFwiXX1cIlxuICAgICAgICAgIHByb2R1Y3QtY3VzdG9tLXNvcnQtb3JkZXI9XCIke3ByW1wiY3VzdG9tLXNvcnQtb3JkZXJcIl19XCJcbiAgICAgICAgICBkYXRhLWN1c3RvbS1iZXN0LXNlbGxpbmc9XCIke251bX1cIiBcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiIGRhdGEtdGVzdD1cImNhcmQtJHtwcltcImlkXCJdfVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJjYXJkLWZpZ3VyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZS1mbGFnLXNhc2hcIiBzdHlsZT1cImRpc3BsYXk6ICR7cHJbXCJ2YXJpYW50c1wiXVswXS5zYWxlX3ByaWNlICE9PSAwXG4gICAgICAgICAgPyBcImJsb2NrO1wiXG4gICAgICAgICAgOiBcIm5vbmU7XCJcbiAgICAgICAgfSBcIj48c3BhbiBjbGFzcz1cInNhbGUtdGV4dFwiPk9uIFNhbGU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3ByW1wiY3VzdG9tX3VybFwiXVtcInVybFwiXX1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWZpZ3VyZV9fbGlua1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiJHtwcltcIm5hbWVcIl19LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCR7cHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgOiBwcltcImNhbGN1bGF0ZWRfcHJpY2VcIl0udG9GaXhlZCgyKVxuICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGNhcmQtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWdbXCJ1cmxfdGh1bWJuYWlsXCJdfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltZ1tcImRlc2NyaXB0aW9uXCJdXCIgdGl0bGU9XCIke3ByW1wiZmFrZS1oZWFkaW5nXCJdXG4gICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldD1cIiR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxNjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMzIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDY0MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA5NjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTI4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxOTIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDI1NjB3XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCIke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDMyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA2NDB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gOTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDEyODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTkyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAyNTYwd1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWFnZSBsYXp5YXV0b3NpemVzIGxhenlsb2FkZWRcIiBzaXplcz1cIjI0OHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uLWJvZHlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RWaWV3LXR5cGUtdGl0bGUgaDRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC1uYW1lPVwiXCI+JHtwcltcImZha2UtaGVhZGluZ1wiXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiJHtwcltcIm5hbWVcIl19LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR7cHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1xuICAgICAgICAgICAgXCJjYWxjdWxhdGVkX3ByaWNlXCJcbiAgICAgICAgICBdLnRvRml4ZWQoMilcbiAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ByW1wiY3VzdG9tX3VybFwiXVtcInVybFwiXX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJbXCJuYW1lXCJdfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1za3VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBTS1UjOiAke3ByW1wic2t1XCJdfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLXByaWNlXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IHJycC1wcmljZS0td2l0aG91dFRheCBoNFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj4gTVNSUDogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ycnAgaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJbXCJ2YXJpYW50c1wiXVswXS5zYWxlX3ByaWNlICE9PSAwXG4gICAgICAgICAgPyBcIiRcIiArIHByW1widmFyaWFudHNcIl1bMF0ucmV0YWlsX3ByaWNlXG4gICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggaDVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+IFdhczogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBoNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLWxhYmVsIGlzLXNyT25seVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1ub3ctbGFiZWwgaXMtc3JPbmx5XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPk5vdzo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4kJHtwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICA/IHByW1widmFyaWFudHNcIl1bMF1bXG4gICAgICAgICAgICBcImNhbGN1bGF0ZWRfcHJpY2VcIlxuICAgICAgICAgIF0udG9GaXhlZCgyKVxuICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1leHRyYVwiIHN0eWxlPVwiZGlzcGxheTogJHtwcltcImN1c3RvbV9maWVsZHNcIl0uZmluZChcbiAgICAgICAgICAoZmllbGQpID0+IGZpZWxkW1wibmFtZVwiXSA9PT0gXCJfX2NhcmQtZXh0cmEtaW5mb1wiLFxuICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IFwicmVsYXRpdmU7XCJcbiAgICAgICAgICA6IFwibm9uZTtcIlxuICAgICAgICB9IFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcltcImN1c3RvbV9maWVsZHNcIl0uZmluZChcbiAgICAgICAgICAoZmllbGQpID0+IGZpZWxkW1wibmFtZVwiXSA9PT0gXCJfX2NhcmQtZXh0cmEtaW5mb1wiLFxuICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHByW1wiY3VzdG9tX2ZpZWxkc1wiXS5maW5kKFxuICAgICAgICAgICAgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICBmaWVsZFtcIm5hbWVcIl0gPT09IFwiX19jYXJkLWV4dHJhLWluZm9cIixcbiAgICAgICAgICApLnZhbHVlXG4gICAgICAgICAgOiBcIlwiXG4gICAgICAgIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7YWN0aW9uU2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24uaHJlZj0ke3ByW1wiY3VzdG9tX3VybFwiXVtcInVybFwiXVxuICAgICAgICB9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiA+VmlldyBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PmA7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHbG9iYWwoKSB7XG4gICAgY3VzdG9tR2xvYmFsKHRoaXMuY29udGV4dCk7XG4gIH1cblxuICAvLyBjaGVjayBpZiBtb2JpbGUgdXNlclxuICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTM4MTY3My9kZXRlY3RpbmctYS1tb2JpbGUtYnJvd3NlclxuICBjaGVja01vYmlsZSgpIHtcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoXG4gICAgICAgICAgYSxcbiAgICAgICAgKSB8fFxuICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KFxuICAgICAgICAgIGEuc3Vic3RyKDAsIDQpLFxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICByZXR1cm4gY2hlY2s7XG4gIH1cblxuICByZXNldFNlY3Rpb25Dc3NGb3JNb2JpbGVWaWV3KCkge1xuICAgIGlmIChzY3JlZW4ud2lkdGggPCA2MDApIHtcbiAgICAgICQoXCJbc2VjdGlvbi12aWV3XVwiKS5hdHRyKFwiaWRcIiwgXCJcIik7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImlkXCIsIFwicHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKTtcbiAgICAgICQoXCJbc2VjdGlvbi12aWV3XVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gICAgfVxuICB9XG5cbiAgZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUoKSB7XG4gICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBpZiAod2lkdGggPiAxMzAwKSB7XG4gICAgICB3aWR0aCA9IDEyMDA7XG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDMyMCkge1xuICAgICAgd2lkdGggPSAzMjA7XG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDYwMCkge1xuICAgICAgLy8gcHVycG9zZWx5IGVtcHR5IGJsb2NrXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gd2lkdGggLSAzMjA7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFNlY3Rpb25Dc3NGb3JNb2JpbGVWaWV3KCk7XG4gICAgLy8gY29uc29sZS5sb2cod2lkdGgpO1xuXG4gICAgJChcIiNncmlkLWFsbC1wcm9kdWN0XCIpLmNzcyhcIndpZHRoXCIsIGAke3dpZHRofXB4YCk7XG4gIH1cblxuICBuZXdDb25maWd1cmVJc290b3BlRm9yQWxsKCkge1xuICAgIC8vICQoXCIuZ3JpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAvLyAgICQoXCIubGRzLWJsb2NrXCIpLmhpZGUoKTtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXNvdG9wZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG5cbiAgICBsZXQgaXNvO1xuICAgIHJ1bklzb3RvcGUoKTtcblxuICAgICQoXCIuZmlsdGVyLS1jb250YWluZXJcIikuY3NzKFwib3BhY2l0eVwiLCBcIjEwMCVcIik7XG4gICAgJChcIiNhbGwtc29ydC1zZWxlY3QsICNhbGwtc29ydC1zZWxlY3RcIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAkKFwiLmZpbHRlci13cmFwcGVyXCIpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJ1bnNldFwiKTtcbiAgICAkKFwiLm5pY2Utc2VsZWN0LmZvcm0tc2VsZWN0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgLypcbiAgICBpc28ub24oXCJhcnJhbmdlQ29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTEwMCkge1xuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxlZFwiKTtcbiAgICAgICAgICAkKGAjaXNvdG9wZS1jb250YWluZXIgLnByb2R1Y3RgKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gTnVtYmVyKCQodGhpcylbMF0uc3R5bGUubGVmdC5yZXBsYWNlKFwiJVwiLCBcIlwiKSk7XG4gICAgICAgICAgICBsZXQgcGVyTGVmdCA9IGxlZnQgKyA1O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSAxNDQwKXtcbiAgICAgICAgICAgICAgaWYobGVmdCA+IDYwKXtcbiAgICAgICAgICAgICAgICBwZXJMZWZ0ID0gTWF0aC5taW4ocGVyTGVmdCwgNjguMik7XG4gICAgICAgICAgICAgIH1lbHNlIGlmKGxlZnQgPiAzMCl7XG4gICAgICAgICAgICAgICAgcGVyTGVmdCA9IE1hdGgubWluKHBlckxlZnQsIDM2LjUpO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwZXJMZWZ0ID0gTWF0aC5taW4ocGVyTGVmdCwgNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBpZihsZWZ0ID4gNjApe1xuICAgICAgICAgICAgICAgIHBlckxlZnQgPSBNYXRoLm1pbihwZXJMZWZ0LCA2OCk7XG4gICAgICAgICAgICAgIH1lbHNlIGlmKGxlZnQgPiAzMCl7XG4gICAgICAgICAgICAgICAgcGVyTGVmdCA9IE1hdGgubWluKHBlckxlZnQsIDM2LjUpO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwZXJMZWZ0ID0gTWF0aC5taW4ocGVyTGVmdCwgNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcylbMF0uc3R5bGUubGVmdCA9IGAke3BlckxlZnR9JWA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIH0sIDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgICovXG5cbiAgICAvLyBUT0RPOiBORVhUXG4gICAgLypcbiAgICBsZXQgYXJyYW5naW5nID0gZmFsc2U7XG4gICAgaXNvLm9uKFwiYXJyYW5nZUNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKGFycmFuZ2luZyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhcnJhbmdpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoJChcIi5maWx0ZXItLWJveFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGxlZnRBcnIgPSBbXTtcbiAgICAgICAgICBsZXQgcm93UHIgPSB7fTtcblxuICAgICAgICAgICQoYCNpc290b3BlLWNvbnRhaW5lciAucHJvZHVjdGApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuY3NzKFwiZGlzcGxheVwiKSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgbGVmdEFyci5wdXNoKCQodGhpcylbMF0uc3R5bGUubGVmdCk7XG4gICAgICAgICAgICAgIGlmIChyb3dQclskKHRoaXMpWzBdLnN0eWxlLnRvcF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJvd1ByWyQodGhpcylbMF0uc3R5bGUudG9wXSA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcm93UHJbJCh0aGlzKVswXS5zdHlsZS50b3BdICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGVmdEFyciA9IEFycmF5LmZyb20oWy4uLm5ldyBTZXQobGVmdEFycildWzBdKTtcblxuICAgICAgICAgIC8vIGxlZnRBcnIgPSBBcnJheS5mcm9tKFsuLi5uZXcgU2V0KHhMaXN0KV1bMF0pO1xuICAgICAgICAgIGxlZnRBcnIgPSBsZWZ0QXJyLnNvcnQoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhBcnJheS5mcm9tKFsuLi5uZXcgU2V0KHhMaXN0KV1bMF0pKTtcbiAgICAgICAgICBjb25zdCByaWdodEtleSA9IHt9O1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmlnaHRLZXlbbGVmdEFycltpXV0gPSBsZWZ0QXJyW2xlZnRBcnIubGVuZ3RoIC0gaSAtIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhyaWdodEtleSk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTEwMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICQoYCNpc290b3BlLWNvbnRhaW5lciAucHJvZHVjdGApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmNzcyhcImRpc3BsYXlcIikgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAvLyAkKHRoaXMpWzBdLnN0eWxlLnRyYW5zaXRpb24gPSBcInJpZ2h0IDAuMnNcIjtcbiAgICAgICAgICAgICAgICAgIC8vIGlmKHJvd1ByWyQodGhpcylbMF0uc3R5bGUudG9wXSA9PT0gbGVmdEFyci5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgLy8gICAkKHRoaXMpWzBdLnN0eWxlLnJpZ2h0ID0gcmlnaHRLZXlbJCh0aGlzKVswXS5zdHlsZS5sZWZ0XTtcbiAgICAgICAgICAgICAgICAgIC8vICAgJCh0aGlzKVswXS5zdHlsZS5sZWZ0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgICAgICAgLy8gICAkKHRoaXMpWzBdLnN0eWxlLnJpZ2h0ID0gJCh0aGlzKVswXS5zdHlsZS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgLy8gICAkKHRoaXMpWzBdLnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgJCh0aGlzKVswXS5zdHlsZS5yaWdodCA9IHJpZ2h0S2V5WyQodGhpcylbMF0uc3R5bGUubGVmdF07XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpWzBdLnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGFycmFuZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gcnVuSXNvdG9wZSgpIHtcbiAgICAgIC8vICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICBpc28gPSBuZXcgSXNvdG9wZShncmlkLCB7XG4gICAgICAgIC8vIG9wdGlvbnMuLi5cbiAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5wcm9kdWN0XCIsXG4gICAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWUsXG4gICAgICAgIGZpdFJvd3M6IHtcbiAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBtYXNvbnJ5OiB7XG4gICAgICAgIC8vIGNvbHVtbldpZHRoIDogMjgwLFxuICAgICAgICAvLyBpc1JUTDogdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICBnZXRTb3J0RGF0YToge1xuICAgICAgICAgIG5hbWU6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByaWNlOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9kdWN0LXByaWNlXCIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJldmlldzogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1yYXRpbmdcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZXN0X3NlbGxpbmc6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1c3RvbS1iZXN0LXNlbGxpbmdcIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbmV3ZXN0OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGUtY3JlYXRlZFwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1c3RvbV9zb3J0X29yZGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXN0b20tc29ydFwiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXN0b21fc29ydF9udW06IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1c3RvbS1udW1cIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gfSwgMCk7XG4gICAgICAkKFwiW2FsbC1zb3J0LXNlbGVjdC1tb2JpbGVdXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9ICQodGhpcykudmFsKCkuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgIGlmICh2YWxbMF0gPT09IFwicmV2aWV3XCIpIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICBzb3J0Qnk6IFt2YWxbMF0sIFwicmF0aW5nX2NvdW50XCJdLFxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzoge1xuICAgICAgICAgICAgICByZXZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgICByYXRpbmdfY291bnQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICBzb3J0Qnk6IHZhbFswXSxcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHZhbFsxXSA9PT0gXCJhc2NcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHdhaXRpbmcgZm9yIG5pY2Ugc2VsZWN0IHRvIGluaXRpYWxpemVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAkKGAubmljZS1zZWxlY3QgdWwubGlzdCBsaWApLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAkKGAubmljZS1zZWxlY3QgdWwubGlzdCBsaWApLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHZhbCA9ICQodGhpcykuYXR0cihcImRhdGEtdmFsdWVcIikuc3BsaXQoXCItXCIpO1xuICAgICAgICAgIGlmICh2YWxbMF0gPT09IFwicmV2aWV3XCIpIHtcbiAgICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgICAgc29ydEJ5OiBbdmFsWzBdLCBcInJhdGluZ19jb3VudFwiXSxcbiAgICAgICAgICAgICAgc29ydEFzY2VuZGluZzoge1xuICAgICAgICAgICAgICAgIHJldmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmF0aW5nX2NvdW50OiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICAgIHNvcnRCeTogdmFsWzBdLFxuICAgICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB2YWxbMV0gPT09IFwiYXNjXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgICQoXCIjYWxsLXNvcnQtc2VsZWN0LCAjc29ydC1idXR0b25cIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChib2R5LmNvbnRleHQuc3ViY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICBzb3J0Qnk6IFwiY3VzdG9tX3NvcnRfb3JkZXJcIixcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBcImN1c3RvbV9zb3J0X251bVwiLFxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMyk7XG5cbiAgICAgIGxldCByZXNpemVMYXlvdXQgPSBmYWxzZTtcblxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgcmVzaXplTGF5b3V0ID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgaXNvLm9uKFwibGF5b3V0Q29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocmVzaXplTGF5b3V0KSB7XG4gICAgICAgICAgcmVzaXplTGF5b3V0ID0gZmFsc2U7XG4gICAgICAgICAgaXNvLmFycmFuZ2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG5cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIkNoZWNrYm94VXBkYXRlZFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdmFsID0gW107XG4gICAgICAgIC8vICQoXCJbaW5wdXQtZmlsdGVyXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgdmFsLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgJChcIltpbnB1dC1maWx0ZXJdOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHZhbFskKHRoaXMpLmF0dHIoXCJpbnB1dC1maWx0ZXJcIildID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbFskKHRoaXMpLmF0dHIoXCJpbnB1dC1maWx0ZXJcIildID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbFskKHRoaXMpLmF0dHIoXCJpbnB1dC1maWx0ZXJcIildLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHZhbClcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coaXNvKVxuICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgIC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbTEgfHwgaXRlbTI7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlcl9kYXRhID0gaXRlbUVsZW1cbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWRhdGFcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFZhbCA9IHZhbFtrZXlba11dO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcFZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgKCFmaWx0ZXJfZGF0YS5pbmNsdWRlcyh2YWxbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAvLyAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyX2RhdGEuaW5jbHVkZXModGVtcFZhbFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRlbXApIHtcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICAvLyBpdGVtIGVsZW1lbnQgcHJvdmlkZWQgYXMgYXJndW1lbnRcbiAgICAgICAgICAgIGZpbHRlcjogXCIqXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RhcnRDdXN0b21HbG9iYWwoKSB7XG4gICAgJChgW2RhdGEtYWN0aW9uXWApLm9mZihcImNsaWNrXCIpO1xuICAgICQoYC5jYXJkLWF0Y19fYnV0dG9uYCkub2ZmKFwiY2xpY2tcIik7XG4gICAgJChgW2hyZWY9XCIjc2xpZGVDYXJ0XCJdYCkub2ZmKFwiY2xpY2tcIik7XG4gICAgdGhpcy5zdGFydEdsb2JhbCgpO1xuICB9XG5cbiAgLyoqXG4gICBKUXVlcnkgTmljZSBTZWxlY3QgTGlicmFyeSBodHRwczovL2pxdWVyeW5pY2VzZWxlY3QuaGVybmFuc2FydG9yaW8uY29tL1xuICAqL1xuICBuaWNlU2VsZWN0KCkge1xuICAgICQuZm4ubmljZVNlbGVjdCA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIC8vIE1ldGhvZHNcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpLm5leHQoXCIubmljZS1zZWxlY3RcIik7XG4gICAgICAgICAgICB2YXIgb3BlbiA9ICRkcm9wZG93bi5oYXNDbGFzcyhcIm9wZW5cIik7XG5cbiAgICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICRkcm9wZG93bi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpO1xuXG4gICAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5uZXh0KCkudHJpZ2dlcihcImNsaWNrXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09IFwiZGVzdHJveVwiKSB7XG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpLm5leHQoXCIubmljZS1zZWxlY3RcIik7XG5cbiAgICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICRkcm9wZG93bi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgJHNlbGVjdC5jc3MoXCJkaXNwbGF5XCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICgkKFwiLm5pY2Utc2VsZWN0XCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoXCIubmljZV9zZWxlY3RcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNZXRob2QgXCInICsgbWV0aG9kICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBIaWRlIG5hdGl2ZSBzZWxlY3RcbiAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICAvLyBDcmVhdGUgY3VzdG9tIG1hcmt1cFxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmICghJHNlbGVjdC5uZXh0KCkuaGFzQ2xhc3MoXCJuaWNlLXNlbGVjdFwiKSkge1xuICAgICAgICAgIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KSB7XG4gICAgICAgICRzZWxlY3QuYWZ0ZXIoXG4gICAgICAgICAgJChcIjxkaXY+PC9kaXY+XCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJuaWNlLXNlbGVjdFwiKVxuICAgICAgICAgICAgLmFkZENsYXNzKCRzZWxlY3QuYXR0cihcImNsYXNzXCIpIHx8IFwiXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKFwiZGlzYWJsZWRcIikgPyBcImRpc2FibGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0YWJpbmRleFwiLCAkc2VsZWN0LmF0dHIoXCJkaXNhYmxlZFwiKSA/IG51bGwgOiBcIjBcIilcbiAgICAgICAgICAgIC5odG1sKCc8c3BhbiBjbGFzcz1cImN1cnJlbnRcIj48L3NwYW4+PHVsIGNsYXNzPVwibGlzdFwiPjwvdWw+JyksXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyICRkcm9wZG93biA9ICRzZWxlY3QubmV4dCgpO1xuICAgICAgICB2YXIgJG9wdGlvbnMgPSAkc2VsZWN0LmZpbmQoXCJvcHRpb25cIik7XG4gICAgICAgIHZhciAkc2VsZWN0ZWQgPSAkc2VsZWN0LmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIik7XG5cbiAgICAgICAgJGRyb3Bkb3duXG4gICAgICAgICAgLmZpbmQoXCIuY3VycmVudFwiKVxuICAgICAgICAgIC5odG1sKCRzZWxlY3RlZC5kYXRhKFwiZGlzcGxheVwiKSB8fCAkc2VsZWN0ZWQudGV4dCgpKTtcblxuICAgICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkaXNwbGF5ID0gJG9wdGlvbi5kYXRhKFwiZGlzcGxheVwiKTtcblxuICAgICAgICAgICRkcm9wZG93bi5maW5kKFwidWxcIikuYXBwZW5kKFxuICAgICAgICAgICAgJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAgICAgICAuYXR0cihcImRhdGEtdmFsdWVcIiwgJG9wdGlvbi52YWwoKSlcbiAgICAgICAgICAgICAgLmF0dHIoXCJkYXRhLWRpc3BsYXlcIiwgZGlzcGxheSB8fCBudWxsKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIiArXG4gICAgICAgICAgICAgICAgKCRvcHRpb24uaXMoXCI6c2VsZWN0ZWRcIikgPyBcIiBzZWxlY3RlZFwiIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICgkb3B0aW9uLmlzKFwiOmRpc2FibGVkXCIpID8gXCIgZGlzYWJsZWRcIiA6IFwiXCIpLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5odG1sKCRvcHRpb24udGV4dCgpKSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyogRXZlbnQgbGlzdGVuZXJzICovXG5cbiAgICAgIC8vIFVuYmluZCBleGlzdGluZyBldmVudHMgaW4gY2FzZSB0aGF0IHRoZSBwbHVnaW4gaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYmVmb3JlXG4gICAgICAkKGRvY3VtZW50KS5vZmYoXCIubmljZV9zZWxlY3RcIik7XG5cbiAgICAgIC8vIE9wZW4vY2xvc2VcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2submljZV9zZWxlY3RcIiwgXCIubmljZS1zZWxlY3RcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpO1xuXG4gICAgICAgICQoXCIubmljZS1zZWxlY3RcIikubm90KCRkcm9wZG93bikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuXG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLmZpbmQoXCIub3B0aW9uXCIpO1xuICAgICAgICAgICRkcm9wZG93bi5maW5kKFwiLmZvY3VzXCIpLnJlbW92ZUNsYXNzKFwiZm9jdXNcIik7XG4gICAgICAgICAgJGRyb3Bkb3duLmZpbmQoXCIuc2VsZWN0ZWRcIikuYWRkQ2xhc3MoXCJmb2N1c1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZHJvcGRvd24uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENsb3NlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgICAgJChkb2N1bWVudCkub24oXCJjbGljay5uaWNlX3NlbGVjdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLm5pY2Utc2VsZWN0XCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICQoXCIubmljZS1zZWxlY3RcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLmZpbmQoXCIub3B0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gT3B0aW9uIGNsaWNrXG4gICAgICAkKGRvY3VtZW50KS5vbihcbiAgICAgICAgXCJjbGljay5uaWNlX3NlbGVjdFwiLFxuICAgICAgICBcIi5uaWNlLXNlbGVjdCAub3B0aW9uOm5vdCguZGlzYWJsZWQpXCIsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gJG9wdGlvbi5jbG9zZXN0KFwiLm5pY2Utc2VsZWN0XCIpO1xuXG4gICAgICAgICAgJGRyb3Bkb3duLmZpbmQoXCIuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAkb3B0aW9uLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICB2YXIgdGV4dCA9ICRvcHRpb24uZGF0YShcImRpc3BsYXlcIikgfHwgJG9wdGlvbi50ZXh0KCk7XG4gICAgICAgICAgJGRyb3Bkb3duLmZpbmQoXCIuY3VycmVudFwiKS50ZXh0KHRleHQpO1xuXG4gICAgICAgICAgJGRyb3Bkb3duLnByZXYoXCJzZWxlY3RcIikudmFsKCRvcHRpb24uZGF0YShcInZhbHVlXCIpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEkZHJvcGRvd24uaGFzQ2xhc3MoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICRkcm9wZG93bi5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICAvLyBLZXlib2FyZCBldmVudHNcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93bi5uaWNlX3NlbGVjdFwiLCBcIi5uaWNlLXNlbGVjdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcyk7XG4gICAgICAgIHZhciAkZm9jdXNlZF9vcHRpb24gPSAkKFxuICAgICAgICAgICRkcm9wZG93bi5maW5kKFwiLmZvY3VzXCIpIHx8ICRkcm9wZG93bi5maW5kKFwiLmxpc3QgLm9wdGlvbi5zZWxlY3RlZFwiKSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTcGFjZSBvciBFbnRlclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMiB8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgICRmb2N1c2VkX29wdGlvbi50cmlnZ2VyKFwiY2xpY2tcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKFwiY2xpY2tcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAvLyBEb3duXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgICAgICAgIGlmICghJGRyb3Bkb3duLmhhc0NsYXNzKFwib3BlblwiKSkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyICRuZXh0ID0gJGZvY3VzZWRfb3B0aW9uXG4gICAgICAgICAgICAgIC5uZXh0QWxsKFwiLm9wdGlvbjpub3QoLmRpc2FibGVkKVwiKVxuICAgICAgICAgICAgICAuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICRkcm9wZG93bi5maW5kKFwiLmZvY3VzXCIpLnJlbW92ZUNsYXNzKFwiZm9jdXNcIik7XG4gICAgICAgICAgICAgICRuZXh0LmFkZENsYXNzKFwiZm9jdXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAvLyBVcFxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpIHtcbiAgICAgICAgICBpZiAoISRkcm9wZG93bi5oYXNDbGFzcyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKFwiY2xpY2tcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciAkcHJldiA9ICRmb2N1c2VkX29wdGlvblxuICAgICAgICAgICAgICAucHJldkFsbChcIi5vcHRpb246bm90KC5kaXNhYmxlZClcIilcbiAgICAgICAgICAgICAgLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAkZHJvcGRvd24uZmluZChcIi5mb2N1c1wiKS5yZW1vdmVDbGFzcyhcImZvY3VzXCIpO1xuICAgICAgICAgICAgICAkcHJldi5hZGRDbGFzcyhcImZvY3VzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgLy8gRXNjXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcihcImNsaWNrXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUYWJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDkpIHtcbiAgICAgICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKFwib3BlblwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIERldGVjdCBDU1MgcG9pbnRlci1ldmVudHMgc3VwcG9ydCwgZm9yIElFIDw9IDEwLiBGcm9tIE1vZGVybml6ci5cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLnN0eWxlO1xuICAgICAgc3R5bGUuY3NzVGV4dCA9IFwicG9pbnRlci1ldmVudHM6YXV0b1wiO1xuICAgICAgaWYgKHN0eWxlLnBvaW50ZXJFdmVudHMgIT09IFwiYXV0b1wiKSB7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwibm8tY3NzcG9pbnRlcmV2ZW50c1wiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIGFkZFRvb2xTZXRCdWlsZGVyQ2FyZCgpIHtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5SWQ7XG4gICAgLy9jb25zb2xlLmxvZygnY2F0dHQgJywgY2F0ZWdvcnlJZClcbiAgICAvLyBPbmx5IGFkZCB0aGUgY2FyZCBpZiBjYXRlZ29yeSBJRCBpcyA3NFxuICAgIGlmIChjYXRlZ29yeUlkID09PSA3NCkge1xuICAgICAgY29uc3QgdG9vbFNldEJ1aWxkZXJDYXJkID0gYFxuICAgICAgICA8ZGl2IGlkPVwidG9vbC1zZXQtYnVpbGRlci1jYXJkXCIgXG4gICAgICAgICAgIGNsYXNzPVwicHJvZHVjdCB0b29sLXNldC1idWlsZGVyLWNhcmRcIlxuICAgICAgICAgICBkYXRhLXByb2R1Y3QtcHJpY2U9XCI0ODEzXCJcbiAgICAgICAgICAgZGF0YS1kYXRlLWNyZWF0ZWQ9XCIyMDI1LTAxLTAxXCJcbiAgICAgICAgICAgZGF0YS1iZXN0LXNlbGxpbmc9XCIwXCJcbiAgICAgICAgICAgZGF0YS1jdXN0b20tYmVzdC1zZWxsaW5nPVwiMFwiXG4gICAgICAgICAgIGRhdGEtY3VzdG9tLXNvcnQ9XCItMVwiXG4gICAgICAgICAgIGRhdGEtY3VzdG9tLW51bT1cIi0xXCJcbiAgICAgICAgICAgZmlsdGVyLWRhdGE9XCJNQSA3QSA3MTAgMTAxMiBGSCBFSCBTRiBNRlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWltZy1jb250YWluZXIgY2FyZCBwcm9kdWN0LS1jYXJkXCIgaHJlZj1cIi9jdXN0b20tYXV0b21hdGljLXRvb2wtc2V0L1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2NkbjExLmJpZ2NvbW1lcmNlLmNvbS9zLTg5YTludHAxNi9pbWFnZXMvc3RlbmNpbC9vcmlnaW5hbC9pbWFnZS1tYW5hZ2VyLzQ1NS5wbmdcIiBcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkxldmVsNSBUb29sIFNldCBCdWlsZGVyIC0gQ3VzdG9taXplIFRvZGF5XCIgXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkxldmVsNSBUb29sIFNldCBCdWlsZGVyXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQtaW1hZ2UgdG9vbC1idWlsZGVyLWltYWdlXCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAgIHJldHVybiB0b29sU2V0QnVpbGRlckNhcmQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJjb25zdCBjdXN0b21TaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IHtcbiAgICAvLyBJbmNsdWRlIEF1dG9tYXRpYyBUYXBlcj9cbiAgICAvLyBZVDogXCJUYXBlciBJbmNsdWRlZFwiLFxuICAgIC8vIE5UOiBcIk5vIFRhcGVyXCIsXG5cbiAgICAvLyAvLyBGbGF0IEJveCBTZXQgU2l6ZXM6XG4gICAgLy8gNzEwOiBgN1wiLzEwXCIgQm94ZXNgLFxuICAgIC8vIDEwMTI6IGAxMFwiLzEyXCIgQm94ZXNgLFxuICAgIC8vIDcxMDEyOiBgN1wiLzEwXCIvMTJcIiBCb3hlc2AsXG5cbiAgICAvLyAvLyBGbGF0IEJveCBDYXBhY2l0aWVzOlxuICAgIC8vIFNGOiBgU3RhbmRhcmRgLFxuICAgIC8vIE1GOiBgTUVHQWAsXG5cbiAgICAvLyAvLyBDb3JuZXIgQXBwbGljYXRvciBUeXBlOlxuICAgIC8vIE1BOiBcIk1pbmlTaG904oSiXCIsXG4gICAgLy8gXCI3QVwiOiAnN1wiIENvcm5lciBCb3gnLFxuICAgIC8vIFwiOEFcIjogJzhcIiBDb3JuZXIgQm94JyxcblxuICAgIC8vIC8vICMgb2YgQ29ybmVyIEZpbmlzaGVyczpcbiAgICAvLyBcIjAzXCI6IGAzXCIgQ29ybmVyIEZpbmlzaGVyYCxcbiAgICAvLyBcIjAzMzVcIjogYDNcIi8zLjVcIiBDb3JuZXIgRmluaXNoZXJzYCxcblxuICAgIC8vIC8vICMgb2YgQ29tcG91bmQgUHVtcHM6XG4gICAgLy8gXCIxUFwiOiBcIjEgUHVtcFwiLFxuICAgIC8vIFwiMlBcIjogXCIyIFB1bXBzXCIsXG5cbiAgICAvLyAvLyBOYWlsIFNwb3R0ZXIgSW5jbHVkZWQ/XG4gICAgLy8gWU46IFwiTmFpbCBTcG90dGVyXCIsXG4gICAgLy8gTk46IFwiTm8gTmFpbCBTcG90dGVyXCIsXG5cbiAgICAvLyAvLyBIYW5kbGUgVHlwZTpcbiAgICAvLyBGSDogXCJGTCBIYW5kbGVzXCIsXG4gICAgLy8gRUg6IFwiRXh0IEhhbmRsZXNcIixcbiAgfTtcbiAgLy8gJCgnLmZvcm0tc2VsZWN0Jykuc2VsZWN0MigpO1xuXG4gICQoXCIudGFnLS1ibG9ja1wiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgdGl0bGVbJCh0aGlzKS5maW5kKFwiaW5wdXRcIikudmFsKCldID0gJCh0aGlzKS5maW5kKFwic3BhblwiKS5hdHRyKFwidG9wLXRpdGxlXCIpO1xuICB9KTtcblxuICB3aW5kb3cub25yZXNpemUgPSAocmVzaXplKSA9PntcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpe1xuICAgICAgJChcIi5maWx0ZXItbGlzdF9jb250YWluZXJbcGNdXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuICAgICAgJChcIi5maWx0ZXItbGlzdF9jb250YWluZXJbbW9iaWxlXVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCIuZmlsdGVyLWxpc3RfY29udGFpbmVyW21vYmlsZV1cIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG4gICAgICAkKFwiLmZpbHRlci1saXN0X2NvbnRhaW5lcltwY11cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAkKFwiI2ZpbHRlci1idXR0b24tbW9iaWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIuY3VzdG9tLW1vZGVsLW1haW5cIikuYWRkQ2xhc3MoXCJtb2RlbC1vcGVuXCIpO1xuICB9KTtcbiAgJChcIi5jbG9zZS1idG4sIC5iZy1vdmVybGF5XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmN1c3RvbS1tb2RlbC1tYWluXCIpLnJlbW92ZUNsYXNzKFwibW9kZWwtb3BlblwiKTtcbiAgfSk7XG5cbiAgJChcIi5maWx0ZXItLXNob3dfYnV0dG9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYmxvY2sgPSAkKGBbZmlsdGVyLWJsb2NrPVwiJHskKHRoaXMpLmF0dHIoXCJmaWx0ZXItYnV0dG9uXCIpfVwiXWApO1xuICAgICAgLy8gaWYgKGJsb2NrLmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyAgIGJsb2NrLmNzcyhcImRpc3BsYXlcIiwgXCJncmlkXCIpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgYmxvY2suY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAvLyB9XG4gICAgICBpZihibG9jay5oYXNDbGFzcyhcInNob3dcIikpe1xuICAgICAgICBibG9jay5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYmxvY2suYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIH0pO1xuICB9KTtcblxuICAkKFwiLnRhZ190aXRsZS0tYmxvY2tcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygpLmZpbmQoXCJpbnB1dFwiKTtcbiAgICBpZiAoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSkge1xuICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICB9XG4gICAgZmlsbEZpbHRlckxpc3QoKTtcbiAgfSk7XG5cbiAgJChcIltpbnB1dC1maWx0ZXJdXCIpLm9uKFwiY2hhbmdlXCIsIGZpbGxGaWx0ZXJMaXN0KTtcbiAgJChcIi5maWx0ZXItd3JhcHBlcltzb3J0LWJsb2NrXVwiKS5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihldnQpe1xuICAgIFxuICB9KTtcblxuICBmdW5jdGlvbiBjbGVhckZpbHRlckF0VG9wKHZhbCkge1xuICAgICQoYFtpbnB1dC1maWx0ZXJdW3ZhbHVlPVwiJHt2YWx9XCJdYCkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xuICAgIGZpbGxGaWx0ZXJMaXN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxsRmlsdGVyTGlzdCgpIHtcbiAgICBjb25zdCB0ZW1wID0gW107XG4gICAgJChcIi5maWx0ZXItbGlzdF9jb250YWluZXJcIikuZW1wdHkoKTtcbiAgICBpZiAoJChcIltpbnB1dC1maWx0ZXJdOmNoZWNrZWRcIikubGVuZ3RoID4gMCkge1xuICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxMDI0KXtcbiAgICAgICAgJChcIi5maWx0ZXItbGlzdF9jb250YWluZXJbcGNdXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuICAgICAgICAkKFwiLmZpbHRlci1saXN0X2NvbnRhaW5lclttb2JpbGVdXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICQoXCIuZmlsdGVyLWxpc3RfY29udGFpbmVyW21vYmlsZV1cIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG4gICAgICAgICQoXCIuZmlsdGVyLWxpc3RfY29udGFpbmVyW3BjXVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJChcIiNpc290b3BlLWNvbnRhaW5lclwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsIFwiMTBweFwiKTtcbiAgICAgICQoXCIuZmlsdGVyLWxpc3RfY29udGFpbmVyXCIpLmFwcGVuZChgXG4gICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItbGlzdCBjbGVhci1hbGxcIiBkYXRhPVwiY2xlYXItYWxsLWZpbHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dT5DbGVhciBBbGw8L3U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+YCk7XG4gICAgICAkKGBbZGF0YT1cImNsZWFyLWFsbC1maWx0ZXJcIl1gKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIltpbnB1dC1maWx0ZXJdOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWxsRmlsdGVyTGlzdCgpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICBcbiAgICAgICQoXCIuZmlsdGVyLWxpc3RfY29udGFpbmVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgJChcIiNpc290b3BlLWNvbnRhaW5lclwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsIFwiMHB4XCIpO1xuICAgIH1cblxuICAgICQoXCJbaW5wdXQtZmlsdGVyXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgIHRlbXAucHVzaCh2YWwpO1xuICAgICAgJChcIi5maWx0ZXItbGlzdF9jb250YWluZXJcIikuYXBwZW5kKFxuICAgICAgICBgPGxpIGNsYXNzPVwiZmlsdGVyLWxpc3RcIiBkYXRhPVwiJHt2YWx9XCJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAke3RpdGxlW3ZhbF19XG4gICAgICA8ZGl2Png8L2Rpdj5cbiAgICAgIDwvZGl2PjwvbGk+YFxuICAgICAgKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGAuZmlsdGVyLWxpc3RbZGF0YT1cIiR7dmFsfVwiXWApLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhckZpbHRlckF0VG9wKHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gICAgY29uc3QgY3JlYXRlRXZlbnQgPSBuZXcgRXZlbnQoXCJDaGVja2JveFVwZGF0ZWRcIiwge30pO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KTtcbiAgfVxuXG59O1xuXG5jb25zdCBjaGVja0ZpbHRlckZyb21DdXN0b21GaWVsZCA9ICgpID0+IHtcbiAgXG4gIGxldCBmaWx0ZXJEYXRhID0gW107XG5cbiAgJChcIiNpc290b3BlLWNvbnRhaW5lciAucHJvZHVjdFwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgZmlsdGVyRGF0YSA9IGZpbHRlckRhdGEuY29uY2F0KCQodGhpcykuYXR0cihcImZpbHRlci1kYXRhXCIpLnNwbGl0KFwiIFwiKSk7XG4gICAgXG4gIH0pO1xuICBmaWx0ZXJEYXRhID0gZmlsdGVyRGF0YS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXggJiYgdmFsdWUubGVuZ3RoID4gMCk7XG4gIGNvbnNvbGUubG9nKGZpbHRlckRhdGEpO1xuICAkKFwiLmZpbHRlci0tY29udGFpbmVyIC5maWx0ZXItLWJveFwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgbGV0IG5vdEV4aXN0ID0gdHJ1ZTtcbiAgICAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBpZihmaWx0ZXJEYXRhLmluY2x1ZGVzKCQodGhpcykudmFsKCkpKXtcbiAgICAgICAgbm90RXhpc3QgPSBmYWxzZTtcbiAgICAgICAgLy8gYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYobm90RXhpc3Qpe1xuICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgfVxuXG5cblxuICB9KVxuXG59O1xuXG5leHBvcnQgeyBjdXN0b21TaWRlYmFyLCBjaGVja0ZpbHRlckZyb21DdXN0b21GaWVsZCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVRTQ2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBhZnRlckZhY2V0VXBkYXRlKCkge1xuXG4gICAgfVxufVxuIiwiLyogIGpRdWVyeSBOaWNlIFNlbGVjdCAtIHYxLjEuMFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXJuYW5zYXJ0b3Jpby9qcXVlcnktbmljZS1zZWxlY3RcbiAgICBNYWRlIGJ5IEhlcm7DoW4gU2FydG9yaW8gICovXG5jb25zdCBuaWNlU2VsZWN0ID0gKCQpID0+IHtcbihmdW5jdGlvbigkKSB7XG5cbiAgJC5mbi5uaWNlU2VsZWN0ID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgXG4gICAgLy8gTWV0aG9kc1xuICAgIGlmICh0eXBlb2YgbWV0aG9kID09ICdzdHJpbmcnKSB7ICAgICAgXG4gICAgICBpZiAobWV0aG9kID09ICd1cGRhdGUnKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcykubmV4dCgnLm5pY2Utc2VsZWN0Jyk7XG4gICAgICAgICAgdmFyIG9wZW4gPSAkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAkc2VsZWN0Lm5leHQoKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PSAnZGVzdHJveScpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKS5uZXh0KCcubmljZS1zZWxlY3QnKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLnJlbW92ZSgpO1xuICAgICAgICAgICAgJHNlbGVjdC5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCQoJy5uaWNlLXNlbGVjdCcpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCcubmljZV9zZWxlY3QnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01ldGhvZCBcIicgKyBtZXRob2QgKyAnXCIgZG9lcyBub3QgZXhpc3QuJylcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAgIFxuICAgIC8vIEhpZGUgbmF0aXZlIHNlbGVjdFxuICAgIHRoaXMuaGlkZSgpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBjdXN0b20gbWFya3VwXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuICAgICAgXG4gICAgICBpZiAoISRzZWxlY3QubmV4dCgpLmhhc0NsYXNzKCduaWNlLXNlbGVjdCcpKSB7XG4gICAgICAgIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVfbmljZV9zZWxlY3QoJHNlbGVjdCkge1xuICAgICAgJHNlbGVjdC5hZnRlcigkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAgIC5hZGRDbGFzcygnbmljZS1zZWxlY3QnKVxuICAgICAgICAuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdjbGFzcycpIHx8ICcnKVxuICAgICAgICAuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdkaXNhYmxlZCcpID8gJ2Rpc2FibGVkJyA6ICcnKVxuICAgICAgICAuYXR0cigndGFiaW5kZXgnLCAkc2VsZWN0LmF0dHIoJ2Rpc2FibGVkJykgPyBudWxsIDogJzAnKVxuICAgICAgICAuaHRtbCgnPHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+PC9zcGFuPjx1bCBjbGFzcz1cImxpc3RcIj48L3VsPicpXG4gICAgICApO1xuICAgICAgICBcbiAgICAgIHZhciAkZHJvcGRvd24gPSAkc2VsZWN0Lm5leHQoKTtcbiAgICAgIHZhciAkb3B0aW9ucyA9ICRzZWxlY3QuZmluZCgnb3B0aW9uJyk7XG4gICAgICB2YXIgJHNlbGVjdGVkID0gJHNlbGVjdC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKTtcbiAgICAgIFxuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5jdXJyZW50JykuaHRtbCgkc2VsZWN0ZWQuZGF0YSgnZGlzcGxheScpIHx8ICRzZWxlY3RlZC50ZXh0KCkpO1xuICAgICAgXG4gICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGlzcGxheSA9ICRvcHRpb24uZGF0YSgnZGlzcGxheScpO1xuXG4gICAgICAgICRkcm9wZG93bi5maW5kKCd1bCcpLmFwcGVuZCgkKCc8bGk+PC9saT4nKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgJG9wdGlvbi52YWwoKSlcbiAgICAgICAgICAuYXR0cignZGF0YS1kaXNwbGF5JywgKGRpc3BsYXkgfHwgbnVsbCkpXG4gICAgICAgICAgLmFkZENsYXNzKCdvcHRpb24nICtcbiAgICAgICAgICAgICgkb3B0aW9uLmlzKCc6c2VsZWN0ZWQnKSA/ICcgc2VsZWN0ZWQnIDogJycpICtcbiAgICAgICAgICAgICgkb3B0aW9uLmlzKCc6ZGlzYWJsZWQnKSA/ICcgZGlzYWJsZWQnIDogJycpKVxuICAgICAgICAgIC5odG1sKCRvcHRpb24udGV4dCgpKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8qIEV2ZW50IGxpc3RlbmVycyAqL1xuICAgIFxuICAgIC8vIFVuYmluZCBleGlzdGluZyBldmVudHMgaW4gY2FzZSB0aGF0IHRoZSBwbHVnaW4gaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYmVmb3JlXG4gICAgJChkb2N1bWVudCkub2ZmKCcubmljZV9zZWxlY3QnKTtcbiAgICBcbiAgICAvLyBPcGVuL2Nsb3NlXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKTtcbiAgICAgIFxuICAgICAgJCgnLm5pY2Utc2VsZWN0Jykubm90KCRkcm9wZG93bikucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgXG4gICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5vcHRpb24nKTsgIFxuICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICRkcm9wZG93bi5maW5kKCcuc2VsZWN0ZWQnKS5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkcm9wZG93bi5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8vIENsb3NlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5uaWNlLXNlbGVjdCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCcubmljZS1zZWxlY3QnKS5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJy5vcHRpb24nKTsgIFxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8vIE9wdGlvbiBjbGlja1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsICcubmljZS1zZWxlY3QgLm9wdGlvbjpub3QoLmRpc2FibGVkKScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJG9wdGlvbi5jbG9zZXN0KCcubmljZS1zZWxlY3QnKTtcbiAgICAgIFxuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJG9wdGlvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIFxuICAgICAgdmFyIHRleHQgPSAkb3B0aW9uLmRhdGEoJ2Rpc3BsYXknKSB8fCAkb3B0aW9uLnRleHQoKTtcbiAgICAgICRkcm9wZG93bi5maW5kKCcuY3VycmVudCcpLnRleHQodGV4dCk7XG4gICAgICBcbiAgICAgICRkcm9wZG93bi5wcmV2KCdzZWxlY3QnKS52YWwoJG9wdGlvbi5kYXRhKCd2YWx1ZScpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcblxuICAgIC8vIEtleWJvYXJkIGV2ZW50c1xuICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7ICAgIFxuICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcyk7XG4gICAgICB2YXIgJGZvY3VzZWRfb3B0aW9uID0gJCgkZHJvcGRvd24uZmluZCgnLmZvY3VzJykgfHwgJGRyb3Bkb3duLmZpbmQoJy5saXN0IC5vcHRpb24uc2VsZWN0ZWQnKSk7XG4gICAgICBcbiAgICAgIC8vIFNwYWNlIG9yIEVudGVyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMiB8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRmb2N1c2VkX29wdGlvbi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIERvd25cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyICRuZXh0ID0gJGZvY3VzZWRfb3B0aW9uLm5leHRBbGwoJy5vcHRpb246bm90KC5kaXNhYmxlZCknKS5maXJzdCgpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gVXBcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyICRwcmV2ID0gJGZvY3VzZWRfb3B0aW9uLnByZXZBbGwoJy5vcHRpb246bm90KC5kaXNhYmxlZCknKS5maXJzdCgpO1xuICAgICAgICAgIGlmICgkcHJldi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAkcHJldi5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRXNjXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIC8vIFRhYlxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDkpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZXRlY3QgQ1NTIHBvaW50ZXItZXZlbnRzIHN1cHBvcnQsIGZvciBJRSA8PSAxMC4gRnJvbSBNb2Rlcm5penIuXG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLnN0eWxlO1xuICAgIHN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgaWYgKHN0eWxlLnBvaW50ZXJFdmVudHMgIT09ICdhdXRvJykge1xuICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby1jc3Nwb2ludGVyZXZlbnRzJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzO1xuXG4gIH07XG5cbn0oalF1ZXJ5KSk7XG59XG4iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1R5cGUgPSB0aGlzLmNvbnRleHQuZGVmYXVsdFZpZXdUeXBlO1xuICAgICAgICB0aGlzLm9wcG9zaXRlVmlld1R5cGUgPSB0aGlzLmRlZmF1bHRWaWV3VHlwZSAhPT0gJ2dyaWQnID8gJ2dyaWQnIDogJ2xpc3QnO1xuICAgICAgICB0aGlzLnByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheSA9ICQoJy5sb2FkaW5nT3ZlcmxheS5sb2FkaW5nT3ZlcmxheS0tcHJvZHVjdC1saXN0aW5nJyk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdmYWNldGVkU2VhcmNoUmVmcmVzaCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGdldFN0b3JlZFZpZXdUeXBlKCkge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcnktdmlldy10eXBlJykgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0VGVtcGxhdGVUeXBlKHR5cGUpIHtcbiAgICAgICAgY29uc3QgcGFnZVR5cGUgPSB0aGlzLmdldFN0b3JlZFZpZXdUeXBlKCk7XG4gICAgICAgIHJldHVybiAhcGFnZVR5cGUgPyBgJHt0eXBlfS9wcm9kdWN0LWxpc3RpbmdgIDogYGN1c3RvbS9jYXRlZ29yeS0ke3BhZ2VUeXBlfS12aWV3YDtcbiAgICB9XG5cbiAgICBzdG9yZVZpZXdUeXBlKHR5cGUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcnktdmlldy10eXBlJywgdHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcnlQYWdlKHBhZ2VUeXBlKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5wcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYGN1c3RvbS9jYXRlZ29yeS0ke3BhZ2VUeXBlfS12aWV3YCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRpbmdPdmVybGF5LnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgY29uZmlnLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykuaHRtbChjb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmVWaWV3VHlwZShwYWdlVHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcigncHJvZHVjdFZpZXdNb2RlQ2hhbmdlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRUb2dnbGVFdmVudHMoKSB7XG4gICAgICAgICQoJy5qcy1jYXRlZ29yeV9fdG9nZ2xlLXZpZXcnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCd2aWV3LXR5cGUnKTtcblxuICAgICAgICAgICAgaWYgKCQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlLWNhdGVnb3J5LXZpZXcnKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmdldENhdGVnb3J5UGFnZSh0eXBlLCB0aGlzLmFkZFRvZ2dsZUV2ZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFZpZXdUeXBlID0gdGhpcy5nZXRTdG9yZWRWaWV3VHlwZSgpO1xuXG4gICAgICAgIGlmIChzdG9yZWRWaWV3VHlwZSA9PT0gdGhpcy5kZWZhdWx0Vmlld1R5cGUgfHwgIXN0b3JlZFZpZXdUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRUb2dnbGVFdmVudHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlQYWdlKHRoaXMub3Bwb3NpdGVWaWV3VHlwZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJjb21wYXJlUHJvZHVjdHMiLCJGYWNldGVkU2VhcmNoIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiSVRTQ2F0ZWdvcnkiLCJUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IiwiY3VzdG9tR2xvYmFsIiwiY3VzdG9tU2lkZWJhciIsImNoZWNrRmlsdGVyRnJvbUN1c3RvbUZpZWxkIiwibmljZVNlbGVjdCIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwidG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsImhpZGUiLCJkb2N1bWVudCIsInJlYWR5IiwidmFsaWRhdGVQcm9kdWN0c0NvdW50IiwiZHluYW1pY1Jlc2l6ZVByb2R1Y3RHcmlkIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuZXh0IiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJhcmlhTm90aWZ5Tm9Qcm9kdWN0cyIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzNCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImdldFJlcXVlc3RUZW1wbGF0ZVR5cGUiLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJhZnRlckZhY2V0VXBkYXRlIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJOZXdPcHRzIiwidXBkYXRlUmVxdWVzdE9wdGlvbnMiLCJib2R5IiwiVVVJRGNhdGMiLCJjYXRlZ29yeUlkIiwibnVtIiwiZXhpc3RQcm9kSWQiLCJmb3JFYWNoIiwicHIiLCJwdXNoIiwiaWQiLCJyZXF1ZXN0QXhpb3MiLCJuZXdDb25maWd1cmVJc290b3BlRm9yQWxsIiwicmVzdGFydEN1c3RvbUdsb2JhbCIsImF0dGVtcHQiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiaW5jbHVkZXMiLCIkaXRlbSIsImNvbnN0cnVjdFRlbXBsYXRlIiwiYXBwZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaW1nIiwiaSIsImFjdGlvblNlY3Rpb24iLCJ0b0ZpeGVkIiwic2FsZV9wcmljZSIsInJldGFpbF9wcmljZSIsImZpbmQiLCJmaWVsZCIsInVuZGVmaW5lZCIsInZhbHVlIiwic3RhcnRHbG9iYWwiLCJjaGVja01vYmlsZSIsImNoZWNrIiwiYSIsInRlc3QiLCJzdWJzdHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJ3aW5kb3ciLCJvcGVyYSIsInJlc2V0U2VjdGlvbkNzc0Zvck1vYmlsZVZpZXciLCJzY3JlZW4iLCJ3aWR0aCIsImR5bmFtaWNHcmlkV2lkdGhTaXppbmdGb3JJc290b3BlIiwiaW5uZXJXaWR0aCIsImNzcyIsImdyaWQiLCJnZXRFbGVtZW50QnlJZCIsImlzbyIsInJ1bklzb3RvcGUiLCJwcm9wIiwicmVtb3ZlQ2xhc3MiLCJJc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsInBlcmNlbnRQb3NpdGlvbiIsImZpdFJvd3MiLCJhbGlnbiIsImdldFNvcnREYXRhIiwibmFtZSIsIml0ZW1FbGVtIiwiZ2V0QXR0cmlidXRlIiwicHJpY2UiLCJOdW1iZXIiLCJyZXZpZXciLCJiZXN0X3NlbGxpbmciLCJuZXdlc3QiLCJjdXN0b21fc29ydF9vcmRlciIsImN1c3RvbV9zb3J0X251bSIsImNoYW5nZSIsInZhbCIsInNwbGl0IiwiYXJyYW5nZSIsInNvcnRCeSIsInNvcnRBc2NlbmRpbmciLCJyYXRpbmdfY291bnQiLCJzZXRUaW1lb3V0Iiwic3ViY2F0ZWdvcmllcyIsInJlc2l6ZUxheW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImVhY2giLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiaXRlbTEiLCJpdGVtMiIsImZpbHRlcl9kYXRhIiwicmVwbGFjZSIsInRyaW0iLCJpc1ZhbGlkIiwia2V5IiwiayIsInRlbXAiLCJ0ZW1wVmFsIiwib2ZmIiwiZm4iLCJtZXRob2QiLCIkc2VsZWN0IiwiJGRyb3Bkb3duIiwib3BlbiIsInJlbW92ZSIsImNyZWF0ZV9uaWNlX3NlbGVjdCIsInRyaWdnZXIiLCJhZnRlciIsImFkZENsYXNzIiwiJG9wdGlvbnMiLCIkc2VsZWN0ZWQiLCJ0ZXh0IiwiJG9wdGlvbiIsImRpc3BsYXkiLCJpcyIsIm5vdCIsInRvZ2dsZUNsYXNzIiwidGFyZ2V0IiwiY2xvc2VzdCIsInByZXYiLCIkZm9jdXNlZF9vcHRpb24iLCJrZXlDb2RlIiwiJG5leHQiLCJuZXh0QWxsIiwiZmlyc3QiLCIkcHJldiIsInByZXZBbGwiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0IiwicG9pbnRlckV2ZW50cyIsImFkZFRvb2xTZXRCdWlsZGVyQ2FyZCIsInRvb2xTZXRCdWlsZGVyQ2FyZCIsImRlZmF1bHQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsInBvcCIsInJlZHVjZSIsImFjYyIsInRpdGxlIiwib25yZXNpemUiLCJyZXNpemUiLCJjbGljayIsImJsb2NrIiwiaW5wdXQiLCJzaWJsaW5ncyIsImZpbGxGaWx0ZXJMaXN0IiwiZXZ0IiwiY2xlYXJGaWx0ZXJBdFRvcCIsImVtcHR5IiwiY3JlYXRlRXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJmaWx0ZXJEYXRhIiwiY29uY2F0IiwiaW5kZXgiLCJzZWxmIiwiaW5kZXhPZiIsIm5vdEV4aXN0IiwialF1ZXJ5IiwiYXBpIiwidXJsVXRpbHMiLCJkZWZhdWx0Vmlld1R5cGUiLCJvcHBvc2l0ZVZpZXdUeXBlIiwibG9hZGluZ092ZXJsYXkiLCJhZGRUb2dnbGVFdmVudHMiLCJpbml0IiwiZ2V0U3RvcmVkVmlld1R5cGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0eXBlIiwicGFnZVR5cGUiLCJzdG9yZVZpZXdUeXBlIiwic2V0SXRlbSIsImdldENhdGVnb3J5UGFnZSIsInNob3ciLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiRXJyb3IiLCJzdG9yZWRWaWV3VHlwZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9
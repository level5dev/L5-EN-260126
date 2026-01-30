import { hooks } from "@bigcommerce/stencil-utils";
import CatalogPage from "./catalog";
import compareProducts from "./global/compare-products";
import FacetedSearch from "./common/faceted-search";
import { createTranslationDictionary } from "../theme/common/utils/translations-utils";
import ITSCategory from "./custom/its-category";
import ToggleCategoryListingView from "./custom/toggle-category-listing-view";
import customGlobal from "./custom/its-global";
import {
  customSidebar,
  checkFilterFromCustomField,
} from "./custom/custom-sidebar-filter";
import { niceSelect } from "./custom/jquery-nice-select";

export default class Category extends CatalogPage {
  constructor(context) {
    super(context);
    this.validationDictionary = createTranslationDictionary(context);

    /**
     * IntuitSolutions - Custom Category
     */
    this.ITSCategory = new ITSCategory(context);
    this.toggleCategoryListingView = new ToggleCategoryListingView(context);
  }

  setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      "aria-live": ariaLiveStatus,
    });
  }

  makeShopByPriceFilterAccessible() {
    if (!$("[data-shop-by-price]").length) return;

    if ($(".navList-action").hasClass("is-active")) {
      $("a.navList-action.is-active").focus();
    }

    $("a.navList-action").on("click", () =>
      this.setLiveRegionAttributes(
        $("span.price-filter-message"),
        "status",
        "assertive",
      ),
    );
  }

  onReady() {
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
    customSidebar();
    // checkFilterFromCustomField();

    $('[data-button-type="add-cart"]').on("click", (e) =>
      this.setLiveRegionAttributes(
        $(e.currentTarget).next(),
        "status",
        "polite",
      ),
    );

    this.makeShopByPriceFilterAccessible();

    compareProducts(this.context);

    if ($("#facetedSearch").length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      hooks.on("sortBy-submitted", this.onSortBySubmit);
    }

    $("a.reset-btn").on("click", () =>
      this.setLiveRegionsAttributes(
        $("span.reset-message"),
        "status",
        "polite",
      ),
    );

    this.ariaNotifyNoProducts();
  }

  ariaNotifyNoProducts() {
    const $noProductsMessage = $("[data-no-products-notification]");
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  }

  initFacetedSearch() {
    const {
      price_min_evaluation: onMinPriceError,
      price_max_evaluation: onMaxPriceError,
      price_min_not_entered: minPriceNotEntered,
      price_max_not_entered: maxPriceNotEntered,
      price_invalid_value: onInvalidPrice,
    } = this.validationDictionary;
    const $productListingContainer = $("#product-listing-container");
    const $facetedSearchContainer = $("#faceted-search-container");
    const productsPerPage = this.context.categoryProductsPerPage;
    const requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage,
          },
        },
      },
      template: {
        productListing:
          this.toggleCategoryListingView.getRequestTemplateType("category"),
        sidebar: "category/sidebar",
      },
      showMore: "category/show-more",
    };

    this.facetedSearch = new FacetedSearch(
      requestOptions,
      (content) => {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);

        $("body").triggerHandler("compareReset");

        $("html, body").animate(
          {
            scrollTop: 0,
          },
          100,
        );

        /**
         * IntuitSolutions - Category Update
         */
        this.ITSCategory.afterFacetUpdate();
      },
      {
        validationErrorMessages: {
          onMinPriceError,
          onMaxPriceError,
          minPriceNotEntered,
          maxPriceNotEntered,
          onInvalidPrice,
        },
      },
    );

    $("body").on("productViewModeChanged", () => {
      const NewOpts = {
        config: {
          category: {
            shop_by_price: true,
            products: {
              limit: productsPerPage,
            },
          },
        },
        template: {
          productListing:
            this.toggleCategoryListingView.getRequestTemplateType("category"),
          sidebar: "category/sidebar",
        },
        showMore: "category/show-more",
      };

      this.facetedSearch.updateRequestOptions(NewOpts);
    });
  }

  //resize
  dynamicResizeProductGrid() {
    // const filter = $(".actionBar.filter--section").width();
    // const wrapper = $("#product-listing-container").width();
    // $("#product-block").width(wrapper - filter);
    // console.log(wrapper - filter);
  }

  //SSCODE: Populate Product Grid in category.html
  validateProductsCount() {
    const products = this.context.products;
    const body = this;
    const UUIDcatc = this.context.UUIDcatc;
    const categoryId = this.context.categoryId;
    let num = this.context.num;
    // console.log(products);
    //console.log('catID is ', categoryId)
    const existProdId = [];
    products.forEach((pr) => {
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
      axios
        .get(
          `https://i2lq18l4v8.execute-api.us-east-2.amazonaws.com/products/${categoryId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then(function (response) {
          const data = response.data;
          data.forEach((pr) => {
            if (existProdId.includes(pr["id"])) {
              const $item = $(`.product[data-entity-id="${pr["id"]}"]`);
              $item.attr("data-best-selling", `${pr["total_sold"]}`);
              $item.attr("data-date-created", `${pr["date_created"]}`);
            } else if (products.length > 99) {
              const template = constructTemplate(pr, num);
              num = num + 1;
              $("#isotope-container").append(template);
            }
          });
          $("#loader-block").hide();
          body.newConfigureIsotopeForAll();
          body.restartCustomGlobal();
          // body.disableViewDetailButton();
        })
        .catch((error) => {
          if (attempt < 5) {
            requestAxios(attempt + 1);
          } else {
            console.log(error);
          }
        });
    }

    function constructTemplate(pr, num) {
      let img = {};
      for (let i = 0; i < pr["images"].length; i++) {
        if (pr["images"][i]["is_thumbnail"]) {
          img = pr["images"][i];
          break;
        }
      }

      let actionSection = "";
      if (pr["variants"].length > 1) {
        actionSection = `<button type="button" class="button button--primary quickview button--quickview" data-product-id="${pr["id"]}">View Options</button>`;
      } else {
        actionSection = `
            <div class="card-atc js-card-atc">
              <div class="card-atc__section card-atc__section--qty">
                <label for="card-atc__qty-${pr["id"]}-${UUIDcatc}" class="card-atc__label is-srOnly">Quantity:</label>
                <div class="card-atc-increment card-atc-increment--has-buttons js-card-atc-increment">

                  <input type="tel" class="form-input card-atc__input card-atc__input--total js-card-atc__input--total" name="card-atc__qty-${pr["id"]}-${UUIDcatc}" id="card-atc__qty-${pr["id"]}-${UUIDcatc}" value="1" min="1" pattern="[0-9]*" aria-live="polite">
                  <div class="card-atc-button-wrapper">
                    <button class="button button--icon" data-action="inc" type="button">
                      <span class="is-srOnly">Increase Quantity of undefined</span>
                      <span class="icon-wrapper" aria-hidden="true">
                        <svg class="icon">
                          <use xlink:href="#icon-add"></use>
                        </svg>
                      </span>
                    </button>
                    <button class="button button--icon" data-action="dec" type="button">
                      <span class="is-srOnly">Decrease Quantity of undefined</span>
                      <span class="icon-wrapper" aria-hidden="true">
                        <svg class="icon">
                          <use xlink:href="#icon-minus"></use>PP
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-atc__section card-atc__section--action">
                <button type="button" class="card-atc__button button button--primary js-card-atc__button" id="card-atc__add-${pr["id"]}-${UUIDcatc}" data-default-message="Add to Cart" data-wait-message="ADDING..." data-added-message="Add to Cart" value="Add to Cart" data-card-add-to-cart="/cart.php?action=add&amp;product_id=${pr["id"]}" data-event-type="product-click">Add to Cart</button>
                <span class="product-status-message aria-description--hidden">Adding to cart… The item has been added</span>
              </div>
          </div>`;
      }

      const template = `
          <div id="product-${pr["id"]}" sort-order="${pr["sort_order"]}" 
          class="product"
          data-fake-name="${pr["fake-heading"]}" 
          data-product-price="${pr["variants"].length > 1
          ? pr["variants"][0]["calculated_price"].toFixed(2)
          : pr["calculated_price"].toFixed(2)
        }" 
          product-date-created="${pr["date_created"]}" 
          product-is-featured="${pr["is_featured"]}" 
          product-best-selling="${pr["total_sold"]}"
          product-custom-sort-order="${pr["custom-sort-order"]}"
          data-custom-best-selling="${num}" 
          >
              <div class="card-wrapper">
                  <article class="card" data-test="card-${pr["id"]}">
                      <figure class="card-figure">
                          <div class="sale-flag-sash" style="display: ${pr["variants"][0].sale_price !== 0
          ? "block;"
          : "none;"
        } "><span class="sale-text">On Sale</span></div>
                          <a href="${pr["custom_url"]["url"]}" 
                          class="card-figure__link" 
                          aria-label="${pr["name"]}, 
                          $${pr["variants"].length > 1
          ? pr["variants"][0]["calculated_price"].toFixed(2)
          : pr["calculated_price"].toFixed(2)
        }">
                              <div class=" card-img-container">
                                  <img src="${img["url_thumbnail"]}" 
                                  alt="img["description"]" title="${pr["fake-heading"]
        }" 
                                  data-sizes="auto" 
                                  srcset="${img["url_standard"]} 80w, 
                                  ${img["url_standard"]} 160w, 
                                  ${img["url_standard"]} 320w, 
                                  ${img["url_standard"]} 640w, 
                                  ${img["url_standard"]} 960w, 
                                  ${img["url_standard"]} 1280w, 
                                  ${img["url_standard"]} 1920w, 
                                  ${img["url_standard"]} 2560w" 
                                  data-srcset="${img["url_standard"]} 80w, 
                                  ${img["url_standard"]} 160w, 
                                  ${img["url_standard"]} 320w, 
                                  ${img["url_standard"]} 640w, 
                                  ${img["url_standard"]} 960w, 
                                  ${img["url_standard"]} 1280w, 
                                  ${img["url_standard"]} 1920w, 
                                  ${img["url_standard"]} 2560w" 
                                  class="card-image lazyautosizes lazyloaded" sizes="248px">
                              </div>
                          </a>
                         <figcaption class="card-figcaption">
                              <div class="card-figcaption-body"></div>
                         </figcaption>
                      </figure>
                      <div class="card-body">
                          <p class="productView-type-title h4" 
                          product-name="">${pr["fake-heading"]}</p>
                          <h3 class="card-title ">
                              <a aria-label="${pr["name"]}, 
                                $${pr["variants"].length > 1
          ? pr["variants"][0][
            "calculated_price"
          ].toFixed(2)
          : pr["calculated_price"].toFixed(2)
        }" 
                              href="${pr["custom_url"]["url"]}">
                              ${pr["name"]}</a>
                          </h3>
                          <p class="card-text card-text--sku">
                              <span> SKU#: ${pr["sku"]} </span>
                          </p>
                          <div class="card-text card-text--price" data-test-info-type="price">
                              <div class="price-section price-section--withoutTax rrp-price--withoutTax h4" style="display: block;">
                                  <span class="is-srOnly"> MSRP: </span>
                                  <span data-product-rrp-price-without-tax="" class="price price--rrp h5">
                                    ${pr["variants"][0].sale_price !== 0
          ? "$" + pr["variants"][0].retail_price
          : ""
        }
                                  </span>
                              </div>
                              <div class="price-section price-section--withoutTax non-sale-price--withoutTax h5" style="display: none;">
                                <span class="is-srOnly"> Was: </span>
                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>
                              </div>
                              <div class="price-section price-section--withoutTax h4">
                                <span class="price-label is-srOnly"></span>
                                <span class="price-now-label is-srOnly" style="display: none;">Now:</span>
                                <span data-product-price-without-tax="" class="price price--withoutTax">$${pr["variants"].length > 1
          ? pr["variants"][0][
            "calculated_price"
          ].toFixed(2)
          : pr["calculated_price"].toFixed(2)
        }</span>
                              </div>
                          </div>
                          <p class="card-text card-text--extra" style="display: ${pr["custom_fields"].find(
          (field) => field["name"] === "__card-extra-info",
        ) !== undefined
          ? "relative;"
          : "none;"
        } "> 
                          ${pr["custom_fields"].find(
          (field) => field["name"] === "__card-extra-info",
        ) !== undefined
          ? pr["custom_fields"].find(
            (field) =>
              field["name"] === "__card-extra-info",
          ).value
          : ""
        }</p>
                         <div class="card-action-wrapper">
                              ${actionSection}
                              <button type="button" onclick="window.location.href=${pr["custom_url"]["url"]
        }" 
                              class="button button--primary" >View Details</button>
                         </div>
                      </div>
                  </article>
              </div>
          </div>`;
      return template;
    }
  }

  startGlobal() {
    customGlobal(this.context);
  }

  // check if mobile user
  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
  checkMobile() {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4),
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }

  resetSectionCssForMobileView() {
    if (screen.width < 600) {
      $("[section-view]").attr("id", "");
      $("[section-view]").attr("class", "");
    } else {
      $("[section-view]").attr("id", "product-listing-container");
      $("[section-view]").attr("class", "container");
    }
  }

  dynamicGridWidthSizingForIsotope() {
    let width = window.innerWidth;

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

    $("#grid-all-product").css("width", `${width}px`);
  }

  newConfigureIsotopeForAll() {
    // $(".grid").css("display", "grid");
    //   $(".lds-block").hide();
    let grid = document.getElementById("isotope-container");
    const body = this;

    let iso;
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
          align: "right",
        },
        // masonry: {
        // columnWidth : 280,
        // isRTL: true
        // },
        getSortData: {
          name: function (itemElem) {
            return itemElem.getAttribute("data-name");
          },
          price: function (itemElem) {
            return Number(itemElem.getAttribute("data-product-price"));
          },
          review: function (itemElem) {
            return itemElem.getAttribute("data-rating");
          },
          best_selling: function (itemElem) {
            return Number(itemElem.getAttribute("data-custom-best-selling"));
          },
          newest: function (itemElem) {
            return itemElem.getAttribute("data-date-created");
          },
          custom_sort_order: function (itemElem) {
            return Number(itemElem.getAttribute("data-custom-sort"));
          },
          custom_sort_num: function (itemElem) {
            return Number(itemElem.getAttribute("data-custom-num"));
          },
        },
      });
      // });
      // }, 0);
      $("[all-sort-select-mobile]").change(function () {
        const val = $(this).val().split("-");

        if (val[0] === "review") {
          iso.arrange({
            sortBy: [val[0], "rating_count"],
            sortAscending: {
              review: false,
              rating_count: false,
            },
          });
        } else {
          iso.arrange({
            sortBy: val[0],
            sortAscending: val[1] === "asc",
          });
        }
      });

      // waiting for nice select to initialize
      setTimeout(function () {
        // $(`.nice-select ul.list li`).off("click");
        $(`.nice-select ul.list li`).on("click", function () {
          const val = $(this).attr("data-value").split("-");
          if (val[0] === "review") {
            iso.arrange({
              sortBy: [val[0], "rating_count"],
              sortAscending: {
                review: false,
                rating_count: false,
              },
            });
          } else {
            iso.arrange({
              sortBy: val[0],
              sortAscending: val[1] === "asc",
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
            sortAscending: true,
          });
        } else {
          iso.arrange({
            sortBy: "custom_sort_num",
            sortAscending: true,
          });
        }
      }, 3);

      let resizeLayout = false;

      addEventListener("resize", (event) => {
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
      addEventListener("CheckboxUpdated", (event) => {
        // const val = [];
        // $("[input-filter]:checked").each(function() {
        //   val.push($(this).val());
        // });
        const val = {};
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
            filter: function (item1, item2) {
              const itemElem = item1 || item2;
              const filter_data = itemElem
                .getAttribute("filter-data")
                .replace(/\s+/g, " ")
                .trim()
                .split(" ");
              let isValid = true;
              const key = Object.keys(val);
              for (let k = 0; k < key.length; k++) {
                let temp = false;
                const tempVal = val[key[k]];
                for (let i = 0; i < tempVal.length; i++) {
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
            },
          });
        } else {
          iso.arrange({
            // item element provided as argument
            filter: "*",
          });
        }
      });
    }
  }

  restartCustomGlobal() {
    $(`[data-action]`).off("click");
    $(`.card-atc__button`).off("click");
    $(`[href="#slideCart"]`).off("click");
    this.startGlobal();
  }

  /**
   JQuery Nice Select Library https://jqueryniceselect.hernansartorio.com/
  */
  niceSelect() {
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
        $select.after(
          $("<div></div>")
            .addClass("nice-select")
            .addClass($select.attr("class") || "")
            .addClass($select.attr("disabled") ? "disabled" : "")
            .attr("tabindex", $select.attr("disabled") ? null : "0")
            .html('<span class="current"></span><ul class="list"></ul>'),
        );

        var $dropdown = $select.next();
        var $options = $select.find("option");
        var $selected = $select.find("option:selected");

        $dropdown
          .find(".current")
          .html($selected.data("display") || $selected.text());

        $options.each(function (i) {
          var $option = $(this);
          var display = $option.data("display");

          $dropdown.find("ul").append(
            $("<li></li>")
              .attr("data-value", $option.val())
              .attr("data-display", display || null)
              .addClass(
                "option" +
                ($option.is(":selected") ? " selected" : "") +
                ($option.is(":disabled") ? " disabled" : ""),
              )
              .html($option.text()),
          );
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
      $(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (event) {
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
        },
      );

      // Keyboard events
      $(document).on("keydown.nice_select", ".nice-select", function (event) {
        var $dropdown = $(this);
        var $focused_option = $(
          $dropdown.find(".focus") || $dropdown.find(".list .option.selected"),
        );

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
            var $next = $focused_option
              .nextAll(".option:not(.disabled)")
              .first();
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
            var $prev = $focused_option
              .prevAll(".option:not(.disabled)")
              .first();
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
  }

  addToolSetBuilderCard() {
    const categoryId = this.context.categoryId;
    //console.log('cattt ', categoryId)
    // Only add the card if category ID is 74
    if (categoryId === 74) {
      const toolSetBuilderCard = `
        <div id="tool-set-builder-card" 
           class="product tool-set-builder-card"
           data-product-price="4813"
           data-date-created="2025-01-01"
           data-best-selling="0"
           data-custom-best-selling="0"
           data-custom-sort="-1"
           data-custom-num="-1"
           filter-data="MA 7A 710 1012 FH EH SF MF">
        <div class="card-wrapper">
          <a class="card-img-container card product--card" href="/custom-automatic-tool-set/">
            <img src="https://cdn11.bigcommerce.com/s-89a9ntp16/images/stencil/original/image-manager/455.png" 
                  alt="Level5 Tool Set Builder - Customize Today" 
                  title="Level5 Tool Set Builder" 
                  class="card-image tool-builder-image">
          </a>
        </div>
      </div>
    `;

      return toolSetBuilderCard;
    }
    return null;
  }
}

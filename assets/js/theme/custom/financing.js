import customGlobal from "./its-global";
const financingProduct = (body) => {
  customElements.define(
    "custom-products",
    class CustomProducts extends HTMLElement {
      connectedCallback() {
        // Fetch data and render the component
        //$.get("https://eosxks62phnnnwq.m.pipedream.net")
        $.get("https://eo2zm94neacj1k6.m.pipedream.net")
          .then((data) => {
            /*for (var d of data) {
          console.log(d.fields.page_title);
        }*/
            $("#loader-block").hide();
            for (var d of data) {
              //var product = $('<div class="productFin product"></div>');
              var product = $(
                '<div data-product-slide class="productCarousel-slide finProd"></div>',
              );
              var listItem = $('<div class="card-wrapper"></div>');
              var url = JSON.parse(d.fields.custom_url).url;
              var images = JSON.parse(d.fields.images);
              var urlImg;
              var customFields = JSON.parse(d.fields.custom_fields);
              var timestamp = new Date().getTime();
              var variants = JSON.parse(d.fields.variants);
              if (images.length === 1) {
                urlImg = images[0].url_thumbnail;
              } else {
                for (var i of images) {
                  if (i.is_thumbnail) {
                    urlImg = i.url_thumbnail;
                  }
                }
              }

              var article = $(`<article class="card" data-test="card-${
                d.fields.id
              }">
                <figure class="card-figure">
                 ${
                   d.fields.sale_price
                     ? `<div class="sale-flag-sash">
                        <span class="sale-text">On Sale</span>
                    </div>`
                     : ``
                 }
                  <a href="${url}" class="card-figure__link">
                    <div class="card-img-container">
                      <img src="${urlImg}">
                    </div>
                  </a>
                  <figcaption class="card-figcaption">
                    <div class="card-figcaption-body"></div>
                  </figcaption>
                </figure>
                <div class="card-body">
                  <p class="productView-type-title h4">${
                    d.fields.fake_heading
                  }</p>
                  <h3 class="card-title">
                    <a aria-label="{{> components/products/product-info}}" href="${url}">${
                      d.fields.name
                    }</a>
                  </h3>
                  ${
                    d.fields.sku
                      ? `<p class="card-text card-text--sku">
                    <span>SKU#: ${d.fields.sku}</span>
                  </p>`
                      : ""
                  }
                  <div class="card-text card-text--price" data-test-info-type="price">
                    ${
                      d.fields.retail_price != d.fields.price &&
                      !d.fields.sale_price
                        ? `<div class="price-section price-section--withoutTax h4">
                        <span data-product-price-without-tax="" class="price price--withoutTax">$${d.fields.price
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>
                    <div class="price-section price-section--withoutTax rrp-price--withoutTax h4">
                      <span data-product-rrp-price-without-tax="" class="price price--rrp h5">$${d.fields.retail_price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>`
                        : d.fields.sale_price
                          ? `<div class="price-section price-section--withoutTax h4">
                        <span data-product-price-without-tax="" class="price price--withoutTax">$${d.fields.sale_price
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>
                    <div class="price-section price-section--withoutTax rrp-price--withoutTax h4">
                        <span data-product-rrp-price-without-tax="" class="price price--rrp h5">$${d.fields.retail_price
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>`
                          : `<div class="price-section price-section--withoutTax h4">
                        <span data-product-price-without-tax="" class="price price--withoutTax">$${d.fields.retail_price
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </div>`
                    }
                  </div>
                  ${Object.keys(customFields)
                    .filter(
                      (key) => customFields[key].name === "__card-extra-info",
                    )
                    .map((key) => {
                      return `<p class="card-text card-text--extra">
                                ${customFields[key].value}
                              </p>`;
                    })
                    .join("")}
                  <div class="card-action-wrapper">
                    <div class="card-atc js-card-atc">
                      ${
                        d.fields.inventory_tracking === "product"
                          ? `<a href="${url}"  class="button button--small" data-product-id="${d.fields.id}">out of stock</a>`
                          : `<div class="card-atc__section card-atc__section--qty">
                        <label for="card-atc__qty-${d.fields.id}-${timestamp}" 
                        class="card-atc__label is-srOnly">Quantity:</label>
                        <div class="card-atc-increment card-atc-increment--has-buttons js-card-atc-increment">
                          <input
                          type="tel"
                          class="form-input card-atc__input card-atc__input--total js-card-atc__input--total"
                          name="card-atc__qty-${d.fields.id}-${timestamp}"
                          id="card-atc__qty-${d.fields.id}-${timestamp}"
                          value="1"
                          min="1"
                          pattern="[0-9]*"
                          aria-live="polite"
                          >
                          <div class="card-atc-button-wrapper">
                            <button class="button button--icon" data-action="inc" type="button">
                              <span class="is-srOnly">Increase quantity</span>
                              <span class="icon-wrapper" aria-hidden="true">
                                <svg class="icon">
                                    <use xlink:href="#icon-add"/>
                                </svg>
                              </span>
                            </button>
                            <button class="button button--icon" data-action="dec" type="button">
                              <span class="is-srOnly">Decrease quantity</span>
                              <span class="icon-wrapper" aria-hidden="true">
                                <svg class="icon">
                                    <use xlink:href="#icon-minus"/>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        
                      </div>
                      <div class="card-atc__section card-atc__section--action">
                        <button
                          type="button"
                          class="card-atc__button button button--primary js-card-atc__button"
                          id="card-atc__add-${d.fields.id}-${timestamp}"
                          data-default-message="Add to Cart"
                          data-wait-message="ADDING..."
                          data-added-message="Add to Cart"
                          value="Add to Cart"
                          data-card-add-to-cart="/cart.php?action=add&product_id=${d.fields.id}"
                          data-event-type="product-click"
                        >Add to Cart</button>
                        <span class="product-status-message aria-description--hidden">Adding to cart… The item has been added</span>
                      </div>`
                      }
                      
                    </div>
                    <div id="previewModal" class="modal modal--large" data-reveal>
                        <button class="modal-close"
                                type="button"
                        >
                            <span class="aria-description--hidden">Close</span>
                            <span aria-hidden="true">&#215;</span>
                        </button>
                        <div class="modal-content"></div>
                        <div class="loadingOverlay"></div>
                    </div>
                    <button type="button" class="button button--primary" onclick="${`window.location.href = '${url}'`}">View details</button>
                  </div>
                </div>
              </article>`);

              listItem.append(article);
              product.append(listItem);
              $("#popular").append(product);
            }
            customGlobal(body);

            $(document).ready(function () {
              var $popular = $("#popular");
              var $window = $(window);

              function handleCarousel() {
                var windowWidth = $window.width();
                var isMobile = windowWidth < 998;

                if (isMobile && !$popular.hasClass("slick-initialized")) {
                  $popular.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 479,
                        settings: {
                          slidesToShow: 1,
                        },
                      },
                    ],
                  });
                } else if (
                  !isMobile &&
                  $popular.hasClass("slick-initialized")
                ) {
                  $popular.slick("unslick");
                }
              }

              $window.on("resize", function () {
                handleCarousel();
              });

              handleCarousel(); // Initial setup
            });
          })
          .catch((error) => {
            console.log("Request failed", error);
          });
      }
    },
  );
};

$(document).on("click", (event) => {
  if (window.location.pathname == "/financing") {
    const dropdowns = $(".dropdown.w-dropdown");
    const container = $("#clickArea");

    // Check if the clicked element is a dropdown or a child of a dropdown
    const isDropdownClicked = dropdowns.toArray().some(function (dropdown) {
      return dropdown.contains(event.target);
    });

    // If the click is inside the container and not on a dropdown, remove the w--open class from all dropdowns
    if (!isDropdownClicked && container[0].contains(event.target)) {
      dropdowns.each(function () {
        $(this).removeClass("w--open");

        const dropdownList = $(this).find(".w-dropdown-list");
        dropdownList.removeClass("w--open");
        dropdownList.children().removeClass("w--open");
      });
    }
  }
});

// Add a click event listener to all dropdown elements
$(".dropdown.w-dropdown").on("click", function () {
  // Toggle the w--open class on the clicked dropdown element
  $(this).toggleClass("w--open");

  const dropdownList = $(this).find(".w-dropdown-list");
  dropdownList.toggleClass("w--open");

  dropdownList.children().toggleClass("w--open");
});

$(window).on("resize", function () {
  if ($(window).width() >= 767) {
    $("[data-open]").addClass("w--open");
  } else {
    $("[data-open]").removeClass("w--open");
  }
});

export { financingProduct };

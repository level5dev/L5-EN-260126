import customGlobal from "./its-global";

export default class Financing {
  constructor(context) {
    // Fetch financing products and populate them
    getFinancingProducts().then((data) => {
      populateProduct(data);
    });

    async function getFinancingProducts() {
      try {
        console.log("Fetching financing products...");
        const response = await fetch("/graphql", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.storefrontToken}`,
          },
          body: JSON.stringify({
            query: `query productsByCategory($pageSize: Int = 10, $cursor: String) {
              site {
                category(entityId: 135) {
                  name
                  products(first: $pageSize, after: $cursor) {
                    pageInfo {
                      startCursor
                      endCursor
                    }
                    edges {
                      node {
                        name
                        addToCartUrl
                        path
                        images {
                          edges {
                            node {
                              url(width: 10, height: 10, lossy: false)
                              isDefault
                              urlOriginal(lossy: false)
                            }
                          }
                        }
                        entityId
                        prices {
                          salePrice {
                            value
                            formatted
                          }
                          retailPrice {
                            value
                            formatted
                          }
                        }
                        plainTextDescription
                        customFields(names: ["__product-fake-heading", "__card-extra-info"], first: 10) {
                          edges {
                            node {
                              name
                              value
                            }
                          }
                        }
                        sku
                      }
                    }
                  }
                }
              }
            }`,
          }),
        });

        const data = await response.json();
        return data.data.site.category.products.edges;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    }

    function populateProduct(data) {
      console.log(data);
      $("#loader-block").hide();

      data.forEach((d) => {
        const product = $(
          '<div data-product-slide class="productCarousel-slide finProd"></div>',
        );
        const listItem = $('<div class="card-wrapper"></div>');
        const {
          path: url,
          name,
          sku,
          images: { edges: images },
          entityId: id,
          prices: { salePrice, retailPrice },
          customFields: { edges: customFields },
        } = d.node;

        let urlImg =
          images.find((i) => i.node.isDefault)?.node.urlOriginal ||
          images[0].node.url;
        let fakeHeading =
          customFields.find((c) => c.node.name === "__product-fake-heading")
            ?.node.value || "";
        let extraInfo =
          customFields.find((c) => c.node.name === "__card-extra-info")?.node
            .value || "";
        const timestamp = new Date().getTime();

        const article = $(`
          <article class="card" data-test="card-${id}">
            <figure class="card-figure">
              ${
                salePrice
                  ? `
                <div class="sale-flag-sash">
                  <span class="sale-text">On Sale</span>
                </div>`
                  : ``
              }
              <a href="${url}" class="card-figure__link">
                <div class="card-img-container">
                  <img src="${urlImg}" alt="${name}">
                </div>
              </a>
              <figcaption class="card-figcaption">
                <div class="card-figcaption-body"></div>
              </figcaption>
            </figure>
            <div class="card-body">
              <p class="productView-type-title h4">${fakeHeading}</p>
              <h3 class="card-title">
                <a aria-label="Product Info" href="${url}">${name}</a>
              </h3>
              ${
                sku
                  ? `<p class="card-text card-text--sku">
                <span>SKU#: ${sku}</span>
              </p>`
                  : ""
              }
              <div class="card-text card-text--price" data-test-info-type="price">
                ${
                  salePrice && retailPrice !== salePrice
                    ? `
                <div class="price-section price-section--withoutTax h4">
                  <span data-product-price-without-tax="" class="price price--withoutTax">${salePrice.formatted}</span>
                </div>
                <div class="price-section price-section--withoutTax rrp-price--withoutTax h4">
                  <span data-product-rrp-price-without-tax="" class="price price--rrp h5">${retailPrice.formatted}</span>
                </div>`
                    : `
                <div class="price-section price-section--withoutTax h4">
                  <span data-product-price-without-tax="" class="price price--withoutTax">${retailPrice.formatted}</span>
                </div>`
                }
              </div>
              ${extraInfo ? `<p class="card-text card-text--extra">${extraInfo}</p>` : ""}
              <div class="card-action-wrapper">
                <div class="card-atc js-card-atc">
                  <div class="card-atc__section card-atc__section--qty">
                    <label for="card-atc__qty-${id}-${timestamp}" class="card-atc__label is-srOnly">Quantity:</label>
                    <div class="card-atc-increment card-atc-increment--has-buttons js-card-atc-increment">
                      <input
                        type="tel"
                        class="form-input card-atc__input card-atc__input--total js-card-atc__input--total"
                        name="card-atc__qty-${id}-${timestamp}"
                        id="card-atc__qty-${id}-${timestamp}"
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
                      id="card-atc__add-${id}-${timestamp}"
                      data-default-message="Add to Cart"
                      data-wait-message="ADDING..."
                      data-added-message="Add to Cart"
                      value="Add to Cart"
                      data-card-add-to-cart="/cart.php?action=add&product_id=${id}"
                      data-event-type="product-click"
                    >Add to Cart</button>
                    <span class="product-status-message aria-description--hidden">Adding to cart… The item has been added</span>
                  </div>
                </div>
                <div id="previewModal" class="modal modal--large" data-reveal>
                  <button class="modal-close" type="button" data-reveal-close>
                    <span class="aria-description--hidden">Close</span>
                    <span aria-hidden="true">&#215;</span>
                  </button>
                  <div class="modal-content"></div>
                  <div class="loadingOverlay"></div>
                </div>
                <button type="button" class="button button--primary" onclick="window.location.href='${url}'">View details</button>
              </div>
            </div>
          </article>
        `);

        listItem.append(article);
        product.append(listItem);
        $("#popular").append(product);
      });

      

      $(document).ready(function () {
        var $popular = $("#popular");

        function initializeCarousel() {
          if (!$popular.hasClass("slick-initialized")) {
            $popular.slick({
              infinite: true,
              mobileFirst: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              slide: "[data-product-slide]",
              dots: false,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ],
            });
          }
        }

        //$(window).on("resize", initializeCarousel);
        initializeCarousel(); // Initial setup*/
        customGlobal(context);
      });
    }
  }
}

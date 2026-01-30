import PageManager from "./page-manager";
import utils from "@bigcommerce/stencil-utils";
import collapsibleFactory from "./common/collapsible";
import customGlobal from "./custom/its-global";
import InfiniteScroll from "infinite-scroll";

export default class Blog extends PageManager {
  onReady() {
    collapsibleFactory();

    this.fetchRecentPosts();

    this.loadHeroImage();
    this.initializeSocialMedia();
    this.fillData();
    this.getSkuItem();
    this.getRelatedArticlesItem();
    // this.fetchAllBlogPosts().then((allBlogPosts) => {
    //   this.allBlogPosts = allBlogPosts;
    //   //console.log(this.allBlogPosts);
    //   window.allBlogPosts = allBlogPosts;
    // });
    this.fetchAllBlogPosts2().then(x => {
      window.allBlogPosts = x
    })

    function infiniteScroll() {
      const elem = document.querySelector(".blog-posts .blog-posts__container");
      const infScroll = new InfiniteScroll(elem, {
        // options
        path: ".pagination-item--next .pagination-link",
        append: ".blog-post__card",
        history: false,
      });

      // Attach a listener to the 'append' event
      infScroll.on("append", function (response, path, items) {
        items.forEach((item) => {
          const summaries = item.querySelectorAll(".blog-post__card-summary");
          summaries.forEach((summary) => {
            summary.remove(); // Remove the summary element
          });
        });
        blogclick();
      });

      return infScroll;
    }

    infiniteScroll();

    function blogclick() {
      $(".blog-post__card").on("click", function () {
        const currentURL = window.location.origin;
        const dataLink = $(this).data("link");
        const newURL = currentURL + dataLink;
        window.location.href = newURL;
      });
    }
  }

  async fetchAllBlogPosts() {
    try {
      //const response = await $.get("https://eowwxbdde5f3v1j.m.pipedream.net");
      const response = await $.get("https://eovkdsdmnf9ya6.m.pipedream.net");
      //console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async fetchAllBlogPosts2() {
    const pageSize = 10;
    let cursor = null;
    const allPosts = [];
  
    while (true) {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.context.storefrontToken}`, // replace with your actual access token
        },
        body: JSON.stringify({
          query: `
            query GetBlogPost($pageSize: Int = 100, $cursor: String) {
              site {
                content {
                  blog {
                    posts(first: $pageSize, after: $cursor) {
                      pageInfo {
                        startCursor
                        endCursor
                        hasNextPage
                      }
                      edges {
                        node {
                          title: name
                          url: path
                          thumbnail_path: thumbnailImage {
                            urlOriginal
                          }
                          summary: plainTextSummary
                          tags
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: { pageSize, cursor }
        }),
      });
  
      const result = await response.json();
      if (!result.data || !result.data.site || !result.data.site.content || !result.data.site.content.blog) {
        break;
      }
  
      const posts = result.data.site.content.blog.posts.edges.map(edge => edge.node);
      allPosts.push(...posts);
  
      const pageInfo = result.data.site.content.blog.posts.pageInfo;
      if (!pageInfo.hasNextPage) {
        break;
      }
  
      cursor = pageInfo.endCursor;
    }
  
    return allPosts;
  }

  fetchRecentPosts() {
    const $sidebarRecent = $("#blog-sidebar-recent");

    if (!$sidebarRecent.length) return;

    const requestOptions = {
      config: {
        blog: {
          recent_posts: {
            limit: 5,
          },
        },
      },
      template: "custom/blog/blog-recent-post-items",
    };

    utils.api.getPage("/", requestOptions, (err, res) => {
      $sidebarRecent.html(res);
    });
  }

  loadHeroImage() {
    if ($(`#hero-image img`).length > 0) {
      $(".blog-post__image").css(
        "background-image",
        `linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url("${$(
          `#hero-image img`,
        ).attr("src")}")`,
      );
    }
  }

  initializeSocialMedia() {
    const title = $(".blog-post__title").text();
    const link = `https://www.level5tools.com${window.location.pathname}`;
    const twitter_text = `${title} ${link}`;

    $(".twitter-share").attr(
      "href",
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        twitter_text,
      )}`,
    );
    $(".facebook-share").attr(
      "href",
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
    );
    $(".linkedin-share").attr(
      "href",
      `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        link,
      )}&title=${encodeURIComponent(title)}&source=level5tools.com`,
    );
  }

  fillData() {
    if ($("#published-date").length > 0) {
      $("#published-date-text").text($("#published-date").text());
    }

    $("#heading-2-text").text($("#heading-2").text());
  }

  getSkuItem() {
    const body = this;
    $("img.blog-post__sku-image").css("display", "none");
    if ($("#sku").length > 0) {
      let sku = $("#sku")
        .text()
        .replace(/[^0-9a-zA-Z,-]/g, "")
        .split(",");
      sku = sku.filter((s) => s.length > 0);
      // console.log(sku)
      /*
            fetch(
                `https://squfgnmpg8.execute-api.us-east-2.amazonaws.com/prod/sku_item?sku=${sku.join(
                    ","
                )}`
            )
                .then((r) => r.json())
                .then((d) => {
                    // console.log(d);
                    d.forEach((pr) => {
                        $(
                            `.set-content_wrapper.${pr.sku} img.blog-post__sku-image`
                        ).attr("src", pr.image);
                        $(
                            `.set-content_wrapper.${pr.sku} .blog-post__sku-item`
                        ).attr("href", pr.url);
                        $(
                            `.set-content_wrapper.${pr.sku} .blog-post__sku-title`
                        ).text(pr.fake_name);
                    });
                    $("img.blog-post__sku-image").css("display", "block");
                    $(".blog-skeleton.image-skeleton.blog-post__sku-image").css(
                        "display",
                        "none"
                    );
                    const maxHeight = 275;
                    let height = 0;
                    $(
                        ".blog-post__sku-item-container .set-content_wrapper"
                    ).each(function () {
                        if ($(this).height() > height) {
                            height = $(this).height();
                        }
                    });
                    if (maxHeight > height) {
                        height = maxHeight;
                    }

                    height = Math.ceil(height);
                    $(
                        ".blog-post__sku-item-container .blog-post__sku-item"
                    ).css("height", `${height}px`);
                });
    */
      requestAxios(1, sku);
    }

    function requestAxios(attempt, sku) {
      axios
        .get(
          `https://squfgnmpg8.execute-api.us-east-2.amazonaws.com/prod/product_data?sku=${sku.join(
            ",",
          )}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then(function (response) {
          const data = response.data.reverse();
          let num = 0;
          data.forEach((pr) => {
            num = num + 1;
            const template = body.constructTemplate(pr, num);

            $(`.productCarousel-slide.product-${pr.sku}`).html(template);
          });

          body.restartCustomGlobal();
          setTimeout(function () {
            $(`#loader-block-sku`).hide();
          }, 0);
        })
        .catch((error) => {
          if (attempt < 5) {
            requestAxios(attempt + 1, sku);
          } else {
            console.log(error);
          }
        });
    }
  }

  getRelatedArticlesItem() {
    if ($("#related-articles").length > 0) {
      const baseUrl = window.location.origin;
      let ra_item_list = $("#related-articles")
        .text()
        .replace(/[^0-9a-zA-Z/,-]/g, "")
        .split(",");
      ra_item_list = ra_item_list.filter((s) => s.length > 0);

      ra_item_list.forEach((url) => {
        $.ajax({
          url: `${baseUrl}${url}`,
        }).done(function (html) {
          const regex = /<body[^>]*>((.|[\n\r])*)<\/body>/i;
          const match = regex.exec(html);
          const bodyContent = match ? match[1] : "";
          // console.log(bodyContent);
          const videos_tab = $("<div></div>");
          videos_tab.html(bodyContent);
          const videos_data = videos_tab.find("#fetch-section");
          const title = videos_data.find("#fetch-title").text();
          const image = videos_data.find("#fetch-image-old").text();

          $(`[href="${url}"] img.blog-related-article-image`).attr(
            "src",
            image,
          );
          $(`[href="${url}"] p.blog-related-article-title`).text(title);

          $(`[href="${url}"] img.blog-related-article-image`).show();
          $(`[href="${url}"] .blog-skeleton.image-skeleton`).hide();

          // const maxHeight = 230;
          // let height = 0;
          // $(".blog-post__related-articles-container .blog-post__related-article").each(function(){
          //     if($(this).height() > height){
          //         height = $(this).height();
          //     }
          // })
          // if(maxHeight > height){
          //     height = maxHeight;
          // }
          // $(".blog-post__related-articles-container .blog-post__related-article").css("height", `${height}px`);

          // console.log("Title: ", title);
          // console.log("Image: ", image);
        });
      });
    }
  }

  startGlobal() {
    customGlobal(this.context);
  }
  restartCustomGlobal() {
    $(`[data-action]`).off("click");
    $(`.card-atc__button`).off("click");
    $(`[href="#slideCart"]`).off("click");
    this.startGlobal();
  }

  constructTemplate(pr, num) {
    const UUIDcatc = this.context.UUIDcatc;
    let img = {};
    for (let i = 0; i < pr["images"].length; i++) {
      if (pr["images"][i]["is_thumbnail"]) {
        img = pr["images"][i];
        break;
      }
    }

    let addToCart = "";

    if (pr["inventory_tracking"] !== "none") {
      addToCart = `
            <div class="card-atc js-card-atc">
                <a href="${pr["custom_url"]["url"]}" class="button button--small out-of-stock" data-product-id="${pr["id"]}">SOLD OUT</a>
            </div>`;
    } else {
      addToCart = `<div class="card-atc__section card-atc__section--qty">
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
                <span class="product-status-message aria-description--hidden">Adding to cart.. The item has been added</span>
              </div>`;
    }

    let actionSection = "";
    if (pr["variants"].length > 1) {
      actionSection = `<a href="${pr["custom_url"]["url"]}" class="button button--primary quickview button--quickview">View Options</a>`;
    } else {
      actionSection = `
            <div class="card-atc js-card-atc">
              ${addToCart}
          </div>`;
    }

    const template = `
          <div id="product-${pr["id"]}" sort-order="${pr["sort_order"]}" 
          class="product"
          data-fake-name="${pr["fake-heading"]}" 
          data-product-price="${
            pr["variants"].length > 1
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
                          <div class="sale-flag-sash" style="display: ${
                            pr["variants"][0].sale_price !== 0
                              ? "block;"
                              : "none;"
                          } "><span class="sale-text">On Sale</span></div>
                          <a href="${pr["custom_url"]["url"]}" 
                          class="card-figure__link" 
                          aria-label="${pr["name"]}, 
                          $${
                            pr["variants"].length > 1
                              ? pr["variants"][0]["calculated_price"].toFixed(2)
                              : pr["calculated_price"].toFixed(2)
                          }">
                              <div class=" card-img-container">
                                  <img src="${img["url_thumbnail"]}" 
                                  alt="img["description"]" title="${
                                    pr["fake-heading"]
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
                                $${
                                  pr["variants"].length > 1
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
                                    ${
                                      pr["variants"][0].sale_price !== 0
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
                                <span data-product-price-without-tax="" class="price price--withoutTax">$${
                                  pr["variants"].length > 1
                                    ? pr["variants"][0][
                                        "calculated_price"
                                      ].toFixed(2)
                                    : pr["calculated_price"].toFixed(2)
                                }</span>
                              </div>
                          </div>
                          <p class="card-text card-text--extra" style="display: ${
                            pr["custom_fields"].find(
                              (field) => field["name"] === "__card-extra-info",
                            ) !== undefined
                              ? "relative;"
                              : "none;"
                          } "> 
                          ${
                            pr["custom_fields"].find(
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
                              <a href="${pr["custom_url"]["url"]}" 
                              class="button button--primary" >View Details</a>
                         </div>
                      </div>
                  </article>
              </div>
          </div>`;
    return template;
  }
}

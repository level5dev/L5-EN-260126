/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/utils/form-utils';
import modalFactory from './global/modal';
import ITSProduct from './custom/its-product';
import carousel from './common/carousel';

export default class Product extends PageManager {
    constructor(context) {
        
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
        this.reviewModal = modalFactory('#modal-review-form')[0];
    }

    onReady() {

        const body = this;

        if(this.context.hasVideo === "true"){
            $(`.blog-post__card[show]`).each(function(){
                body.loadSource($(this).attr("data-link"), $(this));
            })  
        }

           
        
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        this.bulkPricingHandler();

        const $reviewForm = classifyForm('.writeReview-form');

        if ($reviewForm.length === 0) return;

        const review = new Review({ $reviewForm });

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
            this.ariaDescribeReviewInputs($reviewForm);
        });

        $reviewForm.on('submit', () => {
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
        this.ITSProduct = new ITSProduct(this.context);
        // carousel(this.context);

    }

    ariaDescribeReviewInputs($form) {
        $form.find('[data-input]').each((_, input) => {
            const $input = $(input);
            const msgSpanId = `${$input.attr('name')}-msg`;

            $input.siblings('span').attr('id', msgSpanId);
            $input.attr('aria-describedby', msgSpanId);
        });
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }

    loadSource(url, $elem){
        const baseUrl = window.location.origin;
        $.ajax({
            url: `${baseUrl}${url}`,
        })
        .done(function(html) {
            const regex = /<body[^>]*>((.|[\n\r])*)<\/body>/i;
            const match = regex.exec(html);
            const bodyContent = match ? match[1] : '';
            // console.log(bodyContent);
            const videos_tab = $("<div></div>");
            videos_tab.html(bodyContent);
            console.log(videos_tab.find("#fetch-section"));
            const videos_data = videos_tab.find("#fetch-section");
            const title = videos_data.find("#fetch-title").text();
            const image = videos_data.find("#fetch-image img");
            const tags = [];
            videos_data.find("[fetch-tags]").each(function(){
                tags.push({
                    name:$(this).find("[tag-name]").text(),
                    url:$(this).find("[tag-url]").text()
                });
                
                $elem.find(".blog-post__card-tags").append(`<li class="tag">
                    <a class="h5" href="${$(this).find("[tag-url]").text()}">${$(this).find("[tag-name]").text()}</a>
                </li>`);
            });

            $elem.find(".blog-post__card-thumbnail a").append(videos_data.find("#fetch-image img"));
            $elem.find(".blog-post__card-title a").append(videos_data.find("#fetch-title").text());

            // console.log("Title: ", title);
            // console.log("Image: ", image);
            // console.log("Tags: ", tags);
        });
    }
}

import utils from '@bigcommerce/stencil-utils';
import schematics from '../custom/schematics';

/**
 * IntuitSolutions - Custom JS that fires on the PDP
 */

export default class ITSProduct {
    constructor(context) {
        this.context = context;
        this.currentPage = 1;
        this.reviewsPerPage = this.context.productpageReviewsCount || 3;
        this.totalReviews = this.context.productReviewsTotal || 0;
        this.totalPages = Math.ceil(this.totalReviews / this.reviewsPerPage);

        $('.js-review-prev').on('click', () => this.navigateReviews(this.currentPage - 1));
        $('.js-review-next').on('click', () => this.navigateReviews(this.currentPage + 1));
        this.updatePageCounter();

        // schematic + parts list buttons
        $('.schematic__content .button:not(.button--pdf)').on('click', schematics);

        $('.more-info-slider__text a[href="#tab-warranty"]').on('click', (e) => {
            const $targetTabId = $(e.currentTarget).attr('href');
            $(`.tab-title[href="${$targetTabId}"]`).trigger('click');
        });
    }

    navigateReviews(page) {
        const productPageURL = this.context.productpageURL;
        const pageURL = `${productPageURL}?revpage=${page}`;

        $('.js-review-prev, .js-review-next').attr('disabled', true);

        const requestOptions = {
            config: {
                product: {
                    reviews: {
                        limit: this.reviewsPerPage,
                    },
                },
            },
            template: 'products/ajax-reviews',
        };

        utils.api.getPage(pageURL, requestOptions, (err, res) => {
            if (err) {
                $('.js-review-prev, .js-review-next').attr('disabled', false);
                return;
            }

            const $list = $('#productReviews-list');
            $list.fadeOut(200, () => {
                $list.html(res).fadeIn(200);
            });

            this.currentPage = page;
            $('.js-review-prev').attr('disabled', this.currentPage <= 1);
            $('.js-review-next').attr('disabled', this.currentPage >= this.totalPages);
            this.updatePageCounter();
        });
    }

    updatePageCounter() {
        $('.js-review-page').text(`${this.currentPage} / ${this.totalPages}`);
    }
}

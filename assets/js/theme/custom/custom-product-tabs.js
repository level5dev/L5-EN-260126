import _ from "lodash";
export default function ($scope) {
  const dataTabs = $("[data-its-tab]").toArray();

  let notActive = true;

  dataTabs.forEach((tab, i) => {
    const title = $(tab).data("itsTab");
    $(".tabs", $scope).append(`
            <li class="tab tab--custom tab--${_.kebabcase(title)} ${
              notActive ? "is-active" : ""
            }" role="presentation" data-accTabId="tab-${_.kebabcase(title)}">
                <a class="tab-title" href="#itsTab-${i}" aria-controls="itsTab-${i}" role="tab" tabindex="0" aria-selected="false">${title}</a>
            </li>
        `);

    $(".tabs-contents", $scope).append(`
        <div data-tabcon="tab-${_.kebabcase(title)}" data-accPosition="last">
            <a class="dropdown-toggle w-dropdown-toggle accordion-mobile" data-accordion="tab-${_.kebabcase(
              title,
            )}">
                <div class="accordion-title white">${title}</div>
                <i class="fas fa-sharp fa-chevron-right open" style="color: #ffffff;" accordion-ddown></i>
            </a>
            <div class="container tab-content pdp-content-body tab-content--custom tab-content--${_.kebabcase(
              title,
            )} ${notActive ? "is-active" : ""}" id="tab-${_.kebabcase(
              title,
            )}" aria-hidden="true" role="tabpanel" accordion-mobile-content>
              ${$(tab)
                .html()
                .replace(/<h2/g, "<h3")
                .replace(/<\/h2>/g, "</h3>")}
            </div>
        </div>    
        `);

    if (notActive) {
      $('[data-acctabid].is-active:not(.tab--custom)').removeClass("is-active");
      $('[accordion-mobile-content].is-active:not(.tab-content--custom)').removeClass("is-active");
    }

    notActive = false;

    tab.remove();
  });
  // tabScript();
  // $(document).ready(function () {
  //   tabScript();
  // });
}
//

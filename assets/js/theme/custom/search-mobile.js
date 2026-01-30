export function initSearchMobile(){

    const $searchButton = $(`#search-mobile-button`);
    const $closeButton = $(`#search-mobile-button-close`);
    const $searchForm = $(`#search-form-mobile`);
    // const $searchModalBackground = $(`#search-form-mobile-background`);
    const $normalNavHeader = $("#header--mid--container");
    const $headerNav = $("#header-nav");

    $searchButton.off("click");
    $closeButton.off("click");
    $normalNavHeader.off("click");
    // $(document).off("click");

    $searchButton.on("click", function(){
        $searchForm.addClass("show");
        $normalNavHeader.addClass("hide");
    });

    $closeButton.on("click", function(){
        $searchForm.removeClass("show");
        $normalNavHeader.removeClass("hide");
    });

    $(document).on("click", function(event) {
        // Check if the click happened outside the search form and the search button
        if (!$headerNav.is(event.target) && $headerNav.has(event.target).length === 0 
            && !$searchButton.is(event.target) && $searchButton.has(event.target).length === 0) {
            
            // Close the form and show the normal nav header
            $searchForm.removeClass("show");
            $normalNavHeader.removeClass("hide");
        }
    });
}


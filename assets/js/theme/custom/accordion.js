//console.log("accordion.js");

if (window.innerWidth >= 480) {
  if ($("[data-tabcon] .tab-content.is-active").length == 0) {
    /*$("[data-acctabid]").each(function () {
      let tabName = $(this).data("acctabid");
      //console.log(tabName);
      if (tabName == "tab-videos") {
        $(this).addClass("is-active");
        $(`#${tabName}`).addClass("is-active");
        return false; // This will break out of the loop
      }
      // else {
      //   let clicktab = $("[data-acctabid]").eq(0).data("acctabid");
      //   $("[data-acctabid]").eq(0).click();
      //   $(`#${clicktab}`).addClass("is-active");
      // }
    });*/
    let clicktab = $("[data-acctabid]").eq(0).data("acctabid");
    $("[data-acctabid]").eq(0).click();
    $(`#${clicktab}`).addClass("is-active");
  }
} else {
  //console.log("less than 480");
}

$(".accordion-mobile").on("click", function () {
  //console.log("acc mob");
  $(this).next().toggleClass("is-active");
  $(this).find("[accordion-ddown]").toggleClass("open");
  let curTab = $(this).data("accordion");
  if ($(this).next().hasClass("is-active")) {
    $("[accordion-mobile-content].is-active")
      .not($(this).next())
      .each(function () {
        $(this).removeClass("is-active");
      });
    $("[accordion-ddown].open")
      .not($(this).find("[accordion-ddown]"))
      .each(function () {
        $(this).removeClass("open");
      });
    $(`[data-accTab] [data-accTabId].is-active`).each(function () {
      $(this).removeClass("is-active");
    });
    $('[data-accTabId="' + curTab + '"]').addClass("is-active");
  }
});

$("[data-accordion-sch]").on("click", function () {
  var $content = $(this).next(); // The content to slide down
  $content.toggleClass("open");
  $(this).find("[accordion-ddown-sch]").toggleClass("open");
  if ($content.hasClass("open")) {
    // Get the full height of the content
    //var contentHeight = $content.prop("scrollHeight");

    // Temporarily set the height to 0 and then trigger a reflow
    // $content.css("height", "0");
    // void $content.get(0).offsetHeight; // This forces a reflow

    // Animate the height to the calculated content height
    //$content.css("max-height", contentHeight + "px");
    $(".tab-content-sch.open")
      .not($(this).next())
      .each(function () {
        $(this).removeClass("open");
        // var contentHeight = $(this).prop("scrollHeight");

        // Temporarily set the height to 0 and then trigger a reflow
        // $(this).css("height", "0");
        //void $content.get(0).offsetHeight;
      });
    $("[accordion-ddown-sch].open")
      .not($(this).find("[accordion-ddown-sch]"))
      .each(function () {
        //console.log("close");
        $(this).removeClass("open");
      });
  } else {
    // $content.css("height", "0");
  }
});

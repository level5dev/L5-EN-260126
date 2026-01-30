$("[data-parts-card]").on("click", function () {
  //console.log($(this).find("h3").text().trim());
  $("[data-parts-head]").text($(this).find("h3").text().trim());
  $(".parts-sub").show();
  let name = $(this).data("parts-card");
  $("[data-parts-dropdown].is--active")
    .not(`[data-parts-dropdown="${name}"]`)
    .removeClass("is--active");
  $(`[data-parts-dropdown="${name}"]`).addClass("is--active");
  $("[parts-card-block]").hide();
  $("[parts-li-btn].activelink")
    .not(`[parts-li-btn="${name}"]`)
    .removeClass("activelink");
  $(`[parts-li-btn="${name}"]`).addClass("activelink");
});

$("[parts-li-btn]").on("click", function () {
  //console.log($(this).text().trim());
  $("[data-parts-head]").text($(this).text().trim());
  $(".parts-sub").show();
  $("[parts-li-btn].activelink").not(this).removeClass("activelink");
  $(this).addClass("activelink");
  let name = $(this).attr("parts-li-btn");
  $("[data-parts-dropdown].is--active")
    .not(`[data-parts-dropdown="${name}"]`)
    .removeClass("is--active");
  $(`[data-parts-dropdown="${name}"]`).addClass("is--active");
  $("[parts-card-block]").hide();
});

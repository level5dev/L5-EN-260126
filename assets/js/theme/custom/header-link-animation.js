export default function () {
  /*--------------------------------------
        Header top link animations
    ----------------------------------------*/

  /*--------------------------------------
        Mobile nav button click
    ----------------------------------------*/
  const navPages = $(".navPages-button");
  const mobileMenuToggle = $(".mobileMenu-toggle");
  navPages.on("click", () => {
    mobileMenuToggle.trigger("click");
  });
  /*--------------------------------------
    Mobile Menu slide animation button click
    ----------------------------------------*/
  const navContainer = $(".navPages-container");

  function toggleMobile() {
    if (!navContainer.hasClass("is-open")) {
      navContainer.addClass("is-close");
    } else {
      navContainer.removeClass("is-close");
    }
  }

  navContainer.on("animationend", toggleMobile);
}

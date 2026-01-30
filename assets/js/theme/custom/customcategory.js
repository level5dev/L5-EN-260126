$(document).ready(function () {
  $("#category-description")
    .find(".videoView-description-thumbnail")
    .each(function () {
      // Wrap each figure element with a <div>
      let vid = $(this).data("video-id");
      $(this).wrap(
        `<a class="videoView-thumbnail-link" data-type="video" data-video-id="${vid}"></a>`,
      );
    });
  $("#category-description .videoView-thumbnail-link").on(
    "click",
    function (e) {
      e.preventDefault();
      //console.log("video click");
      var videoId = $(this).data("video-id");
      //currentVideoIndex = videoIds.indexOf(videoId);
      loadVideo(videoId);
      $("#videoModal").show();
      // $('.header-1__bottom,.header-1 .navPages-container-title,.navUser').css('z-index', '1');
      // $('.slick-next.slick-arrow,.slick-prev.slick-arrow').css('z-index', '0');
      $("#videoModal").css("z-index", "1000");
    },
  );
});

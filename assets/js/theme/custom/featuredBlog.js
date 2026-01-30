function showFeaturedBlog(post) {
  //console.log("Received featured blog:", post);
  const featuredBlogPost = document.getElementById("featuredBlogPost");
  const article = document.createElement("article");
  article.id = "featured--blog";
  article.className = "blog-post__card";
  article.setAttribute("data-link", post.url);

  const containerDiv = document.createElement("div");
  containerDiv.className = "blog-post__card-container";

  if (post.thumbnail_path.urlOriginal) {
    const thumbnailFigure = document.createElement("figure");
    thumbnailFigure.className = "blog-post__card-thumbnail";

    const thumbnailLink = document.createElement("a");
    thumbnailLink.href = post.url;

    const currentURL = window.location.origin;
    const fullThumbnailURL = `${post.thumbnail_path.urlOriginal}`;

    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = fullThumbnailURL;
    thumbnailImage.alt = "Thumbnail";
    thumbnailImage.sizes = "872px";

    thumbnailLink.appendChild(thumbnailImage);
    thumbnailFigure.appendChild(thumbnailLink);

    containerDiv.appendChild(thumbnailFigure);
  }
  //    else {
  //     const thumbnailFigure = document.createElement("figure");
  //     thumbnailFigure.className = "blog-post__card-thumbnail";

  //     const thumbnailLink = document.createElement("a");
  //     thumbnailLink.href = post.url;
  //     thumbnailFigure.appendChild(thumbnailLink);

  //     containerDiv.appendChild(thumbnailFigure);
  //   }

  const bodyDiv = document.createElement("div");
  bodyDiv.className = "blog-post__card-body";

  const headerDiv = document.createElement("header");
  headerDiv.className = "blog-post__card-header";

  const titleHeading = document.createElement("h2");
  titleHeading.className = "blog-post__card-title";
  const titleLink = document.createElement("a");
  titleLink.href = post.url;
  titleLink.textContent = post.title;
  titleHeading.appendChild(titleLink);
  headerDiv.appendChild(titleHeading);
  bodyDiv.appendChild(headerDiv);

  if (post.summary !== "") {
    const summaryDiv = document.createElement("div");
    summaryDiv.className = "blog-post__card-summary";

    const truncatedSummary = post.summary;
    const limitedSummary = truncatedSummary.substring(0, 200);

    summaryDiv.innerHTML =
      limitedSummary + (truncatedSummary.length > 200 ? "..." : "");

    bodyDiv.appendChild(summaryDiv);
  }

  if (post.tags) {
    const tagsUl = document.createElement("ul");
    tagsUl.className = "blog-post__card-tags";

    for (const tag of post.tags) {
      const tagLi = document.createElement("li");
      tagLi.className = "tag";

      const tagLink = document.createElement("a");
      tagLink.className = "button--primary";
      const tagURL = `/blog/tag/${encodeURIComponent(tag.replace(/\s/g, "+"))}`;
      tagLink.href = tagURL;
      tagLink.textContent = tag;

      tagLi.appendChild(tagLink);
      tagsUl.appendChild(tagLi);
    }

    bodyDiv.appendChild(tagsUl);
  }

  //containerDiv.appendChild(bodyDiv);
  article.appendChild(containerDiv);
  article.appendChild(bodyDiv);

  //featuredBlogPost.appendChild(article);
  featuredBlogPost.insertAdjacentElement("afterend", article);
  $("[blog-loader]").css("display", "none");
  $("#featuredBlogPost").parent().css("visibility", "visible");
  // const nextSiblingBlog =
  //   document.querySelector("#featured--blog").nextElementSibling;
  // const nextnextSibling = nextSiblingBlog.nextElementSibling;
  // if (nextSiblingBlog) {
  //   const blogImage = nextSiblingBlog.querySelector("img");
  //   if (blogImage) {
  //     //blogImage.style.maxWidth = "300px";
  //     blogImage.style.height = "auto";
  //   }
  // }
  updateImageSizes();
  //window.addEventListener("load", updateImageSizes);
  //window.addEventListener("resize", updateImageSizes);
}

// Function to update image sizes
function updateImageSizes() {
  const nextSiblingBlog =
    document.querySelector("#featured--blog").nextElementSibling;
  const nextnextSibling = nextSiblingBlog.nextElementSibling;
  if (nextSiblingBlog) {
    const blogSumm = nextSiblingBlog.querySelector(".blog-post__card-summary");
    if (blogSumm) {
      blogSumm.style.display = "none";
    }
  }

  if (nextSiblingBlog && nextnextSibling) {
    const nextnextBlogImage = nextnextSibling.querySelector("img");
    const blogImage = nextSiblingBlog.querySelector("img");

    if (nextnextBlogImage && blogImage) {
      // Get the dimensions of the nextnextSibling img
      const imgWidth = nextnextBlogImage.width;
      const imgHeight = nextnextBlogImage.height;

      // Apply the dimensions to the nextSiblingBlog img
      blogImage.style.width = imgWidth + "px";
      blogImage.style.height = imgHeight + "px";
    }
  }
}

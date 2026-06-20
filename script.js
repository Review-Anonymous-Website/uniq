document.querySelectorAll(".video-loader").forEach((button) => {
  button.addEventListener("click", () => {
    const videoId = button.dataset.youtubeId;
    const title = button.dataset.title || "UNIQ video";
    const iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = title;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    button.replaceWith(iframe);
  });
});

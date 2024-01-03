export const setMeta = (img) => {
  const twitterImage = document.getElementById("twitter_image");
  const ogImage = document.getElementById("og_image");

  if (twitterImage && ogImage) {
    console.log(59);
    twitterImage.content = img;
    ogImage.content = img;
  }
};

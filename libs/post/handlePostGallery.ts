const handlePostGallery = (
  url: string,
  title: string,
  content: string,
  category = "etc"
) => {
  if (!title && !content) {
    alert("Please Insert Title & Content");
    return;
  }
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      imgUrl: content,
      galleryCategory: category,
    }),
  });
};

export default handlePostGallery;

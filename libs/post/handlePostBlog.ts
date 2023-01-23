const handlePostBlog = (
  url: string,
  title: string,
  content: string,
  category = ".etc"
  // tag: string[]
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
      content,
      category,
    }),
  });
};

export default handlePostBlog;

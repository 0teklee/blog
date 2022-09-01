const handlePostBlog = (
  url: string,
  title: string,
  content: string,
  category = ".etc",
  id: number,
  tag: string[]
) => {
  if (!title && !content) {
    alert("Please Insert Title & Content");
    return;
  }
  fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      title,
      content,
      category,
      tag,
    }),
  });
};

export default handlePostBlog;

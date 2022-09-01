const handleDeleteBlogPost = (url: string) => {
  fetch(url, {
    method: "DELETE",
  });
};

export default handleDeleteBlogPost;

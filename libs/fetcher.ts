import { IGuestbookPost } from "@/components/guestbook/types";

interface IPostGuestbookPostProps {
  author: string;
  post: string;
  isPrivate: boolean;
  email: string;
}

interface IPostGuestbookCommentProps {
  comment_id: number;
  author: string;
  comment: string;
  isPrivate: boolean;
}

export const getGuestbookListFetcher = async (
  cursorIn: number,
  email: string | null | undefined,
): Promise<IGuestbookPost[]> => {
  try {
    const res = await fetch(
      `/api/getGuestbookList?cursor=${cursorIn}&user=${email || ""}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      },
    );
    const pageData: IGuestbookPost[] = await res.json();
    return pageData;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const postGuestbookPostFetcher = async (
  body: IPostGuestbookPostProps,
) => {
  if (!body.post || !body.author || !body.email) {
    alert("please login and fill out all fields");
    return;
  }

  try {
    const res = await fetch(`/api/postGuestbookPost`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    return res.json();
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const postGuestbookCommentFetcher = async (
  body: IPostGuestbookCommentProps,
) => {
  try {
    const res = await fetch(`/api/postGuestbookComment`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const postImageUpload = async (data: FormData) => {
  const cloudName = process.env.CLOUD_NAME;
  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      },
    ).then((res) => res.json());

    return res;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const putEditBlogContent = (
  title: string,
  content: string,
  category = ".etc",
  id: string,
) => {
  if (!title && !content) {
    alert("Please Insert Title & Content");
    return;
  }
  fetch(`/api/putBlogPost`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      title,
      content,
      category,
      // tag,
    }),
  });
};

export const postBlogContent = (
  title: string,
  content: string,
  category = ".etc",
) => {
  if (!title && !content) {
    alert("Please Insert Title & Content");
    return;
  }
  fetch(`/api/postBlog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      category,
    }),
  });
};

const handlePostGallery = async (
  url: string,
  title: string,
  content: string,
  category = "etc",
) => {
  if (!title && !content) {
    alert("Please Insert Title & Content");
    return;
  }
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        imgUrl: content,
        galleryCategory: category,
      }),
    });
  } catch (err) {
    console.error(err);
  }
};
export default handlePostGallery;

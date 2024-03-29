import { IGuestbookPost } from "@/components/guestbook/types";

interface IPostGuestbookPostProps {
  author: string;
  post: string;
  isPrivate: boolean;
}

interface IPostGuestbookCommentProps {
  comment_id: number;
  author: string;
  comment: string;
  isPrivate: boolean;
}

export const getGuestbookListFetcher = async (
  cursorIn: number,
): Promise<IGuestbookPost[]> => {
  try {
    const res = await fetch(`/api/getGuestbookList?cursor=${cursorIn}`, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
    const pageData: IGuestbookPost[] = await res.json();
    return pageData;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const postGuestbookPostFetcher = async (
  access_token: string,
  body: IPostGuestbookPostProps,
) => {
  try {
    const res = await fetch(
      `/api/postGuestbookPost?access_token=${access_token}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      },
    );

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

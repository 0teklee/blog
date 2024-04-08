import { IGuestbookPost } from "@/components/guestbook/types";
import {
  DEFAULT_ERROR_IMAGE,
  DEFAULT_ETC_IMAGE,
  DEFAULT_IMAGE,
  DEFAULT_JS_IMAGE,
  DEFAULT_NEXT_IMAGE,
  DEFAULT_REACT_IMAGE,
  DEFAULT_RECAP_IMAGE,
  DEFAULT_TS_IMAGE,
} from "@/libs/constants";

export const maskPrivateContent = (
  post: IGuestbookPost,
  userEmail?: string | null,
) => {
  if (
    post.isPrivate &&
    post.email !== userEmail &&
    userEmail !== process.env.ADMIN_EMAIL
  ) {
    post = {
      ...post,
      post: "This is a private post 🔒",
      author: "anonymous",
    };
  }
  post.comments = post.comments.map((comment) => {
    if (
      comment.isPrivate &&
      comment.email !== userEmail &&
      userEmail !== process.env.ADMIN_EMAIL
    ) {
      return {
        ...comment,
        author: "anonymous",
        comment: "This is a private comment 🔒",
      };
    }
    return { ...comment, email: undefined };
  });

  return { ...post, email: undefined };
};

export const htmlReplace = (content: string | null | undefined) => {
  return content === "" || content === null || content === undefined
    ? ""
    : content
        .toString()
        .replace(/&quot;/gi, "")
        .replace(/(<([^>]+)>)/gi, "")
        .replace(/&nbsp;/gi, "")
        .replace(/&gt;/gi, "")
        .replace(/&lt;/gi, "")
        .replace(/&amp;/gi, "")
        .replace(/\n/g, "")
        .trim();
};

const getContentImg = (content: string): string => {
  const contentReg = content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
  const contentImg =
    contentReg &&
    contentReg
      .map((x: string) => x.replace(/.*src="([^"]*)".*/, "$1"))[0]
      .replace("http", "https")
      .replace("httpss", "https");
  return contentImg ?? DEFAULT_IMAGE;
};

const setCategoryPresetImg = (category: string): string => {
  switch (category) {
    case "React":
      return DEFAULT_REACT_IMAGE;
    case "Next.js":
      return DEFAULT_NEXT_IMAGE;
    case "TypeScript":
      return DEFAULT_TS_IMAGE;
    case "JavaScript":
      return DEFAULT_JS_IMAGE;
    case ".etc":
      return DEFAULT_ETC_IMAGE;
    case "Recap":
      return DEFAULT_RECAP_IMAGE;
    case "Error":
      return DEFAULT_ERROR_IMAGE;
    default:
      return DEFAULT_IMAGE;
  }
};
export { setCategoryPresetImg, getContentImg };

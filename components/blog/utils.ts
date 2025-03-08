import {
  DEFAULT_DATA_IMAGE,
  DEFAULT_ERROR_IMAGE,
  DEFAULT_ETC_IMAGE,
  DEFAULT_HTTP_IMAGE,
  DEFAULT_JS_IMAGE,
  DEFAULT_NEXT_IMAGE,
  DEFAULT_REACT_IMAGE,
  DEFAULT_RECAP_IMAGE,
  DEFAULT_TS_IMAGE,
  THEME_META_IMAGE,
} from "@/libs/constants";

export const imgSrcReplaceReg = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;

export const getImgSrc = (content: string) => {
  const match = imgSrcReplaceReg.exec(content);
  return match ? match[1].replace("http://", "https://") : null;
};

export const getCategoryImgSrc = (category: string): string => {
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
    case "HTTP":
      return DEFAULT_HTTP_IMAGE;
    case "Data Structures & Algorithms":
      return DEFAULT_DATA_IMAGE;
    default:
      return THEME_META_IMAGE;
  }
};

export const formatBlogContent = (content: string) =>
  content
    .replaceAll(
      "<img",
      `<img alt="img" width= "100%" height="100%"
    `,
    )
    .replaceAll("http://res.cloudinary.com", "https://res.cloudinary.com")
    .replaceAll("</img>", "/>");

export const formatTableContentStyle = (level: number) => {
  if (level == 1) {
    return "text-sm font-semibold";
  }

  if (level == 2) {
    return "text-[0.8rem] font-medium pl-1";
  }

  if (level == 3) {
    return "text-xs pl-2";
  }

  return "text-xs pl-3";
};

import { IBlogGetCategorySideBar } from "@/components/blog/types";
import { DEFAULT_SKY, imgSrcReplaceReg } from "libs/constants";

export const initialCategoryState = (categories: IBlogGetCategorySideBar[]) =>
  categories
    .map((item) => item.name)
    .reduce(
      (acc, item) => {
        return { ...acc, [item]: false };
      },
      {} as { [key: string]: boolean },
    );

export const getImgSrc = (content: string) => {
  const matchSrc = content?.match(imgSrcReplaceReg);
  const isImage =
    content && matchSrc && matchSrc.some((item) => item.includes("cloudinary"));

  const imgSrc =
    isImage &&
    matchSrc &&
    matchSrc
      .map((src) => src.slice(4, -1))[0]
      .replace("http", "https")
      .replaceAll(`"`, "");

  return imgSrc || DEFAULT_SKY;
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

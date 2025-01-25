import dayjs from "dayjs";

export const DEFAULT_BLOG_ITEM = {
  id: "",
  title: "",
  createdAt: dayjs().format("YYYY-MM-DD"),
  categories: { name: "" },
};

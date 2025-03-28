import { IBlogGetListItem } from "@/components/blog/types";
import dayjs from "dayjs";

export const LANDING_LIST_IMAGES = [
  {
    id: 1,
    url: "/asset/images/landing-image-1.jpg",
    height: 372,
  },
  {
    id: 2,
    url: "/asset/images/landing-image-2.jpg",
    height: 377,
  },
  {
    id: 3,
    url: "/asset/images/landing-image-3.jpg",
    height: 377,
  },
  {
    id: 4,
    url: "/asset/images/landing-image-4.jpg",
    height: 422,
  },
  {
    id: 5,
    url: "/asset/images/landing-image-5.jpg",
    height: 405,
  },
  {
    id: 6,
    url: "/asset/images/landing-image-6.jpg",
    height: 405,
  },
];

export const MAIN_LIST_FALLBACK: IBlogGetListItem[] = Array.from(
  { length: 6 },
  (_, index) => ({
    id: index,
    title: "",
    categories: { name: "" },
    content: "",
    createdAt: dayjs().toString(),
  }),
);

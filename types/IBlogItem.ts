interface IBlogMainItem {
  id: number;
  title: string;
  createdAt: string;
  content: string;
}

interface IBlogItem {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: string;
}

interface IBlogItemNoDate extends Omit<IBlogItem, "createdAt"> {
  tags: string[];
}

interface IBlogItemPost extends Omit<IBlogItemNoDate, "id"> {
  tag: string[];
}

interface IBlogGetEditItem extends IBlogItem {
  tags: { tag: string }[];
  categories: { name: string };
  post_id: number;
}

interface IBlogGetListItem {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: { tag: string }[];
  categories: { name: string };
}

interface IBlogGetCategory {
  categories: { name: string };
}

interface IBlogGetDetail {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
    categories: { name: string };
    tags: { tag: string }[];
  };
  nav: { id: number; createdAt: string; title: string }[];
}

interface IBlogGetCategorySideBar {
  name: string;
  posts: {
    id: number;
    title: string;
  }[];
}

export type {
  IBlogMainItem,
  IBlogItem,
  IBlogItemNoDate,
  IBlogItemPost,
  IBlogGetEditItem,
  IBlogGetListItem,
  IBlogGetCategory,
  IBlogGetCategorySideBar,
  IBlogGetDetail,
};

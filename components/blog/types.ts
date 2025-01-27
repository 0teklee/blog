interface IBlogMainItem {
  id: number;
  title: string;
  createdAt: string;
  content: string;
}

interface Types {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: string;
}

interface IBlogItemNoDate extends Omit<Types, "createdAt"> {
  tags: string[];
}

interface IBlogItemPost extends Omit<IBlogItemNoDate, "id"> {
  tag: string[];
}

interface IBlogGetEditItem extends Types {
  tags: { tag: string }[];
  categories: { name: string };
  post_id: number;
}

interface IBlogGetListItem {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  // tags: { tag: string }[];
  categories: { name: string };
}

interface IBlogGetListResponse {
  posts: IBlogGetListItem[];
  has_next_page: boolean;
}

type TEditItem = Omit<IBlogGetListItem, "content">;

interface IBlogGetCategorySideBar {
  name: string;
  posts: {
    id: number;
    title: string;
  }[];
}

interface IDetailGetCategorySideBar {
  id: number;
  category: string;
}

interface IGalleryPost {
  title: string;
  imgUrl: string;
  galleryCategory: string;
}

interface IGalleryPostGetDetail {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    imgUrl: string;
    galleryCategory: { name: string };
  };
}

interface IGalleryGetCategory {
  galleryCategory: { name: string };
}

interface IGalleryGetCategorySideBar
  extends Omit<IBlogGetCategorySideBar, "post"> {}
export type {
  IBlogMainItem,
  Types,
  IBlogItemNoDate,
  IBlogItemPost,
  IBlogGetEditItem,
  IBlogGetListItem,
  IBlogGetListResponse,
  IBlogGetCategorySideBar,
  IGalleryPost,
  IGalleryPostGetDetail,
  IGalleryGetCategorySideBar,
  IGalleryGetCategory,
  IDetailGetCategorySideBar,
  TEditItem,
};

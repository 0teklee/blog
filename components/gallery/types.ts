interface IGalleryProps {
  list: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
    imgUrl: string;
  }[];
  categories: { name: string }[];
  category: string;
}

export type { IGalleryProps };

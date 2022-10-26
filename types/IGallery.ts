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

interface IGalleryTemplateProp extends Omit<IGalleryProps, "category"> {
  query: string;
}

export type { IGalleryProps, IGalleryTemplateProp };

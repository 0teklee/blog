export type Category = {
  id: number;
  name: string;
};

export type BlogPost = {
  id: number;
  title: string;
  createdAt: Date;
  categoryId: number;
  tags: string[];
  category: Category | null;
};

export type Position = [number, number, number];

export type TooltipPosition = {
  x: number;
  y: number;
};

export type CelestialBlogProps = {
  posts: BlogPost[];
  categories: Category[];
};

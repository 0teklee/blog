export interface IGuestbookPost {
  id: number;
  createdAt: string | Date;
  author: string;
  email: string;
  post: string;
  isPrivate: boolean;
  comments: IGuestbookComment[] | [];
}

export interface IGuestbookComment {
  id: number;
  createdAt: string | Date;
  author: string;
  email?: string;
  isPrivate: boolean;
  comment: string;
}

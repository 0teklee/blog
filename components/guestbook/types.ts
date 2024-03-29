export interface IPost {
  id: number;
  createdAt: Date;
  author: string;
  email: string;
  post: string;
  isPrivate: boolean;
  comments: IComment[] | [];
}

export interface IComment {
  id: number;
  createdAt: Date;
  author: string;
  email: string;
  isPrivate: boolean;
  comment: string;
}

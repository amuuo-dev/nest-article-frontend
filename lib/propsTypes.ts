export interface ArticleProp {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  favoritesCount: number;
  authorId: number;
  author: AuthorProp;
  comments: CommentProp[];
  tags: TagProp[];
}

export interface AuthorProp {
  id: number;
  username: string;
  email: string;
  bio: string;
  image: string;
  //   password: string;
}

export interface CommentProp {
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  author: AuthorProp;
}

export interface TagProp {
  id: number;
  name: string;
  CreatedAt: string;
}

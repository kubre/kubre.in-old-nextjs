export interface PostMeta {
  author?: {
    name: string;
    email: string;
    link: string;
  };
  description: string;
  title: string;
  slug?: string;
  image?: string;
  tags: string[];
  publishedAt: string;
  modifiedAt?: string;
  isPublished: boolean;
};

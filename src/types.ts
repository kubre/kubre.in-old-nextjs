export interface PostMeta {
  author?: string;
  description: string;
  title: string;
  slug?: string;
  image?: string;
  keywords: string[];
  publishedAt: string;
  modifiedAt?: string;
  isPublished: boolean;
};

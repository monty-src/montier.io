
export interface Post {
  id: string;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string; 
    body: string;
    slug: string;
  }

}

export type Posts = Post[];
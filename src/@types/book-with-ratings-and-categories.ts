export type BookWithRatingsAndCategories = {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
  average_rating: number;
  categories: {
    category: {
      id: string;
      name: string;
    };
  }[];
  ratings: {
    id: string;
    rate: number;
    description: string;
    created_at: Date;
    book_id: string;
    user_id: string;
    user: {
      id: string;
      name: string;
      avatar_url: string | null;
    };
  }[];
};

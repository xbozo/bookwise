type Book = {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
};

type User = {
  id: string;
  email: string;
  name: string;
  avatar_url: string | null;
  created_at: Date;
};

export type RatedBook = {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book_id: string;
  user_id: string;
  book: Book;
  user: User;
};

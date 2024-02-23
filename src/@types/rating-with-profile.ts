type User = {
  avatar_url: string;
  name: string;
  id: string;
};

export type RatingWithProfile = {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book_id: string;
  user_id: string;
  user: User;
};

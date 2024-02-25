export type RatingWithProfile = {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book_id: string;
  user_id: string;
  user: {
    avatar_url: string | null;
    name: string;
    id: string;
  };
};

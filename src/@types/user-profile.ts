import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category;
      }[];
  };
};

export type ProfileData = {
  avatar_url: string | null | undefined;
  name: string;
  id: string;
  email: string;
  created_at: Date;
  ratings: ProfileRating[] | null;
  readPages: number;
  ratedBooks: number;
  readAuthors: string[];
  mostReadCategory?: string;
};

import { Book } from "@prisma/client";

export type Category = {
  category: {
    id: string;
    name: string;
  };
};

export interface BookWithRating extends Book {
  average_rating: number;
  categories: Category[];
  ratings: any[];
}

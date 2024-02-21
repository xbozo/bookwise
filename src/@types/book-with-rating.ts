import { Book } from "@prisma/client";

export interface BookWithRating extends Book {
  average_rating: number;
}

"use client";

import { BookWithRatingsAndCategories } from "@/@types/book-with-ratings-and-categories";
import { BookCard } from "@/components/book-card/book-card";

export function PopularBooks({ book }: { book: BookWithRatingsAndCategories }) {
  return <BookCard bookData={book} />;
}

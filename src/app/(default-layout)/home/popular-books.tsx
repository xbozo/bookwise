"use client";

import { BookWithRating } from "@/@types/book-with-rating";
import { BookCard } from "@/components/book-card/book-card";

export function PopularBooks({ book }: { book: BookWithRating }) {
  return (
    <BookCard
      key={book.id}
      id={book.id}
      name={book.name}
      author={book.author}
      cover_url={book.cover_url}
      total_pages={book.total_pages}
      created_at={book.created_at}
      average_rating={book.average_rating}
      categories={book.categories}
      ratings={book.ratings}
    />
  );
}

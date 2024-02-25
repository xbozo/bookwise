"use server";

import { BookWithRatingsAndCategories } from "@/@types/book-with-ratings-and-categories";
import { prisma } from "@/libs/prisma";

// type BookWithRatingsAndCategories

function mapBookAverageRating(
  book: Omit<BookWithRatingsAndCategories, "average_rating">,
) {
  const averageRating = calculateAverageBookRate(book);

  return {
    ...book,
    average_rating: averageRating,
  };
}

function calculateAverageBookRate(book: {
  ratings: { rate: number }[];
}): number {
  const ratings = book.ratings.map((rating) => rating.rate);

  if (ratings.length === 0) {
    return 0;
  }

  const sum = ratings.reduce((acc, rating) => acc + rating, 0);

  return sum / ratings.length;
}

export async function fetchBook({ bookId }: { bookId: string }) {
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      ratings: {
        include: {
          user: {
            select: {
              avatar_url: true,
              name: true,
              id: true,
            },
          },
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
    },
  });

  if (book) {
    const bookWithAverageRating = mapBookAverageRating(book);

    return bookWithAverageRating;
  }

  return null;
}

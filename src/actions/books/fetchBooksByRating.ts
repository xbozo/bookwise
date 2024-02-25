"use server";

import { prisma } from "@/libs/prisma";
import { mapBooksAverageRating } from "@/utils/mapBooksAverageRating";

// type BookWithRatingsAndCategories

export async function fetchBooksByRating() {
  const booksWithAverageRating = await prisma.book.findMany({
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
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },
  });

  const booksWithAverageRatingMapped = mapBooksAverageRating(
    booksWithAverageRating,
  );

  if (!booksWithAverageRatingMapped) {
    return [];
  }

  return booksWithAverageRatingMapped;
}

"use server";

import { Filter } from "@/@types/filter";
import { prisma } from "@/libs/prisma";
import { mapBooksAverageRating } from "@/utils/mapBooksAverageRating";
import { fetchBooksByRating } from "./fetchBooksByRating";

// BookWithRatingsAndCategories

export async function fetchBooksByCategory(filters: Filter[]) {
  if (!filters) {
    return;
  }

  if (filters.some((filter) => filter.id === "all" && filter.name === "Tudo")) {
    const books = fetchBooksByRating();

    return books;
  }

  const filteredBooks = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          category_id: {
            in: filters.map((filter) => filter.id?.toString() || ""),
          },
        },
      },
    },
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  });

  const booksWithRating = mapBooksAverageRating(filteredBooks);

  return booksWithRating;
}

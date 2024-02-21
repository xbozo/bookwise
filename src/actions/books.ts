"use server";

import { Filter } from "@/@types/filter";
import { prisma } from "@/libs/prisma";

export async function fetchAllBooks() {
  const books = await prisma.book.findMany();

  if (!books) {
    return [];
  }

  return books;
  // return w/ overall rating length / ratings
}

export async function fetchBooksByRating() {
  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },
  });

  // const calculateRate = books.length

  if (!books) {
    return [];
  }

  return books;
}

export async function fetchRatedBooks() {
  const books = await prisma.rating.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
      user: true,
    },
  });

  if (!books) {
    return [];
  }

  return books;
}

export async function fetchBooksByCategory(filters: Filter[]) {
  if (!filters) {
    return;
  }

  if (filters.some((filter) => filter.id === "all" && filter.name === "Tudo")) {
    const books = await prisma.book.findMany();

    return books;
  }

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          category_id: {
            in: filters.map((filter) => filter.id?.toString() || ""),
          },
        },
      },
    },
  });

  return books;
}

export async function fetchBook({ bookId }: { bookId: string }) {
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });

  if (!book) {
    return console.error("Livro inexistente.");
  }

  return book;
}

export async function fetchAllCategories() {
  const categories = await prisma.category.findMany();

  if (!categories) {
    return [];
  }

  return categories;
}

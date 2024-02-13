"use server";

import { prisma } from "@/libs/prisma";

export async function fetchAllBooks() {
  const books = await prisma.book.findMany();

  if (!books) {
    return [];
  }

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

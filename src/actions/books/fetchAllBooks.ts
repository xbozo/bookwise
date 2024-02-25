"use server";

import { prisma } from "@/libs/prisma";

export type Book = {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
};

export async function fetchAllBooks() {
  const books = await prisma.book.findMany();

  if (!books) {
    return [];
  }

  return books;
}

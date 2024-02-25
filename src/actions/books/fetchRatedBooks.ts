"use server";

import { prisma } from "@/libs/prisma";

export type RatedBook = {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book_id: string;
  user_id: string;
  book: {
    id: string;
    name: string;
    author: string;
    summary: string;
    cover_url: string;
    total_pages: number;
    created_at: Date;
  };
  user: {
    id: string;
    email: string;
    name: string;
    avatar_url: string | null;
    created_at: Date;
  };
};

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

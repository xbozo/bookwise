"use server";

import { prisma } from "@/libs/prisma";

export type Category = {
  id: string;
  name: string;
};

export async function fetchAllCategories() {
  const categories = await prisma.category.findMany();

  if (!categories) {
    return [];
  }

  return categories;
}

"use server";

import { prisma } from "@/libs/prisma";
import { getMostFrequentString } from "@/utils/getMostFrequentString";

export type ProfileData = {
  id: string;
  email: string;
  name: string;
  avatar_url: string | null;
  created_at: Date;
  readPages: number;
  ratedBooks: number;
  readAuthors: string[];
  mostReadCategory: string | null;
  ratings: {
    created_at: Date;
    description: string;
    id: string;
    rate: number;
    book: {
      name: string;
      id: string;
      author: string;
      cover_url: string;
      created_at: Date;
      total_pages: number;
      categories: {
        category: {
          id: string;
          name: string;
        };
      }[];
    };
  }[];
};

export async function fetchUserProfile(
  userId: string,
): Promise<ProfileData | null> {
  const profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  if (!profile) {
    return null;
  }

  const ratedBooks = profile?.ratings.length;

  const readAuthors = profile?.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author);
    }

    return acc;
  }, [] as string[]);

  const readPages = profile?.ratings?.reduce((acc, current) => {
    return acc + current.book.total_pages;
  }, 0);

  const categories = profile?.ratings?.flatMap((rating) =>
    rating?.book?.categories?.flatMap((category) => category?.category?.name),
  );
  const mostReadCategory = categories
    ? getMostFrequentString(categories)
    : null;

  const profileData = {
    ...profile,
    readPages,
    ratedBooks,
    readAuthors,
    mostReadCategory,
  };

  return profileData;
}

import { ProfileData } from "@/@types/user-profile";
import { prisma } from "@/libs/prisma";
import { getMostFrequentString } from "@/utils/getMostFrequentString";

export async function fetchUserProfile(
  userId: string,
): Promise<ProfileData | any> {
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
    return {};
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
    id: profile?.id,
    email: profile?.email,
    name: profile?.name,
    avatar_url: profile?.avatar_url,
    created_at: profile?.created_at,
    ratings: profile?.ratings,
    readPages,
    ratedBooks,
    readAuthors,
    mostReadCategory,
  };

  return profileData;
}

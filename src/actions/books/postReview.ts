"use server";

import { prisma } from "@/libs/prisma";
import z from "zod";

const postReviewBodySchema = z.object({
  rate: z.number(),
  description: z.string(),
  book_id: z.string(),
  user_id: z.string(),
});

type PostReviewBodySchema = z.infer<typeof postReviewBodySchema>;

export async function postReview(reviewData: PostReviewBodySchema) {
  const data = postReviewBodySchema.parse(reviewData);

  await prisma.rating.create({
    data,
  });
}

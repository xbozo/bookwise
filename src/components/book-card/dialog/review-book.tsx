"use client";

import { postReview } from "@/actions/books/postReview";
import { LucideCheck, LucideX } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type ReviewBookProps = {
  bookId: string;
};

export const ReviewBook = ({ bookId }: ReviewBookProps) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const reviewRef = useRef<HTMLTextAreaElement | null>(null);

  const router = useRouter();

  const { data: userData } = useSession();

  if (!userData) {
    return;
  }

  const handleSetRating = (ratingIndex: number) => {
    setRating(ratingIndex === rating ? 0 : ratingIndex);
  };

  const handleClearReview = () => {
    reviewRef.current!.value = "";
    setReviewText("");
    setRating(0);
  };

  const handlePostReview = async () => {
    if (reviewText.length === 0) return;

    const data = {
      rate: rating,
      description: reviewText,
      user_id: String(userData.user.id),
      book_id: bookId,
    };

    await postReview(data);

    reviewRef.current!.value = "";
    setReviewText("");
    setRating(0);

    router.refresh();
  };

  return (
    <form className="flex flex-col gap-4 rounded-md bg-ds-gray-700 px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100">
            {userData.user.avatar_url ? (
              <Image
                src={userData.user.avatar_url}
                width={40}
                height={40}
                alt={`Usuário ${userData.user.name}`}
                className="rounded-full"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ds-gray-800">
                <img
                  src="/images/icons/user.svg"
                  alt={`Usuário ${userData.user.name}`}
                  className="h-8 w-8 text-ds-gray-100"
                />
              </div>
            )}
          </div>

          <h3 className="my-auto font-bold leading-snug">
            {userData.user.name}
          </h3>
        </div>

        <div className="flex gap-1 text-start">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => handleSetRating(i + 1)}
            >
              <img
                src={`/images/icons/star-${i < rating ? "filled" : "outline"}.svg`}
                alt={`Estrela ${i + 1}`}
                className="h-[24px] w-[24px]"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="group flex min-h-[160px] flex-col rounded-md border border-ds-gray-500 bg-ds-gray-800 px-5 py-4 group-focus:border-ds-green-100">
        <textarea
          placeholder="Escreva sua avaliação para esse livro."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          maxLength={450}
          ref={reviewRef}
          className="group min-h-[100px] w-full resize-none bg-ds-gray-800 text-sm caret-ds-green-200 focus:outline-none group-focus:border-ds-green-100"
        />
        <div className="mt-auto text-right text-xs text-ds-gray-400">
          {reviewText.length}/450
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="flex items-center justify-center rounded bg-ds-gray-600 p-2 text-ds-purple-100 hover:bg-ds-gray-500"
          onClick={handleClearReview}
        >
          <LucideX size={20} />
        </button>

        <button
          type="button"
          onClick={handlePostReview}
          className="flex items-center justify-center rounded bg-ds-gray-600 p-2 text-ds-green-100 hover:bg-ds-gray-500"
        >
          <LucideCheck size={20} />
        </button>
      </div>
    </form>
  );
};

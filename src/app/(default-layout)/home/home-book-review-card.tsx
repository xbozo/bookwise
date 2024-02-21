import { RatedBook } from "@/@types/rated-book";
import { formatDistanceToNowFn } from "@/utils/formatDistanceToNow";
import { Book } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface HomeBookReviewCardProps extends Omit<Book, "summary"> {
  summary?: string;
  rating_description?: string;
  rating_value: number;
  bookData: RatedBook;
}

export function HomeBookReviewCard({
  bookRatingData,
}: {
  bookRatingData: RatedBook;
}) {
  const formattedDate = formatDistanceToNowFn(bookRatingData.created_at);

  return (
    <div className="flex flex-col gap-8 rounded-lg bg-ds-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Link
            href={`/profile/${bookRatingData.user.id}`}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100"
          >
            <Image
              src={bookRatingData.user.avatar_url ?? "github.com/xbozo.png"}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
          </Link>

          <Link
            href={`/profile/${bookRatingData.user.id}`}
            className="flex flex-col"
          >
            <span>{bookRatingData.user.name}</span>
            <span className="text-sm text-ds-gray-400">{formattedDate}</span>
          </Link>
        </div>

        <span className="flex items-start gap-1 fill-ds-purple-100">
          <>
            {Array.from({ length: 5 }).map((_, i) => {
              if (i < bookRatingData.rate) {
                return (
                  <img
                    key={i}
                    src="/images/icons/star-filled.svg"
                    alt=""
                    className="h-[15px] w-[15px]"
                  />
                );
              }

              return (
                <img
                  key={i}
                  src="/images/icons/star-outline.svg"
                  alt=""
                  className="h-[15px] w-[15px]"
                />
              );
            })}
          </>
        </span>
      </div>

      <div className="flex gap-6">
        <Image
          quality={100}
          alt=""
          src={bookRatingData.book.cover_url}
          width={108}
          height={152}
        />

        <div className="flex flex-col justify-between gap-4">
          <span>
            <h3 className="text-xl font-bold">{bookRatingData.book.name}</h3>
            <span className=" text-sm text-ds-gray-300">
              {bookRatingData.book.author}
            </span>
          </span>

          {!bookRatingData.description && bookRatingData.book.summary && (
            <p className="line-clamp-4 text-ellipsis text-sm text-ds-gray-200">
              {bookRatingData.book.summary}
            </p>
          )}

          {bookRatingData.description && (
            <p className="text-sm text-ds-gray-200">
              {bookRatingData.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

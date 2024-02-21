import { formatDistanceToNowFn } from "@/utils/formatDistanceToNow";
import { Book } from "@prisma/client";
import Image from "next/image";

interface ProfileBookReviewCardProps extends Omit<Book, "summary"> {
  rating_description?: string;
  rating_value: number;
}

export function ProfileBookReviewCard({
  author,
  name,
  rating_description,
  rating_value,
  cover_url,
  created_at,
}: ProfileBookReviewCardProps) {
  const formattedDate = formatDistanceToNowFn(created_at);

  return (
    <div className="space-y-3">
      <span className="text-sm leading-4 text-ds-gray-300">
        {formattedDate}
      </span>

      <div className="flex flex-col gap-8 rounded-lg bg-ds-gray-700 p-6">
        <div className="flex gap-6">
          <Image
            quality={100}
            alt=""
            src={cover_url}
            width={108}
            height={152}
          />

          <div className="flex flex-col justify-between gap-4">
            <span>
              <h3 className="text-xl font-bold">{name}</h3>
              <span className=" text-sm text-ds-gray-300">{author}</span>
            </span>

            <span className="flex items-start gap-1 fill-ds-purple-100">
              <>
                {Array.from({ length: 5 }).map((_, i) => {
                  if (i < rating_value) {
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
        </div>

        {rating_description && (
          <p className="text-sm text-ds-gray-200">{rating_description}</p>
        )}
      </div>
    </div>
  );
}

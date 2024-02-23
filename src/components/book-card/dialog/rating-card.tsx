import { RatingWithProfile } from "@/@types/rating-with-profile";
import { formatDistanceToNowFn } from "@/utils/formatDistanceToNow";
import Image from "next/image";

export function RatingCard({
  ratingDetails,
}: {
  ratingDetails: RatingWithProfile;
}) {
  const formattedDate = formatDistanceToNowFn(ratingDetails.created_at);

  return (
    <div className="flex flex-col gap-5 rounded-md bg-ds-gray-700 px-8 py-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100">
            <Image
              src={ratingDetails.user.avatar_url}
              width={40}
              height={40}
              alt={`Usuário ${ratingDetails.user.name}`}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold leading-snug">
              {ratingDetails.user.name}
            </h3>

            <span className="text-sm text-ds-gray-400">{formattedDate}</span>
          </div>
        </div>

        <div className="flex gap-1 text-start">
          {Array.from({ length: 5 }).map((_, i) => {
            if (ratingDetails.rate && i < ratingDetails.rate) {
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
        </div>
      </div>

      <p className="max-w-full text-wrap break-words text-sm text-ds-gray-300">
        {ratingDetails.description}
      </p>
    </div>
  );
}

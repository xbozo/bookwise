import { Book } from "@prisma/client";
import Image from "next/image";

interface HomeBookReviewCardProps extends Omit<Book, "summary"> {
  summary?: string;
  rating_description?: string;
  rating_value: number;
}

export function HomeBookReviewCard({
  author,
  name,
  summary,
  rating_description,
  rating_value,
  cover_url,
}: HomeBookReviewCardProps) {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-ds-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/bozo-placeholder-avatar.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />

          <div className="flex flex-col">
            <span>Jaxson Dias</span>
            <span className="text-sm text-ds-gray-400">Hoje</span>
          </div>
        </div>

        <span className="flex items-start gap-1 fill-ds-purple-100">
          <>
            {Array.from({ length: rating_value }).map((_, i) => {
              return (
                <img
                  key={i}
                  src="/images/star-filled.svg"
                  alt=""
                  className="h-[15px] w-[15px]"
                />
              );
            })}
          </>

          <img
            src="/images/icons/star-filled.svg"
            alt=""
            className="h-[15px] w-[15px]"
          />
        </span>
      </div>

      <div className="flex gap-6">
        <Image quality={100} alt="" src={cover_url} width={108} height={152} />

        <div className="flex flex-col justify-between gap-4">
          <span>
            <h3 className="text-xl font-bold">{name}</h3>
            <span className=" text-sm text-ds-gray-300">{author}</span>
          </span>

          {!rating_description && summary && (
            <p className="line-clamp-4 text-ellipsis text-sm text-ds-gray-200">
              {summary}
            </p>
          )}

          {rating_description && (
            <p className="text-sm text-ds-gray-200">{rating_description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

import { Book } from "@prisma/client";
import Image from "next/image";

export function BookCard({
  author,
  name,
  cover_url,
  summary,
  average_rating,
}: Omit<Book, "summary"> & { summary?: string; average_rating?: number }) {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-ds-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            quality={100}
            alt=""
            src={cover_url}
            width={64}
            height={94}
            className="rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="line-clamp-2 overflow-ellipsis">{name}</span>
              <span className="text-sm text-ds-gray-400">{author}</span>
            </div>
            <span className="flex items-start gap-1 fill-ds-purple-100">
              {Array.from({ length: 4 }).map((_, i) => {
                if (average_rating && i < average_rating) {
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

              <Image
                quality={100}
                width={15}
                height={15}
                src="/images/icons/star-outline.svg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>

      {summary && <p>{summary}</p>}
    </div>
  );
}

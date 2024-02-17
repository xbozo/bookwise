import { Book } from "@prisma/client";
import Image from "next/image";

export function BookCard({ author, name, cover_url, summary }: Book) {
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
              <span>{name}</span>
              <span className="text-sm text-ds-gray-400">{author}</span>
            </div>

            <span className="flex items-start gap-1 fill-ds-purple-100">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <Image
                    quality={100}
                    width={15}
                    height={15}
                    src="/images/icons/star-filled.svg"
                    alt=""
                    key={i}
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
    </div>
  );
}

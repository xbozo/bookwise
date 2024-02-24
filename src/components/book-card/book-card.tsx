import { Category } from "@/@types/book-with-rating";
import { RatingWithProfile } from "@/@types/rating-with-profile";
import { X } from "@phosphor-icons/react";
import { Book } from "@prisma/client";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { AvaliateButton } from "./dialog/avaliate-button";
import { RatingCard } from "./dialog/rating-card";

export function BookCard({
  author,
  name,
  cover_url,
  summary,
  average_rating,
  ratings,
  total_pages,
  categories,
}: Omit<Book, "summary"> & {
  summary?: string;
  average_rating?: number;
  categories: Category[];
  ratings: RatingWithProfile[];
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex flex-col gap-8 rounded-lg border-2 border-transparent bg-ds-gray-700 p-6 transition-all hover:cursor-pointer hover:border-ds-gray-500">
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
                  {Array.from({ length: 5 }).map((_, i) => {
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
                </span>
              </div>
            </div>
          </div>

          {summary && <p>{summary}</p>}
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 p-5" />

        <Dialog.Content className="fixed bottom-0 right-0 top-0 min-h-screen w-[660px] space-y-5 overflow-y-scroll bg-ds-gray-800 px-12 py-10 outline-none">
          <div className="space-y-10">
            <div className="space-y-5">
              <Dialog.Close className="ml-auto" asChild>
                <X className="size-6 text-ds-gray-400 hover:cursor-pointer" />
              </Dialog.Close>

              <div className="space-y-10 rounded-md bg-ds-gray-700 px-8 py-6">
                <div className="flex gap-8">
                  <Image height={242} width={171} alt="" src={cover_url} />

                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col flex-wrap gap-2">
                      <h2 className="text-lg font-bold leading-6">{name}</h2>
                      <span className="leading-6 text-ds-gray-300">
                        {author}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="flex items-start gap-1 fill-ds-purple-100">
                        {Array.from({ length: 5 }).map((_, i) => {
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
                      </span>

                      <span className="text-sm text-ds-gray-400">
                        {ratings.length === 1 ? (
                          <>
                            {ratings.length + " "}
                            avaliação
                          </>
                        ) : (
                          <>{ratings.length + " "} avaliações</>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-t-ds-gray-600 py-6">
                  <div className="flex items-center gap-14">
                    <div className="flex items-center gap-4 px-1">
                      <Image
                        src="/images/icons/category-icon.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />

                      <div className="flex flex-col flex-wrap">
                        <h4 className="text-sm text-ds-gray-400">Categoria</h4>
                        <strong>
                          {categories.map((categoryItem, i) => {
                            const separator =
                              i < categories.length - 1 ? ", " : "";

                            return (
                              <span key={categoryItem.category.id}>
                                {categoryItem.category.name}
                                {separator}
                              </span>
                            );
                          })}
                        </strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 px-1">
                      <Image
                        src="/images/icons/open-book-icon.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />

                      <div className="flex flex-col flex-wrap">
                        <h4 className="text-sm text-ds-gray-400">Páginas</h4>
                        <strong>{total_pages}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-sm">Avaliações</span>

                <AvaliateButton />
              </div>

              <section className="flex flex-col gap-3">
                {ratings.map((ratingDetails, i) => {
                  return <RatingCard ratingDetails={ratingDetails} />;
                })}
              </section>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

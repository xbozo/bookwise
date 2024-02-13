import { Metadata } from "next";
import Image from "next/image";
import { BookReviewCard } from "./book-review-card";
import { PopularBookCard } from "./popular-book-card";

export const metadata: Metadata = {
  title: "Início",
};

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-3">
        <Image src="/images/chart-line-up.svg" alt="" width={32} height={32} />
        <h1 className="text-2xl font-bold leading-6">Início</h1>
      </div>

      <div className="mt-12 grid grid-cols-5 justify-between gap-20">
        <section className="col-span-3  flex flex-col gap-3">
          <span className="text-sm text-ds-gray-300">
            Avaliações mais recentes
          </span>

          <BookReviewCard />
          <BookReviewCard />
        </section>

        <section className="col-span-2 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-sm text-ds-gray-300">Livros Populares</span>
            <div className="flex gap-1 font-semibold text-ds-purple-100">
              <span>Ver todos</span>

              <Image
                quality={100}
                width={16}
                height={16}
                src="/images/arrow-right.svg"
                alt=""
              />
            </div>
          </div>

          <PopularBookCard />
          <PopularBookCard />
        </section>
      </div>
    </>
  );
}

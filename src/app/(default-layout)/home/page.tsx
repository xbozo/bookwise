import { BookWithRatingsAndCategories } from "@/@types/book-with-ratings-and-categories";
import { fetchBooksByRating } from "@/actions/books/fetchBooksByRating";
import { RatedBook, fetchRatedBooks } from "@/actions/books/fetchRatedBooks";
import { BookCardSkeleton } from "@/components/book-card/book-card-skeleton";
import { PageTitle } from "@/components/page-title";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeBookReviewCard } from "./home-book-review-card";
import { PopularBooks } from "./popular-books";

export const metadata: Metadata = {
  title: "Início",
};

export default async function Home() {
  const popularBooks: BookWithRatingsAndCategories[] =
    await fetchBooksByRating();
  const ratedBooks: RatedBook[] = await fetchRatedBooks();

  return (
    <>
      <PageTitle title="Início">
        <Image
          width={32}
          height={32}
          src="/images/icons/chart-line-up.svg"
          alt=""
        />
      </PageTitle>

      <div className="grid grid-cols-5 justify-between gap-20">
        <section className="col-span-3  flex flex-col gap-3">
          <span className="text-sm text-ds-gray-300">
            Avaliações mais recentes
          </span>

          {ratedBooks.map((ratingData) => {
            return (
              <HomeBookReviewCard
                key={ratingData.id}
                bookRatingData={ratingData}
              />
            );
          })}
        </section>

        <section className="col-span-2 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-sm text-ds-gray-300">Livros Populares</span>
            <div className="flex gap-1 font-semibold text-ds-purple-100">
              <Link href="/explore" className="hover:cursor-pointer">
                Ver todos
              </Link>

              <Image
                quality={100}
                width={16}
                height={16}
                src="/images/icons/arrow-right.svg"
                alt=""
              />
            </div>
          </div>

          {popularBooks.length === 0 ? (
            <>
              {Array.from({ length: 5 }).map((_, i) => {
                return <BookCardSkeleton key={i} />;
              })}
            </>
          ) : (
            <>
              {popularBooks.map((book, i) => {
                return <PopularBooks book={book} key={i} />;
              })}
            </>
          )}
        </section>
      </div>
    </>
  );
}

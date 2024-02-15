import { Book } from "@/@types/book";
import { fetchAllBooks, fetchBooksByRating } from "@/actions/books";
import { BookCard } from "@/components/book-card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookReviewCard } from "./book-review-card";

export const metadata: Metadata = {
  title: "Início",
};

export default async function Home() {
  const books: Book[] = await fetchAllBooks();
  const popularBooks: Book[] = await fetchBooksByRating();

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

          {books.map((book) => {
            return (
              <BookReviewCard
                key={book.id}
                id={book.id}
                name={book.name}
                author={book.author}
                summary={book.summary}
                cover_url={book.cover_url}
                total_pages={book.total_pages}
                created_at={book.created_at}
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
                src="/images/arrow-right.svg"
                alt=""
              />
            </div>
          </div>

          {popularBooks.map((book) => {
            return (
              <BookCard
                key={book.id}
                id={book.id}
                name={book.name}
                author={book.author}
                summary={book.summary}
                cover_url={book.cover_url}
                total_pages={book.total_pages}
                created_at={book.created_at}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

"use client";

import { Filter } from "@/@types/filter";
import { fetchAllCategories, fetchBooksByCategory } from "@/actions/books";
import { BookCard } from "@/components/book-card";
import { PageTitle } from "@/components/page-title";
import { Binoculars } from "@phosphor-icons/react";
import { Book, Category } from "@prisma/client";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FilterBadge } from "./filter-badge";
import { FilterBadgeSkeleton } from "./filter-badge-skeleton";

export default function Explore() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState<Category[]>([
    { id: "all", name: "Tudo" },
  ]);
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([
    { id: "all", name: "Tudo" },
  ]);

  useEffect(() => {
    document.title = "Explorar | Bookwise";

    async function fetchCategories() {
      const res = await fetchAllCategories();

      setCategories([...categories, ...res]);
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchFilteredBooks() {
      const filteredBooks = await fetchBooksByCategory(selectedFilters);

      if (filteredBooks) {
        setBooks(filteredBooks);
      }
    }

    fetchFilteredBooks();
  }, [selectedFilters]);

  function checkIfFilterIsActive(categoryId: string) {
    return selectedFilters.some((filter) => filter.id === categoryId);
  }

  function handleToggleFilter(categoryId: string, categoryName: string) {
    const existingFilter = selectedFilters.find(
      (filter) => filter.id === categoryId,
    );

    if (existingFilter) {
      const newFilters = selectedFilters.filter(
        (filter) => filter.id !== categoryId,
      );
      setSelectedFilters(newFilters);
    } else {
      const newFilter = { id: categoryId, name: categoryName, isActive: true };
      setSelectedFilters([...selectedFilters, newFilter]);
    }
  }

  async function handleSearchBook(e: ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === "") {
      const allBooks = await fetchBooksByCategory(selectedFilters);

      if (allBooks) {
        return setBooks(allBooks);
      }
    }

    const searchedBooks = books.filter((book) => {
      const normalizedAuthor = book.author.toLowerCase();
      const normalizedName = book.name.toLowerCase();
      return (
        normalizedAuthor.includes(searchTerm) ||
        normalizedName.includes(searchTerm)
      );
    });
    setBooks(searchedBooks);
  }

  return (
    <>
      <div className="flex justify-between gap-2">
        <PageTitle title="Explorar">
          <Binoculars color="#50B2C0" className="h-8 w-8" />
        </PageTitle>

        <div className="flex  gap-2 rounded-md border border-ds-gray-500 px-5 py-2">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className="min-w-72 bg-transparent outline-none placeholder:text-ds-gray-300/50"
            value={search}
            onChange={(e) => handleSearchBook(e)}
          />

          <Image
            src="/images/icons/magnifying-glass.svg"
            alt=""
            quality={100}
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.length === 0 || categories.length === 1 ? (
          <>
            {Array.from({ length: 13 }).map((_, i) => {
              return <FilterBadgeSkeleton key={i} />;
            })}
          </>
        ) : (
          <>
            {categories.map((category) => {
              const isActive = checkIfFilterIsActive(category.id);

              return (
                <FilterBadge
                  id={category.id}
                  name={category.name}
                  isActive={isActive}
                  toggleFn={handleToggleFilter}
                  key={category.id}
                />
              );
            })}
          </>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {books.map((book) => {
          return (
            <BookCard
              key={book.id}
              id={book.id}
              name={book.name}
              author={book.author}
              cover_url={book.cover_url}
              total_pages={book.total_pages}
              created_at={book.created_at}
            />
          );
        })}
        <div className=""></div>
      </div>
    </>
  );
}

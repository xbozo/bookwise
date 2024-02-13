"use client";

import { Book } from "@/@types/book";
import { Category } from "@/@types/category";
import { fetchAllBooks, fetchAllCategories } from "@/actions/books";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FilterBadge } from "./filter-badge";
import { FilterBadgeSkeleton } from "./filter-badge-skeleton";

type Filter = Partial<Category> & { isActive?: boolean };

export default function Explore() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([
    { id: "all", name: "Tudo" },
  ]);

  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([
    { id: "all", name: "Tudo" },
  ]);

  useEffect(() => {
    document.title = "Explorar | Bookwise";

    async function fetchBooks() {
      const res = await fetchAllBooks();

      setBooks(res);
    }

    async function fetchCategories() {
      const res = await fetchAllCategories();

      setCategories([...categories, ...res]);
    }

    fetchBooks();
    fetchCategories();
  }, []);

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

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-3">
          <Image src="/images/binocles.svg" alt="" width={32} height={32} />
          <h1 className="text-2xl font-bold leading-6">Explorar</h1>
        </div>

        <div className="flex  gap-2 rounded-md border border-ds-gray-500 px-5 py-3.5">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className="min-w-72 bg-transparent outline-none placeholder:text-ds-gray-300/50"
          />

          <Image
            src="/images/magnifying-glass.svg"
            alt=""
            quality={100}
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="flex gap-2">
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
    </div>
  );
}

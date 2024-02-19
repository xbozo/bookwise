"use client";

import { debounce } from "lodash";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export function SearchRatedBooks() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const initial = params.get("q")?.toString() ?? "";
  const [searchInput, setSearchInput] = useState<string>(initial);

  const createPageURL = (searchQuery: string) => {
    params.set("q", searchQuery);
    return `${pathname}?${params.toString()}`;
  };

  const handleSearchBook = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const debouncedHandleSearchInputChange = debounce(handleSearchBook, 400);

  useEffect(() => {
    createPageURL(searchInput);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchInput]);

  return (
    <div className="mb-10 flex gap-2 rounded-md border border-ds-gray-500 px-5 py-2">
      <input
        type="text"
        placeholder="Buscar livro ou autor"
        className="w-full bg-transparent outline-none placeholder:text-ds-gray-300/50"
        defaultValue={params.get("q")?.toString()}
        onChange={(e) => debouncedHandleSearchInputChange(e)}
      />

      <Image
        src="/images/icons/magnifying-glass.svg"
        alt=""
        quality={100}
        width={20}
        height={20}
      />
    </div>
  );
}

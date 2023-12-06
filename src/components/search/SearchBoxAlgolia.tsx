"use client";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebouncedEffect } from "../../lib/use-debounced";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import * as React from "react";

// Algolia Search
import { InstantSearch, useSearchBox } from "react-instantsearch";
import { algoliaEnvData } from "../../lib/resolve-algolia-env";
import { searchClient } from "../../lib/search-client";


const SearchBox = ({
  onChange,
  onSearchEnd,
}: {
  onChange: (value: string) => void;
  onSearchEnd: (query: string) => void;
}) => {
  const { query, refine, clear } = useSearchBox();
  const [search, setSearch] = useState<string>(query);

  useDebouncedEffect(
    () => {
      if (search !== query) {
        refine(search);
      }
    },
    400,
    [search],
  );

  return (
    <div className="grid h-16 grid-cols-[15%_70%_15%] items-center">
      <div className="pointer-events-none flex h-14 items-center justify-start pl-8">
        <MagnifyingGlassIcon height={32} width={32} />
      </div>
      <input
        className="h-14 border-0 pl-4 outline-none focus:shadow-none"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          onChange(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearchEnd(search);
          }
        }}
        placeholder="Search"
      />
      <div
        className={clsx(
          query ? "flex" : "hidden",
          "flex-end h-16 w-[4.5rem] items-center",
        )}
      >
        <button
          className="nav-button-container"
          onClick={() => {
            clear();
            onChange("");
            setSearch("");
          }}
        >
          <XMarkIcon width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export const SearchBoxAlgolia = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  return (
    <InstantSearch searchClient={searchClient} indexName={algoliaEnvData.indexName}>
      <SearchBox
        onChange={(value: string) => {
          setSearchValue(value);
        }}
        onSearchEnd={(query) => {
          setSearchValue("");
          router.push(`/search?q=${query}`);
        }}
        />
    </InstantSearch>
  );
};

export default SearchBoxAlgolia;

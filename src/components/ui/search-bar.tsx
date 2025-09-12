"use client";
import useSearch from "@/hooks/use-search";
import { SearchIcon } from "lucide-react";
import React, { ReactNode } from "react";

const SearchBar = ({ children }: { children: ReactNode }) => {
  const { search, onChange } = useSearch();

  return (
    <div className="w-full px-5 pb-3 pt-4">
      <div className="flex items-center justify-between rounded-md bg-[#1d1f1e] px-5">
        <input
          className="w-[95%] bg-transparent py-2 text-sm text-white focus:outline-none"
          type="text"
          id="search-bar"
          name="search-bar"
          value={search}
          onChange={onChange}
          spellCheck={false}
        />
        <SearchIcon color="#acacac" />
      </div>
      {children}
    </div>
  );
};

export default SearchBar;

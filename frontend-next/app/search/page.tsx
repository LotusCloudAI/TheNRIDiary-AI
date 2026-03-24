"use client";

import { useState } from "react";
import SearchBar from "@/src/components/search/SearchBar";
import SearchResultsGrid from "@/src/components/search/SearchResultsGrid";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Search NRI News
      </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar onSearch={setKeyword} />
      </div>

      {/* Results */}
      <SearchResultsGrid keyword={keyword} />

    </div>
  );
}
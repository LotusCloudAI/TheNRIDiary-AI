"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex gap-2">

      <input
        type="text"
        placeholder="Search NRI news..."
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
          onSearch(e.target.value); // 🔥 THIS FIXES YOUR ISSUE
        }}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
      />

      <button
        onClick={() => onSearch(keyword)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>

    </div>
  );
}
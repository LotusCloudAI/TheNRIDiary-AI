"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input.trim());
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search stories..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "14px",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 16px",
          backgroundColor: "#1e3a8a",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Search
      </button>
    </div>
  );
}
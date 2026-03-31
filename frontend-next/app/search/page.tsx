"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import SearchBar from "@/src/components/search/SearchBar";
import SearchResultsGrid from "@/src/components/search/SearchResultsGrid";

export default function SearchPage() {
  const searchParams = useSearchParams();

  //  Get query from URL (Header search support)
  const initialQuery = searchParams.get("q") || "";

  const [keyword, setKeyword] = useState(initialQuery);

  // Sync when URL changes
  useEffect(() => {
    setKeyword(initialQuery);
  }, [initialQuery]);

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px 20px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "25px",
          color: "#111",
        }}
      >
        Search NRI News
      </h1>

      {/* SEARCH BAR */}
      <div style={{ marginBottom: "30px" }}>
        <SearchBar onSearch={setKeyword} />
      </div>

      {/* RESULTS */}
      {keyword ? (
        <SearchResultsGrid keyword={keyword} />
      ) : (
        <p style={{ color: "#666", fontSize: "14px" }}>
          Start typing to search stories...
        </p>
      )}
    </div>
  );
}
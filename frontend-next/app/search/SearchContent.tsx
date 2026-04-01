"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchContent() {
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [keyword, setKeyword] = useState(initialQuery);

  useEffect(() => {
    setKeyword(initialQuery);
  }, [initialQuery]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* TITLE */}
        <h1 style={styles.title}>Search NRI News</h1>

        {/* SEARCH INPUT */}
        <div style={styles.searchBox}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search stories..."
            style={styles.input}
          />
        </div>

        {/* RESULTS */}
        {keyword ? (
          <div style={styles.resultBox}>
            <strong>Showing results for: {keyword}</strong>

            <p style={styles.note}>
              Firestore search integration will be added in next phase.
            </p>
          </div>
        ) : (
          <p style={styles.empty}>
            Start typing to search stories...
          </p>
        )}
      </div>
    </div>
  );
}

// =========================
// STYLES
// =========================

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "30px 20px",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "#111",
  },

  searchBox: {
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  resultBox: {
    padding: "20px",
    background: "#ffffff",
    borderRadius: "6px",
    border: "1px solid #eee",
  },

  note: {
    marginTop: "10px",
    color: "#666",
  },

  empty: {
    color: "#666",
    fontSize: "14px",
  },
};
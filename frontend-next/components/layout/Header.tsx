"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    router.push(`/search?q=${encodeURIComponent(keyword)}`);
    setKeyword("");
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>

        {/* ✅ LOGO IMAGE */}
        <img
          src="/nri-diary-logo.png"
          alt="The NRI Diary"
          onClick={() => router.push("/")}
          style={styles.logoImage}
        />

        {/* ✅ SEARCH */}
        <form onSubmit={handleSearch} style={styles.searchBox}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search news..."
            style={styles.input}
          />
        </form>

      </div>
    </header>
  );
}

// =========================
// STYLES (PRODUCTION READY)
// =========================

const styles: any = {
  header: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px 15px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",

    flexWrap: "wrap", // mobile support
  },

  // ✅ LOGO STYLE (UPDATED)
  logoImage: {
    height: "36px",
    cursor: "pointer",
    objectFit: "contain",
    flexShrink: 0,
  },

  searchBox: {
    flex: 1,
    minWidth: "180px",
    maxWidth: "420px",
  },

  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "#fafafa",
  },
};
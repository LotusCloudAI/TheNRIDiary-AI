"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/src/assets/nri-diary-logo.png";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const navStyle = {
    cursor: "pointer",
    fontWeight: "600",
    color: "#333",
  };

  const handleSearch = () => {
    if (!search.trim()) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* LOGO + SEARCH */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* LOGO */}
        <div onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
          <Image
            src={logo}
            alt="The NRI Diary"
            style={{ height: "60px", width: "auto" }}
          />
        </div>

        {/* SEARCH BOX */}
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "220px",
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              padding: "10px 14px",
              background: "#1e3a8a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav
        style={{
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          background: "#fafafa",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            padding: "14px",
          }}
        >
          <span onClick={() => router.push("/")} style={navStyle}>
            Home
          </span>
          <span onClick={() => router.push("/category/india")} style={navStyle}>
            India
          </span>
          <span onClick={() => router.push("/category/usa")} style={navStyle}>
            USA
          </span>
          <span onClick={() => router.push("/category/business")} style={navStyle}>
            Business
          </span>
          <span onClick={() => router.push("/category/technology")} style={navStyle}>
            Technology
          </span>
          <span onClick={() => router.push("/category/culture")} style={navStyle}>
            Culture
          </span>
          <span onClick={() => router.push("/category/opinions")} style={navStyle}>
            Opinions
          </span>
        </div>
      </nav>
    </header>
  );
}
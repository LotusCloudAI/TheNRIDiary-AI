"use client";

import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* PAGE TITLE */}
        <h1 style={styles.title}>
          Search NRI News
        </h1>

        {/* SUSPENSE WRAPPER */}
        <Suspense fallback={<SearchSkeleton />}>
          <SearchContent />
        </Suspense>

      </div>
    </div>
  );
}

// =========================
// SKELETON LOADER (PRO UI)
// =========================

function SearchSkeleton() {
  return (
    <div style={styles.grid}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={styles.card}>
          <div style={styles.imageSkeleton}></div>
          <div style={styles.textSkeleton}></div>
          <div style={styles.textSmall}></div>
        </div>
      ))}
    </div>
  );
}

// =========================
// STYLES
// =========================

const styles: any = {
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
    fontWeight: "600",
    marginBottom: "20px",
    color: "#111",
  },

  // GRID
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },

  // CARD SKELETON
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  imageSkeleton: {
    width: "100%",
    height: "150px",
    backgroundColor: "#e5e7eb",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  textSkeleton: {
    width: "80%",
    height: "14px",
    backgroundColor: "#e5e7eb",
    marginBottom: "8px",
    borderRadius: "4px",
  },
  textSmall: {
    width: "60%",
    height: "12px",
    backgroundColor: "#e5e7eb",
    borderRadius: "4px",
  },
};
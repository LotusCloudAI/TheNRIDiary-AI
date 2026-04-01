"use client";

import { useRouter, usePathname } from "next/navigation";

const categories = ["All", "USA", "India", "Jobs", "H1B", "Student"];

export default function CategoryNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (cat: string) => {
    if (cat === "All") return pathname === "/";
    return pathname === `/category/${cat.toLowerCase()}`;
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {categories.map((cat) => {
          const active = isActive(cat);

          return (
            <button
              key={cat}
              onClick={() =>
                router.push(
                  cat === "All"
                    ? "/"
                    : `/category/${cat.toLowerCase()}`
                )
              }
              style={{
                ...styles.button,
                ...(active ? styles.activeButton : {}),
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// =========================
// STYLES (PREMIUM NAV)
// =========================

const styles: any = {
  wrapper: {
    marginBottom: "20px",
    overflowX: "auto", // ✅ horizontal scroll
  },

  container: {
    display: "flex",
    gap: "10px",
    minWidth: "max-content", // ✅ prevents wrapping
  },

  button: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    background: "#f9fafb",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    whiteSpace: "nowrap",

    transition: "all 0.2s ease",
  },

  activeButton: {
    background: "#111",
    color: "#fff",
    border: "1px solid #111",
  },
};
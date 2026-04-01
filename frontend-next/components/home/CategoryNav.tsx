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
  );
}

const styles: any = {
  container: {
    display: "flex",
    gap: "10px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    fontSize: "13px",
    transition: "all 0.2s ease",
  },
  activeButton: {
    background: "#111",
    color: "#fff",
    border: "1px solid #111",
  },
};
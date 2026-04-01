"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getStories } from "@/lib/api/stories";

import StoryCard from "@/components/home/StoryCard";
import CategoryNav from "@/components/home/CategoryNav";

type Story = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
};

export default function CategoryDetailPage() {
  const params = useParams();
  const router = useRouter();

  const category = (params?.category as string)?.toLowerCase() || "all";

  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryStories = async () => {
      try {
        // ✅ Fetch ALL stories (NO Firestore filter)
        const data = await getStories();

        // ✅ SAFE FILTER (handles case + spaces)
        const filtered =
          category === "all"
            ? data
            : data.filter((story: Story) => {
                const storyCategory = (story.category || "")
                  .toLowerCase()
                  .trim();

                const urlCategory = category.toLowerCase().trim();

                return storyCategory === urlCategory;
              });

        setStories(filtered || []);
      } catch (error) {
        console.error("Category fetch error:", error);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryStories();
  }, [category]);

  // =========================
  // LOADING STATE
  // =========================
  if (loading) {
    return (
      <div style={styles.center}>
        <p style={styles.text}>Loading stories...</p>
      </div>
    );
  }

  // =========================
  // EMPTY STATE
  // =========================
  if (!stories || stories.length === 0) {
    return (
      <div style={styles.center}>
        <button onClick={() => router.back()} style={styles.backBtn}>
          ← Back
        </button>

        <p style={styles.text}>
          No stories found for "{formatCategory(category)}"
        </p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* BACK BUTTON */}
        <button onClick={() => router.back()} style={styles.backBtn}>
          ← Back
        </button>

        {/* CATEGORY NAV */}
        <CategoryNav />

        {/* TITLE */}
        <h1 style={styles.title}>
          {formatCategory(category)}
        </h1>

        {/* GRID */}
        <div style={styles.grid}>
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

      </div>
    </div>
  );
}

// =========================
// HELPERS
// =========================

function formatCategory(cat: string) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

// =========================
// STYLES (PRODUCTION READY)
// =========================

const styles: any = {
  page: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "20px 12px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#111",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "18px",
  },

  center: {
    padding: "60px 20px",
    textAlign: "center",
  },

  text: {
    fontSize: "16px",
    color: "#666",
  },

  backBtn: {
    marginBottom: "15px",
    padding: "6px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    background: "#fff",
    cursor: "pointer",
  },
};
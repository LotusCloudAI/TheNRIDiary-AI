"use client";

import { useParams } from "next/navigation";
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
  const category = (params?.category as string)?.toLowerCase() || "all";

  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryStories = async () => {
      try {
        // ✅ DIRECT FIRESTORE FILTER (NO LOCAL FILTER)
        const data = await getStories(category);
        setStories(data || []);
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
        <p style={styles.text}>
          No stories found for "{formatCategory(category)}"
        </p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* CATEGORY NAV */}
        <CategoryNav />

        {/* TITLE */}
        <h1 style={styles.title}>
          {formatCategory(category)}
        </h1>

        {/* GRID USING REUSABLE CARD */}
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
// STYLES
// =========================

const styles: any = {
  page: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "30px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  center: {
    padding: "80px",
    textAlign: "center",
  },
  text: {
    fontSize: "18px",
    color: "#555",
  },
};
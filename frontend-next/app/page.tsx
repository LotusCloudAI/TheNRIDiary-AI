"use client";

import { useEffect, useState } from "react";
import { getStories } from "@/lib/api/stories";

import HeroSection from "@/components/home/HeroSection";
import TrendingSection from "@/components/home/TrendingSection";
import CategoryNav from "@/components/home/CategoryNav";
import StoryCard from "@/components/home/StoryCard";

type Story = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
};

export default function Page() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStories();
        setStories(data || []);
      } catch (error) {
        console.error("Error loading stories:", error);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  // =========================
  // LOADING STATE
  // =========================
  if (loading) {
    return (
      <div style={styles.center}>
        <p style={styles.loadingText}>Loading stories...</p>
      </div>
    );
  }

  // =========================
  // EMPTY STATE
  // =========================
  if (!stories || stories.length === 0) {
    return (
      <div style={styles.center}>
        <p style={styles.loadingText}>No stories available.</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HERO */}
        <div style={styles.section}>
          <HeroSection story={stories[0]} />
        </div>

        {/* CATEGORY NAV */}
        <div style={styles.section}>
          <CategoryNav />
        </div>

        {/* TRENDING */}
        <div style={styles.trendingWrapper}>
          <TrendingSection stories={stories} />
        </div>

        {/* TITLE */}
        <h2 style={styles.sectionTitle}>Latest Stories</h2>

        {/* GRID */}
        <div style={styles.grid}>
          {stories.slice(1).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

      </div>
    </div>
  );
}

// =========================
// STYLES (CLEAN + RESPONSIVE)
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

  section: {
    marginBottom: "20px",
  },

  trendingWrapper: {
    marginBottom: "25px",
    padding: "16px",
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },

  center: {
    padding: "80px 20px",
    textAlign: "center",
  },

  loadingText: {
    fontSize: "16px",
    color: "#666",
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "10px",
    marginBottom: "15px",
    color: "#111",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "18px",
  },
};
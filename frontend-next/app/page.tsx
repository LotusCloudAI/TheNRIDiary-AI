"use client";

import { useEffect, useState } from "react";
import { getStories } from "@/lib/api/stories";

import HeroSection from "@/components/home/HeroSection";
import CategoryNav from "@/components/home/CategoryNav";
import TrendingSection from "@/components/home/TrendingSection";
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
        console.error("Error fetching stories:", error);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div style={styles.center}>
        <p style={styles.loadingText}>Loading stories...</p>
      </div>
    );
  }

  // =========================
  // EMPTY
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
        <section style={styles.heroSection}>
          <HeroSection story={stories[0]} />
        </section>

        {/* CATEGORY NAV */}
        <section style={styles.navSection}>
          <CategoryNav />
        </section>

        {/* MAIN LAYOUT */}
        <section style={styles.mainLayout}>

          {/* LEFT: STORIES */}
          <div style={styles.leftColumn}>
            <h2 style={styles.sectionTitle}>Latest Stories</h2>

            <div style={styles.grid}>
              {stories.slice(1).map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          {/* RIGHT: TRENDING SIDEBAR */}
          <aside style={styles.sidebar}>
            <TrendingSection stories={stories} />
          </aside>

        </section>

      </div>
    </div>
  );
}

// =========================
// STYLES (PREMIUM SYSTEM)
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

  center: {
    padding: "80px 20px",
    textAlign: "center",
  },

  loadingText: {
    fontSize: "16px",
    color: "#666",
  },

  heroSection: {
    marginBottom: "24px",
  },

  navSection: {
    marginBottom: "20px",
  },

  mainLayout: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr", // ✅ main + sidebar
    gap: "24px",
  },

  leftColumn: {},

  sidebar: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "16px",
    height: "fit-content",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "14px",
    color: "#111",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "18px",
  },
};
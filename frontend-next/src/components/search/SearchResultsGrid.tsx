"use client";

import { useEffect, useState } from "react";
import { getStories } from "@/lib/api/stories";
import { useRouter } from "next/navigation";

type Story = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
};

export default function SearchResultsGrid({
  keyword,
}: {
  keyword: string;
}) {
  const [stories, setStories] = useState<Story[]>([]);
  const [filtered, setFiltered] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // FETCH DATA ONLY ONCE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStories();
        setStories(data || []);
        setFiltered(data || []);
      } catch (error) {
        console.error("Search fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //  FILTER WHEN USER TYPES
  useEffect(() => {
    if (!keyword) {
      setFiltered(stories);
      return;
    }

    const q = keyword.toLowerCase();

    const results = stories.filter((story) => {
      return (
        story.title?.toLowerCase().includes(q) ||
        story.content?.toLowerCase().includes(q) ||
        story.category?.toLowerCase().includes(q)
      );
    });

    setFiltered(results);
  }, [keyword, stories]);

  // STATES

  if (loading) {
    return <p style={{ color: "#555" }}>Loading...</p>;
  }

  if (!keyword) {
    return <p style={{ color: "#555" }}>Start typing to search...</p>;
  }

  if (filtered.length === 0) {
    return <p style={{ color: "#555" }}>No results found.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
      }}
    >
      {filtered.map((story) => (
        <div
          key={story.id}
          onClick={() => router.push(`/story/${story.id}`)}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            cursor: "pointer",
          }}
        >
          {/* IMAGE */}
          <img
            src={story.image || "https://placehold.co/600x400"}
            alt={story.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://placehold.co/600x400";
            }}
          />

          {/* CONTENT */}
          <div style={{ padding: "15px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "6px",
                color: "#111",
              }}
            >
              {story.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "#555",
              }}
            >
              {story.content?.substring(0, 100)}...
            </p>

            <p
              style={{
                fontSize: "12px",
                marginTop: "8px",
                color: "#888",
              }}
            >
              {story.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
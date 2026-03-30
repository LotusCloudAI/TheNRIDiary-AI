"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getStories } from "@/lib/api/stories";

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
    const fetchData = async () => {
      try {
        const data = await getStories();

        // ✅ FILTER HERE (CORRECT WAY)
        const filtered =
          category === "all"
            ? data
            : data.filter(
                (story: Story) =>
                  story.category?.toLowerCase() === category
              );

        setStories(filtered || []);
      } catch (error) {
        console.error("Error fetching category stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#111",
          textTransform: "capitalize",
        }}
      >
        Category: {category}
      </h1>

      {/* Loading */}
      {loading ? (
        <p style={{ color: "#555" }}>Loading...</p>
      ) : stories.length === 0 ? (
        <p style={{ color: "#555" }}>No stories found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              {/* Image */}
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

              {/* Content */}
              <div style={{ padding: "15px" }}>
                <h2
                  style={{
                    fontSize: "18px",
                    marginBottom: "8px",
                    color: "#111",
                  }}
                >
                  {story.title || "No Title"}
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  {story.content
                    ? story.content.substring(0, 100) + "..."
                    : "No content available"}
                </p>

                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "12px",
                    color: "#888",
                    textTransform: "capitalize",
                  }}
                >
                  {story.category || "General"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
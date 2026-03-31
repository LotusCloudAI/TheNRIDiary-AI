"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStories } from "@/lib/api/stories";

type Story = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
};

export default function Home() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStories();
        setStories(data || []);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Loading State
  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p style={{ fontSize: "18px" }}>Loading stories...</p>
      </div>
    );
  }

  // Empty State
  if (stories.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p style={{ fontSize: "18px" }}>No stories available.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "25px",
          color: "#111",
        }}
      >
        The NRI Diary
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => router.push(`/story/${story.id}`)}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
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
            <div style={{ padding: "16px" }}>
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
                  lineHeight: "1.5",
                  minHeight: "40px",
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
                }}
              >
                {story.category || "General"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

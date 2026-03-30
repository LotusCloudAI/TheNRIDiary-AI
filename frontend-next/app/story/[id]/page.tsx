"use client";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Story = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt?: any;
};

export default function StoryPage() {
  const params = useParams();
  const id = params?.id as string;

  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchStory = async () => {
      try {
        // ✅ IMPORTANT: collection name must match homepage
        const ref = doc(db, "articles", id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();

          setStory({
            id: snap.id,
            title: data.title || "No Title",
            content: data.content || "No content available",
            category: data.category || "General",
            image:
              data.img ||
              data.image ||
              "https://placehold.co/600x400",
            createdAt: data.createdAt || null,
          });
        } else {
          console.error("Story not found");
          setStory(null);
        }
      } catch (error) {
        console.error("Error fetching story:", error);
        setStory(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  // Loading State
  if (loading) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <p style={{ fontSize: "18px" }}>Loading story...</p>
      </div>
    );
  }

  // ✅ Not Found State
  if (!story) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <p style={{ fontSize: "18px" }}>Story not found.</p>
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
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            color: "#111",
          }}
        >
          {story.title}
        </h1>

        {/* Category */}
        <p
          style={{
            color: "#888",
            marginBottom: "15px",
          }}
        >
          {story.category}
        </p>

        {/* Image */}
        <img
          src={story.image || "https://placehold.co/600x400"}
          alt={story.title}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://placehold.co/600x400";
          }}
        />

        {/* Content */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          {story.content}
        </p>
      </div>
    </div>
  );
}

"use client";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

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
  const router = useRouter();
  const id = params?.id as string;

  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchStory = async () => {
      try {
        const ref = doc(db, "articles", id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data() as any;

          setStory({
            id: snap.id,
            title: data?.title ?? "No Title",
            content: data?.content ?? "No content available",
            category: (data?.category ?? "general")
              .toLowerCase()
              .trim(),
            image:
              data?.img ||
              data?.image ||
              "/default-news.jpg",
            createdAt: data?.createdAt ?? null,
          });
        } else {
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

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div style={styles.center}>
        <p style={styles.text}>Loading article...</p>
      </div>
    );
  }

  // =========================
  // NOT FOUND
  // =========================
  if (!story) {
    return (
      <div style={styles.center}>
        <p style={styles.text}>Story not found</p>

        <button style={styles.backBtn} onClick={() => router.push("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* BACK */}
        <button style={styles.backBtn} onClick={() => router.back()}>
          ← Back
        </button>

        {/* CATEGORY BADGE */}
        <div style={styles.badge}>
          {story.category}
        </div>

        {/* TITLE */}
        <h1 style={styles.title}>
          {story.title}
        </h1>

        {/* IMAGE */}
        <img
          src={story.image}
          alt={story.title}
          style={styles.image}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/default-news.jpg";
          }}
        />

        {/* CONTENT */}
        <div style={styles.content}>
          {story.content}
        </div>

      </div>
    </div>
  );
}

// =========================
// STYLES (PREMIUM)
// =========================

const styles: any = {
  page: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "20px 12px",
  },

  container: {
    maxWidth: "820px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },

  center: {
    padding: "80px 20px",
    textAlign: "center",
  },

  text: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },

  backBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    marginBottom: "15px",
  },

  badge: {
    display: "inline-block",
    fontSize: "11px",
    padding: "4px 10px",
    background: "#eef2ff",
    color: "#3730a3",
    borderRadius: "20px",
    fontWeight: "500",
    marginBottom: "10px",
    textTransform: "capitalize",
  },

  title: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#111",
    lineHeight: "1.3",
  },

  image: {
    width: "100%",
    height: "clamp(220px, 40vw, 420px)", // ✅ responsive fix
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "18px",
  },

  content: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#333",
    whiteSpace: "pre-line",
  },
};
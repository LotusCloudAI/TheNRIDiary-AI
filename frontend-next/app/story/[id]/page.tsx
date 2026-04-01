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

          const formattedStory: Story = {
            id: snap.id,
            title: data?.title ?? "No Title",
            content: data?.content ?? "No content available",
            category: data?.category ?? "General",
            image:
              data?.img ||
              data?.image ||
              "/default-news.jpg",
            createdAt: data?.createdAt ?? null,
          };

          setStory(formattedStory);
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

        {/* BACK BUTTON */}
        <button style={styles.backBtn} onClick={() => router.back()}>
          ← Back
        </button>

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

        {/* CATEGORY */}
        <p style={styles.category}>
          {story.category}
        </p>

        {/* TITLE */}
        <h1 style={styles.title}>
          {story.title}
        </h1>

        {/* CONTENT */}
        <p style={styles.content}>
          {story.content}
        </p>

      </div>
    </div>
  );
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
    maxWidth: "800px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  center: {
    padding: "80px",
    textAlign: "center",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  backBtn: {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  category: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "10px",
    textTransform: "capitalize",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#111",
  },
  content: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#333",
    whiteSpace: "pre-line",
  },
};
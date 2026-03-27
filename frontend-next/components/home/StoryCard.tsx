"use client";

import { useRouter } from "next/navigation";

type Story = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
};

export default function StoryCard({ story }: { story: Story }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/story/${story.id}`)}
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        const img = e.currentTarget.querySelector("img");
        if (img) (img as HTMLImageElement).style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        const img = e.currentTarget.querySelector("img");
        if (img) (img as HTMLImageElement).style.transform = "scale(1)";
      }}
    >
      {/* IMAGE WRAPPER */}
      <div style={styles.imageWrapper}>
        <img
          src={story.image || "/default-news.jpg"}
          alt={story.title}
          style={styles.image}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/default-news.jpg";
          }}
        />

        {/* CATEGORY BADGE */}
        <div style={styles.badge}>
          {story.category || "General"}
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <h3 style={styles.title}>
          {story.title || "No Title"}
        </h3>

        <p style={styles.desc}>
          {story.content
            ? story.content.substring(0, 90) + "..."
            : "No content available"}
        </p>

        <div style={styles.footer}>
          <span style={styles.categoryText}>
            {story.category || "General"}
          </span>

          <span style={styles.readMore}>Read →</span>
        </div>
      </div>
    </div>
  );
}

// =========================
// STYLES (PREMIUM)
// =========================

const styles: any = {
  card: {
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },

  imageWrapper: {
    position: "relative",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#ffffff",
    color: "#111",
    fontSize: "11px",
    padding: "4px 10px",
    borderRadius: "20px",
    fontWeight: "500",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  content: {
    padding: "14px",
  },

  title: {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#111",
    lineHeight: "1.4",
  },

  desc: {
    fontSize: "13px",
    color: "#666",
    lineHeight: "1.5",
    minHeight: "40px",
  },

  footer: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryText: {
    fontSize: "12px",
    color: "#888",
  },

  readMore: {
    fontSize: "12px",
    color: "#111",
    fontWeight: "500",
  },
};
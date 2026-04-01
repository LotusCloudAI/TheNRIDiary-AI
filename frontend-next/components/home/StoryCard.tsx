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
      className="story-card"
    >
      {/* IMAGE */}
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

        {/* GRADIENT OVERLAY */}
        <div style={styles.overlay} />

        {/* CATEGORY BADGE */}
        <span style={styles.badge}>
          {(story.category || "general").toUpperCase()}
        </span>
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
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },

  imageWrapper: {
    position: "relative",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "clamp(160px, 30vw, 200px)", // ✅ responsive
    objectFit: "cover",
    transition: "transform 0.35s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.4), transparent 60%)",
  },

  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#ffffff",
    color: "#111",
    fontSize: "10px",
    padding: "4px 10px",
    borderRadius: "20px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
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
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  readMore: {
    fontSize: "12px",
    color: "#111",
    fontWeight: "500",
  },
};
"use client";

import { useRouter } from "next/navigation";

type Story = {
  id: string;
  title: string;
  content: string;
  image: string;
};

export default function HeroSection({ story }: { story: Story }) {
  const router = useRouter();

  if (!story) return null;

  return (
    <div
      onClick={() => router.push(`/story/${story.id}`)}
      style={styles.container}
    >
      {/* IMAGE */}
      <img
        src={story.image || "/default-news.jpg"}
        alt={story.title}
        style={styles.image}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "/default-news.jpg";
        }}
      />

      {/* OVERLAY */}
      <div style={styles.overlay}>
        <div style={styles.badge}>Top Story</div>

        <h1 style={styles.title}>
          {story.title || "No Title"}
        </h1>

        <p style={styles.desc}>
          {story.content
            ? story.content.substring(0, 140) + "..."
            : "No content available"}
        </p>
      </div>
    </div>
  );
}

// =========================
// STYLES (PRODUCTION)
// =========================

const styles: any = {
  container: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "25px",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  },

  // ✅ CRITICAL FIX (RESPONSIVE HERO HEIGHT)
  image: {
    width: "100%",
    height: "clamp(200px, 40vw, 400px)", // ✅ RESPONSIVE
    objectFit: "cover",
    display: "block",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "20px",

    background:
      "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",

    color: "#fff",
  },

  title: {
    fontSize: "clamp(18px, 2.5vw, 26px)", // ✅ responsive text
    fontWeight: "600",
    marginBottom: "8px",
    lineHeight: "1.3",
  },

  desc: {
    fontSize: "clamp(12px, 1.5vw, 14px)", // ✅ responsive
    opacity: 0.9,
    maxWidth: "700px",
  },

  badge: {
    display: "inline-block",
    fontSize: "11px",
    padding: "4px 10px",
    background: "#ffffff",
    color: "#111",
    borderRadius: "20px",
    fontWeight: "500",
    marginBottom: "10px",
  },
};
"use client";

import { useRouter } from "next/navigation";

type Story = {
  id: string;
  title: string;
  image?: string;
};

export default function TrendingSection({
  stories,
}: {
  stories: Story[];
}) {
  const router = useRouter();

  if (!stories || stories.length === 0) return null;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Trending</h2>

      <div style={styles.scrollContainer}>
        {stories.slice(0, 8).map((story) => (
          <div
            key={story.id}
            onClick={() => router.push(`/story/${story.id}`)}
            style={styles.card}
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

            {/* TITLE */}
            <p style={styles.title}>
              {story.title || "No Title"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
  },
  scrollContainer: {
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    paddingBottom: "10px",
  },
  card: {
    minWidth: "240px",
    cursor: "pointer",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
  },
  title: {
    fontSize: "14px",
    padding: "10px",
    lineHeight: "1.4",
  },
};
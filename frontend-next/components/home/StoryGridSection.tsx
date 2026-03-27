"use client";

export default function StoryGridSection({ stories }: any) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "20px",
      }}
    >
      {stories.map((story: any) => (
        <div
          key={story.id}
          style={{
            background: "#ffffff",
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={story.image || "/default-news.jpg"}
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <h3 style={{ marginTop: "10px", fontSize: "16px" }}>
            {story.title}
          </h3>

          <p style={{ color: "#666", fontSize: "12px" }}>
            {story.category}
          </p>
        </div>
      ))}
    </div>
  );
}
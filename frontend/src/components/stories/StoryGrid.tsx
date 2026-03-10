import { mockStories } from "../../data/mockStories"

export default function StoryGrid() {

  const stories = mockStories.slice(1)

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}
    >
      {stories.map((story) => (
        <div
          key={story.id}
          style={{
            border: "1px solid #eee",
            borderRadius: "8px",
            overflow: "hidden",
            background: "white"
          }}
        >
          <img
            src={story.image}
            alt={story.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover"
            }}
          />

          <div style={{ padding: "12px" }}>
            <h3 style={{ fontSize: "16px" }}>{story.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
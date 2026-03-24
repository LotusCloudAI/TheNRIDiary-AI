import { mockStories } from "../../data/mockStories"

export default function TrendingSection() {

  const trending = mockStories.slice(1,6)

  return (
    <section
      style={{
        width: "100%"
      }}
    >

      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "20px"
        }}
      >
        Trending News
      </h2>

      {trending.map((story)=>(
        <div
          key={story.id}
          style={{
            display:"flex",
            gap:"12px",
            marginBottom:"18px",
            paddingBottom:"12px",
            borderBottom:"1px solid #eee",
            cursor:"pointer",
            alignItems:"center"
          }}
        >

          <img
            src={story.image}
            alt={story.title}
            style={{
              width:"95px",
              height:"65px",
              objectFit:"cover",
              borderRadius:"6px"
            }}
          />

          <p
            style={{
              fontSize:"14px",
              fontWeight:"500",
              lineHeight:"1.3",
              margin:"0"
            }}
          >
            {story.title}
          </p>

        </div>
      ))}

    </section>
  )
}
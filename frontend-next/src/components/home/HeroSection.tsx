import { mockStories } from "../../data/mockStories"

export default function HeroSection() {

  const hero = mockStories[0]

  return (
    <section
      style={{
        width: "100%"
      }}
    >

      <div
        style={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      >
        <img
          src={hero.image}
          alt={hero.title}
          style={{
            width: "100%",
            height: "520px",
            objectFit: "cover"
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            padding: "30px",
            background:
              "linear-gradient(transparent, rgba(0,0,0,0.8))",
            color: "white"
          }}
        >
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "700",
              lineHeight: "1.2",
              margin: "0"
            }}
          >
            {hero.title}
          </h1>

        </div>

      </div>

    </section>
  )
}
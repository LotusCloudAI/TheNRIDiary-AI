import { mockStories } from "../../data/mockStories"

export default function StoryGridSection(){

  const stories = mockStories.slice(1,7)

  return(

    <section
      style={{
        width:"100%",
        marginBottom:"40px"
      }}
    >

      <h2
        style={{
          fontSize:"22px",
          fontWeight:"600",
          marginBottom:"20px"
        }}
      >
        Latest Stories
      </h2>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"24px"
        }}
      >

      {stories.map((story)=>(
        <div
          key={story.id}
          style={{
            borderRadius:"10px",
            overflow:"hidden",
            background:"#fff",
            boxShadow:"0 3px 10px rgba(0,0,0,0.08)",
            cursor:"pointer",
            transition:"transform 0.2s ease"
          }}
        >

        <img
          src={story.image}
          alt={story.title}
          style={{
            width:"100%",
            height:"170px",
            objectFit:"cover"
          }}
        />

        <div style={{padding:"14px"}}>

        <h3
          style={{
            fontSize:"16px",
            fontWeight:"600",
            lineHeight:"1.35",
            margin:"0"
          }}
        >
        {story.title}
        </h3>

        </div>

        </div>
      ))}

      </div>

    </section>
  )
}
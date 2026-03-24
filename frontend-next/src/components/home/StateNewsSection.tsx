import { mockStories } from "../../data/mockStories"

export default function StateNewsSection(){

  const stories = mockStories.slice(0,4)

  return(

    <section
      style={{
        maxWidth:"1200px",
        margin:"40px auto",
        padding:"0 20px"
      }}
    >

    <h2>USA State News</h2>

    <ul>

    {stories.map((story)=>(
      <li
        key={story.id}
        style={{marginBottom:"10px"}}
      >
      {story.title}
      </li>
    ))}

    </ul>

    </section>
  )
}
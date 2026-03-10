import { mockStories } from "../../data/mockStories"
import StoryCard from "./StoryCard"

export default function StoryGrid(){

 const stories = mockStories

 return(

  <div
    style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
      gap:"20px"
    }}
  >

  {stories.map((story)=>(
    <StoryCard
      key={story.id}
      title={story.title}
      image={story.image}
      category={story.category}
    />
  ))}

  </div>

 )

}
import { getStories } from "../../services/storyService"
import StoryCard from "./StoryCard"

export default function StoryGrid(){

 const stories = getStories()

 return(

   <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px"}}>

     {stories.map((story)=>(
       <StoryCard
         key={story.id}
         title={story.title}
         image={story.image}
       />
     ))}

   </div>

 )

}

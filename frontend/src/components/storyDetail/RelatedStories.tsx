import { mockStories } from "../../data/mockStories"

export default function RelatedStories(){

 const stories = mockStories.slice(1,5)

 return(

  <div style={{marginTop:"40px"}}>

   <h2>Related Stories</h2>

   {stories.map((story)=>(
    <p key={story.id}>{story.title}</p>
   ))}

  </div>

 )

}
import { mockStories } from "../../data/mockStories"

export default function StoryHero(){

 const story = mockStories[0]

 return(

  <div>

   <img
    src={story.image}
    style={{
      width:"100%",
      height:"420px",
      objectFit:"cover"
    }}
   />

   <h1 style={{
     fontSize:"32px",
     marginTop:"20px"
   }}>
     {story.title}
   </h1>

  </div>

 )

}

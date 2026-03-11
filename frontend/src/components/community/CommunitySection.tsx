import { communityPosts } from "../../data/communityData"
import CommunityCard from "./CommunityCard"

export default function CommunitySection(){

 return(

  <div>

   <h2>Community News</h2>

   <div style={{
     display:"grid",
     gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
     gap:"20px"
   }}>

   {communityPosts.map(post=>(
    <CommunityCard
     key={post.id}
     title={post.title}
     image={post.image}
    />
   ))}

   </div>

  </div>

 )

}
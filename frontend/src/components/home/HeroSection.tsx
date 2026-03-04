import { getStories } from "../../services/storyService"

export default function HeroSection() {

 const stories = getStories()
 const hero = stories[0]

 return (
   <div>
     <img src={hero.image} width="100%" />
     <h2>{hero.title}</h2>
   </div>
 )

}

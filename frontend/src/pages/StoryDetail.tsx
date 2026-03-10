import StoryHero from "../components/storyDetail/StoryHero"
import StoryContent from "../components/storyDetail/StoryContent"
import RelatedStories from "../components/storyDetail/RelatedStories"

export default function StoryDetail(){

 return(

  <div style={{maxWidth:"900px",margin:"40px auto"}}>

    <StoryHero />

    <StoryContent />

    <RelatedStories />

  </div>

 )

}
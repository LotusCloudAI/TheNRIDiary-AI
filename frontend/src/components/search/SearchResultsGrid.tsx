import SearchResultCard from "./SearchResultCard"
import { searchStories } from "../../services/searchService"

export default function SearchResultsGrid({keyword}:{keyword:string}){

 const results = searchStories(keyword)

 return(

  <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
    gap:"20px"
  }}>

  {results.map((story)=>(
    <SearchResultCard
      key={story.id}
      title={story.title}
      image={story.image}
    />
  ))}

  </div>

 )

}
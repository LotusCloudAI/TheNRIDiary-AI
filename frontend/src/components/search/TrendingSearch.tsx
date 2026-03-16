import { searchKeywords } from "../../data/searchKeywords"

export default function TrendingSearch(){

 return(

  <div>

   <h3>Trending Searches</h3>

   <ul>

   {searchKeywords.map((word)=>(
    <li key={word}>{word}</li>
   ))}

   </ul>

  </div>

 )

}
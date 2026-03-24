import { searchKeywords } from "../../data/searchKeywords"

export default function SearchSuggestions(){

 return(

  <div>

   <h3>Popular Searches</h3>

   {searchKeywords.map((word)=>(
    <p key={word}>{word}</p>
   ))}

  </div>

 )

}
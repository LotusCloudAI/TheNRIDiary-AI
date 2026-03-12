import { useState } from "react"
import SearchBar from "../components/search/SearchBar"
import SearchResultsGrid from "../components/search/SearchResultsGrid"

export default function SearchResults(){

 const [keyword,setKeyword] = useState("")

 return(

  <div style={{maxWidth:"1200px",margin:"40px auto"}}>

   <SearchBar/>

   <SearchResultsGrid keyword={keyword}/>

  </div>

 )

}
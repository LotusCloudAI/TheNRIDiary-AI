import { useState } from "react"

export default function SearchBar(){

 const [keyword,setKeyword] = useState("")

 return(

  <div style={{margin:"20px 0"}}>

   <input
     placeholder="Search NRI News"
     value={keyword}
     onChange={(e)=>setKeyword(e.target.value)}
     style={{
       width:"100%",
       padding:"12px",
       fontSize:"16px"
     }}
   />

  </div>

 )

}
import { getCategories } from "../../services/categoryService"
import CategoryCard from "./CategoryCard"

export default function CategoryGrid(){

 const categories = getCategories()

 return(

  <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
    gap:"20px"
  }}>

  {categories.map((cat)=>(
   <CategoryCard key={cat.id} name={cat.name}/>
  ))}

  </div>

 )

}
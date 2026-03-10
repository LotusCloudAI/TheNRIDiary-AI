import { getCategories } from "../../services/categoryService"

export default function CategorySidebar(){

 const categories = getCategories()

 return(

  <div>

   {categories.map(cat=>(
    <p key={cat.id}>{cat.name}</p>
   ))}

  </div>

 )

}
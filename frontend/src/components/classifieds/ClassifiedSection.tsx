import { classifieds } from "../../data/classifiedsData"
import ClassifiedCard from "./ClassifiedCard"

export default function ClassifiedSection(){

 return(

  <div>

   <h2>Classifieds</h2>

   {classifieds.map(item=>(
    <ClassifiedCard key={item.id} title={item.title}/>
   ))}

  </div>

 )

}
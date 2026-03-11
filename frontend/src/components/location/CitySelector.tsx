import { texasCities } from "../../data/cities"

export default function CitySelector(){

 return(

  <div>

   {texasCities.map(city=>(
    <p key={city}>{city}</p>
   ))}

  </div>

 )

}
import { usaStates } from "../../data/states"

export default function StateSelector(){

 return(

  <div>

   {usaStates.map((state)=>(
    <p key={state}>{state}</p>
   ))}

  </div>

 )

}
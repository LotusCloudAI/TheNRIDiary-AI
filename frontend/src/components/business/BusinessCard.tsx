type Props={
 name:string
}

export default function BusinessCard({name}:Props){

 return(

  <div style={{border:"1px solid #eee",padding:"12px"}}>

   <h3>{name}</h3>

  </div>

 )

}
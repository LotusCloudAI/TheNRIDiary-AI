type Props={
 title:string
}

export default function ClassifiedCard({title}:Props){

 return(

  <div style={{border:"1px solid #eee",padding:"10px"}}>

   <p>{title}</p>

  </div>

 )

}
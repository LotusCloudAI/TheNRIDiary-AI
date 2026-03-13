type Props={
 title:string
 date:string
}

export default function EventCard({title,date}:Props){

 return(

  <div style={{border:"1px solid #eee",padding:"12px"}}>

   <h3>{title}</h3>
   <p>{date}</p>

  </div>

 )

}
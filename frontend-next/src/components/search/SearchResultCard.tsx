type Props={
 title:string
 image:string
}

export default function SearchResultCard({title,image}:Props){

 return(

  <div style={{
    border:"1px solid #eee",
    borderRadius:"8px",
    overflow:"hidden"
  }}>

   <img
    src={image}
    style={{width:"100%",height:"160px",objectFit:"cover"}}
   />

   <div style={{padding:"10px"}}>

    <h3>{title}</h3>

   </div>

  </div>

 )

}
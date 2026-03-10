type Props = {
 title:string
 image:string
}

export default function StoryListCard({title,image}:Props){

 return(

  <div style={{display:"flex",gap:"12px"}}>

   <img
    src={image}
    style={{width:"100px",height:"70px",objectFit:"cover"}}
   />

   <p>{title}</p>

  </div>

 )

}
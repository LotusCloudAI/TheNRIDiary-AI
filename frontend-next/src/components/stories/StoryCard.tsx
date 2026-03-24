type Props = {
 title:string
 image:string
}

export default function StoryCard({title,image}:Props){

 return(

   <div style={{border:"1px solid #ddd",padding:"10px"}}>

     <img src={image} width="100%" />

     <h4>{title}</h4>

   </div>

 )

}

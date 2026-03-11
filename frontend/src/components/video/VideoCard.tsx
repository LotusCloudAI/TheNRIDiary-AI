type Props={
 title:string
 url:string
}

export default function VideoCard({title,url}:Props){

 return(

  <div>

   <iframe
    src={url}
    width="100%"
    height="200"
   />

   <p>{title}</p>

  </div>

 )

}
export default function VideoSection(){

 const videos = [

  {
   id:1,
   title:"Indian Startup Ecosystem Explained",
   url:"https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  {
   id:2,
   title:"NRI Entrepreneurs Success Story",
   url:"https://www.youtube.com/embed/dQw4w9WgXcQ"
  }

 ]

 return(

  <section style={{marginTop:"40px"}}>

   <h2 style={{marginBottom:"20px"}}>Video News</h2>

   <div
    style={{
     display:"grid",
     gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
     gap:"20px"
    }}
   >

   {videos.map((video)=>(
    
    <div key={video.id}>

     <iframe
      width="100%"
      height="200"
      src={video.url}
      title={video.title}
      frameBorder="0"
      allowFullScreen
     />

     <p style={{marginTop:"10px"}}>
      {video.title}
     </p>

    </div>

   ))}

   </div>

  </section>

 )

}


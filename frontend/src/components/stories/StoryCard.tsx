type Props = {
  title: string
  image: string
  category: string
}

export default function StoryCard({title,image,category}:Props){

 return(

  <div style={{
    border:"1px solid #eee",
    borderRadius:"10px",
    overflow:"hidden"
  }}>

    <img
      src={image}
      style={{
        width:"100%",
        height:"180px",
        objectFit:"cover"
      }}
    />

    <div style={{padding:"12px"}}>

      <p style={{
        fontSize:"12px",
        color:"#2563eb"
      }}>
        {category}
      </p>

      <h3 style={{
        fontSize:"16px",
        fontWeight:"600"
      }}>
        {title}
      </h3>

    </div>

  </div>

 )

}
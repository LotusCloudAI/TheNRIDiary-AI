type Props = {
 title:string
 summary:string
}

export default function StoryPreview({title,summary}:Props){

 return(

  <div>

   <h3>{title}</h3>

   <p>{summary}</p>

  </div>

 )

}
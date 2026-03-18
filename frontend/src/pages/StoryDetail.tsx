import { useParams } from "react-router-dom"

export default function StoryDetail() {
 const { id } = useParams()
 return <div>Story ID: {id}</div>
}

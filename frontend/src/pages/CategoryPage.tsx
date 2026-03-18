import { useParams } from "react-router-dom"

export default function CategoryPage() {
 const { name } = useParams()
 return <div>Category: {name}</div>
}

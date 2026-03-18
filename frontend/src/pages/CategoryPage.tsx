import { useParams } from "react-router-dom";
import { mockStories } from "../data/mockStories";
import { applyFilters } from "../modules/category/services/filterEngine";

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  
  const stories = applyFilters(mockStories, { category: name });

  return (
    <div>
      <h1>{name} News</h1>
      {stories.length > 0 ? (
        stories.map(s => <p key={s.id}>{s.title}</p>)
      ) : (
        <p>No stories found in this category.</p>
      )}
    </div>
  );
}

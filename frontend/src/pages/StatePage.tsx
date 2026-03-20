import { useParams } from "react-router-dom";
import { mockStories } from "../data/mockStories";
import { applyFilters } from "../modules/category/services/filterEngine";

export default function StatePage() {
  const { stateName } = useParams<{ stateName: string }>();
  
  const stories = applyFilters(mockStories, { state: stateName });

  return (
    <div>
      <h1>Stories from {stateName}</h1>
      {stories.length > 0 ? (
        stories.map(s => <p key={s.id}>{s.title}</p>)
      ) : (
        <p>No stories found in this state.</p>
      )}
    </div>
  );
}

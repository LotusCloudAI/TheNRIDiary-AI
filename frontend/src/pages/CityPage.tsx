import { useParams } from "react-router-dom";
import { mockStories } from "../data/mockStories";
import { applyFilters } from "../modules/category/services/filterEngine";

export default function CityPage() {
  const { cityName } = useParams<{ cityName: string }>();
  
  const stories = applyFilters(mockStories, { city: cityName });

  return (
    <div>
      <h1>Stories from {cityName}</h1>
      {stories.length > 0 ? (
        stories.map(s => <p key={s.id}>{s.title}</p>)
      ) : (
        <p>No stories found in this city.</p>
      )}
    </div>
  );
}

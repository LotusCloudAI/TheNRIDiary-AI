import { useParams, useSearchParams } from "react-router-dom";
import { mockStories } from "../data/mockStories";
import { applyFilters } from "../modules/category/services/filterEngine";
import { useState, useEffect } from "react"; 

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  const [searchParams] = useSearchParams();
  const [stories, setStories] = useState(mockStories);
  
  useEffect(() => {
    const stateFromUrl = searchParams.get('state') || '';
    
    const filtered = applyFilters(mockStories, { 
      category: name,
      state: stateFromUrl 
    });
    
    setStories(filtered);
  }, [name, searchParams]);

  return (
    <div>
      <h1>{name} News</h1>
      {searchParams.get('state') && (
        <p>Filtering by state: {searchParams.get('state')}</p>
      )}
      {stories.length > 0 ? (
        stories.map(s => <p key={s.id}>{s.title}</p>)
      ) : (
        <p>No stories found.</p>
      )}
    </div>
  );
}

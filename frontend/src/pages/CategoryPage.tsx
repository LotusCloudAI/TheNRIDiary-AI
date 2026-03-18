import { useMemo } from 'react';
import { mockStories } from "../data/mockStories";
import { applyFilters } from "../modules/category/services/filterEngine";
import { useState } from "react";

export default function CategoryPage() {
  const [filters, setFilters] = useState({
    category: '',
    state: '',
    city: ''
  });

  // Memoize filtered stories to prevent recalculation on every render
  const filteredStories = useMemo(() => {
    console.log('Calculating filtered stories...');
    return applyFilters(mockStories, filters);
  }, [filters.category, filters.state, filters.city]);

  // Memoize available cities based on selected state
  const availableCities = useMemo(() => {
    if (!filters.state) return [];
    return locations.USA[filters.state as keyof typeof locations.USA] || [];
  }, [filters.state]);


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

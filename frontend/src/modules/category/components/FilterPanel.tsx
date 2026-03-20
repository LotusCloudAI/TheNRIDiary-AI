import React from 'react';
import { categories } from '../../../data/categories';
import { locations } from '../../../data/locations';

interface FilterPanelProps {
  selectedCategory: string;
  selectedState: string;
  selectedCity: string;
  onCategoryChange: (category: string) => void;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategory,
  selectedState,
  selectedCity,
  onCategoryChange,
  onStateChange,
  onCityChange
}) => {
  // Get states from locations
  const states = Object.keys(locations.USA);
  
  // Get cities based on selected state
  const cities = selectedState 
    ? locations.USA[selectedState as keyof typeof locations.USA] || []
    : [];

  return (
    <div className="filter-panel">
      <select 
        value={selectedCategory} 
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select 
        value={selectedState} 
        onChange={(e) => onStateChange(e.target.value)}
      >
        <option value="">All States</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      <select 
        value={selectedCity} 
        onChange={(e) => onCityChange(e.target.value)}
        disabled={!selectedState}
      >
        <option value="">All Cities</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

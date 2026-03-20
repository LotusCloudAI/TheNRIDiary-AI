import React from 'react';
import { locations } from '../../../data/locations';

interface CitySelectorProps {
  selectedState: string;
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export const CitySelector: React.FC<CitySelectorProps> = ({
  selectedState,
  selectedCity,
  onCityChange
}) => {
  // Get cities based on selected state
  const cities = selectedState && locations.USA[selectedState as keyof typeof locations.USA]
    ? locations.USA[selectedState as keyof typeof locations.USA]
    : [];

  return (
    <select 
      value={selectedCity} 
      onChange={(e) => onCityChange(e.target.value)}
      disabled={!selectedState || cities.length === 0}
      className="city-selector"
    >
      <option value="">Select City</option>
      {cities.map(city => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  );
};

import React from 'react';
import { locations } from '../../../data/locations';

interface StateSelectorProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

export const StateSelector: React.FC<StateSelectorProps> = ({
  selectedState,
  onStateChange
}) => {
  const states = Object.keys(locations.USA);

  return (
    <select 
      value={selectedState} 
      onChange={(e) => onStateChange(e.target.value)}
      className="state-selector"
    >
      <option value="">Select State</option>
      {states.map(state => (
        <option key={state} value={state}>{state}</option>
      ))}
    </select>
  );
};

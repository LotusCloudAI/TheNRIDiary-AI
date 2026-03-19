import React, { useState, useMemo } from 'react';
import { businesses } from '../data/businesses';
import { filterBusinesses } from '../modules/business/services/businessService';
import { FilterPanel } from '../modules/category/components/FilterPanel';
import { EmptyState } from '../components/common/EmptyState';
import { Breadcrumb } from '../components/common/Breadcrumb';

export default function BusinessPage() {
  const [filters, setFilters] = useState({
    category: '',
    state: '',
    city: ''
  });

  const filteredBusinesses = useMemo(() => {
    return filterBusinesses(filters);
  }, [filters]);

  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  return (
    <div className="business-page">
      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Business Directory', path: '/business', isCurrent: true }
      ]} />

      <h1>Business Directory</h1>
      
      <FilterPanel
        selectedCategory={filters.category}
        selectedState={filters.state}
        selectedCity={filters.city}
        onCategoryChange={(val) => handleFilterChange('category', val)}
        onStateChange={(val) => handleFilterChange('state', val)}
        onCityChange={(val) => handleFilterChange('city', val)}
      />

      <div className="business-list">
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map(business => (
            <div key={business.id} className="business-card">
              <h3>{business.name}</h3>
              <p className="category">{business.category}</p>
              <p className="location">{business.city}, {business.state}</p>
              <p className="description">{business.description}</p>
              <p className="phone">📞 {business.phone}</p>
              {business.website && (
                <a href={business.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              )}
            </div>
          ))
        ) : (
          <EmptyState 
            title="No businesses found"
            message="Try adjusting your filters to see more results"
          />
        )}
      </div>
    </div>
  );
}

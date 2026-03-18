import {type Business, businesses } from '../../data/businesses';

interface BusinessFilters {
  category?: string;
  city?: string;
  state?: string;
  searchTerm?: string;
}

export function getBusinessesByCategory(category: string): Business[] {
  return businesses.filter(b => b.category === category);
}

export function getBusinessesByCity(city: string): Business[] {
  return businesses.filter(b => b.city === city);
}

export function filterBusinesses(filters: BusinessFilters): Business[] {
  return businesses.filter(business => {
    const matchesCategory = !filters.category || business.category === filters.category;
    const matchesCity = !filters.city || business.city === filters.city;
    const matchesState = !filters.state || business.state === filters.state;
    const matchesSearch = !filters.searchTerm || 
      business.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    return matchesCategory && matchesCity && matchesState && matchesSearch;
  });
}

import { type Classified, classifieds } from '../../../data/classifieds';

interface ClassifiedFilters {
  category?: string;
  location?: string;
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
}

export function getClassifiedsByCategory(category: string): Classified[] {
  return classifieds.filter(c => c.category === category);
}

export function searchClassifieds(searchTerm: string): Classified[] {
  const term = searchTerm.toLowerCase();
  return classifieds.filter(c => 
    c.title.toLowerCase().includes(term) ||
    c.description.toLowerCase().includes(term)
  );
}

export function filterClassifieds(filters: ClassifiedFilters): Classified[] {
  return classifieds.filter(item => {
    const matchesCategory = !filters.category || item.category === filters.category;
    const matchesLocation = !filters.location || 
      item.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesSearch = !filters.searchTerm || 
      item.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesMinPrice = !filters.minPrice || (item.price && item.price >= filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || (item.price && item.price <= filters.maxPrice);
    
    return matchesCategory && matchesLocation && matchesSearch && 
           matchesMinPrice && matchesMaxPrice;
  });
}

export function getClassifiedsByLocation(city: string): Classified[] {
  return classifieds.filter(c => 
    c.location.toLowerCase().includes(city.toLowerCase())
  );
}

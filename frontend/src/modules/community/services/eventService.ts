import { type Event, events } from '../../../data/events';

interface EventFilters {
  category?: string;
  location?: string;
  type?: 'upcoming' | 'past' | 'all';
  searchTerm?: string;
}

export function getUpcomingEvents(): Event[] {
  const now = new Date().toISOString();
  return events.filter(event => event.date >= now);
}

export function getPastEvents(): Event[] {
  const now = new Date().toISOString();
  return events.filter(event => event.date < now);
}

export function filterEvents(filters: EventFilters): Event[] {
  const now = new Date().toISOString();
  
  return events.filter(event => {
    // Filter by upcoming/past
    if (filters.type === 'upcoming' && event.date < now) return false;
    if (filters.type === 'past' && event.date >= now) return false;
    
    // Filter by category
    if (filters.category && event.category !== filters.category) return false;
    
    // Filter by location
    if (filters.location && !event.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    
    // Search in title and description
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      return event.title.toLowerCase().includes(term) ||
             event.description.toLowerCase().includes(term);
    }
    
    return true;
  });
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter(e => e.category === category);
}

export function getEventsByCity(city: string): Event[] {
  return events.filter(e => e.location.includes(city));
}

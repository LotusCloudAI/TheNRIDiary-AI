import type { Story } from '../../../types/story';

interface Filters {
  category?: string;
  state?: string;
  city?: string;
}

export function applyFilters(stories: Story[], filters: Filters): Story[] {
  return stories.filter(s => {
    return (
      (!filters.category || s.category === filters.category) &&
      (!filters.state || s.state === filters.state) &&
      (!filters.city || s.city === filters.city)
    );
  });
}

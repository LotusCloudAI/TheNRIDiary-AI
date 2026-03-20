import type { Story } from '../../../types/story';

export function getStoriesByCategory(stories: Story[], category: string): Story[] {
  return stories.filter(s => s.category === category);
}

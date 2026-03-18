import type { Story } from '../../../types/story';

export function getStoriesByState(stories: Story[], state: string): Story[] {
  return stories.filter(s => s.state === state);
}
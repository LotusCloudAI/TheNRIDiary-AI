export const getRecommendedStories = (stories: any[], preferences: any) => {
  if (!preferences) return stories.slice(0, 6);

  return stories
    .filter((story) => preferences[story.category])
    .sort((a, b) => preferences[b.category] - preferences[a.category])
    .slice(0, 6);
};

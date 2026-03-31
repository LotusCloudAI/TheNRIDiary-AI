export const getTrendingScore = (story: any) => {
  return (story.views || 0) * 0.5 +
         (story.likes || 0) * 1.5 +
         (story.saved || 0) * 2;
};

export const getTrendingStories = (stories: any[]) => {
  return [...stories]
    .sort((a, b) => getTrendingScore(b) - getTrendingScore(a))
    .slice(0, 4);
};

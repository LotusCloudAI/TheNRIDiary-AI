import { mockStories } from "@/src/data/mockStories";

export function searchStories(keyword: string) {

  if (!keyword) return [];

  return mockStories.filter((story) =>
    story.title.toLowerCase().includes(keyword.toLowerCase())
  );

}
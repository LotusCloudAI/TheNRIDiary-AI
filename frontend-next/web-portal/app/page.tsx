import { fetchStories } from "@/shared/api/stories";
import StoryCard from "../components/shared/StoryCard";

export default async function HomePage() {
  const stories = await fetchStories();

  if (!stories) return <div>Loading...</div>;

  return (
    <div className="p-6">
      {stories.map(story => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}

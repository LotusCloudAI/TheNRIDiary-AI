import { fetchStories } from "@/shared/api/stories";
import StoryCard from "../../../components/shared/StoryCard";

export default async function CategoryPage({ params }) {
  const stories = await fetchStories();

  const filtered = stories.filter(
    s => s.category === params.category
  );

  return (
    <div className="p-6">
      {filtered.map(story => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}

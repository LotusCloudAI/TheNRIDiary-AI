import { fetchStories } from "@/shared/api/stories";

export default async function StoryPage({ params }) {
  const stories = await fetchStories();

  const story = stories.find(s => s.slug === params.slug);

  if (!story) return <div>Not found</div>;

  return (
    <div className="p-6">
      <h1>{story.title}</h1>
      <p>{story.content}</p>
    </div>
  );
}

import Link from "next/link";

export default function StoryCard({ story }) {
  return (
    <div className="border p-4 mb-4">
      <Link href={`/story/${story.slug}`}>
        <h2>{story.title}</h2>
      </Link>
    </div>
  );
}
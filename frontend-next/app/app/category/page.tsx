"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { filterStories, Story } from "@/lib/filterEngine";

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const category = params.category as string;
  const state = searchParams.get("state");

  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    // TEMP MOCK DATA (will replace with Firestore later)
    const mockStories: Story[] = [
      { id: "1", title: "Story 1", category: "general", location: "TX" },
      { id: "2", title: "Story 2", category: "tech", location: "CA" },
      { id: "3", title: "Story 3", category: "general", location: "TX" },
    ];

    // ✅ Use centralized filter engine
    const filtered = filterStories(mockStories, category, state);

    setStories(filtered);
  }, [category, state]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Category: {category}
      </h1>

      {state && (
        <p className="mb-4 text-gray-600">
          Filtered by State: {state}
        </p>
      )}

      {stories.length === 0 ? (
        <p>No stories found</p>
      ) : (
        <div className="space-y-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="p-4 border rounded"
            >
              <h2 className="font-semibold">{story.title}</h2>
              <p className="text-sm text-gray-500">
                {story.location}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

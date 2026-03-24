"use client";

import { searchStories } from "@/src/services/searchService";

export default function SearchResultsGrid({ keyword }: any) {

  const results = keyword ? searchStories(keyword) : [];

  if (!keyword) {
    return <p className="text-gray-500">Start typing to search...</p>;
  }

  if (results.length === 0) {
    return <p className="text-gray-500">No results found.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {results.map((story: any) => (
        <div key={story.id} className="border rounded-lg overflow-hidden">
          <img src={story.image} alt={story.title} />
          <h3 className="p-2 font-semibold">{story.title}</h3>
        </div>
      ))}
    </div>
  );
}
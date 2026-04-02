"use client";

import { useState, useEffect } from "react";
import { fetchStories } from "@/shared/api/stories";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories().then(setStories);
  }, []);

  const results = stories.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />

      {results.length === 0 && <div>No results</div>}

      {results.map(story => (
        <div key={story.id}>{story.title}</div>
      ))}
    </div>
  );
}
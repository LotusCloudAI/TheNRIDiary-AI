"use client";

import { useEffect, useState } from "react";
import { getStories } from "@/lib/api/stories";

export default function Home() {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStories().then((data) => {
      setStories(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>NRI Diary</h1>

      {stories.map((story) => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  );
}

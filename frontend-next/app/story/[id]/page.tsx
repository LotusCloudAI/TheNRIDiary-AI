"use client";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState<any>(null);

  useEffect(() => {
    const fetchStory = async () => {
      const ref = doc(db, "stories", id as string);
      const snap = await getDoc(ref);
      setStory(snap.data());
    };

    fetchStory();
  }, [id]);

  if (!story) return <p>Loading...</p>;

  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
    </div>
  );
}

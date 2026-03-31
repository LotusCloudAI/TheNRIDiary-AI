import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const searchStories = async (keyword: string) => {
  const snapshot = await getDocs(collection(db, "stories"));

  return snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((story: any) =>
      story.title.toLowerCase().includes(keyword.toLowerCase())
    );
};

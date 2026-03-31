import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const getStories = async () => {
  const snap = await getDocs(collection(db, "articles"));
  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getStory = async (id: string) => {
  const stories = await getStories();
  return stories.find((s: any) => s.id === id);
};

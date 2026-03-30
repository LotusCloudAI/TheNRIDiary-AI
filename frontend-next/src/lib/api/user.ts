import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const saveStory = async (userId: string, story: any) => {
  await setDoc(doc(db, "users", userId, "savedStories", story.id), story);
};

import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export const fetchStories = async () => {
  const snapshot = await getDocs(collection(db, "articles"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
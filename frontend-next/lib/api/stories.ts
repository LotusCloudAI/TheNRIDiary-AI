import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getStories = async () => {
  const snapshot = await getDocs(collection(db, "stories"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

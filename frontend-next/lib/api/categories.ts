import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getStoriesByCategory = async (category: string) => {
  const q = query(
    collection(db, "stories"),
    where("category", "==", category)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

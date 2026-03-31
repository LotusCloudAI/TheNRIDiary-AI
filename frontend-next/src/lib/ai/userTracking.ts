import { db } from "../firebase/config";
import { doc, setDoc, increment } from "firebase/firestore";

export const trackCategory = async (userId: string, category: string) => {
  const ref = doc(db, "users", userId, "preferences", category);
  await setDoc(ref, { count: increment(1) }, { merge: true });
};

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

await addDoc(collection(db, "stories"), 
{
  title,
  content,
  category,
});

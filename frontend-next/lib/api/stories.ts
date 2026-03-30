import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

// ==============================
// TYPE
// ==============================

export type Story = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt?: any;
};

// ==============================
// GET ALL STORIES (Search + Category)
// ==============================

export async function getStories(
  category: string = "all"
): Promise<Story[]> {
  try {
    let q;

    if (category && category !== "all") {
      q = query(
        collection(db, "articles"),
        where("category", "==", category.toLowerCase()),
        orderBy("createdAt", "desc")
      );
    } else {
      q = query(
        collection(db, "articles"),
        orderBy("createdAt", "desc")
      );
    }

    const snapshot = await getDocs(q);

    const stories: Story[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title || "No Title",
        content: data.content || "",
        category: data.category || "General",
        image:
          data.img ||
          data.image ||
          "https://placehold.co/600x400",
        createdAt: data.createdAt || null,
      };
    });

    return stories;
  } catch (error) {
    console.error("Firestore fetch error:", error);
    return [];
  }
}

// ==============================
// PAGINATION (Load More)
// ==============================

export async function getStoriesPaginated(
  lastDoc?: QueryDocumentSnapshot<DocumentData>
) {
  try {
    let q;

    if (lastDoc) {
      q = query(
        collection(db, "articles"),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(6)
      );
    } else {
      q = query(
        collection(db, "articles"),
        orderBy("createdAt", "desc"),
        limit(6)
      );
    }

    const snapshot = await getDocs(q);

    const stories: Story[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title || "No Title",
        content: data.content || "",
        category: data.category || "General",
        image:
          data.img ||
          data.image ||
          "https://placehold.co/600x400",
        createdAt: data.createdAt || null,
      };
    });

    return {
      stories,
      lastDoc: snapshot.docs[snapshot.docs.length - 1],
    };
  } catch (error) {
    console.error("Pagination error:", error);
    return { stories: [], lastDoc: null };
  }
}
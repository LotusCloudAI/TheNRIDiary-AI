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
// SAFE DATA PARSER (PRODUCTION SAFE)
// ==============================

function parseStory(
  doc: QueryDocumentSnapshot<DocumentData>
): Story {
  const data = doc.data() as Partial<Story> & {
    img?: string;
  };

  return {
    id: doc.id,
    title: data?.title ?? "No Title",
    content: data?.content ?? "",
    category: (data?.category ?? "general").toLowerCase(), // ✅ normalize
    image: data?.img ?? data?.image ?? "/default-news.jpg",
    createdAt: data?.createdAt ?? null,
  };
}

// ==============================
// GET STORIES (ALL / CATEGORY)
// ==============================

export async function getStories(
  category: string = "all"
): Promise<Story[]> {
  try {
    const normalizedCategory = category?.toLowerCase();

    let q;

    if (normalizedCategory && normalizedCategory !== "all") {
      q = query(
        collection(db, "articles"),
        where("category", "==", normalizedCategory),
        orderBy("createdAt", "desc"),
        limit(50)
      );
    } else {
      q = query(
        collection(db, "articles"),
        orderBy("createdAt", "desc"),
        limit(50)
      );
    }

    const snapshot = await getDocs(q);

    return snapshot.docs.map(parseStory);
  } catch (error) {
    console.error("Firestore fetch error:", error);
    return [];
  }
}

// ==============================
// RELATED STORIES (🔥 NEW - PRODUCTION)
// ==============================

export async function getRelatedStories(
  category: string,
  currentId: string
): Promise<Story[]> {
  try {
    const q = query(
      collection(db, "articles"),
      where("category", "==", category.toLowerCase()),
      orderBy("createdAt", "desc"),
      limit(6)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs
      .map(parseStory)
      .filter((story) => story.id !== currentId)
      .slice(0, 4);
  } catch (error) {
    console.error("Related stories error:", error);
    return [];
  }
}

// ==============================
// SEARCH STORIES (CLIENT FILTER)
// ==============================

export async function searchStories(
  keyword: string
): Promise<Story[]> {
  try {
    const q = query(
      collection(db, "articles"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const snapshot = await getDocs(q);

    const lowerKeyword = keyword.toLowerCase();

    return snapshot.docs
      .map(parseStory)
      .filter(
        (story) =>
          story.title.toLowerCase().includes(lowerKeyword) ||
          story.content.toLowerCase().includes(lowerKeyword)
      );
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}

// ==============================
// PAGINATION (LOAD MORE)
// ==============================

export async function getStoriesPaginated(
  lastDoc?: QueryDocumentSnapshot<DocumentData>
): Promise<{
  stories: Story[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
}> {
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

    return {
      stories: snapshot.docs.map(parseStory),
      lastDoc:
        snapshot.docs.length > 0
          ? snapshot.docs[snapshot.docs.length - 1]
          : null,
    };
  } catch (error) {
    console.error("Pagination error:", error);
    return { stories: [], lastDoc: null };
  }
}
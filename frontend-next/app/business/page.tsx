"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase/config";

export default function BusinessPage() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "businessListings"));
      setListings(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <div>
      {listings.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

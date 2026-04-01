"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Business = {
  id: string;
  name?: string;
};

export default function BusinessPage() {
  const [listings, setListings] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "businessListings"));

        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Business, "id">),
        }));

        setListings(data);
      } catch (error) {
        console.error("Error fetching business listings:", error);
        setListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div style={{ padding: "20px" }}>
        <p>Loading business listings...</p>
      </div>
    );
  }

  // Empty state
  if (listings.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <p>No business listings available.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Business Listings</h1>

      {listings.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "12px",
            marginBottom: "10px",
            background: "#fff",
            borderRadius: "6px",
            border: "1px solid #eee",
          }}
        >
          {item.name || "Unnamed Business"}
        </div>
      ))}
    </div>
  );
}

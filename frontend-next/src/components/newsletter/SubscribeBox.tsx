"use client";
import { useState } from "react";
import { db } from "@/src/lib/firebase/config";
import { addDoc, collection } from "firebase/firestore";

export default function SubscribeBox() {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    await addDoc(collection(db, "newsletterSubscribers"), {
      email,
      createdAt: new Date()
    });
  };

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} />
      <button onClick={subscribe}>Subscribe</button>
    </div>
  );
}

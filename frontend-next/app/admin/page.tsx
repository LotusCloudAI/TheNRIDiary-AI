"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // VALIDATION
    if (!title.trim() || !content.trim() || !category.trim()) {
      alert("Please fill Title, Content, and Category");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "articles"), {
        title: title.trim(),
        content: content.trim(),
        category: category.toLowerCase().trim(),
        image: image.trim() || "",
        createdAt: serverTimestamp(), // IMPORTANT
      });

      alert("Story added successfully!");

      //  RESET FORM
      setTitle("");
      setContent("");
      setCategory("");
      setImage("");
    } catch (error) {
      console.error("Error adding story:", error);
      alert("Error saving story");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "25px",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Admin - Add Story</h1>

      {/* TITLE */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      {/* CONTENT */}
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ ...inputStyle, height: "120px" }}
      />

      {/* CATEGORY */}
      <input
        type="text"
        placeholder="Category (usa, india, business...)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={inputStyle}
      />

      {/* IMAGE */}
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={inputStyle}
      />

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: "12px",
          width: "100%",
          background: "#1e3a8a",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Saving..." : "Add Story"}
      </button>
    </div>
  );
}

//  COMMON STYLE
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};
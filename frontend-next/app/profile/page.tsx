"use client";

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // TEMP: replace with Firebase later
    setUser({
      email: "demo@nri-diary.com",
    });
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        My Profile
      </h1>

      {user ? (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <p style={{ color: "#666" }}>
          Please login to view your profile.
        </p>
      )}
    </div>
  );
}
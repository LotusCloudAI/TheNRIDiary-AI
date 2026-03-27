"use client";

export default function LoginPage() {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Login
      </h1>

      <button
        style={{
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Continue with Google (Coming Soon)
      </button>
    </div>
  );
}
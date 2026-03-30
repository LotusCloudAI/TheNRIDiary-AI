"use client";
import { useAuth } from "@/src/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>My Profile</h1>
      <p>{user?.email}</p>
    </div>
  );
}

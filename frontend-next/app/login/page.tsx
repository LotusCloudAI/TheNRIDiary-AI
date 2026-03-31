"use client";
import { signInWithGoogle } from "@/src/lib/firebase/auth";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto py-20 text-center">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <button onClick={signInWithGoogle}>
        Continue with Google
      </button>
    </div>
  );
}

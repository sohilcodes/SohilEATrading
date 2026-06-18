"use client";

import { useState } from "react";
import { signup } from "../../lib/api";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const data = await signup(fullName, email, password);
      alert("Signup successful!");
      // Signup ke baad login page pe ja
      window.location.href = "/login";
    } catch (err: any) {
      setError(err.message || "Signup failed");
    }
  }

  return (
    <div style={{ maxWidth: 320, margin: "40px auto", textAlign: "center" }}>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Create Account
        </button>
      </form>
      <p style={{ marginTop: 12 }}>
        <a href="/login">Login here</a>
      </p>
    </div>
  );
}

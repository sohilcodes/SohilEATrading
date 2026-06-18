"use client";

import { useState } from "react";
import { login } from "../../lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      alert("Login successful!");
      // Login ke baad dashboard pe ja
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <div style={{ maxWidth: 320, margin: "40px auto", textAlign: "center" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <p style={{ marginTop: 12 }}>
        <a href="/signup">Create account</a>
      </p>
    </div>
  );
}

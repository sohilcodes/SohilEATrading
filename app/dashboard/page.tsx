"use client";

import { useEffect, useState } from "react";
import { getAccessToken, fetchWithAuth } from "../../lib/api";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      setError("Please login first");
      setTimeout(() => window.location.href = "/login", 2000);
      return;
    }

    (async () => {
      try {
        const res = await fetchWithAuth(
          "https://eatradingsohil.onrender.com/api/profile/me"
        );
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        const data = await res.json();
        setUser(data.user);
      } catch (err: any) {
        setError(err.message || "Failed to load profile");
      }
    })();
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2>Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

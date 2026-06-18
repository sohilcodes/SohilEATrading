const API_BASE_URL = "https://eatradingsohil.onrender.com/api";

export async function signup(fullName: string, email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      full_name: fullName,
      email: email,
      password: password
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "Signup failed");
  }

  return data; // { message, user_id, email }
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "Login failed");
  }

  // Tokens local me store kar
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);

  return data; // { message, access_token, refresh_token, user }
}

export function getAccessToken() {
  return localStorage.getItem("access_token");
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = getAccessToken();
  const base = options.headers || {};

  const headers: Record<string, string> = {
    ...(base as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (!headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(url, {
    ...options,
    headers,
  });
}

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL && import.meta.env.DEV) {
  // Fails loudly in dev instead of silently sending requests to the
  // frontend's own origin (the old bug: no .env file meant this was
  // `undefined`, so every API call 404'd against the Vite dev server).
  console.error(
    "[api/client] VITE_API_URL is not set. Copy .env.example to .env and " +
      "point it at your backend, e.g. VITE_API_URL=http://localhost:8000"
  );
}

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Endpoints that must never trigger the refresh-and-retry flow below —
// a 401 from any of these means "bad credentials" or "bad token", not
// "access token expired", so retrying would just loop forever.
const AUTH_EXEMPT_PATHS = ["/auth/login", "/auth/register", "/auth/refresh"];

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

let isRefreshing = false;
let pendingQueue = [];

function flushQueue(error, token = null) {
  pendingQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve(token);
  });
  pendingQueue = [];
}

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const isExempt = AUTH_EXEMPT_PATHS.some((path) =>
      originalRequest?.url?.includes(path)
    );

    if (status !== 401 || isExempt || originalRequest._retry) {
      return Promise.reject(error);
    }

    const refreshTokenValue = localStorage.getItem("refresh_token");
    if (!refreshTokenValue) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      // Another request already kicked off a refresh — wait for it instead
      // of firing a second /auth/refresh call.
      return new Promise((resolve, reject) => {
        pendingQueue.push({ resolve, reject });
      })
        .then((newToken) => {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return client(originalRequest);
        })
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
        refresh_token: refreshTokenValue,
      });

      localStorage.setItem("access_token", data.access_token);
      flushQueue(null, data.access_token);

      originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
      return client(originalRequest);
    } catch (refreshError) {
      flushQueue(refreshError, null);

      // Refresh token is dead — clear the session and send the user back
      // to login rather than leaving them stuck on a broken page.
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
      window.location.href = "/login";

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default client;
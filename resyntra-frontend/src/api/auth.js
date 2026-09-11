import client from "./client";

export const registerUser = async (data) => {
  const response = await client.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await client.post("/auth/login", data);
  return response.data;
};

export const refreshToken = async (refreshTokenValue) => {
  const response = await client.post("/auth/refresh", {
    refresh_token: refreshTokenValue,
  });

  return response.data;
};

export const logoutUser = async (data) => {
  const response = await client.post("/auth/logout", data);
  return response.data;
};

// GET /auth/me — used on app load to verify the cached user/token pair is
// still valid rather than trusting whatever was last written to
// localStorage (e.g. after a server-side password reset or role change).
export const getCurrentUser = async () => {
  const response = await client.get("/auth/me");
  return response.data;
};
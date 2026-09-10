import client from "./client";

export const registerUser = async (data) => {
  const response = await client.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await client.post("/auth/login", data);
  return response.data;
};

export const refreshToken = async (refreshToken) => {
  const response = await client.post("/auth/refresh", {
    refresh_token: refreshToken,
  });

  return response.data;
};

export const logoutUser = async (data) => {
  const response = await client.post("/auth/logout", data);
  return response.data;
};
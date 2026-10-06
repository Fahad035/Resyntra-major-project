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

export const getCurrentUser = async () => {
  const response = await client.get("/auth/me");
  return response.data;
};

/**
 * Request a password-reset email.
 */
export const forgotPassword = async (email) => {
  const response = await client.post("/auth/forgot-password", {
    email,
  });

  return response.data;
};

/**
 * Reset password using the token received by email.
 */
export const resetPassword = async (data) => {
  const response = await client.post("/auth/reset-password", data);
  return response.data;
};

/**
 * Verify the user's email address.
 */
export const verifyEmail = async (token) => {
  const response = await client.post("/auth/verify-email", {
    token,
  });

  return response.data;
};

/**
 * Resend email verification message.
 */
export const resendVerificationEmail = async (email) => {
  const response = await client.post("/auth/resend-verification", {
    email,
  });

  return response.data;
};
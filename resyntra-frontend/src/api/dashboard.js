import client from "./client";

/**
 * Fetch research dashboard statistics.
 */
export const getDashboardStats = async () => {
  const response = await client.get("/dashboard/stats");
  return response.data;
};

/**
 * Fetch recent papers for the dashboard.
 */
export const getRecentPapers = async (limit = 5) => {
  const response = await client.get("/dashboard/recent-papers", {
    params: { limit },
  });

  return response.data;
};

/**
 * Fetch complete dashboard data.
 */
export const getDashboard = async () => {
  const response = await client.get("/dashboard");
  return response.data;
};
import api from "./axios";

const analyticsApi = {
  getOverview: async () => {
    const response = await api.get("/analytics");
    return response.data;
  },
};

export default analyticsApi;
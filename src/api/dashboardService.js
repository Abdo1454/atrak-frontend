import api from "./axios";

const dashboardService = {
  /**
   * User Dashboard
   */
  getDashboard: () => api.get("/user/dashboard"),

  /**
   * User Orders
   */
  getOrders: () => api.get("/user/orders"),

  /**
   * User Profile
   */
  getProfile: () => api.get("/user/profile"),

  /**
   * Update Profile
   */
  updateProfile: (data) =>
    api.put("/user/profile", data),

  /**
   * Change Password
   */
  changePassword: (data) =>
    api.put("/user/change-password", data),

  /**
   * Favorites
   */
  getFavorites: () => api.get("/user/favorites"),

  addFavorite: (productId) =>
    api.post(`/user/favorites/${productId}`),

  removeFavorite: (productId) =>
    api.delete(`/user/favorites/${productId}`),
};

export default dashboardService;
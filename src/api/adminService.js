import api from "./api";

const adminService = {
  // Dashboard
  getDashboard: () => api.get("/admin/dashboard"),

  // Products
  getProducts: () => api.get("/admin/products"),
  getProduct: (id) => api.get(`/admin/products/${id}`),
  createProduct: (data) => api.post("/admin/products", data),
  updateProduct: (id, data) =>
    api.put(`/admin/products/${id}`, data),
  deleteProduct: (id) =>
    api.delete(`/admin/products/${id}`),

  // Orders
  getOrders: () => api.get("/admin/orders"),
  updateOrder: (id, data) =>
    api.put(`/admin/orders/${id}`, data),

  // Categories
  getCategories: () => api.get("/admin/categories"),
  createCategory: (data) =>
    api.post("/admin/categories", data),
  updateCategory: (id, data) =>
    api.put(`/admin/categories/${id}`, data),
  deleteCategory: (id) =>
    api.delete(`/admin/categories/${id}`),

  // Customers
  getUsers: () => api.get("/admin/users"),

  // Messages
  getMessages: () => api.get("/admin/messages"),
  deleteMessage: (id) =>
    api.delete(`/admin/messages/${id}`),

  // Settings
  getSettings: () => api.get("/admin/settings"),
  updateSettings: (data) =>
    api.put("/admin/settings", data),
};

export default adminService;
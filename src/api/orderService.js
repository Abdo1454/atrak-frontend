import api from "./axios";

export const getOrders = () => {
  return api.get("/orders");
};

export const getOrder = (id) => {
  return api.get(`/orders/${id}`);
};

export const createOrder = (data) => {
  return api.post("/orders", data);
};

const orderService = {
  getOrders,
  getOrder,
  createOrder,
};

export default orderService;
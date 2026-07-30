import api from "./axios";

export const createOrder = async (order) => {
  const { data } = await api.post("/orders", order);
  return data;
};
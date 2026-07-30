import api from "./axios";

export const sendMessage = async (message) => {
  const { data } = await api.post("/contact", message);
  return data;
};
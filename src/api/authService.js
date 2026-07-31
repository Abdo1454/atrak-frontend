import api from "./axios";

const authService = {
  register(data) {
    return api.post("/register", data);
  },

  login(data) {
    return api.post("/login", data);
  },

  logout() {
    return api.post("/logout");
  },
};

export default authService;
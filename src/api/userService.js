import api from "./api";

const userService = {
  getProfile() {
    return api.get("/user");
  },

  updateProfile(data) {
    return api.put("/user", data);
  },

  changePassword(data) {
    return api.put("/change-password", data);
  },
};

export default userService;
import api from "./axios";


const chatService = {

  sendMessage(message) {

    return api.post("/chat", {
      message,
    });

  },

};


export default chatService;
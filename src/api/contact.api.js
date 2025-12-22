import api from "./axios";

export const sendContactMessage = (payload) => {
  return api.post("/contact", payload);
};

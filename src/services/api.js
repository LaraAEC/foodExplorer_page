import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketfood-api-im2b.onrender.com"
});

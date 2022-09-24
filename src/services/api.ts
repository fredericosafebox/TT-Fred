import axios from "axios";

export const api = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
  timeout: 5000,
});

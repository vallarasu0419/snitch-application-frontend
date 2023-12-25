import axios from "axios";

const baseUrl = "http://localhost:8080";
export const instance = axios.create({
  baseURL: baseUrl,
});

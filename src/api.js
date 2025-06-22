// src/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api", // change to your hosted backend URL if deployed
});

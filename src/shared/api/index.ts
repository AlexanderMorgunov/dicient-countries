import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

const $api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

export { $api };

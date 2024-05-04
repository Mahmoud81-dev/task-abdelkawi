import { BaseUrls } from "../Interfaces/BaseUrl";

const BASE_URLS: BaseUrls = {
  development: "http://localhost:5005",
  // staging: 'https://staging.example.com/api',
  // production: "https://minly-backend.onrender.com/api/v1",
};

export const BASE_URL: string =  BASE_URLS["development"];



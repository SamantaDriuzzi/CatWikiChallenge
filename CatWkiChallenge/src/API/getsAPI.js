import axios from "axios";

const axiosInstance = axios.create({
  method: "get",
  maxBodyLength: Infinity,
  baseURL: "https://api.thecatapi.com",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5173/",
    "Content-Type": "application/json",
    "x-api-key":
      "live_KzrAHEr4d77u2rMB8750jSZpYI4OgKpHFKITJWucEIdqgGgMje2xcbkni2K34B8w",
  },
});

const apiKey =
  "live_KzrAHEr4d77u2rMB8750jSZpYI4OgKpHFKITJWucEIdqgGgMje2xcbkni2K34B8w";

export const getRazas = (searchValue) => {
  return axiosInstance.get(`/v1/breeds/search?q=${searchValue}`);
};

export const getImagesByLimit = (limit) => {
  return axiosInstance.get(
    `/v1/images/search?&format=json&has_breeds=true&limit=${limit}&api_key=${apiKey}`
  );
};

export const getImagesByBreeds = () => {
  return axiosInstance.get(`/v1/images/:image_id/breeds`);
};

export const getImagesByGroup = (breedsId) => {
  return axiosInstance.get(`/v1/images/search?limit=8&breed_ids=${breedsId}`);
};

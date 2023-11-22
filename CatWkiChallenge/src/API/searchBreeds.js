import axios from "axios";

const theCatApi = "https://api.thecatapi.com";

export const getRazas = (searchValue) => {
  return axios.get(`${theCatApi}/v1/breeds/search?q=${searchValue}`);
};

export const getImagesByLimit = () => {
  return axios.get(
    `${theCatApi}/v1/images/search?&format=json&has_breeds=true&limit=4&api_key=live_KzrAHEr4d77u2rMB8750jSZpYI4OgKpHFKITJWucEIdqgGgMje2xcbkni2K34B8w`
  );
};

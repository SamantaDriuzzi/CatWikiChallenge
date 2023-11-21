import axios from "axios";

export const getRazas = (searchValue) => {
  return axios.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`
  );
};

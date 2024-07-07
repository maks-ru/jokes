import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
});

export const searchJokes = async (query) => {
  const response = await apiClient.get(`/search?query=${query}`);
  return response.data;
};
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../api/randomUsers";

export const get = async <T>(query: string): Promise<AxiosResponse<T>> =>
  axios.get(`${API_URL}${query}`);

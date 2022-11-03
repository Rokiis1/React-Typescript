import axios from "axios";
import { useState } from "react";
import { FetchState } from "../interfaces/FetchState";
import { Movie } from "../interfaces/Movie";

const BASE_URL = `https://api.themoviedb.org/3`;

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const useGetMovies = () => {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [filtered, setFiltered] = useState<Movie[]>([]);

  const getMovie = async () => {
    try {
      setFetchState(FetchState.LOADING);
      const response = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const responseData = response.data.results as Movie[];
      setPopular(responseData);
      setFiltered(responseData);
      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };
  return [popular, filtered, fetchState, setFiltered, getMovie] as const;
};
export default useGetMovies;

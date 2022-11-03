import { useEffect } from "react";
import useGetMovies from "../api/api";
import GenreFilter from "../components/GenreFilter";
import MovieCard from "../components/MovieCard";
import { FetchState } from "../interfaces/FetchState";

const MovieConatiner = () => {
  const [popular, filtered, fetchState, setFiltered, getMovie] = useGetMovies();

  useEffect(() => {
    fetchState === FetchState.DEFAULT;
    getMovie();
  }, []);

  return (
    <div>
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <div>
          <p>Something went wrong...</p>
        </div>
      )}
      {fetchState === FetchState.SUCCESS && (
        <div>
          <GenreFilter
            popular={popular}
            // Not working
            setFiltered={setFiltered}
          />
        </div>
      )}
      {fetchState === FetchState.SUCCESS && (
        <div>
          {popular?.map((movie) => {
            return <MovieCard {...movie} key={movie.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MovieConatiner;

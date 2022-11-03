import { Movie } from "../interfaces/Movie";

const MovieCard = ({ title }: Movie) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;

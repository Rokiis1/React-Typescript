import { useState } from "react";
import { Movie } from "../interfaces/Movie";

type Props = {
  popular: Movie[];
  setFiltered: () => void;
};

const GenreFilter = ({ popular, setFiltered }: Props) => {
  const [activeGenre, setActiveGenre] = useState<Number>(0);
  return (
    <div>
      <button>All</button>
      <button>Comedy</button>
      <button>Action</button>
    </div>
  );
};

export default GenreFilter;

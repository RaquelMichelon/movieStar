import MovieScore from "../MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = { movie: Movie };

function MovieCard({ movie }: Props) {
  return (
    <div>
      <img
        className="moviestar-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="moviestar-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore count={movie.count} score={movie.score} />

        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary moviestar-btn">Rate Movie</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;

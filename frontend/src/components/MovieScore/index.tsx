import MovieStars from "../MovieStars";
import "./styles.css";

type Props = { score: number; count: number };

function MovieScore({ score, count }: Props) {
  return (
    <div className="moviestar-score-container">
      <p className="moviestar-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score} />
      <p className="moviestar-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;

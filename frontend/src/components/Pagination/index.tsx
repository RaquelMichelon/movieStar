import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { MoviePage } from "types/movie";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: Function;
};

function Pagination({ page, onChange }: Props) {
  return (
    <div className="moviestar-pagination-container">
      <div className="moviestar-pagination-box">
        {/* button disabled if page were the first one */}
        <button
          className="moviestar-pagination-button"
          disabled={page.first}
          onClick={() => {
            onChange(page.number - 1);
          }}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        {/* button disabled if page were the last one */}
        <button
          className="moviestar-pagination-button"
          disabled={page.last}
          onClick={() => {
            onChange(page.number + 1);
          }}
        >
          <Arrow className="moviestar-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;

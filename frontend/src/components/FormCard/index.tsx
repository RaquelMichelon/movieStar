import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import "./styles.css";

type Props = { movieId: string };

function FormCard({ movieId }: Props) {
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    // do not send the form if email is invalid
    if (!validateEmail(email)) {
      return;
    }

    // axios request config
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        email: email,
        movieId: movieId,
        score: score,
      },
    };

    axios(config).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="moviestar-form-container">
      <img
        className="moviestar-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="moviestar-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="moviestar-form" onSubmit={handleSubmit}>
          <div className="form-group moviestar-form-group">
            <label htmlFor="email">Provide your email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group moviestar-form-group">
            <label htmlFor="score">Give a grade</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="moviestar-form-btn-container">
            <button type="submit" className="btn btn-primary moviestar-btn">
              Save
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary moviestar-btn mt-3">Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;

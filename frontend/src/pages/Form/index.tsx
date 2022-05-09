import "./styles.css";

function Form() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="moviestar-form-container">
      <img
        className="moviestar-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="moviestar-card-bottom-container">
        <h3>{movie.title}</h3>
        <form className="moviestar-form">
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
        <button className="btn btn-primary moviestar-btn mt-3">Cancel</button>
      </div>
    </div>
  );
}

export default Form;

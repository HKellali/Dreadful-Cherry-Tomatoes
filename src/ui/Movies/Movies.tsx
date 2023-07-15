import MovieCard, { movieData } from "../../components/MovieCard/MovieCard";

import "./Movies.scss";

const Movies = (props: { currentmovies: movieData[] }) => {
  return (
    <div className="movies">
      <div className="wrapper">
        <h2>Popular Movies</h2>
        {props.currentmovies.length > 0 ? (
          <div className="content">
            <div className="grid">
              {props.currentmovies.map((movie, index) => {
                return <MovieCard key={movie.title} movie={movie} />;
              })}
            </div>
          </div>
        ) : (
          <div className="empty">No data</div>
        )}
      </div>
    </div>
  );
};

export default Movies;

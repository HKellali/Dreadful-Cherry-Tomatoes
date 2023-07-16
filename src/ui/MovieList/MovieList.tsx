import MovieCard, { Movie } from "../../components/MovieCard/MovieCard";

import styles from "./MovieList.module.scss";

interface MovieListProps {
  currentmovies: Movie[];
}

const MovieList = ({ currentmovies }: MovieListProps) => {
  return (
    <div className={styles.list}>
      <div className={styles.wrapper}>
        <h2 className={styles.label}>Popular Movies</h2>
        {currentmovies.length > 0 ? (
          <div className={styles.content}>
            <div className={styles.grid}>
              {currentmovies.map((movie) => (
                <MovieCard key={movie.title.replace(" ", "-")} movie={movie} />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.empty}>No movies</div>
        )}
      </div>
    </div>
  );
};

export default MovieList;

import styles from "./MovieCard.module.scss";

export type Movie = {
  title: string;
  description: string;
  images: {
    posterArt: {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
};

interface MovieCardProps {
  movie: Movie;
}

const movieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img
          src={movie.images.posterArt.url}
          alt={movie.title + "movie poster"}
        />
      </div>
      <div className={styles.name}>
        {movie.title}
        <div className={styles.description}>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default movieCard;

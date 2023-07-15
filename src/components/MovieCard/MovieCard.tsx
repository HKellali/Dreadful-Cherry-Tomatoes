import "./MovieCard.scss";

export type movieData = {
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

interface Props {
  movie: movieData;
}

const movieCard = (props: Props) => {
  return (
    <div className="movie-wrapper">
      <div className="movie-image">
        <img src={props.movie.images.posterArt.url} alt="" />
      </div>
      <div className="movie-name">
        {props.movie.title}
        <div className="movie-description">
          <p>{props.movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default movieCard;

import { useEffect, useState } from "react";

import { Movie } from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import MovieList from "../MovieList/MovieList";

const moviesPerPage = 10;
const address =
  "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json";

export default function Movies({ searchInput }: { searchInput?: string }) {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await fetch(address);
      const parsed = await response.json();
      setAllMovies(parsed.entries);
      /* Stop the loading */
      setLoading(false);
    };
    /* Get all the movies */
    getAllMovies();
  }, []);

  useEffect(() => {
    let parsedMovies: Movie[] = [];
    if (searchInput) {
      parsedMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchInput!.toLowerCase())
      );
    } else {
      parsedMovies = allMovies;
    }

    setPageCount(Math.ceil(parsedMovies.length / moviesPerPage));
    if (activePage > pageCount) {
      if (pageCount === 0) {
        setActivePage(1);
      } else {
        setActivePage(pageCount);
      }
    }
    const startOffset = (activePage - 1) * moviesPerPage;
    const endOffset = startOffset + moviesPerPage;
    setMovies(parsedMovies.slice(startOffset, endOffset));
  }, [allMovies, searchInput, activePage, pageCount]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <MovieList currentmovies={movies} />
        <Pagination
          pageCount={pageCount}
          setActivePage={setActivePage}
          activePage={activePage}
        />
      </>
    );
  }
}

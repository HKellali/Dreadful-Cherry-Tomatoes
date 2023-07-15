import { useEffect, useState } from "react";

import { movieData } from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import Movies from "../Movies/Movies";

export default function GetMovies(props: { searchInput?: string }) {
  const moviesPerPage = 10;
  const [movies, setMovies] = useState<movieData[]>([]);
  const [currentmovies, setCurrentmovies] = useState<movieData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState<movieData[]>([]);
  const [loading, setLoading] = useState(true);
  const address =
    "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json";

  useEffect(() => {
    /* Get all the movies */
    (async () => {
      const response = await fetch(address);
      const parsed = await response.json();
      setData(parsed.entries);
      /* Stop the loading */
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (() => {
      /* Filter movies with the search bar input */
      const result = data.filter((movie) =>
        movie.title.toLowerCase().includes(props.searchInput!.toLowerCase())
      );
      if (props.searchInput) {
        setMovies(result);
      } else {
        setMovies(data);
      }
    })();
  }, [props.searchInput, loading]);

  useEffect(() => {
    /* Offset the movies depending on the pagination active page */
    const startOffset = (activePage - 1) * moviesPerPage;
    const endOffset = startOffset + moviesPerPage;
    setCurrentmovies(movies.slice(startOffset, endOffset));
    /* Get the number of pages to display in the pagination */
    setPageCount(Math.ceil(movies.length / moviesPerPage));
  }, [activePage, movies]);

  useEffect(() => {
    /* This makes sur that you don't select a page that doesn't exist when searching for movies */
    if (activePage > pageCount && props.searchInput) {
      setActivePage(pageCount);
    } else if (activePage === 0 && pageCount > 0) {
      setActivePage(1);
    }
  }, [pageCount]);

  if (loading) {
    return (
      <div className="movies">
        <Loading></Loading>
      </div>
    );
  } else {
    return (
      <>
        <Movies currentmovies={currentmovies}></Movies>
        <Pagination
          pageCount={pageCount}
          setActivePage={setActivePage}
          activePage={activePage}
        ></Pagination>
      </>
    );
  }
}

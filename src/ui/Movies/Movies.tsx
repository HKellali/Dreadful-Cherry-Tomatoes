import { useEffect, useState } from "react";

import MovieCard, { movieData } from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

import "./Movies.scss";

export default function Movies(props: { searchInput?: string }) {
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
    (async () => {
      const response = await fetch(address);
      const parsed = await response.json();
      setData(parsed.entries);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    (() => {
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
    const startOffset = (activePage - 1) * moviesPerPage;
    const endOffset = startOffset + moviesPerPage;
    setCurrentmovies(movies.slice(startOffset, endOffset));
    setPageCount(Math.ceil(movies.length / moviesPerPage));
  }, [activePage, movies]);

  useEffect(() => {
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
        <div className="movies">
          <div className="wrapper">
            <h2>Popular Movies</h2>
            {movies.length > 0 ? (
              <div className="content">
                <div className="grid">
                  {currentmovies.map((movie, index) => {
                    return <MovieCard key={movie.title} movie={movie} />;
                  })}
                </div>
              </div>
            ) : (
              <div className="empty">No data</div>
            )}
          </div>
        </div>
        <Pagination
          pageCount={pageCount}
          setActivePage={setActivePage}
          activePage={activePage}
        ></Pagination>
      </>
    );
  }
}

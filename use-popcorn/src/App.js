// import data from "./data/data";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import ListBox from "./components/ListBox/ListBox";
import Results from "./components/Results/Results";
import MovieList from "./components/MovieList/MovieList";
import WatchedSummary from "./components/WatchedSummary/WatchedSummary";
import WatchedList from "./components/WatchedList/WatchedList";
import Search from "./components/Search/Search";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";

// const { tempMovieData, tempWatchedData } = data;
const KEY = "938a0185";
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("interstellar");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);

  /*  

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=interstellar`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);

  */
  function handleSelectMovie(id) {
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseMovie() {
    setSelectedID(null);
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie isn't found");

          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Header>
        <Search query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </Header>

      <main className="main">
        <ListBox>
          {/* {isLoading ? (
            <p className="loader">Loading...</p>
          ) : (
            <MovieList movies={movies} />
          )} */}
          {isLoading && <p className="loader">Loading...</p>}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && (
            <p className="error">
              <span>🧬</span>
              {error}
            </p>
          )}
        </ListBox>
        <ListBox>
          {selectedID ? (
            <SelectedMovie
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} average={average} />
              <WatchedList watched={watched} />
            </>
          )}
        </ListBox>
      </main>
    </>
  );
}

export default App;

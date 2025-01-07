import data from "./data/data";
import { useState } from "react";

import Header from "./components/Header/Header";
import ListBox from "./components/ListBox/ListBox";
import Results from "./components/Results/Results";
import MovieList from "./components/MovieList/MovieList";
import WatchedSummary from "./components/WatchedSummary/WatchedSummary";
import WatchedList from "./components/WatchedList/WatchedList";

const { tempMovieData, tempWatchedData } = data;

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <Header>
        <Results movies={movies} />
      </Header>

      <main className="main">
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <ListBox>
          <WatchedSummary watched={watched} average={average} />
          <WatchedList watched={watched} />
        </ListBox>
      </main>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Movie from "./Movie";
import Search from "./Search";
function App() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (url) {
      (async () => {
        const res = await fetch(url);

        if (!res.ok) {
          window.alert("Something went wrong!");
          return;
        }
        const resData = await res.json();

        if (resData.Error) {
          const error = resData.Error;
          window.alert(error);
          return;
        }
        setMovie(resData);
        setUrl("");
      })();
    }
  }, [url]);

  function onChangeUrl() {
    if (input === "") {
      window.alert("Enter a movie name!");
      return;
    }
    setUrl(`http://www.omdbapi.com/?t=${input}&apikey=3a96370e`);
  }

  return (
    <main className={styles.main}>
      <Search input={input} setInput={setInput} onChangeUrl={onChangeUrl} />
      {movie.Title ? (
        <Movie movie={movie} />
      ) : (
        <p className={styles.message}>
          Find information about your favourite movie!
        </p>
      )}
    </main>
  );
}

export default App;

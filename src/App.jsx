import styles from "./App.module.css";
import Movie from "./Movie";
function App() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.search}>
          <input type="text" />
          <button>Search Movie</button>
        </div>
        <Movie />
      </div>
    </main>
  );
}

export default App;

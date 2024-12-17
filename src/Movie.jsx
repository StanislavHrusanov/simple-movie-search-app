import styles from "./Movie.module.css";

export default function Movie({ movie }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className={styles.info}>
        <h2>{movie.Title}</h2>
        <p>
          Year:<span>{movie.Year}</span>
        </p>
        <p>
          Runtime:<span>{movie.Runtime}</span>
        </p>
        <p>
          Genre:<span>{movie.Genre}</span>
        </p>
        <p>
          Director:<span>{movie.Director}</span>
        </p>
        <p>
          Actors:<span>{movie.Actors}</span>
        </p>
        <p>
          Plot:<span>{movie.Plot}</span>
        </p>
        <p>
          Imdb Rating:<span>{movie.imdbRating}</span>
        </p>
      </div>
    </div>
  );
}

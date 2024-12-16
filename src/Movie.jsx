import styles from "./Movie.module.css";

export default function Movie() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h2>Gladiator</h2>
        <p>
          Year:<span>2000</span>
        </p>
        <p>
          Runtime:<span>120 min</span>
        </p>
        <p>
          Genre:<span></span>
        </p>
        <p>
          Director:<span></span>
        </p>
        <p>
          Actors:<span></span>
        </p>
        <p>
          Plot:<span></span>
        </p>
        <p>
          Imdb Rating:<span></span>
        </p>
      </div>
    </div>
  );
}

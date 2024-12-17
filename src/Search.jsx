import styles from "./Search.module.css";

export default function Search({ input, setInput, onChangeUrl }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={onChangeUrl}>Search Movie</button>
    </div>
  );
}

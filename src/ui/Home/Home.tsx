import GetMovies from "../GetMovies/GetMovies";

import styles from "./Home.module.css";

export function Home(props: { searchInput?: string }) {
  return (
    <div className={styles.home}>
      <GetMovies searchInput={props.searchInput} />
    </div>
  );
}

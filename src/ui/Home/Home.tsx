import Movies from "../Movies/Movies";

import styles from "./Home.module.css";

export function Home(props: { searchInput?: string }) {
  return (
    <div className={styles.home}>
      <Movies searchInput={props.searchInput} />
    </div>
  );
}

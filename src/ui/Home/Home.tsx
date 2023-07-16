import Movies from "../Movies/Movies";

import styles from "./Home.module.css";

export function Home({ searchInput }: { searchInput?: string }) {
  return (
    <div className={styles.home}>
      <Movies searchInput={searchInput} />
    </div>
  );
}

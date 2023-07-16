import logo from "../../resources/dreadful cherry tomatoes/logo/dreadful cherry tomatoes.png";
import search from "../../resources/dreadful cherry tomatoes/icon/search@2x.png";

import styles from "./Header.module.scss";

export function Header({ setSearchInput }: { setSearchInput?: any }) {
  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <img
          src={logo}
          className={styles.logo}
          alt="Dreadful Cherry Tomatoes logo"
        />
      </div>
      <div className={styles.down}>
        <i>
          <img src={search} alt="search bar magnifying glass" />
        </i>
        <input type="text" onChange={handleChange} />
      </div>
    </header>
  );
}

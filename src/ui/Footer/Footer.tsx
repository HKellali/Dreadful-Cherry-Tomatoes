import logo from "../../resources/dreadful cherry tomatoes/logo/dreadful cherry tomatoes.png";
import googlePlay from "../../resources/dreadful cherry tomatoes/button/google play@2x.png";
import appStore from "../../resources/dreadful cherry tomatoes/button/app store@2x.png";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.up}>
        <img className={styles.logo} src={logo} alt="" />
      </div>
      <div className={styles.middle}>
        <div className={styles.left}>
          <img className={styles.appStore} src={appStore} alt="" />
        </div>
        <div className={styles.right}>
          <img className={styles.googlePlay} src={googlePlay} alt="" />
        </div>
      </div>
      <div className={styles.down}>
        <p>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
      </div>
    </footer>
  );
}

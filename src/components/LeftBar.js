import React from "react";
import styles from "./LeftBar.module.css";

export default function LeftBar() {
  return (
    <div className={`${styles.navContainer} col-lg-2 col-8`}>
      <nav className={styles.nav + "nav row"}>
        <p
          className={`
          ${styles.navLogo}
          ${styles.navItem} ps-lg-5 pt-3 col-lg-12`}
        >
          로고
        </p>
        <p className={`${styles.navItem} ps-lg-5 ps-3 pt-3 col-lg-12 col-3`}>
          홈
        </p>{" "}
        <p className={`${styles.navItem} ps-lg-5 ps-3 pt-3 col-lg-12 col-3`}>
          검색
        </p>{" "}
        <p className={`${styles.navItem} ps-lg-5 ps-3 pt-3 col-lg-12 col-3`}>
          좋아요
        </p>{" "}
        <p className={`${styles.navItem} ps-lg-5 ps-3 pt-3 col-lg-12 col-3`}>
          프로필
        </p>
      </nav>
    </div>
  );
}

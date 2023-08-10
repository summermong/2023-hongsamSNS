import React from "react";
import styles from "./LeftBar.module.css";
import { useNavigate } from "react-router-dom";

export default function LeftBar() {
  const navigator = useNavigate();

  return (
    <div className={`${styles.navContainer} col-lg-2 col-7`}>
      <nav className={styles.nav + "nav row align-items-center"}>
        <p
          className={`
          ${styles.navLogo}
          ${styles.navItem} ps-lg-5 pt-3 col-lg-12 col-3`}
          onClick={() => {
            navigator("/");
          }}
        >
          로고
        </p>

        <p
          className={`${styles.navItem} ps-lg-5 pt-lg-5 pt-3 col-lg-12 col-1`}
          onClick={() => {
            navigator("/");
          }}
        >
          홈
        </p>
        <p
          className={`${styles.navItem} ps-lg-5 pt-lg-5 pt-3 col-lg-12 col-1`}
          onClick={() => {
            navigator("/serch");
          }}
        >
          검색
        </p>
        <p
          className={`${styles.navItem} ps-lg-5 pt-lg-5 pt-3 col-lg-12 col-1`}
          onClick={() => {
            navigator("/like");
          }}
        >
          좋아요
        </p>
        <p
          className={`${styles.navItem} ps-lg-5 pt-lg-5 pt-3 col-lg-12 col-1`}
          onClick={() => {
            navigator("/profile");
          }}
        >
          프로필
        </p>
      </nav>
    </div>
  );
}

import React from "react";
import styles from "./RightBar.module.css";

export default function RightBar() {
  return (
    <div className={`${styles.profileContainer} row col-lg-2 col-8`}>
      <p className="fs-5 col-12">반가워요 침착맨님!</p>
      <div className="profile-img-box col-12">
        <img
          className="profile-img rounded-circle w-100 h-100"
          src="https://m.segye.com/content/image/2022/12/28/20221228504589.jpg"
          alt=""
        />
      </div>
      <div className="p-4 col-12">
        <button type="button" className="main-back-color fs-5">
          로그아웃
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Post.module.css";

export default function Post() {
  return (
    <div className={`${styles.postItem} border mt-3 w-100`}>
      <div
        className={`${styles.postHeader} d-flex align-items-center main-color`}
      >
        <div className={`${styles.postHeaderImg} profile-img-box m-2`}>
          <img
            className="profile-img rounded-circle w-100 h-100"
            src="https://i.pinimg.com/564x/a5/dc/86/a5dc865d7735cdb59adea9ba1c5a3a08.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.postHeaderNama} ms-3`}>호머제이심슨</div>
      </div>
      <div className="postBody">
        <img
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/8A64/production/_121882453_e22f709d-613a-4872-b532-3d5667aa6860.jpg"
          alt=""
          className="postBodyImg w-100"
        />
      </div>
      <div className={`${styles.postFooter} d-flex flex-column flex-lg-row`}>
        <p className={`${styles.postFooterNickName} m-2 p-3`}>닉네임</p>
        <p className={`${styles.postFooterTitle} m-2 p-3`}>제목</p>
        <p className={`${styles.postFooterLike} m-2 p-3`}>좋아요</p>
      </div>
    </div>
  );
}

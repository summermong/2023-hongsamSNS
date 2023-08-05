import React from "react";
import "./RightBar.css";

export default function RightBar() {
  return (
    <div className="w-20 h-100 border-start d-flex flex-column align-items-center">
      <p className="fs-4 m-5">반가워요 침착맨님!</p>
      <div className="profile-img-box">
        <img
          className="profile-img rounded-circle w-100 h-100"
          src="https://m.segye.com/content/image/2022/12/28/20221228504589.jpg"
          alt=""
        />
      </div>
      <div className="p-4">
        <button type="button" class="main-back-color fs-5">
          로그아웃
        </button>
      </div>
      <div className="write-btn rounded-circle border d-flex align-items-center justify-content-center">
        <svg
          width="60%"
          height="60%"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
      </div>
    </div>
  );
}

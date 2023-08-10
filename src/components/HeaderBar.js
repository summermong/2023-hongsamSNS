import React from "react";
import "./HeaderBar.css";

export default function HeaderBar() {
  return (
    <div
      className={`header-container border rounded-3 d-flex align-items-center`}
    >
      <div className="profile-img-box ms-3">
        <img
          className="rounded-circle w-100 h-100"
          src="https://m.segye.com/content/image/2022/12/28/20221228504589.jpg"
          alt=""
        />
      </div>
      <div className="profile-img-box ms-3">
        <img
          className="rounded-circle w-100 h-100"
          src="https://file.mk.co.kr/meet/neds/2020/08/image_readtop_2020_810399_15967667504308932.jpg"
          alt=""
        />
      </div>
      <div className="profile-img-box ms-3">
        <img
          className="rounded-circle w-100 h-100"
          src="https://img.seoul.co.kr/img/upload/2022/11/13/SSI_20221113151118_O2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

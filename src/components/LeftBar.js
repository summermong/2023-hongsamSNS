import React from "react";
import "./LeftBar.css";

export default function LeftBar() {
  return (
    <div className="h-100 w-20 border-end">
      <nav class="nav flex-column">
        <h1 class="navbar-brand fs-1 ps-5 pt-5 mb-4">로고</h1>
        <p class="fs-2 ps-5 pt-3">홈</p>
        <p class="fs-2 ps-5 pt-3">검색</p>
        <p class="fs-2 ps-5 pt-3">좋아요</p>
        <p class="fs-2 ps-5 pt-3">프로필</p>
      </nav>
    </div>
  );
}

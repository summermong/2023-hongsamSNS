import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MoreIcon({
  deleteModalBtn,
  setDeleteModalBtn,
  btnToggle,
}) {
  const navigator = useNavigate();
  return (
    <div className="position-absolute end-0 bg-light d-flex flex-column">
      <p
        className="pe-4 ps-4 pt-1 pb-1 m-0 border-bottom btn"
        onClick={() => {
          navigator("/update");
        }}
      >
        수정하기
      </p>
      <p
        className="pe-4 ps-4 pt-1 pb-1 m-0 btn"
        onClick={() => {
          btnToggle(deleteModalBtn, setDeleteModalBtn);
        }}
      >
        삭제하기
      </p>
    </div>
  );
}

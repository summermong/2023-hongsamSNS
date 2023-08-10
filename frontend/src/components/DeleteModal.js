import React from "react";

export default function DeleteModal({ setDeleteModalBtn, deleteItem, itemId }) {
  return (
    <div className="delete-modal-conainer w-75 d-flex flex-column align-items-center justify-content-center rounded-2 position-absolute top-50 start-50 translate-middle">
      <div className="modal-text p-3">
        <p>정말로 삭제하시겠습니까?</p>
      </div>
      <div className="modal-btn-box d-flex p-3">
        <button
          className="modal-btn btn btn-light d-flex align-items-center justify-content-center"
          onClick={() => {
            deleteItem(itemId);
            setDeleteModalBtn(false);
          }}
        >
          네
        </button>
        <button
          className="modal-btn btn btn-danger ms-2 d-flex align-items-center justify-content-center"
          onClick={() => {
            setDeleteModalBtn(false);
          }}
        >
          아니오
        </button>
      </div>
    </div>
  );
}

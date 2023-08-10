import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import DeleteModal from "./DeleteModal";
import MoreIcon from "./MoreIcon";

export default function Post({
  el,
  i,
  deleteItem,
  setUpdatePageBtn,
  updatePageBtn,
}) {
  let [moreIconBtn, setMoreIconBtn] = useState(false);
  let [deleteModalBtn, setDeleteModalBtn] = useState(false);
  useEffect(() => {
    setMoreIconBtn(false);
  }, [deleteModalBtn]);

  const btnToggle = (btn, setBtn) => {
    if (btn === false) {
      setBtn(true);
    }
    if (btn === true) {
      setBtn(false);
    }
  };
  return (
    <div className={`${styles.postItem} border mt-3 w-100 position-relative`}>
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
        <div className={`${styles.postHeaderNama} ms-3`}>
          {el["displayName"]}
        </div>
        <div
          className={`${styles.moreIcon} p-2`}
          onClick={() => {
            btnToggle(moreIconBtn, setMoreIconBtn);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>

      <div className="postBody position-relative">
        {moreIconBtn ? (
          <MoreIcon
            id={el["id"]}
            deleteModalBtn={deleteModalBtn}
            setDeleteModalBtn={setDeleteModalBtn}
            btnToggle={btnToggle}
            setUpdatePageBtn={setUpdatePageBtn}
            updatePageBtn={updatePageBtn}
          />
        ) : null}
        <img
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/8A64/production/_121882453_e22f709d-613a-4872-b532-3d5667aa6860.jpg"
          alt=""
          className="postBodyImg w-100"
        />
      </div>
      <div className={`${styles.postFooter} d-flex flex-column flex-lg-row`}>
        <p className={`${styles.postFooterNickName} m-2 p-1 p-lg-3`}>
          {el["displayName"]}
        </p>
        <p className={`${styles.postFooterTitle} m-2 p-1 p-lg-3`}>
          {el["title"]}
        </p>
        <p className={`${styles.postFooterLike} m-2 p-1 p-lg-3`}>좋아요</p>
      </div>
      {deleteModalBtn ? (
        <DeleteModal
          setDeleteModalBtn={setDeleteModalBtn}
          deleteItem={deleteItem}
          itemId={el["id"]}
        ></DeleteModal>
      ) : null}
    </div>
  );
}

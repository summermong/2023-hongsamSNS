import React, { useState } from "react";
import Post from "../components/Post";
import styles from "./items.module.css";

export default function Items({ items, setItems, deleteItem }) {
  let [updatePageBtn, setUpdatePageBtn] = useState(false);
  return (
    <div
      className={`${styles.itemsContiner} d-flex flex-column justify-content-center align-items-center`}
    >
      {items.map((el, i) => {
        return (
          <Post
            el={el}
            i={i}
            key={i}
            deleteItem={deleteItem}
            setUpdatePageBtn={setUpdatePageBtn}
            updatePageBtn={updatePageBtn}
          />
        );
      })}
    </div>
  );
}

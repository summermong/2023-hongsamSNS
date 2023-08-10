import React, { useState } from "react";

import HeaderBar from "../components/HeaderBar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import { useParams } from "react-router-dom";

export default function UpdatePage({ items, updateItem, updateText }) {
  const { id } = useParams();

  const itemIndex = updateText(id);
  console.log(`id : ${id}`);
  console.log(`itemIndex : ${itemIndex}`);

  const [title, setTitle] = useState(items[itemIndex]["title"]);
  const [content, setContent] = useState(items[itemIndex]["content"]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row justify-content-center">
      <LeftBar></LeftBar>
      <div
        className={`centerSection col-8 d-flex flex-column align-items-center`}
      >
        <HeaderBar></HeaderBar>
        <div className="container w-75 mt-3">
          <h2>글 수정하기</h2>
          <form className="row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              value={content}
              rows="10"
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={() => {
                updateItem(title, content, id, "/");
              }}
            >
              글쓰기
            </button>
          </form>
        </div>
      </div>
      <RightBar></RightBar>
    </div>
  );
}

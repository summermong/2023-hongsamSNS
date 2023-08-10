import React, { useState } from "react";

export default function Create({ createItem }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container w-75 mt-3">
      <h2>새 글쓰기</h2>
      <form className="row" onSubmit={handleSubmit}>
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="content">내용:</label>
        <textarea
          id="content"
          value={content}
          rows="10"
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          onClick={() => {
            createItem(title, content, "/");
          }}
        >
          글쓰기
        </button>
      </form>
    </div>
  );
}

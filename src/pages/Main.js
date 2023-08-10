import React from "react";
import { Link } from "react-router-dom";

import HeaderBar from "../components/HeaderBar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Items from "./Items";

export default function Main({ items, setItems, deleteItem }) {
  return (
    <div className="row justify-content-center">
      <LeftBar></LeftBar>
      <div
        className={`centerSection col-8 d-flex flex-column align-items-center`}
      >
        <HeaderBar></HeaderBar>
        <Items
          items={items}
          setItems={setItems}
          deleteItem={deleteItem}
        ></Items>
      </div>
      <RightBar></RightBar>
      <Link to="/create" style={{ textDecoration: "none", color: "black" }}>
        <div>
          <div className="write-btn rounded-circle border d-flex align-items-center justify-content-center">
            <svg
              width="60%"
              height="60%"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

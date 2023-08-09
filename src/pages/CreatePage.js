import React from "react";

import HeaderBar from "../components/HeaderBar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Create from "../components/Create";

export default function CreatePage({ createItem }) {
  return (
    <div className="row justify-content-center">
      <LeftBar></LeftBar>
      <div
        className={`centerSection col-8 d-flex flex-column align-items-center`}
      >
        <HeaderBar></HeaderBar>
        <Create createItem={createItem}></Create>
      </div>
      <RightBar></RightBar>
    </div>
  );
}

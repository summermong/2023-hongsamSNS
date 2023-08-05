import React from "react";
import HeaderBar from "../components/HeaderBar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

export default function Main() {
  return (
    <>
      <div className="d-flex justify-content-between vh-100 wh-100">
        <LeftBar></LeftBar>
        <HeaderBar></HeaderBar>
        <RightBar></RightBar>
      </div>
    </>
  );
}

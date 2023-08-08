import React from "react";
import HeaderBar from "../components/HeaderBar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Items from "./Items";
import styles from "./Main.module.css";
import { Link, Route, Routes } from "react-router-dom";
import Create from "../components/Create";

export default function Main() {
  return (
    <div className="row justify-content-center">
      <LeftBar></LeftBar>
      <div
        className={`centerSection col-8 d-flex flex-column align-items-center`}
      >
        <HeaderBar></HeaderBar>
        <Create></Create>
      </div>
      <RightBar></RightBar>
    </div>
  );
}

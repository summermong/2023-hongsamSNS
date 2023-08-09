import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import CreatePage from "./pages/CreatePage";
import { useState } from "react";
import Serch from "./pages/Serch";

function App() {
  const [items, setItems] = useState([
    {
      itemId: 0,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "호날두",
      title: "호우!",
      content: "나는야호날두",
    },
    {
      itemId: 1,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "호머제이심슨",
      title: "에에!",
      content: "우리 멋진 가족!",
    },
    {
      itemId: 2,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "침착맨",
      title: "왕날편좋아!",
      content: "나는야 침착맨",
    },
    {
      itemId: 3,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "또띠",
      title: "멍멍!",
      content: "왈왈",
    },
  ]);
  return (
    <>
      <Routes>
        <Route
          path="/Login"
          element={
            <>
              <Login></Login>
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <SignUp></SignUp>
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Main items={items} setItems={setItems}></Main>
            </>
          }
        ></Route>
        <Route
          path="/create"
          element={
            <>
              <CreatePage items={items} setItems={setItems}></CreatePage>
            </>
          }
        ></Route>
        <Route
          path="/serch"
          element={
            <>
              <Serch></Serch>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

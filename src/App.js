import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import CreatePage from "./pages/CreatePage";
import Serch from "./pages/Serch";
import Profile from "./pages/Profile";
import UpdatePage from "./pages/UpdatePage";

function App() {
  const [items, setItems] = useState([
    {
      itemId: 0,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "호날두",
      title: "0번글!",
      content: "나는야호날두",
    },
    {
      itemId: 1,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "호머제이심슨",
      title: "1번글!",
      content: "우리 멋진 가족!",
    },
    {
      itemId: 2,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "침착맨",
      title: "2번글!",
      content: "나는야 침착맨",
    },
    {
      itemId: 3,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "또띠",
      title: "3번글!",
      content: "왈왈",
    },
    {
      itemId: 4,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "또띠",
      title: "4번길!",
      content: "왈왈",
    },
    {
      itemId: 5,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "또띠",
      title: "5번글!",
      content: "왈왈",
    },
  ]);
  const navigator = useNavigate();

  const createItem = (title, content, url) => {
    let copyItems = [...items];
    let newItem = {
      itemId: 3,
      userId: 0,
      email: "qwzx16@naver.com",
      displayName: "또띠",
      title: title,
      content: content,
    };
    copyItems = [...copyItems, newItem];
    setItems(copyItems);
    navigator(url);
  };
  const deleteItem = (id) => {
    let copyItems = [...items];
    const curIndex = copyItems.findIndex((el) => {
      return el["itemId"] == id;
    });
    copyItems.splice(curIndex, 1);
    setItems(copyItems);
  };
  const updateItem = (title, content, id, url) => {
    let copyItems = [...items];
    for (let i = 0; i < copyItems.length; i++) {
      if (copyItems[i]["itemId"] === +id) {
        copyItems[i]["title"] = title;
        copyItems[i]["content"] = content;
        break;
      }
    }
    setItems(copyItems);
    navigator(url);
  };
  const updateText = (id) => {
    let copyItems = [...items];
    const itemIndex = copyItems.findIndex((el) => {
      return el["itemId"] === +id;
    });
    return itemIndex;
  };
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
              <Main
                items={items}
                setItems={setItems}
                deleteItem={deleteItem}
              ></Main>
            </>
          }
        ></Route>
        <Route
          path="/create"
          element={
            <>
              <CreatePage createItem={createItem}></CreatePage>
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
        <Route
          path="/profile"
          element={
            <>
              <Profile></Profile>
            </>
          }
        ></Route>
        <Route
          path="/update/:itemId"
          element={
            <>
              <UpdatePage
                items={items}
                setItems={setItems}
                updateItem={updateItem}
                updateText={updateText}
              />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

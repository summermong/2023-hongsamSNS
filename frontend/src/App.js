import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Main from "./pages/Main";
import CreatePage from "./pages/CreatePage";
import Serch from "./pages/Serch";
import Profile from "./pages/Profile";
import UpdatePage from "./pages/UpdatePage";
import Login from "./pages/Login";
import Join from "./pages/Join";
import axios from "axios";

function App() {
  // 로그인 세션 여부에 따라 false (로그인) & true (홈)
  const [isLogin, setIsLogin] = useState(false);
  const [memberId, setMemberId] = useState();
  const [displayName, setDisplayName] = useState();

  console.log("memberId : ", memberId);

  const navigator = useNavigate();
  // 로그인 세션 확인
  useEffect(() => {
    axios({
      method: "get",
      url: "https://4c32-2406-5900-103c-d815-c8b5-cef9-8bb-7e8.ngrok-free.app/api/home",
      withCredentials: true, // 이 옵션을 설정하여 쿠키와 인증 정보를 함께 보냅니다.
    })
      .then((response) => {
        console.log(response.data);
        const isLogin = response.data.loginCheck;
        const memberId = response.data.memberId;
        const displayName = response.data.displayName;
        setIsLogin(isLogin);
        setMemberId(memberId);
        setDisplayName(displayName);
      })
      .catch((error) => {
        console.error("황윤 에러:", error);
      });
  }, []);

  const [items, setItems] = useState([]);

  const fecthItems = async () => {
    await axios
      .get(
        "https://4c32-2406-5900-103c-d815-c8b5-cef9-8bb-7e8.ngrok-free.app/board",
        { withCredentials: true }
      )
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fecthItems();
  }, []);

  const createItem = async (title, content, url) => {
    await axios
      .post(
        `https://4c32-2406-5900-103c-d815-c8b5-cef9-8bb-7e8.ngrok-free.app/board/${memberId}`,
        {
          title: title,
          content: content,
        }
      )
      .then((res) => {
        console.log(res);
        fecthItems();
        navigator(url);
      })
      .catch((err) => {
        console.log("요청실패");
        console.log(err);
        console.log(title, content);
      });
  };

  const deleteItem = async (itemId) => {
    console.log("memberId : ", memberId);
    console.log("boardId : ", itemId);
    await axios
      .delete(
        `https://4c32-2406-5900-103c-d815-c8b5-cef9-8bb-7e8.ngrok-free.app/board/${itemId}`,
        {
          data: { memberId: memberId },
        }
      )
      .then((response) => {
        console.log("res : ", response.data.data);
        alert(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    fecthItems();
  };

  const updateItem = async (title, content, boardId, url) => {
    console.log("boardId : ", boardId);
    console.log("memberId : ", memberId);
    await axios
      .patch(
        `https://4c32-2406-5900-103c-d815-c8b5-cef9-8bb-7e8.ngrok-free.app/board/${boardId}`,
        {
          withCredentials: true,
          memberId: memberId,
          title: title,
          content: content,
        }
      )
      .then((res) => {
        alert(res.data.data);
        console.log(res.data);
        navigator(url);
        fecthItems();
      })
      .catch((err) => {
        console.log(memberId);
        console.log(err);
      });
  };

  const updateText = (id) => {
    let copyItems = [...items];
    const itemIndex = copyItems.findIndex((el) => {
      return el["boardId"] === +id;
    });
    return itemIndex;
  };

  return (
    <div className="App">
      <Routes>
        {isLogin ? (
          <Route
            path="/"
            element={
              <>
                <Main
                  items={items}
                  setItems={setItems}
                  deleteItem={deleteItem}
                  displayName={displayName}
                ></Main>
              </>
            }
          ></Route>
        ) : (
          <Route
            path="/"
            element={
              //userInfo를 받아오기 위해 setState 전달 isLoin을 true로 전환해 주는 것과 같은 원리
              <Login
                setIsLogin={setIsLogin}
                setMemberId={setMemberId}
                setDisplayName={setDisplayName}
              />
            }
          />
        )}
        <Route path="/join" element={<Join />} />
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
          path="/update/:boardId"
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
    </div>
  );
}

export default App;

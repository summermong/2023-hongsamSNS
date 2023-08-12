import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Main from './pages/Main';
import CreatePage from './pages/CreatePage';
import Serch from './pages/Serch';
import Profile from './pages/Profile';
import UpdatePage from './pages/UpdatePage';
import Login from './pages/Login';
import Join from './pages/Join';
import axios from 'axios';

function App() {
  // 로그인 세션 여부에 따라 false (로그인) & true (홈)
  const [isLogin, setIsLogin] = useState(false);
  const navigator = useNavigate();
  // 로그인 세션 확인
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://4c32-2406-5900-103c-d815-c8b5-cef9-8bb-7e8.ngrok-free.app/api/home',
      withCredentials: true, // 이 옵션을 설정하여 쿠키와 인증 정보를 함께 보냅니다.
    })
      .then((response) => {
        console.log(response);
        const data = response.data;
        setIsLogin(data);
      })
      .catch((error) => {
        console.error('황윤 에러:', error);
      });
  }, []);

  const [items, setItems] = useState([]);

  const fecthItems = async () => {
    await axios
      .get('http://localhost:4000/item')
      .then((res) => {
        setItems(res.data);
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
      .post('http://localhost:4000/item', {
        boardId: 0,
        title: title,
        content: content,
        memberId: 0,
        displayName: '또띠',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('요청실패');
        console.log(err);
        console.log(title, content);
      });
    navigator(url);
    fecthItems();
  };

  const deleteItem = (id) => {
    axios
      .get('http://localhost:4000/item')
      .then((res) => {
        console.log('delete : ', res.data);
        console.log('성공');
      })
      .catch((err) => {
        console.log(err);
      });
    axios.delete(`http://localhost:4000/item/${id}`);
    fecthItems();
  };

  const updateItem = async (title, content, id, url) => {
    await axios.patch(`http://localhost:4000/item/${id}`, {
      boardId: 0,
      title: title,
      content: content,
      memberId: 0,
      displayName: '또띠',
    });
    navigator(url);
    fecthItems();
  };

  const updateText = (id) => {
    let copyItems = [...items];
    const itemIndex = copyItems.findIndex((el) => {
      return el['id'] === +id;
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
                ></Main>
              </>
            }
          ></Route>
        ) : (
          <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
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
          path="/update/:id"
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

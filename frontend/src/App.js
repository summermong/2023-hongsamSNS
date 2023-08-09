import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './api/Login';
import Join from './api/Join';
import Home from './api/Home';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {isLogin ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
          )}
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

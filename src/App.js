import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

function App() {
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
              <Main></Main>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

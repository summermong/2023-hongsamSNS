import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import CreatePage from "./pages/CreatePage";

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
        <Route
          path="/create"
          element={
            <>
              <CreatePage></CreatePage>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Create from "./components/Create";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import HeaderBar from "./components/HeaderBar";

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
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          path="/create"
          element={
            <section className="row">
              <article className="col-lg-2 col-md-12">
                <LeftBar></LeftBar>
              </article>
              <article className="centerSection col-lg-8 col-md-12">
                <HeaderBar></HeaderBar>
                <Create></Create>
              </article>
              <article className="col-lg-2 col-md-12">
                <RightBar></RightBar>
              </article>
            </section>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

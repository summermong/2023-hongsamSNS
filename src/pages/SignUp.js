import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <div className="container p-5">
        <h1 className="text-center">로고</h1>
      </div>
      <div className="container">
        <form className="col-6 m-auto form-min-w">
          <label for="exampleInputEmail1" class="form-label">
            이메일
          </label>
          <div className="row mb-3">
            <div className="col-9">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="col-3">
              <button type="submit" class="btn btn-primary">
                중복확인
              </button>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputEmail1" class="form-label">
              닉네임
            </label>
            <div className="col-9">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputEmail1" class="form-label">
              비밀번호
            </label>
            <div className="col-9">
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputEmail1" class="form-label">
              비밀번호 확인
            </label>
            <div className="col-9">
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
          </div>
          <button type="submit" class="mb-5 mt-5 col-9 btn btn-primary">
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}

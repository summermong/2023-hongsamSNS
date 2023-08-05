import React from "react";

export default function Login() {
  return (
    <div>
      <div className="container p-5">
        <h1 className="text-center">로고</h1>
      </div>
      <div className="container">
        <form className="col-6 m-auto">
          <label for="exampleInputEmail1" class="form-label">
            이메일
          </label>
          <div className="row mb-3">
            <div className="col-12">
              <input
                type="email"
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
            <div className="col-12">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
          </div>

          <button type="submit" class="mb-5 mt-5 col-12 btn btn-primary">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

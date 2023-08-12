import React from 'react';
import styles from './RightBar.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RightBar() {
  const navigator = useNavigate();

  const handleLogOut = () => {
    axios
      .get(
        'https://4c32-2406-5900-103c-d815-c8b5-cef9-8bb-7e8.ngrok-free.app/member/logout',
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (response.data) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div
      className={`${styles.rightBarContainer} row col-lg-2 col-3 d-none d-md-flex`}
    >
      <div
        className={`${styles.profileContainer} w-md-100 d-flex flex-column mt-3 mt-lg-5`}
      >
        <div className={`${styles.profileText}fs-5 col-12 text-center`}>
          <p>반가워요 침착맨님!</p>
        </div>
        <div
          className="mt-lg-5 col-12 d-flex justify-content-center align-items-center"
          onClick={() => {
            navigator('/profile');
          }}
        >
          <div className="profile-img-box">
            <img
              className="rounded-circle w-100 h-100"
              src="https://m.segye.com/content/image/2022/12/28/20221228504589.jpg"
              alt="프로필"
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center mt-1 mt-lg-5">
          <button
            type="button"
            className="main-back-color fs-5"
            onClick={handleLogOut}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

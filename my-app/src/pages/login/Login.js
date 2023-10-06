import React from "react";
import { Link } from "react-router-dom";
import '../login/style/Login.css';


const Login = () => {
  return (
    <div class="hihi">
      <form class="px-4 py-3">
        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label">
            이메일
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div class="mb-3">
          <label for="exampleDropdownFormPassword1" class="form-label">
            비밀번호
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="dropdownCheck"
            />
            <label class="form-check-label" for="dropdownCheck">
              로그인 상태 유지하기
            </label>
          </div>
        </div>
        <div class="hihi">
          <button
            type="submit"
            class="btn btn-primary"
            style={{ backgroundColor: "#970000", color: "white", border: 0 }}
          >
            로그인하기
          </button>
          <br></br>
        
        홈페이지 이용이 처음이신가요?
        <br></br><br></br>
        <Link to="/login/SignUp">
          <button
            type="submit"
            class="btn btn-primary"
            style={{ backgroundColor: "#970000", color: "white", border: 0 }}
          >
            지금 회원가입하기
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

// // 예제: fetch를 사용한 POST 요청
// fetch('/api/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ email: 'user@example.com', password: 'password' }),
// })
//   .then(response => response.json())
//   .then(data => {
//     // 서버 응답에 대한 처리
//   })
//   .catch(error => {
//     // 오류 처리
//   });
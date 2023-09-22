import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form class="px-4 py-3" >
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
        <div>
          <button type="submit" class="btn btn-primary">
            로그인하기
          </button>
        </div>
        홈페이지 이용이 처음이신가요?
        <Link to="/SignUp">
        <button type="submit" class="btn btn-primary">
          회원가입
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;

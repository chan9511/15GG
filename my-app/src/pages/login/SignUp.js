import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../login/style/SignUp.css';
import {signUpApi} from "../../api";



  const SignUp = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordCheck, setUserPasswordCheck] = useState("");
    const navigate = useNavigate();
    
    const SignUpHandler = async (e) => {
      e.preventDefault();
    
      if (userId.length === 0 || userPassword.length === 0) {
        alert("이메일과 비밀번호를 입력하세요");
        return;
      }
    
      const data = {
        userId,
        userPassword,
        userPasswordCheck,
      };
    
      const signUpResponse = await signUpApi(data);
    
      if (!signUpResponse) {
        console.log(signUpResponse)
        setUserId("");
        setUserPassword("");
        setUserPasswordCheck("");
        alert("회원가입 실패"); return;
      }
      if (!signUpResponse.result) {
        console.log(signUpResponse)
        alert(signUpResponse.message);
        setUserId("");
        setUserPassword("");
        setUserPasswordCheck("");
        return;
      }
      alert("회원가입 성공");
      console.log(signUpResponse)
      navigate(`/login/Login`);
      
    }
  return (
    <div className="gdgd">
      <form class="form-control px-4 py-3">
        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label">
            이메일
          </label>
          <input
            type="ID"
            class="form-control"
            id="exampleDropdownFormEmail1"
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
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
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
          />
        </div>
        <div class="mb-3">
          <label for="exampleDropdownFormPassword2" class="form-label">
            비밀번호 확인
          </label>
          <input
             type="password"
             class="form-control"
             id="exampleDropdownFormPassword2"
             onChange={(e) => setUserPasswordCheck(e.target.value)}
             value={userPasswordCheck}  
          />
        </div>
        {/* <div class="mb-3">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="dropdownCheck"
            />
            <label class="form-check-label" for="dropdownCheck">
              이용약관 및 개인정보 수집 및 이용 에 동의합니다.
            </label>
          </div>
        </div> */}
        
          <button
            type="submit"
            class="btn btn-primary"
            style={{ backgroundColor: "#970000", color: "white", border: 0 }}
            onClick={(e) => SignUpHandler(e)}
          >
            회원가입
          </button>
          
      </form>
    </div>
  );
};

export default SignUp;

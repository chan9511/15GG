import React from "react";


const Nav = () => {
  return (
    <div className="App">
      <nav class="nav nav-tabs" style={{backgroundColor:"#6699ff"}}>
        <li class="nav-item">
          <a class="nav-link" href="/" style={{ color: "#fff" }}>
            15GG
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/analyze" style={{ color: "#fff" }}>
            챔피언 분석
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aram" style={{ color: "#fff" }}>
            칼바람 분석
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ranking" style={{ color: "#fff" }}>
            랭 킹
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login" style={{ color: "#fff" }}>
            로그인
          </a>
        </li>
        
      </nav>
      
    </div>
    
    
  );
};

export default Nav;

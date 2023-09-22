import React from "react";


const Navbar = () => {
  return (
    <nav class="nav nav-tabs ">
        <li class="nav-item">
          <a class="nav-link" href="/">
            웹페이지이름(미정)
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/analyze">
            챔피언 분석
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aram">
            칼바람 분석
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ranking">
            랭 킹
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">
            로그인  
          </a>
        </li>
        </nav>
  );
};

export default Navbar;

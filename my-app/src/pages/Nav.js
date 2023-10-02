import React from "react";
import './Nav.css';

const Nav = () => {
  return (
    <div className="App">
      <nav className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="/">
            15GG
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/analyze">
            챔피언 분석
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aram">
            칼바람 분석
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ranking">
            랭 킹
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            로그인
          </a>
        </li>
      </nav>
    </div>
  );
};

export default Nav;

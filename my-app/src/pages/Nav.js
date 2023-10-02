import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="App">
      <nav className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="/">
            15GG
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/classic">
            협곡 티어
          </a>
        </li>
        <li
          className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeDropdown}
        >
          <a
            className="nav-link dropdown-toggle"
            href="/classic"
            role="button"
          >
            챔피언 티어
          </a>
          <ul
            className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item" href="/classic">
                소환사의 협곡
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/aram">
                칼바람
              </a>
            </li>
          </ul>
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
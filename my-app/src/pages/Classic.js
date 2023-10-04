import React, { useState } from "react";
import "./Classic.css";
import "./Classic2.css";

const Classic = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // "등급설정" 버튼 클릭 시 드롭다운 표시/숨김
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="css-123">
         협곡 티어 정보
         </div>
      {/* 큰 div태그 */}
      <div className="css-gtm9xc">
        <nav>
          <div className="css-g46fbk">
            <div>
              <button
                className="css-776qz1"
                type="button"
                onClick={toggleDropdown}
              >
                <span>등급설정</span>
              </button>
              <div
                className="dropdown-menu"
                style={{ display: isDropdownOpen ? "block" : "none" }}
              >
                <button className="css-w2p1w6" type="button">
                  <span>Challenger</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Grandmaster</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Master</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Diamond</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Emerald</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Platinum</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Gold</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Silver</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Bronze</span>
                </button>
                <button className="css-w2p1w6" type="button">
                  <span>Iron</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div class="input-table">
          <nav class="nav-container">
            <button type="button" class="nav-button">
              탑
            </button>
            <button type="button" class="nav-button">
              정글
            </button>
            <button type="button" class="nav-button">
              미드
            </button>
            <button type="button" class="nav-button">
              바텀
            </button>
            <button type="button" class="nav-button">
              서폿
            </button>
          </nav>
        </div>
      </div>
      <div class="input-table">
        <form class="form-control me-2 d-flex search-form" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="챔피언명 검색"
            aria-label="Search"
          />
          <button></button>
        </form>
      </div>
      <div>
        <div class="table-container1">
          <div class="table-header">챔피언</div>
          <div class="table-header">티어</div>
          <div class="table-header">승률</div>
          <div class="table-header">픽률</div>
          <div class="table-header">밴율</div>
          <div class="table-cell">1</div>
          <div class="table-cell">2</div>
          <div class="table-cell">3</div>
          <div class="table-cell">4</div>
          <div class="table-cell">5</div>
        </div>
      </div>
    </div>
  );
};

export default Classic;

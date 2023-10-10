import React, { useState } from "react";
import "./style/Classic.css";
import "./style/Classic2.css";

const Classic = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Emerald");
  const [selectedRole, setSelectedRole] = useState("탑"); // 기본값은 "탑"으로 설정

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const tierList = [
    "Challenger",
    "Grandmaster",
    "Master",
    "Diamond",
    "Emerald",
    "Platinum",
    "Gold",
    "Silver",
    "Bronze",
    "Iron",
  ];

  const changeButtonText = (newText) => {
    setSelectedTier(newText);
    setIsDropdownOpen(false);
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role); // 클릭한 역할을 선택된 역할로 설정
  };

  return (
    <div>
      <div className="css-123">협곡 티어 정보</div>
      <div className="css-gtm9xc">
        <nav>
          <div className="css-g46fbk">
            <div>
              <div class="dropdown">
                <button
                  class="btn custom-button dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleDropdown}
                >
                  {selectedTier}
                </button>
                <ul
                  class={`dropdown-menu text-center ${
                    isDropdownOpen ? "show dropdown-menu-up" : ""
                  }`}
                >
                  {tierList.map((tier) => (
                    <li key={tier}>
                      <a
                        class="dropdown-item"
                        href="##"
                        onClick={() => changeButtonText(tier)}
                      >
                        {tier}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="input-table">
          <nav class="nav-container">
            <button
              type="button"
              class={`nav-button ${selectedRole === "탑" ? "active" : ""}`}
              onClick={() => handleRoleClick("탑")}
            >
              탑
            </button>
            {["정글", "미드", "바텀", "서폿"].map((role) => (
              <button
                key={role}
                type="button"
                class={`nav-button ${selectedRole === role ? "active" : ""}`}
                onClick={() => handleRoleClick(role)}
              >
                {role}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div>
        <div class="table-container1">
          <div class="table-header">챔피언</div>
          <div class="table-header">티어</div>
          <div class="table-header">승률</div>
          <div class="table-header">픽률</div>
          <div class="table-header">밴율</div>
          {[1, 2, 3, 4, 5].map((cell) => (
            <div key={cell} class="table-cell">
              {cell}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classic;

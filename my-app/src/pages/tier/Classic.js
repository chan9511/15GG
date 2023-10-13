import React, { useState } from "react";
import "./style/Classic.css";
import "./style/Classic2.css";
import championData from "./json/bro.json";

const Classic = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Emerald");
  const [selectedRole, setSelectedRole] = useState("탑");
  const [sortBy, setSortBy] = useState("win_rate"); // 초기 정렬 승률 높은순
  const [sortDirection, setSortDirection] = useState("descending");

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
    setSelectedRole(role);
  };

  const toggleSortDirection = () => {
    setSortDirection(
      sortDirection === "ascending" ? "descending" : "ascending"
    );
  };

  // Filter data based on the selected role
  const filteredData = () => {
    switch (selectedRole) {
      case "탑":
        return championData.filter(
          (champion) => champion.teamPosition === "TOP"
        );
      case "정글":
        return championData.filter(
          (champion) => champion.teamPosition === "JUNGLE"
        );
      case "미드":
        return championData.filter(
          (champion) => champion.teamPosition === "MIDDLE"
        );
      case "바텀":
        return championData.filter(
          (champion) => champion.teamPosition === "BOTTOM"
        );
      case "서폿":
        return championData.filter(
          (champion) => champion.teamPosition === "UTILITY"
        );
      default:
        return []; // 선택한 역할에 맞는 데이터가 없는 경우 빈 배열 반환
    }
  };

  const currentRoleData = filteredData();

  // Sort data based on the selected sortBy and sortDirection

  const sortedData = currentRoleData.slice().sort((a, b) => {
    if (sortDirection === "ascending") {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

  return (
    <div>
      <div className="css-123">협곡 티어 정보</div>
      <div className="css-gtm9xc">
        <nav>
          <div className="css-g46fbk">
            <div>
              <div className="dropdown">
                <button
                  className="btn custom-button dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleDropdown}
                >
                  {selectedTier}
                </button>
                <ul
                  className={`dropdown-menu text-center ${
                    isDropdownOpen ? "show dropdown-menu-up" : ""
                  }`}
                >
                  {tierList.map((tier) => (
                    <li key={tier}>
                      <a
                        className="dropdown-item"
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
        <div className="input-table">
          <nav className="nav-container">
            {["탑", "정글", "미드", "바텀", "서폿"].map((role) => (
              <button
                key={role}
                type="button"
                className={`nav-button ${
                  selectedRole === role ? "active" : ""
                }`}
                onClick={() => handleRoleClick(role)}
              >
                {role}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div>
        <div className="table-container1">
          <div className="table-header">챔피언</div>
          <div className="table-header">
            K/D/A
            <button onClick={() => { setSortBy("av_kda"); toggleSortDirection();}}>
              {sortBy === "av_kda"
                ? sortDirection === "ascending"
                  ? "▲"
                  : "▼"
                : "▲"}
            </button>
          </div>
          <div className="table-header">
            승률
            <button onClick={() => { setSortBy("win_rate"); toggleSortDirection();}}>
              {sortBy === "win_rate"
                ? sortDirection === "ascending"
                  ? "▲"
                  : "▼"
                : "▲"}
            </button>
          </div>
          <div className="table-header">
            픽률
            <button onClick={() => { setSortBy("pick_rate"); toggleSortDirection();}}>
              {sortBy === "pick_rate"
                ? sortDirection === "ascending"
                  ? "▲"
                  : "▼"
                : "▲"}
            </button>
          </div>
          <div className="table-header">
            밴율
            <button onClick={() => { setSortBy("ban_rate"); toggleSortDirection();}}>
              {sortBy === "ban_rate"
                ? sortDirection === "ascending"
                  ? "▲"
                  : "▼"
                : "▲"}
            </button>
          </div>
          <div className="table-header">
            표본
            <button onClick={() => { setSortBy("pick_cnt"); toggleSortDirection();}}>
              {sortBy === "pick_cnt"
                ? sortDirection === "ascending"
                  ? "▲"
                  : "▼"
                : "▲"}
            </button>
          </div>
        </div>
        {sortedData.map((champion) => (
          <div key={champion.championName} className="table-row">
            <div className="table-data">{champion.championName}</div>
            <div
              className="table-data"
              style={{
                color:
                  champion.av_kda >= 4
                    ? "#E84057"
                    : champion.av_kda >= 3
                    ? "#0093FF"
                    : champion.av_kda >= 2
                    ? "#00BBA3"
                    : champion.av_kda < 2
                    ? "#9AA4AF"
                    : "inherit",
              }}
            >
              {champion.av_kda}
            </div>
            <div
              className="table-data"
              style={{
                color: champion.win_rate >= 0.6 ? "#E84057" : "inherit",
              }}
            >
              {(champion.win_rate * 100).toFixed(2)}%
            </div>
            <div className="table-data">
              {(champion.pick_rate * 100).toFixed(2)}%
            </div>
            <div className="table-data">
              {(champion.ban_rate * 100).toFixed(2)}%
            </div>
            <div className="table-data">{champion.pick_cnt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classic;

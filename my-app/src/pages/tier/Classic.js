  import React, { useState } from "react";
  import "./style/Classic.css";
  import "./style/Classic2.css";
  import championData from "./json/em.json";

  const Classic = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState("Emerald");
    const [selectedRole, setSelectedRole] = useState("탑");

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

    // Filter data based on the selected role
    const filteredData = () => {
      switch (selectedRole) {
        case "탑":
          return championData.filter((champion) => champion.teamPosition === "TOP");
        case "정글":
          return championData.filter((champion) => champion.teamPosition === "JUNGLE");
        case "미드":
          return championData.filter((champion) => champion.teamPosition === "MIDDLE");
        case "바텀":
          return championData.filter((champion) => champion.teamPosition === "BOTTOM");
        case "서폿":
          return championData.filter((champion) => champion.teamPosition === "UTILITY");
        default:
          return [];
      }
    };

    const currentRoleData = filteredData();

    // 승률에 따라 데이터 정렬
    const sortedData = currentRoleData.slice().sort((a, b) => {
      return b.win_rate - a.win_rate;
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
                  className={`nav-button ${selectedRole === role ? "active" : ""}`}
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
            <div className="table-header">K/D/A</div>
            <div className="table-header">승률</div>
            <div className="table-header">픽률</div>
            <div className="table-header">밴율</div>
          </div>
          {sortedData.map((champion) => (
            <div key={champion.championName} className="table-row">
              <div className="table-data">{champion.championName}</div>
              <div className="table-data">{champion.av_kda}</div>
              <div className="table-data">{champion.win_rate}</div>
              <div className="table-data">{champion.pick_rate}</div>
              <div className="table-data">{champion.ban_rate}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Classic;

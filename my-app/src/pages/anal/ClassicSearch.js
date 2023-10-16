import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../search/style/Search.css";
import "../tier/style/Classic.css";
import "../tier/style/Classic2.css";
import Classic_Search from "./Classic_Search";
import { ClassicAnalysis } from "../../api";

const ClassicSearch = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("등급설정  ");
  const [searchText1, setSearchText1] = useState("");
  const [showClassic_Search, setShowClassic_Search] = useState(false);
  const [buildData, setBuildData] = useState([]); // 상태 변수로 buildData를 저장
  const [championData, setChampionData] = useState([null]);
  const navigate = useNavigate();

  const tierList = [
    "챌린저",
    "그랜드마스터",
    "마스터",
    "다이아",
    "에메랄드",
    "플레티넘",
    "골드",
    "실버",
    "브론즈",
    "아이언",
  ];
  // searchText1에 입력 받은 것을 search페이지로 넘기기.
  const submitFunc = (event) => {
    event.preventDefault();
    navigate("/classic_search", {
      state: { selectedTier, searchText1 },
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeButtonText = (newText) => {
    setSelectedTier(newText);
    setIsDropdownOpen(false);
  };


  const handleRoleClick = async (searchText1) => {
    setSearchText1(searchText1);

    const tier = selectedTier;
    const champion_name = searchText1;

    const data = {
      tier,
      champion_name,
    };

    
    try {
      const buildData = await ClassicAnalysis(data);
      setBuildData(buildData);
      console.log("buildData:", buildData.list[0]);
      setChampionData(buildData);
      console.log(buildData);

      console.log(buildData);
      console.log(championData);
    } catch (error) {
      // 오류 처리
      console.error("Error fetching Classic Build:", error);
    }
  };

  console.log(buildData);
  console.log(championData);
  

  const toggleClassicAn = () => {
    setShowClassic_Search(!showClassic_Search);
  };



  

  // 엔터 버튼 마우스 호버
  const handleButtonMouseEnter = () => {
    const button = document.getElementById("enterButton");
    if (button) {
      button.style.backgroundColor = "#fff";
      button.style.color = "#000";
    }
  };

  const handleButtonMouseLeave = () => {
    const button = document.getElementById("enterButton");
    if (button) {
      button.style.backgroundColor = "#970000";
      button.style.color = "#fff";
    }
  };

  return (
    <div>
      <div className="anal-title">
        <div className="css-123">협곡 챔피언 분석</div>
        <div className="input-table">
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
          <form
            onSubmit={submitFunc}
            className="form-control me-2 d-flex search-form"
            role="search"
          >
            <input
              className="form-control"
              type="search"
              value={searchText1}
              onChange={(e) => setSearchText1(e.target.value)}
              placeholder="챔피언명 검색"
              aria-label="Search"
            />
            <Link
              to={{
                pathname: "/classic_search",
                state: { searchText1: searchText1 },
              }}
              id="enterButton"
              className="btn btn-outline-success me-2"
              type="button"
              state={{ searchText1: searchText1 }}
              onClick={() => {
                toggleClassicAn();
                handleRoleClick(searchText1);
              }}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              style={{
                backgroundColor: "#970000",
                color: "#fff",
                borderColor: "#6699ff",
                border: 0,
                marginLeft: 10,
              }}
            >
              {" "}
              Enter
            </Link>
          </form>
        </div>
      </div>

      {showClassic_Search && <Classic_Search ChampionData={championData} />}
    </div>
  );
};

export default ClassicSearch;

import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../search/style/Search.css";
import "../tier/style/Classic.css";
import "../tier/style/Classic2.css";
import Aram_Search from "./Aram_Search";

const AramBuild = () => {
  const [searchText1, setSearchText1] = useState("");
  const [showClassic_Search, setShowClassic_Search] = useState(false);
  const navigate = useNavigate();

  // searchText1에 입력 받은 것을 search페이지로 넘기기.
  const submitFunc = (event) => {
    event.preventDefault();
    navigate("/arambuild", {
      state: { searchText1 },
    });
  };

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
        <div className="css-123">칼바람 챔피언 분석</div>
        <div className="input-table">
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
                to={{ pathname: "/arambuild", state: { searchText1: searchText1 } }}
                id="enterButton"
                className="btn btn-outline-success me-2"
                type="button"
                state={{ searchText1: searchText1 }}
                onClick={toggleClassicAn}
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

        {showClassic_Search && <Aram_Search />}
      </div>
    );
  };

  export default AramBuild;

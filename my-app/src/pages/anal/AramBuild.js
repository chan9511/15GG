import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../search/style/Search.css";
import "../tier/style/Classic.css";
import "../tier/style/Classic2.css";
import Aram_Search from "./Aram_Search";

const AramBuild = () => {
  const [searchText1, setSearchText1] = useState("");
  const [showClassic_Search, setShowClassic_Search] = useState(false); // ClassicAn 컴포넌트의 가시성을 제어하는 상태 추가
  const navigate = useNavigate();

  const submitFunc = (event) => {
    event.preventDefault();
    navigate("./Classic_Search", {
      state: { searchText1 },
    });
  };

  // ClassicAn 컴포넌트를 토글하는 함수
  const toggleClassicAn = () => {
    setShowClassic_Search(!showClassic_Search);
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
          <button
            className="btn btn-outline-success me-2"
            type="button" // Enter 버튼의 형식을 버튼으로 변경
            onClick={toggleClassicAn} // ClassicAn 컴포넌트를 토글하는 함수를 호출
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
          </button>
        </form>
      </div>
      </div>
      {/* showClassicAn 상태에 따라 ClassicAn 컴포넌트를 렌더링 */}
      
      {showClassic_Search && <Aram_Search />}
      
    </div>
  );
};

export default AramBuild;

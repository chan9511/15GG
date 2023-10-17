import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../search/style/Search.css";
import "../tier/style/Classic.css";
import "../tier/style/Classic2.css";
import Aram_Search from "./Aram_Search";

const AramSearch = () => {
  const [searchText1, setSearchText1] = useState("");
  const [showClassic_Search, setShowClassic_Search] = useState(false);
  const navigate = useNavigate();
  const imageUrl =
    "https://i.namu.wiki/i/d87ruSFsV6wCgnE1MW03j4UVoP1GY5UOUWi4u_KDb35MyZMkXetzYT0t-X52WTKK3jrddfw-3VRUImhdA9W4EpYcM7YBaUpih7N59zxAJgYAiwHNFZEgRM1gQ_HHgBmaiUOa8HPPvweNvkmxzv85Ag.webp";

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

  const buttonStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    width: "50px", // 원하는 너비 설정
    height: "50px", // 원하는 높이 설정
    border: 'none',
    borderRadius: '50%',
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
              
                to={{ pathname: "/aramsearch", state: { searchText1: searchText1 } }}
                id="enterButton"
                className="btn btn-outline-success me-2"
                type="button"
                state={{ searchText1: searchText1 }}
                onClick={toggleClassicAn}
                
                style={buttonStyle                  
                }
                >
                {" "}
                
              </Link>
            </form>
          </div>
        </div>

        {showClassic_Search && <Aram_Search />}
      </div>
    );
  };

  export default AramSearch;

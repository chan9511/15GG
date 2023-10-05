import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Search.css";
import "./Classic.css";
import "./Classic2.css";


const Anal = () => {
  const [searchText1, setSearchText1] = useState("");
  const navigate = useNavigate();

  const submitFunc = (event) => {
    event.preventDefault();
    navigate("/ClassicSearch", {
      state: { searchText1 },
    });
  };
  return (
    <div>
      <div className="css-123">협곡 챔피언 분석</div>
      <div class="input-table">
        <form
          onSubmit={submitFunc}
          class="form-control me-2 d-flex search-form"
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
              pathname: "/AnalSearch",
              state: { searchText: searchText1 },
            }}
            class="btn btn-outline-success me-2"
            type="text"
            state={{ searchText1: searchText1 }}
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
  );
};

export default Anal;

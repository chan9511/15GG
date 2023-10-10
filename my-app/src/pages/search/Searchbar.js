import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/Searchbar.css";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const submitFunc = (event) => {
    event.preventDefault();
    navigate("/search/search", {
      state: { searchText },
    });
  };

  return (
    <>
      <div className="input-container">
          <form
            onSubmit={submitFunc}
            class="form-control me-2 d-flex search-form"
            role="search"
          >
            
            <input 
              className="custom-input"
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="소환사명 검색"
              aria-label="Search"
            />
            <Link
              to={{ pathname: "/search/search", state: { searchText: searchText } }}
              class="btn btn-outline-success me-2"
              type="text"
              state={{ searchText: searchText }}
              style={{
                backgroundColor: "#970000",
                color: "#fff",
                borderColor: "#6699ff",
                border: 0,
              }}
            >
              {" "}
              Enter
            </Link>
          </form>
      </div>
    </>
  );
};
export default Searchbar;

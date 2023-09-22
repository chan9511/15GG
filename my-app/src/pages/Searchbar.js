import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const nagivate = useNavigate();

  const submitFunc = (event) => {
    event.preventDefault()
    nagivate("/search", {
      state: { searchText }
    });
  }

  return (
    <>
      <div className="App">
        <form onSubmit={submitFunc}
          class="form-control me-2 d-flex "
          role="search"
          style={{ marginRight: "100px" }}
        >
          <input
            className="form-control me-2"
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="소환사명 검색"
            aria-label="Search"
          />
          <Link 
            to = {{ pathname: '/search', state: {searchText: searchText} }}
            class="btn btn-outline-success me-2"
            type="text"
            state={{ searchText: searchText }}
          > 검색
          </Link>
        </form>
      </div>
    </>
  );
};
export default Searchbar;

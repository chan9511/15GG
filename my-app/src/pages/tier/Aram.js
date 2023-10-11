import React, { useState, useEffect } from "react";
import "./style/Classic.css";
import "./style/Classic2.css";
import championData from "./json/gold.json";

const Aram = () => {
  const [topPositionData, setTopPositionData] = useState([]);

  useEffect(() => {
    // 승률이 높은 순으로 정렬해서 초기 데이터 설정
    const initialData = [...championData].sort((a, b) => b.win_rate - a.win_rate);
    setTopPositionData(initialData);
  }, []);

  const [sortBy, setSortBy] = useState("win_rate"); // 초기 정렬 기준
  const [sortDirection, setSortDirection] = useState("descending"); // 초기 정렬 방향

  // 데이터를 주어진 key로 정렬하는 함수
  const sortByKey = (key) => {
    const sortedData = [...topPositionData].sort((a, b) => {
      if (sortDirection === "ascending") {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
    setTopPositionData(sortedData);
    setSortBy(key);
    // 정렬 방향을 토글 (ascending <-> descending)
    setSortDirection(sortDirection === "ascending" ? "descending" : "ascending");
  };

  return (
    <div>
      <div className="css-123">칼바람 티어 정보</div>
      <br></br>
      <br></br>
      <div className="css-gtm9xc">
        <div className="input-table"></div>
      </div>

      <div>
        <div className="table-container2">
          <div className="table-header">챔피언</div>
          <div className="table-header">
            K/D/A
            <button onClick={() => sortByKey("av_kda")}>
              {sortBy === "av_kda" ? (sortDirection === "ascending" ? "▲" : "▼") : "▲"}
            </button>
          </div>
          <div className="table-header">
            승률
            <button onClick={() => sortByKey("win_rate")}>
              {sortBy === "win_rate" ? (sortDirection === "ascending" ? "▲" : "▼") : "▲"}
            </button>
          </div>
          <div className="table-header">
            픽률
            <button onClick={() => sortByKey("pick_rate")}>
              {sortBy === "pick_rate" ? (sortDirection === "ascending" ? "▲" : "▼") : "▲"}
            </button>
          </div>
        </div>
        {topPositionData.map((champion) => (
          <div key={champion.championName} className="table-row2">
            <div className="table-data">{champion.championName}</div>
            <div className="table-data">{champion.av_kda}</div>
            <div className="table-data">{champion.win_rate}</div>
            <div className="table-data">{champion.pick_rate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aram;

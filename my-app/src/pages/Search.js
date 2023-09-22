import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-d9d920d1-34c1-4fee-ae05-f7d31572d99b";

  const searchForPlayer = async () => {
    try {
      const modifiedSearchText =
        searchText.length === 2
          ? searchText.charAt(0) + " " + searchText.charAt(1)
          : searchText;

      var summonerV4 =
        "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
        modifiedSearchText +
        "?api_key=" +
        API_KEY;
      const result = await axios.get(summonerV4); // 비동기처리
      console.log(result);

      // const { id, summonerLevel, name, profileIconId, puuid } = result.data;

      const result2 = await axios.get(
        `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${result.data.id}?api_key=${API_KEY}`
      ); // 비동기처리(leagueV4)

      const soloRankData = result2.data.find(
        (entry) => entry.queueType === "RANKED_SOLO_5x5"
      );
      const flexRankData = result2.data.find(
        (entry) => entry.queueType === "RANKED_FLEX_SR"
      );

      console.log(soloRankData);
      console.log(flexRankData);

      setPlayerData({
        id: result.data.id,
        summonerLevel: result.data.summonerLevel,
        name: result.data.name,
        profileIconId: result.data.profileIconId,
        puuid: result.data.puuid,
        soloRankTier: soloRankData.tier,
        soloRankPoint: soloRankData.leaguePoints,
        flexRankTier: flexRankData.tier,
        flexRankPoint: flexRankData.leaguePoints,
      });

      // setPlayerData({
      //   id,
      //   summonerLevel,
      //   name,
      //   profileIconId,
      //   puuid,
      //   soloRankData,
      //   soloRankData,
      // });
      // setPlayerData((prev) => {

      // })
console.log(asdsad)
      console.log(playerData);

      // // setPlayerData(result.data);
      // console.log("API로 받은데이터", result);
      // console.log("소환사 레벨:", summonerLevel);
      // console.log("소환사 닉네임:", name);
      // console.log("소환사 아이콘코드:", profileIconId);
      // console.log("searchText의 puuid:", puuid);
      // console.log("searchText의 id:", id);
      // console.log(result2);
    } catch (error) {
      console.log(error);

      alert("존재하지 않는 계정입니다.");
      setPlayerData(null);
      // 화면으로 표현 해보기.
    }
  };

  return (
    <>
      <div className="App">
        <form
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
          <Link to="/Search">
            <button
              class="btn btn-outline-success me-2"
              type="text"
              onClick={searchForPlayer}
              // searchForPlayer 함수 활용 (summoners-v4/{summonerName})
              // 얻을 수 있는 정보 (puuid,profileIconId(프로필이미지),summonerLevel)
              // puuid로 얻을 수 있는 정보
              //
            >
              click
            </button>
          </Link>
        </form>
      </div>

      <div>
        {playerData ? (
          <>
            <div>
              <p>소환사레벨:{playerData.summonerLevel}</p>
              <p>소환사이름:{playerData.name}</p>
              <p>프로필코드:{playerData.profileIconId}</p>
              <p>랭크티어{playerData.soloRankTier}{playerData.soloRankPoint}</p>
              <p>자유랭크티어{playerData.flexRankTier}{playerData.flexRankPoint}</p>
              {/* 소환사명: {playerData.toString()} */}
            </div>
          </>
        ) : (
          "False 부분"
        )}
      </div>
    </>
  );
};
export default Search;

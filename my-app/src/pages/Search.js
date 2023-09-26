import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [playerData, setPlayerData] = useState({});
  const [soloRankData, setSoloRankData] = useState(null);
  const [flexRankData, setFlexRankData] = useState(null);
  const API_KEY = "RGAPI-d9d920d1-34c1-4fee-ae05-f7d31572d99b";
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    searchForPlayer(location.state.searchText);
  }, [location.state.searchText]);

  const searchForPlayer = async (searchText) => {
    try {
      const modifiedSearchText =
        searchText.length === 2
          ? searchText.charAt(0) + " " + searchText.charAt(1)
          : searchText;
      // 두글자만 들어오면 중간에 띄어쓰기 돼서 검색이 되게끔.

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
      ); // 솔로랭크만 뽑기.
      const flexRankData = result2.data.find(
        (entry) => entry.queueType === "RANKED_FLEX_SR"
      ); // 자유랭크만 뽑기.
console.log(result.data.id)
      
        setPlayerData({
          id: result.data.id,
          summonerLevel: result.data.summonerLevel,
          name: result.data.name,
          profileIconId: result.data.profileIconId,
          puuid: result.data.puuid,
        });

        setSoloRankData(soloRankData);
        setFlexRankData(flexRankData);

        console.log(soloRankData);
        console.log(
          soloRankData.tier,
          soloRankData.rank,
          soloRankData.leaguePoints
        );
        console.log(soloRankData.wins, soloRankData.losses);
        console.log(
          flexRankData.tier,
          flexRankData.rank,
          flexRankData.leaguePoints
        );
        console.log(flexRankData.wins, flexRankData.losses);
      }
     catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        {playerData ? (
          <>
            <div>
              <p>소환사레벨: {playerData.summonerLevel}</p>
              <p>소환사이름: {playerData.name}</p>
              <p>프로필코드: {playerData.profileIconId}</p>
              {/* 소환사명: {playerData.toString()} */}
            </div>
          </>
        ) : (
          <p>"정보가 없습니다"</p>
        )}
      </div>
      <div>
        {soloRankData ? (
          <>
            <div>
              <p>
                소환사랭크: {soloRankData.tier} {soloRankData.rank}
              </p>
              <p>리그 포인트: {soloRankData.leaguePoints}</p>
              <p>
                {soloRankData.wins + soloRankData.wins}전 {soloRankData.wins}승{" "}
                {soloRankData.losses}패 (
                {(
                  (soloRankData.wins /
                    (soloRankData.wins + soloRankData.losses)) *
                  100
                ).toFixed(2)}
                %)
              </p>
            </div>
          </>
        ) : (
          <p>"언랭크"</p>
        )}
      </div>
      <div>
        {flexRankData ? (
          <>
            <div>
              <p>
                소환사랭크: {flexRankData.tier} {flexRankData.rank}
              </p>
              <p>리그 포인트: {flexRankData.leaguePoints}</p>
              <p>
                {flexRankData.wins + flexRankData.losses}전 {flexRankData.wins}
                승 {flexRankData.losses}패 (
                {(
                  (flexRankData.wins /
                    (flexRankData.wins + flexRankData.losses)) *
                  100
                ).toFixed(2)}
                %)
              </p>
            </div>
          </>
        ) : (
          <p>"언랭크"</p>
        )}
      </div>
    </>
  );
};
export default Search;

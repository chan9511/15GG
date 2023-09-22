import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [playerData, setPlayerData] = useState({});
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

      

      setPlayerData({
        id: result.data.id,
        summonerLevel: result.data.summonerLevel,
        name: result.data.name,
        profileIconId: result.data.profileIconId,
        puuid: result.data.puuid,
        
      });

    
      
      

      console.log(soloRankData)
      console.log(flexRankData.tier)


    } catch (error) {
      console.log(error);
      alert(`${searchText}는 존재하지 않는 소환사 입니다.`);

      
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
    </>
  );
};
export default Search;

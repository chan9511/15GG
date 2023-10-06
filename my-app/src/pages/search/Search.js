import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./style/Search.css";
import unranked_image from "./img/unranked.png"
import iron_image from "./img/iron.png"
import bronze_image from "./img/bronze.png"
import silver_image from "./img/silver.png"
import gold_image from "./img/gold.png"
import platinum_image from "./img/platinum.png"
import emerald_image from "./img/emerald.png"
import diamond_image from "./img/diamond.png"
import master_image from "./img/master.png"
import grandmaster_image from "./img/grandmaster.png"
import challenger_image from "./img/challenger.png"


const Search = () => {
  const [playerData, setPlayerData] = useState({});
  const [soloRankData, setSoloRankData] = useState(null);
  const [flexRankData, setFlexRankData] = useState(null);
  const [userMatch, setUserMatch] = useState([]);
  const API_KEY = "RGAPI-d9d920d1-34c1-4fee-ae05-f7d31572d99b";
  const location = useLocation();
  
  console.log(location);

  const imagess = {
    UNRANKED: unranked_image,
    IRON: iron_image,
    BRONZE: bronze_image,
    SILVER: silver_image,
    GOLD: gold_image,
    PLATINUM: platinum_image,
    EMERALD: emerald_image,
    DIAMOND: diamond_image,
    MASTER: master_image,
    GRANDMASTER: grandmaster_image,
    CHALLENGER: challenger_image
  }
  
  // const rankImages = {
  //   UNRANKED: `https://z.fow.kr/img/emblem/unranked.png`,
  //   IRON: `https://z.fow.kr/img/emblem/iron.png`,
  //   BRONZE: `https://z.fow.kr/img/emblem/bronze.png`,
  //   SILVER: `https://z.fow.kr/img/emblem/sliver.png`,
  //   GOLD: `https://z.fow.kr/img/emblem/gold.png`,
  //   // PLATINUM: `https://z.fow.kr/img/emblem/platinum.png`,
  //   PLATINUM: `emblem-platinum.p`,
  //   EMERALD: `https://z.fow.kr/img/emblem/emerald.png`,
  //   DIAMOND: `https://z.fow.kr/img/emblem/diamond.png`,
  //   MASTER: `https://z.fow.kr/img/emblem/master.png`,
  //   GRANDMASTER: `https://z.fow.kr/img/emblem/grandmaster.png`,
  //   CHALLENGER:`https://z.fow.kr/img/emblem/challenger.png`,
  // };


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

      const result2 = await axios.get(
        `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${result.data.id}?api_key=${API_KEY}`
      ); // 비동기처리(leagueV4)

      // const result3 = await axios.get(
      //   `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${result.data.id}?api_key=${API_KEY}`
      // )

      //////////////////// 매치목록 뽑기 ////////////////
      const puuid = result.data.puuid;
      console.log(puuid);
      const matchdata = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids??start=0&count=20&api_key=${API_KEY}`
      ); // 비동기

      console.log(matchdata);
      const matchId = matchdata.data;
      const matchLog = [];
      console.log(matchId); // 매치 목록 (최대 20개)
      console.log(matchLog)

      for (let i = 0; i < 5; i++) {
        matchLog.push(
          await axios.get(
            `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId[i]}?api_key=${API_KEY}`
          )
        );
      }

      const userDatas = [];
      console.log(matchLog[1])
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
          if (
            matchLog[i].data.info.participants[j].summonerName ===
            result.data.name
          ) {
            userDatas.push({
              timePlayed:
                parseInt(
                  matchLog[i].data.info.participants[j].timePlayed / 60
                ) +
                "분" +
                (matchLog[i].data.info.participants[j].timePlayed % 60) +
                "초",
              championName: matchLog[i].data.info.participants[j].championName,
              champLevel: matchLog[i].data.info.participants[j].champLevel,
              kills: matchLog[i].data.info.participants[j].kills,
              deaths: matchLog[i].data.info.participants[j].deaths,
              assists: matchLog[i].data.info.participants[j].assists,
              cs:
                matchLog[i].data.info.participants[j]
                  .totalAllyJungleMinionsKilled +
                matchLog[i].data.info.participants[j]
                  .totalEnemyJungleMinionsKilled +
                matchLog[i].data.info.participants[j].totalMinionsKilled,
              win: matchLog[i].data.info.participants[j].win,
              KDA: (
                (matchLog[i].data.info.participants[j].kills +
                  matchLog[i].data.info.participants[j].assists) /
                matchLog[i].data.info.participants[j].deaths
              ).toFixed(2),
              img: `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${matchLog[i].data.info.participants[j].championName}.png`,
              
              gameMode: matchLog[i].data.info.gameMode,
            });
          }
        }
      }

      // 5개의 매치기록
      setUserMatch(userDatas);
      console.log(userDatas);
      console.log(userMatch); // 5개의 매치기록 (총10개)
      console.log(matchLog[1]);
    

      ////////////////////////////////////////////////////
      const soloRankData = result2.data.find(
        (entry) => entry.queueType === "RANKED_SOLO_5x5"
      ); // 솔로랭크만 뽑기.
      const flexRankData = result2.data.find(
        (entry) => entry.queueType === "RANKED_FLEX_SR"
      ); // 자유랭크만 뽑기.

      setPlayerData({
        id: result.data.id,
        summonerLevel: result.data.summonerLevel,
        name: result.data.name,
        profileIconId: result.data.profileIconId,
        puuid: result.data.puuid,
      });

      setSoloRankData(soloRankData);
      setFlexRankData(flexRankData);

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* 통합 테이블 */}
      <div className="table_summary" >
        <div
          style={{
            backgroundColor: "#fff",
          }}
        >
          <div className="table_summary" >
            <br></br>
            <div
              style={{
                width: "480px",
                border: "1px solid  silver",
                height: "125px",
                position: "relative",
                backgroundColor: "white",
                float: "left",
              }}
            >
              {playerData.id ? (
                <>
                  <div>
                  <div
                    style={{ top: "40px", left: "60px", position: "absolute" }}
                  >
                    {/* <img
                      src={https://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/{4389}.png}
                      alt=""
                      style={{
                        border: "1px",
                        width: "128px",
                        height: "128px;",
                      }} // 이미지의 테두리 스타일을 설정 (선택 사항)
                    /> */}
                  </div>
                  <div
                    style={{
                      width: "5px",
                      heigth: "125px",
                      position: "relative",
                      float: "left",
                    }}
                  >
                    {" "}
                  </div>
                  <div
                    style={{ top: "10px", left: "75px", position: "absolute" }}
                  >
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${playerData.profileIconId}.png`}
                      alt="프로필아이콘"
                      style={{
                        border: "1px",
                        width: "100px",
                        height: "128px;",
                      }} // 이미지의 테두리 스타일을 설정 (선택 사항)
                    />
                  </div>
                    <div
                      div style={{ marginLeft: "250px" ,
                        top: "35px",
                        left: "0px",
                        position: "absolute",
                      }}
                    >
                      
                      
                      <p>소환사레벨: {playerData.summonerLevel}</p>
                      <p>소환사이름: {playerData.name}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p>"정보가 없습니다"</p>
                </>
              )}

              {/* 전적 테이블 */}
              <div className="new-table">
                <table className="table table-bordered new-table">
                  <thead>
                    <tr className="table">
                      <th scope="col" className="text-center">
                        결과
                      </th>
                      <th scope="col" className="text-center">
                        챔피언
                      </th>
                      <th scope="col" className="text-center">
                        게임 모드
                      </th>
                      <th scope="col" className="text-center">
                        K/D/A
                      </th>
                      <th scope="col" className="text-center">
                        평점
                      </th>
                      <th scope="col" className="text-center">
                        CS
                      </th>
                      <th scope="col" className="text-center">
                        레벨
                      </th>
                      <th scope="col" className="text-center">
                        플레이 시간
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userMatch.map((match, index) => (
                      // <tr key={index}  className={`text-center ${match.win.toString() ==='true' ? "victory-row" : "defeat-row"}`}>
                      <tr
                        key={index}
                        className={`text-center ${
                          match.win ? "table-primary" : "table-danger"
                        }`}
                      >
                        <td>{match.win ? "승리" : "패배"}</td>
                        <td>
                          <img
                            src={match.img}
                            alt="챔피언 이미지"
                            className="champion-img"
                            width="80px"
                            height="80px"
                          />
                        </td>
                        <td>
                          {match.gameMode === "CLASSIC"
                            ? "랭크"
                            : match.gameMode === "ARAM"
                            ? "칼바람"
                            : "unknown"}
                        </td>
                        <td>{match.KDA}</td>
                        <td>
                          {match.kills}/{match.deaths}/{match.assists}
                        </td>
                        <td>{match.cs}</td>
                        <td>{match.champLevel}</td>
                        <td>{match.timePlayed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br></br>

          <div className="table_summary">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "480px",
                border: "1px solid silver",
                height: "200px",
                position: "relative",
                backgroundColor: "white",
                float: "left",
              }}
            >
              {/* 솔로랭크테이블 */}
              {soloRankData ? (
                <>
                  <div
                    style={{ top: "40px", left: "60px", position: "absolute" }}
                  >
                    <img
                      src={imagess[soloRankData.tier]}
                      alt={`등급: ${soloRankData.tier}`}
                      style={{
                        border: "1px",
                        width: "128px",
                        height: "128px;",
                      }} // 이미지의 테두리 스타일을 설정 (선택 사항)
                    />
                  </div>
                  <div
                    style={{
                      width: "5px",
                      heigth: "125px",
                      position: "relative",
                      float: "left",
                    }}
                  >
                    {" "}
                  </div>

                  <div style={{ marginLeft: "245px" }}>
                    <p>솔로랭크</p>
                    <p>
                      등급: {soloRankData.tier} {soloRankData.rank}
                    </p>
                    <p>리그 포인트: {soloRankData.leaguePoints}</p>
                    <p>
                      {soloRankData.wins + soloRankData.losses}전{" "}
                      {soloRankData.wins}승 {soloRankData.losses}패 (
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
                <>
                  {/* 랭크가 없는 경우 */}
                  <div
                    style={{ top: "40px", left: "60px", position: "absolute" }}
                  >
                    <img
                      src={imagess["UNRANKED"]}
                      alt="UNRANKED"
                      width="128px"
                      height="128px"
                      style={{ border: "1px" }}
                    />
                  </div>
                  <div style={{ marginLeft: "250px" }}>
                    <p>솔로랭크</p>
                    <p>등급: 배치</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 자유랭크 테이블 */}
          <div className="table_summary">
            <br></br>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "480px",
                border: "1px solid silver",
                height: "200px",
                position: "relative",
                backgroundColor: "white",
                float: "left",
              }}
            >
              {flexRankData ? (
                <>
                  <div
                    style={{ top: "40px", left: "60px", position: "absolute" }}
                  >
                    <img
                      src={imagess[flexRankData.tier]}
                      alt={`등급: ${flexRankData.tier}`}
                      width="128" // 이미지의 너비를 100픽셀로 변경
                      height="128" // 이미지의 높이를 100픽셀로 변경
                      style={{ border: "0px" }} // 이미지의 테두리 스타일을 설정 (선택 사항)
                    />
                  </div>
                  <div style={{ marginLeft: "250px" }}>
                    <p>자유랭크</p>
                    <p>
                      등급: {flexRankData.tier} {flexRankData.rank}
                    </p>
                    <p>리그 포인트: {flexRankData.leaguePoints}</p>
                    <p>
                      {flexRankData.wins + flexRankData.losses}전{" "}
                      {flexRankData.wins}승 {flexRankData.losses}패 (
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
                <>
                  {/* 랭크가 없는 경우 */}
                  <div
                    style={{ top: "50px", left: "60px", position: "absolute" }}
                  >
                    <img
                      src={imagess.UNRANKED}
                      alt="UNRANKED"
                      width="128"
                      height="128"
                      style={{ border: "0px" }}
                    />
                  </div>
                  <div style={{ marginLeft: "250px" }}>
                    <p>자유랭크</p>
                    <p>등급: 배치</p>
                    
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
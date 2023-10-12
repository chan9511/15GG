import "./style/ClassicTable.css";
import { useLocation } from "react-router-dom";
import championData from "./json/em.json";

const Classic_Search = () => {
  const location = useLocation();

  const summonerspell =
    "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/SummonerBarrier.png";

  const cursor = "https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg";
  const skillImageUrl =
    "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliQ.png?image=q_auto,f_webp,w_64&v=1696570752446";
  const skillImageUrl2 =
    "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliW.png?image=q_auto,f_webp,w_64&v=1696570752446";
  const skillImageUrl3 =
    "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliE.png?image=q_auto,f_webp,w_64&v=1696570752446";
  const perkFirst =
    "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png";
  const perkSecond =
    "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png";

  // 앞자리를 대문자로 추출하는 함수.
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const searchText1 = capitalizeFirstLetter(location.state.searchText1);

  console.log(location);

  console.log(searchText1);
  // classicbuild에서 input한 데이터 추출
  const filteredChampionData = championData.filter((champion) => {
    return champion.championName === searchText1;
  });
  if (filteredChampionData.length === 0) {
    // 검색 결과가 없을 때 알림을 표시
    alert("검색 결과가 없습니다.");
  } else {
    // 검색 결과가 있을 때 처리 로직을 작성
    console.log(filteredChampionData);
  }
  console.log(filteredChampionData[0]);

  const championImageUrl = `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${searchText1}.png`;
  const itemStart = `http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${filteredChampionData[0].item_set1_1}.png`;
  const itemStart2 = `http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${filteredChampionData[0].item_set1_2}.png`;
  const itemShoes = `http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${filteredChampionData[0].shoes1}.png`;
  const mainItem = `http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${filteredChampionData[0].core1_1}.png`;
  const mainItem2 = `http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
    filteredChampionData[0].core1_2
      ? filteredChampionData[0].core1_2
      : filteredChampionData[0].core2_2
  }.png`;
  
  
  const convertSkillBuild = (skillValue) => {
    switch (skillValue) {
      case 1:
        return "Q";
      case 2:
        return "W";
      case 3:
        return "E";
      default:
        return ""; // 다른 값이 들어올 경우 처리
    }
  };

  const convertSpellBuild = (spellValue) => {
    switch (spellValue) {
      case 1:
        return "SummonerBoost";
      case 3:
        return "SummonerExhaust";
      case 4:
        return "SummonerFlash";
      case 6:
        return "SummonerHaste";
      case 7:
        return "SummonerHeal";
      case 11:
        return "SummonerSmite";
      case 12:
        return "SummonerTeleport";
      case 13:
        return "SummonerMana";
      case 14:
        return "SummonerDot";
      case 21:
        return "SummonerBarrier";
      case 32:
        return "SummonerSnowball";
      default:
        return ""; // 다른 값이 들어올 경우 처리
    }
  };

  // filteredChampionData 내의 데이터를 변환
  const transformedChampionData = filteredChampionData.map((champion) => ({
    ...champion,
    skill_build1: convertSkillBuild(champion.skill_build1),
    skill_build2: convertSkillBuild(champion.skill_build2),
    skill_build3: convertSkillBuild(champion.skill_build3),
  }));

  const transformedSpellData = filteredChampionData.map((champion) => ({
    ...champion,
    spell1_1: convertSpellBuild(champion.spell1_1),
    spell1_2: convertSpellBuild(champion.spell1_2),
    spell2_1: convertSpellBuild(champion.spell2_1),
    spell2_2: convertSpellBuild(champion.spell2_2),
  }));
  
  console.log(mainItem)
  // 스킬빌드 1,2,3형식으로 들어오는 것을 Q,W,E로 변환 확인
  console.log(transformedChampionData[0].skill_build1);
  // 스펠 변환 형식으로 들어오는 것 확인
  console.log(transformedSpellData[0].spell1_1);

  // 필터된 데이터를 콘솔에 출력

  return (
    <div>
      <main className="main-123">
        <div className="classic-table">
          <img src={championImageUrl} alt="champimg" className="champ-image" />

          <div className="champ-name">{searchText1}</div>
        </div>

        <div className="rate-table">
          <div className="rate">승률</div>

          <div className="rate">픽률</div>

          <div className="rate">밴율</div>
        </div>

        <div className="rate-table">
          <div className="percent-table">
            {(filteredChampionData[0].win_rate * 100).toFixed(1)}%
          </div>

          <div className="percent-table">
            {(filteredChampionData[0].pick_rate * 100).toFixed(1)}%
          </div>

          <div className="percent-table">
            {(filteredChampionData[0].ban_rate * 100).toFixed(1)}%
          </div>
        </div>

        <div className="rate-table">
          <div className="skilltreename">스킬트리</div>
        </div>
        <div className="rate-table">
          <img src={skillImageUrl} alt="champimg" className="image-all" />
          <img src={cursor} alt="champimg" className="image-all" />
          <img src={skillImageUrl3} alt="champimg" className="image-all" />
          <img src={cursor} alt="champimg" className="image-all" />
          <img src={skillImageUrl2} alt="champimg" className="image-all" />
        </div>

        <div className="rate-table">
          <div className="skill-tree123">
            {transformedChampionData[0].skill_build1}
          </div>
          <img src={cursor} alt="champimg" className="image-all" />
          <div className="skill-tree123">
            {transformedChampionData[0].skill_build2}
          </div>
          <img src={cursor} alt="champimg" className="image-all" />
          <div className="skill-tree123">
            {transformedChampionData[0].skill_build3}
          </div>
        </div>

        <div className="rune-table">
          <div className="runetable-left">
            <div className="rune-name">룬페이지</div>
            <div className="rune-page">
              <div className="rune-page-perk1">
                <div className="rune-row-top">
                  <img src={perkFirst} alt="rune" className="rune-image" />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img src={perkSecond} alt="rune" className="rune-image" />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                    alt="rune"
                    className="rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
              </div>
              <div className="rune-page-perk1">
                <div className="rune-row-top2">
                  <img src={summonerspell} alt="rune" className="rune-image" />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
              </div>

              <div className="rune-page-perk1-end">
                <div className="rune-row-top3">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="runetable-right">
            <div className="runetable-1">
              소환사 주문
              <div>
                <img src={spellimg} alt="spell" className="image-all" />
                <img src={summonerspell} alt="spell" className="image-all" />

                <div className="win-rate">승률:60%</div>
              </div>
            </div>
            <div className="runetable-1">
              시작 아이템
              <div>
                <img src={itemStart} alt="shoes" className="image-all" />
                <img src={itemStart2} alt="shoes" className="image-all" />

                <div className="win-rate">
                  승률:
                  {(filteredChampionData[0].item_set1_win * 100).toFixed(1)}%
                </div>
              </div>
            </div>
            <div className="runetable-1">
              신발
              <div>
                <img src={itemShoes} alt="shoes" className="image-all" />

                <div className="win-rate">
                  승률:{(filteredChampionData[0].shoes1_win * 100).toFixed(1)}%
                </div>
              </div>
            </div>
            <div className="runetable-end">
              메인 아이템 빌드
              <div>
                <img src={mainItem} alt="shoes" className="image-all" />
                <img src={cursor} alt="cursor" className="image-all" />
                <img src={mainItem2} alt="shoes" className="image-all" />
                <div className="win-rate">
                  승률:{(filteredChampionData[0].core1_win * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Classic_Search;

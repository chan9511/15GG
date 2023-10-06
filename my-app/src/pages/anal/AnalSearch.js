import React from "react";
import "./style/AnalTable.css";

const AnalSearch = () => {
  // Define the URL for the champion image
  const championImageUrl =
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/Akali.png";
  const item =
    "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/1001.png";
  const itembuild =
    "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/3003.png";
  const summonerspell =
    "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/SummonerFlash.png";
  const cursor = "https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg";

  return (
    <div>
      <div className="css-456">챔피언 정보</div>
      <div className="champimg">
        <img src={championImageUrl} alt="Champion" /> 
        <div className="champname">아칼리</div>
      </div>
      

      <br></br>
      <div>
        <div className="rune-left">
          룬페이지
          <div className="rune-1">ㅎㅇ</div>
          <div>ㅎㅇㅎㅇ</div>
        </div>


        <div className="spell">
          <div className="custom-border">소환사 주문</div>
          <img src={summonerspell} alt="spell" className="spell-image" />
          <img src={summonerspell} alt="spell" className="spell-image" />
          <div>
            <img src={summonerspell} alt="spell" className="spell-image" />
            <img src={summonerspell} alt="spell" className="spell-image" />
          </div>
        </div>

        <div className="spell">
          <div className="custom-border">시작 아이템</div>
          <img src={item} alt="shoes" className="spell-image" />
          <img src={item} alt="shoes" className="spell-image" />
          <div>
            <img src={item} alt="shoes" className="spell-image" />
            <img src={item} alt="shoes" className="spell-image" />
          </div>
        </div>

        <div className="spell">
          <div className="custom-border">신발</div>
          <img src={item} alt="shoes" className="spell-image" />

          <div>
            <img src={item} alt="shoes" className="spell-image" />
          </div>
        </div>
      </div>

      <div className="skill-left">챔피언명 스킬트리</div>

      <div className="item-build">
        챔피언명 아이템빌드
        <div>
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />
        </div>
        <div>
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />
        </div>
        <div>
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />
        </div>
      </div>
    </div>
  );
};

export default AnalSearch;

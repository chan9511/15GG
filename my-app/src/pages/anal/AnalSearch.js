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
      <div className="title">협곡 챔피언 분석</div>
      <div className="champname">
        <img src={championImageUrl} alt="champimg" className="champ-image" />

        <div className="banrate">
          밴율
          <p>40%</p>
        </div>
        <div className="pickrate">
          픽률
          <p>60%</p>
        </div>
        <div className="winrate">
          승률
          <p>60%</p>
        </div>
        <div className="champinfo">아칼리(챔피언명)</div>
      </div>

      <br></br>
      <div>
        <div className="rune-left">
          룬페이지
          <div className="rune-1">ㅎㅇ</div>
          <div>ㅎㅇㅎㅇ</div>
        </div>

        <div className="spell">
          <div className="small-title">
            소환사 주문
            <div className="spell-sub">승률</div>
            <div className="spell-rate">60%</div>
            <div className="spell-rate">60%</div>
          </div>

          <img src={summonerspell} alt="spell" className="spell-image" />
          <img src={summonerspell} alt="spell" className="spell-image" />
          <div>
            <img src={summonerspell} alt="spell" className="spell-image" />
            <img src={summonerspell} alt="spell" className="spell-image" />
          </div>
        </div>

        <div className="spell">
          <div>
            시작 아이템
            <div className="spell-sub">승률</div>
            <div className="spell-rate">60%</div>
            <div className="spell-rate">60%</div>
          </div>

          <img src={item} alt="shoes" className="spell-image" />
          <img src={item} alt="shoes" className="spell-image" />
          <div>
            <img src={item} alt="shoes" className="spell-image" />
            <img src={item} alt="shoes" className="spell-image" />
          </div>
        </div>

        <div className="spell">
          <div>
            신발
            <div className="spell-sub">승률</div>
            <div className="spell-rate">60%</div>
            <div className="spell-rate">60%</div>
          </div>
          <img src={item} alt="shoes" className="spell-image" />

          <div>
            <img src={item} alt="shoes" className="spell-image" />
          </div>
        </div>
      </div>

      <div className="skill-left">
        챔피언명 스킬 빌드
        <div>gd</div>
      </div>

      <div className="item-build">
        챔피언명 아이템 빌드
        
        <div className="item-sub">승률</div>
        
        
        <div>
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />
          <div className="item-rate">60%</div>
        </div>
        <div>
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />
          <div className="item-rate">60%</div>
        </div>
        <div>
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />{" "}
          <img src={cursor} alt="cursor" className="cursor-image" />{" "}
          <img src={itembuild} alt="shoes" className="spell-image" />
          <div className="item-rate">60%</div>
        </div>
      </div>
    </div>
  );
};

export default AnalSearch;

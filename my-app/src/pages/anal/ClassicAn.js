import React from "react";
import "./style/ClassicTable.css";

const ClassicAn = () => {
  const championImageUrl =
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/Akali.png";
  //   const item =
  //     "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/1001.png";
  //   const itembuild =
  //     "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/3003.png";
  //   const summonerspell =
  //     "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/SummonerFlash.png";
  //   const cursor = "https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg";
  //   const skillImageUrl =
  //     "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliQ.png?image=q_auto,f_webp,w_64&v=1696570752446";
  //   const skillImageUrl2 =
  //     "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliW.png?image=q_auto,f_webp,w_64&v=1696570752446";
  //   const skillImageUrl3 =
  //     "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliE.png?image=q_auto,f_webp,w_64&v=1696570752446";

  return (
    <div>
        <main>
      <div className="classic-table">
        <img src={championImageUrl} alt="champimg" className="champ-image" />

        <div className="champ-name">아칼리(챔피언명)</div>
    </div>

        <div className="rate-table">
          <div className="rate">승률</div>
          <div>50%</div>
        </div>

        <div className="rate-table">
          <div className="rate">픽률</div>
          <div>50%</div>
        </div>

        <div className="rate-table">
          <div className="rate">밴율</div>
          <div className="percent">50%</div>
        </div>

        <div className="rune-table"></div>
      

      <div className="rune-table">
        <div className="rune-sub">gd</div>
        
      </div>
      <div className="item-table">gd</div>
      </main>

      <aside>
        
      </aside>
    </div>
  );
};
export default ClassicAn;

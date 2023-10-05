import React from "react";
import "./AnalTable.css";

const AnalSearch = () => {
  return (
    <div>
      <div className="css-456">챔피언 정보</div>
      <div className="champimg">
        챔피언이미지
        <div className="champname">누누와 윌럼프</div>
      </div>
      <div>
        <div className="rune-left">룬페이지</div>
        <div className="rune-right">스펠</div>
        <div className="rune-right">시작아이템</div>
        <div className="rune-right">신발</div>
      </div>
      <div className="skill-left">스킬트리</div>
      <div className="item-build">아이템빌드</div>
    </div>
  );
};

export default AnalSearch;

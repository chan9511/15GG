
import React, { useState } from "react";
import "./Analyze.css";
import "./Analyze2.css";

const Analyze = () => {
  const [isHidden, setIsHidden] = useState(true);

  // "Emerald" 버튼 클릭 시 요소를 숨기거나 표시합니다.
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div>
      {/* 큰 div태그 */}
      <div class="css-gtm9xc">
        <div class="css-1dx96b5">
          <label class="hidden" for="kr">
            kr
          </label>
        </div>
        

        <div class="css-e52sg2">
          <label class="hidden" for="emerald">
            Emerald
          </label>
          <select id="emerald">
            <option value="challenger">Challenger</option>
            <option value="grandmaster">Grandmaster</option>
            <option value="master">Master</option>
            <option value="diamond">Diamond</option>
            <option value="emerald">Emerald</option>
            <option value="platinum">Platinum</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
            <option value="iron">Iron</option>
          </select>
        </div>
        <div class="css-g46fbk">
          <div>
            <button class="css-776qz1" type="button" onClick={toggleHidden}>
              <span>Emerald</span>
            </button>
            <div style={{display: isHidden ? 'none' : 'block' }}>
              <button class="css-w2p1w6" type="button">
                <span>Challenger</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Grandmaster</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Master</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Diamond</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Emerald</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Platinum</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Gold</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Silver</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Bronze</span>
              </button>
              <button class="css-w2p1w6" type="button">
                <span>Iron</span>
              </button>

            </div>
          </div>
        </div>
      </div>
      <div>챔피언검색기</div>
      <div>
        <div class="table-container1">
          <div class="table-header">챔피언</div>
          <div class="table-header">티어</div>
          <div class="table-header">승률</div>
          <div class="table-header">픽률</div>
          <div class="table-header">밴율</div>
          <div class="table-cell">1</div>
          <div class="table-cell">2</div>
          <div class="table-cell">3</div>
          <div class="table-cell">4</div>
          <div class="table-cell">5</div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;

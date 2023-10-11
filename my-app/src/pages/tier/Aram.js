import React, { useState } from "react";
import "./style/Classic.css";
import "./style/Classic2.css";

const Aram = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className="css-123">칼바람 티어 정보</div>
      <br></br><br></br>
      <div className="css-gtm9xc">
        <div class="input-table"></div>
      </div>

      <div>
        <div class="table-container2">
          <div class="table-header">챔피언</div>
          <div class="table-header">K/D/A</div>
          <div class="table-header">승률</div>
          <div class="table-header">픽률</div>

          {[1, 2, 3, 4].map((cell) => (
            <div key={cell} class="table-cell">
              {cell}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aram;

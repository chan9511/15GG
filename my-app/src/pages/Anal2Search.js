import React, { useState, useEffect } from "react";

const Anal2Search = () => {
  // JSON 파일 경로
  const jsonFileURL = "./img/chall_cham.json";

  // JSON 데이터를 저장할 상태(State)
  const [jsonData, setJsonData] = useState(null);

  // 컴포넌트가 마운트될 때 JSON 파일을 가져오는 부분
  useEffect(() => {
    fetch(jsonFileURL)
      .then((response) => response.json())
      .then((data) => {
        // "teamPosition"별로 데이터 필터링
        const jungleData = data.filter((item) => item.teamPosition === "JUNGLE");
        const topData = data.filter((item) => item.teamPosition === "TOP");
        const middleData = data.filter((item) => item.teamPosition === "MIDDLE");
        const bottomData = data.filter((item) => item.teamPosition === "BOTTOM");
        const utilityData = data.filter((item) => item.teamPosition === "UTILITY");

        // 필터링된 데이터를 객체로 저장
        const positionData = {
          JUNGLE: jungleData,
          TOP: topData,
          MIDDLE: middleData,
          BOTTOM: bottomData,
          UTILITY: utilityData,
        };

        setJsonData(positionData); // 필터링된 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error('파일을 읽는 중 오류가 발생했습니다.', error);
      });
  }, []); // 빈 배열을 두번째 인자로 전달하여 한 번만 실행되도록 설정

  return (
    <div className="box">
      {jsonData && (
        Object.entries(jsonData).map(([position, data]) => (
          <div key={position}>
            <p>"teamPosition"이 "{position}"인 데이터:</p>
            <pre>
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        ))
      )}
    </div>
  );
};

export default Anal2Search;

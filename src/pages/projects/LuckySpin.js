import React, { useState } from "react";
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function LuckySpin() {
  const [luckyNum, setLuckyNum] = useState(0);
  const [countDown, setCountDown] = useState(0);
  const spin = () => {
    let randomNum = Math.ceil(Math.random() * 150);
    let num = 0;
    let myInterval = setInterval(() => {
      num = num + 1;
      if (randomNum == 0) {
        setLuckyNum(num);
        alert(`${num} is lucky number`);
        clearInterval(myInterval);
      } else {
        setLuckyNum(num);
        randomNum -= 1;
      }
      if (num == 15) {
        num = 0;
      }

      setCountDown(randomNum);
    }, 90);
    // luckyNum
  };
  return (
    <div
      className="container text-center p-3"
      style={{ background: "linear-gradient(203deg, #ae93fa, #de8f98)" }}
    >
      <div className="d-flex justify-content-center p-3">
        <div
          id="clock"
          style={{
            width: "min(70vh, 70vw)",
            aspectRatio: "1 / 1",
            background: "linear-gradient(203deg, #e24f51,#deaaae, #97d7c1)",
            borderRadius: "100%",
            position: "relative",
          }}
        >
          {nums?.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="hour"
                  style={{
                    left: "45%",
                    top: "45%",
                    position: "absolute",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "10%",
                    height: "10%",
                    backgroundColor: luckyNum == index + 1 ? "white" : "black",
                    borderRadius: "100%",
                    transform: `rotateZ(calc((${item} + 6) * calc(360 / ${nums?.length}) * 1deg))
    translateY(400%)
    rotateZ(calc((${item} + 6) * calc(360 / ${nums?.length}) * -1deg))`,
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button className="btn btn-yellow-pink border" onClick={spin}>
          Try Your Luck
        </button>
        {/* {countDown} */}
      </div>
    </div>
  );
}

export default LuckySpin;

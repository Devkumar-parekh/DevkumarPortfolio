import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [gameState, setGameState] = useState(Array(9).fill(""));
  const [result, setResult] = useState(false);
  const handleInput = (i) => {
    setGameState((prev) => {
      let temp = prev;
      if (temp[i] == "" && !result) {
        temp[i] = turn;
        setTurn(turn == "X" ? "O" : "X");
        checkStatus();
      }
      return temp;
    });
  };
  const checkStatus = () => {
    console.log(17);
    const possibleWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of possibleWinner) {
      console.log(i);
      if (
        gameState[i[0]] == gameState[i[1]] &&
        gameState[i[0]] == gameState[i[2]] &&
        gameState[i[0]] != ""
      ) {
        alert(`congo!!! ${gameState[i[0]]} is winner`);
        setResult(true);
      }
    }
  };
  // useEffect(() => {
  //   checkStatus();
  // }, [gameState]);
  return (
    <div className="container">
      <style jsx="true">{`
        .block-btn:hover {
          background: linear-gradient(45deg, #eb7b7bbd, transparent) !important;
          border: 1px solid;
        }
        .block-btn {
          width: calc(min(70vh, 70vw) / 3);
          height: calc(min(70vh, 70vw) / 3);
          border: 1px solid;
          cursor: pointer;
        }
         {
          /* .block-btn:after {
          content: "";
          display: block;
          padding-bottom: calc(min(70vh, 70vw) / 3);
        } */
        }
      `}</style>
      <div className="card">
        <div className="card-body">
          <div className="d-flex  justify-content-center">
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(0)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[0]}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(1)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[1]}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(2)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[2]}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center">
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(3)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[3]}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(4)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[4]}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(5)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[5]}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center">
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(6)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[6]}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(7)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[7]}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="block-btn  btn position-relative"
                onClick={() => handleInput(8)}
              >
                <div className="position-absolute top-50 start-50 translate-middle fs-3">
                  {gameState[8]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;

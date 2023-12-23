// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";

function Chessboard() {
  const blockArr = [];
  const [highlightList, setHighlightList] = useState([]);
  const [blockState, setBlockState] = useState([]);
  let blockId = 0;
  for (var i = 0; i < 8; i++) {
    const rowTemp = [];
    for (var j = 0; j < 8; j++) {
      blockId++;
      if (i % 2) {
        if (j % 2) {
          rowTemp.push({
            row: i,
            col: j,
            bgcolor: "black",
            color: "white",
            blockId,
          });
        } else {
          rowTemp.push({
            row: i,
            col: j,
            bgcolor: "white",
            color: "black",
            blockId,
          });
        }
      } else {
        if (j % 2) {
          rowTemp.push({
            row: i,
            col: j,
            bgcolor: "white",
            color: "black",
            blockId,
          });
        } else {
          rowTemp.push({
            row: i,
            col: j,
            bgcolor: "black",
            color: "white",
            blockId,
          });
        }
      }
    }
    blockArr.push(rowTemp);
  }
  useEffect(() => {
    setBlockState(blockArr);
    console.log(blockState, "blockState12");
  }, []);
  const handleHighlight = (cell) => {
    console.log(cell, blockState);
    blockState.map((item, index) => {
      item.map((block, i) => {
        if (cell.row === block.row || cell.col === block.col) {
          console.log(62);
          setHighlightList((prev) => {
            return prev.includes(block.blockId)
              ? prev
              : [...prev, block.blockId];
          });
        }
        for (let i = 0; i < item.length; i++) {
          if (cell.row + i === block.row && cell.col + i === block.col) {
            setHighlightList((prev) => {
              return prev.includes(block.blockId)
                ? prev
                : [...prev, block.blockId];
            });
          }
          if (cell.row - i === block.row && cell.col - i === block.col) {
            setHighlightList((prev) => {
              return prev.includes(block.blockId)
                ? prev
                : [...prev, block.blockId];
            });
          }
          if (cell.row - i === block.row && cell.col + i === block.col) {
            setHighlightList((prev) => {
              return prev.includes(block.blockId)
                ? prev
                : [...prev, block.blockId];
            });
          }

          if (cell.row + i === block.row && cell.col - i === block.col) {
            setHighlightList((prev) => {
              return prev.includes(block.blockId)
                ? prev
                : [...prev, block.blockId];
            });
          }
          // if (cell.row === 0 || cell.col === 0) {
          //   //can't reduce
          // }
          // else if (cell.row === item.length - 1 || cell.col === item.length - 1) {
          //   //can't increase
          // } else {

          // }
        }
      });
    });
  };
  useEffect(() => {
    console.log(highlightList, "highlightList");
  }, [highlightList]);
  return (
    // <div className="container">

    <div className="App text-center">
      <style jsx="true">{`
        .block-btn:hover {
          background-color: gray !important;
        }
        .block-btn {
          width: calc(min(90vh, 90vw) / ${blockState.length});
          height: calc(min(90vh, 90vw) / ${blockState.length});
        }
         {
          /* .block-btn:after {
          content: "";
          display: block;
          padding-bottom: calc(min(90vh, 90vw) / ${blockState.length});
        } */
        }
      `}</style>

      <div className="shape-container">
        <div className="shape-top"></div>

        <div className="position-relative">
          <button
            onClick={() => {
              setHighlightList([]);
            }}
            style={{ marginBottom: "30px" }}
            className="btn bg-pink btn-primary mt-3"
          >
            Reset
          </button>
          {/* <div style={{ maxWidth: "90vw", maxHeight: "90vh" }}> */}
          {blockState.map((row, index) => {
            return (
              <div key={index} className="w-100">
                {row.map((cell, key) => {
                  return (
                    <button
                      key={key}
                      style={{
                        // width: "100px",
                        // height: "100px",
                        background: highlightList.includes(cell.blockId)
                          ? "radial-gradient(#752f88, #2f4e88)"
                          : cell.bgcolor,
                        color: cell.color,
                      }}
                      className="block-btn"
                      onClick={() => {
                        handleHighlight(cell);
                      }}
                    ></button>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </div>

    // </div>
  );
}

export default Chessboard;

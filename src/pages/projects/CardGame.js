import { useDispatch, useSelector } from "react-redux";
// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { setProductList } from "../../redux/actions/actions";
import { CustomDataTable } from "./components/customDataTable";
import axios from "axios";

const CardGame = () => {
  const [cardDist, setCardDist] = useState([]);
  const [dynamicStyle, setdynamicStyle] = useState({
    position: "",
  });

  var nums = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q👸",
    "K🤴",
  ];
  var colors = [" ♦", " ♥", " ♠", " ♣"];
  const shuffle = () => {
    var dist = [];
    var temp = [];
    for (var i = 0; i <= 12; i++) {
      for (var j = 0; j < 4; j++) {
        temp.push(nums[i] + colors[j]);
      }
    }
    console.log(temp, "temp");
    let useri = [];
    function removeItemOnce(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }

    while (temp.length > 0) {
      let card = temp[Math.floor(Math.random() * temp.length)];
      useri.push(card);
      temp = removeItemOnce(temp, card);
      if (useri.length == 13) {
        dist.push(useri);
        useri = [];
      }
    }
    setCardDist(dist);
  };
  useEffect(() => {
    shuffle();
  }, []);
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div
      className="shape-container1 bg-light"
      style={{
        minHeight: "90vh",
        background: "url('/images/bg/cardgameBg.jpg')",
      }}
    >
      <style jsx>{`
        @keyframes example {
          0% {
            position: absolute;
            left: 10px;
            top: 10px;
            transform: rotate(0deg);
            opacity: 0;
          }
          250% {
            left: 500px;
            top: 10px;
          }
          50% {
            left: 500px;
            top: 500px;
          }

          75% {
            left: 10px;
            top: 500px;
            transform: rotate(360deg);
          }
          100% {
            left: 0px;
            top: 0px;
            position: static;
            transform: rotate(360deg);
            opacity: 1;
          }
        }
        @keyframes example1 {
          from {
            transform: rotate(0deg);
            opacity: 1;
          }

          to {
            transform: rotateY(180deg);
            opacity: 0;
          }
        }
      `}</style>
      {/* <div className="shape-top"></div>
      <div className="shape-left"></div> */}
      <div className="container py-5">
        <h1 className="text-center  mb-2 text-light ">Card Distribution</h1>

        <div className="text-center">
          <button
            className="btn btn-danger ms-2"
            onClick={() => {
              setdynamicStyle(
                dynamicStyle?.position == "absolute"
                  ? {
                      position: "relative",
                      animationName: "example",
                      animationDuration: "2s",
                      // display: "block",
                    }
                  : {
                      position: "absolute",
                      animationName: "example1",
                      animationDuration: "2s",
                      // display: "none",
                    }
              );
              shuffle();
            }}
          >
            Shuffle
          </button>
        </div>
        <div className="">
          {cardDist?.map((item, index) => {
            return (
              <div
                className="d-flex flex-wrap  p-2  gap-3 my-3 justify-content-center"
                key={index}
                style={{ position: "relative" }}
              >
                {item?.map((c, i) => {
                  return (
                    <div
                      className="card p-3 text-center fw-bold fs-6 justify-content-center border"
                      key={i}
                      style={
                        c.includes("♦") || c.includes("♥")
                          ? {
                              color: "red",
                              height: "100px",
                              width: "70px",
                              ...dynamicStyle,
                            }
                          : {
                              color: "black",
                              height: "100px",
                              width: "70px",
                              ...dynamicStyle,
                            }
                      }
                    >
                      {c?.split(" ")[0]}
                      <br />
                      {c?.split(" ")[1]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CardGame;

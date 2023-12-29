import { useDispatch, useSelector } from "react-redux";
// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { setProductList } from "../../redux/actions/actions";
import { CustomDataTable } from "./components/customDataTable";
import axios from "axios";
import "../../index.css";
const Gallery = () => {
  const [imgList, setimgList] = useState([]);
  const [modalimg, setmodalimg] = useState("");
  const getWeatherDet = async () => {
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=1&limit=100`
      );
      setimgList(res.data);
    } catch (e) {
      alert(e.message + ". Try again later");
    }
  };
  useEffect(() => {
    getWeatherDet();
  }, []);
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="shape-container" style={{ background: "#fdbeac" }}>
      <div className="shape-top" style={{ background: "#fef3ed" }}></div>
      <div className="shape-left" style={{ background: "#e68fb2" }}></div>
      <div
        className="container "
        style={
          {
            // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150' preserveAspectRatio='none' style=%7B%7B height: '100%25', width: '100%25' %7D%7D %3E%3Cpath d='M-11.57,150.50 C130.07,106.09 91.13,115.97 515.52,-3.44 L536.96,-26.13 L0.00,0.00 Z' style=%7B%7B height: '100%25', fill: '%230088ff54', stroke: 'none' %7D%7D %3E%3C/path%3E%3C/svg%3E")`,
            // height: "100px",
          }
        }
      >
        <div
          className="modal fade"
          id="imgModal"
          tabindex="-1"
          aria-labelledby="imgModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body position-relative">
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 border border-dark border-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>{" "}
                <img
                  className="img-fluid rounded border border-dark "
                  src={modalimg}
                  alt=""
                  style={{ width: 500, height: 500 }}
                />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9 ">
            <div
              className="card my-3   "
              style={{ background: "#55423c", color: "#ffc0ae" }}
            >
              <div className="card-body p-5">
                <h1 className="text-center mb-2">Gallery</h1>
              </div>

              <div className="d-flex flex-wrap justify-content-center">
                {imgList?.map((item, index) => {
                  const temp = Math.floor(Math.random() * 3);
                  {
                    /* const classes = ["shrink", "borderImg", "rotateImg"]; */
                  }
                  const classes = ["rotateImg", "rotateImg"]; //rotateImg
                  const imgClass = classes[temp];
                  return (
                    <div key={index} className={`defRotateImg p-2 ${imgClass}`}>
                      <img
                        className="img-fluid rounded bordered "
                        data-bs-toggle="modal"
                        data-bs-target="#imgModal"
                        src={item?.download_url}
                        alt=""
                        style={{
                          width: 200,
                          height: 200,
                          clipPath: `circle(99.7% at 51% 0)`,
                        }}
                        onClick={() => {
                          setmodalimg(item?.download_url);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Gallery;

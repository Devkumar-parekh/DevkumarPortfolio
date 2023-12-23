import { useDispatch, useSelector } from "react-redux";
// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { setProductList } from "../../redux/actions/actions";
import { CustomDataTable } from "./components/customDataTable";
import axios from "axios";

const WeatherComp = () => {
  const [place, setPlace] = useState("Gujrat");
  const [weatherData, setweatherData] = useState({});
  const getWeatherDet = async () => {
    try {
      const res =
        //   await axios.get(`https://www.google.com/search?q=${place}&oq=${place}
        // &aqs=chrome.0.35i39l2j0l4j46j69i60.6128j1j7&sourceid=chrome&ie=UTF-8`);
        // console.log(res.data);
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=fr&mode=json&APPID=f825344b0cf0672c689378549f9868db`
        );
      console.log(res.data);
      setweatherData(res.data);
    } catch (e) {
      alert(e.message + ". Try again later");
    }
    // https://api.openweathermap.org/data/2.5/weather?q=eastern%20equatoria&units=metric&lang=fr&mode=json&APPID=f825344b0cf0672c689378549f9868db
  };
  useEffect(() => {
    getWeatherDet();
  }, []);
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="shape-container" style={{ minHeight: "90vh" }}>
      <div className="shape-top"></div>
      <div className="shape-left"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card my-3 fw-bold text-primary bg-light ">
              <div className="card-body p-5">
                <h2 className="text-center mb-2 text-dark">Check Weather</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="place" className="form-label">
                      Enter location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="place"
                      value={place}
                      onChange={(e) => {
                        setPlace(e.target.value);
                      }}
                      placeholder="Enter location here"
                    />
                  </div>
                  <div className="row my-3 ">
                    <button
                      className="btn btn-outline-primary"
                      onClick={getWeatherDet}
                    >
                      Click here
                    </button>
                    {/* api.openweathermap.org/data/2.5/weather?q={place}
                  &appid=b14425a6554d189a2d7dc18a8e7d7263
                  <br />
                  'https://www.google.com/search?q={place}&oq={place}
                  &aqs=chrome.0.35i39l2j0l4j46j69i60.6128j1j7&sourceid=chrome&ie=UTF-8' */}
                  </div>
                  <div className="d-flex flex-wrap text-light justify-content-center pb-5">
                    <div className="rounded p-3 bg-pink m-1">
                      Name: {weatherData?.name}
                    </div>
                    <div className="rounded p-3 bg-blue m-1">
                      Temp: {weatherData?.main?.temp} &deg;C
                    </div>
                    <div className="rounded p-3 bg-purple m-1">
                      lat: {weatherData?.coord?.lat}
                    </div>
                    <div className="rounded p-3 bg-purple m-1">
                      lon: {weatherData?.coord?.lon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default WeatherComp;

// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { setMeta } from "../../01utils/functions";

const GMap = () => {
  const [place, setPlace] = useState("");
  const [latlong, setlatlong] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlatlong({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
    setMeta("https://devkumar-parekh.vercel.app/images/projects/map.png");
  }, []);
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="curve-shape-container" style={{ background: "#004743" }}>
      <div className="curve-shape-top" style={{ background: "#f9bc61" }}></div>
      <div className="container" style={{ position: "relative" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card my-3  "
              style={{ background: "#abd1c6", color: "#004743" }}
            >
              <div className="card-body p-5">
                <h1 className="text-center mb-2">My City</h1>
              </div>
              <div className="text-center">
                <div class="ratio ratio-4x3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709469937!2d72.73989534695299!3d21.159340298568623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1702985783928!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    // style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <p className="mt-3 text-center">
                Go to your location
                <br />
                <a
                  href={`https://www.google.com/maps/@${latlong.lat},${latlong.long}m/data=!3m1!1e3?entry=ttu`}
                  target="_blank"
                  className="btn btn-outline-warning"
                  style={{
                    background: "#004743",
                  }}
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default GMap;

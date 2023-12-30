import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const UserProfile = authState?.UserProfile;
  const [title, setTitle] = useState("");
  var i = -1;
  var txt = ` ${UserProfile?.FName} ${UserProfile?.LName} - ${UserProfile?.Designation} ${UserProfile?.SkillDomain} `;
  var speed = 100;
  const typeWriter = async () => {
    setTitle("");
    let myinterval = await setInterval(() => {
      if (i < txt.length - 1) {
        setTitle((prev) => {
          i++;
          return prev + txt.charAt(i);
        });
      } else {
        clearInterval(myinterval);
      }
    }, speed);
  };
  useEffect(() => {
    typeWriter();
  }, []);
  return (
    <>
      {/* <div class="d-flex align-items-center justify-content-center vh-100 bg-dark"> */}
      <div className="bg-dark">
        <div
          style={{
            background: ` url("./images/bg/enterbg.jpg")`,
            width: "100vw",
            minHeight: "80vh",
          }}
          className="p-5"
        >
          <div className="container ">
            <div
              className="card my-3 text-warning  shadow"
              style={{ background: "#212529ad" }}
            >
              <div className="card-body text-center">
                <h1 className="text-center">{title}</h1>

                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <img
                      className="img-fluid text-center rounded"
                      src={
                        UserProfile?.ProfileImg
                          ? "data:image/png;base64," + UserProfile?.ProfileImg
                          : "./images/profilePlaceholder-trans.jpg"
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-center">
                  {UserProfile?.Designation} <br />
                  {UserProfile?.SkillDomain} <br />
                  <Link to="/editProfile" className="btn btn-warning">
                    Edit Profile As Guest User
                  </Link>
                  <h2>
                    Key Skills: ReactJS, Next.js, MongoDB, Node.js, Express
                  </h2>
                  <h2>Experienced in Building Scalable Web Applications</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="container ">
        <div className="card my-3 text-warning bg-dark ">
          <div className="card-body">
            <h1 className="text-center">{title}</h1>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  className="img-fluid text-center rounded"
                  src="./images/profilePlaceholder-trans.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              Web Developer <br />
              MERN Stack <br />
              <Link to="/editProfile" className="btn btn-warning">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;

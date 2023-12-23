import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container">
        <h1>Projects</h1>
        <div className="row">
          <div className="col-md-3 p-3 text-center">
            <Link
              className="nav-link bg-secondary rounded p-3"
              to="/projectlist/chess"
            >
              <div>
                <img
                  src="./images/projects/chess.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "140px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              Chess board
            </Link>
          </div>
          <div className="col-md-3 p-3 text-center">
            <Link
              className="nav-link bg-secondary rounded p-3"
              to="/projectlist/crudops"
            >
              <div>
                <img
                  src="./images/projects/crud.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "140px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              CRUD Operations
            </Link>
          </div>
          <div className="col-md-3 p-3 text-center">
            <Link
              className="nav-link bg-secondary rounded p-3"
              to="/projectlist/check-your-location"
            >
              <div>
                <img
                  src="./images/projects/map.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "140px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              My City
            </Link>
          </div>
          <div className="col-md-3 p-3 text-center">
            <Link
              className="nav-link bg-secondary rounded p-3"
              to="/projectlist/check-weather"
            >
              <div>
                <img
                  src="./images/projects/weather.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "140px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              Check-weather
            </Link>
          </div>
          <div className="col-md-3 p-3 text-center">
            <Link
              className="nav-link bg-secondary rounded p-3"
              to="/projectlist/img-gallery"
            >
              <div>
                <img
                  src="./images/projects/gallery.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "140px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              Gallery
            </Link>
          </div>
          <div className="col-md-3 p-3 text-center">
            <Link
              className="nav-link bg-secondary rounded p-3"
              to="/projectlist/take-a-quiz"
            >
              <div>
                <img
                  src="./images/projects/quiz.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "140px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              Take a Quiz
            </Link>
          </div>

          <div className="col-md-3 p-3 text-center">
            <Link
              className="nav-link bg-secondary rounded p-3"
              to="/projectlist/generate-qr"
            >
              <div>
                <img
                  src="./images/projects/qr.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "140px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              Generate QR
            </Link>
          </div>
          {/* generate-qr */}
          {/* check-weather */}
        </div>
      </div>
    </>
  );
};

export default Projects;

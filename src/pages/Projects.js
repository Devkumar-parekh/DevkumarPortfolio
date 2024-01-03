import { Link } from "react-router-dom";

const projectList = [
  {
    url: "/projectlist/chess",
    img: "./images/projects/chess.gif",
    label: "Chess board",
  },
  {
    url: "/projectlist/crudops",
    img: "./images/projects/crud.gif",
    label: "CRUD Operations",
  },
  {
    url: "/projectlist/check-your-location",
    img: "./images/projects/map.png",
    label: "My City",
  },
  {
    url: "/projectlist/check-weather",
    img: "./images/projects/weather.png",
    label: "Check-weather",
  },
  {
    url: "/projectlist/img-gallery",
    img: "./images/projects/gallery.gif",
    label: "Gallery",
  },
  {
    url: "/projectlist/take-a-quiz",
    img: "./images/projects/quiz.gif",
    label: "Take a Quiz",
  },
  {
    url: "/projectlist/generate-qr",
    img: "./images/projects/qr.png",
    label: "Generate QR",
  },
  {
    url: "/projectlist/tic-tac-toe",
    img: "./images/projects/tictactoe.gif",
    label: "Tic Tac Toe",
  },

  {
    url: "/projectlist/to-do",
    img: "./images/projects/todos.gif",
    label: "To Do's list",
  },
  {
    url: "/projectlist/card-game",
    img: "./images/projects/cardDist.gif",
    label: "Card Distribution",
  },
  {
    url: "/projectlist/lucky-spin-wheel",
    img: "./images/projects/spinWheel.gif",
    label: "Lucky Spin Wheel",
  },
  //spinWheel
  ,
];
const Projects = () => {
  return (
    <>
      <div className="container">
        <h1>Projects</h1>
        {/* <br /> mindi coming soon...
        <br /> todo's coming soon... */}
        <br />
        <div className="row justify-content-center">
          {projectList?.map((item, index) => {
            return (
              <div className="col-md-4 p-3 text-center" key={index}>
                <Link
                  className="nav-link bg-secondary rounded p-3 fw-bold"
                  to={item?.url}
                >
                  <div>
                    <img
                      src={item?.img}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "375px",
                        height: "210px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  {item?.label} <br />
                  <span className="text-dark fw-bold">View Demo 🔗</span>
                </Link>
              </div>
            );
          })}
          {/* generate-qr */}
          {/* check-weather */}
        </div>
      </div>
    </>
  );
};

export default Projects;

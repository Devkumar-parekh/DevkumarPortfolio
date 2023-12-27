import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const projectList = [
  {
    label: "Javascript",
    progress: 80,
  },

  {
    label: "ReactJs",
    progress: 80,
  },
  {
    label: "NextJs",
    progress: 75,
  },
  {
    label: "HTML",
    progress: 85,
  },
  {
    label: "CSS",
    progress: 60,
  },
  {
    label: "Bootstrap",
    progress: 85,
  },
];
const SkillSet = () => {
  return (
    <div
      style={{ background: "#0e172c", color: "#f9f8fc", minHeight: "100vh" }}
    >
      <div className="container py-5 " id="">
        <h1 className="text-center">My Skills</h1>
        <div
          className="card"
          style={{ background: "#b8c1ec", border: "4px solid #b384af" }}
        >
          <div className="card-body">
            {projectList?.map((item, index) => {
              return (
                <div className="row p-3 justify-content-center " key={index}>
                  <div className="col-md-2 fw-bold">{item.label}</div>
                  <div className="col-md-6">
                    <ProgressBar
                      striped
                      // variant="danger"
                      now={item.progress}
                      label={`${item.progress}%`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* generate-qr */}
          {/* check-weather */}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;

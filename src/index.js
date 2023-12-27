import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Projects from "./pages/Projects";
import Chessboard from "./pages/projects/Chess";
import EditProfile from "./pages/EditProfile";
import CrudOps from "./pages/projects/CRUD";
import WeatherComp from "./pages/projects/Weather";
import GMap from "./pages/projects/GMap";
import Gallery from "./pages/projects/Gallery";
import QuizComp from "./pages/projects/Quiz";
import "./index.css";
import QRGenerator from "./pages/projects/QRGenerator";
import SkillSet from "./pages/SkillSet";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="skills" element={<SkillSet />} />
          {/* SkillSet */}
          <Route path="projects" element={<Projects />} />
          <Route path="projectlist">
            <Route path="chess" element={<Chessboard />} />
            <Route path="crudops" element={<CrudOps />} />
            <Route path="check-weather" element={<WeatherComp />} />
            <Route path="check-your-location" element={<GMap />} />
            <Route path="img-gallery" element={<Gallery />} />
            <Route path="take-a-quiz" element={<QuizComp />} />
            <Route path="generate-qr" element={<QRGenerator />} />
          </Route>
          {/* Quiz */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

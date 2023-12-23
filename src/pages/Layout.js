import { Provider } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { store } from "../redux/store/Store";
const Layout = () => {
  const d = new Date();

  return (
    <>
      <Provider store={store}>
        <div className="d-flex flex-column vh-100 bg-dark">
          <nav className="navbar navbar navbar-dark bg-dark navbar-expand-lg ">
            <div className="container">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/blogs">
                      Blogs
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/editProfile">
                      Edit Profile
                    </Link>
                  </li>

                  {/*  */}
                </ul>
              </div>
            </div>
          </nav>
          <div className="text-warning bg-dark">
            <Outlet />
          </div>
          <div className="mt-auto bg-dark text-warning fw-bold">
            <div className="container">
              <div className="row justify-content-center my-3">
                <div className="col-md-2">
                  <a href="mailto:test@test.test" className="link-warning">
                    test@test.test
                  </a>{" "}
                  <br />
                  <a href="tel:+919876543210" className="link-warning">
                    +91-9876543210
                  </a>
                </div>
                <div className="col-md-2">
                  {" "}
                  &#169; Devkumar Parekh {d.getFullYear()}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default Layout;

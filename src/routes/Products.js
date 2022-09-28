import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../App.css"
export default function Products() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link to={"/Aboutus"} className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
            <Link to={"/Products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
            <Link to={"/Contact"} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="textdiv">
      <div className="text">
        <h1>This Is Productspage</h1>
      </div>
      </div>
    </>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light m-0 p-0 ">
    <div className="container-fluid Navbar_css p-4 px-5 d-flex justify-content-between align-items-center">
      {/* Logo Section */}
      <div className="logo">
      <a className="navbar-brand font-bold text-white" href="/">Portfolio</a> 
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> {/* Toggler icon for mobile screens */}
    </button>
      {/* Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav"> {/* Added collapse class and id for the menu */}
      <ul className="navbar-nav ms-auto"> {/* Added navbar-nav class and ms-auto to align right */}
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link> {/* Link to the Home page */}
        </li>
        <li className="nav-item">
          <a href="#about-section" className="nav-link">About</a> {/* Link to About section */}
        </li>
        <li className="nav-item">
          <a href="#experience-section" className="nav-link">Experience</a> {/* Link to Experience section */}
        </li>
        <li className="nav-item">
          <a href="#project-section" className="nav-link">Project</a> {/* Link to Project section */}
        </li>
        <li className="nav-item">
          <a href="#contact-section" className="nav-link">Contact</a> {/* Link to Contact section */}
        </li>
      </ul>
    </div>
    </div>
    </nav>
  );
};

export default Menu;
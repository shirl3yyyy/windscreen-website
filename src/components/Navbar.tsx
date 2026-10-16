
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" aria-label="Safe-view Windscreens home">
          <span className="logo-blue">Safe</span>
          <span className="logo-green">View</span>
          <span className="logo-small">WINDSCREENS</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Get Started <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

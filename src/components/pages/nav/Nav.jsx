// import logo from "./../../../img/Style=Default.svg";
import logo from "./../../../img/uzbedev-logo.png";
import "./nav.css";
import toggle from "./../../../img/icons/toggle.svg";
import { NavLink } from "react-router-dom";
export default function Nav() {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <>
      <div id="myNav" className="overlay">
        <NavLink
          activeClassName="active"
          to="#"
          className="closebtn"
          onClick={closeNav}
        >
          &times;
        </NavLink>
        <div className="overlay-content">
          <li className="link-item">
            <NavLink activeClassName="active" to="/" onClick={closeNav}>
              <span className="panjara">#</span>
              <span className="nav-title">home</span>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink activeClassName="active" to="/projects" onClick={closeNav}>
              <span className="panjara">#</span>
              <span className="nav-title">projects</span>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink activeClassName="active" to="/about-me" onClick={closeNav}>
              <span className="panjara">#</span>
              <span className="nav-title">about-me</span>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink activeClassName="active" to="/contacts" onClick={closeNav}>
              <span className="panjara">#</span>
              <span className="nav-title">contacts</span>
            </NavLink>
          </li>
        </div>
      </div>
      <header data-aos="fade-down" data-aos-duration="3000">
        <nav>
          <ul className="nav-items">
            <div className="items">
              <div className="logo">
                <img src={logo} alt="logo img" />
                <p className="logoname">uzbedev</p>
              </div>
              <div className="links">
                <li className="link-item">
                  <NavLink activeClassName="active" to="/" onClick={closeNav}>
                    <span className="panjara">#</span>
                    <span className="nav-title">home</span>
                  </NavLink>
                </li>
                <li className="link-item">
                  <NavLink
                    activeClassName="active"
                    to="/projects"
                    onClick={closeNav}
                  >
                    <span className="panjara">#</span>
                    <span className="nav-title">projects</span>
                  </NavLink>
                </li>
                <li className="link-item">
                  <NavLink
                    activeClassName="active"
                    to="/about-me"
                    onClick={closeNav}
                  >
                    <span className="panjara">#</span>
                    <span className="nav-title">about-me</span>
                  </NavLink>
                </li>
                <li className="link-item">
                  <NavLink
                    activeClassName="active"
                    to="/contacts"
                    onClick={closeNav}
                  >
                    <span className="panjara">#</span>
                    <span className="nav-title">contacts</span>
                  </NavLink>
                </li>
              </div>
            </div>
            <img
              src={toggle}
              alt="toggle img"
              onClick={openNav}
              className="toggle"
            />
          </ul>
        </nav>
      </header>
    </>
  );
}

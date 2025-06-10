import React from "react";
// import logo from "./../../../img/Style=Default.svg";
import logo from "./../../../img/uzbedev-logo.png";
import "./nav.css";
import { Link } from "react-router-dom";
import toggle from "./../../../img/icons/toggle.svg";
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
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <li className="link-item">
            <a href="/">
              <span className="panjara">#</span>
              <span style={{ color: "#fff" }}>home</span>
            </a>
          </li>
          <li className="link-item">
            <a href="/projects">
              <span className="panjara">#</span>projects
            </a>
          </li>
          <li className="link-item">
            <a href="/about-me">
              <span className="panjara">#</span>about-me
            </a>
          </li>
          <li className="link-item">
            <a href="/contacts">
              <span className="panjara">#</span>contacts
            </a>
          </li>
        </div>
      </div>
      <header data-aos="fade-down" data-aos-duration="3000">
        <nav>
          <ul className="nav-items">
            <div className="logo">
              <img src={logo} alt="logo img" />
              <p className="logoname">uzbedev</p>
            </div>
            <div className="links">
              <li className="link-item">
                <a href="/">
                  <span className="panjara">#</span>
                  <span style={{ color: "#fff" }}>home</span>
                </a>
              </li>
              <li className="link-item">
                <a href="/projects">
                  <span className="panjara">#</span>projects
                </a>
              </li>
              <li className="link-item">
                <a href="/about-me">
                  <span className="panjara">#</span>about-me
                </a>
              </li>
              <li className="link-item">
                <a href="/contacts">
                  <span className="panjara">#</span>contacts
                </a>
              </li>
            </div>
              <img src={toggle} alt="toggle img" onClick={openNav}  className="toggle"/>
          </ul>
        </nav>
      </header>
    </>
  );
}

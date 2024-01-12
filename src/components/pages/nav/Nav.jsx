import React from "react";
import logo from "./../../../img/Style=Default.svg";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header data-aos="fade-down" data-aos-duration="3000">
      <nav>
        <ul className="nav-items">
          <div className="logo">
            <img src={logo} alt="logo img" />
            <p className="logoname">Uzbedev</p>
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
        </ul>
      </nav>
      <div className="clearfix"></div>
    </header>
  );
}

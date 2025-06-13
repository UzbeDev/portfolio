import React from "react";
import "./project.css";
import project1 from "./../../../img/project1.jpg";
import project2 from "./../../../img/project2.jpg";
import project3 from "./../../../img/project3.jpg";
import dots from "./../../../img/Dots.svg";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Project() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  return (
    <section className="projects-section">
      <div className="title" data-aos="fade-right" data-aos-duration="2000">
        <span className="panjara">/</span>projects
      </div>
      <p className="ldesc" data-aos="fade-left" data-aos-duration="2000">
        List of my projects
      </p>
      <div className="title" data-aos="fade-right" data-aos-duration="2000">
        <span className="panjara">#</span>completed-apps
      </div>
      <img
        src={dots}
        className="dotpattern"
        alt="dots pattern"
        data-aos="fade-right"
        data-aos-duration="3000"
      />{" "}
      {/* <div className="cards"> */}
        <Carousel
          arrows={false} // Disable default arrows
          swipeable
          autoPlay
          draggable
          showDots={false}
          infinite
          autoPlaySpeed={2000}
          keyBoardControl
          pauseOnHover
          slidesToSlide={1}
          containerClass="custom-carousel-container"
          itemClass="carousel-card cards"
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 1024, min: 600 },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 600, min: 0 },
              items: 1,
              partialVisibilityGutter: 20,
            },
          }}
        >
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="custom-card"
          >
            <div className="custom-card-header">
              <img src={project1} alt="project img" />
              <p>HTML CSS REACT</p>
            </div>
            <div className="custom-card-body">
              <h1>Finsweet</h1>
              <p>Project for choosing great font pairs</p>
            </div>
            <div className="card-footer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://uzbedev.github.io/finsweet"
                type="button"
                className="btn-button live"
              >
                {"Live <~>"}
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/UzbeDev/finsweet"
                type="button"
                className="btn-button cashed"
              >
                {"Source >="}
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="custom-card"
          >
            <div className="custom-card-header">
              <img src={project2} alt="project img" />
              <p>HTML CSS REACT</p>
            </div>
            <div className="custom-card-body">
              <h1>Pro Auto</h1>
              <p>Project for online auto shop</p>
            </div>
            <div className="card-footer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://uzbedev.github.io/proauto"
                type="button"
                className="btn-button live"
              >
                {"Live <~>"}
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/UzbeDev/proauto"
                type="button"
                className="btn-button cashed"
              >
                {"Source >="}
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="custom-card"
          >
            <div className="custom-card-header">
              <img src={project3} alt="project img" />
              <p>HTML CSS REACT</p>
            </div>
            <div className="custom-card-body">
              <h1>Trip Goal</h1>
              <p>Project for trip company</p>
            </div>
            <div className="card-footer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://uzbedev.github.io/tripgoal"
                type="button"
                className="btn-button live"
              >
                {"Live <~>"}
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/UzbeDev/tripgoal"
                type="button"
                className="btn-button cashed"
              >
                {"Source >="}
              </a>
            </div>
          </div>
        </Carousel>
      {/* </div> */}
      <div
        className="square"
        data-aos="fade-left"
        data-aos-duration="3000"
      ></div>
      <div
        className="square2"
        data-aos="fade-right"
        data-aos-duration="3000"
      ></div>
      <div className="title" data-aos="fade-right" data-aos-duration="2000">
        <span className="panjara">#</span>small-projects
      </div>
      <img
        src={dots}
        className="dotpattern2"
        alt="dots pattern"
        data-aos="fade-left"
        data-aos-duration="3000"
      />
      <div className="cards">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="custom-card"
        >
          <div className="custom-card-header">
            <p>HTML CSS REACT</p>
          </div>
          <div className="custom-card-body">
            <h1>LasesVPN</h1>
            <p>Front-end of single paged VPN website with no mobile version.</p>
          </div>
          <div className="card-footer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://uzbedev.github.io/lasesVPN"
              type="button"
              className="btn-button live"
            >
              {"Live <~>"}
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="custom-card"
        >
          <div className="custom-card-header">
            <p>HTML CSS REACT</p>
          </div>
          <div className="custom-card-body">
            <h1>TransitFlow</h1>
            <p>
              Front-end of logistic company with no other pages and no mobile
              version.
            </p>
          </div>
          <div className="card-footer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://uzbedev.github.io/transitflow"
              type="button"
              className="btn-button live"
            >
              {"Live <~>"}
            </a>
          </div>
        </div>
      </div>
      <img
        src={dots}
        className="dotpattern3"
        alt="dots pattern"
        data-aos="fade-right"
        data-aos-duration="3000"
      />
    </section>
  );
}

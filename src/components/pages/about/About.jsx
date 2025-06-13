import React from "react";
import "./about.css";
import dots from "./../../../img/Dots.svg";
import middleDots from "../../../img/middledots.svg";
import person2 from "./../../../img/person2.png";
import pinkPat from "./../../../img/Style=Outline.svg";
import { useMediaQuery } from "react-responsive";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function About() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  return (
    <section className="about-me-section">
      <div className="title" data-aos="fade-right" data-aos-duration="2000">
        <span className="panjara">/</span>about-me
      </div>
      <p className="ldesc" data-aos="fade-left" data-aos-duration="2000">
        Who am i?
      </p>
      <div className="first">
       
        <div className="pattern">
          <img
            src={person2}
            alt=""
            className="person2"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <img
            src={dots}
            alt="Patternimg"
            className="img-1"
            data-aos="fade-down-right"
            data-aos-duration="3000"
          />
          <img
            src={middleDots}
            alt="Patternimg"
            className="img-2"
            data-aos="zoom-in"
            data-aos-duration="3000"
          />
          <img
            src={pinkPat}
            alt="pink pat"
            className="pinkPat"
            data-aos="fade-left"
            data-aos-duration="3000"
          ></img>
          <img
            src={dots}
            alt="Patternimg"
            className="img-3"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          />
        </div>{" "}
        <div className="text" data-aos="zoom-in-down" data-aos-duration="2000">
          <div className="desc">
            <p className="part-1">Hello, i’m Akbar!</p>
            <div className="part-2">
              I’m a nearly self-taught full-stack developer based in Karshi,
              Uzbekistan. I can develop responsive websites from scratch and
              raise them into modern user-friendly web experiences.
            </div>
            <div className="part-2">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </div>
          </div>
        </div>
      </div>
      {/* <img src={dots} alt="dot pattern" className="dotPatImage" /> */}
      <div className="skills">
        <div className="title" data-aos="fade-right" data-aos-duration="2000">
          <span className="panjara">#</span>skills
        </div>
        <div className="boxes">
          
            <div
              className="box"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <p className="title">Languages</p>
              <div className="line"></div>
              <p className="desc">JavaScript Python Java </p>
            </div>
            <div className="box" data-aos="zoom-in-up" data-aos-duration="2000">
              <p className="title">Other</p>
              <div className="line"></div>
              <p className="desc">HTML CSS SCSS</p>
            </div>
            <div
              className="box"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <p className="title">Tools</p>
              <div className="line"></div>
              <p className="desc">
                VSCode Kali Linux Git Intellij-Idea Pycharm{" "}
              </p>
            </div>
            <div className="box" data-aos="zoom-in-up" data-aos-duration="2000">
              <p className="title">Databases</p>
              <div className="line"></div>
              <p className="desc">SQLite PostgreSQL</p>
            </div>
            <div
              className="box"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <p className="title">Frameworks</p>
              <div className="line"></div>
              <p className="desc">React Django Aiogram</p>
            </div>
        </div>
      </div>
      <div className="funfact">
        <div className="text">
          <div className="title" data-aos="fade-right" data-aos-duration="2000">
            <span className="panjara">#</span>my-hobbies
          </div>
          <div className="boxes">
            <div className="box" data-aos="flip-up" data-aos-duration="2500">
              <p className="desc">
                Playing <span className="l">chess</span>.
              </p>
            </div>
            <div className="box" data-aos="flip-down" data-aos-duration="2500">
              <p className="desc">
                Listening <span className="l">music</span>.
              </p>
            </div>
            <div className="box" data-aos="flip-up" data-aos-duration="2500">
              <p className="desc">
                Creating new <span className="l">web projects</span>.
              </p>
            </div>
            <div className="box" data-aos="flip-down" data-aos-duration="2500">
              <p className="desc">
                Watching <span className="l">movies</span> in English.
              </p>
            </div>
          </div>
        </div>
        <div className="pattern">
          <img
            src={dots}
            alt="dot pattern"
            className="SkillDotPat"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
          <img
            src={pinkPat}
            alt="dot pattern"
            className="SkillpinkPat"
            data-aos="fade-left"
            data-aos-duration="3000"
          />
        </div>
      </div>
    </section>
  );
}

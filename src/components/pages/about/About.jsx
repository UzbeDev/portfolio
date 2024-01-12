import React from "react";
import "./about.css";
import dots from "./../../../img/Dots.svg";
import middleDots from "../../../img/middledots.svg";
import pinkPat from "./../../../img/Style=Outline.svg";
export default function About() {
  return (
    <section className="about-me-section">
      <div className="title" data-aos="fade-right" data-aos-duration="2000">
        <span className="panjara">/</span>about-me
      </div>
      <p className="ldesc" data-aos="fade-left" data-aos-duration="2000">
        Who am i?
      </p>
      <div className="first">
        <img
          src={middleDots}
          alt="middle dot pattern"
          className="mid-dot"
          data-aos="fade-right"
          data-aos-duration="3000"
        />
        <div className="text" data-aos="zoom-in-down" data-aos-duration="2000">
          <div className="desc">
            <p className="part-1">Hello, i’m Elias!</p>
            <div className="part-2">
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </div>
            <div className="part-2">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </div>
          </div>
        </div>{" "}
        <div className="pattern">
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
        </div>
      </div>
      {/* <img src={dots} alt="dot pattern" className="dotPatImage" /> */}
      <div className="skills">
        <div className="title" data-aos="fade-right" data-aos-duration="2000">
          <span className="panjara">#</span>skills
        </div>
        <div className="boxes">
          <div className="box" data-aos="zoom-in-down" data-aos-duration="2000">
            <p className="title">Languages</p>
            <div className="line"></div>
            <p className="desc">JavaScript Python Java </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-duration="2000">
            <p className="title">Other</p>
            <div className="line"></div>
            <p className="desc">HTML CSS SCSS</p>
          </div>
          <div className="box" data-aos="zoom-in-down" data-aos-duration="2000">
            <p className="title">Tools</p>
            <div className="line"></div>
            <p className="desc">VSCode Kali Linux Git Intellij-Idea Pycharm </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-duration="2000">
            <p className="title">Databases</p>
            <div className="line"></div>
            <p className="desc">SQLite PostgreSQL</p>
          </div>
          <div className="box" data-aos="zoom-in-down" data-aos-duration="2000">
            <p className="title">Frameworks</p>
            <div className="line"></div>
            <p className="desc">React Django Spring-Boot</p>
          </div>
        </div>
      </div>
      <div className="funfact">
        <div className="text">
          <div className="title" data-aos="fade-right" data-aos-duration="2000">
            <span className="panjara">#</span>my-fun-facts
          </div>
          <div className="boxes">
            <div className="box" data-aos="flip-up" data-aos-duration="2500">
              <p className="desc">
                I like <span className="l">autumn</span>.
              </p>
            </div>
            <div className="box" data-aos="flip-down" data-aos-duration="2500">
              <p className="desc">
                Sometimes i play <span className="l">chess</span>.
              </p>
            </div>
            <div className="box" data-aos="flip-up" data-aos-duration="2500">
              <p className="desc">
                I am still in <span className="l">school</span>
              </p>
            </div>
            <div className="box" data-aos="flip-down" data-aos-duration="2500">
              <p className="desc">
                I have <span className="l">four siblings</span>
              </p>
            </div>
            <div className="box" data-aos="flip-up" data-aos-duration="2500">
              <p className="desc">
                My favorite movie is <span className="l">The Moon Knight</span>
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

import iconForPerson from "./../../../img/logo.png";
import dots from "./../../../img/Dots.svg";
import project1 from "./../../../img/project1.png";
import square from "./../../../img/square.svg";
import outlinepatsvg from "./../../../img/outlinepatsvg.svg";
import "./app.css";
import middleDots from "./../../../img/middledots.svg";
import telegram from "./../../../img/icons/Telegram.svg";
import email from "./../../../img/icons/Email.svg";

function App() {
  return (
    <>
      <section className="intro-section">
        <div className="intro">
          <div className="welcome">
            <p className="title" data-aos="zoom-in" data-aos-duration="1000">
              Uzbedev is <span>full-stack</span> developer
            </p>
            <p className="desc" data-aos="zoom-in" data-aos-duration="1000">
              He crafts responsive websites where <br /> technologies meet
              creativity
            </p>
            <a href="https://t.me/Network_Person">
              <button
                type="button"
                className="btn-button"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                Contact me!!
              </button>
            </a>
          </div>
          <div className="personImg">
            {/* <img className='person' src={person} alt="Person" /> */}
            <img
              className="icon"
              src={iconForPerson}
              alt="icon"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            />
            <img
              className="dot"
              src={dots}
              alt="dots"
              data-aos="fade-down-left"
              data-aos-duration="2000"
            />
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="text-box">
          <div className="main-box">
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              With great power comes great electricity bill
            </p>
          </div>
          <div className="mini-box">
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              - Dr. Who
            </p>
          </div>
          <div className="tipa-box"></div>
          <div className="clearfix"></div>
        </div>
      </section>
      <section className="project-section">
        <div className="project-title">
          <div
            className="title-main"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text">
              <span className="panjara">#</span>projects
            </p>
            <div className="line"></div>
          </div>
          <a
            href="/projects"
            className="view-all"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            View all {"~~>"}
          </a>
        </div>
        <img
          src={dots}
          className="dotpattern"
          alt="dots pattern"
          data-aos="fade-right"
          data-aos-duration="3000"
        />
        <div className="cards">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="custom-card"
          >
            <div className="custom-card-header">
              <img src={project1} alt="project img" width={423} />
              <p>HTML CSS REACT</p>
            </div>
            <div className="custom-card-body">
              <h1>ChertNodes</h1>
              <p>Importand project</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn-button live">
                {"Live <~>"}
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="custom-card"
          >
            <div className="custom-card-header">
              <img src={project1} alt="project img" width={423} />
              <p>HTML CSS REACT</p>
            </div>
            <div className="custom-card-body">
              <h1>ChertNodes</h1>
              <p>Importand project</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn-button live">
                {"Live <~>"}
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="custom-card"
          >
            <div className="custom-card-header">
              <img src={project1} alt="project img" width={423} />
              <p>HTML CSS REACT</p>
            </div>
            <div className="custom-card-body">
              <h1>ChertNodes</h1>
              <p>Importand project</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn-button live">
                {"Live <~>"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="square"
          data-aos="fade-left"
          data-aos-duration="3000"
        ></div>
      </section>

      <section className="skill-section">
        <div
          className="skill-title"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="text">
            <span className="panjara">#</span>skills
          </p>
          <div className="line"></div>
        </div>
        <div className="main">
          <div className="patterns">
            <img
              src={dots}
              alt="dots"
              className="img1"
              width={"63px"}
              height={"63px"}
              data-aos="fade-up-right"
              data-aos-duration="2000"
            />
            <img
              src={square}
              alt="square"
              className="img2"
              width={"86px"}
              height={"86px"}
              data-aos="fade-up-left"
              data-aos-duration="2000"
            />
            <img
              src={dots}
              alt="dots"
              className="img3"
              width={"63px"}
              height={"63px"}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            />
            <img
              src={outlinepatsvg}
              alt="pattern"
              className="img44"
              data-aos="fade-down-left"
              data-aos-duration="2000"
            />
            <img
              src={square}
              alt="square"
              width={"52px"}
              height={"52px"}
              className="img5"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            />
          </div>
          <div className="main-side">
            <div className="box" data-aos="fade-left" data-aos-duration="2000">
              <p className="title">Languages</p>
              <div className="line"></div>
              <p className="desc">JavaScript Python Java </p>
            </div>

            <div className="box" data-aos="zoom-in" data-aos-duration="2000">
              <p className="title">Frameworks</p>
              <div className="line"></div>
              <p className="desc">React Spring-Boot</p>
            </div>

            <div className="box" data-aos="fade-right" data-aos-duration="2000">
              <p className="title">Tools</p>
              <div className="line"></div>
              <p className="desc">VSCode Linux Git Intellij-Idea Pycharm</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me-section">
        <div className="title" data-aos="fade-right" data-aos-duration="1000">
          <p className="text">
            <span className="panjara">#</span>about-me
          </p>
          <div className="line"></div>
        </div>
        <div className="main">
          <div className="text">
            <div
              alt="square"
              className="half-square"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
            <div
              className="desc"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <p className="part-1">Hello, i’m Elias!</p>
              <div className="part-2">
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </div>
              <div className="part-2">
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </div>
              <a href="/about-me">
                <button type="button" class="btn-button">
                  {"Read more ->"}
                </button>
              </a>
            </div>
          </div>
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
              src={dots}
              alt="Patternimg"
              className="img-3"
              data-aos="fade-up-left"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div
          className="contact-title"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="text">
            <span className="panjara">#</span>contacts
          </p>
          <div className="line"></div>
        </div>
        <div className="pattern">
          <img
            src={dots}
            alt="dot pattern img"
            className="dotImg"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>
        <div className="main">
          <p className="desc">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <div className="box" data-aos="fade-left" data-aos-duration="3000">
            <p className="box-title">Message me here</p>
            <div className="item">
              <img src={telegram} alt="telegram icon" className="item-icon" />
              <p className="desc">@Network_Person</p>
            </div>
            <div className="item">
              <img src={email} alt="email icon" className="item-icon" />
              <p className="desc">uzbedev@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;

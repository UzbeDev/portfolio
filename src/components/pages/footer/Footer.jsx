import "./footer.css";
import telegram from "./../../../img/icons/Telegram.svg";
import email from "./../../../img/icons/Email.svg";
import github from "./../../../img/icons/Github.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="container" >
      <div className="footer-line"></div>
      <div className="main">
        <div className="text">
          <p className="desc">uzbedev@gmail.com</p>
          <p className="ldesc">Web Full Stack Developer</p>
        </div>
        <div className="media">
          <p className="title">Media</p>
          <div className="social">
            <Link to="https://t.me/Network_Person">
              <img src={telegram} alt="telegram icon" />
            </Link>
            <Link to="mailto:uzbedev@gmail.com?subject=Assalamu%20Alaykum">
              <img src={email} alt="email icon" />
            </Link>
            <Link to="https://github.com/uzbedev">
              <img src={github} alt="github icon" />
            </Link>
          </div>
        </div>
      </div>
      <p className="copyright">© Copyright 2025. Made by uzbedev</p>
    </footer>
  );
}
export default Footer;

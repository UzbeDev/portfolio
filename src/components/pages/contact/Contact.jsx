import React from "react";
import "./contact.css";
import email from "../../../img/icons/Email.svg";
import telegram from "../../../img/icons/Telegram.svg";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="title" data-aos="fade-right" data-aos-duration="2000">
        <span className="panjara">/</span>contacts
      </div>
      <p className="ldesc" data-aos="fade-left" data-aos-duration="2000">
        Who am i?
      </p>
      <div className="first">
        <p className="desc" data-aos="zoom-in-right" data-aos-duration="2000">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="box" data-aos="zoom-in-left" data-aos-duration="2000">
          <p className="desc">Message me here:</p>
          <div className="item">
            <img src={telegram} alt="telegram svg" />
            <p className="desc d">@Network_Person</p>
          </div>
          <div className="item">
            <img src={email} alt="email svg" />
            <p className="desc d">uzbedev@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

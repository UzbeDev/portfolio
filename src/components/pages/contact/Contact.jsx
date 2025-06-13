import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import email from "../../../img/icons/Email.svg";
import telegram from "../../../img/icons/Telegram.svg";
import { motion } from "framer-motion";
import contactIMG from "../../../img/contact.png";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useMediaQuery } from "react-responsive";
export default function Contact() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [visible, setVisible] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setNotificationText("❌ Please complete the CAPTCHA!");
      showNotification();
      return;
    }

    e.preventDefault();

    emailjs
      .send(
        "service_obz3xsp",
        "template_w1avvt9",
        formData,
        "PqvKiHfjCkjA6Ntjm"
      )
      .then(() => {
        setNotificationText("✅ Message Sent!");
        showNotification();
        setFormData({ name: "", email: "", message: "" }); // Clears inputs

        e.target.reset(); // Clears the actual input fields in the form
      })
      .catch(() => {
        setNotificationText("❌ Failed to Send Message!");
        showNotification();
      });
  };

  const showNotification = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="title" data-aos="fade-right" data-aos-duration="2000">
        <span className="panjara">/</span>contacts
      </div>
      <p className="ldesc" data-aos="fade-left" data-aos-duration="2000">
        Who am I?
      </p>
      <div className="first">
        <p className="desc" data-aos="zoom-in-right" data-aos-duration="2000">
          I’m interested in freelance opportunities. However, if you have other
          requests or questions, don’t hesitate to contact me!
          <p className="ldesc" data-aos="fade-left" data-aos-duration="2000">
            You can message me here:
          </p>
        </p>
      {(isDesktopOrLaptop || isBigScreen) && (
        <div className="box" data-aos="zoom-in-left" data-aos-duration="2000">
          <p className="desc">Message me here:</p>
          <div className="item">
            <img src={telegram} alt="telegram icon" />
            <Link className="desc d" to="https://t.me/Network_Person">
              {" "}
              @Network_Person
            </Link>
          </div>
          <div className="item">
            <img src={email} alt="email icon" />
            <Link
              className="desc d"
              to="mailto:uzbedev@gmail.com?subject=Assalamu%20Alaykum"
            >
              uzbedev@gmail.com
            </Link>
          </div>
        </div>
      )}
    </div>
      <div className="contact-part">
        <form onSubmit={handleSubmit} className="contact-form">
          <label
            className="form-label"
            htmlFor="name"
            style={{ marginTop: "0px" }}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            data-aos="fade-left"
            data-aos-duration="3000"
          />

          <label
            className="form-label"
            htmlFor="email"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            data-aos="fade-left"
            data-aos-duration="3000"
          />

          <label
            className="form-label"
            htmlFor="message"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Message:
          </label>
          <textarea
            className="form-input"
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
            data-aos="fade-left"
            data-aos-duration="3000"
          ></textarea>
          <ReCAPTCHA
            sitekey="6LcP1FwrAAAAABXO5-WTuEaYDvTVbeXHRSgt3074"
            onChange={(value) => setCaptchaValue(value)}
          />
          <button
            type="submit"
            className="btn-button"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Send Message
          </button>
        </form>
        {(isDesktopOrLaptop || isBigScreen) && (
          <img
            src={contactIMG}
            alt="contact illustration"
            width="500px"
            data-aos="fade-left"
            data-aos-duration="3000"
          />
        )}
      </div>

      {/* Notification */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 999 }}>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#282c33",
              color: "#c778dd",
              padding: "10px 20px",
              border: "1px solid #c778dd",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontFamily: "Fira Code",
            }}
          >
            {notificationText}
          </motion.div>
        )}
      </div>
    </section>
  );
}

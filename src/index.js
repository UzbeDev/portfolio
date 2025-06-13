import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/pages/intro/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/pages/project/Project";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Nav from "./components/pages/nav/Nav";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/pages/footer/Footer";
import Aos from "aos";
import Loading from "./components/Loading";
import { useMediaQuery } from "react-responsive";

// const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
(function (d) {
  d.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
})(document);

Aos.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
function AppWrapper() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // You can use isTabletOrMobile in your component as needed

  return (
    <div>
      <BrowserRouter>
        <Loading />
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      {
        isTabletOrMobile ? null : (
          <>
            <div id="cursor">
              <div id="cursor-outer"></div>
              <div id="cursor-inner"></div>
            </div>
            <AnimatedCursor
              color="255,255,255"
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={1.7}
              outerAlpha={0}
              outerStyle={{
                border: "3px solid #c778dd",
              }}
            />
          </>
        )
      }
      
    </div>
  );
}

root.render(<AppWrapper />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

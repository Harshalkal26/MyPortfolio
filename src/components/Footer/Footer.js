import React from "react";
import "./Footer.css";
import img1 from "./icons8-github-24.png";
import img2 from "./icons8-linkedin-48.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="other">
          <h4>Harshal Kalgaonakr</h4>
          <p> © 2023 Harshal Kalgaonakr All rights reserved</p>
          <div className="socialmedia">
            <a
              href="https://github.com/Harshalkal26"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={img1} alt="c" width="40" height="40" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/harshal-kalgaonkar-2410a11a9/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={img2} alt="c" width="40" height="40" />{" "}
            </a>
          </div>
        </div>
        <div className="getintouch">
          <h4>Get In Touch</h4>
          <p className="email">harshal.kal25@gmail.com</p>
          <p className="mobile">+91 9302693101</p>
        </div>
        <div className="aboutb">
          <h4>About</h4>
          <a
            className="resume"
            href="https://drive.google.com/file/d/1pHR086-UgysxwrFiPu471WOdIreBSKSq/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
